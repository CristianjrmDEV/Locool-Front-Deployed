import Carousel from 'react-bootstrap/Carousel'
import './DemoCarouselComponent.css'
import { Box } from '@mui/material'
function DemoCarousel() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100 h-70"
          src="./src/assets/images/product/scroller1.jpg"
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
          src="./src/assets/images/product/scroller2.jpg"
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
          src="./src/assets/images/product/scroller3.jpg"
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
