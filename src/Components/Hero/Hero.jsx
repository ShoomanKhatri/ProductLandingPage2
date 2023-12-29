import './Hero.css';

const Hero = ({herodData,setHeroCount,heroCount,setPlayStatus,playStatus}) => {
    return (
        <div className='hero'>
            <p>{herodData.text1}</p>
            <p>{heroData.text2}</p>
            </div>
    )
}

export default Hero;