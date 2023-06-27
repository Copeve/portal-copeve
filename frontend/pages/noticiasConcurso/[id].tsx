import { Router, useRouter } from "next/router";
import { useEffect, useState } from "react";
import fazRequisição from "../../services/fazRequisicao";

export default function PaginaNoticiasDoConcurso(){
    const router = useRouter();
    const idConcurso=router.query.id;
    const [noticiasDoConcurso, setNoticiasDoConcurso]=useState<any[]>([]);
    useEffect(() => {
        fazRequisição(`http://localhost:4000/api/concursos/concurso/${idConcurso}/noticias`, 'GET').then((data) => {
            setNoticiasDoConcurso(data);
        });
      }, []);
      noticiasDoConcurso.map((noticia)=>{
        console.log(noticia);
    })
      return(
        <>
        {noticiasDoConcurso.map((noticia)=>{
            <h2>{noticia.titulo}</h2>
        })}
        </>
      )
}