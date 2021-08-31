import styled from "styled-components"

const MainSlide = styled.div`
    display: flex;
    align-items: center;
    width: 85vw;
    height: 80vh;
    position: relative;
    
`

const TreeImage = styled.img`
    height: 90vh;
    width: auto;
    display: block;
    margin: auto;
    position: relative;
    bottom: -10px;
    transform: translate(-0%,-10%);
    float: left;
    @media screen  and (max-width: 760px){
        transform: translate(-40%,-10%);
        height: 120vh;
    }
`

const MainTitle = styled.h1`
    font-family: Optima, sans-serif;
    font-size: 2rem;
    margin-top: 100px;
    text-align: left;
    color: black;
    transform: translate(0,100%);
    @media screen  and (max-width: 760px){
        transform: translate(-80%,150%);
        font-size: 3rem;
    }
`

const MainSlideContentContainer = styled.div`
    // display: flex;
    // flex-direction: column;
    // transform: translate(35%, 120%);
    // width: fit-content;
    // float: right;
`

const MainLogo = styled.img`
    width: auto;
    height: 100px;
    @media screen  and (max-width: 760px){
        height: 60px
    }
`

export {
    MainSlide,
    TreeImage,
    MainTitle,
    MainLogo,
    MainSlideContentContainer,
}