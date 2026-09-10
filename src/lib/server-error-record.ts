import type { Instrumentation } from "next";

type RequestErrorRequest = Parameters<Instrumentation.onRequestError>[1];
type RequestErrorContext = Parameters<Instrumentation.onRequestError>[2];

export type ServerErrorRecord = Readonly<{
  digest: string | null;
  errorName: string;
  method: string;
  pathname: string;
  routePattern: string;
}>;

const limits = {
  digest: 128,
  errorName: 100,
  method: 16,
  pathname: 2048,
  routePattern: 512,
} as const;

function sanitize(value: string, limit: number): string {
  return value.replace(/[\r\n]/g, "").slice(0, limit);
}

function getDigest(error: unknown): string | null {
  if (typeof error !== "object" || error === null) return null;

  const descriptor = Object.getOwnPropertyDescriptor(error, "digest");
  return typeof descriptor?.value === "string" ? sanitize(descriptor.value, limits.digest) : null;
}

function getPathname(path: string): string {
  const end = path.search(/[?#]/);
  const pathname = end === -1 ? path : path.slice(0, end);
  return sanitize(pathname || "/", limits.pathname);
}

export function createServerErrorRecord(
  error: unknown,
  request: RequestErrorRequest,
  context: RequestErrorContext,
): ServerErrorRecord {
  const errorName = error instanceof Error && typeof error.name === "string"
    ? sanitize(error.name, limits.errorName)
    : "UnknownError";
  const method = sanitize(request.method, limits.method).toUpperCase() || "UNKNOWN";

  return Object.freeze({
    digest: getDigest(error),
    errorName,
    method,
    pathname: getPathname(request.path),
    routePattern: sanitize(context.routePath, limits.routePattern),
  });
}
