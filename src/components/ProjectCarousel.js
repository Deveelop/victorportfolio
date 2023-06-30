import Carousel from 'react-bootstrap/Carousel';
import styles from './ProjectCarousel.module.css'
function ProjectCarousel() {
  return (
    <div className={styles.carousel}>
    <Carousel data-bs-theme="dark">
        
        <Carousel.Item>
            
            <img  src='/images/color1.png' alt='First slide'/>
          
          
        </Carousel.Item>
        <Carousel.Item>
            <img  src='/images/color2.jpg' alt='Second slide'/>
          
        </Carousel.Item>
        <Carousel.Item>
            <img  src='/images/color3.jpg' alt='Third slide'/>
           
        </Carousel.Item>
        
        </Carousel>
        </div>
  )
}

export default ProjectCarousel