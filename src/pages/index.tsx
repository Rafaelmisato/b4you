import { useContext } from 'react'

import Layout from '../components/layout'
import Video from '../components/video'

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
        {state.menu && (
          <HomeContainer>
            <Video
              src="https://assets.mixkit.co/videos/preview/mixkit-rain-falling-on-the-water-of-a-lake-seen-up-18312-large.mp4"
              poster={null}
            />
          </HomeContainer>
        )}
      </Container>
    </Layout>
  )
}

export default Home
