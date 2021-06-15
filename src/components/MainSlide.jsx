import styled from "styled-components"

const MainSlide = styled.div`
    width: 1280px;
    height: 720px;
    display: block;
    position: relative;
`

const TreeImage = styled.img`
    height: 800px;
    width: auto;
    display: block;
    margin: auto;
    position: relative;
    bottom: -10px;
    transform: translate(0,10%)
`

const MainTitle = styled.h1`
    font-family: Amatic;
    font-size: 3.5rem;
    text-align: center;
    position: absolute;
    left: 50%;
    transform: translate(-50%,-100%);
`

export {
    MainSlide,
    TreeImage,
    MainTitle
}