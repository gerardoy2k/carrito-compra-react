import { Button } from '@nextui-org/react'
import React from 'react'

export const CityOptions = () => {
    const chileCities = [
        "Santiago",
        "Puente Alto",
        "Antofagasta",
        "Viña del Mar",
        "Valparaíso",
        "Talcahuano",
        "San Bernardo",
        "Temuco",
        "Iquique",
        "Concepción",
        "Rancagua",
        "La Pintana",
        "Talca",
        "Arica",
        "Coquimbo",
        "Puerto Montt",
        "La Serena",
        "Chillán",
        "Calama",
        "Osorno"
    ];

    return (
        <>
            <p className='text-slate-300 mt-4'>Ciudades</p>
            <div className='grid grid-cols-5 gap-y-3 gap-x-6 mt-4 px-4'>
                {chileCities.map((city, index) => (
                    <Button
                        key={index}
                        color="warning"
                        variant='flat'
                        className="capitalize"
                    >
                        {city}
                    </Button>
                ))}
            </div>
        </>
    )
}
