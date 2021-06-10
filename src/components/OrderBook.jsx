import React from 'react'
import styled from "styled-components"
import bookEn from "../img/booken.jpg"
import bookFr from "../img/bookfr.jpg"
import OrderModal from './OrderModal'

const Grid = styled.div`
    display: grid;
    grid-template-columns: 50% 50%;
    grid-gap: 15px;
    width: 70%;
    margin: auto;
    align-items: center;
`

const BookCover = styled.img`
    width: 350px;
    margin: auto;
`

const LinksWrapper = styled.div`
    text-align: center;
    font-family: Arial, Helvetica, sans-serif;

    h3 {
        font-size: 2rem;
        margin-top: 0;
    }

    a {
        text-decoration: none;
        background: #3d7f3f;
        font-weight: bold;
        color: white;
        font-size: 1.3rem;
        letter-spacing: 0.9px;
        padding: 10px;
        display: block;
        width: fit-content;
        margin: auto;
        margin-bottom: 3rem;
        border-radius: 4px;
        cursor: pointer;
    }
`

const frURL = " https://www.amazon.com/Vers-une-Communication-Bioinfusée-Biomimiétisme-ebook/dp/B0916QY7FQ/ref=sr_1_1?dchild=1&keywords=vers+une+communication+bioinfusée&qid=1622468018&s=digital-text&sr=1-1"

const enURL = "https://www.amazon.com/gp/product/B08WLTXRZS?pf_rd_r=WCC1QFVM4MGYSSVFBXQJ&pf_rd_p=5ae2c7f8-e0c6-4f35-9071-dc3240e894a8&pd_rd_r=8c85bc34-4f39-41d0-9bf7-a0c2cdc367e6&pd_rd_w=23yoe&pd_rd_wg=WcEBq&ref_=pd_gw_unk"

function OrderBook({ lang }) {
    const [isOpen, setIsOpen] = React.useState(false);
    return (
        <>
            <Grid>
                <BookCover 
                    src={lang === "fr" ? bookFr : bookEn} 
                    alt="Book cover" 
                />
                <LinksWrapper>
                    <div>
                        <h3>Electronic version</h3>
                        <a 
                            target="_blank"
                            href={lang === "fr" ? frURL : enURL}
                        >link to Amazon</a>
                    </div>
                    <div>
                        <h3>Paper version</h3>
                        <a onClick={() => setIsOpen(true)}>drop a line</a>
                    </div>
                </LinksWrapper>
            </Grid>
            <OrderModal 
                isOpen={isOpen} 
                setIsOpen={setIsOpen} 
                lang={lang} 
            />
        </>
    )
}

export default OrderBook