import React from 'react'
import Card from 'react-bootstrap/Card';
import Statedata from './Statedata';

function India() {
  return (
    <div className='row'>
        <div className='col-md-12'>
            <h1>INDIA</h1>
            <img className='img-fluid' src="https://flagsapi.com/IN/flat/64.png" alt='indian-flag'/>
        </div>

        <div className='col-md-12'>
            <div className='row'>
                <div className='col-md-3'>
                <Card bg={'primary'} text={'white'} style={{ width: '18rem'}}>
                    <Card.Body className='text-center'>
                        <Card.Title>Total cases</Card.Title>
                        <Card.Subtitle className="">15345</Card.Subtitle>
                        <Card.Text>
                            [Today:354  ]
                        </Card.Text>
                    </Card.Body>
                </Card>
                </div>
                <div className='col-md-3'>
                <Card bg={'warning'} text={'white'} style={{ width: '18rem'}}>
                    <Card.Body className='text-center'>
                        <Card.Title>Active cases</Card.Title>
                        <Card.Subtitle className="">42342</Card.Subtitle>
                        <Card.Text>
                            [Today:423]
                        </Card.Text>
                    </Card.Body>
                </Card>
                </div>
                <div className='col-md-3'>
                <Card bg={'success'} text={'white'} style={{ width: '18rem'}}>
                    <Card.Body className='text-center'>
                        <Card.Title>Recovered</Card.Title>
                        <Card.Subtitle className="">Card Subtitle</Card.Subtitle>
                        <Card.Text>
                            [Today:51]
                        </Card.Text>
                    </Card.Body>
                </Card>
                </div>
                <div className='col-md-3'>
                <Card bg={'danger'} text={'white'} style={{ width: '18rem'}}>
                    <Card.Body className='text-center'>
                        <Card.Title>Total Death</Card.Title>
                        <Card.Subtitle className="">3122</Card.Subtitle>
                        <Card.Text>
                            [Today:12]
                        </Card.Text>
                    </Card.Body>
                </Card>
                </div>
            </div>
        </div>
        <Statedata/>
    </div>
  )
}

export default India
