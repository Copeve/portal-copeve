import styles from './cabecalho.module.css';
import Image from 'next/image';
import Link from 'next/link';
export default function Cabecalho(){
    return(
        <header className={styles.cabecalho}>
            <Image src="/images/ufmg-social.jpg" alt="imagem logo" width={200} height={150} />
            <nav>
                <Link href="#">Concursos</Link>
                <Link href="#">Calendário</Link>
                <Link href="#">Notícias</Link>
                <Link href="#">Processos Seletivos Anteriores</Link>
                <Link href="#">A COPEVE</Link>
                <Link href="#">UFMG</Link>
            </nav>
            <input type="search" name="busca" id="busca" />
        </header>
    )
}