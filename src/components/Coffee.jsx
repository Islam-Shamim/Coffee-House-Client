import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import CoffeeCard from './CoffeeCard';

export default function Coffee() {
    const loadedCoffees = useLoaderData();
    console.log("Loaded Coffees:", loadedCoffees); // Debugging

    const [coffees, setCoffees] = useState(loadedCoffees || []);

    return (
        <div className="container mx-auto my-4">
            <h1 className="text-4xl font-bold my-4 text-center">Coffee House</h1>
            <div className="grid md:grid-cols-3 gap-6">
                {
                    coffees.map((coffee) => (
                        <CoffeeCard 
                            key={coffee._id} 
                            coffee={coffee} 
                            coffees={coffees}
                            setCoffees={setCoffees}
                        />
                    ))
                }
            </div>
        </div>
    );
}
