import React, { useState } from 'react';
import './CreateCar.css';
import { Button,Input, Stack } from '@mui/joy';


const clearData = {
     price: '',
     name: '',
     image: '',
}


function CreateCarForm({ setCars }) {
    const [data, setData] = useState(clearData);
 
    const createCar = e => {
        e.preventDefault()

        setCars(prev => [{
            id: prev.length + 1,
            ...data
        },
        ...prev,
        ])

        setData({
        price: '',
        name: '',
        image: '',
        })
    }

    return (
        <form>
            <Stack spacing={3}>

            <Input placeholder="Name" variant="outlined" color="neutral" onChange={e => setData(prev => ({
                ...prev,
                name: e.target.value
            }))}
            value={data.name}/>
            <Input placeholder="Price" variant="outlined" color="neutral" onChange={e => setData(prev => ({
                ...prev,
                price: e.target.value
            }))}
            value={data.price}/>
            <Input placeholder="Name" variant="outlined" color="neutral" onChange={e => setData(prev => ({
                ...prev,
                image: e.target.value
            }))}
            value={data.image}/>
      </Stack>
            
            <Button variant="outlined" onClick={e => createCar(e)} style={{marginTop:"20px"}}>
                add product
            </Button>
        </form>
    )
}

export default CreateCarForm