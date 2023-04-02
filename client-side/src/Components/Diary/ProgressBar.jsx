import { Box, CircularProgress, CircularProgressLabel, } from "@chakra-ui/react"

function ProgressBar({status}) {
  return (
    <>
    <div>
    <CircularProgress value={75} size="100px">
      <CircularProgressLabel>1928 <Box fontSize={"13px"}>Kcal</Box></CircularProgressLabel>
    </CircularProgress>
    <p>{status}</p>
    </div>
    </>
    
  )
}
export default ProgressBar