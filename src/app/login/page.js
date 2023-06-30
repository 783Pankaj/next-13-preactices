'use client'
import { useRouter } from 'next/navigation';
import '../globals.css';
const Login=()=>{
    const router = useRouter();
    const GoToMoreLogin=(pages)=>{
        router.push('/login'+pages);
      
    }
    return(
        <div>
            <h2></h2>    
            <button className='login' onClick={()=>GoToMoreLogin("/loginstudent")}>Go to Student Login</button>
            <button className='login'  onClick={()=>GoToMoreLogin('/loginteacher')}>Go to Teacher Login</button>
        </div>
    );
}
export default Login;