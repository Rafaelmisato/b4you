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
import RankingChart from '../components/RankingChart'
import Team from '../components/Team'
import TopMenu from '../components/TopMenu'
import ProductsList from '../components/ProductsList'
import VideoContainer from '../components/VideoContainer'
import TopMenuRanking from '../components/TopMenuRanking'
import RankingTotalContainer from '../components/RankingTotalContainer'
import TopMenuAdmin from '../components/TopMenuAdmin'
import Receipt from '../components/Receipt'
import Payments from '../components/Payments'
import ProductsListSkeleton from '../components/ProductListSkeleton'

import {
  Container,
  HomeContainer,
  CardsContainer,
  Gold,
  Black,
  Rubi,
  Blue,
  UserCard,
  PerfilContainer,
  InfoContainer,
  InfoContainerLeft,
  InfoContainerRight,
  RankingContainer,
  TeamContainer,
  Products,
  Training,
  Ranking,
  Admin
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
      image: '/products/pinkcard.svg',
      quantity: 4
    },
    {
      name: 'Beauty Candy',
      image: '/products/yellowcard.svg',
      quantity: 8
    },
    {
      name: 'Meu Sono Brasil',
      image: '/products/bluecard.svg',
      quantity: 25
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
  const [rankingCharts, setRankingCharts] = useState({
    data: [
      {
        name: 'Meu Sono Brasil',
        data: [2, 5, 7, 6, 5]
      },
      {
        name: 'Profissão Blogueira',
        data: [3, 2, 0, 7, 1]
      },
      {
        name: 'Beauty Candy',
        data: [1, 2, 2, 1, 2]
      }
    ],
    text: ['text', 'text', 'text', 'text', 'text']
  })
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
  const [videos, setVideos] = useState([
    {
      title: 'Últimas Postagens',
      videos: [
        {
          video:
            'https://assets.mixkit.co/videos/preview/mixkit-rain-falling-on-the-water-of-a-lake-seen-up-18312-large.mp4',
          poster: '/videosPlaceholder/blue.svg'
        },
        {
          video:
            'https://assets.mixkit.co/videos/preview/mixkit-rain-falling-on-the-water-of-a-lake-seen-up-18312-large.mp4',
          poster: '/videosPlaceholder/orange.svg'
        },
        {
          video:
            'https://assets.mixkit.co/videos/preview/mixkit-rain-falling-on-the-water-of-a-lake-seen-up-18312-large.mp4',
          poster: '/videosPlaceholder/red.svg'
        },
        {
          video:
            'https://assets.mixkit.co/videos/preview/mixkit-rain-falling-on-the-water-of-a-lake-seen-up-18312-large.mp4',
          poster: '/videosPlaceholder/blue.svg'
        }
      ]
    },
    {
      title: 'Treinamento B4YOU Starter',
      videos: [
        {
          video:
            'https://assets.mixkit.co/videos/preview/mixkit-rain-falling-on-the-water-of-a-lake-seen-up-18312-large.mp4',
          poster: '/videosPlaceholder/blue.svg'
        },
        {
          video:
            'https://assets.mixkit.co/videos/preview/mixkit-rain-falling-on-the-water-of-a-lake-seen-up-18312-large.mp4',
          poster: '/videosPlaceholder/blue.svg'
        },
        {
          video:
            'https://assets.mixkit.co/videos/preview/mixkit-rain-falling-on-the-water-of-a-lake-seen-up-18312-large.mp4',
          poster: '/videosPlaceholder/blue.svg'
        },
        {
          video:
            'https://assets.mixkit.co/videos/preview/mixkit-rain-falling-on-the-water-of-a-lake-seen-up-18312-large.mp4',
          poster: '/videosPlaceholder/blue.svg'
        }
      ]
    },
    {
      title: 'Lives',
      videos: [
        {
          video:
            'https://assets.mixkit.co/videos/preview/mixkit-rain-falling-on-the-water-of-a-lake-seen-up-18312-large.mp4',
          poster: '/videosPlaceholder/orange.svg'
        },
        {
          video:
            'https://assets.mixkit.co/videos/preview/mixkit-rain-falling-on-the-water-of-a-lake-seen-up-18312-large.mp4',
          poster: '/videosPlaceholder/orange.svg'
        },
        {
          video:
            'https://assets.mixkit.co/videos/preview/mixkit-rain-falling-on-the-water-of-a-lake-seen-up-18312-large.mp4',
          poster: '/videosPlaceholder/orange.svg'
        },
        {
          video:
            'https://assets.mixkit.co/videos/preview/mixkit-rain-falling-on-the-water-of-a-lake-seen-up-18312-large.mp4',
          poster: '/videosPlaceholder/orange.svg'
        }
      ]
    },
    {
      title: 'Lançamento dos produtos',
      videos: [
        {
          video:
            'https://assets.mixkit.co/videos/preview/mixkit-rain-falling-on-the-water-of-a-lake-seen-up-18312-large.mp4',
          poster: '/videosPlaceholder/purple.svg'
        },
        {
          video:
            'https://assets.mixkit.co/videos/preview/mixkit-rain-falling-on-the-water-of-a-lake-seen-up-18312-large.mp4',
          poster: '/videosPlaceholder/purple.svg'
        },
        {
          video:
            'https://assets.mixkit.co/videos/preview/mixkit-rain-falling-on-the-water-of-a-lake-seen-up-18312-large.mp4',
          poster: '/videosPlaceholder/purple.svg'
        },
        {
          video:
            'https://assets.mixkit.co/videos/preview/mixkit-rain-falling-on-the-water-of-a-lake-seen-up-18312-large.mp4',
          poster: '/videosPlaceholder/purple.svg'
        }
      ]
    },
    {
      title: 'Programa Venda Sem Investir',
      videos: [
        {
          video:
            'https://assets.mixkit.co/videos/preview/mixkit-rain-falling-on-the-water-of-a-lake-seen-up-18312-large.mp4',
          poster: '/videosPlaceholder/green.svg'
        },
        {
          video:
            'https://assets.mixkit.co/videos/preview/mixkit-rain-falling-on-the-water-of-a-lake-seen-up-18312-large.mp4',
          poster: '/videosPlaceholder/green.svg'
        },
        {
          video:
            'https://assets.mixkit.co/videos/preview/mixkit-rain-falling-on-the-water-of-a-lake-seen-up-18312-large.mp4',
          poster: '/videosPlaceholder/green.svg'
        },
        {
          video:
            'https://assets.mixkit.co/videos/preview/mixkit-rain-falling-on-the-water-of-a-lake-seen-up-18312-large.mp4',
          poster: '/videosPlaceholder/green.svg'
        }
      ]
    }
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
  // functions
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

                    <div>{badges(userInformation.badges)}</div>

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
              <RankingContainer>
                <h3>Ranking dos produtos</h3>

                <Flex className="ranking-wraper">
                  <div className="ranking-products">
                    {products.map((product, index) => {
                      return (
                        <Flex key={index} className="ranking-product-single">
                          <img src={product.image} alt="" />
                          <div>
                            <span>{product.name}</span>
                            <span>{product.quantity} Vendas</span>
                          </div>
                        </Flex>
                      )
                    })}
                  </div>

                  <RankingChart
                    data={rankingCharts.data}
                    info={rankingCharts.text}
                  />
                </Flex>
              </RankingContainer>
              <TeamContainer>
                <h3>Meu Time</h3>

                <Team user={userInformation.image} team={team} />
              </TeamContainer>
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
              </Modal>
            )}
          </>
        )}

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

        {state.menu === 'treinamentos' && (
          <Training>
            <h1>
              <img src="/treinamento.svg" /> Treinamento
            </h1>
            <Video
              src="https://assets.mixkit.co/videos/preview/mixkit-rain-falling-on-the-water-of-a-lake-seen-up-18312-large.mp4"
              poster="/videoThumb.svg"
            />
            <VideoContainer videos={videos} />
          </Training>
        )}

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
