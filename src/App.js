import logo from "./logo.svg";
import "./App.css";
import "./style.css";
import img from "./fb.jpg";
import video from "./video.mp4";

function App() {
  return (
    <div className="App">
      <div style={{ border: "solid 1px black", maxWidth: "100vw" }}>
        <h1 className="title red">NEW PROJECT </h1>

        <br />

        <img src={img} width="200" height="200" />

        <br />

        <img src="/instagram.jpg" width="240" height="240" />
      </div>
      <video width="320" height="240" controls>
        <source src={video} type="video/mp4" />
      </video>
    </div>
  );
}

export default App;
