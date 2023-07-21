import styles from "./CardConcursoResultado.module.css";
import { RiFileList2Line } from 'react-icons/ri';

interface Card{
    titulo:string;
    link:string;
    ano:number;
}

export default function Card(props:Card){
    return(
        <>
        <div className={styles.card}>
            <a href={props.link} >
            <RiFileList2Line className={styles.icone} />
                <p className={styles.titulo}>{props.titulo}</p>
                <p className={styles.titulo}>{props.ano}</p>
            </a>
        </div>
        </>
    )
}