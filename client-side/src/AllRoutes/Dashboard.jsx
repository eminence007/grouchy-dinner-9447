import React from 'react'
import styles from "./Dashboard.module.css"

import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  HStack
} from '@chakra-ui/react'

const Dashboard = () => {
  return (
    <div>
      <div className={styles.leftSide}>
      <Accordion defaultIndex={[0]} allowMultiple>
  <AccordionItem border={"none"}>
    <h2>
      <AccordionButton>
        <HStack>
         <Box>FOOD</Box>
         <Box>EXCERCISE</Box>
         <Box>BIOMETRIC</Box>
         <Box>NOTE</Box>
        </HStack>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel width={"90%"} height={"200px"} pb={4} border={"1px solid black"} padding={"20px"}>
      
    </AccordionPanel>
  </AccordionItem>

 
</Accordion>
      </div>

      {/* Right Side Part (Not Moving Part) */}
      <div className={styles.rightSide}></div>
    </div>
  )
}

export default Dashboard