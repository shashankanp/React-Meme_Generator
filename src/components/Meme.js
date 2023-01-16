import React, { useState } from "react";
import Data from "../memesData";

export default function Meme() {
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "https://i.imgflip.com/9ehk.jpg",
  });

  const [allMemeImages, setAllMemeImages] = useState(Data);

  function randImg() {
    const memesArr = allMemeImages.data.memes;
    const randNum = Math.floor(Math.random() * memesArr.length);
    const image = memesArr[randNum].url;
    setMeme((prevData) => {
      return {
        ...prevData,
        randomImage: image,
      };
    });
    console.log(image);
  }
  return (
    <main>
      <div className="form">
        <input type="text" placeholder="Top text" className="form--input" />
        <input type="text" placeholder="Bottom text" className="form--input" />
        <button onClick={randImg} className="form--button">
          Get a new meme image (͠≖ ͜ʖ͠≖)👌
        </button>
      </div>
      <img className="memeImage" src={meme.randomImage} />
    </main>
  );
}
