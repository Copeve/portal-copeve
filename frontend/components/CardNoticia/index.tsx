
import styles from "./CardNoticia.module.css";
import { format } from 'date-fns';

interface Noticia{
    titulo:string;
    data:Date;
}
export default function CardNoticia(props:Noticia){
    const dataFormatada = format(new Date(props.data), 'dd/MM/yyyy HH:mm:ss');
    console.log(dataFormatada)
    return(
        <>
         <a href="/" className={styles.cardNoticia}>
             <img src="/images/imagemNoticia.jpg" alt="imagem noticia" className={styles.imagemNoticia}/>
            <h3 className={styles.titulo}>{props.titulo}</h3>
            <p className={styles.data}>{dataFormatada}</p>
         </a>
        </>
    )
}