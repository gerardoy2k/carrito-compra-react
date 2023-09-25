import React from 'react'

export const MessageCenter = ({ message }) => {
  return (
    <section className="w-full text-center text-cyan-950 text-[50px] font-bold mt-[2vw]">
        { message }
    </section>
  )
}
