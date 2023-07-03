import styles from './rodape.module.css';
export default function Rodape(){
    return (
        <>
        <footer className={styles.footer} id="footer">
            <div className={styles.container}>
                <p className={styles.titulo}>Universidade Federal de Minas Gerais</p>
                <p>Av. Antonio Carlos, 6627 - Pampulha - Belo Horizonte - MG | CEP 31270-901 | +55 (31) 3409-5000 </p>
                    <p>© 2023 Universidade Federal de Minas Gerais. Todos os direitos reservados.</p>
                    <p>Desenvolvido no Cedecom UFMG </p>
            </div>

    </footer>
        </>
    
    )
}