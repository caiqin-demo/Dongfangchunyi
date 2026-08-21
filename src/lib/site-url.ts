const productionSiteUrl = "https://www.easternpurity.com/";

export function getSiteUrl(): URL {
  const configuredUrl = process.env.SITE_URL ?? productionSiteUrl;

  return new URL(configuredUrl.endsWith("/") ? configuredUrl : `${configuredUrl}/`);
}
