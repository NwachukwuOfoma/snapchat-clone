import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { resetCameraImage, selectCameraImage } from './features/cameraSlice';
import "./Preview.css"
import CloseIcon from '@mui/icons-material/Close';
import TextFieldsIcon from '@mui/icons-material/TextFields';
import CreateIcon from '@mui/icons-material/Create';
import NoteIcon from '@mui/icons-material/Note';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import CropIcon from '@mui/icons-material/Crop';
import TimerIcon from '@mui/icons-material/Timer';
import SendIcon from '@mui/icons-material/Send';
import { v4 as uuid} from "uuid";
import { db, storage } from "./firebase"

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

    const sendPost = () => {
      const id = uuid();
      const uploadTask = storage.ref(`posts/${id}`).putString(cameraImage, "data_url")

      uploadTask.on('state_changed', null, (error) => {
        console.log(error)
      }, () => {
        storage.ref('posts').child(id).getDownloadURL().then((url) =>{
          db.collection('posts').add({
            imageUrl: url,
            username: 'Sonny',
            
          })
        })
      })
    }

  return (
    <div className='preview'>

        <CloseIcon onClick={closePreview} className='previewClose' />
        <div className='previewToolbarRight'>
        <TextFieldsIcon />
        <CreateIcon />
        <NoteIcon />
        <MusicNoteIcon />
        <AttachFileIcon />
        <CropIcon />
        <TimerIcon />
        </div>
        <img src={cameraImage} alt=''/>
        <div onClick={sendPost} className='previewFooter'>
          <h2> Send Now </h2>
          <SendIcon fontSize="small" className="previewSendIcon"/>
        </div>
    </div>
  )
}

export default Preview;