import React from 'react'
import { FilterHeader } from '../components/FilterHeader'
import { CarouselHighlights } from '../components/CarouselHighlights'
import { CityOptions } from '../components/CityOptions'
import { MainImage } from '../components/MainImage'
import { Ads } from '../components/Ads'
import { MessageCenter } from '../components/MessageCenter'

export const Home = () => {
    return (
        <>
            <MainImage />
            <FilterHeader />
            <Ads />
            <MessageCenter message="Explora y encuentra tu nuevo hogar" />
            <CarouselHighlights name="Propiedades Destacadas" />
            <CarouselHighlights name="Corredores Destacados" />
            <MessageCenter message="¿Dónde quieres vivir?" />
            <CityOptions />
        </>
    )
}
