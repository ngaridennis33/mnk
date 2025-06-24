import React from 'react'

type TitleProps = {
    title:string;
}
const Title = ({title}:TitleProps) => {
  return (
    <div className="mx-auto text-center mb-4">
        <h1 className=" text-white p-1 w-fit md:text-xl py-2 bg-dark-100 px-2 rounded-xl rounded-b-none">{title} </h1>
        <hr className="h-1 bg-dark-100 border-none mb-2" />
    </div>
  )
}

export default Title