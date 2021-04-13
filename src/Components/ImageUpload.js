import React, { useState } from 'react';
import { Button } from '@material-ui/core';
import firebase from "firebase";
import { storage, db } from '../repository/Firestore/config.firebase';

function ImageUpload(username){
    const [caption, setCaption] = useState('');
    const [image, setImage] = useState(null);
    const [progress, setProgress] = useState(0);
    
const handleChange =(e) =>{
    if(e.target.files[0]){
        setImage(e.target.files[0]);
    }
};

const handleUpload = () => {
    console.log("upload")
    const uploadTask = storage.ref('images/${image.name}').put(image);
        uploadTask.on(
            "statechanged",
            (snapshot) => {
                const progress = Math.round(
                    (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                );
                setProgress(progress);
            },
            (error) => {
                console.log(error);
                alert(error.message);
            },
            () => {
                storage
                    .ref("images")
                    .child(image.name)
                    .getDownloadURL()
                    .then(url => {
                        db.collection("posts").add({
                            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                            caption: caption,
                            imageUrl: url,
                            username: username,
                        });
                        setProgress(0);
                        setCaption("");
                        setImage(null);
                    });

            }
        );
};
    return (
            <div>
                    <progress className="imageupload__progress" value={progress} max="100" />
                    <input type="text" placeholder="Enter a caption " onChange={event => setCaption(event.target.value)} value={caption}/>
                    <input type="file" onChange={handleChange}/>
                    <Button onclick={handleUpload}>Upload</Button>
            </div>
    )
}
export default ImageUpload