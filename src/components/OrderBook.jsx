import PDFViewer from 'pdf-viewer-reactjs'
import React from 'react'
import styled from "styled-components"
import bookEn from "../img/booken.jpg"
import bookFr from "../img/bookfr.jpg"
import { paragraphe } from './lang'
import OrderModal from './OrderModal'
import { Link} from "./Styles"
import Modal from 'react-bootstrap/Modal'

const frURL = " https://www.amazon.com/Vers-une-Communication-Bioinfusée-Biomimiétisme-ebook/dp/B0916QY7FQ/ref=sr_1_1?dchild=1&keywords=vers+une+communication+bioinfusée&qid=1622468018&s=digital-text&sr=1-1"

const enURL = "https://www.amazon.com/gp/product/B08WLTXRZS?pf_rd_r=WCC1QFVM4MGYSSVFBXQJ&pf_rd_p=5ae2c7f8-e0c6-4f35-9071-dc3240e894a8&pd_rd_r=8c85bc34-4f39-41d0-9bf7-a0c2cdc367e6&pd_rd_w=23yoe&pd_rd_wg=WcEBq&ref_=pd_gw_unk"

const BookCover = styled.img`
    width: auto;
    margin: auto;
    padding-inline: 1rem;

    @media screen  and (max-width: 760px){
        display: none;
        padding: 0;
    }
`
  
function OrderBook({ lang }) {
    const [isOpen, setIsOpen] = React.useState(false);
    const [show, setShow] = React.useState(false);
    const handleClose = () => {
        setShow(false)
    };
    const handleShow = () => {
        setShow(true)
    };

    function getPdf(){
        if(lang === 'en'){
            return 'files/pdfE.pdf'
        }else if(lang === 'fr'){
            return 'files/pdfF.pdf'
        }
        return 'files/pdfD.pdf'
    }

    function ShowPDF() {
        return (
          <>
            <Modal show={show} onHide={handleClose} className='pdfModal'>
                <Modal.Header closeButton style={{padding: 'none'}}></Modal.Header>
              <Modal.Body >
                 <PDFViewer
                        document={{
                            url: getPdf(),
                        }}
                        hideNavbar= {true}
                    />
              </Modal.Body>
            </Modal>
          </>
        );
      }

    return (
        <div style={{display:'flex', flexDirection: 'row', padding:'2rem', width: '45vw'}} className= 'noPadding'>
            <BookCover 
                src={lang === "en" ? bookEn : bookFr}
            /> 
            <ul>
            <p>{paragraphe(lang,21)}</p>
            <li>
                <Link onClick={handleShow} target='_blank'>{paragraphe(lang,25)}</Link>
            </li>
            <br/>
            <p>{paragraphe(lang,26)}</p>
                <li>
                    <Link target='_blank'
                    href={lang === "fr" ? frURL : enURL}
                    >{paragraphe(lang,24)}</Link>
                </li>
                <li>
                    <Link onClick={() => setIsOpen(true)}>{paragraphe(lang,23)}</Link>
                </li>
            </ul>
            <ShowPDF 
                show = {handleShow}
                onHide= {handleClose}
            />
            <OrderModal 
                isOpen={isOpen}
                setIsOpen={setIsOpen}
                lang={lang}
            />
    </div>
    )
}

export default OrderBook
