import { useState, useEffect } from 'react'


function App() {
const [number,setNumber] = useState (4);
const [character,setCharacter] = useState ({

  name: "", 
  height: "",  
  eye_color: "", 
  gender: "",
});

const up =() => {
  setNumber((prev)=> prev + 1);
};

const down =() => {
  setNumber ((prev)=> {
  if (prev === 1) 1;
  return prev - 1;
 });
};

  useEffect(() => {
    fetch(`https://swapi.dev/api/people/${number}/`)
    .then((data) => data.json())
    .then ((data) => {
     setCharacter(prev => ({
      ...prev,
      name: data.name, 
      height: data.height,  
      eye_color: data.eye_color, 
      gender: data.gender,
     }));
    });
  },[number])
  return (
      <div>
        <div className="line">
          <span  onClick={down} className="number">-</span>
          <span className="number">{number}</span>
          <span onClick={up} className="number">+</span>{""}
        </div>
        <div className="person-line">
          <span className="label">Name:</span>{character.name}
          <span className="label"></span>
        </div>

        <div className="person-line">
          <span className="height">Height:</span>{character.height}
          <span className="height"></span>
        </div>

        <div className="person-line" >
          <span className="eye_color">Eye color:</span>{character.eye_color}
          <span className="eye_color"></span>
        </div>

        <div className="person-line" >
          <span className="gender">Gender:</span>{character.gender}
          <span className="gender"></span>
        </div>
      </div>
  )
}

export default App
