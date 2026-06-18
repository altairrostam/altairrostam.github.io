import { ExternalLink, Mail } from '@lucide/astro';

export const contactLinks = [
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/altairrostam',
    icon: ExternalLink,
  },
  {
    label: 'GitHub',
    href: 'https://github.com/altairrostam',
    icon: ExternalLink,
  },
  {
    label: 'Email',
    href: 'mailto:hello@altairrostam.com',
    icon: Mail,
  },
] as const;
