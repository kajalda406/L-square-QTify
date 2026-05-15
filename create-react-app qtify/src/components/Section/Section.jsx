import  { useEffect, useState } from "react";
import styles from "./Section.module.css";
import axios from "axios";
import Card from "../Card/Card";

function Section({ title }) {
  const [albums, setAlbums] = useState([]);
  const [collapse, setCollapse] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://qtify-backend.labs.crio.do/albums/top"
        );
        setAlbums(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className={styles.section}>
      <div className={styles.header}>
        <h2>{title}</h2>
        <button onClick={() => setCollapse(!collapse)}>
          {collapse ? "Show All" : "Collapse"}
        </button>
      </div>

      {!collapse && (
        <div className={styles.grid}>
          {albums.map((album) => (
            <Card
              key={album.id}
              image={album.image}
              title={album.title}
              follows={album.follows}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Section;