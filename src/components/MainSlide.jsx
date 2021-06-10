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
`

const MainTitle = styled.h1`
    font-family: 'Courier New', Courier, monospace;
    text-align: center;
    position: absolute;
    left: 50%;
    transform: translate(-50%,-150%);
    font-size: 2rem;
`

export {
    MainSlide,
    TreeImage,
    MainTitle
}