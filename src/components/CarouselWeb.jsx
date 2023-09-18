import Carousel from 'nuka-carousel'
import image1 from '../assets/images/1.jpeg'
import image2 from '../assets/images/2.jpeg'
import image3 from '../assets/images/3.jpeg'
import { renderCenterLeftControls, renderCenterRightControls } from './CarouselControls'
import { Image } from '@nextui-org/react'

export const CarouselWeb = () => {
  const imageHeight = 200;
  const imageWidth = 300;
  return (
    <div className=''>
      <Carousel
        autoplay={true}
        adaptiveHeight={false}
        autoplayInterval={4000}
        wrapAround={true}
        renderCenterLeftControls={renderCenterLeftControls}
        renderCenterRightControls={renderCenterRightControls} >
        <Image
          className=""
          width={imageWidth}
          height={imageHeight}
          alt="Logo"
          src={image1}
        />
       <Image
          className=""
          width={imageWidth}
          height={imageHeight}
          alt="Logo"
          src={image2}
        />
        <Image
          className=""
          width={imageWidth}
          height={imageHeight}
          alt="Logo"
          src={image3}
        />
      </Carousel>
    </div>
  )
}
