import { CssModules } from "./componets/CssModules";
import { Emotion } from "./componets/Emotion";
import { InlineStyle } from "./componets/InlineStyle";
import { StyledComponents } from "./componets/StyledComponents";
import { StyledJsx } from "./componets/StyledJsx";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <InlineStyle />
      <CssModules />
      <StyledJsx />
      <StyledComponents />
      <Emotion />
    </div>
  );
}
