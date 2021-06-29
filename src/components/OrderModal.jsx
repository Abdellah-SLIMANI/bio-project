import React from 'react'
import Modal from "react-modal";
import styled from 'styled-components';
import { paragraphe } from './lang';

const Title = styled.h2`
    font-family: Arial, Helvetica, sans-serif;
    text-align: center;
    font-size: 2rem;
    margin-bottom: 3rem;
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
    outline: none;
`

const Button = styled.button`
    padding: 9px;
    font-size: 1rem;
    font-weight: bold;
    color: white;
    border: none;
    background-color: #36753c;
`

function OrderModal({ isOpen, setIsOpen, lang }) {
    return (
        <Modal 
        isOpen={isOpen}
        onRequestClose={() => setIsOpen(false)}
        closeTimeoutMS={300}
        >
            <Title>{ paragraphe(lang, 12) }</Title>
            <Form>
                <Label>{ paragraphe(lang, 13) }</Label>
                <Input type="text" />
                <Label>{ paragraphe(lang, 14) }</Label>
                <Input type="text" />
                <Label>{ paragraphe(lang, 15) }</Label>
                <Input type="text" />
                <Label>{ paragraphe(lang, 16) }</Label>
                <Input type="number" />
                <Label>{ paragraphe(lang, 17) }</Label>
                <Input type="text" />
                <Label>{ paragraphe(lang, 18) }</Label>
                <Input type="text" />
                <Label>{ paragraphe(lang, 19) }</Label>
                <Input type="email" />
                <Button type="submit">{ paragraphe(lang, 16) }</Button>
            </Form>
        </Modal>
    )
}

export default OrderModal
