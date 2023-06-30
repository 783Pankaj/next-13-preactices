
'use client'
import { useRouter } from "next/navigation";

const LoginStudent=()=>{
    const router = useRouter();
    const BackLogin=(pages)=>{
        router.push(pages)
    }
    return(
        <div>
            <h1></h1>
            <button className="login" onClick={()=>BackLogin('/login')}>Bact To Login</button>
        </div>
    );
}
export default LoginStudent;