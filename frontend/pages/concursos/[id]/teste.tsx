import { useRouter } from "next/router"

export default function A(){
    const router = useRouter();
    return(
        <p>{router.query.id}</p>
    )
}