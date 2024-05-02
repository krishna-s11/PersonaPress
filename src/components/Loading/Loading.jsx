import React from 'react'
import "./loading.css"

const Loading = ({height,width}) => {
  return (
    <div className="load" style={{height: height, width: width}}></div>
  )
}

export default Loading