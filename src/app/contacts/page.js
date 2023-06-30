'use client'
import { useRouter } from 'next/navigation';
import '../globals.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
const Contacts = () => {
    const [apiData, setApiData] = useState([]);
    const router = useRouter();
    const GoToMoreLogin = (pages) => {
        router.push('/contacts' + pages);
    }
 const getUser=async()=>{
    const {data:{data:userData}}= await axios.get('https://reqres.in/api/users?page=2')
     setApiData(userData)
    console.log(userData)

 }
 useEffect(()=>{
    getUser()
 },[])

    // const axios = require('axios');
    // const options = {
    //     method: "GET",
    //     url: 'https://reqres.in/api/users?page=2',
    //     Headers :{}
    // };
    // async function getUser() {
    //     try {
    //         const response = await axios(options);
    //         setApiData(response.data)
    //     } catch (error) {
    //         console.log("errrrrrrrrrrrrrrrrr")
    //     }
    // }
    // console.log(apiData)
    // getUser();

    return (
        <>
            <div>
                <h2></h2>

                <button className='login' onClick={() => GoToMoreLogin("/contactsstudent")}>Go to Student Contact</button>
                <button className='login' onClick={() => GoToMoreLogin('/contactsteacher')}>Go to Teacher Contact</button>
            </div>
            <div style={{ display: 'flex',cursor:"pointer" }} >
                {apiData.map((item, i) => (
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
        </>
    );
}
export default Contacts;