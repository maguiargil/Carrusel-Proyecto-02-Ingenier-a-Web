import { CarouselData } from './CarouselData'

import React from 'react'


const Card = () => {
  const ArrayTwo = CarouselData.slice(4, 8)
  ArrayTwo.map((x => x.id_index = ArrayTwo.indexOf(x)))
  /*const indice_a_modificar = ArrayTwo.findIndex((item => item.id_index == item.id_index))*/
  /*ArrayTwo[indice_a_modificar].id_index = 0*/
  console.log(ArrayTwo)
  /*console.log(indice_a_modificar)*/
  return (
    <div>Card</div>
  )
}

export default Card