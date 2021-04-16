import { useContext, useState, useEffect } from 'react'

import Layout from '../components/layout'
import Video from '../components/video'
import InputQr from '../components/inputQrCode'
import SellingChart from '../components/SellingChart'
import Card from '../components/Card'

import {
  Container,
  HomeContainer,
  CardsContainer,
  Gold,
  Black,
  Rubi,
  Blue,
  UserCard
} from '../styles/pages/home'

import toLowercase from '../utils/toLowerCase'
import starsNumber from '../utils/starsNumber'
import MenuContext from '../context/MenuContext'

interface MenuProps {
  menu: string
}

const Home: React.FC<MenuProps> = () => {
  const { state, setState: setMenuState } = useContext(MenuContext)

  const [userInformation, setUserInformation] = useState({
    name: 'Pedro Kassaoka',
    plan: 'gold',
    stars: 4,
    balance: '538,75',
    image: '/profileImg.png',
    country: 'BR',
    state: 'BA',
    city: 'Salvador',
    sales: '7'
  })

  const [totalSelling, setTotalSelling] = useState(null)
  const [periodSelling, setperiodSelling] = useState(null)
  // const [sellingData, setSellingData] = useState([])
  // const [sellingDate, setSellingDate] = useState([])
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
      country: 'BR',
      state: 'MT',
      city: 'Mato Grosso',
      sales: '55',
      stars: 5
    },
    {
      name: 'Gabriel Ramalho',
      plan: 'gold',
      img: '/users/gabriel.png',
      country: 'BR',
      state: 'RJ',
      city: 'Rio de Janeiro',
      sales: '35',
      stars: 5
    },
    {
      name: 'Angela Viana',
      plan: 'rubi',
      img: '/users/angela.png',
      country: 'BR',
      state: 'BSB',
      city: 'Brasília',
      sales: '22',
      stars: 5
    },
    {
      name: 'Laís Souza',
      plan: 'blue',
      img: '/users/lais.png',
      country: 'BR',
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
