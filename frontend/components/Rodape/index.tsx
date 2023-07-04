import styles from './rodape.module.css';
export default function Rodape(){
    return (
        <>
        <footer className={styles.footer} id="footer">
            <div className={styles.container}>
                <h3 className={styles.texto}>Universidade Federal de Minas Gerais</h3>
                <p  className={styles.texto}>Av. Antonio Carlos, 6627 - Pampulha - Belo Horizonte - MG | CEP 31270-901 | +55 (31) 3409-5000 </p>
                    <p  className={styles.texto}>© 2023 Universidade Federal de Minas Gerais. Todos os direitos reservados.</p>
                    <p  className={styles.texto}>Desenvolvido no Cedecom UFMG </p>
            </div>

    </footer>
        </>
    
    )
}