import { Box } from '@mui/material';
import { Uploader } from "uploader";
import { UploadDropzone } from "react-uploader";
import uploadImageCloudinary from '../../services/cloudinary';
import PropTypes from 'prop-types'
import { mainTheme } from '../../themes/mainTheme';

function UploadWidgetComponent({handleImageValue,handleImageLoading, width, height}) {

  UploadWidgetComponent.propTypes = {
    handleImageValue: PropTypes.func,
    width: PropTypes.string,
    height: PropTypes.string
  }

  // Get production API keys from Upload.io
  const uploader = Uploader({
    apiKey: "free"
  });

  // Customize the dropzone UI (see "customization"):
  const options = { 
    styles: {
      colors: {
        primary: mainTheme.palette.green.main,     // Primary buttons & links
      }
    },
    multi: false
  };

  return (
    <Box>
      <UploadDropzone
        uploader={uploader} // Required.
        options={options} // Optional.
        width={width} // Optional.
        height={height} // Optional.
        onUpdate={files => {
          console.log('olita')
          if (files.length === 0){
            handleImageLoading('')
          }
            files.map(x => {
              console.log(x)
              handleImageLoading(x.fileUrl)
            })
          }
        }
        onComplete={files => alert(files.map(x => x.fileUrl).join("\n"))}
        
        
      />
    </Box>
  )
}

export default UploadWidgetComponent;
