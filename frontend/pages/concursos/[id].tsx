import { useEffect, useState } from "react";
import Cabecalho from "../../components/Cabecalho";
import Rodape from "../../components/Rodape";
import { useRouter } from "next/router";
import fazRequisição from "../../services/fazRequisicao";

interface Concurso {
    nome: string,
    ano: number,
    data_inicio: Date, 
    data_fim: Date, 
    encerrado: boolean, 
    link_inscricao: string, 
    destaque: boolean
}
  

export default function PaginaConcursos(){
    const router = useRouter();
    const idConcurso=router.query.id;

    const [concurso, setConcurso]= useState<Concurso| undefined>(undefined);
    const [arquivosDoConcurso, setArquivosDoConcurso]=useState<any[]>([]);
    useEffect(() => {
        fazRequisição(`http://localhost:4000/api/concursos/${idConcurso}`, 'GET').then((data) => {
            setConcurso(data);
        });
        fazRequisição(`http://localhost:4000/api/concursos/${idConcurso}/arquivos`, 'GET').then((data) => {
            setArquivosDoConcurso(data);
        });
      }, []);

    return (
        <>
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