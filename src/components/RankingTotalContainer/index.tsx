import { useContext } from 'react'

import { Container, Indications } from './styles'

import MenuContext from '../../context/MenuContext'
import badges from '../../utils/badges'

import Team from '../Team'

interface Props {
  ranking: {
    name: string
    members: {
      name: string
      photo: string
      badge: string
      info1: string
      country: string
      state: string
      sales: number
    }[]
  }[]
  userInfo: {
    name: string
    plan: string
    stars: number
    balance: string
    image: string
    country: string
    state: string
    city: string
    sales: string
    badges: string
    company: string
  }
  team: {
    name: string
    img: string
  }[]
}

const RankingTotalContainer: React.FC<Props> = ({
  ranking,
  userInfo,
  team
}) => {
  const { state, setState: setMenuState } = useContext(MenuContext)

  return (
    <>
      <Container>
        <div className="header">
          <span>Nome</span>
          <span>Vendas</span>
        </div>

        {ranking.map(data => {
          return data.members.map((single, index) => {
            if (data.name === state.submenu) {
              return (
                <div key={index} className="single-container">
                  <img src={single.photo} alt={single.name} />

                  <div className="single-wraper">
                    <div className="single-info">
                      <span>{single.name}</span>
                      <div>{badges(single.badge)}</div>
                      <div className="single-location">
                        {single.info1} • {single.country} • {single.state}
                      </div>
                    </div>
                    <div className="single-sales">{single.sales}</div>
                  </div>
                </div>
              )
            }
          })
        })}
        <hr />

        <div className="single-container">
          <img src={userInfo.image} alt={userInfo.name} />

          <div className="single-wraper">
            <div className="single-info">
              <span>{userInfo.name}</span>
              <div>{badges(userInfo.badges)}</div>
              <div className="single-location">
                {userInfo.state} • {userInfo.country === 'Brasil' && 'BR'} •{' '}
                {userInfo.city}
              </div>
            </div>
            <div className="single-sales">{userInfo.sales}</div>
          </div>
        </div>
      </Container>

      <Indications>
        <h2>Minhas Indicações</h2>
        <Team user={userInfo.image} team={team} />
      </Indications>
    </>
  )
}

export default RankingTotalContainer
