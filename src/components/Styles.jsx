import styled, { css } from "styled-components"

const Slide = styled.div`
    padding: 1rem;
    width: 68vw;
    height: auto;
    display: block;
    font-family: Optima, sans-serif;
    background-color: #f9f9f952;
    padding-bottom: 10%;
    box-shadow: 0px 0px 10px rgba(0,0,0,0.3);
    color: black;
    & h2 {
        font-weight: bold;
    }
    @media screen  and (max-width: 760px){
        width: 250vw;
    }
    
`

const Title = styled.h2`
    font-size: 3rem;
    font-weight: 400;
    margin-top: 3%;
    text-align: center;
    color: #e21137
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
    color: #e21137;
    font-size: 1rem;

    @media screen  and (max-width: 760px){
        font-size: 10px;
    }
`

const LinkSlide = styled.a`
    color: #e21137;
    font-size: 1.5rem;
`

const Background = styled.div`
    width: 110vw;
    height: 110vh;
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
    text-align: -webkit-right;
    align-items: right;
    font-size: 8px;
    
    @media screen  and (max-width: 760px){
        width: min-content;
    }
`

const NavLink = styled.li`
    padding: 2%;
    font-family: Optima;
    font-weight: bold;
    text-align: -webkit-right;
    width: fit-content;

    &:last-child {
        margin-top: 15%;
    }
`

const RedText = styled.span`
    color: #e4022c;
`

const FlexDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    & img {
        width: 35%
    }
`

const ExitButton = styled.a`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    place-items: center;
    // position: fixed;
    z-index: 500;
    opacity: 0.7;
    // top: 50%;
    right: 10px;
    // transform: translateY(-100%);
    cursor: pointer;
    position: absolute;
    top: 0;
    
    & > img {
        width: 45%;
    }
`

const BookCover = styled.img`
    width: auto;
    margin: auto;
    padding-inline: 1rem;

    @media screen  and (max-width: 760px){
        display: none;
        padding: 0;
    }
`

const Form = styled.form`
    font-family: Arial, Helvetica, sans-serif;
    max-width: 500px;
    margin: auto;
    display: flex;
    flex-direction: column;
`

const Label = styled.label`
    margin-bottom: 8px;
`

const Input = styled.input`
    padding: 10px;
    margin-bottom: 1rem;
    border: 1px solid #a0a0a0;
    border-radius: 10px;
    outline: none;
`

const Button = styled.button`
    padding: 9px;
    font-size: 1rem;
    font-weight: bold;
    color: white;
    border: none;
    background-color: #e21137;
`
const Select = styled.select`
padding: 10px;
margin-bottom: 1rem;
border: 1px solid #a0a0a0;
border-radius: 10px;
outline: none;
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
    LinkSlide,
    ExitButton,
    BookCover,
    Label,
    Input,
    Form,
    Button,
    Select
}