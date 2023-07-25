import { format } from 'date-fns';
import styles from './CardEvento.module.css';
interface propsEvento{
    descricao:string;
    data:Date;
}
export default function CardEvento(props:propsEvento){
    const dataFormatada = format(new Date(props.data), 'dd/MM/yyyy HH:mm:ss');
    return(
        <>
        <div className={styles.evento}>
            <p className={styles.data}>{dataFormatada}</p>
            <p className={styles.descricao}>{props.descricao}</p>
        </div>
        </>
    )
}