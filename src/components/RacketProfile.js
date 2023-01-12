import React, { useEffect, useState}from "react";
import { useSelector } from 'react-redux';

const Rocket = () =>{
    const { rockets } = useSelector((state) => state.rockets);
    const [raserved, setRaserved] = useState([])
    useEffect(() => {
        setRaserved(() => rockets.filter(racket=> { 
         return  racket.reserved == true 
        })) 

    console.log('racket',rockets)
    console.log('raser',raserved)
      }, [rockets]);
    return( 
        <ul>
        {
            raserved.map((racket) =>{
                <li><span> {racket.rocket_name}</span></li> 
            })
        } 
        </ul>
    )
}

export default Rocket;

