import { useEffect, useState } from "react";
import Rodape from "../components/Rodape";
import fazRequisição from "../services/fazRequisicao";
import Menu from "../components/Menu";
import Card from "../components/CardConcurso";
import styles from './styles.module.css'
import { Link } from "react-bootstrap-icons";
import { Router, useRouter } from "next/router";

export default function PaginaConcursosEmAndamento() {
  const [ConcursosEmAndamento, setConcursosEmAndamento] = useState<any[]>([]);

  useEffect(() => {
    fazRequisição('http://localhost:4000/api/concursos/abertos', 'GET').then((data) => {
        setConcursosEmAndamento(data);
    });
  }, []);
  const router = useRouter();
  console.log(router);
  return (
    <>
      <section className={styles.pagina}>
        <Menu/>
        <section className={styles.paginaConteudo} >
        <h1 className={styles.tituloConteudo}>Concursos em andamento</h1>
          <div className={styles.concursosDestaque}>
  
              {ConcursosEmAndamento.map((concurso)=>{
                return(
                  <Card link={`/concursos/${concurso.id}`} titulo={concurso.nome} key={concurso.id}/>);
                    })}
           
          </div>
        </section>
      </section>
      <Rodape />
    </>
  );
}
