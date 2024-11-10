import "./App.css";

import LazyImage from "./components/LazyImage";
import { data } from "./constant/data";

function App() {
  return (
    <div data-test-id="component-app" className="container">
      <h1>
       SLC Chess Club
      </h1>
      <p>
        working site
      </p>
      <div className="flexbox">
        {data.map((item, index) => (
          <LazyImage src={item.src} caption={item.caption} description={item.description} key={index} />
        ))}
      </div>
    </div>
  );
}

export default App;
