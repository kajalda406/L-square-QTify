import rightArrow from "../../assets/right-arrow.svg";

function RightNavigation({ onClick }) {
  return (
    <div onClick={onClick} style={styles.container}>
      <img src={rightArrow} alt="right" />
    </div>
  );
}

const styles = {
  container: {
    position: "absolute",
    right: "-20px",
    top: "40%",
    zIndex: 10,
    cursor: "pointer",
  },
};

export default RightNavigation;