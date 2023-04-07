import { Box, CircularProgress, CircularProgressLabel, } from "@chakra-ui/react"

function HighlitedCircular({name}) {
  return (
    <>
    <div>
    <CircularProgress value={75} size="80px">
      <CircularProgressLabel>{"%"}</CircularProgressLabel>
    </CircularProgress>
    <p>{name}</p>
    </div>
    </>
    
  )
}
export default HighlitedCircular