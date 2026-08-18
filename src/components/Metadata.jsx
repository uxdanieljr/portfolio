import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { useLang } from '../context/LangContext';
import { useLocation } from 'react-router-dom';

export default function Metadata({ title, description, canonicalPath }) {
  const { lang } = useLang();
  const location = useLocation();

  useEffect(() => {
    document.documentElement.lang = lang === 'pt' ? 'pt-BR' : 'en';
  }, [lang]);

  const siteUrl = 'https://danielcarvalhodesign.com';
  // Check if we are on the test subdomain or prod to set noindex. 
  // No subdomínio teste1.danielcarvalhodesign.com: aplicar noindex. No domínio de produção: não aplicar
  const isTestDomain = typeof window !== 'undefined' && window.location.hostname === 'teste1.danielcarvalhodesign.com';

  const fullCanonical = `${siteUrl}${canonicalPath || location.pathname}`;
  
  // Calculate hreflang paths
  const isEn = location.pathname.startsWith('/en');
  const ptPath = isEn ? (location.pathname.replace(/^\/en/, '') || '/') : location.pathname;
  const enPath = isEn ? location.pathname : ('/en' + (location.pathname === '/' ? '' : location.pathname));

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={fullCanonical} />
      
      <link rel="alternate" hrefLang="pt-BR" href={`${siteUrl}${ptPath}`} />
      <link rel="alternate" hrefLang="en" href={`${siteUrl}${enPath}`} />
      <link rel="alternate" hrefLang="x-default" href={`${siteUrl}${ptPath}`} />

      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={fullCanonical} />
      <meta property="og:type" content="website" />
      
      {isTestDomain && <meta name="robots" content="noindex, nofollow" />}
    </Helmet>
  );
}
