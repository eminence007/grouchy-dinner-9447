import { Box, HStack, Progress } from '@chakra-ui/react'

import React from 'react'

const LineProgressBar = ({macro}) => {
  return (
    <div>
        <div style={{display:'flex',gap:"20px",alignItems:"center"}}>
        <Box>{macro}</Box>
        <div>
            <span>0.0 kcal</span>
            <span>0%</span>
           <Progress width={"100%"} value={100} />
        </div>
        </div>
    </div>
  )
}

export default LineProgressBar