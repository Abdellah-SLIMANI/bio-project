import styled from "styled-components"

const MainSlide = styled.div`
    width: 1280px;
    height: 720px;
    display: block;
    position: relative;
`

const TreeImage = styled.img`
    height: 900px;
    width: auto;
    display: block;
    margin: auto;
    position: relative;
    bottom: -10px;
    transform: translate(-50%,-4%)
`

const MainTitle = styled.h1`
    font-family: Amatic;
    font-size: 4rem;
    text-align: center;
    position: absolute;
    right: 0;
    transform: translate(0%,150%);
`

const MainLogo = styled.img`
    width: auto;
    height: 100px;
    position: absolute;
`

export {
    MainSlide,
    TreeImage,
    MainTitle,
    MainLogo
}