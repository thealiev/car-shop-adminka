import React, { useState } from 'react';
import { cars as carsData } from './cars.data';
import CarItem from './car-item/CarItem';
import CreateCarForm from './create-car-form/CreateCarForm';

function Home() {
    const [cars, setCars] = useState(carsData)
    return (
        <div>
            <h2>Cars catalog</h2>
            <CreateCarForm setCars={setCars}/>
            <div>
                {cars.length ? (cars.map(car => (
                    <CarItem key={car.id} car={car} />
                ))
                ) : (
                    <p>there no cars</p>
                )}
            </div>
        </div>
    )
}

export default Home