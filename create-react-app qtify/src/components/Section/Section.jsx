import { useEffect, useState } from "react";
import styles from "./Section.module.css";
import axios from "axios";
import Card from "../Card/Card";
import Carousel from "../Carousel/Carousel";

function Section({ title, apiEndpoint }) {
  const [albums, setAlbums] = useState([]);
  const [collapse, setCollapse] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(apiEndpoint);
        setAlbums(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [apiEndpoint]);

  return (
    <div className={styles.section}>
      <div className={styles.header}>
        <h2>{title}</h2>
        <button onClick={() => setCollapse(!collapse)}>
          {collapse ? "Collapse" : "Show All"}
        </button>
      </div>

      {collapse ? (
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
      ) : (
        <Carousel
          data={albums}
          renderComponent={(album) => (
            <Card
              image={album.image}
              title={album.title}
              follows={album.follows}
            />
          )}
        />
      )}
    </div>
  );
}

export default Section;