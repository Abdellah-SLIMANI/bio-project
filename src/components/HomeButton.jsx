import React from 'react'
import styled from 'styled-components'
import img from "../img/home.png"

const Button = styled.a`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: #1f1f1f;
    display: grid;
    place-items: center;
    position: fixed;
    z-index: 500;
    opacity: 0.8;
    top: 50%;
    right: 10px;
    transform: translateY(-50%);
    cursor: pointer;
    
    & > img {
        width: 45%;
    }
`
function HomeButton() {
    return (
        <Button
            href="#/step-1"
        >
            <img src={img} />
        </Button>
    )
}

export default HomeButton
