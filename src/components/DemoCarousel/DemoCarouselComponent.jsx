import Carousel from 'react-bootstrap/Carousel'
import './DemoCarouselComponent.css'
import { Box } from '@mui/material'
function DemoCarousel() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100 h-70"
          src="https://res.cloudinary.com/locool/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1683880430/scroller1_oysxiw.jpg?_s=public-apps"
          alt="First slide"
          style={{
            maxHeight: 'calc(100vh - 65px)',
            width: '100%',
            objectFit: 'cover',
          }}
        />
        <Carousel.Caption>
          <h3
            style={{
              fontSize: '12vw',
              color: 'white',
              fontWeight: 'bold',
              textShadow: '3px 3px #000',
              lineHeight: 3.5,
            }}
          >
            Fresh & local
          </h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://res.cloudinary.com/locool/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1683880429/scroller2_sekioq.jpg?_s=public-apps"
          alt="Second slide"
          style={{
            maxHeight: 'calc(100vh - 65px)',
            width: '100%',
            objectFit: 'cover',
          }}
        />

        <Carousel.Caption>
          <h3
            style={{
              fontSize: '12vw',
              color: 'white',
              fontWeight: 'bold',
              textShadow: '3px 3px #000',
              lineHeight: 3.5,
            }}
          >
            Fair trade
          </h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://res.cloudinary.com/locool/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1683880430/scroller3_lilto3.jpg?_s=public-apps"
          alt="Third slide"
          style={{
            maxHeight: 'calc(100vh - 65px)',
            width: '100%',
            objectFit: 'cover',
          }}
        />

        <Carousel.Caption>
          <Box
            sx={{
              fontSize: '12vw',
              color: 'white',
              fontWeight: 'bold',
              textShadow: '3px 3px #000',
              lineHeight: 1,
            }}
          >
            Support the environment
          </Box>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}

export default DemoCarousel
