import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Impress from './components/Impress'
import Step from './components/Step'
import tree from "./img/treee.png"
import portrait from './img/michaela.jpeg'
import { Slide, Title, Paragraph, Spacing, NavList,NavLink,FlexDiv,ExitButton,RedText} from "./components/Styles"
import { MainSlide, TreeImage, MainTitle,MainLogo} from './components/MainSlide'
import { titre, paragraphe } from "./components/lang"
import img from "./img/croix.png"
import SideNavigation from './components/SideNavigation';
import { useMediaQuery, useTheme } from '@material-ui/core';

function App() {
  const [lang, setLang] = React.useState("en");
  const theme = useTheme()
  const isMdScreen = useMediaQuery(theme.breakpoints.down('sm'))
  return (
    <>
      <div style={{display: 'flex', flexDirection: 'column'}}>
          <SideNavigation lang={lang} setLang={setLang}/>
          { isMdScreen ? <Impress>
          <Step x={0} y={0}>
                  <MainSlide>
                      <TreeImage src={tree} alt="main image" />
                      <MainTitle>
                          {titre(lang, 1)}
                      </MainTitle>
                  </MainSlide>
              </Step>
              <Step x={-350} y={300} scale={0.07}>
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
              <Step x={-350} y={450} scale={0.07}>
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
              <Step x={-350} y={600} scale={0.07}>
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
              <Step x={-350} y={-150} scale={0.07}>
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
              <Step x={-350} y={0} scale={0.07}>
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
              <Step x={-350} y={-600} scale={0.07}>
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
              <Step x={-350} y={-450} scale={0.07}>
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
              <Step x={-350} y={-300} scale={0.07}>
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
              <Step x={-350} y={150} scale={0.07}>
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
              </Impress>
            :<Impress> 
             <Step x={0} y={0}>
                  <MainSlide>
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

          </Impress> }
      </div>    
      <p style={{fontSize:'12px' , position: 'absolute', bottom: '0', left: '1%'}} className='footerText'>Copyright <a href="#/step-1" style={{cursor: 'pointer', color:"#e21137"}}>Eclosions</a> By <a href='http://www.berexia.com' target='_blank'style={{color:'gray'}}>Berexia</a> 2021</p>

    </>
  )
}

export default App
