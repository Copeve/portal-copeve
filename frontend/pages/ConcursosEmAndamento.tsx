import { useEffect, useState } from "react";
import Cabecalho from "../components/Cabecalho";
import Rodape from "../components/Rodape";
import { useRouter } from "next/router";
import Link from "next/link";
import fazRequisição from "../services/fazRequisicao";
import Menu from "../components/Menu";

export default function PaginaConcursosEmAndamento() {
  const [ConcursosEmAndamento, setConcursosEmAndamento] = useState<any[]>([]);

  useEffect(() => {
    fazRequisição('http://localhost:4000/api/concursos/abertos', 'GET').then((data) => {
        setConcursosEmAndamento(data);
    });
  }, []);
  ConcursosEmAndamento.map((concurso)=>{
    console.log(concurso);
  })

  return (
    <>
  <Menu/>
    
      <h1>Concursos em andamento</h1>
        {ConcursosEmAndamento.map((concurso)=>{
            return(
                <div key={concurso.id}>
                    <Link href={`http://localhost:3000/concursos/${concurso.id}`}> <h2>{concurso.nome}</h2></Link>
                </div>
            )
        })}
      <Rodape />
    </>
  );
}
