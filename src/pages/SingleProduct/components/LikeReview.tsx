import { ThumbsUp } from "lucide-react"
import { useState } from "react"

const LikeReview = () => {

    const [likes, setLikes] = useState<number | null>(null);
    const [isClicked, setIsClicked] = useState<boolean>(false);

    const like = () => {
        setLikes(likes! + 1)
        setIsClicked(true)
    }

    const unlike = () => {
        setLikes(likes == 0 ? 0 : likes! - 1)
        setIsClicked(false)
    }

  return (
    <div className='flex'>
        <ThumbsUp onClick={isClicked == true ? unlike : like }  color="red" className="cursor-pointer"/> {likes}
    </div>
  )
}

export default LikeReview