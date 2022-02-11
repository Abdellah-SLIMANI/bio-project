import styled from "styled-components"

const MainSlide = styled.div`
    display: flex;
    align-items: center;
    width: 85vw;
    height: 80vh;
    position: relative;
    
`

const TreeImage = styled.img`
    height: 90vh;
    width: auto;
    display: block;
    margin: auto;
    position: relative;
    bottom: -10px;
    transform: translate(-0%,-10%);
    float: left;
    @media screen  and (max-width: 760px){
        transform: translate(-20%,-30%);
        height: 160%;
    }
`

const MainTitle = styled.h1`
    font-family: Optima, sans-serif;
    font-size: 2rem;
    margin-top: 100px;
    text-align: left;
    color: black;
    transform: translate(-50%,100%);
    @media screen  and (max-width: 760px){
        transform: translate(-120%,200%);
        font-size: 3rem;
    }
`

const MainLogo = styled.img`
    width: auto;
    height: 100px;
    @media screen  and (max-width: 760px){
        height: 60px;
        transform: translate(17%,0)
    }
`

export {
    MainSlide,
    TreeImage,
    MainTitle,
    MainLogo,
}