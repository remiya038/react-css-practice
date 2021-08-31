export const InlineStyle = () => {
  const style = {
    border: "solid 2px #329eff",
    borderRadius: "20px",
    padding: "8px",
    margin: "8px",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center"
  };
  const styleTitle = {
    color: "#329eff"
  };

  const styleButton = {
    backgroundColor: "#329eff",
    border: "none",
    borderRadius: "10px"
  };

  return (
    <div style={style}>
      <p style={styleTitle}>-InlineStyle-</p>
      <button style={styleButton}>FIGHT</button>
    </div>
  );
};
