import Carousel from 'nuka-carousel'
import image1 from '../assets/images/1.jpeg'
import image2 from '../assets/images/2.jpeg'
import image3 from '../assets/images/3.jpeg'
import { PropertyCard } from './PropertyCard'
import { renderCenterLeftControls, renderCenterRightControls } from './CarouselControls'

export const CarouselOutstand = ({ name }) => {
  return (
    <div className=''>
      <p className='text-slate-300'>{name}</p>
      <Carousel
        autoplay={true}
        adaptiveHeight={true}
        
        renderCenterLeftControls={renderCenterLeftControls}
        renderCenterRightControls={renderCenterRightControls} >
        <PropertyCard
          image={image1}
          title={'titulo del inmueble'}
          description={'inmueble.description'}
          price={500120}
        />
        <PropertyCard
          image={image2}
          title={'titulo del inmueble'}
          description={'inmueble.description'}
          price={500120}
        />
        <PropertyCard
          image={image3}
          title={'titulo del inmueble'}
          description={'inmueble.description'}
          price={500120}
        />
      </Carousel>
    </div>
  )
}
