import Head from 'next/head';

export function AppHead(): JSX.Element {
  return (
    <Head>
      <title>Network</title>
      <meta name='og:title' content='Network' />
      <link rel='icon' href='/latter-n.png' />
      <link rel='manifest' href='/site.webmanifest' key='site-manifest' />
      <meta name='network:site' content='@ccrsxx' />
      <meta name='network:card' content='' />
    </Head>
  );
}
