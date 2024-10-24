import styled from "styled-components"

const FormHero = styled.form`
  height: 360px;
  width: 100%;
  background-image: url('https://cdn.pixabay.com/photo/2018/08/10/15/45/woman-3597101_1280.jpg');
  background-size: cover;
  position: relative;
  display: flex;
  align-items: center;
`
const Div = styled.div`
  position: relative;
  color: #eee;
`
const HeroTitle = styled.h2`
  font-family: Gloock, serif;
  font-size: 48px;
`

const Hero = () => {
  return (
    <FormHero>
      <Div>
        <HeroTitle>
          As melhores vagas para tecnologia, design e artes visuais.
        </HeroTitle>
      </Div>
    </FormHero>
  )
}

export default Hero
