import Link from 'next/link';
import styles from './cabecalho.module.css';
import Image from 'next/image';
import {BiSearch} from 'react-icons/bi';
import { FaBars } from 'react-icons/fa';
import { RxAccessibility } from 'react-icons/rx';
import { RiContrastFill } from 'react-icons/ri';


export default function Cabecalho(){
    
    return(
        <>
        <header className={styles.cabecalho}>
            <div className={styles.cabecalhoTitulo}>
                <Image className={styles.tituloLogo} src="/images/LogoUfmg.png" alt="imagem logo" width={200} height={150} />
                <p className={styles.tituloBarra}>|</p>
                <h1 className={styles.tituloEscrito}>Comissão Permanente de Vestibular</h1>
            </div>
            <div className={styles.acessibilidade}>
                <div className={styles.cabecalhoAcessibilidade}>
                    <p className={styles.acessibilidadeLogo}>
                        <RxAccessibility />
                    </p>
                    <p className={styles.acessibilidadeEscrito}>Acessibilidade</p>
                </div>
                <div className={styles.contraste}>
                    <p className={styles.contrasteLogo}><RiContrastFill/></p>
                    <p className={styles.constrasteEscrito}>Contraste</p>
                </div>
                <p className={styles.mapa}>Mapa do site</p>
            </div>
            <form action="/" className={styles.pesquisar}>
                <input className={styles.cabecalhoPesquisar} type="search" name='pesquisa' id='pesquisa' placeholder='Pesquisar'/>
                <label className={styles.pesquisarLupa} htmlFor="pesquisa"><BiSearch/></label>
            </form>
        </header>
        </>
    )
}