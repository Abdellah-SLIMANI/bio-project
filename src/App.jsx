import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Impress from './components/Impress'
import Step from './components/Step'
import tree from "./img/tree.png"
import logo from './img/mainLogo.png'
import portrait from './img/michaela.jpeg'
import { Slide, Title, Paragraph, Spacing, NavList,NavLink,FlexDiv,ExitButton,RedText} from "./components/Styles"
import { MainSlide, TreeImage, MainTitle,MainLogo} from './components/MainSlide'
import { titre, paragraphe } from "./components/lang"
import OrderBook from './components/OrderBook'
import Dropdown from 'react-bootstrap/Dropdown'
import { DropdownButton } from 'react-bootstrap';
import styled from "styled-components";
import img from "./img/croix.png"

function App() {
  const [lang, setLang] = React.useState("en");
  return (
    <>
      <div style={{display: 'flex', flexDirection: 'column'}}>
          <NavList>
              <NavLink>
                  <a  href="#/step-1">
                      <MainLogo src={logo} href="#/step-1"/>
                  </a>
              </NavLink>

                  <NavLink>
                      <Dropdown>
                          <DropdownButton  key='left' drop='left' title='Languages'>
                              <Dropdown.Item onClick={()=> setLang('en')}>English</Dropdown.Item>
                              <Dropdown.Item onClick={()=> setLang('fr')}>Français</Dropdown.Item>
                              <Dropdown.Item onClick={()=> setLang('du')}>Deutsch</Dropdown.Item>
                          </DropdownButton>
                      </Dropdown>
                  </NavLink>

                  <NavLink>
                  <Dropdown>
                      <DropdownButton id="dropdown-basic" key='left' drop='left' title={titre(lang,10)}>
                          <div className='p-3'>
                              {paragraphe(lang,10)}
                          </div>
                      </DropdownButton>
                  </Dropdown>
              </NavLink>

              <NavLink>
                  <Dropdown>
                      <DropdownButton id="dropdown-basic" key='left' drop='left' title='The Book'>
                          <OrderBook lang={lang}/>
                      </DropdownButton>
                  </Dropdown>
              </NavLink>
              <NavLink>
                  <Dropdown>
                      <DropdownButton id="dropdown-basic" key='left' drop='left' title='Contact' color='black'>
                          <div className='px-4'>
                              {paragraphe(lang,11)}
                          </div>
                      </DropdownButton>
                  </Dropdown>
              </NavLink>
          </NavList>
          <Impress>
              <Step x={0} y={0}>
                  <MainSlide>
                      {/* <Background /> */}
                      <TreeImage src={tree} alt="main image" />
                      <MainTitle>
                          {titre(lang, 1)}
                      </MainTitle>
                  </MainSlide>
              </Step>
              <Step x={-360} y={-190} scale={0.07}>
                  <Slide >
                      <Title>{titre(lang, 2)}</Title>     
                      <ExitButton
                      href="#/step-1"
                      style={{float: 'right'}}
                  >
                      <img src={img} />
                  </ExitButton>
                      <Spacing h={3} />
                      <Paragraph>
                          {paragraphe(lang, 1)}
                      </Paragraph>
                  </Slide>
              </Step>
              <Step x={-180} y={-300} scale={0.07}>
                  <Slide>
                      <ExitButton
                          href="#/step-1"
                        style={{float: 'right'}}>
                          <img src={img} />
                      </ExitButton>
                      <Title>{titre(lang, 3)}</Title>
                      <Spacing h={3} />
                      <Paragraph>
                          {paragraphe(lang, 2)}
                      </Paragraph>
                  </Slide>
              </Step>
              <Step x={-50} y={-190} scale={0.07}>
                  <Slide>
                      <ExitButton
                          href="#/step-1"
                          style={{float: 'right'}}>
                          <img src={img} />
                      </ExitButton>
                      <Title>{titre(lang, 4)}</Title>
                      <Spacing h={3} />
                      <Paragraph>
                          {paragraphe(lang, 3)}
                      </Paragraph>
                  </Slide>
              </Step>
              <Step x={-400} y={0} scale={0.07}>
                  <Slide>
                      <ExitButton
                          href="#/step-1"
                          style={{float: 'right'}}>
                          <img src={img} />
                      </ExitButton>
                      <Title>{titre(lang, 5)}</Title>
                      <Spacing h={3} />
                      <Paragraph>
                          {paragraphe(lang, 4)}
                      </Paragraph>
                  </Slide>
              </Step>
              <Step x={-0} y={-50} scale={0.07}>
                  <Slide>
                      <ExitButton
                          href="#/step-1"
                          style={{float: 'right'}}>
                          <img src={img} />
                      </ExitButton>
                      <Title>{titre(lang, 6)}</Title>
                      <Spacing h={1} />
                      <FlexDiv>
                          <img src={portrait} alt='Portrait'/>
                          <Paragraph style={{textAlign: "center"}}>
                              {paragraphe(lang, 5)}
                          </Paragraph>
                      </FlexDiv>
                  </Slide>
              </Step>
              <Step x={-380} y={230} scale={0.07}>
                  <Slide variant="block">
                      <ExitButton
                          href="#/step-1"
                          style={{float: 'right'}}>
                          <img src={img} />
                      </ExitButton>
                      <Title>{titre(lang, 7)}</Title>
                      <Spacing h={3} />
                      <Paragraph>
                          {paragraphe(lang, 6)}
                      </Paragraph>
                  </Slide>
              </Step>
              <Step x={-200} y={300} scale={0.07}>
                  <Slide variant="block">
                      <ExitButton
                          href="#/step-1"
                          style={{float: 'right'}}>
                          <img src={img} />
                      </ExitButton>
                      <Title>{titre(lang, 8)}</Title>
                      <Spacing h={3} />
                      <Paragraph>
                          {paragraphe(lang, 7)}
                      </Paragraph>
                  </Slide>
              </Step>
              <Step x={-50} y={230} scale={0.07}>
                  <Slide variant="block">
                      <ExitButton
                          href="#/step-1"
                          style={{float: 'right'}}>
                          <img src={img} />
                      </ExitButton>
                      <Title>{titre(lang, 9)}</Title>
                      <Spacing h={3} />
                      <Paragraph>
                          {paragraphe(lang, 8)}
                      </Paragraph>
                  </Slide>
              </Step>
              <Step x={-440} y={120} scale={0.07}>
                  <Slide variant="transparent">
                      <ExitButton
                          href="#/step-1"
                          style={{float: 'right'}}>
                          <img src={img} />
                      </ExitButton>
                      <Title style={{ margin: "10px 0" }}>{titre(lang, 12)}</Title>
                      <Paragraph>
                          {paragraphe(lang,9)}
                      </Paragraph>
                  </Slide>
              </Step>
              {/* <Step x={-100} y={-150} scale={0.07}>
          <Slide variant="gray">
            <Title>{titre(lang, 10)}</Title>
            <Paragraph>
              <Link
                target="_blank"
                href="https://www.youtube.com/watch?v=gsAHHDG1I4Y"
              >Biomimicry Switzerland Webina</Link>
            </Paragraph>
          </Slide>
        </Step>
        <Step x={-500} y={0} scale={0.07}>
          <Slide variant="gray">
            <Title>{titre(lang, 11)}</Title>
            <Paragraph>

            </Paragraph>
          </Slide>
        </Step> */}

          </Impress>
      </div>    
      <p style={{fontSize:'12px' , position: 'absolute', bottom: '0', left: '1%'}}>Copyright <a href="#/step-1" style={{cursor: 'pointer', color:"#e21137"}}>Eclosions</a> By <a href='http://www.berexia.com' target='_blank'style={{color:'#005999'}}>Berexia</a></p>

    </>
  )
}

export default App
