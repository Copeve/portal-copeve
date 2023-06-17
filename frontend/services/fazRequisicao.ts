export default async function fazRequisição(caminho:RequestInfo | URL, metodo:string){
    const resultado= await fetch(caminho, {method: metodo});
    if(resultado.ok){
        const data = await resultado.json();
        return data
    }
}