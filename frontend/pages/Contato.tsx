import Cabecalho from "../components/Cabecalho"
import Menu from "../components/Menu";
import Rodape from "../components/Rodape";
import Contato from "../components/Contato";
import styles from './styles.module.css';
export default function PaginaContato(){
    return(
        <>
        <div className={styles.pagina}>
        <Menu/>
        <Contato/>  
        </div>
        <Rodape/>
        </>
    )
        
}
/*Local: Unidade Administrativa III (2º andar) - Campus Pampulha.

Endereço: Av. Antônio Carlos, 6627 - Bairro Pampulha, Belo Horizonte/MG.

Telefones:
(31) 3409-4408
(31) 3409-4409

E-mail: executivo@copeve.ufmg.br*/