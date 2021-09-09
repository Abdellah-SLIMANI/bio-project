import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Impress from './components/Impress'
import Step from './components/Step'
import tree from "./img/treee.png"
import portrait from './img/michaela.jpeg'
import { Slide, Title, Paragraph, Spacing, FlexDiv,ExitButton} from "./components/Styles"
import { MainSlide, TreeImage, MainTitle} from './components/MainSlide'
import { titre, paragraphe } from "./components/lang"
import img from "./img/croix.png"
import SideNavigation from './components/SideNavigation';
import { useMediaQuery, useTheme } from '@material-ui/core';

function App() {
  const [lang, setLang] = React.useState("en");
  const scale = 0.07;
  const theme = useTheme()
  const isMdScreen = useMediaQuery(theme.breakpoints.down('md'))
  const isSmScreen = useMediaQuery(theme.breakpoints.down('sm'))

  const steps = [
    {
      x: isMdScreen ?-350 : -360,
      y: isMdScreen ? 300 : -190,
      title: titre(lang, 2),
      paragraphe: paragraphe(lang, 1)
  },
  {
    x: isMdScreen ?-350: -180,
    y: isMdScreen ? 450: -300,
    title: titre(lang, 3),
    paragraphe: paragraphe(lang, 2)
},
{
    x: isMdScreen ?-350: -50,
    y: isMdScreen ?600: -190,
    title: titre(lang, 4),
    paragraphe: paragraphe(lang, 3)
},
{
    x: isMdScreen ?-350: -400,
    y: isMdScreen ?-150: 0,
    title: titre(lang, 5),
    paragraphe: paragraphe(lang, 4)
},
{
    x: isMdScreen ?-350: -380,
    y: isMdScreen ?-600: 230,
    title: titre(lang, 7),
    paragraphe: paragraphe(lang, 6)
},
{
    x: isMdScreen ?-350: -200,
    y: isMdScreen ?-450: 300,
    title: titre(lang, 8),
    paragraphe: paragraphe(lang, 7)
},
{
    x: isMdScreen ?-350: -50,
    y: isMdScreen ?-300: 230,
    title: titre(lang, 9),
    paragraphe: paragraphe(lang, 8)
},
{
    x: isMdScreen ?-350: -440,
    y: isMdScreen ?150: 120,
    title: titre(lang, 12),
    paragraphe: paragraphe(lang, 9)
},
]


  return (
    <>
      <div style={{display: 'flex', flexDirection: 'column' , zIndex: 5000}}>
          {/* navigation */}
          <SideNavigation lang={lang} setLang={setLang}/>
          {/* main Content */}
          <Impress>
          <Step x={0} y={0}>
                  <MainSlide>
                      <TreeImage src={tree} alt="main image" />
                      <MainTitle>
                          {titre(lang, 1)}
                      </MainTitle>
                  </MainSlide>
              </Step>
              {steps.map(step=> (
                <Step x = {step.x} y= {step.y} scale={scale}>
                    <Slide>
                        <ExitButton
                            href="#/step-1"
                            style={{float: 'right'}}>
                            <img src={img} />
                        </ExitButton>
                        <Title>{step.title}</Title>
                        <Spacing h={3} />
                        <Paragraph>{step.paragraphe}</Paragraph>
                    </Slide>
                </Step>
              ))}
              <Step x={isMdScreen ?-350: 0} y={isMdScreen ?0: -50} scale={0.07}>
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
              </Impress>
      </div>    
      {/* Footer */}
      <p 
      style={{fontSize:'12px' , position: 'absolute', bottom: '0', left: '1%'}} 
      className='footerText'>Copyright <a href="#/step-1" 
      style={{cursor: 'pointer', color:"#e21137"}}
      >
          Eclosions
          </a> By <a href='http://www.berexia.com' target='_blank'style={{color:'gray'}}>
              Berexia 
            </a> 2021
        </p>
    </>
  )
}
export default App