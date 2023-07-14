import styles from './card.module.css';

interface Card{
    titulo:string
}

export default function Card(props:Card){
    return(
        <>
        <div className={styles.card}>
            <a className={styles.titulo} href="#">{props.titulo}</a>
        </div>
        </>
    )
}