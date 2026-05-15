import styles from "./Card.module.css";
import Chip from "@mui/material/Chip";

function Card({ image, title, follows }) {
  return (
    <div className={styles.wrapper}>
      
      {/* Image Card */}
      <div className={styles.card}>
        <div className={styles.imageContainer}>
          <img src={image} alt={title} />
        </div>

        <div className={styles.chipContainer}>
          <Chip 
            label={`${follows} Follows`} 
            className={styles.chip}
          />
        </div>
      </div>

      {/* Album Title OUTSIDE */}
      <p className={styles.title}>{title}</p>

    </div>
  );
}

export default Card;