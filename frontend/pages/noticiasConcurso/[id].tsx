import { Router, useRouter } from "next/router";

export default function PaginaNoticiasDoConcurso(){
    const router = useRouter();
    const idConcurso=router.query;
    console.log(router.query.id);
}