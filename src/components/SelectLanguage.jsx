import React from 'react'
import styled from "styled-components"

const Select = styled.select`
    position: absolute;
    top: 10px;
    right: 10px;
    font-size: 16px;
    padding: 2px 10px;
    border: none;
    outline: none;
    z-index: 500;
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
