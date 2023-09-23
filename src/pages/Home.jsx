import React from 'react'
import { CarouselWeb } from '../components/CarouselWeb'
import { FilterHeader } from '../components/FilterHeader'
import { CarouselOutstand } from '../components/CarouselOutstand'
import { CityOptions } from '../components/CityOptions'
import { MainImage } from '../components/MainImage'

export const Home = () => {
    return (
        <>
            <div className="">
                <MainImage />
                <FilterHeader />
                <CarouselOutstand name="Propiedades Destacadas"/>
                <CarouselOutstand name="Corredores Destacadas" />
                <CityOptions />
            </div>
        </>
    )
}
