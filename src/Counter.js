import { useState } from "react";
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import { useEffect } from "react";
export function Counter() {
  const [like, setLike] = useState(0);
  const [dislike, setDisLike] = useState(0);
  useEffect(()=>{
    console.log("Like is update",like)
  },[like, dislike]);

  const incrementLike = ()=> setLike(like+1);
 const incrementDislike = ()=> setDisLike(dislike+1)
  return (
    <div className="counter-container">
      <IconButton className="like-dislike" onClick={incrementLike} aria-label="like button"
        color="primary">
        <Badge badgeContent={like} color="primary">
          👍
        </Badge>
      </IconButton>

      <IconButton className="like-dislike" onClick={incrementDislike} aria-label="dislike button"
        Color="error">
        <Badge badgeContent={dislike} color="error">
          👎
        </Badge>
      </IconButton>
    </div>
  );
}
