import '../styles/globals.css';
import Layout from '../components/Layout';
import Head from 'next/head';

const schemaMarkup = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'MoveX Media',
  description: 'Perth-based digital marketing agency specialising in Google Ads, Facebook, social media, email marketing, and websites for health and allied health practices.',
  url: 'https://movex.media',
  logo: 'https://movex.media/logo.png',
  image: 'https://movex.media/og-image.png',
  email: 'admin@movex.media',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Perth',
    addressRegion: 'WA',
    addressCountry: 'AU',
  },
  areaServed: {
    '@type': 'State',
    name: 'Western Australia',
  },
  serviceType: [
    'Google Ads Management',
    'Facebook Advertising',
    'Social Media Management',
    'Email Marketing',
    'Website Development',
  ],
  knowsAbout: ['Allied Health Marketing', 'Physiotherapy Marketing', 'AHPRA Advertising Compliance'],
  sameAs: [],
};

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🚀</text></svg>" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
        />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
