import { useRouter, Router } from "next/router";
import styles from '../styles.module.css'
import Rodape from "../../components/Rodape";
import fazRequisição from "../../services/fazRequisicao";
import { useEffect, useState } from "react";
import Menu from "../../components/Menu";
import CardEvento from "../../components/CardEvento";
import CardArquivo from "../../components/CardArquivos";

interface Concurso {
    id:number;
    nome: string;
    ano: number;
    data_inicio: Date; 
    data_fim: Date; 
    encerrado: boolean; 
    link_inscricao: string; 
    destaque: boolean;
    createdAt:number;
    updatedAt:number;
    grupo_concurso:number;
}
 

export default function Teste(){
    const router = useRouter();
    const idConcurso=router.query.id;

    const [concurso, setConcurso]= useState<any>();
    const [arquivosDoConcurso, setArquivosDoConcurso]=useState<any[]>([]);
    const [eventosDoConcurso, setEventosDoConcurso]=useState<any[]>([]);

    useEffect(() => {
        console.log('idConcurso:', idConcurso);
        if(idConcurso){fazRequisição(`http://localhost:4000/api/concursos/concurso/${idConcurso}`, 'GET').then((data) => {
            setConcurso(data);
        });
        fazRequisição(`http://localhost:4000/api/concursos/concurso/${idConcurso}/arquivos`, 'GET').then((data) => {
            setArquivosDoConcurso(data);
        fazRequisição(`http://localhost:4000/api/concursos/concurso/${idConcurso}/eventos`, 'GET').then((data) => {
            setEventosDoConcurso(data);
        });
        console.log(eventosDoConcurso);
        });}
        
      }, [idConcurso]);

      eventosDoConcurso.sort((a, b)=>{
        if (a.data && b.data) {
            if (a.data > b.data) {
              return 1;
            } else if (a.data < b.data) {
              return -1;
            }
          }
          return 0;
      })

    return (
        <>
        
        <main className={styles.paginaConcursos}>
            <Menu/>
        
                <div className={styles.linhaCronologica}>
                <h1 className={styles.tituloConteudo}>{concurso?.nome}</h1>
                    <div className={styles.linhaCronologicaConteudo}>
                        <h2 className={styles.tituloCards}>Linha Cronológica</h2>
                            {eventosDoConcurso.map((evento)=>{
                                return(

                                        <CardEvento  link={evento.link_evento}key={evento.id} descricao={evento.evento} data = {evento.data}/>
    
                                )
                            })}
                    </div>
                    
                </div>
                <div className={styles.arquivos}>
                        <div className={styles.arquivosConteudo}>
                <h2 className={styles.tituloCards}>Arquivos</h2>
                            {arquivosDoConcurso.map((arquivo)=>{
                                return(
                                    <CardArquivo data={arquivo.data_alteracao} nome={arquivo.nome} id={arquivo.id} key={arquivo.id}/>
                                )
                            })}
                        </div>
                </div>
        </main>
        <Rodape/>
        </>
    )
}