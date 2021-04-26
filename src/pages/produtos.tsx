import React, { useContext, useState, useEffect } from 'react'

import Layout from '../components/layout'
import TopMenu from '../components/TopMenu'
import ProductsList from '../components/ProductsList'
import ProductsListSkeleton from '../components/ProductListSkeleton'

import { Container, Products } from '../styles/pages/products'

import toLowercase from '../utils/toLowerCase'
import starsNumber from '../utils/starsNumber'
import MenuContext from '../context/MenuContext'

interface MenuProps {
  menu: string
}

const ProductsPage: React.FC<MenuProps> = () => {
  const { state, setState: setMenuState } = useContext(MenuContext)

  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (state.submenu === 'Meus Produtos') {
      setLoading(true)

      setTimeout(function () {
        setLoading(false)
      }, 3000)
    }

    if (state.submenu === 'Loja de Produtos') {
      setLoading(true)

      setTimeout(function () {
        setLoading(false)
      }, 3000)
    }
  }, [state.submenu])

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

  const [myProducts, setMyProducts] = useState([
    {
      name: 'Profissão Blogueiras',
      image: '/products/pinkcard.svg',
      stars: 5,
      comission: '52,37',
      text:
        'Aprenda o Passo a Passo do Mais Novo Método “Profissão Blogueira” e Ganhe de Mil a 30 mil Reais por Publi Posts! Ative uma Visão Empreendedora totalmente única e inovadora e aprenda como se diferenciar das demais para ser uma verdadeira influencer de sucesso!'
    },
    {
      name: 'Evolve TV',
      image: '/products/greencard.svg',
      stars: 5,
      comission: '85,90',
      text:
        'TRANSFORME SUA TV EM UMA SMART TV DE VERDADE! Infinitas Possibilidades na sua TV! Streaming de Mais de 100.000 Filmes, Episódios de TV e Canais para Assistir Onde e Quando quiser!'
    },
    {
      name: 'Meu Sono Brasil',
      image: 'products/bluecard.svg',
      stars: 5,
      comission: '52,37',
      text:
        'Ative o Alívio Terapêutico Enquanto Você Dorme e Elimine Dores nas Costas e no Pescoço! Em apenas 7 dias, sem gastar com Medicamentos e Tratamentos Caros, com uma Tecnologia Ultra Avançada que Alinha a Sua Coluna em Qualquer Posição Que Você Dorme.'
    },
    {
      name: 'Pré-Gest',
      image: '/products/yellowcard.svg',
      stars: 5,
      comission: '25,90',
      text:
        'A Regeneração que o seu sistema reprodutor precisa para tornar sua vida mais completa! e não te faltar mais nada para realizar o seu sonho no próximo dia das mães.s'
    }
  ])
  const [allProducts, setAllProducts] = useState([
    {
      name: 'Profissão Blogueiras',
      image: '/products/pinkcard.svg',
      stars: 5,
      comission: '52,37',
      text:
        'Aprenda o Passo a Passo do Mais Novo Método “Profissão Blogueira” e Ganhe de Mil a 30 mil Reais por Publi Posts! Ative uma Visão Empreendedora totalmente única e inovadora e aprenda como se diferenciar das demais para ser uma verdadeira influencer de sucesso!'
    },
    {
      name: 'Evolve TV',
      image: '/products/greencard.svg',
      stars: 5,
      comission: '85,90',
      text:
        'TRANSFORME SUA TV EM UMA SMART TV DE VERDADE! Infinitas Possibilidades na sua TV! Streaming de Mais de 100.000 Filmes, Episódios de TV e Canais para Assistir Onde e Quando quiser!'
    },
    {
      name: 'Meu Sono Brasil',
      image: 'products/bluecard.svg',
      stars: 5,
      comission: '52,37',
      text:
        'Ative o Alívio Terapêutico Enquanto Você Dorme e Elimine Dores nas Costas e no Pescoço! Em apenas 7 dias, sem gastar com Medicamentos e Tratamentos Caros, com uma Tecnologia Ultra Avançada que Alinha a Sua Coluna em Qualquer Posição Que Você Dorme.'
    },
    {
      name: 'Pré-Gest',
      image: '/products/yellowcard.svg',
      stars: 5,
      comission: '25,90',
      text:
        'A Regeneração que o seu sistema reprodutor precisa para tornar sua vida mais completa! e não te faltar mais nada para realizar o seu sonho no próximo dia das mães.s'
    },
    {
      name: 'Meu Sono Brasil 2',
      image: '/products/redcard.svg',
      stars: 5,
      comission: '52,37',
      text:
        'Aprenda o Passo a Passo do Mais Novo Método “Profissão Blogueira” e Ganhe de Mil a 30 mil Reais por Publi Posts! Ative uma Visão Empreendedora totalmente única e inovadora e aprenda como se diferenciar das demais para ser uma verdadeira influencer de sucesso!'
    },
    {
      name: 'Beauty Candy',
      image: '/products/pinkcard.svg',
      stars: 5,
      comission: '35,48',
      text:
        'O MELHOR COLÁGENO EM GOMAS DO MUNDO! Ative o Efeito Botulínico Natural e Conquiste uma Pele Jovem. Beauty Candy possui a maior concentração de colágeno do mercado e Com apenas 3 Gomas por Dia Melhore o Aspecto das Rugas, Flacidez em até 31% e Tenha Cabelos e Unhas 3x Mais Fortes!'
    }
  ])

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
        {state.menu === 'produtos' && (
          <Products>
            <h1>
              <img src="/productslogo.svg" alt="Logo produtos" />
              Produtos
            </h1>
            <TopMenu menus={['Meus Produtos', 'Loja de Produtos']} />
            {state.submenu === 'Meus Produtos' && state.product === undefined && (
              <div className="my-products">
                {/* <ProductsListSkeleton /> */}

                {loading ? (
                  <>
                    <ProductsListSkeleton />
                    <ProductsListSkeleton />
                    <ProductsListSkeleton />
                    <ProductsListSkeleton />
                  </>
                ) : (
                  myProducts.map((product, index) => {
                    return (
                      <ProductsList
                        key={index}
                        name={product.name}
                        stars={product.stars}
                        image={product.image}
                        comission={product.comission}
                        description={product.text}
                        textbutton="Ver Produto"
                        qr
                      />
                    )
                  })
                )}
              </div>
            )}
            {state.submenu === 'Loja de Produtos' &&
              state.product === undefined && (
                <div className="my-products">
                  {loading ? (
                    <>
                      <ProductsListSkeleton />
                      <ProductsListSkeleton />
                      <ProductsListSkeleton />
                      <ProductsListSkeleton />
                    </>
                  ) : (
                    allProducts.map((product, index) => {
                      return (
                        <ProductsList
                          key={index}
                          name={product.name}
                          stars={product.stars}
                          image={product.image}
                          comission={product.comission}
                          description={product.text}
                          textbutton="Ver Produto"
                          qr
                        />
                      )
                    })
                  )}
                </div>
              )}
            {state.submenu === 'Meus Produtos' && state.product && (
              <div className="product-single">
                {allProducts.map((product, index) => {
                  if (product.name === state.product) {
                    return (
                      <div key={index}>
                        <img
                          src={product.image}
                          alt="Image do produto"
                          className="product-image-single"
                        />
                        <h3>{product.name}</h3>
                        <div>{starsNumber(product.stars, 'gold')}</div>
                        <p>{product.text}</p>
                        <h3>Comissões</h3>
                        <span>
                          <img src="/cash.svg" />
                          RS {product.comission} por venda
                        </span>
                        <button>Afiliar ao Produto</button>
                      </div>
                    )
                  }
                })}
              </div>
            )}
            {state.submenu === 'Loja de Produtos' && state.product && (
              <div className="product-single">
                {allProducts.map((product, index) => {
                  if (product.name === state.product) {
                    return (
                      <div key={index}>
                        <img
                          src={product.image}
                          alt="Image do produto"
                          className="product-image-single"
                        />
                        <h3>{product.name}</h3>
                        <div>{starsNumber(product.stars, 'gold')}</div>
                        <p>{product.text}</p>
                        <h3>Comissões</h3>
                        <span>
                          <img src="/cash.svg" />
                          RS {product.comission} por venda
                        </span>
                        <button>Afiliar ao Produto</button>
                      </div>
                    )
                  }
                })}
              </div>
            )}
          </Products>
        )}
      </Container>
    </Layout>
  )
}

export default ProductsPage
