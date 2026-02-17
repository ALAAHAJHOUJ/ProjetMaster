import { useEffect, useRef } from 'react'
import recette from '../assets/RecetteMaroc111.jpg'
import { IoIosSearch } from 'react-icons/io'


function Header(props) {
  const champs=useRef()


  const envoyer=()=>{


     if(champs.current.value.trim().length>=3){  //on doit d'abord verifier que la taille de la  valeur du champs est supérieur a 3
      console.log(champs.current.value) 
      props.changer(champs.current.value)
     }


  }

  return (
        <header className='min-w-[325px] w-[92%] max-w-[1440px] mx-auto relative'>
              <div className='w-full '>
                 <img src={recette} alt="image de projet" className='w-full min-h-[337px] object-cover object-[center_center]' />
              </div>
              <div className='bg-[#0b0b0bb1] w-full h-full absolute right-0 top-0 flex flex-col justify-center items-center box-border pt-[60px]'>
                    <h1 className='text-[#FFD15B] leading-[1.1] font-[400] inline-block max-w-[50%] text-[clamp(1rem,4vw,44px)] text-center mb-2'>DECOUVEREZ NOS TENDANCES QUI FLAMBENT A TRAVERS NOS MEILLEURES RECETTES</h1>
                    <div className='w-[50%] min-w-[200px] h-[clamp(52px,8vw,72px)] relative flex justify-end items-center'>
                        <input ref={champs} type="text" className='w-full h-full absolute right-0 top-0 bg-[#6362629a] rounded-[10px] box-border pl-5 placeholder:text-[#a1a1a1] text-white' placeholder='Saisir une valeur...' />
                        <div onClick={envoyer} className='group aspect-square hover:bg-[#FFD15B] cursor-pointer transition-all duration-500 h-[65%] aspect-square bg-[#212121] rounded-[10px] mr-4 z-30 flex justify-center items-center'>
                          <IoIosSearch size={30} className=' text-white group-hover:text-black transition-all duration-500'></IoIosSearch>
                        </div>
                    </div>
              
              </div>
              <ul className='absolute top-[20px] right-[20px] flex flex-wrap gap-3 content-start justify-center'>
                    <li className='py-3 px-4 border-[1px] border-white text-white rounded-[10px] cursor-pointer hover:bg-[#d4d4d4c1] hover:text-black transition-all duration-500'>Login</li>
                    <li className='p-3 border-[1px] border-white text-white rounded-[10px] bg-[#FFC312] cursor-pointer hover:bg-[#ffc412ad] hover:text-black transition-all duration-500'>Ajouter une recette</li>
              </ul>
    
        </header>
  )
}

export default Header