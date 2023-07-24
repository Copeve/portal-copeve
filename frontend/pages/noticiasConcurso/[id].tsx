import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import fazRequisição from "../../services/fazRequisicao";
import Menu from "../../components/Menu";
import CardNoticia from "../../components/CardNoticia";
import styles from '../styles.module.css';
import Rodape from "../../components/Rodape";

export default function PaginaNoticiasDoConcurso(){
    const router = useRouter();
    const idConcurso=router.query.id;
    const [noticiasDoConcurso, setNoticiasDoConcurso]=useState<any[]>([]);
    useEffect(() => {
      if(idConcurso){
        fazRequisição(`http://localhost:4000/api/concursos/concurso/${idConcurso}/noticias`, 'GET').then((data) => {
            setNoticiasDoConcurso(data);
            console.log(data);
        });

      }
      }, [idConcurso]);

      return(
        <>
        <main className={styles.pagina}>
          <Menu/>
          <section className={styles.paginaConteudo}>
          <h1 className={styles.tituloConteudo}>Notícias</h1>
            <div className={styles.concursosDestaque}>
              {noticiasDoConcurso.map((noticia)=>{
                return(
                  <CardNoticia key={noticia.id}imagem={noticia.imagem} titulo={noticia.titulo} data={noticia.data_atualizacao}/>
                )
              })}
            </div>
          </section>
        </main>
        <Rodape/>
        </>
      )
}