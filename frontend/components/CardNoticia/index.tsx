
import styles from "./CardNoticia.module.css";
import { format } from 'date-fns';

interface Noticia{
    imagem:number;
    titulo:string;
    data:Date;
    id:number;
}
export default function CardNoticia(props:Noticia){
    const dataFormatada = format(new Date(props.data), 'dd/MM/yyyy HH:mm:ss');
    console.log(props.imagem)
    return(
        <>
         <a href={`/noticia/${props.id}`} className={styles.cardNoticia}>
        <img src={`http://localhost:4000/api/arquivos/download/${props.imagem}}`} alt="imagem da notícia" />
            <h3 className={styles.titulo}>{props.titulo}</h3>
            <p className={styles.data}>{dataFormatada}</p>
         </a>
        </>
    )
}