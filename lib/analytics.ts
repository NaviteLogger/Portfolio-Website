/**
 * Microsoft Clarity project id, from clarity.microsoft.com -> your project ->
 * Settings -> Overview.
 *
 * Paste it between the quotes below and commit. The value is public: it ships
 * in the tag URL on every page view, so it belongs in the repo rather than in
 * a secret store. Leave it empty and the site loads no analytics at all.
 *
 * NEXT_PUBLIC_CLARITY_PROJECT_ID still wins when set, which keeps a separate
 * id usable for preview deployments without touching this file.
 */
const projectId = "";

export const clarityProjectId =
  process.env.NEXT_PUBLIC_CLARITY_PROJECT_ID || projectId;
