import './Background.css';
import video1 from '../../assets/spinningtyre.mp4';
import image1 from '../../assets/tyre1.jpg';
import image2 from '../../assets/tyre2.png';

const Background = (playStatus, heroCount) => {

  if (playStatus = false) {
    return (
      <video className='background' autoplay loop muted>
        <source src={video1} type='video/mp4' />
      </video>
    )
  }
  else if (heroCount === 0) {
    return <img src={image1} className='background' alt="image1" />
  }

  else if (heroCount === 1) {
    return <img src={image2} className='background' alt="image2" />
  }

  else if (heroCount === 2) {
    return <img src={image3} className='background' alt="image3" />
  }
}

export default Background;