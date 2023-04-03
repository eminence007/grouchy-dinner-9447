import React from 'react'
import MicroNutrientElement from './MicroNutrientElement'

const MicroNutrientCart = ({name,weight,available}) => {
  return (
    <div>
         <MicroNutrientElement name={name} weight={weight} available={available}/>
    </div>
  )
}

export default MicroNutrientCart