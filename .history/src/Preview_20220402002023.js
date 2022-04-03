import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { selectCameraImage } from './features/cameraSlice';
import "./Preview.css"
import CloseIcon from '@mui/icons-material/Close';

function Preview() {
    const cameraImage = useSelector(selectCameraImage)
    const navigate = useNavigate()

    useEffect(() => {
        if (!cameraImage) {
            navigate("../")
        }
    },[cameraImage, navigate] )

  return (
    <div className='preview'>

        <CloseIcon
        <img src={cameraImage} alt=''/>
    </div>
  )
}

export default Preview;