import { format } from 'date-fns';
import styles from './CardArquivos.module.css';
import {BsDownload} from 'react-icons/bs';
interface CardArquivo{
    nome:string;
    id:number;
    data: Date;
}

export default function CardArquivo(props:CardArquivo){
    const dataFormatada = format(new Date(props.data), 'dd/MM/yyyy HH:mm:ss');
    return (
        <a href={`http://localhost:4000/api/arquivos/download/${props.id}`} className={styles.arquivo}>
            <p>{dataFormatada}</p>
            <BsDownload/>
            <p>{props.nome}</p>
        </a>
    )
}