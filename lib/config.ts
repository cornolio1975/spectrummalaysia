const sanitizeLmsUrl = (url?: string): string => {
  if (!url || url.includes("hostingersite.com") || url.includes("indigo-falcon")) {
    return "https://lms.spectrummalaysia.org/";
  }
  return url.endsWith("/") ? url : `${url}/`;
};

const sanitizeLandingUrl = (url?: string): string => {
  if (!url || url.includes("hostingersite.com") || url.includes("indigo-falcon")) {
    return "https://spectrummalaysia.org/";
  }
  return url.endsWith("/") ? url : `${url}/`;
};

export const LMS_URL = sanitizeLmsUrl(process.env.NEXT_PUBLIC_LMS_URL);
export const LANDING_PAGE_URL = sanitizeLandingUrl(process.env.NEXT_PUBLIC_LANDING_PAGE_URL);

