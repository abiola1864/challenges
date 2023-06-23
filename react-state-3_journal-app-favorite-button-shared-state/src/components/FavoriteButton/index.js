import { useState } from "react";
import "./FavoriteButton.css";
import { ReactComponent as StarFilled } from "./star-filled.svg";
import { ReactComponent as Star } from "./star.svg";


export default function FavoriteButton({ onToggleFavorite, isFavorite, id }) {
  const [favorite, setFavorite] = useState(isFavorite);

  const handleToggleFavorite = () => {
    setFavorite((prevFavorite) => !prevFavorite);
    if (typeof onToggleFavorite === "function") {
      onToggleFavorite(id);
    }
  };

  return (
    <button
      className="favorite-button"
      onClick={handleToggleFavorite}
      aria-label="favorite"
    >
      {favorite ? <StarFilled /> : <Star />}
    </button>
  );
}



// export default function FavoriteButton() {
//   const [isFavorite, setIsFavorite] = useState(false);

//   return (
//     <button
//       className="favorite-button"
//       onClick={() => {
//         setIsFavorite(!isFavorite);
//       }}
//       aria-label="favorite"
//     >
//       {isFavorite ? <StarFilled /> : <Star />}
//     </button>
//   );
// }


