import styles from './CardResultado.module.css';
import {GrInfo} from 'react-icons/gr'
interface Resultado{
    titulo:number;
    descricao:string;

} 
export default function CardResultado(props:Resultado){
    return(
        <div className={styles.cardResultado}>
            <GrInfo/>
            <h3 className={styles.titulo}>{props.titulo}</h3>
            <p className={styles.descricao}>{props.descricao}</p>
        </div>
    )
}