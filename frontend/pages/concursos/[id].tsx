import { useRouter, Router } from "next/router";
import Cabecalho from "../../components/Cabecalho";
import Rodape from "../../components/Rodape";
import fazRequisição from "../../services/fazRequisicao";
import { useEffect, useState } from "react";

interface Concurso {
    nome: string,
    ano: number,
    data_inicio: Date, 
    data_fim: Date, 
    encerrado: boolean, 
    link_inscricao: string, 
    destaque: boolean
}
 

export default function Teste(){
    const router = useRouter();
    const idConcurso=router.query.id;

    const [concurso, setConcurso]= useState<Concurso| undefined>(undefined);
    const [arquivosDoConcurso, setArquivosDoConcurso]=useState<any[]>([]);
    useEffect(() => {
        fazRequisição(`http://localhost:4000/api/concursos/concurso/${idConcurso}`, 'GET').then((data) => {
            setConcurso(data);
        });
        fazRequisição(`http://localhost:4000/api/concursos/concurso/${idConcurso}/arquivos`, 'GET').then((data) => {
            setArquivosDoConcurso(data);
        });
      }, []);
    return (
        <>
        {router.query.id}
        <Cabecalho/>
        <h1>{concurso?.nome}</h1>
        {arquivosDoConcurso.map((arquivo)=>{
            return(
                <h1 key={arquivo.id}>{arquivo.caminho}</h1>
            )
        })}
        <Rodape/>
        </>
    )
}