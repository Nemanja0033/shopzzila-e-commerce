import { Button } from "@mui/material"
import { ArrowLeft } from "lucide-react"

const BackButton = () => {
  return (
    <div className="md:fixed hidden md:inline z-10">
        <Button color="error" onClick={() => window.history.go(-1)}><ArrowLeft /></Button>
    </div>
  )
}

export default BackButton