import { data } from "Data";
import CustomSlider from "./components/CustomSlider";
import { GlobalStyles } from "./globalStyle";

function App() {
  return (
    <div>
      <GlobalStyles />
      <CustomSlider data={data} />
    </div>
  );
}

export default App;
