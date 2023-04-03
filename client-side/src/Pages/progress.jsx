import { CircularProgress, CircularProgressLabel } from "@chakra-ui/react"

function MyComponent() {
  return (
    <CircularProgress value={75} size="120px">
      <CircularProgressLabel>75%</CircularProgressLabel>
    </CircularProgress>
  )
}
export default MyComponent