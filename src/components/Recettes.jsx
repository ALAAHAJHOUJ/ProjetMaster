import React from 'react'
import Recette from './Recette'


function Recettes() {
  const Recettes1=[1,2,3,4,5]
  return (
    <div className='w-[95%] mx-auto bg-[#c6c6c65d] flex flex-col items-end gap-4'>
      <span className='text-[25px]'>35 Recette(s)</span>
      <div className='w-full flex flex-wrap justify-start items-start gap-16'>
       {Recettes1.map((ele,key)=>{
        return <Recette key={key} indice={ele}></Recette>
       })}
      </div>
    </div>
  )
}

export default Recettes