import Link from 'next/link';
import styles from './cabecalho.module.css';
import Image from 'next/image';
import {BiSearch} from 'react-icons/bi';

export default function Cabecalho(){
    
    return(
        <>
        <header className={styles.cabecalho}>
        <Image className={styles.cabecalhoLogo} src="/images/LogoUfmg.png" alt="imagem logo" width={200} height={150} />
        <p className={styles.cabecalhoBarra}>|</p>
        <h1 className={styles.cabecalhoTitulo}>COPEVE</h1>
        <ul className={styles.cabecalhoLista}>
            <li><Link className={styles.listaItem} href="/">Concursos</Link></li>
            <li ><Link className={styles.listaItem} href="/">Notícias</Link></li>
            <li ><Link className={styles.listaItem} href="/">Contato</Link></li>
            <li ><Link className={styles.listaItem} href="/">Concursos Anteriores</Link></li>
            <li ><Link className={styles.listaItem} href="/">A COPEVE</Link></li>
            <li ><Link className={styles.listaItem} href="/">UFMG</Link></li>
        
     
        </ul>
            <form action="/" className={styles.pesquisar}>
                <input className={styles.cabecalhoPesquisar} type="search" name='pesquisa' id='pesquisa' placeholder='Pesquisar'/>
                <label className={styles.pesquisarLupa} htmlFor="pesquisa"><BiSearch/></label>
            </form>
        </header>
        </>
    )
}