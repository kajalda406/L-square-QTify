import { useEffect, useState } from "react";
import styles from "./Section.module.css";
import axios from "axios";
import Card from "../Card/Card";
import Carousel from "../Carousel/Carousel";
import { Tabs, Tab } from "@mui/material";

function Section({
  title,
  apiEndpoint,
  showCollapse = true,
  isSongs = false,
}) {
  const [data, setData] = useState([]);
  const [collapse, setCollapse] = useState(false);
  const [genres, setGenres] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState("all");

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(apiEndpoint);
      setData(response.data);
    };

    fetchData();
  }, [apiEndpoint]);

  useEffect(() => {
    if (isSongs) {
      const fetchGenres = async () => {
        const response = await axios.get(
          "https://qtify-backend.labs.crio.do/genres"
        );
        setGenres(response.data.data);
      };

      fetchGenres();
    }
  }, [isSongs]);

  const filteredData =
    selectedGenre === "all"
      ? data
      : data.filter((song) => song.genre.key === selectedGenre);

  return (
    <div className={styles.section}>
      <div className={styles.header}>
        <h2>{title}</h2>

        {showCollapse && (
          <button onClick={() => setCollapse(!collapse)}>
            {collapse ? "Collapse" : "Show All"}
          </button>
        )}
      </div>

      {isSongs && (
        <Tabs
          value={selectedGenre}
          onChange={(e, newValue) => setSelectedGenre(newValue)}
          variant="scrollable"
          scrollButtons="auto"
          allowScrollButtonsMobile
          textColor="inherit"
          indicatorColor="primary"
          className={styles.tabs}
        >
          <Tab label="All" value="all" />
          {genres.map((genre) => (
            <Tab
              key={genre.key}
              label={genre.label}
              value={genre.key}
            />
          ))}
        </Tabs>
      )}

      {!isSongs && collapse ? (
        <div className={styles.grid}>
          {data.map((item) => (
            <Card
              key={item.id}
              image={item.image}
              title={item.title}
              follows={item.follows}
            />
          ))}
        </div>
      ) : (
        <Carousel
          data={isSongs ? filteredData : data}
          renderComponent={(item) => (
            <Card
              image={item.image}
              title={item.title}
              follows={item.follows}
              likes={item.likes}
              type={isSongs ? "song" : "album"}
            />
          )}
        />
      )}
    </div>
  );
}

export default Section;