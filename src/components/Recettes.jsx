import Recette from './Recette'


function Recettes({liste}) {
  console.log(liste)
  return (
    <div className='w-[95%] mx-auto bg-[#c6c6c65d] flex flex-col items-end gap-4'>
        <span className='text-[25px]'>35 Recette(s)</span>
        <div className='w-full flex flex-wrap justify-start items-start gap-16'>
          {liste.map((ele,key)=>{
            return <Recette key={key} id={ele.id} image={ele.imgLink} cat={ele.categorie} ingredient={ele.ingredients} titre={ele.titre} description={ele.description} tempsMinutes={ele.tempsMinutes}></Recette>
          })}
        </div>
    </div>
  )
}

export default Recettes