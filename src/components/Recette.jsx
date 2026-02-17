import React from 'react'
import { useNavigate } from 'react-router-dom'

function Recette(props) {
  const naviguer=useNavigate()

  return (
    <div onClick={()=>{naviguer(`/${props.id}/details`)}} className='w-[380px] max-[450px]:w-[90%] h-[780px] overflow-hidden shadow-[0px_4px_34px_30px_rgba(0,0,0,0.04)] bg-white rounded-[21px]'>
       <img src={props.image} alt='image de projet' className='w-[100%]' />
       <div className='w-full box-border pt-5 pl-6'>
          <span className='text-[17px] font-[500]'>{props.titre}</span>
       </div>
       <div className='w-full mt-10 box-border px-6'>
          <span className='text-gray-500 text-[18px]'>Recette</span>
          <div className='h-[100px] w-full mt-5 overflow-hidden leading-[1.2] hover:h-[160px] font-[400]'>{props.description}</div>
       </div>

       <div className='w-full flex justify-start items-center flex-wrap gap-2 mt-6 box-border pl-6'>
             <div className='text-gray-500 w-full text-start text-[18px]'>ingredients</div>
             {props.ingredient.map((ele,key)=>{
                 return <div key={ele.nom} className='w-[45%] leading-5 h-[50px] mt-5'>
                  <span className='block text-[14px] font-[500]'>{ele.nom}</span>
                  <span className='block text-gray-500'>{ele.quantite}</span>
                 </div>
             })}
       </div>
    </div>
  )
}

export default Recette