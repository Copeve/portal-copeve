import styles from './card.module.css';
import { RiFileList2Line } from 'react-icons/ri';

interface Card{
    titulo:string;
    link:string
}

export default function Card(props:Card){
    return(
        <>
        <div className={styles.card}>
            <a href={props.link} >
            <RiFileList2Line className={styles.icone} />
                <p className={styles.titulo} >{props.titulo}</p>
            
            </a>
        </div>
        </>
    )
}