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
    color: #ba9261;
    font-family: 'Courier New', Courier, monospace;
    text-align: center;
    position: absolute;
    left: 40px;
    top: 470px;
    font-size: 2rem;
`

export {
    MainSlide,
    TreeImage,
    MainTitle
}