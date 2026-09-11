import type { Instrumentation } from "next";

import { createServerErrorRecord } from "@/lib/server-error-record";

export const onRequestError: Instrumentation.onRequestError = (error, request, context) => {
  console.error(JSON.stringify(createServerErrorRecord(error, request, context)));
};
