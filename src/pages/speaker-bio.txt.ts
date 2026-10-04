import { speakerBio } from '../lib/speaker';
import { siteConfig } from '../lib/site';

export const prerender = true;

export function GET() {
  const text = [
    `${siteConfig.owner} - ${siteConfig.role}`,
    'Short bio (English)', speakerBio.short,
    'Full bio (English)', ...speakerBio.long,
    'Krótkie bio (Polski)', speakerBio.shortPl,
    `Profile: ${siteConfig.url}/about/`,
    `Talks: ${siteConfig.url}/speaking/`,
    `Contact: ${siteConfig.links.linkedin}`
  ].join('\n\n');
  return new Response(`${text}\n`, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
}
