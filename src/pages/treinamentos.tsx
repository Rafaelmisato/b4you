import React, { useContext, useState, useEffect } from 'react'

import Layout from '../components/layout'
import Video from '../components/video'
import VideoContainer from '../components/VideoContainer'

import { Container, Training } from '../styles/pages/training'

import toLowercase from '../utils/toLowerCase'
import MenuContext from '../context/MenuContext'
interface MenuProps {
  menu: string
}

const TrainingPage: React.FC<MenuProps> = () => {
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
      </Container>
    </Layout>
  )
}

export default TrainingPage
