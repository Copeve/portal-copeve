import React, { useEffect, useState } from "react";
import Image from 'next/image';
import Cabecalho from '../components/Cabecalho';
import Rodape from "../components/Rodape";
import Menu from "../components/Menu";
import styles from '../styles/paginaIndex.module.css';
import fazRequisição from "../services/fazRequisicao";
import Carrossel from "../components/Carrossel";


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
        <Cabecalho/>
        <Carrossel/>
        <Menu/>
        <main>
            <section>
                <h2>Concursos em Destaque</h2>
                {
                    concursosDestaque.map((concurso)=>{
                        return(
                        <div key={concurso.id}>
                            <h3>{concurso.nome}</h3>
                        </div>)
                    })
                }
            </section>


            <section>
                <h2>Noticias em Destaque</h2>
                <ul>
                    {noticiasDestaque.map((noticia)=>{
                            return(
                            <li key={noticia.id}>
                                <div>
                                    <h3>{noticia.titulo}</h3>
                                </div>
                            </li>)
                        })}
                </ul>
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
        </main>
        <Rodape/>
        </>
    )
}