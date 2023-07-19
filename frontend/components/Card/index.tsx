import styles from './card.module.css';
import { RiFileList2Line } from 'react-icons/ri';

interface Card{
    titulo:string
}

export default function Card(props:Card){
    return(
        <>
        <div className={styles.card}>
            <RiFileList2Line className={styles.icone} />
            <a className={styles.titulo} href="#">{props.titulo}</a>
        </div>
        </>
    )
}