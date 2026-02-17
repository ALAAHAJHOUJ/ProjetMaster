import React from 'react'

function Notfound2(props) {
  return (
    <div className='w-full text-center mt-10 font-[500] text-[30px] h-[100vh]'>Aucune recette ne contient "{props.text}",veuillez réssayer</div>
  )
}

export default Notfound2