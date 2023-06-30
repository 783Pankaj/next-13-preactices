'use client'
import { useRouter } from 'next/navigation';
import '../globals.css';
import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Client = () => {
    const [apiData, setapiData] = useState([]);
    const router = useRouter();
    const GoToMoreLogin = (pages) => {
        router.push(pages);
    }
    const apiFun = async () => {
        let data = await fetch("https://reqres.in/api/users?page=2");
        data = await data.json();
        setapiData(data.data)
    }
    useEffect(() => {
        apiFun()
    }, [])
    return (
        <div>
            <div>
                <button style={{color:"white" , backgroundColor:"blue", cursor:"pointer"}} className='login' onClick={() => GoToMoreLogin('/client')}>Go to Student </button>
                <button style={{color:"white" , backgroundColor:"blue",cursor:"pointer"}} className='login' onClick={() => GoToMoreLogin('/client')}>Go to Teacher </button>
            </div>

            <div style={{ display: 'flex',cursor:"pointer" }} >
                {apiData.slice(0, 30).map((item, i) => (
                    <div key={i}>
                        <Card style={{ width: '18rem' }}>
                            <img src={item.avatar} alt="" width={100} height={100}/>
                            <Card.Body>
                                <Card.Title>Top User</Card.Title>
                                <Card.Text>
                                    <h2>Name: {item.first_name}</h2>
                                    <h3>Email:{item.email}</h3>
                                </Card.Text>
                                <Button variant="primary" style={{cursor:"pointer" }}>Go More details</Button>
                            </Card.Body>
                        </Card>
                        {/* <img src={item.avatar} alt="" width={100} height={100}/> */}
                    </div>
                ))}
            </div>
            <div style={{ display: 'flex',cursor:"pointer" }} >
                {apiData.slice(0, 30).map((item, i) => (
                    <div key={i}>
                        <Card style={{ width: '18rem' }}>
                            <img src={item.avatar} alt="" width={100} height={100}/>
                            <Card.Body>
                                <Card.Title>Top User</Card.Title>
                                <Card.Text>
                                    <h2>Name: {item.first_name}</h2>
                                    <h3>Email:{item.email}</h3>
                                </Card.Text>
                                <Button variant="primary" style={{cursor:"pointer" }}>Go More details</Button>
                            </Card.Body>
                        </Card>
                        {/* <img src={item.avatar} alt="" width={100} height={100}/> */}
                    </div>
                ))}
            </div>
            <div style={{ display: 'flex',cursor:"pointer" }} >
                {apiData.slice(0, 30).map((item, i) => (
                    <div key={i}>
                        <Card style={{ width: '18rem' }}>
                            <img src={item.avatar} alt="" width={100} height={100}/>
                            <Card.Body>
                                <Card.Title>Top User</Card.Title>
                                <Card.Text>
                                    <h2>Name: {item.first_name}</h2>
                                    <h3>Email:{item.email}</h3>
                                </Card.Text>
                                <Button variant="primary" style={{cursor:"pointer" }}>Go More details</Button>
                            </Card.Body>
                        </Card>
                        {/* <img src={item.avatar} alt="" width={100} height={100}/> */}
                    </div>
                ))}
            </div>
        </div>
    );
}
export default Client;