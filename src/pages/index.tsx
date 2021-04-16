import React, { useContext, useState, useEffect } from 'react'

import Layout from '../components/layout'
import Video from '../components/video'
import InputQr from '../components/inputQrCode'
import SellingChart from '../components/SellingChart'
import Card from '../components/Card'
import Modal from '../components/Modal'

import {
  Container,
  HomeContainer,
  CardsContainer,
  Gold,
  Black,
  Rubi,
  Blue,
  Green,
  UserCard,
  PerfilContainer,
  InfoContainer,
  InfoContainerLeft,
  InfoContainerRight
} from '../styles/pages/home'

import toLowercase from '../utils/toLowerCase'
import starsNumber from '../utils/starsNumber'
import badges from '../utils/badges'
import MenuContext from '../context/MenuContext'
import { userInfo } from 'os'

interface MenuProps {
  menu: string
}

const Home: React.FC<MenuProps> = () => {
  const { state, setState: setMenuState } = useContext(MenuContext)

  const [photoModal, setPhotoModal] = useState(false)

  // data states
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
    achievements: [
      '/achievements/aquagreen.svg',
      '/achievements/blue.svg',
      '/achievements/pink.svg',
      '/achievements/yellow.svg'
    ],
    experiences: [
      '/experiences/green.svg',
      '/experiences/red.svg',
      '/achievements/pink.svg'
    ],
    memberSince: '04/2021',
    about: 'Desenvolvedor em formação, web designer com ênfase em UX e UI.',
    linkedin: 'https://www.linkedin.com/',
    instagram: 'https://www.instagram.com/'
  })
  const [totalSelling, setTotalSelling] = useState(null)
  const [periodSelling, setperiodSelling] = useState(null)
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
  const [haveSelling, setHaveSellings] = useState(false)
  const [sellersInfo, setSellerInfo] = useState([
    {
      name: 'Leonardo Ferreira Nascimento',
      value: '358,80',
      date: '15/04'
    },
    {
      name: 'Guilherme Maximiano',
      value: '358,80',
      date: '15/04'
    },
    {
      name: 'Ellen Veras Lopes Mota',
      value: '358,80',
      date: '12/04'
    },
    {
      name: 'Angela Viana',
      value: '358,80',
      date: '12/04'
    },
    {
      name: 'Laís Thainá',
      value: '358,80',
      date: '12/04'
    },
    {
      name: 'Marcon Willian',
      value: '358,80',
      date: '12/04'
    },
    {
      name: 'Guilherme Scandoval',
      value: '358,80',
      date: '12/04'
    }
  ])
  const [products, setProducts] = useState([
    {
      name: 'Profissão blogueira',
      image: '/products/pinkcard.svg'
    },
    {
      name: 'Beauty Candy',
      image: '/products/yellowcard.svg'
    },
    {
      name: 'Meu Sono Brasil',
      image: '/products/bluecard.svg'
    }
  ])
  const [users, setUsers] = useState([
    {
      name: 'Marcon Willian',
      plan: 'black',
      img: '/users/marcon.png',
      country: 'Brasil',
      state: 'MT',
      city: 'Mato Grosso',
      sales: '55',
      stars: 5
    },
    {
      name: 'Gabriel Ramalho',
      plan: 'gold',
      img: '/users/gabriel.png',
      country: 'Brasil',
      state: 'RJ',
      city: 'Rio de Janeiro',
      sales: '35',
      stars: 5
    },
    {
      name: 'Angela Viana',
      plan: 'rubi',
      img: '/users/angela.png',
      country: 'Brasil',
      state: 'BSB',
      city: 'Brasília',
      sales: '22',
      stars: 5
    },
    {
      name: 'Laís Souza',
      plan: 'blue',
      img: '/users/lais.png',
      country: 'Brasil',
      state: 'BSB',
      city: 'Brasília',
      sales: '15',
      stars: 3
    }
  ])

  useEffect(() => {
    const totalSelling = sellingData.reduce(
      (totalSelling, sellingData) => totalSelling + sellingData,
      0
    )

    setTotalSelling(totalSelling)

    if (totalSelling > 0) {
      setHaveSellings(true)
    }
  }, [sellingData, sellingDate])

  useEffect(() => {
    if (sellingDate.length !== 0) {
      const first = sellingDate[0]
      const last = sellingDate[sellingDate.length - 1]

      const period = `${first[0]} - ${last[0]}`

      setperiodSelling(period)
    }
  }, [sellingData, sellingDate])

  console.log(state)

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
        {state.menu === 'home' && (
          <HomeContainer>
            <Video
              src="https://assets.mixkit.co/videos/preview/mixkit-rain-falling-on-the-water-of-a-lake-seen-up-18312-large.mp4"
              poster="/videoThumb.svg"
            />
            <h2>Link para Vendas</h2>
            <InputQr value="https://b4pay.com.br.checkout/p-Y7Qp" />

            <h2 className="sell">Vendas</h2>
            <SellingChart
              sellCount={totalSelling}
              period={periodSelling}
              data={sellingData}
              date={sellingDate}
              haveSelling={haveSelling}
              sellerInfo={sellersInfo}
            />

            <CardsContainer>
              <Card title="Produtos">
                {products?.map(product => {
                  return (
                    <div className="products" key={product.name}>
                      <img src={product.image} alt="Imagem Produto" />
                      <h3>{product.name}</h3>
                    </div>
                  )
                })}
              </Card>

              <Card title="Ranking" linear>
                <div className="ranking">
                  {users?.map(user => {
                    return (
                      <UserCard borderColor={user.plan} key={user.name}>
                        <div>
                          <img
                            src={user.img}
                            alt={user.name}
                            className="user-img"
                          />
                          <div>
                            <div>
                              <span>{user.name}</span>

                              <span>
                                {toLowercase(user.plan) === 'gold' && (
                                  <Gold>{user.plan}</Gold>
                                )}
                                {toLowercase(user.plan) === 'black' && (
                                  <Black>{user.plan}</Black>
                                )}
                                {toLowercase(user.plan) === 'blue' && (
                                  <Blue>{user.plan}</Blue>
                                )}
                                {toLowercase(user.plan) === 'rubi' && (
                                  <Rubi>{user.plan}</Rubi>
                                )}
                                {starsNumber(user.stars, user.plan)}
                              </span>

                              <span>
                                {user.country}
                                <img src="/users/whitepoint.svg" />
                                {user.state}
                                <img src="/users/whitepoint.svg" />
                                {user.city}
                              </span>
                            </div>
                            <div className="sales">
                              <p>{user.sales}</p>
                            </div>
                          </div>
                        </div>
                      </UserCard>
                    )
                  })}

                  <UserCard borderColor={userInformation?.plan}>
                    <hr />
                    <div>
                      <img
                        src={userInformation?.image}
                        alt={userInformation?.name}
                        className="user-img"
                      />
                      <div>
                        <div>
                          <span>{userInformation?.name}</span>

                          <span>
                            {toLowercase(userInformation?.plan) === 'gold' && (
                              <Gold>{userInformation?.plan}</Gold>
                            )}
                            {toLowercase(userInformation?.plan) === 'black' && (
                              <Black>{userInformation?.plan}</Black>
                            )}
                            {toLowercase(userInformation?.plan) === 'blue' && (
                              <Blue>{userInformation?.plan}</Blue>
                            )}
                            {toLowercase(userInformation?.plan) === 'rubi' && (
                              <Rubi>{userInformation?.plan}</Rubi>
                            )}
                            {starsNumber(
                              userInformation?.stars,
                              userInformation?.plan
                            )}
                          </span>

                          <span>
                            {userInformation?.country}
                            <img src="/users/whitepoint.svg" />
                            {userInformation?.state}
                            <img src="/users/whitepoint.svg" />
                            {userInformation?.city}
                          </span>
                        </div>
                        <div className="sales">
                          <p>{userInformation?.sales}</p> <p>52%</p>
                        </div>
                      </div>
                    </div>
                  </UserCard>
                </div>
              </Card>
            </CardsContainer>
          </HomeContainer>
        )}

        {state.menu === 'perfil' && (
          <>
            <section>
              <PerfilContainer>
                <InfoContainer>
                  <InfoContainerLeft>
                    <button
                      className="edit"
                      onClick={() => setPhotoModal(!photoModal)}
                    >
                      <img src="/pen.svg" />
                    </button>

                    <img
                      src={userInformation.image}
                      alt={userInformation.name}
                    />
                    <h3>{userInformation.name}</h3>

                    <div>
                      {toLowercase(userInformation.badges) === 'lion' && (
                        <Gold>{userInformation.badges}</Gold>
                      )}
                      {toLowercase(userInformation.badges) === 'wolf' && (
                        <Black>{userInformation.badges}</Black>
                      )}
                      {toLowercase(userInformation.badges) === 'rhino' && (
                        <Blue>{userInformation.badges}</Blue>
                      )}
                      {toLowercase(userInformation.badges) === 'eagle' && (
                        <Rubi>{userInformation.badges}</Rubi>
                      )}
                      {badges(userInformation.badges)}
                    </div>

                    <span>
                      {userInformation.occupation} | {userInformation.company}
                    </span>

                    <span>
                      <img src="/location.svg" />
                      &nbsp;&nbsp;{userInformation.city},&nbsp;
                      {userInformation.state},&nbsp;
                      {userInformation.country}
                    </span>

                    <div>
                      {userInformation.achievements.map(
                        (achievement, index) => {
                          return (
                            <React.Fragment key={index}>
                              <img src={achievement} />
                            </React.Fragment>
                          )
                        }
                      )}
                      {userInformation.experiences.map((experience, index) => {
                        return (
                          <React.Fragment key={index}>
                            <img src={experience} />
                          </React.Fragment>
                        )
                      })}
                    </div>

                    <hr />

                    <span>
                      Membro da B4YOU Starter desde{' '}
                      {userInformation.memberSince}
                    </span>
                  </InfoContainerLeft>

                  <InfoContainerRight>
                    <Card fullWidth className="card about">
                      <button className="edit">
                        <img src="/pen.svg" />
                      </button>
                      <h3>Sobre mim</h3>

                      <span>{userInformation.about}</span>

                      <span>
                        <a href={userInformation.linkedin} target="_blank">
                          <img src="/linkedinlogo.svg" />
                          Linkedin
                        </a>
                        <a href={userInformation.instagram} target="_blank">
                          <img src="/instagramlogo.svg" />
                          Instagram
                        </a>
                      </span>
                    </Card>

                    <Card fullWidth className="card exp">
                      <button className="edit">
                        <img src="/pen.svg" />
                      </button>
                      <h3>Experiências e Conquistas</h3>
                      <p>Conquistas</p>
                      <div>
                        {userInformation.achievements.map(
                          (achievement, index) => {
                            return <img key={index} src={achievement} />
                          }
                        )}
                      </div>

                      <p>Experiências</p>
                      <div>
                        {userInformation.experiences.map(
                          (experience, index) => {
                            return <img key={index} src={experience} />
                          }
                        )}
                      </div>
                    </Card>
                  </InfoContainerRight>
                </InfoContainer>
              </PerfilContainer>
            </section>

            {photoModal && (
              <Modal title="Editar Foto" onClose={() => setPhotoModal(false)}>
                <img src={userInformation.image} alt="" />

                <button className="buttonClose">alterar foto</button>
                <button className="buttonConfirm">confirmar alterações</button>
                {/* usar essas classes nos botoes do modal, ja estao padronizadas */}
              </Modal>
            )}
          </>
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
