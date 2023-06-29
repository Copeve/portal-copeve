import { AppProps } from 'next/app';
import Head from 'next/head';
import '../styles/global.css';

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        {/* Adicione quaisquer metadados adicionais ou links externos aqui */}
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default App;
