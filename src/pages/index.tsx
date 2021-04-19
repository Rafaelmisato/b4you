import React, {
  useContext,
  useState,
  useEffect,
  useRef,
  useCallback
} from 'react'

import Layout from '../components/layout'
import Video from '../components/video'
import InputQr from '../components/inputQrCode'
import SellingChart from '../components/SellingChart'
import Card from '../components/Card'
import Modal from '../components/Modal'
import Input from '../components/Input'
import Flex from '../components/FlexRow'
import InputRange from '../components/InputRange'
import InputSocial from '../components/InputSocial'
import CheckBox from '../components/CheckBox'

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
import getBase64 from '../utils/getBase64'
import MenuContext from '../context/MenuContext'

import { Form } from '@unform/web'
import { FormHandles } from '@unform/core'
import { mask } from 'remask'
import * as Yup from 'yup'

interface MenuProps {
  menu: string
}

const Home: React.FC<MenuProps> = () => {
  const { state, setState: setMenuState } = useContext(MenuContext)

  const formPerfilRef = useRef<FormHandles>(null)
  const zoomRotateRef = useRef<FormHandles>(null)
  const formAboutRef = useRef<FormHandles>(null)
  const formExperienceRef = useRef<FormHandles>(null)

  // change photo states
  const [zoom, setZoom] = useState(0)
  const [zoomScale, setZoomScale] = useState(0)
  const [rotate, setRotate] = useState(0)
  const [rotateScale, setRotateScale] = useState(0)
  const [changeImg, setChangeImg] = useState(null)

  // form states
  const [cpfValue, setCpfValue] = useState(null)
  const [birthValue, setBirthValue] = useState(null)
  const [phoneValue, setPhoneValue] = useState(null)
  const [cepValue, setCepValue] = useState(null)
  const [ufValue, setUfValue] = useState(null)

  // modal states
  const [photoModal, setPhotoModal] = useState(false)
  const [perfilModal, setPerfilModal] = useState(false)
  const [aboutModal, setAboutModal] = useState(false)
  const [experienceModal, setExperienceModal] = useState(false)

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

  const handlePerfilSubmit = async data => {
    try {
      formPerfilRef.current?.setErrors({})

      const schema = Yup.object().shape({
        birth: Yup.string().required('Data obrigatória'),
        cep: Yup.string().required('CEP Obrigatório'),
        cidade: Yup.string().required('Cidade Obrigatória'),
        country: Yup.string().required('País Obrigatório'),
        cpf: Yup.string().required('CPF Obrigatório'),
        fullName: Yup.string().required('Nome Obrigatório'),
        occupation: Yup.string().required('Profissão Obrigatória'),
        phone: Yup.string().required('Telefone Obrigatório'),
        uf: Yup.string().required('UF Obrigatório')
      })

      await schema
        .validate(data, {
          abortEarly: false
        })
        .then(async () => {
          console.log(data)
        })
        .catch(err => {
          if (err instanceof Yup.ValidationError) {
            const errorMessages = {}

            err.inner.forEach(error => {
              errorMessages[error.path] = error.message
            })
            formPerfilRef.current.setErrors(errorMessages)
          } else {
            console.log(err)
          }
        })
    } catch (err) {
      console.log(err)
    }
  }

  const handleAboutSubmit = async data => {
    try {
      formAboutRef.current?.setErrors({})

      const schema = Yup.object().shape({
        instagram: Yup.string().required('instagram obrigatório'),
        linkedin: Yup.string().required('Linkedin obrigatório')
      })

      await schema
        .validate(data, {
          abortEarly: false
        })
        .then(async () => {
          console.log(data)
        })
        .catch(err => {
          if (err instanceof Yup.ValidationError) {
            const errorMessages = {}

            err.inner.forEach(error => {
              errorMessages[error.path] = error.message
            })
            formAboutRef.current.setErrors(errorMessages)
          } else {
            console.log(err)
          }
        })
    } catch (err) {
      console.log(err)
    }
  }

  const handleExperienceSubmit = async data => {
    console.log(data)
  }

  const handleZoom = e => {
    const number = e.target.value
    setZoom(number)

    const scale = number / 100 + 1

    setZoomScale(scale)
  }

  const handleRotate = e => {
    const number = e.target.value
    setRotate(number)

    const scale = number * 3.6

    setRotateScale(scale)
  }

  const base64 = useCallback(async file => {
    const res = await getBase64(file)

    return res
  }, [])

  const handleChangePhoto = async e => {
    const image = e.target.files[0]

    const image64 = await base64(image)

    setChangeImg(image64)
    console.log(image64)
  }

  const handleOnlyNumber = useCallback(evt => {
    const theEvent = evt || window.event
    let key = theEvent.keyCode || theEvent.which
    key = String.fromCharCode(key)
    const regex = /^[0-9.,]+/
    if (!regex.test(key)) {
      theEvent.returnValue = false
      if (theEvent.preventDefault) theEvent.preventDefault()
    }
  }, [])

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
                      onClick={() => setPerfilModal(!perfilModal)}
                    >
                      <img src="/pen.svg" />
                    </button>

                    <img
                      src={userInformation.image}
                      alt={userInformation.name}
                      onClick={() => setPhotoModal(true)}
                    />

                    <div
                      className="change-photo"
                      onClick={() => setPhotoModal(true)}
                    >
                      Trocar Foto
                    </div>

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
                              <img src={achievement.image} />
                            </React.Fragment>
                          )
                        }
                      )}
                      {userInformation.experiences.map((experience, index) => {
                        return (
                          <React.Fragment key={index}>
                            <img src={experience.image} />
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
                      <button
                        className="edit"
                        onClick={() => setAboutModal(!aboutModal)}
                      >
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
                      <button
                        className="edit"
                        onClick={() => setExperienceModal(!experienceModal)}
                      >
                        <img src="/pen.svg" />
                      </button>
                      <h3>Experiências e Conquistas</h3>
                      <p>Conquistas</p>
                      <div>
                        {userInformation.achievements.map(
                          (achievement, index) => {
                            return <img key={index} src={achievement.image} />
                          }
                        )}
                      </div>

                      <p>Experiências</p>
                      <div>
                        {userInformation.experiences.map(
                          (experience, index) => {
                            return <img key={index} src={experience.image} />
                          }
                        )}
                      </div>
                    </Card>
                  </InfoContainerRight>
                </InfoContainer>
              </PerfilContainer>
            </section>

            {photoModal && (
              <Modal
                title="Editar Foto"
                onClose={() => setPhotoModal(false)}
                zoom={zoomScale}
                rotate={rotateScale}
              >
                <Flex>
                  <div className="imgContainer">
                    <img
                      src={
                        changeImg === null ? userInformation.image : changeImg
                      }
                      className="perfilImg"
                      alt="Foto de perfil"
                    />
                  </div>
                  <Form
                    ref={zoomRotateRef}
                    onSubmit={() => null}
                    className="input-range"
                  >
                    <InputRange
                      name="zoom"
                      title="Zoom"
                      onChange={e => handleZoom(e)}
                      value={zoom}
                    />
                    <InputRange
                      name="rotate"
                      title="Rotacionar"
                      onChange={e => handleRotate(e)}
                      value={rotate}
                    />
                    <button className="buttonConfirm">
                      confirmar alterações
                    </button>
                  </Form>
                </Flex>

                <label className="buttonClose" htmlFor="file">
                  Alterar foto
                  <input
                    id="file"
                    type="file"
                    onChange={e => handleChangePhoto(e)}
                  />
                </label>
              </Modal>
            )}
            {perfilModal && (
              <Modal title="Meu perfil" onClose={() => setPerfilModal(false)}>
                <Form onSubmit={handlePerfilSubmit} ref={formPerfilRef}>
                  <Flex>
                    <Input
                      name="fullName"
                      text="Nome Completo"
                      mask={['']}
                      onChange={() => null}
                    />
                    <Input
                      name="cpf"
                      text="CPF"
                      mask={['999.999.999-99']}
                      onChange={setCpfValue}
                      value={
                        cpfValue && cpfValue !== null
                          ? mask(cpfValue, ['999.999.999-99'])
                          : ''
                      }
                      onKeyPress={handleOnlyNumber}
                    />
                  </Flex>
                  <Input
                    name="occupation"
                    text="Profissão"
                    mask={['']}
                    onChange={() => null}
                  />
                  <Flex>
                    <Input
                      name="birth"
                      text="Data de Nascimento"
                      mask={['99/99/9999']}
                      onChange={setBirthValue}
                      value={
                        birthValue && birthValue !== null
                          ? mask(birthValue, ['99/99/9999'])
                          : ''
                      }
                      onKeyPress={handleOnlyNumber}
                    />
                    <Input
                      name="phone"
                      text="Telefone"
                      mask={['(99) 9999-9999', '(99) 9 9999-9999']}
                      onChange={setPhoneValue}
                      value={
                        phoneValue && phoneValue !== null
                          ? mask(phoneValue, [
                              '(99) 9999-9999',
                              '(99) 9 9999-9999'
                            ])
                          : ''
                      }
                      onKeyPress={handleOnlyNumber}
                    />
                  </Flex>
                  <h3>Endereço</h3>
                  <Flex>
                    <Input
                      name="country"
                      text="País"
                      mask={['']}
                      onChange={() => null}
                    />
                    <Input
                      name="cep"
                      text="CEP"
                      mask={['99999-999']}
                      onChange={setCepValue}
                      value={
                        cepValue && cepValue !== null
                          ? mask(cepValue, ['99999-999'])
                          : ''
                      }
                      onKeyPress={handleOnlyNumber}
                    />
                  </Flex>
                  <Flex>
                    <Input
                      name="uf"
                      text="UF"
                      mask={['AA']}
                      onChange={setUfValue}
                      value={
                        ufValue && ufValue !== null ? mask(ufValue, ['AA']) : ''
                      }
                      width={45}
                    />
                    <Input
                      name="cidade"
                      text="Cidade"
                      mask={['']}
                      onChange={() => null}
                    />
                  </Flex>
                  <button className="buttonConfirm" type="submit">
                    confirmar alterações
                  </button>
                </Form>
                <button
                  className="buttonClose"
                  onClick={() => setPerfilModal(false)}
                >
                  Cancelar
                </button>
              </Modal>
            )}
            {aboutModal && (
              <Modal title="Sobre mim" onClose={() => setAboutModal(false)}>
                Sobre
                <div className="aboutInfo" />
                <Form onSubmit={handleAboutSubmit} ref={formAboutRef}>
                  <InputSocial
                    name="linkedin"
                    text="Linkedin"
                    placeholder="Insira a URL"
                    mask={['']}
                    onChange={() => null}
                  />
                  <InputSocial
                    name="instagram"
                    text="Instagram"
                    placeholder="Insira a URL"
                    mask={['']}
                    onChange={() => null}
                  />

                  <button className="buttonConfirm" type="submit">
                    confirmar alterações
                  </button>
                </Form>
                <button
                  className="buttonClose"
                  onClick={() => setAboutModal(false)}
                >
                  Cancelar
                </button>
              </Modal>
            )}
            {experienceModal && (
              <Modal
                title="Experiências"
                onClose={() => setExperienceModal(false)}
              >
                <Form onSubmit={handleExperienceSubmit} ref={formExperienceRef}>
                  {userInformation.experiences.map((experience, index) => {
                    return (
                      <div className="experiences-checkbox" key={index}>
                        <img src={experience.image} />
                        <div>
                          <span>{experience.name}</span>
                          <p>{experience.description}</p>
                        </div>
                        <CheckBox name={experience.name} />
                      </div>
                    )
                  })}

                  <h3 className="achievements-title">Conquistas</h3>
                  {userInformation.achievements.map((achievement, index) => {
                    return (
                      <div className="experiences-checkbox" key={index}>
                        <img src={achievement.image} />
                        <div>
                          <span>{achievement.name}</span>
                          <p>{achievement.description}</p>
                        </div>
                        <CheckBox name={achievement.name} />
                      </div>
                    )
                  })}
                  <button className="buttonConfirm" type="submit">
                    confirmar alterações
                  </button>
                </Form>
                <div className="margin-bottom" />
                <button
                  className="buttonClose"
                  onClick={() => setExperienceModal(false)}
                >
                  Cancelar
                </button>
                {/* fazer map no expriencies e no coquistas, os estados ja estao criados com os status */}
                {/* colocar switch buutton e passae true or false - olhar no autosim */}
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
