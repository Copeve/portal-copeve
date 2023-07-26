import { useEffect, useState } from 'react';
import styles from '../styles.module.css';
import { useRouter } from 'next/router';
import fazRequisição from '../../services/fazRequisicao';
import Menu from '../../components/Menu';

export default function Noticia(){
    const router = useRouter();
    const [noticia, setNoticia]=useState<any>();
    const idNoticia=router.query.id;
    useEffect(()=>{
        fazRequisição(`http://localhost:4000/api/noticias/noticia/${idNoticia}`, 'GET').then((data)=>{
            console.log(data);
            setNoticia(data);
        });

    }, [idNoticia])
    return(
        <main className={styles.pagina}>
            <Menu/>
            <section className={styles.paginaConteudo}>
                <h1 className={styles.tituloConteudo}>{noticia?.titulo}</h1>
                <p className={styles.texto}>{noticia?.corpo}</p>
            </section>
        </main>
    )
}