const { default: Link } = require("next/link");

const AboutStudent=()=>{
    return(<div><Link href={"/about"} className="login">Back to About</Link></div>);
}
export default AboutStudent;