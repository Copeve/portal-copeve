import { useEffect, useState } from "react";
import Rodape from "../components/Rodape";
import fazRequisição from "../services/fazRequisicao";
import Menu from "../components/Menu";
import Card from "../components/CardNoticia";
import styles from './styles.module.css'
import { Router, useRouter } from "next/router";

export default function PaginaConcursosEmAndamento() {
  const [noticias, setNoticias] = useState<any[]>([]);

  useEffect(() => {
    fazRequisição('http://localhost:4000/api/noticias', 'GET').then((data) => {
        setNoticias(data);
    });
  }, []);
  const router = useRouter();
  console.log(router);
  return (
    <>
      <section className={styles.pagina}>
        <Menu/>
        <section className={styles.paginaConteudo} >
        <h1 className={styles.tituloConteudo}>Noticias</h1>
          <div className={styles.concursosDestaque}>
  
          {noticias.map((noticia)=>{
                                    return(
                                        <>
                                        {console.log(noticia)}
                                        <Card imagem={noticia.imagem} titulo={noticia.titulo} data={noticia.data_atualizacao}/>
                                        </>
                                    )
                                })}
           
          </div>
        </section>
      </section>
      <Rodape />
    </>
  );
}
