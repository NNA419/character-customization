import React, { useState, useEffect } from "react";
import "./App.css";
import Avatar from "./components/Avatar";
import Partlist from "./components/Partlist";
const total = {
  body: 17,
  eyes: 17,
  hair: 73,
  mouth: 24,
  eyebrows: 15,
  glasses: 17,
  clothing1: 5,
  clothing2: 5,
  clothing3: 9,
};
function App() {
  const [body, setBody] = useState(1);
  const [eyes, setEyes] = useState(1);
  const [eyebrows, setEyebrow] = useState(1);
  const [hair, setHair] = useState(1);
  const [clothing1, setClothing1] = useState(1);
  const [clothing2, setClothing2] = useState(1);
  const [clothing3, setClothing3] = useState(1);
  const [mouth, setMouth] = useState(1);
  const [glasses, setGlasses] = useState(1);


  function randomize() {
    setBody(Math.floor(Math.random() * total.body) + 1);
    setEyes(Math.floor(Math.random() * total.eyes) + 1);
    setHair(Math.floor(Math.random() * total.hair) + 1);
    setClothing1(Math.floor(Math.random() * total.clothing1) + 1);
    setClothing2(Math.floor(Math.random() * total.clothing2) + 1);
    setClothing3(Math.floor(Math.random() * total.clothing3) + 1);
    setEyebrow(Math.floor(Math.random() * total.eyebrows) + 1);
    setMouth(Math.floor(Math.random() * total.mouth) + 1);
    setGlasses(Math.floor(Math.random() * total.glasses) + 1);
  }
  useEffect(() => {
    randomize();
  }, []);

  return (
    <div className="App">
      <div className="title">CHARACTER</div>
      <div className="subtitle">🛠️CUSTOMIZATION🛠️</div>
      <div className="divider"></div>
      <div className="avatar-group gap-30">
        <div>
          <div className="avatar-wrapper">
            <Avatar
              body={body}
              eyes={eyes} 
              hair={hair}
              clothing1={clothing1}
              clothing2={clothing2}
              clothing3={clothing3}
              mouth={mouth}
              eyebrows={eyebrows}
              glasses={glasses}
            />
            <div className="text-center">
              <button className="button" onClick={() => randomize()}>
                Randomize!
              </button>
            </div>
          </div>
        </div>
        
        <div>
          <div className="list-section">
            <h2>Body</h2>
            <Partlist total={total.body} set={setBody} path="body" />
          </div>
          <div className="list-section">
            <h2>Eyes</h2>
            <Partlist total={total.eyes} set={setEyes} path="eyes" />
          </div>
          <div className="list-section">
            <h2>Hair</h2>
            <Partlist total={total.hair} set={setHair} path="hair" />
          </div>
          <div className="list-section">
            <h2>Mouth</h2>
            <Partlist total={total.mouth} set={setMouth} path="mouths" />
          </div>
          <div className="list-section">
            <h2>Eyebrows</h2>
            <Partlist total={total.eyebrows} set={setEyebrow} path="eyebrows" />
          </div>
          <div className="list-section">
            <h2>Glasses</h2>
            <Partlist
              total={total.glasses}
              set={setGlasses}
              path="accessories/glasses"
            />
          </div>
          <div className="list-section">
            <h2>Clothing (L1)</h2>
            <Partlist
              total={total.clothing1}
              set={setClothing1}
              path="clothes/layer_1"
            />
          </div>
          <div className="list-section">
            <h2>Clothing (L2)</h2>
            <Partlist
              total={total.clothing2}
              set={setClothing2}
              path="clothes/layer_2"
            />
          </div>
          <div className="list-section">
            <h2>Clothing (L3)</h2>
            <Partlist
              total={total.clothing3}
              set={setClothing3}
              path="clothes/layer_3"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
export default App;
