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
`

const MainTitle = styled.h1`
    font-family: Optima, sans-serif;
    font-size: 2rem;
    margin-top: 100px;
    text-align: left;
    color: black;
    transform: translate(0,100%)
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
`

export {
    MainSlide,
    TreeImage,
    MainTitle,
    MainLogo,
    MainSlideContentContainer,
}