import Rodape from "../components/Rodape";
import Menu from "../components/Menu";
import { useEffect, useState } from "react";
import styles from './styles.module.css';
import fazRequisição from "../services/fazRequisicao";
import Card from "../components/CardConcursoResultado";

export default function ConcursosAnteriores() {

    const [busca, setBusca] = useState<string>();
    const [resultadoBusca, setResultadoBusca] = useState<any[]>();
    const [todosOsGrupos, setTodosOsGrupos]=useState<any>();
    const handleInputChange = (event: { target: { value: any; }; }) => {
        setBusca(event.target.value);
    };

    useEffect(() => {
        console.log('busca:', busca);
        if (busca) {
            fazRequisição(`http://localhost:4000/api/concursos/buscaGrupoConcurso/${busca}`, 'GET').then((data) => {
                setResultadoBusca(data);
            });
        }
        fazRequisição('http://localhost:4000/api/concursos/GruposConcursos/', 'GET').then((data)=>{
            setTodosOsGrupos(data);
        })
    }, [busca]);
    console.log(todosOsGrupos);

    const handleSubmit = (event: any) => {
        event.preventDefault();
    }


    return (
        <>
            <section className={styles.pagina}>
                <Menu />
                <section className={styles.paginaConteudo}>
                        <select value={busca} className={styles.busca} onChange={handleInputChange}>
                            <option value="">Selecione o grupo do concurso</option>
                            {todosOsGrupos?.map((grupo:any)=>{
                               return( <option key={grupo.id} value={grupo.nome}> {grupo.nome}</option>)
                            })}

                        </select>
                    <div className={styles.concursosDestaque}>
                        {resultadoBusca?.map((resultado) => {
                            return (
                                <Card link={`/concursos/${resultado.id}`} titulo={resultado.nome} ano={resultado.ano} key={resultado.id} />);
                        })}
                    </div>
                </section>
            </section>
            <Rodape />
        </>
    )
}