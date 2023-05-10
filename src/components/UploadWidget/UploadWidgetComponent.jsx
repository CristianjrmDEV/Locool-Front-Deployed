import { Box } from '@mui/material';
import { Uploader } from "uploader";
import { UploadDropzone } from "react-uploader";
import uploadImageCloudinary from '../../services/cloudinary';
import PropTypes from 'prop-types'

function UploadWidgetComponent({handleImageValue, width, height}) {

  UploadWidgetComponent.propTypes = {
    handleImageValue: PropTypes.func,
    width: PropTypes.string,
    height: PropTypes.string
  }

  const uploadImage = async(imageUrl) => {
    const data = new FormData();
    data.append("file", imageUrl);
    data.append("upload_preset", "presetUnsignedLocool");
    data.append("folder", "locool");
    data.append("cloud_name", "locool");

    const url = await uploadImageCloudinary(data)
    handleImageValue(url)
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
        width={width} // Optional.
        height={height} // Optional.
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
