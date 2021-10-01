import React, { useEffect,useRef } from 'react'
import Modal from 'react-bootstrap/Modal'
import { paragraphe } from './lang';
import {ExitButton , Form, Input, Button, Select ,Label} from '../components/Styles';
import img from "../img/croix.png"
import { Col, ModalBody, Row } from 'react-bootstrap';
import ModalHeader from 'react-bootstrap/esm/ModalHeader';
import emailjs from 'emailjs-com'
import {preventDefaultBehavior} from '../utils/utils'
import {normalFaultyKeys, faultyEventKeys} from '../utils/constants'

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



    function sendEmail(e) {
        e.preventDefault();
    
        emailjs.sendForm('service_p5zvkks', 'template_o7c4jjk', e.target, 'user_jdAMs3lyhqSaicXvmkoZS')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset()
      }
    

    useEffect(() => {
            Object.keys(refs).map(ref => {
                refs[ref].current && refs[ref].current.addEventListener('keyup' , (event)=>{
                    Object.keys(normalFaultyKeys).map(faultyKey => {
                        if(event.keyCode == normalFaultyKeys[faultyKey]){
                            preventDefaultBehavior(event)
                            refs[ref].current.value =  refs[ref].current.value + faultyKey
                        }
                        else {
                            Object.keys(faultyEventKeys).map(faultyKey => {
                                preventDefaultBehavior(event)
                            })
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
                  <Form style={{margin: '4rem'}} onSubmit= {sendEmail}>
                <Row>
                    <Col>
                    <Label>{ paragraphe(lang, 13) }</Label>
                <Input type="text"  ref ={refs.name} name='name'/>
                </Col>
                <Col>
                <Label>{ paragraphe(lang, 14) }</Label>
                <Input type="text"  ref ={refs.first_name} name='first_name'/>
                </Col>
                </Row>

                <Label>{ paragraphe(lang, 15) }</Label>
                <Input type="text" ref ={refs.adresse} name='adresse'/>
                <Label>{ paragraphe(lang, 16) }</Label>
                <Input type="number"  ref ={refs.postal_code} name='postal_code'/>
                <Row>
                    <Col>
                    <Label>{ paragraphe(lang, 17) }</Label>
                <Input type="text" ref ={refs.city} name='city'/>
                    </Col>
                    <Col>
                    <Label>{ paragraphe(lang, 18) }</Label>
                <Input type="text" ref ={refs.coutry} name='country'/>
                    </Col>
                </Row>
                <Label>{ paragraphe(lang, 19) }</Label>
                <Input type="email" ref ={refs.email} name='email' required/>
                <Label>{ paragraphe(lang, 27) }</Label>
                <Select id="cars" name='language'>
                    <option value="français">Français</option>
                    <option value="english">English</option>
                </Select>
                <Button type="submit">{ paragraphe(lang, 20) }</Button>
            </Form>
            </ModalBody>
        </Modal>
    )
}

export default OrderModal