import React from 'react'
import { useParams } from 'react-router-dom'
import fichier from '../data/data.json'



function RecetteDetails() {
  const {id}=useParams()
  const [element]=fichier.content.filter((ele,key)=>{
    return ele.id==id
  })
  
  console.log(element.imgLink)
  return (
    <div className='w-full min-h-[100vh] flex justify-center items-center gap-12 pt-[130px]'>
      <img src={element.imgLink} alt="image de projet" className='rounded-[12px] w-[47%]' />
      <div className='w-[43%]'>
         <div className='font-[700] text-[30px] mb-3'>{element.titre}</div>
         <div>
          <span className='text-gray-500 text-[17px] font-[600]'>Temps de préparation</span>
          <div className='rounded-[30px] mt-1 bg-amber-400 w-fit px-2 py-1 font-[700]'>{element.tempsMinute} min</div>
         </div>
         <div className='mt-5 '>
           <div className='text-gray-500 text-[17px] font-[600]'>Ingrédients</div>
           <div className='flex flex-wrap gap-6'>
                {element.ingredients.map((ele,key)=>{
                    return <div key={key} className='w-[30%] h-[70px]'>
                             <div className='font-[600] text-[17px]'>{ele.nom}</div>
                             <div className='text-gray-500'>{ele.quantite}</div>
                           </div>
                })}
           </div>
         </div>
         <div className=''>
           <div className='text-gray-500 text-[17px] font-[600] mt-4 mb-1'>description</div>
           <div className='w-full leading-7 text-[#000000e6] font-[400] text-[15px]'>{element.description}</div>
         </div>
      </div>
    </div>
  )
}

export default RecetteDetails