import { useState } from "react";

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

export default function App() {

  const xChoices = ["Willy the Goblin","Big Daddy","Father Christmas"];
  const yChoices = ["the soup kitchen","Disneyland","the White House"];
  const zChoices = ["spontaneously combusted","melted into a puddle on the sidewalk","turned into a slug and crawled away"];

  const [showStory,setShowStory] = useState(false);
  const [xItem,setXItem] = useState(randomValueFromArray(xChoices));
  const [yItem,setYItem] = useState(randomValueFromArray(yChoices));
  const [zItem,setZItem] = useState(randomValueFromArray(zChoices));
  const [name,setName] = useState("Bob");
  const [ukus,setUkUs] = useState("us");
  const [weight,setWeight] = useState("300 pounds");
  const [temperature,setTemperature] = useState("94 fahrenheit");
  const [customName,setCustomname] = useState("");

  function handleChange(event){
    setCustomname(event.target.value);
  }

  function handleChangeUkUs(event){
    setUkUs(event.target.value);
    console.log(customName);
  }

  function handleClick(){
    setXItem(randomValueFromArray(xChoices));
    setYItem(randomValueFromArray(yChoices));
    setZItem(randomValueFromArray(zChoices));
    setShowStory(true);
    console.log(customName);
    if(customName === ""){
      setName("Bob");
    } else {
      setName(customName);
    }
    if(ukus === "us"){
      setWeight("300 pounds");
      setTemperature("94 fahrenheit");
    } else {
      setWeight("21 stone");
      setTemperature("34 centigrade");
    }
  }

  

  return (
    <>
      <div>
        <label htmlFor="customname">Enter custom name:</label>
        <input type="text" placeholder="" onChange={handleChange}/>
      </div>
      <div>
        <label htmlFor="us">US</label>
        <input type="radio" value="us" checked={ukus === "us"} onChange={handleChangeUkUs}/>
        <label htmlFor="uk">UK</label>
        <input type="radio" value="uk" checked={ukus === "uk"} onChange={handleChangeUkUs}/>
      </div>
      <div>
        <button onClick={handleClick}>Generate random story</button>
      </div>
      {showStory && (
        <p>
          It was {temperature} outside, so {xItem} went for a walk. When they
          got to {yItem}, they stared in horror for a few moments, then {zItem}.
          {name} saw the whole thing, but was not surprised — {xItem} weighs {weight}, and it was a hot day.
        </p>
      )}
    </>
  );
}