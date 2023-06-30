'use client'
import { useRouter } from 'next/navigation';
import '../globals.css';
import Image from 'next/image';
import techImg from '../../../public/tech.jpg'

console.log(techImg)
const About = () => {
    const router = useRouter();
    const GoToMoreLogin = (pages) => {
        router.push('/about' + pages);

    }
    return (
        <>
            <div>
                <h2></h2>
                <button className='login' onClick={() => GoToMoreLogin("/aboutstudent")}>Go to Student About</button>
                <button className='login' onClick={() => GoToMoreLogin('/aboutteacher')}>Go to Teacher About</button>
            </div>
            <h2>Our Story</h2>
            <br />
            <br />
            <Image 
                src={techImg}
                width={1000}
                height={400}
            />
            <Image 
                src={"https://www.analyticsinsight.net/wp-content/uploads/2021/07/Technology-Can-Boost-Your-Business-Productivity.jpg"}
                width={1000}
                height={500}
            />
            <h3>Motivated team delivering actionable expectations</h3>
            <br />
            <p>
                Marktine is a dynamic IT product and services-based organization consisting of more than 200 consultants spread across the globe with dedicated expertise in strategic, operational and technical consulting. Our core technology expertise includes application development, advanced analytics, salesforce, AI and machine learning services which gives us 360-degree competence in the industry.

                We have consulted over 100+ leading enterprises and assisted them in redefining the way they operate, deliver information and engineer customer experience with world-class software products and solutions, we help businesses to become more agile, manage change, and control costs.
            </p>
        </>
    );
}
export default About;