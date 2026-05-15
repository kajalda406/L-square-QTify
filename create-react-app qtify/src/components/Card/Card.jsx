import styles from "./Card.module.css";
import Chip from "@mui/material/Chip";

function Card({ image, title, follows, likes, type }) {
  const label =
    type === "song"
      ? `${likes} Likes`
      : `${follows} Follows`;

  return (
    <div className={styles.wrapper}>
      <div className={styles.card}>
        <div className={styles.imageContainer}>
          <img src={image} alt={title} />
        </div>

        <Chip label={label} className={styles.chip} />

        
      </div>
      <p className={styles.title}>{title}</p>
    </div>
  );
}

export default Card;