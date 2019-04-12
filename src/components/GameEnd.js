import React from "react"

function GameEnd(props){
  console.log(props.data.Score)
  console.log(props.data.questionCount)
  console.log(props.data.correct)
  if(props.data.isScoreHidden){
    return(
      <div className="gameStartEnd">
        <h3 className="descriptionOperation">Finished</h3>
        <button className="topicBtn" name="revealScore" onClick={props.scoreButton}>Click here to reveal your score!
        </button>
      </div>
    )
  }
  else{
    return(
      <div className="gameStartEnd">
        <h3 className="descriptionOperation">Finished</h3>
        <button className="topicBtn" name="Well Done!" onClick={props.sendData} >DONE!
        </button>
        <h5 className="scoreBoardOperation">Final Score: {props.data.Score}%</h5>
        </div>
    )
  }
}

export default GameEnd
