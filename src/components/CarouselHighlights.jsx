import Carousel from 'nuka-carousel'
import image1 from '../assets/images/1.jpeg'
import image2 from '../assets/images/2.jpeg'
import image3 from '../assets/images/3.jpeg'
import { PropertyCard } from './PropertyCard'
import { renderCenterLeftControls, renderCenterRightControls } from './CarouselControls'

export const CarouselHighlights = ({ name }) => {
  return (
    <section className='mt-[2vw] mb-[6vw]'>
      <div className='flex items-center mb-2'>
        <p className='text-cyan-950 text-[35px] font-medium'>{name}</p>
        <p className='text-red-500 text-xl font-medium underline mx-5'>Ver más</p>
      </div>
      
      <Carousel
        autoplay={true}
        adaptiveHeight={false}
        slidesToShow={3}
        cellSpacing={0}
        className='px-[3vw]'
        renderCenterLeftControls={renderCenterLeftControls}
        renderCenterRightControls={renderCenterRightControls} 
        defaultControlsConfig={{
          pagingDotsStyle: {
            fill: '#FE5C40',
            margin: '0px 5px',
            position: 'relative',
            top: '50px',
          },
          pagingDotsClassName: 'text-[#FE5C40] text-[30px] font-bold',
        }}
      >
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
        <PropertyCard
          image={image3}
          title={'titulo del inmueble'}
          description={'inmueble.description'}
          price={500120}
        />
      </Carousel>
    </section>
  )
}
