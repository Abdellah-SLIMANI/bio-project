import React from 'react'
import Dropdown from 'react-bootstrap/Dropdown'
import { DropdownButton } from 'react-bootstrap';
import { NavLink, NavList } from './Styles';
import { paragraphe, titre } from './lang';
import { MainLogo } from './MainSlide';
import OrderBook from './OrderBook';
import logo from '../img/mainLogo.png'
import bcropLogo_fr from '../img/Bcrop_fr.png'
import bcropLogo_eng from '../img/Bcrop_eng.png'
import bcropLogo_du from '../img/Bcrop_du.jpeg'

export default function SideNavigation({lang,setLang}) {

    console.log('Lang', lang)
    const bcropLogo = lang == 'fr' ? bcropLogo_fr : lang == 'en' ? bcropLogo_eng : bcropLogo_du
    const navItems = [
        {
            title: titre(lang,13),
            content: <>
                        <Dropdown.Item onClick={()=> setLang('en')}>English</Dropdown.Item>
                         <Dropdown.Item onClick={()=> setLang('fr')}>Français</Dropdown.Item>
                      <Dropdown.Item onClick={()=> setLang('du')}>Deutsch</Dropdown.Item>
                </>
        },
        {
            title: titre(lang,10),
            content:<div className='p-3'>
                    {paragraphe(lang,10)}
                    </div>
        },
        {
            title: titre(lang,14),
            content: <OrderBook lang={lang}/>
        },
        {
            title: titre(lang,15),
            content: <div className='px-4'>
            {paragraphe(lang,11)}
                </div>
        },
    ]
    return (
            <NavList>
              <NavLink>
                  <a  href="#/step-1">
                      <MainLogo src={logo} href="#/step-1"/>
                  </a>
              </NavLink>
              {
                  navItems.map(item => ( 
                    <NavLink>
                        <Dropdown className= 'dropDwonResponsivness'>
                            <DropdownButton  key='left' drop='left' title={item.title}>
                                {item.content}
                            </DropdownButton>
                        </Dropdown>
                    </NavLink>
                  ))
              }
              <NavLink>
                  <a href='https://www.bcorporation.net/en-us/find-a-b-corp/company/eclosions'>
                  <img src={bcropLogo} alt="" style={{width: '20%'}}/>
                  </a>
              </NavLink>
          </NavList>
    )
}
