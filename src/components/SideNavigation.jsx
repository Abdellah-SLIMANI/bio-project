import React from 'react'
import Dropdown from 'react-bootstrap/Dropdown'
import { DropdownButton } from 'react-bootstrap';
import { NavLink, NavList } from './Styles';
import { paragraphe, titre } from './lang';
import { MainLogo } from './MainSlide';
import OrderBook from './OrderBook';
import logo from '../img/mainLogo.png'

export default function SideNavigation({lang,setLang}) {

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
          </NavList>
    )
}
