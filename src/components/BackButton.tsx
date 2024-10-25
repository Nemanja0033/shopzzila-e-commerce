import { Button } from "@mui/material"
import { ArrowLeft } from "lucide-react"

const BackButton = () => {
  return (
    <div className="fixed z-10">
        <Button color="error" onClick={() => window.history.go(-1)}><ArrowLeft /></Button>
    </div>
  )
}

export default BackButton