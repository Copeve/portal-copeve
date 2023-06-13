import React, { useEffect, useState } from "react";
import Cabecalho from '../components/Cabecalho';
import Image from 'next/image';
import Link from "next/link";
import Rodape from "../components/Rodape";
import { data } from "autoprefixer";

async function pegaConcursosEmDestaque(){
    const concursos= await fetch('http://localhost:4000/api/concursos/destaques', {method: "GET"});
    if(concursos.ok){
        const data = await concursos.json();
        return data
    }
}

async function pegaNoticiasEmDestaque(){
    const noticias= await fetch('http://localhost:4000/api/noticias/destaques', {method: "GET"});
    if(noticias.ok){
        const data = await noticias.json();
        return data
    }
}

async function pegaResultadosEmDestaque(){
    const resultados= await fetch('http://localhost:4000/api/resultados/destaques', {method: "GET"});
    if(resultados.ok){
        const data = await resultados.json();
        console.log(data);
        return data
    }
}

export default function HomeScreen(){
    const [concursosDestaque, setConcursosDestaque]= useState<any[]>([]);
    const [noticiasDestaque, setNoticiasDestaque]= useState<any[]>([]);
    const [resultadosDestaque, setResultadosDestaque]= useState<any[]>([]);
    useEffect(()=>{
        pegaConcursosEmDestaque().then(data=>setConcursosDestaque(data));
        pegaNoticiasEmDestaque().then(data=>setNoticiasDestaque(data));
    }, []);
    useEffect(()=>{
        pegaResultadosEmDestaque().then(data=>setResultadosDestaque(data));
    }, []);
  
    return (
        <>
        <Cabecalho/>
        <main>
            <section>
                <h2>Concursos em Destaque</h2>
                {
                    concursosDestaque.map((concurso)=>{
                        console.log("a"+concurso)
                        return(
                        <div key={concurso.id}>
                            <h3>{concurso.nome}</h3>
                            <Link href='#'>
                                <Image src='/images/banner.png' alt='banner concurso' width={150} height={130} />
                            </Link>
                        </div>)
                    })
                }
            </section>


            <section>
                <h2>Noticias em Destaque</h2>
                <ul>
                    <li><Link href='#'>Notícia1</Link></li>
                    <li><Link href='#'>Notícia2</Link></li>
                    <li><Link href='#'>Notícia3</Link></li>
                    <li><Link href='#'>Notícia4</Link></li>
                </ul>
            </section>
            <section>
                
                <h2>Resultados</h2>
                <div>
                    <h3>X</h3>
                    <p>descricao</p>
                </div>
                <div>
                    <h3>X</h3>
                    <p>descricao</p>
                </div>
                <div>
                    <h3>X</h3>
                    <p>descricao</p>
                </div>
            </section>
        </main>
        <Rodape/>
        </>
    )
}