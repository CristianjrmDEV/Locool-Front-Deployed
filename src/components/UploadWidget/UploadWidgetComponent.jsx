import React, { useState } from 'react';
import axios from 'axios';
import { Box } from '@mui/material';
import { Uploader } from "uploader";
import { UploadDropzone } from "react-uploader";

function UploadWidgetComponent() {
  // const [image, setImage] = useState("");
  // const [url, setUrl] = useState("");

  // const uploadImage = () => {
  //   const data = new FormData();
  //   data.append("file", image);
  //   data.append("upload_preset", "presetUnsignedLocool");
  //   data.append("folder", "locool");
  //   data.append("cloud_name", "locool");

  //   axios.post("https://api.cloudinary.com/v1_1/locool/image/upload/", data)
  //     .then(response => {
  //       setUrl(response.data.url);
  //       console.log(response)
  //     })
  //     .catch(error => {
  //       console.log(error);
  //     });
  // };

  // const MyDropzoneComponent = () => {
  //   const [image, setImage] = useState("");

  //   const uploadImage = () => {
  //     const data = new FormData();
  //     data.append("file", image);
  //     data.append("upload_preset", "presetUnsignedLocool");
  //     data.append("folder", "locool");
  //     data.append("cloud_name", "locool");

  //     axios
  //       .post("https://api.cloudinary.com/v1_1/locool/image/upload/", data)
  //       .then((response) => {
  //         setImage(null);
  //         console.log(response);
  //       })
  //       .catch((error) => {
  //         console.log(error);
  //       });
  //   };

  //   // Get production API keys from Upload.io
  //   const uploader = Uploader({
  //     apiKey: "free"
  //   });

  //   // Customize the dropzone UI (see "customization"):
  //   const options = { multiple: false,
  //     accept: "image/*",};

  //     const handleDrop = (files) => {
  //       setImage(files[0]);
  //     };

  //     const handleRemove = () => {
  //       setImage(null);
  //     };

  //   return (
  //     <UploadDropzone
  //       uploader={uploader} // Required.
  //       options={options} // Optional.
  //       onDrop={handleDrop}
  //       width="600px" // Optional.
  //       height="375px" // Optional.
  //       removeButton={false}
  //     >
  //       {image && (
  //         <div>
  //           <img src={URL.createObjectURL(image)} alt="upload preview" />
  //           <button onClick={uploadImage}>Upload</button>
  //           <button onClick={handleRemove}>Remove</button>
  //         </div>
  //       )}
  //       {!image && <div>Drag and drop an image here or click to browse</div>}
  //     </UploadDropzone>
  //   );
  // };
  const MyDropzoneComponent = () => {
    const [image, setImage] = useState(null);
  
    const handleDrop = (files) => {
      setImage(files[0]);
    };
  
    const handleRemove = () => {
      setImage(null);
    };
  
    const uploader = Uploader({
      apiKey: "free",
    });
  
    const options = {
      multiple: false,
      accept: "image/*",
    };
  
    const uploadImage = () => {
      const data = new FormData();
      data.append("file", image);
      data.append("upload_preset", "presetUnsignedLocool");
      data.append("folder", "locool");
      data.append("cloud_name", "locool");
  
      axios
        .post("https://api.cloudinary.com/v1_1/locool/image/upload/", data)
        .then((response) => {
          setImage(response.data.secure_url);
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
    };
  
    return (
      <div>
        <UploadDropzone
          uploader={uploader}
          options={options}
          onDrop={handleDrop}
          width="600px"
          height="375px"
          removeButton={false}
        >
          {image ? (
            <div>
              <img src={URL.createObjectURL(image)} alt="upload preview" />
              <button onClick={handleRemove}>Remove</button>
            </div>
          ) : (
            <div>Drag and drop an image here or click to browse</div>
          )}
        </UploadDropzone>
        {image && (
          <div>
            <button onClick={uploadImage}>Upload</button>
          </div>
        )}
      </div>
    );
  };

  // // Get production API keys from Upload.io
  // const uploader = Uploader({
  //   apiKey: "free"
  // });

  // // Customize the dropzone UI (see "customization"):
  // const options = { multi: true }

  // const MyDropzoneComponent = () =>
  //   <UploadDropzone uploader={uploader}       // Required.
  //     options={options}         // Optional.
  //     width="200px"             // Optional.
  //     height="200px"            // Optional.
  //     onUpdate={files => {      // Optional.
  //       if (files.length === 0) {
  //         console.log('No files selected.')
  //       } else {
  //         console.log('Files uploaded:');
  //         console.log(files.map(f => f.fileUrl));
  //         console.log(files)
  //       }
  //     }} />

  // return (
  //   <Box className='PEDRO'>
  //     <MyDropzoneComponent/>
  //     {/* <div>
  //       <input type="file" onChange={(e) => setImage(e.target.files[0])}></input>
  //       <button onClick={uploadImage}>Upload</button>
  //     </div>
  //     <div>
  //       <h1>Uploaded image will be displayed here</h1>
  //       <img src={url} alt="" />
  //     </div> */}
  //   </Box>
  // );
  return (
    <Box>
      <MyDropzoneComponent />
    </Box>
  )
}

export default UploadWidgetComponent;
