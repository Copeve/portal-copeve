import { format } from 'date-fns';
import styles from './CardEvento.module.css';
import {GrDocument} from 'react-icons/gr';
interface propsEvento{
    descricao:string;
    data:Date;
    link:string;
}
export default function CardEvento(props:propsEvento){
    const dataFormatada = format(new Date(props.data), 'dd/MM/yyyy HH:mm:ss');
    return(
        <>
        <div className={styles.evento}>
            <div className={styles.data}>
                <p >{dataFormatada}</p>
            </div>
            <p className={styles.descricao}>{props.descricao}</p>
            <div className={styles.link}>
                <GrDocument className={styles.icone}/>
                <a href={props.link} >{props.descricao}</a>
            </div>
        </div>
        </>
    )
}