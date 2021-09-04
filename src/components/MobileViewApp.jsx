import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Impress from './Impress'
import Step from './Step'
import tree from "../img/treee.png"
import portrait from '../img/michaela.jpeg'
import { Slide, Title, Paragraph, Spacing, NavList,NavLink,FlexDiv,ExitButton,RedText} from "./Styles"
import { MainSlide, TreeImage, MainTitle,MainLogo} from './MainSlide'
import { titre, paragraphe } from "./lang"
import img from "../img/croix.png"
// import SideNavigation from './components/SideNavigation';
// import { useMediaQuery, useTheme } from '@material-ui/core';

export default function MobileViewApp({lang}){

    return(
    <Impress>
          <Step x={0} y={0}>
                  <MainSlide>
                      <TreeImage src={tree} alt="main image" />
                      <MainTitle>
                          {titre(lang, 1)}
                      </MainTitle>
                  </MainSlide>
              </Step>
              <Step x={-360} y={-400} scale={0.07}>
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
              <Step x={-360} y={-300} scale={0.07}>
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
              <Step x={-360} y={-200} scale={0.07}>
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
              <Step x={-360} y={-100} scale={0.07}>
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
              <Step x={-360} y={0} scale={0.07}>
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
              <Step x={-360} y={100} scale={0.07}>
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
              <Step x={-360} y={200} scale={0.07}>
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
              <Step x={-360} y={300} scale={0.07}>
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
              <Step x={-360} y={400} scale={0.07}>
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
    )
}
