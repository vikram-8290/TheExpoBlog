import React, { useState } from "react";
import "./style.css";

const LikeButtonCompoent = () => {
  const [like, setLike] = useState(0),
    [isLike, setIsLike] = useState(false),
    onLikeButtonClick = () => {
      setLike(like + (isLike?-1:1));
      setIsLike(!isLike);
    };

  return (
    <>
      <button
        className={"like-button " + (isLike ? "liked" : "")}
        onClick={onLikeButtonClick}
      >
        {"Like"}
      </button>
      <p className="like-p">{like}</p>
      <style>{`
        .like-button {
            font-size: 1rem;
            padding: 5px 10px;
            color:  #585858;
        }
        .liked {
            font-weight: bold;
            color: white;
          }
      `}</style>
    </>
  );
};

export default LikeButtonCompoent;