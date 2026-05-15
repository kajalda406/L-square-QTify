import leftArrow from "../../assets/left-arrow.svg";

function LeftNavigation({ onClick }) {
  return (
    <div onClick={onClick} style={styles.container}>
      <img src={leftArrow} alt="left" />
    </div>
  );
}

const styles = {
  container: {
    position: "absolute",
    left: "-20px",
    top: "40%",
    zIndex: 10,
    cursor: "pointer",
  },
};

export default LeftNavigation;