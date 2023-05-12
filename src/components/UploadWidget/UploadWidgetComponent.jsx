import { Box } from '@mui/material';
import { Uploader } from "uploader";
import { UploadDropzone } from "react-uploader";
import uploadImageCloudinary from '../../services/cloudinary';
import PropTypes from 'prop-types'
import { mainTheme } from '../../themes/mainTheme';

function UploadWidgetComponent({handleImageValue,handleImageLoading,imageBefore, width, height}) {

  UploadWidgetComponent.propTypes = {
    handleImageValue: PropTypes.func,
    width: PropTypes.string,
    height: PropTypes.string,
    imageBefore: PropTypes.string
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
          if (files.length === 0 && imageBefore !== undefined){
            handleImageLoading(imageBefore)
          }else if(files.length === 0){
            console.log('vaciada')
            handleImageLoading('123')
          }
            files.map(x => {
              console.log('urllll')
              console.log(x.fileUrl)
              console.log('urllll')
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
