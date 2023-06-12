import React from "react";
import Cabecalho from '../components/Cabecalho';
import Image from 'next/image';
import Link from "next/link";
import Rodape from "../components/Rodape";

export default function HomeScreen(){
    return (
        <>
        <Cabecalho/>
        <main>
            <section>
                <h2>Concursos em Destaque</h2>
                <div>
                    <Link href='#'>
                        <Image src='/images/banner.png' alt='banner concurso' width={150} height={130} />
                    </Link>
                    <h3>Concurso 1</h3>
                </div>
                <div>
                    <Link href='#'>
                        <Image src='/images/banner.png' alt='banner concurso' width={150} height={130} />
                    </Link>
                    <h3>Concurso 2</h3>
                </div>
                <div>
                    <Link href='#'>
                        <Image src='/images/banner.png' alt='banner concurso' width={150} height={130} />
                    </Link>
                    <h3>Concurso 3</h3>
                </div>
                <div>
                    <Link href='#'>
                        <Image src='/images/banner.png' alt='banner concurso' width={150} height={130} />
                    </Link>
                    <h3>Concurso 4</h3>
                </div>
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