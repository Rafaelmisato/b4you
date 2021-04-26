import React, { useContext, useState, useEffect } from 'react'

import Layout from '../components/layout'
import TopMenuRanking from '../components/TopMenuRanking'
import RankingTotalContainer from '../components/RankingTotalContainer'

import { Container, Ranking } from '../styles/pages/ranking'

import toLowercase from '../utils/toLowerCase'
import MenuContext from '../context/MenuContext'

interface MenuProps {
  menu: string
}

const rankingPage: React.FC<MenuProps> = () => {
  const { state, setState: setMenuState } = useContext(MenuContext)

  // api data states
  const [userInformation, setUserInformation] = useState({
    name: 'Pedro Kassaoka',
    plan: 'gold',
    stars: 4,
    balance: '538,75',
    image: '/profileImg.png',
    country: 'Brasil',
    state: 'DF',
    city: 'Brasília',
    sales: '7',
    badges: 'eagle',
    company: 'B4YOU',
    occupation: 'Web Design',
    experiences: [
      {
        image: '/achiev-exp/blue.svg',
        name: 'Facebook Ads',
        description:
          'Esta é a conquista dedicada a agências certificadas pelo curso Hotmart Partnership Program'
      },
      {
        image: '/achiev-exp/red.svg',
        name: 'Google Ads',
        description:
          'Esta é a conquista dedicada a agências certificadas pelo curso Hotmart Partnership Program'
      },
      {
        image: '/achiev-exp/green.svg',
        name: 'WhatsApp',
        description:
          'Esta é a conquista dedicada a agências certificadas pelo curso Hotmart Partnership Program'
      }
    ],
    achievements: [
      {
        image: '/achiev-exp/pink.svg',
        name: 'Primeira Venda em 24 horas',
        description:
          'Esta é a conquista dedicada a agências certificadas pelo curso Hotmart Partnership Program'
      },
      {
        image: '/achiev-exp/aquagreen.svg',
        name: '10 Vendas em uma semana',
        description:
          'Esta é a conquista dedicada a agências certificadas pelo curso Hotmart Partnership Program'
      }
    ],
    memberSince: '04/2021',
    about: 'Desenvolvedor em formação, web designer com ênfase em UX e UI.',
    linkedin: 'https://www.linkedin.com/',
    instagram: 'https://www.instagram.com/'
  })
  const [sellingData, setSellingData] = useState([1, 2, 3, 4, 5, 6, 7])
  const [sellingDate, setSellingDate] = useState([
    ['11/04'],
    ['12/04'],
    ['13/04'],
    ['14/04'],
    ['15/04'],
    ['16/04'],
    ['17/04']
  ])
  const [team, setTeam] = useState([
    { name: 'Leonardo Ferreira', img: '/team/leonardo.svg' },
    { name: 'Gabriel Ramalho', img: '/team/gabriel.svg' },
    { name: 'Marcon Willian', img: '/team/marcon.svg' },
    { name: 'yellow', img: '/team/yellow.svg' },
    { name: 'red', img: '/team/red.svg' },
    { name: 'green', img: '/team/green.svg' },
    { name: 'green', img: '/team/green.svg' },
    { name: 'green', img: '/team/green.svg' },
    { name: 'green', img: '/team/green.svg' },
    { name: 'green', img: '/team/green.svg' }
  ])
  const [ranking, setRanking] = useState([
    {
      name: 'Semanal',
      members: [
        {
          name: 'Marcon Willian',
          photo: '/ranking/marcon.svg',
          badge: 'lion',
          info1: 'BSB',
          country: 'BR',
          state: 'Brasília',
          sales: 85
        },
        {
          name: 'Gabriel Ramalho',
          photo: '/ranking/gabriel.svg',
          badge: 'lion',
          info1: 'BSB',
          country: 'BR',
          state: 'Brasília',
          sales: 77
        },
        {
          name: 'Angela Viana',
          photo: '/ranking/angela.svg',
          badge: 'eagle',
          info1: 'BSB',
          country: 'BR',
          state: 'Brasília',
          sales: 69
        },
        {
          name: 'Laís Thainá',
          photo: '/ranking/lais.svg',
          badge: 'eagle',
          info1: 'BSB',
          country: 'BR',
          state: 'Brasília',
          sales: 63
        },
        {
          name: 'Leonardo Ferreira',
          photo: '/ranking/leonardo.svg',
          badge: 'wolf',
          info1: 'BSB',
          country: 'BR',
          state: 'Brasília',
          sales: 55
        },
        {
          name: 'Guilherme Maximiano',
          photo: '/ranking/guilherme.svg',
          badge: 'wolf',
          info1: 'BSB',
          country: 'BR',
          state: 'Brasília',
          sales: 42
        },
        {
          name: 'Lucas Paulino',
          photo: '/ranking/lucas.svg',
          badge: 'wolf',
          info1: 'BSB',
          country: 'BR',
          state: 'Brasília',
          sales: 38
        },
        {
          name: 'Guilherme Sandoval',
          photo: '/ranking/guilhermesandoval.svg',
          badge: 'rhino',
          info1: 'BSB',
          country: 'BR',
          state: 'Brasília',
          sales: 32
        },
        {
          name: 'Raphael Bastos',
          photo: '/ranking/raphael.svg',
          badge: 'rhino',
          info1: 'BSB',
          country: 'BR',
          state: 'Brasília',
          sales: 29
        }
      ]
    },
    {
      name: 'Mensal',
      members: [
        {
          name: 'Marcon Willian',
          photo: '/ranking/marcon.svg',
          badge: 'lion',
          info1: 'BSB',
          country: 'BR',
          state: 'Brasília',
          sales: 85
        },
        {
          name: 'Gabriel Ramalho',
          photo: '/ranking/gabriel.svg',
          badge: 'lion',
          info1: 'BSB',
          country: 'BR',
          state: 'Brasília',
          sales: 77
        },
        {
          name: 'Angela Viana',
          photo: '/ranking/angela.svg',
          badge: 'eagle',
          info1: 'BSB',
          country: 'BR',
          state: 'Brasília',
          sales: 69
        },
        {
          name: 'Laís Thainá',
          photo: '/ranking/lais.svg',
          badge: 'eagle',
          info1: 'BSB',
          country: 'BR',
          state: 'Brasília',
          sales: 63
        },
        {
          name: 'Leonardo Ferreira',
          photo: '/ranking/leonardo.svg',
          badge: 'wolf',
          info1: 'BSB',
          country: 'BR',
          state: 'Brasília',
          sales: 55
        },
        {
          name: 'Guilherme Maximiano',
          photo: '/ranking/guilherme.svg',
          badge: 'wolf',
          info1: 'BSB',
          country: 'BR',
          state: 'Brasília',
          sales: 42
        },
        {
          name: 'Lucas Paulino',
          photo: '/ranking/lucas.svg',
          badge: 'wolf',
          info1: 'BSB',
          country: 'BR',
          state: 'Brasília',
          sales: 38
        },
        {
          name: 'Guilherme Sandoval',
          photo: '/ranking/guilhermesandoval.svg',
          badge: 'rhino',
          info1: 'BSB',
          country: 'BR',
          state: 'Brasília',
          sales: 32
        },
        {
          name: 'Raphael Bastos',
          photo: '/ranking/raphael.svg',
          badge: 'rhino',
          info1: 'BSB',
          country: 'BR',
          state: 'Brasília',
          sales: 29
        }
      ]
    },
    {
      name: 'Times',
      members: [
        {
          name: 'Marcon Willian',
          photo: '/ranking/marcon.svg',
          badge: 'lion',
          info1: 'BSB',
          country: 'BR',
          state: 'Brasília',
          sales: 85
        },
        {
          name: 'Gabriel Ramalho',
          photo: '/ranking/gabriel.svg',
          badge: 'lion',
          info1: 'BSB',
          country: 'BR',
          state: 'Brasília',
          sales: 77
        },
        {
          name: 'Angela Viana',
          photo: '/ranking/angela.svg',
          badge: 'eagle',
          info1: 'BSB',
          country: 'BR',
          state: 'Brasília',
          sales: 69
        },
        {
          name: 'Laís Thainá',
          photo: '/ranking/lais.svg',
          badge: 'eagle',
          info1: 'BSB',
          country: 'BR',
          state: 'Brasília',
          sales: 63
        },
        {
          name: 'Leonardo Ferreira',
          photo: '/ranking/leonardo.svg',
          badge: 'wolf',
          info1: 'BSB',
          country: 'BR',
          state: 'Brasília',
          sales: 55
        },
        {
          name: 'Guilherme Maximiano',
          photo: '/ranking/guilherme.svg',
          badge: 'wolf',
          info1: 'BSB',
          country: 'BR',
          state: 'Brasília',
          sales: 42
        },
        {
          name: 'Lucas Paulino',
          photo: '/ranking/lucas.svg',
          badge: 'wolf',
          info1: 'BSB',
          country: 'BR',
          state: 'Brasília',
          sales: 38
        },
        {
          name: 'Guilherme Sandoval',
          photo: '/ranking/guilhermesandoval.svg',
          badge: 'rhino',
          info1: 'BSB',
          country: 'BR',
          state: 'Brasília',
          sales: 32
        },
        {
          name: 'Raphael Bastos',
          photo: '/ranking/raphael.svg',
          badge: 'rhino',
          info1: 'BSB',
          country: 'BR',
          state: 'Brasília',
          sales: 29
        }
      ]
    }
  ])
  return (
    <Layout
      title="Home"
      profileImage={userInformation?.image}
      name={userInformation?.name}
      plan={toLowercase(userInformation?.plan)}
      stars={userInformation?.stars}
      balance={userInformation?.balance}
    >
      <Container>
        {state.menu === 'ranking' && (
          <Ranking>
            <h1>
              <img src="/ranking.svg" /> Ranking
            </h1>
            <TopMenuRanking menus={['Semanal', 'Mensal', 'Times']} />
            {state.submenu === 'Semanal' && (
              <RankingTotalContainer
                ranking={ranking}
                userInfo={userInformation}
                team={team}
              />
            )}
            {state.submenu === 'Mensal' && (
              <RankingTotalContainer
                ranking={ranking}
                userInfo={userInformation}
                team={team}
              />
            )}
            {state.submenu === 'Times' && (
              <RankingTotalContainer
                ranking={ranking}
                userInfo={userInformation}
                team={team}
              />
            )}
          </Ranking>
        )}
      </Container>
    </Layout>
  )
}

export default rankingPage
