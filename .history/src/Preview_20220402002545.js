import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { resetCameraImage, selectCameraImage } from './features/cameraSlice';
import "./Preview.css"
import CloseIcon from '@mui/icons-material/Close';

function Preview() {
    const cameraImage = useSelector(selectCameraImage);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        if (!cameraImage) {
            navigate("../");
        }
    },[cameraImage, navigate] )

    const closePreview = () => {
        dispatch(resetCameraImage());
    }

  return (
    <div className='preview'>

        <CloseIcon onClick={closePreview} className='previewClose' />
        <img src={cameraImage} alt=''/>
    </div>
  )
}

export default Preview;