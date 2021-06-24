import styled from "styled-components"

const MainSlide = styled.div`
    width: 1280px;
    height: 720px;
    display: block;
    position: relative;
`

const TreeImage = styled.img`
    height: 1000px;
    width: auto;
    display: block;
    margin: auto;
    position: relative;
    bottom: -10px;
    transform: translate(-0%,-10%);
    float: left;
`

const MainTitle = styled.h1`
    font-family: Amatic;
    font-size: 3rem;
    text-align: center;
    color: black;
`

const MainSlideContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    transform: translate(35%, 120%);
    width: fit-content;
    float: right;
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