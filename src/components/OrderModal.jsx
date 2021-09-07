import React, { useEffect,useRef } from 'react'
import Modal from 'react-bootstrap/Modal'
import styled from 'styled-components';
import { paragraphe } from './lang';
import {ExitButton} from '../components/Styles';
import img from "../img/croix.png"
import { Col, ModalBody, Row } from 'react-bootstrap';
import ModalHeader from 'react-bootstrap/esm/ModalHeader';

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

function OrderModal({ isOpen, setIsOpen, lang }) {
    const refs= {
        name: useRef(),
        first_name: useRef(),
        adresse: useRef(),
        postal_code: useRef(),
        city: useRef(),
        coutry: useRef(),
        email: useRef()
    };

    const preventDefaultBehavior = (event) => {
        event.preventDefault();
        event.returnValue = false;
        event.cancelBubble = true;
        console.log(event)
    }
    const normalFaultyKeys= {
        "b": 66,
        "p": 80,
        " ": 32,
        "." : 190,
    }
    const faultyEventKeys = {
        'up': 38,
        "down": 40,
        "left": 37,
        "right": 39,
        "tab": 9,
    }

    const allFaultyKeys = {
        ...normalFaultyKeys,
        ...faultyEventKeys
    }
    useEffect(() => {
            Object.keys(refs).map(ref => {
                refs[ref].current && refs[ref].current.addEventListener('keyup' , (event)=>{
                    Object.keys(allFaultyKeys).map(faultyKey => {
                        if(event.keyCode == normalFaultyKeys[faultyKey]){
                            preventDefaultBehavior(event)
                            refs[ref].current.value =  refs[ref].current.value + faultyKey
                        }else if (event.keyCode == faultyEventKeys[faultyKey]){
                            preventDefaultBehavior(event)
                        }
                    })
                })
            }) 
    },[refs])

    return (
        <Modal 
        show={isOpen}
        onHide={() => setIsOpen(false)}
        >
            <ModalHeader  style={{padding: '1.5rem'}}>
            <ExitButton
                      onClick={()=>{setIsOpen(false)}}
                      style={{float: 'right'}}
                  >
                      <img src={img} />
                  </ExitButton>
            </ModalHeader>
                  <ModalBody>
                  <Form style={{margin: '4rem'}}>
                <Row>
                    <Col>
                    <Label>{ paragraphe(lang, 13) }</Label>
                <Input type="text"  ref ={refs.name}/>
                </Col>
                <Col>
                <Label>{ paragraphe(lang, 14) }</Label>
                <Input type="text"  ref ={refs.first_name}/>
                </Col>
                </Row>

                <Label>{ paragraphe(lang, 15) }</Label>
                <Input type="text" id='third' ref ={refs.adresse}/>
                <Label>{ paragraphe(lang, 16) }</Label>
                <Input type="number" id='fourth' ref ={refs.postal_code}/>
                <Row>
                    <Col>
                    <Label>{ paragraphe(lang, 17) }</Label>
                <Input type="text" id='fifth' ref ={refs.city}/>
                    </Col>
                    <Col>
                    <Label>{ paragraphe(lang, 18) }</Label>
                <Input type="text" id='sixth' ref ={refs.coutry}/>
                    </Col>
                </Row>
                <Label>{ paragraphe(lang, 19) }</Label>
                <Input type="email" id='seventh' ref ={refs.email}/>
                <Button type="submit" >{ paragraphe(lang, 20) }</Button>
            </Form>
                  </ModalBody>
        </Modal>
    )
}

export default OrderModal