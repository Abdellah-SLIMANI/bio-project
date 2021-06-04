import React from 'react'
import Impress from './components/Impress'
import Step from './components/Step'
import SelectLanguage from './components/SelectLanguage'
import tree from "./img/tree2.png"
import { Slide, Title, Paragraph, Spacing, Link, Background } from "./components/Styles"
import { MainSlide, TreeImage, MainTitle } from './components/MainSlide'
import { titre, paragraphe } from "./components/lang"
import OrderBook from './components/OrderBook'
import HomeButton from './components/HomeButton'

function App() {
  const [lang, setLang] = React.useState("en");
  return (
    <>
      <SelectLanguage 
        lang={lang} 
        handleChange={e => setLang(e.target.value)}  
      />
      <HomeButton />
      <Impress>
        <Step x={0} y={0}>
          <MainSlide>
            <Background />
            <MainTitle>
              {titre(lang, 1)}
            </MainTitle>
            <TreeImage src={tree} alt="main image" />
          </MainSlide>
        </Step>
        <Step x={-140} y={-160} scale={0.07}>
          <Slide variant="block">
            <Title>{titre(lang, 2)}</Title>
            <Spacing h={3} />
            <Paragraph>
              {paragraphe(lang, 1)}
            </Paragraph>
          </Slide>
        </Step>
        <Step x={10} y={-230} scale={0.07}>
          <Slide variant="block">
            <Title>{titre(lang, 3)}</Title>
            <Spacing h={3} />
            <Paragraph>
              {paragraphe(lang, 2)}
            </Paragraph>
          </Slide>
        </Step>
        <Step x={160} y={-160} scale={0.07}>
          <Slide variant="block">
            <Title>{titre(lang, 4)}</Title>
            <Spacing h={3} />
            <Paragraph>
              {paragraphe(lang, 3)}
            </Paragraph>
          </Slide>
        </Step>
        <Step x={-220} y={-63} scale={0.07}>
          <Slide variant="block">
            <Title>{titre(lang, 5)}</Title>
            <Spacing h={3} />
            <Paragraph>
              {paragraphe(lang, 4)}
            </Paragraph>
          </Slide>
        </Step>
        <Step x={187} y={100} scale={0.07}>
          <Slide variant="transparent">
            <Title>{titre(lang, 6)}</Title>
            <Spacing h={1} />
            <Paragraph>
              {paragraphe(lang, 5)}
            </Paragraph>
          </Slide>
        </Step>
        <Step x={-193} y={280} scale={0.07}>
          <Slide variant="block">
            <Title>{titre(lang, 7)}</Title>
            <Spacing h={3} />
            <Paragraph>
              {paragraphe(lang, 6)}
            </Paragraph>
          </Slide>
        </Step>
        <Step x={-13} y={320} scale={0.07}>
          <Slide variant="block">
            <Title>{titre(lang, 8)}</Title>
            <Spacing h={3} />
            <Paragraph>
              {paragraphe(lang, 7)}
            </Paragraph>
          </Slide>
        </Step>
        <Step x={167} y={280} scale={0.07}>
          <Slide variant="block">
            <Title>{titre(lang, 9)}</Title>
            <Spacing h={3} />
            <Paragraph>
              {paragraphe(lang, 8)}
            </Paragraph>
          </Slide>
        </Step>
        <Step x={110} y={-100} scale={0.07}>
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
        <Step x={-180} y={10} scale={0.07}>
          <Slide variant="gray">
            <Title>{titre(lang, 11)}</Title>
            <Paragraph>
              Eclosions <br />
              Michaela Emch <br />
              Rte de Praly 4 <br />
              CH-1976 Aven <br />
              <Link href="mailto:info@eclosions.ch">info@eclosions.ch</Link> <br />
              +41 76 367 76 38
            </Paragraph>
          </Slide>
        </Step>
        <Step x={-90} y={200} scale={0.07}>
          <Slide variant="transparent">
            <Title style={{ margin: "10px 0" }}>{titre(lang, 12)}</Title>
            <OrderBook lang={lang} />
          </Slide>
        </Step>
      </Impress>
    </>
  )
}

export default App
