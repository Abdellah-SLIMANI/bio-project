import React from 'react'
import styled from "styled-components"

const Select = styled.select`
    position: absolute;
    top: 4%;
    right: 4%;
    font-size: 16px;
    padding: 2px 10px;
    border: none;
    outline: none;
    z-index: 500;
    padding: 7px;
    padding-inline: 3rem;
    border: solid 2px black;
    font-family: 'Optima';
    font-size: larger;
    color: black;
    // border-radius: 14px;
    font-weight: bold;
    background: none;
`

function SelectLanguage({ lang, handleChange }) {
    return (
        <Select value={lang} onChange={handleChange} >
            <option value="en">English</option>
            <option value="fr">Français</option>
            <option value="du">Deutsch</option>
        </Select>
    )
}

export default SelectLanguage
