import style from "./App.module.css";

import Random from "./Components/Random";
import Tag from "./Components/Tag";

function App() {  
  return (
    <div className={style.background}>
      <div className={style.heading}>
        <h1>Random Gifs</h1>
      </div>
      <Random />
      <Tag/>
    </div>
  );
}

export default App;
