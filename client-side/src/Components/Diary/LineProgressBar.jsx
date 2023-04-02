import { Box, HStack, Progress } from '@chakra-ui/react'

import React from 'react'

const LineProgressBar = ({macro,calory='0kcal',available="0%"}) => {
  return (
    <div style={{width:"100%"}}>
        <div style={{width:"100%",display:'flex',gap:"20px",justifyContent:"space-between",alignItems:"center"}}>
        <Box>{macro}</Box>
        <Box gap="10px">
            <span>{calory}</span>
            <span>{available}</span>
           <Progress width={"100%"} value={100} />
        </Box>
        </div>
    </div>
  )
}

export default LineProgressBar