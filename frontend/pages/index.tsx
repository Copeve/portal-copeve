import React, { useEffect, useRef, useState } from "react";
import Rodape from "../components/Rodape";
import fazRequisição from "../services/fazRequisicao";
import Card from "../components/CardConcurso";
import styles from './styles.module.css';
import Menu from "../components/Menu";
import CardNoticia from "../components/CardNoticia";
import CardResultado from "../components/CardResultado";



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
                    <h2 className={styles.tituloConteudo}>Concursos em Destaque</h2>
                    <div className={styles.concursosDestaque}>
                    {concursosDestaque.map((concurso)=>{
                                return(
                                    <Card link={`/concursos/${concurso.id}`} titulo={concurso.nome} key={concurso.id}/>);
                        })}
                         {concursosDestaque.map((concurso)=>{
                                return(
                                    <Card link={`/concursos/${concurso.id}`} titulo={concurso.nome} key={concurso.id}/>);
                        })}
                    </div>
                <section className={styles.noticiasEmDestaque}>
                    <h2 className={styles.tituloConteudo}>Noticias em Destaque</h2>
                        <div className={styles.noticiasDestaque}>
                            {noticiasDestaque.map((noticia)=>{
                                    return(
                                        <>
                                        {console.log(noticia)}
                                        <CardNoticia imagem={noticia.imagem} titulo={noticia.titulo} data={noticia.data_atualizacao}/>
                                        </>
                                    )
                                })}
                        </div>
                </section>
                <section className={styles.resultadosEmDestaques}>
                    <h2 className={styles.tituloConteudo}>Resultados</h2>
                    <div className={styles.resultadosDestaques}>
                        {resultadosDestaque.map((resultado)=>{
                                return(
                                    <CardResultado key={resultado.id} titulo={resultado.numero} descricao={resultado.descricao}/>
                                )
                            })}
                              {resultadosDestaque.map((resultado)=>{
                                return(
                                    <CardResultado key={resultado.id} titulo={resultado.numero} descricao={resultado.descricao}/>
                                )
                            })}
                              {resultadosDestaque.map((resultado)=>{
                                return(
                                    <CardResultado key={resultado.id} titulo={resultado.numero} descricao={resultado.descricao}/>
                                )
                            })}
                              
                    </div>
                
                </section>
            </section>
        </main>
        <Rodape/>
        </>
    )
}