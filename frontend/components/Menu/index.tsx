import styles from './menu.module.css';
import Link from 'next/link';
import { ForwardedRef, MutableRefObject, forwardRef, useRef } from 'react';


const Menu:any=forwardRef<HTMLDivElement>((props, ref:ForwardedRef<HTMLDivElement>)=>{
    return(
        <>
        <div className={styles.menu} ref={ref}>
            <ul className={styles.menuLista} >
                <li className={styles.listaItem}>
                    <Link href='/' className={styles.itemLink}>início</Link>
                </li>
                    <li className={styles.listaItem}>
                        <Link href='/' className={styles.itemLink}>concursos</Link>
                    </li>
                    <li className={styles.listaItem}>
                        <Link href='/' className={styles.itemLink}>notícias</Link>
                    </li>
                    <li className={styles.listaItem}>
                        <Link href='/' className={styles.itemLink}>contato</Link>
                    </li>
                    <li className={styles.listaItem}>
                        <Link href='/' className={styles.itemLink}>concursos anteriores</Link>
                    </li>
                    <li className={styles.listaItem}>
                        <Link href='/' className={styles.itemLink}>a copeve</Link>
                    </li>
                    <li className={styles.listaItem}>
                        <Link href='/' className={styles.itemLink}>ufmg</Link>
                    </li>
            </ul>
        </div>
        </>
    )
}
)
Menu.displayName = 'Menu';
export default Menu;