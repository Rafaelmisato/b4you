import React, { useContext, useState } from 'react'

import Layout from '../components/layout'
import TopMenuAdmin from '../components/TopMenuAdmin'
import Receipt from '../components/Receipt'
import Payments from '../components/Payments'

import { Container, Admin } from '../styles/pages/recipt'

import toLowercase from '../utils/toLowerCase'
import MenuContext from '../context/MenuContext'

interface MenuProps {
  menu: string
}

const Home: React.FC<MenuProps> = () => {
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
  const [admin, setAdmin] = useState([
    {
      availablebalance: '538,75',
      availablePercentage: '45%',
      antecipation: '1.036,36',
      antecipationPercentage: '45%',
      availableData: [
        { name: 'Hoje', value: ['59,62'] },
        { name: 'Semana', value: ['113,01'] },
        {
          name: 'Mês',
          value: [
            { name: 'Janeiro', value: '50,00' },
            { name: 'Fevereiro', value: '100,00' },
            { name: 'Março', value: '351,29' }
          ]
        },
        {
          name: 'Ano',
          value: [
            { name: '2019', value: '500,00' },
            { name: '2020', value: '800,00' },
            { name: '2021', value: '1575,11' }
          ]
        },
        { name: 'Total', value: ['1575,11'] }
      ],
      accounts: [
        {
          number: '055',
          name: 'Banco do Brasil S/A',
          ag: '0001',
          cc: '1596325-63'
        },
        {
          number: '055',
          name: 'Banco do Brasil S/A',
          ag: '0001',
          cc: '1596325-63'
        },
        {
          number: '055',
          name: 'Banco do Brasil S/A',
          ag: '0001',
          cc: '1596325-63'
        }
      ]
    }
  ])
  const [adminPayment, setAdminPayment] = useState([
    {
      scheduled: '00,00',
      total: '2.295,42',
      withdrawData: [
        {
          data: '19/04/2021',
          value: '59,62',
          info: [
            {
              name: 'Marcon Willian',
              product: 'B4youStarter',
              data: '05/04/2021',
              value: '197,90'
            },
            {
              name: 'Angela Viana',
              product: 'Profissão Blogueiras',
              data: '08/04/2021',
              value: '25,39'
            },
            {
              name: 'Leonardo Ferreira',
              product: 'Meu Sono Brasil',
              data: '11/04/2021',
              value: '117,56'
            }
          ]
        },
        {
          data: '19/03/2021',
          value: '113,01',
          info: [
            {
              name: 'Marcon Willian',
              product: 'B4youStarter',
              data: '05/04/2021',
              value: '197,90'
            },
            {
              name: 'Angela Viana',
              product: 'Profissão Blogueiras',
              data: '08/04/2021',
              value: '25,39'
            },
            {
              name: 'Leonardo Ferreira',
              product: 'Meu Sono Brasil',
              data: '11/04/2021',
              value: '117,56'
            }
          ]
        },
        {
          data: '10/02/2021',
          value: '25,36',
          info: [
            {
              name: 'Marcon Willian',
              product: 'B4youStarter',
              data: '05/04/2021',
              value: '197,90'
            },
            {
              name: 'Angela Viana',
              product: 'Profissão Blogueiras',
              data: '08/04/2021',
              value: '25,39'
            },
            {
              name: 'Leonardo Ferreira',
              product: 'Meu Sono Brasil',
              data: '11/04/2021',
              value: '117,56'
            }
          ]
        },
        {
          data: '05/01/2021',
          value: '125,39',
          info: [
            {
              name: 'Marcon Willian',
              product: 'B4youStarter',
              data: '05/04/2021',
              value: '197,90'
            },
            {
              name: 'Angela Viana',
              product: 'Profissão Blogueiras',
              data: '08/04/2021',
              value: '25,39'
            },
            {
              name: 'Leonardo Ferreira',
              product: 'Meu Sono Brasil',
              data: '11/04/2021',
              value: '117,56'
            }
          ]
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
        {state.menu === 'admin' && (
          <Admin>
            <div className="admin-title">
              <img src="/adminlogo.svg" />
              <div>
                <h1>Administrativo</h1>
                <span>Acompanhe suas comissões.</span>
              </div>
            </div>

            <TopMenuAdmin menus={['Receita', 'Pagamentos']} />

            {state.submenu === 'Receita' && <Receipt data={admin} />}
            {state.submenu === 'Pagamentos' && <Payments data={adminPayment} />}
          </Admin>
        )}
      </Container>
    </Layout>
  )
}

export default Home
