import styled, { css } from "styled-components"
import bg from "../img/bgFinal.png"

const Slide = styled.div`
    padding: 1rem;
    width: 1280px;
    height: 720px;
    display: block;
    border-radius: 50px;
    font-family: Amatic;
    /* overflow: hidden; */
    
    ${({ variant }) => {
        switch (variant) {
            case "transparent":
                return `
                    background-color: transparent;
                    box-shadow: 20px 20px 20px rgba(0,0,0,0.5);
                    color: black;
                    & h2 {
                        font-weight: bold;
                    }
                    `
            case "gray":
                return `
                    background-color: #f9f9f952;
                    box-shadow: 20px 20px 20px rgba(0,0,0,0.5);
                    color: black;
                    & h2 {
                        font-weight: bold;
                    }
                    `
            case "block":
                return `
                    color: white;
                    background-color: rgba(114,168,93,0.6);
                    box-shadow: 20px 20px 20px rgba(0,0,0,0.5)
                `
            default:
                return `
                    color: white;
                    background-color: rgba(114,168,93,0.6);
                `
        }
    }}
`

const Title = styled.h2`
    font-size: 5.3rem;
    font-weight: 400;
    text-align: center;
    font-style: italic;
`

const Paragraph = styled.p`
    font-family: Optima;
    font-size: 3rem;
    letter-spacing: 1.4px;
    line-height: 1.2;
    display: block;
    width: fit-content;
    margin: auto;
`

const Spacing = styled.div`
    padding: 1rem 0;
    ${({h}) => h && css`
        padding: ${h}rem 0;
    `}
`

const Link = styled.a`
    color: inherit;
    text-decoration-color: red;
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

export {
    Slide,
    Title,
    Paragraph,
    Spacing,
    Link,
    Background
}