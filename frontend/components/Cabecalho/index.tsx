
import styles from './cabecalho.module.css';
import Image from 'next/image';
import {BiSearch} from 'react-icons/bi';
import { FaBars } from 'react-icons/fa';
import { RxAccessibility } from 'react-icons/rx';
import { RiContrastFill } from 'react-icons/ri';
import { useRef, MutableRefObject } from 'react';
import Menu from '../Menu';


export default function Cabecalho(props:any){
    // Crie uma ref usando o hook useRef()
    const menuRef = useRef<HTMLDivElement>(null);
    const handleClick=() =>{
      if (menuRef.current) {
        if( menuRef.current.style.display=="block"){
            menuRef.current.style.display="none"
        }else{
            menuRef.current.style.display="block"
        }
      }
    };

  // Use a ref para acessar o elemento desejado
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
        <div className={styles.cabecalhoMobile} >
            <p className={styles.iconeMenu} onClick={handleClick}><FaBars/></p>
            <div className={styles.icones}>
                <p className={styles.acessibilidadeLogoMobile}>
                            <RxAccessibility />
                        </p>
                <p className={styles.contrasteLogoMobile}><RiContrastFill/></p>
                <p className={styles.pesquisarLupaMobile}><BiSearch/></p>
            </div>
        <div className={styles.menuCabecalho}>
            <Menu ref={menuRef} />
        </div>
        </div>
        </>
    )
}
