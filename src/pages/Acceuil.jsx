import React from 'react'
import recette from '../assets/RecetteMaroc111.jpg'



function Acceuil() {
  return (
    <header className='bg-red-600 w-[92%] mx-auto relative'>
       <img alt='image de projet' src={recette} className='w-full min-h-84.25 object-cover object-[center_center] absolute top-0 right-0'>
       </img>
      <div className='bg-[#0b0b0b97] w-full h-full absolute right-0 top-0 flex justify-center items-center'>
            <span className='text-[#ffe081] text-[36px] inline-block w-[80%] text-center'>DECOUVEREZ NOS TENDANCES QUI FLAMBENT A TRAVERS NOS MEILLEURES RECETTES</span>
      </div>
       <ul className='absolute top-[20px] right-[20px] flex flex-wrap gap-3 content-start justify-center'>
            <li className='py-3 px-4 border-[1px] border-white text-white rounded-[10px] cursor-pointer hover:bg-[#d4d4d493] transition-all duration-500'>Login</li>
            <li className='p-3 border-[1px] border-white text-white rounded-[10px] bg-[#FFC312] cursor-pointer hover:bg-[#ffc41290] transition-all duration-500'>Ajouter une recette</li>
       </ul>

    </header>
  )
}

export default Acceuil