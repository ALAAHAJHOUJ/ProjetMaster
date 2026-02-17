import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import Recettes from '../components/Recettes'
import fichier from '../data/data.json'
import Notfound2 from '../components/Notfound2'


function Acceuil() {
  const [Liste,setListe]=useState(fichier.content)
  const [textSaisie,setTextSiaie]=useState("")


  const filtrer=(text1)=>{  //fonction qui va filtrer la liste en se basant sur l'entrée saisie par l'utilisateur 

    //on doit maintenant filtrer en se basant sur text1
     const listeFiltre=fichier.content.filter((ele,key)=>{
      return ele.description.includes(text1)||ele.ingredients.includes(text1)||ele.titre.includes(text1)
     })

     setListe(listeFiltre)

     setTextSiaie(text1)


  }


  return (
    <>
        <Header changer={(text)=>{filtrer(text)}} ></Header>
        {Liste.length ? <Recettes liste={Liste}></Recettes>:<Notfound2 text={textSaisie}></Notfound2>}
    </>
  )
}

export default Acceuil