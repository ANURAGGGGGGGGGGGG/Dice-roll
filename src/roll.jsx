import React, { useState } from 'react'
import Img1 from "./dice/1.png"
import Img2 from "./dice/2.png"
import Img3 from "./dice/3.png"
import Img4 from "./dice/4.png"
import Img5 from "./dice/5.png"
import Img6 from "./dice/6.png"

const Roll = () => {
    const [num, setNum] = useState(Img1)
    const [nums, setNums] = useState(Img4)
    const [players, setPlayers] = useState("Dice game")
    const imgs = [Img1, Img2, Img3, Img4, Img5, Img6]

    const rolls = () => {
        const dices = Math.floor(Math.random() * 6)
        const dicess = Math.floor(Math.random() * 6)
        setNum(imgs[dices])
        setNums(imgs[dicess])

        if (dices > dicess) {
            setPlayers("Ridhi wins")
        } else if (dices === dicess) {
            setPlayers("Draw")
        }
        else {
            setPlayers("Anurag wins")
        }
    }
   
    return (
        <>
            <div className="con">
                <h1>{players}</h1>
                <div className='container'>

                    <div className='player1'>
                        <h2>Ridhi</h2>
                        <img src={num} alt="here is img" />

                    </div>
                    <div className='player2'>
                        <h2>Anurag</h2>
                        <img src={nums} alt="" width="" />
                    </div>
                </div>
                <button onClick={rolls}>Roll the dice</button>
            </div>

        </>
    )
}

export default Roll
