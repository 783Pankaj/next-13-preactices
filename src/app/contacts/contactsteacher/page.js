
'use client'

import { useRouter } from "next/navigation"

const ContactStudent=()=>{
    const router = useRouter();
    const BackContact=(page)=>{
        router.push(page)
    }
    return(
        <div>
            <button onClick={()=>BackContact("/contacts")} className="login">Back to Contact</button>
        </div>
    );
}
export default ContactStudent;