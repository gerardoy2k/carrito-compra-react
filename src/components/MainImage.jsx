import React, { useState } from 'react'
import Lightbox from 'yet-another-react-lightbox';
import Inline from 'yet-another-react-lightbox/plugins/inline'
import Rectangle6 from '../assets/images/Rectangle-6.png'

export const MainImage = () => {

  const [index, setIndex] = useState(0);
  const updateIndex = ({ index: current }) => {
    setIndex(index)
  };

  const slides = [
    {
      src: Rectangle6,
      alt: "image 1",
    }
  ]
  return (
    <div className='h-[29vw] w-full'>
      <div className='absolute left-0 right-0'>
        <Lightbox
          slides={slides}
          plugins={[Inline]}
          on={{
            view: updateIndex,
          }}
          carousel={{
            padding: 0,
            spacing: 0,
            imageFit: "cover",
          }}
          inline={{
            style: {
              aspectRatio: "21 / 6",
            },
          }}
        />
      </div>
    </div>
  )
}
