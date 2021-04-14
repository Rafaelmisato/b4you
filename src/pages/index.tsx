import Layout from '../components/layout'

import toLowercase from '../utils/toLowerCase'

interface MenuProps {
  menu: string
}

const Home: React.FC<MenuProps> = ({ menu }) => {
  console.log(menu)
  return (
    <Layout
      title="Home"
      profileImage="/profileImg.png"
      name="Pedro Kassaoka"
      plan={toLowercase('gold')}
      stars={4}
      balance="538,75"
    >
      <h1>Hello World</h1>
    </Layout>
  )
}

export default Home
