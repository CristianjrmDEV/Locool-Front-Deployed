import { useState } from "react";
import { createUploadWidget } from "cloudinary-react";

function UploadWidgetComponent() {
  const [uploadedImage, setUploadedImage] = useState("");

  const cloudName = import.meta.env.VITE_CLOUD_NAME;
  const uploadPreset = import.meta.env.VITE_UPLOAD_PRESET;
  const folder = import.meta.env.VITE_FOLDER;

  const widget = createUploadWidget(
    {
      cloudName: cloudName,
      uploadPreset: uploadPreset,
      folder: folder,
    },
    (error, result) => {
      if (!error && result && result.event === "success") {
        console.log("Done! Here is the image info: ", result.info);
        setUploadedImage(result.info.secure_url);
      }
    }
  );

  const handleUploadClick = () => {
    widget.open();
  };

  return (
    <div>
      <button onClick={handleUploadClick}>Upload Image</button>
      <br />
      <img src={uploadedImage} alt="Uploaded" />
    </div>
  );
}

export default UploadWidgetComponent;
