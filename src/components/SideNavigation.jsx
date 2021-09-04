import React from 'react'
import Dropdown from 'react-bootstrap/Dropdown'
import { DropdownButton } from 'react-bootstrap';
import { NavLink, NavList } from './Styles';
import { paragraphe, titre } from './lang';
import { MainLogo } from './MainSlide';
import OrderBook from './OrderBook';
import logo from '../img/mainLogo.png'

export default function SideNavigation({lang,setLang}) {
    return (
            <NavList>
              <NavLink>
                  <a  href="#/step-1">
                      <MainLogo src={logo} href="#/step-1"/>
                  </a>
              </NavLink>

                  <NavLink>
                      <Dropdown className= 'dropDwonResponsivness'>
                          <DropdownButton  key='left' drop='left' title={titre(lang,13)}>
                              <Dropdown.Item onClick={()=> setLang('en')}>English</Dropdown.Item>
                              <Dropdown.Item onClick={()=> setLang('fr')}>Français</Dropdown.Item>
                              <Dropdown.Item onClick={()=> setLang('du')}>Deutsch</Dropdown.Item>
                          </DropdownButton>
                      </Dropdown>
                  </NavLink>

                  <NavLink>
                  <Dropdown className= 'dropDwonResponsivness'>
                      <DropdownButton id="dropdown-basic" key='left' drop='left' title={titre(lang,10)}>
                          <div className='p-3'>
                              {paragraphe(lang,10)}
                          </div>
                      </DropdownButton>
                  </Dropdown>
              </NavLink>

              <NavLink>
                  <Dropdown className= 'dropDwonResponsivness'>
                      <DropdownButton id="dropdown-basic" key='left' drop='left' title={titre(lang,14)}>
                          <OrderBook lang={lang}/>
                      </DropdownButton>
                  </Dropdown>
              </NavLink>
              <NavLink>
                  <Dropdown className= 'dropDwonResponsivness'>
                      <DropdownButton id="dropdown-basic" key='left' drop='left' title={titre(lang,15)} color='black'>
                          <div className='px-4'>
                              {paragraphe(lang,11)}
                          </div>
                      </DropdownButton>
                  </Dropdown>
              </NavLink>
          </NavList>
    )
}
