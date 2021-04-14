import Head from 'next/head'

import { Container } from './styles'

import SideBar from '../sidebar'

interface LayoutProps {
  title: string
  profileImage: string
  name: string
  plan: string
  stars: number
  balance: string
}

/**
 *
 * @param param0
 * Need to pass the params:
 * - title: page name
 * - profileImage: user img on sidebar
 * - name: name on sidebar
 * - plan: user plan on sidebar ('black, gold, rubi, blue')
 * - stars: number of stars on sidebar
 * - balance: user balance on sidebar
 */

const Layout: React.FC<LayoutProps> = ({
  children,
  title,
  profileImage,
  name,
  plan,
  stars,
  balance
}) => {
  return (
    <>
      <Head>
        <title>B4YOU | {title}</title>
      </Head>
      <Container>
        <SideBar
          profileImage={profileImage}
          name={name}
          plan={plan}
          stars={stars}
          balance={balance}
        />
        {children}
      </Container>
    </>
  )
}

export default Layout
