'use client'

import { useRouter } from "next/navigation";

const LoginTeacher=()=>{
    const router = useRouter();
     const Backlogin=(pages)=>{
         router.push(pages)
     }
     return(
        <div>
            <button className="login" onClick={()=>Backlogin('/login')}>Back To Login</button>
        </div>
     );
}
export default LoginTeacher;