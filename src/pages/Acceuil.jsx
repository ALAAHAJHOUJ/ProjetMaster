import React, { useState } from 'react'
import Header from '../components/Header'
import Recettes from '../components/Recettes'
import fichier from '../data/data.json'
import Notfound2 from '../components/Notfound2'


function Acceuil() {
  const [Liste,setListe]=useState(fichier.content)

  const filtrer=()=>{  //fonction qui va filtrer la liste en se basant sur l'entrée saisie par l'utilisateur 
    
  }

  return (
    <>
        <Header changer={(text)=>{filtrer(text)}} ></Header>
        {Liste ? <Recettes liste={Liste}></Recettes>:<Notfound2></Notfound2>}
    </>
  )
}

export default Acceuil