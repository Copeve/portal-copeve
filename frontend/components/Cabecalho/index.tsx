import Link from 'next/link';
import styles from './cabecalho.module.css';

export default function Cabecalho(){
    const classesDiv = `${styles.container}, ${styles.headerContainer}`
    return(
        <>
        <header className={styles.header}>  
            <div className={classesDiv}>
                <h1 className={styles.headerBrand}>
                    <Link href='#'></Link>
                <i className={styles.iconUfmgM}></i>
                    <span>Incubadora – Template de órgão</span>
                </h1>
                <ul className={styles.headerAccessibility}>
                    <li>
                        <Link href='#'>
                        <i className={styles.iconAccessibility}></i>
                        <span>Acessibilidade</span>  
                        </Link>
                    </li>
                    <li>
                        
                        <Link href="#" >
                            <i className={styles.iconContrast}></i>
                            <span>Contraste</span>
                        </Link>
                    </li>

                    <li className={styles.onlyDesk}>
                  <Link href="#">
                    <span>Mapa do<br/>site</span>
                  </Link>
                    </li>

                    <li className={styles.onlyMobile}>
                        <Link href="#">
                            <i className={styles.iconSearch}></i>
                        </Link>
                    </li>
                </ul>
            </div>
        </header>
        </>
    )
}