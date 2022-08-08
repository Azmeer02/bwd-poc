import React from 'react'
import ReactPlayer from 'react-player'

const Index = () => {
  
  const onEnd = () => {
    console.log("HAHAHAHAHA")
  }

  return (
    <div>
      <ReactPlayer
        url="https://www.youtube.com/watch?v=HOfdboHvshg&disablekb=1"
        onEnded={onEnd}
        config={{
          youtube: {
            playerVars: {disablekb: 1}
          },
        }}
      />
    </div>
  )
}

export default Index