import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Box } from '@mui/material';
import { Uploader } from "uploader";
import { UploadDropzone } from "react-uploader";

function UploadWidgetComponent(props) {
  const [image, setImage] = useState("");

  useEffect(()=>{
    console.log(image)
  },[image])

  const serviciopost = async(datos) =>{
    try {
      const {data} = await axios.post("https://api.cloudinary.com/v1_1/locool/image/upload/", datos)
        props.handleImageValue(data.url)
    } catch (error) {
      throw new Error(error)
    }
  }

  const uploadImage = (imageUrl) => {
    const data = new FormData();
    data.append("file", imageUrl);
    data.append("upload_preset", "presetUnsignedLocool");
    data.append("folder", "locool");
    data.append("cloud_name", "locool");

    serviciopost(data)

    
  };

  // Get production API keys from Upload.io
  const uploader = Uploader({
    apiKey: "free"
  });

  // Customize the dropzone UI (see "customization"):
  const options = { multi: true };

  return (
    <Box>
      <UploadDropzone
      uploader={uploader} // Required.
      options={options} // Optional.
      width="600px" // Optional.
      height="375px" // Optional.
      onUpdate={(files) => {
        if (files.length === 0) {
          console.log("No files selected.");
        } else {
          console.log("Files uploaded:");
          console.log(files.map((f) => f.fileUrl));
          uploadImage(files[0].fileUrl);
        }
      }}
    />
    </Box>
  )
}

export default UploadWidgetComponent;
