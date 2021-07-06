import styled, { css } from "styled-components"
import bg from "../img/bgFinal.png"

const Slide = styled.div`
    padding: 1rem;
    width: 75%;
    height: auto;
    display: block;
    font-family: Optima;
    background-color: #f9f9f952;
    padding-bottom: 10%;
    box-shadow: 0px 0px 10px rgba(0,0,0,0.3);
    color: black;
    & h2 {
        font-weight: bold;
    }
`

const Title = styled.h2`
    font-size: 3rem;
    font-weight: 400;
    margin-top: 3%;
    text-align: center;
    font-style: italic;
`

const Paragraph = styled.p`
    font-family: Optima;
    font-size: 2rem;
    letter-spacing: 1.4px;
    line-height: 1.2;
    display: block;
    width: fit-content;
    margin: auto;
    margin-top: 5%;
`

const Spacing = styled.div`
    // padding: 1rem 0;
    // ${({h}) => h && css`
    //     padding: ${h}rem 0;
    // `}
`

const Link = styled.a`
    color: red;
    font-size: 1rem;
`

const LinkSlide = styled.a`
    color: red;
    font-size: 1.5rem;
`

const Background = styled.div`
    width: 110vw;
    height: 110vh;
    // background: url(${bg}) no-repeat center center/cover;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`

const Soil = styled.img`
    width: 80vw;
    position: absolute;
    bottom: 0;
    height: auto;
    transform: translate(-25%, 5%);
`

const NavList = styled.ul`
    position: absolute;
    top: 0;
    right: 3%;
    list-style: none;
    text-align: right;
    align-items: right;
`

const NavLink = styled.li`
    padding: 5%;
    font-family: Optima;
    font-weight: bold;
    text-align: -webkit-right;
`

const RedText = styled.span`
    color: #e4022c;
`

const FlexDiv = styled.div`
    display: flex;
    flex-direction: row;
    & img {
        padding: 2em;
        width: 35%
    }
`



export {
    Slide,
    Title,
    Paragraph,
    Spacing,
    Link,
    Background,
    Soil,
    NavList,
    NavLink,
    RedText,
    FlexDiv,
    LinkSlide
}