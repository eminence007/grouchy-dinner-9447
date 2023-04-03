import React from 'react'
import { Progress } from '@chakra-ui/react'

const MicroNutrientElement = ({name,weight="4g",available="40%"}) => {
  return (
    <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
        <span>{name}</span>
        <span >{weight}</span>
        <>
        <Progress colorScheme={'pink'} width={"50%"} value={40} />
        </>
        <span>{available}</span>
    </div>
  )
}

export default MicroNutrientElement