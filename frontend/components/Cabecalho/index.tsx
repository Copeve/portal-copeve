import Link from 'next/link';
import styles from './cabecalho.module.css';
import Image from 'next/image';
import {BiSearch} from 'react-icons/bi';
import { FaBars } from 'react-icons/fa';
import { RxAccessibility } from 'react-icons/rx';
import { RiContrastFill } from 'react-icons/ri';
import Menu from '../Menu';
import { useRef } from 'react';


export default function Cabecalho(){
    const elementoRef = useRef<HTMLDivElement>();

    const handleClick = () => {
        if(elementoRef.current){
            elementoRef.current?.classList.add('menuMobile');
            console.log(elementoRef);
            console.log("a");

        }
    };
  
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
                <form action="/" className={styles.pesquisar}>
                    <input className={styles.cabecalhoPesquisar} type="search" name='pesquisa' id='pesquisa' placeholder='Pesquisar'/>
                    <p className={styles.pesquisarLupa}><BiSearch/></p>
                </form>
            </div>
        </header>
        <div className={styles.cabecalhoMobile}>
            <p className={styles.iconeMenu} onClick={handleClick}><FaBars/></p>
            <div className={styles.icones}>
                <p className={styles.acessibilidadeLogoMobile}>
                            <RxAccessibility />
                        </p>
                <p className={styles.contrasteLogoMobile}><RiContrastFill/></p>
                <p className={styles.pesquisarLupaMobile}><BiSearch/></p>
            </div>
        </div>
      
        </>
    )
}