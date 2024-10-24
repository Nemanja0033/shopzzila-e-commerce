import { Button } from "@mui/material"
import { ArrowLeft } from "lucide-react"

const BackButton = () => {
  return (
    <div>
        <Button color="error" onClick={() => window.history.go(-1)}><ArrowLeft /></Button>
    </div>
  )
}

export default BackButton