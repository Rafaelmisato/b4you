import { useContext } from 'react'

import Layout from '../components/layout'
import Video from '../components/video'
import InputQr from '../components/inputQrCode'

import { Container, HomeContainer } from '../styles/pages/home'

import toLowercase from '../utils/toLowerCase'
import MenuContext from '../context/MenuContext'

interface MenuProps {
  menu: string
}

const Home: React.FC<MenuProps> = () => {
  const { state, setState: setMenuState } = useContext(MenuContext)

  console.log(state)
  return (
    <Layout
      title="Home"
      profileImage="/profileImg.png"
      name="Pedro Kassaoka"
      plan={toLowercase('gold')}
      stars={4}
      balance="538,75"
    >
      <Container>
        {state.menu === 'home' && (
          <HomeContainer>
            <Video
              src="https://assets.mixkit.co/videos/preview/mixkit-rain-falling-on-the-water-of-a-lake-seen-up-18312-large.mp4"
              poster="/videoThumb.svg"
            />
            <h2>Link para Vendas</h2>
            <InputQr value="https://b4pay.com.br.checkout/p-Y7Qp" />
          </HomeContainer>
        )}

        {state.menu === 'produtos' && (
          <section>
            <h1>Produtos</h1>
          </section>
        )}

        {state.menu === 'treinamentos' && (
          <section>
            <h1>treinamentos</h1>
          </section>
        )}

        {state.menu === 'ranking' && (
          <section>
            <h1>ranking</h1>
          </section>
        )}
      </Container>
    </Layout>
  )
}

export default Home
