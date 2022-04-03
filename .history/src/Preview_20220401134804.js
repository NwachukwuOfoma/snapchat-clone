import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { selectCameraImage } from './features/cameraSlice';
import "./Preview.css"

function Preview() {
    const cameraImage = useSelector(selectCameraImage)
    const navigate = useNavigate()

    useEffect(() => {
        if (!cameraImage) {
            navigate(-1)
        }
    },[cameraImage, navigate] )

  return (
    <div className='preview'>
        <h2>WHO IS THIS SEXY YUNG MAN??????</h2>
        <img src={cameraImage} alt=''/>
    </div>
  )
}

export default Preview;