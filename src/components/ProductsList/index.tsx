import { useState, useEffect } from 'react'

import { Container } from './styles'

import starsNumbers from '../../utils/starsNumber'

import { CopyToClipboard } from 'react-copy-to-clipboard'

interface Props {
  image: string
  name: string
  stars: string | number
  comission: string
  description: string
  qr: boolean
  textbutton: string
}

const ProductsList: React.FC<Props> = ({
  image,
  name,
  stars,
  comission,
  description,
  textbutton,
  qr
}) => {
  const [buttonCopy, setButtonCopy] = useState(false)

  useEffect(() => {
    if (buttonCopy === true) {
      setTimeout(function () {
        setButtonCopy(false)
      }, 3000)
    }
  }, [buttonCopy])

  return (
    <Container buttonCopy={buttonCopy}>
      <div>
        <div className="header">
          <img src={image} alt="Product image" className="product-image" />
          <div>
            <h3>{name}</h3>
            <div className="stars">{starsNumbers(stars, 'gold')}</div>
            <span>Comissão: R$: {comission}</span>
          </div>
        </div>
        <p>{description}</p>

        <div className="buttonsContainer">
          <button>{textbutton}</button>
          {qr ? (
            <CopyToClipboard text={name}>
              <button onClick={() => setButtonCopy(true)}>
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.66675 4.53339C4.54581 6.72781 5.00864 10.3695 7.43814 11.9828C7.51819 12.0359 7.62469 12.0254 7.69346 11.9582C8.20493 11.4584 8.63761 10.9744 9.01648 10.3587C9.07445 10.2645 9.0384 10.1423 8.94115 10.0896C8.57057 9.88886 8.20183 9.51241 7.99425 9.11476L7.994 9.1149C7.74533 8.61975 7.66067 8.0647 7.79232 7.49146C7.79246 7.4915 7.7926 7.49153 7.79275 7.49153C7.94423 6.75763 8.73212 6.07495 9.33388 5.44357C9.33261 5.44315 9.33138 5.44269 9.33011 5.44227L11.5847 3.14111C12.4832 2.22407 13.9612 2.21651 14.869 3.12433C15.786 4.0228 15.8012 5.50818 14.9027 6.42519L13.537 7.82954C13.4738 7.89453 13.4533 7.98936 13.4829 8.07507C13.7973 8.98691 13.8747 10.2726 13.664 11.244C13.6581 11.2712 13.6916 11.289 13.7111 11.2691L16.6176 8.30256C18.4744 6.4075 18.4586 3.32207 16.5826 1.44607C14.6681 -0.468451 11.5513 -0.452518 9.65647 1.48141L6.67839 4.52094C6.67445 4.52509 6.67072 4.52931 6.66675 4.53339Z"
                    fill="#0A152D"
                  />
                  <path
                    d="M12.1005 12.4007C12.1005 12.4008 12.1004 12.4009 12.1004 12.401C12.1022 12.4003 12.1039 12.3995 12.1058 12.3987C12.699 11.314 12.8158 10.0701 12.5378 8.85736L12.5365 8.85866L12.5351 8.85806C12.2712 7.77796 11.5469 6.70543 10.5632 6.04507C10.4785 5.98827 10.3434 5.99485 10.2641 6.05893C9.76585 6.46183 9.27812 6.97847 8.9563 7.63777C8.90576 7.74128 8.9436 7.86561 9.04321 7.92343C9.4167 8.14027 9.754 8.45773 9.97984 8.8792L9.98019 8.87895C10.1562 9.17668 10.3296 9.74161 10.2173 10.3486C10.2172 10.3486 10.2171 10.3486 10.217 10.3486C10.1122 11.1534 9.29954 11.8916 8.6535 12.5567L8.65382 12.5571C8.16204 13.06 6.91193 14.3344 6.41136 14.8458C5.51289 15.7628 4.02751 15.7779 3.11051 14.8795C2.1935 13.981 2.17834 12.4956 3.07681 11.5786L4.44651 10.17C4.50859 10.1062 4.52969 10.0134 4.50208 9.92877C4.19795 8.99562 4.11463 7.73889 4.3066 6.7686C4.31194 6.74155 4.27867 6.72428 4.25936 6.74398L1.39654 9.66589C-0.479252 11.5804 -0.463354 14.6975 1.43192 16.5927C3.34633 18.4685 6.44734 18.4368 8.32306 16.5224C8.97469 15.7934 11.7641 13.2108 12.1005 12.4007Z"
                    fill="#0A152D"
                  />
                </svg>
              </button>
            </CopyToClipboard>
          ) : (
            <button>outro botao</button>
          )}
        </div>
      </div>
    </Container>
  )
}

export default ProductsList
