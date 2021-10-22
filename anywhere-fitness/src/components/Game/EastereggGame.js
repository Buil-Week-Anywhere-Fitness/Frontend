import React, { useState } from "react";
import './easteregg.css' 

export default function Game() {

    const[count, setCount] = useState(0)

    function clickJump(){
            setCount(prevCount => prevCount +1)
            console.log(`jumped ${1 + count} times`)
            let character = document.getElementById("character")
            let block = document.getElementById("block")
            //console.log(`looking for ${character}`) //this is for debugging
            if (character.classList !== "animate") {
                character.classList.add("animate") 
            }
            setTimeout(function(){
                character.classList.remove("animate")
            }, 500)

            //checks if hit
            setInterval(function(){
                let characterTop =
                parseInt(
                window.getComputedStyle(character)
                    .getPropertyValue("top"))
        
                let blockLeft =
                parseInt(
                window.getComputedStyle(block)
                    .getPropertyValue("left"))
        
                if(blockLeft<20 && 
                blockLeft>0 &&
                characterTop>=130){
                    block.style.animation = "none"
                    alert("caught")
                    window.location.reload()
                }
            },10)
    }


    return(
        // onClick={jump()}
    <div  className="Game"> 
        <h5>Game</h5>
        <head>
        <meta charset="UTF-8"/>
        <link rel="stylesheet"/>
        </head>

        <body>
            <div id="game" >
                <div id="character"></div>

                <div id="block"></div>
                    <div id="clickToStarttWrapper">
                        <button id="clickToStart" onClick={() => clickJump()}> 
                                                  Click to start/jump <br/> You jumped {count} times.
                        </button>
                    </div>
                    <div id="exitGame">
                        <button id="exitGame" onClick={() =>  window.location.href='/'}>Exit game</button>
                    </div> 
                    <script src="easteregg.js"></script>
                    <div id="spaceBar">
                        <div onKeyPress={() =>  window.location.href='/'}></div>
                    </div> 
                </div>
        </body>
    </div>
    )
}
