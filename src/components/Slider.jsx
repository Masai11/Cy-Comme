import { ArrowLeftOutlined, ArrowRightOutlined } from '@material-ui/icons';
import React ,{useState}from 'react'
import styled from 'styled-components'
import { sliderItems } from '../Data';


const Cont = styled.div`
    width: 100%;
    height: 100vh;
    display:flex;
    // background-color: coral;
    position: relative;
    overflow: hidden;
`;

const InfoWrapper = styled.div`
    display: flex;
    height:100%;
    transform: translateX(${props => props.slideIndex *-100}vw);
    transition:all 1.5s ease

`;
const Slide =styled.div`
    width: 100vw;
    display:flex;
    height: 100vh;
    align-items: center;
    background-color:#${props =>props.backgroundColor};
`;
const ImgCont =styled.div`
    height: 100%;
    flex: 1;
`;

const Img =styled.img`
    height: 95%;
    margin-left:0.7vw;
    margin-top:1.5%;
`;



const InfoCont =styled.div`
    padding:50px;
    flex:1;
`;

const Header = styled.h1`
    font-size : 70px ;
`;

const Description = styled.p`
    margin:40px 0;
    font-size :20px ;
    font-weight :500;
    letter-spacing :4px
`;

const Btn = styled.button`
    padding:10px 20px;
    font-size :20px ;
    background-color :transparent;
    cursor :pointer;
`;


const SliderArrow = styled.div`
    width:50px;
    height:50px;
    background-color: #fff7f7;
    border-radius:50%;
    display:flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0 ;
    bottom: 0;
    margin:auto;
    left:${props => props.pointer === 'left' && "10px" } ;
    right:${props => props.pointer === 'right' && "10px" } ;
    opacity:0.6;
    cursor:pointer;
    z-index:2;


`;

const Slider = () => {
    const [slideIndex,setSlideIndex] = useState(0)
    const handleClick = (pointer) =>{

        if(pointer==="left"){
            setSlideIndex(slideIndex >0 ?slideIndex-1: 2)
        } else{
            setSlideIndex(slideIndex < 2 ?slideIndex+1: 0)
        }
    }
  return (
    <Cont>
        <SliderArrow onClick={()=>handleClick("left")} pointer = "left" >
            <ArrowLeftOutlined/>
        </SliderArrow>
        <InfoWrapper slideIndex= {slideIndex}>
            {sliderItems.map((item) =>(
                <Slide key={item.id} backgroundColor={item.backgroundColor}>
                <ImgCont>
                    <Img src={item.img}/>
                </ImgCont>
                <InfoCont>
                    <Header>{item.Header}</Header>
                    <Description>{item.Description}</Description>
                    <Btn>VIEW NOW</Btn>
                </InfoCont>

            </Slide>
            )) }
            
            
            
        </InfoWrapper>
        <SliderArrow onClick={()=>handleClick("right")} pointer = "right">
            <ArrowRightOutlined/>
        </SliderArrow>

    </Cont>
  )
}

export default Slider