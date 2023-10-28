import React,{useState,useEffect} from 'react'
import axios from 'axios';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
function Statedata() {
    const [state,setState] = useState([])
    useEffect(()=>{
        axios.get('https://data.covid19india.org/state_district_wise.json').then((response)=>{
            setState(response.data)
            console.log("Statee" , state)
        })
    },[])
  return (
    <div>
        <h1>Hi</h1>
        {
            Object.keys(state).map((values,index)=>{
                let district = state[values].districtdata;
                console.log("District :",district);
                return(
                    <Accordion className='mt-5'>
                    <Accordion.Item eventKey={index}>
                        <Accordion.Header>{values}</Accordion.Header>
                        <Accordion.Collapse eventKey={index} className='p-3'>
                        <Card.Body>district</Card.Body>
                        </Accordion.Collapse>
                    </Accordion.Item>
                    </Accordion>
                )
            })


        }

    </div>
  )
}

export default Statedata
