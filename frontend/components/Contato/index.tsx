import styles from './Contato.module.css';
export default function Contato(){
    return(
        <>
        <main className={styles.textoContato}>
            <h1 className={styles.tituloContato}>Contato</h1>
                <h2 className={styles.subtituloContato}>Sede Administrativa</h2>
                <p className={styles.paragrafo} >Local: Unidade Administrativa III (2º andar) - Campus Pampulha. </p>
                <p className={styles.paragrafo}>Endereço: Av. Antônio Carlos, 6627 - Bairro Pampulha, Belo Horizonte/MG.</p>
                <p className={styles.paragrafo}>Telefones:</p>
                <ul className={styles.listaContato}>
                    <li className={styles.listaItem}>(31) 3409-4408</li>
                    <li className={styles.listaItem}>(31) 3409-4409</li>
                </ul>
                <p className={styles.paragrafo}>E-mail: executivo@copeve.ufmg.br</p>
        </main>
        </>
    )
}