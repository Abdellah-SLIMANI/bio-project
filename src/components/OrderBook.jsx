import React from 'react'
import bookEn from "../img/booken.jpg"
import bookFr from "../img/bookfr.jpg"
import { paragraphe } from './lang'
import OrderModal from './OrderModal'
import { Link , BookCover} from "./Styles"
import {enURL,frURL} from '../utils/constants'
  
function OrderBook({ lang }) {
    const [isOpen, setIsOpen] = React.useState(false);
    function getPdf(){
        if(lang === 'en'){
            return "/files/From Nature's Mouth - Michaela Emch.pdf"
        }else if(lang === 'fr'){
            return "/files/Vers une Communication Bioinfusée - Michaela Emch.pdf"
        }
        return "/files/From Nature's Mouth - Michaela Emch D.pdf"
    }

    return (
        <div style={{display:'flex', flexDirection: 'row', padding:'2rem', width: '45vw'}} className= 'noPadding'>
            <BookCover 
                src={lang === "en" ? bookEn : bookFr}
            /> 
            <ul>
            <p>{paragraphe(lang,21)}</p>
            <li>
                <Link href={getPdf()} target="_blank">{paragraphe(lang,25)}</Link>
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
            <OrderModal 
                isOpen={isOpen}
                setIsOpen={setIsOpen}
                lang={lang}
            />
    </div>
    )
}

export default OrderBook
