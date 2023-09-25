import React from 'react';
import clsx from 'clsx';
import { ArrowLeft, ArrowRight } from '../assets/images/Arrows';
  
export const renderCenterLeftControls = ({
  previousDisabled,
  previousSlide,
}) => (
  <button
    className={clsx(
      'cursor-pointer disabled:cursor-not-allowed',
      'appearance-none',
      'hover:opacity-100 disabled:opacity-30'
    )}
    disabled={previousDisabled}
    onClick={previousSlide}
    aria-label="Ir al anterior"
  >
    <ArrowLeft />
  </button>
);

export const renderCenterRightControls = ({ nextDisabled, nextSlide }) => (
  <button
    className={clsx(
      'cursor-pointer disabled:cursor-not-allowed',
      'appearance-none',
      'hover:opacity-100 disabled:opacity-30'
    )}
    disabled={nextDisabled}
    onClick={nextSlide}
    aria-label="Ir al siguiente"
  >
    <ArrowRight />
  </button>
);