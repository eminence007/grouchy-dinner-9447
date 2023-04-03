import { Box, CircularProgress, CircularProgressLabel, } from "@chakra-ui/react"

function CircularProgressTotal({toalPercent}) {
  return (
    <>
    <div>
    <CircularProgress value={75} size="80px">
      <CircularProgressLabel>{toalPercent}</CircularProgressLabel>
    </CircularProgress>
    <p>All target</p>
    </div>
    </>
    
  )
}
export default CircularProgressTotal