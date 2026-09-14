/**
 * Microsoft Clarity project id, from clarity.microsoft.com -> your project ->
 * Settings -> Overview.
 *
 * Set NEXT_PUBLIC_CLARITY_PROJECT_ID to switch analytics on. The repo default
 * lives in .env.production; .env.local overrides it for local work, and a
 * variable set in the Cloudflare Pages dashboard overrides both, since
 * process.env wins over every .env file. Leave it empty and the site loads no
 * analytics at all.
 *
 * The reference below has to stay a literal for Next.js to inline it into the
 * client bundle at build time.
 */
export const clarityProjectId = process.env.NEXT_PUBLIC_CLARITY_PROJECT_ID ?? "";
