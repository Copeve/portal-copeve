import styles from './cabecalho.module.css';

export default function Cabecalho(){
    const classesDiv = `${styles.container}, ${styles.headerContainer}`
    return(
        <>
        <header className={styles.header}>
            
            <div className={classesDiv}>
                <h1 className={styles.headerBrand}>
                <i className={styles.iconUfmgM}></i>
                    <span>Incubadora – Template de órgão</span>
                </h1>
            </div>
        </header>
        </>
    )
}