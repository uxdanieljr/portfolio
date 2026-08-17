import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { useLang } from '../context/LangContext';
import { useLocation } from 'react-router-dom';

export function useMetadata({ title, description, canonicalPath }) {
  const { lang } = useLang();
  const location = useLocation();

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const siteUrl = 'https://danielcarvalhodesign.com';
  // Check if we are on the test subdomain or prod to set noindex. But the doc says:
  // "No subdomínio teste1.danielcarvalhodesign.com: aplicar noindex. No domínio de produção: não aplicar"
  // This is better done in Hostinger / Cloudflare or globally via a window.location check.
  const isTestDomain = typeof window !== 'undefined' && window.location.hostname === 'teste1.danielcarvalhodesign.com';

  const fullCanonical = `${siteUrl}${canonicalPath || location.pathname}`;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={fullCanonical} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={fullCanonical} />
      
      {isTestDomain && <meta name="robots" content="noindex, nofollow" />}
    </Helmet>
  );
}
