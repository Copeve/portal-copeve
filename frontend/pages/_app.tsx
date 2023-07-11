import { AppProps } from 'next/app';
import Head from 'next/head';
import '../styles/global.css';
import Cabecalho from '../components/Cabecalho';
import Carrossel from '../components/Carrossel';
import Menu from '../components/Menu';
import styles from './styles.module.css';

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        {/* Adicione quaisquer metadados adicionais ou links externos aqui */}
      </Head>
        <Cabecalho/>
        <Carrossel/>
        <Component {...pageProps} />
    </>
  );
}

export default App;
