import React from 'react';
import clsx from 'clsx';
import leftArrow from '../assets/images/left-arrow.png';
import rightArrow from '../assets/images/right-arrow.png';
  
export const renderCenterLeftControls = ({
  previousDisabled,
  previousSlide,
}) => (
  <button
    className={clsx(
      'bg-transparent border-none',
      'cursor-pointer disabled:cursor-not-allowed',
      'appearance-none flex items-center m-3',
      'text-black opacity-70 hover:opacity-100 disabled:opacity-30'
    )}
    disabled={previousDisabled}
    onClick={previousSlide}
    aria-label="Go to previous slide"
  >
    <img src={leftArrow} className='h-7 w-7' />
  </button>
);

export const renderCenterRightControls = ({ nextDisabled, nextSlide }) => (
  <button
    className={clsx(
      'bg-transparent border-none',
      'cursor-pointer disabled:cursor-not-allowed',
      'appearance-none flex items-center m-3',
      'text-black opacity-70 hover:opacity-100 disabled:opacity-30'
    )}
    disabled={nextDisabled}
    onClick={nextSlide}
    aria-label="Go to next slide"
  >
    <img src={rightArrow} className='h-7 w-7' />
  </button>
);