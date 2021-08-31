export const StyledJsx = () => {
  return (
    <>
      <div className="container">
        <p className="title">StyledJsx</p>
        <button className="button">FIGHT</button>
      </div>

      <style jsx="true">{`
        .container {
          border: solid 2px #329eff;
          border-radius: 20px;
          padding: 8px;
          margin: 8px;
          display: flex;
          justify-content: space-around;
          align-items: center;
        }
        .title {
          color: #329eff;
        }

        .button {
          background-color: #329eff;
          border: none;
          border-radius: 10px;
        }
      `}</style>
    </>
  );
};
