import React, { useEffect, useRef, useState } from "react";
import Rodape from "../components/Rodape";
import fazRequisição from "../services/fazRequisicao";
import Card from "../components/Card";
import styles from './styles.module.css';
import Menu from "../components/Menu";


export default function HomeScreen(){
    const [concursosDestaque, setConcursosDestaque]= useState<any[]>([]);
    const [noticiasDestaque, setNoticiasDestaque]= useState<any[]>([]);
    const [resultadosDestaque, setResultadosDestaque]= useState<any[]>([]);

    useEffect(()=>{
        fazRequisição('http://localhost:4000/api/concursos/destaques', 'GET').then(data=>setConcursosDestaque(data));
        fazRequisição('http://localhost:4000/api/noticias/destaques', 'GET').then(data=>setNoticiasDestaque(data));
        fazRequisição('http://localhost:4000/api/resultados/destaques', 'GET').then(data=>setResultadosDestaque(data));
    }, []);
  
    return (
        <>
        <main className={styles.pagina}>
            <Menu/>
            <section className={styles.paginaConteudo}>
                <section >
                    <h2 className={styles.tituloConcursos}>Concursos em Destaque</h2>
                    <div className={styles.concursosDestaque}>
                    {
                        concursosDestaque.map((concurso)=>{
                            return(
                                <Card titulo={concurso.nome} key={concurso.id}/>);
                    })
                }
                    </div>
                </section>
                <section>
                    <h2>Noticias em Destaque</h2>
                        {noticiasDestaque.map((noticia)=>{
                                return(
                                <a href="#" key={noticia.id}>
                                    <h3>{noticia.titulo}</h3>
                                </a>)
                            })}
                </section>
                <section>
                
                    <h2>Resultados</h2>
                    {resultadosDestaque.map((resultado)=>{
                            return(
                            <div key={resultado.id}>
                                <h3>{resultado.numero}</h3>
                                <p>{resultado.descricao}</p>
                            </div>)
                        })}
                
                </section>
            </section>
        </main>
        <Rodape/>
        </>
    )
}