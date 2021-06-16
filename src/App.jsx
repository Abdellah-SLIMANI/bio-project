import React from 'react'
import Impress from './components/Impress'
import Step from './components/Step'
import SelectLanguage from './components/SelectLanguage'
import tree from "./img/tree.png"
import logo from './img/mainLogo.png'
import { Slide, Title, Paragraph, Spacing, Link, Background } from "./components/Styles"
import { MainSlide, TreeImage, MainTitle,MainLogo} from './components/MainSlide'
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
      <MainLogo src={logo}/>
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
        <Step x={-550} y={-250} scale={0.07}>
          <Slide variant="block">
            <Title>{titre(lang, 2)}</Title>
            <Spacing h={3} />
            <Paragraph>
              {paragraphe(lang, 1)}
            </Paragraph>
          </Slide>
        </Step>
        <Step x={-350} y={-300} scale={0.07}>
          <Slide variant="block">
            <Title>{titre(lang, 3)}</Title>
            <Spacing h={3} />
            <Paragraph>
              {paragraphe(lang, 2)}
            </Paragraph>
          </Slide>
        </Step>
        <Step x={-150} y={-250} scale={0.07}>
          <Slide variant="block">
            <Title>{titre(lang, 4)}</Title>
            <Spacing h={3} />
            <Paragraph>
              {paragraphe(lang, 3)}
            </Paragraph>
          </Slide>
        </Step>
        <Step x={-500} y={-150} scale={0.07}>
          <Slide variant="block">
            <Title>{titre(lang, 5)}</Title>
            <Spacing h={3} />
            <Paragraph>
              {paragraphe(lang, 4)}
            </Paragraph>
          </Slide>
        </Step>
        <Step x={-80} y={150} scale={0.07}>
          <Slide variant="transparent">
            <Title>{titre(lang, 6)}</Title>
            <Spacing h={1} />
            <Paragraph>
              {paragraphe(lang, 5)}
            </Paragraph>
          </Slide>
        </Step>
        <Step x={-450} y={380} scale={0.07}>
          <Slide variant="block">
            <Title>{titre(lang, 7)}</Title>
            <Spacing h={3} />
            <Paragraph>
              {paragraphe(lang, 6)}
            </Paragraph>
          </Slide>
        </Step>
        <Step x={-300} y={450} scale={0.07}>
          <Slide variant="block">
            <Title>{titre(lang, 8)}</Title>
            <Spacing h={3} />
            <Paragraph>
              {paragraphe(lang, 7)}
            </Paragraph>
          </Slide>
        </Step>
        <Step x={-150} y={380} scale={0.07}>
          <Slide variant="block">
            <Title>{titre(lang, 9)}</Title>
            <Spacing h={3} />
            <Paragraph>
              {paragraphe(lang, 8)}
            </Paragraph>
          </Slide>
        </Step>
        <Step x={-100} y={-150} scale={0.07}>
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
              Eclosions <br />
              Michaela Emch <br />
              Rte de Praly 4 <br />
              CH-1976 Aven <br />
              <Link href="mailto:info@eclosions.ch">info@eclosions.ch</Link> <br />
              +41 76 367 76 38
            </Paragraph>
          </Slide>
        </Step>
        <Step x={-500} y={100} scale={0.07}>
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
