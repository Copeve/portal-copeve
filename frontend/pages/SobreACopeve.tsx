import Menu from "../components/Menu";
import Rodape from "../components/Rodape";
import SobreACopeve from '../components/SobreACopeve';
import styles from './styles.module.css';

export default function PaginaSobreACopeve(){
    return(
        <>
        <div className={styles.pagina}>
            <Menu/>
            <SobreACopeve/>    
        </div>
        <Rodape/>
        </>
    )
}