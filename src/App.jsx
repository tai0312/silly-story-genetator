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
  const ukus = "us";
  let customname = "";
  
  function handleChange(event){
    customname = event.target.value;
  }

  function handleClick(){
    setXItem(randomValueFromArray(xChoices));
    setYItem(randomValueFromArray(yChoices));
    setZItem(randomValueFromArray(zChoices));
    setShowStory(true);
    if(customname == ""){
      setName("Bob");
    } else {
      setName(customname);
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
        <input type="radio" value="us" checked={ukus === "us"} />
        <label htmlFor="uk">UK</label>
        <input type="radio" value="uk" checked={ukus === "uk"} />
      </div>
      <div>
        <button onClick={handleClick}>Generate random story</button>
      </div>
      {showStory && (
        <p>
          It was 94 fahrenheit outside, so {xItem} went for a walk. When they
          got to {yItem}, they stared in horror for a few moments, then {zItem}.
          {name} saw the whole thing, but was not surprised — {xItem} weighs 300
          pounds, and it was a hot day.
        </p>
      )}
    </>
  );
}