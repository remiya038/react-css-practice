/** @jsxRuntime classic */
/** @jsx jsx */

import { jsx, css } from "@emotion/react";

export const Emotion = () => {
  const containerStyle = css`
    border: solid 2px #329eff;
    border-radius: 20px;
    padding: 8px;
    margin: 8px;
    display: flex;
    justify-content: space-around;
    align-items: center;
  `;

  const title = css({
    color: "#329eff"
  });

  return (
    <div css={containerStyle}>
      <p css={title}>emotion</p>
      <button>fight</button>
    </div>
  );
};
