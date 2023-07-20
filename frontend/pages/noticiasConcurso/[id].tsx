import { Router, useRouter } from "next/router";
import { useEffect, useState } from "react";
import fazRequisição from "../../services/fazRequisicao";
import Menu from "../../components/Menu";

export default function PaginaNoticiasDoConcurso(){
    const router = useRouter();
    const idConcurso=router.query.id;
    const [noticiasDoConcurso, setNoticiasDoConcurso]=useState<any[]>([]);
    useEffect(() => {
        fazRequisição(`http://localhost:4000/api/concursos/concurso/${idConcurso}/noticias`, 'GET').then((data) => {
            setNoticiasDoConcurso(data);
        });
      }, []);

      return(
        <>
        <h1>Notícias</h1>
        {noticiasDoConcurso.map((noticia)=>{
          return(
            <h2 key={noticia.id}>{noticia.corpo}</h2>
          )
        })}
        </>
      )
}