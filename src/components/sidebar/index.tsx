import { useContext, useState } from 'react'

import MenuContext from '../../context/MenuContext'

import {
  Container,
  Black,
  Gold,
  Rubi,
  Blue,
  Profile,
  Nav,
  Background,
  Hamburger,
  TopMenu,
  BottomMenu
} from './styles'

import { FaChevronRight } from 'react-icons/fa'

import starsNumber from '../../utils/starsNumber'

interface SideBarProps {
  profileImage: string
  name: string
  plan: string
  stars: number
  balance: string
}

const SideBar: React.FC<SideBarProps> = ({
  profileImage,
  name,
  plan,
  stars,
  balance
}) => {
  const { state, setState: setMenuState } = useContext(MenuContext)

  const [openMenu, setOpenMenu] = useState(false)

  return (
    <>
      {/* default desktop - display none when tablet and mobile */}
      <Container openMenu={openMenu}>
        <img src="/b4youlogo.svg" alt="B4YOU Logo" />
        <Profile>
          <img src={profileImage} alt="Imagem de perfil" />
          <h2>{name}</h2>
          <div>
            {plan === 'gold' && <Gold>{plan}</Gold>}
            {plan === 'black' && <Black>{plan}</Black>}
            {plan === 'rubi' && <Rubi>{plan}</Rubi>}
            {plan === 'blue' && <Blue>{plan}</Blue>}
            {starsNumber(stars, plan)}
          </div>
          <button
            onClick={() => {
              setMenuState({ menu: 'perfil' })
              setOpenMenu(false)
            }}
          >
            Ver Perfil
            <FaChevronRight />
          </button>
          <button
            onClick={() => {
              setMenuState({ menu: 'perfil' })
              setOpenMenu(false)
            }}
          >
            SALDO DISPONÍVEL
            <span>
              R$ {balance}
              <FaChevronRight />
            </span>
          </button>
        </Profile>

        <Nav>
          <button
            className={state.menu === 'home' ? 'active' : ''}
            onClick={() => {
              setMenuState({ menu: 'home' })
              setOpenMenu(false)
            }}
          >
            <svg width="40" height="35" viewBox="0 0 35 35" fill="none">
              <path d="M13.142 7.00451L4.50036 16.1572V26.0356C4.50036 26.2914 4.57937 26.5367 4.72001 26.7175C4.86065 26.8984 5.0514 27 5.2503 27L10.5027 26.9825C10.701 26.9812 10.8907 26.8791 11.0306 26.6984C11.1704 26.5176 11.2489 26.2731 11.2489 26.0181V20.2492C11.2489 19.9935 11.3279 19.7482 11.4686 19.5673C11.6092 19.3865 11.7999 19.2849 11.9988 19.2849H14.9986C15.1975 19.2849 15.3883 19.3865 15.5289 19.5673C15.6695 19.7482 15.7486 19.9935 15.7486 20.2492V26.0139C15.7482 26.1408 15.7674 26.2665 15.805 26.3839C15.8425 26.5012 15.8977 26.6079 15.9674 26.6978C16.037 26.7877 16.1198 26.859 16.211 26.9076C16.3021 26.9563 16.3998 26.9813 16.4985 26.9813L21.749 27C21.9479 27 22.1387 26.8984 22.2793 26.7175C22.42 26.5367 22.499 26.2914 22.499 26.0356V16.1506L13.8592 7.00451C13.7576 6.89922 13.6311 6.84181 13.5006 6.84181C13.3701 6.84181 13.2436 6.89922 13.142 7.00451ZM26.7924 13.2254L22.8739 9.07193V0.723295C22.8739 0.531465 22.8147 0.347492 22.7092 0.211848C22.6037 0.0762042 22.4607 0 22.3115 0H19.6867C19.5375 0 19.3944 0.0762042 19.289 0.211848C19.1835 0.347492 19.1242 0.531465 19.1242 0.723295V5.09983L14.9278 0.660007C14.5251 0.233853 14.0198 0.000851888 13.4983 0.000851888C12.9767 0.000851888 12.4714 0.233853 12.0687 0.660007L0.204124 13.2254C0.14717 13.286 0.100049 13.3604 0.065454 13.4443C0.0308591 13.5283 0.00946838 13.6202 0.00250394 13.7148C-0.00446049 13.8094 0.00313788 13.9048 0.0248649 13.9956C0.0465919 14.0865 0.0820218 14.1709 0.12913 14.2441L1.32435 16.1126C1.37133 16.1861 1.42912 16.2469 1.4944 16.2916C1.55968 16.3363 1.63118 16.364 1.7048 16.3731C1.77842 16.3823 1.85272 16.3726 1.92344 16.3448C1.99416 16.3169 2.05992 16.2714 2.11695 16.2108L13.142 4.53325C13.2436 4.42797 13.3701 4.37055 13.5006 4.37055C13.6311 4.37055 13.7576 4.42797 13.8592 4.53325L24.8847 16.2108C24.9417 16.2714 25.0073 16.317 25.0779 16.3449C25.1486 16.3729 25.2228 16.3826 25.2963 16.3737C25.3699 16.3647 25.4414 16.3372 25.5066 16.2927C25.5719 16.2482 25.6298 16.1877 25.6768 16.1144L26.8721 14.2459C26.9191 14.1723 26.9544 14.0874 26.9759 13.9962C26.9974 13.905 27.0046 13.8092 26.9972 13.7144C26.9898 13.6195 26.9679 13.5275 26.9327 13.4436C26.8976 13.3597 26.8499 13.2856 26.7924 13.2254Z" />
            </svg>
            Home
          </button>
          <button
            className={state.menu === 'produtos' ? 'active' : ''}
            onClick={() => {
              setMenuState({ menu: 'produtos', submenu: 'Meus Produtos' })
              setOpenMenu(false)
            }}
          >
            <svg width="35" height="35" viewBox="0 0 35 35" fill="none">
              <path d="M35.916 14.5254H33.5227C33.1684 13.1834 32.6347 11.8995 31.9292 10.6917L33.6255 8.99548C33.8288 8.7922 33.943 8.5165 33.943 8.22896C33.943 7.94141 33.8288 7.66579 33.6255 7.46251L29.5376 3.37459C29.1143 2.95133 28.4279 2.95126 28.0046 3.37459L26.3082 5.07088C25.1004 4.36535 23.8165 3.83167 22.4746 3.47735V1.08398C22.4746 0.485336 21.9893 0 21.3906 0H15.6094C15.0107 0 14.5254 0.485336 14.5254 1.08398V3.47735C13.1835 3.83167 11.8996 4.36535 10.6918 5.07088L8.99548 3.37459C8.57222 2.95133 7.88584 2.95126 7.46251 3.37459L3.37459 7.46251C3.1713 7.66579 3.05705 7.94149 3.05705 8.22896C3.05705 8.51643 3.1713 8.79212 3.37459 8.99548L5.07088 10.6917C4.36528 11.8996 3.83167 13.1834 3.47728 14.5254H1.08398C0.485336 14.5254 0 15.0107 0 15.6094V21.3906C0 21.9893 0.485336 22.4746 1.08398 22.4746H3.47728C3.8316 23.8166 4.36528 25.1004 5.07081 26.3082L3.37452 28.0044C3.17123 28.2077 3.05698 28.4834 3.05698 28.771C3.05698 29.0584 3.17116 29.3341 3.37452 29.5374L7.46244 33.6254C7.66572 33.8287 7.94141 33.9429 8.22889 33.9429C8.51636 33.9429 8.79205 33.8287 8.99534 33.6254L10.6916 31.9291C11.8995 32.6347 13.1833 33.1683 14.5252 33.5227V35.916C14.5252 36.5147 15.0106 37 15.6092 37H21.3905C21.9891 37 22.4745 36.5147 22.4745 35.916V33.5227C23.8164 33.1684 25.1002 32.6347 26.3081 31.9292L28.0044 33.6255C28.2077 33.8288 28.4834 33.943 28.7708 33.943C29.0584 33.943 29.334 33.8288 29.5373 33.6255L33.6252 29.5375C33.8285 29.3342 33.9427 29.0585 33.9427 28.771C33.9427 28.4835 33.8285 28.2079 33.6252 28.0045L31.9289 26.3083C32.6344 25.1005 33.168 23.8167 33.5224 22.4747H35.916C36.5147 22.4747 37 21.9893 37 21.3907V15.6094C37 15.0107 36.5147 14.5254 35.916 14.5254ZM18.5 28.6172C12.9213 28.6172 8.38281 24.0786 8.38281 18.5C8.38281 12.9214 12.9214 8.38281 18.5 8.38281C24.0786 8.38281 28.6172 12.9214 28.6172 18.5C28.6172 24.0786 24.0787 28.6172 18.5 28.6172Z" />
              <path d="M22.8359 13.0801H19.584V15.248C19.584 15.8467 19.0986 16.332 18.5 16.332C17.9014 16.332 17.416 15.8467 17.416 15.248V13.0801H14.1641C13.5654 13.0801 13.0801 13.5654 13.0801 14.1641V22.8359C13.0801 23.4346 13.5654 23.9199 14.1641 23.9199H22.8359C23.4346 23.9199 23.9199 23.4346 23.9199 22.8359V14.1641C23.9199 13.5654 23.4346 13.0801 22.8359 13.0801Z" />
            </svg>
            Produtos
          </button>
          <button
            className={state.menu === 'treinamentos' ? 'active' : ''}
            onClick={() => {
              setMenuState({ menu: 'treinamentos' })
              setOpenMenu(false)
            }}
          >
            <svg width="35" height="31" viewBox="0 0 35 35" fill="none">
              <path d="M34.0341 7.1879L18.7795 0.28223C17.9482 -0.0940766 17.0514 -0.0940766 16.2206 0.28223L0.965512 7.1879C-0.321837 7.77049 -0.321837 10.2789 0.965512 10.8615L3.62498 12.0654C3.04146 13.1282 2.68271 14.4247 2.64716 15.8446C2.12052 16.2894 1.74973 17.0919 1.74973 18.05C1.74973 18.9187 2.06036 19.6495 2.50771 20.1169L1.11153 29.3739C0.990121 30.1789 1.40575 30.9427 1.9652 30.9427H5.03373C5.59373 30.9427 6.00936 30.1789 5.88795 29.3739L4.49178 20.1169C4.93912 19.6495 5.24975 18.9187 5.24975 18.05C5.24975 17.1177 4.89592 16.3377 4.39334 15.8848C4.4349 14.6745 4.8549 13.6044 5.52483 12.926L16.2201 17.768C16.7156 17.992 17.666 18.2716 18.7789 17.768L34.0341 10.8623C35.322 10.2789 35.322 7.77129 34.0341 7.1879ZM19.293 20.2329C17.7328 20.9388 16.4033 20.5488 15.706 20.2329L7.77522 16.6431L6.99975 25.7857C6.99975 28.6341 11.7007 30.9427 17.4998 30.9427C23.2989 30.9427 27.9998 28.6341 27.9998 25.7857L27.2244 16.6423L19.293 20.2329Z" />
            </svg>
            Treinamentos
          </button>
          <button
            className={state.menu === 'ranking' ? 'active' : ''}
            onClick={() => {
              setMenuState({ menu: 'ranking' })
              setOpenMenu(false)
            }}
          >
            <svg width="35" height="35" viewBox="0 0 35 35" fill="none">
              <path d="M27.7539 32.9492H26.7285V29.8047C26.7285 29.2383 26.2695 28.7793 25.7031 28.7793H9.29688C8.73051 28.7793 8.27148 29.2383 8.27148 29.8047V32.9492H7.24609C6.67946 32.9492 6.2207 33.408 6.2207 33.9746C6.2207 34.5412 6.67946 35 7.24609 35H27.7539C28.3205 35 28.7793 34.5412 28.7793 33.9746C28.7793 33.408 28.3205 32.9492 27.7539 32.9492Z" />
              <path d="M31.9238 0C28.6009 0 7.74143 0 3.07617 0C1.38 0 0 1.38 0 3.07617V4.63829C0 7.16866 0.871048 9.65122 2.45132 11.6278C3.80116 13.3151 5.59959 14.5678 7.65038 15.2516L8.73878 15.6148C10.0013 17.6701 11.9789 19.2544 14.3555 20.0071V21.6016C14.3555 22.1674 13.8948 22.627 13.3301 22.627C11.6339 22.627 10.2539 24.007 10.2539 25.7031V26.7285H24.7461V25.7031C24.7461 24.007 23.3661 22.627 21.6699 22.627C21.1052 22.627 20.6445 22.1674 20.6445 21.6016V20.0071C23.0211 19.2541 24.9987 17.6701 26.2612 15.6148L27.3496 15.2516C29.4004 14.5678 31.1988 13.3151 32.5487 11.6278C34.129 9.65122 35 7.16866 35 4.63829V3.07617C35 1.38 33.62 0 31.9238 0V0ZM4.0535 10.346C2.76161 8.73184 2.05078 6.70509 2.05078 4.63829V3.07617C2.05078 2.51034 2.51141 2.05078 3.07617 2.05078H6.25969L7.30404 11.4425C7.36412 11.9837 7.47414 12.5098 7.61673 13.0235C6.22952 12.4326 5.00038 11.5303 4.0535 10.346ZM22.3087 8.77991L20.6563 10.3522L21.0448 12.5672C21.1129 12.9496 20.9567 13.3381 20.6443 13.5693C20.33 13.7998 19.9134 13.8358 19.5668 13.6564L17.5 12.5949L15.4332 13.6564C15.0869 13.8342 14.6687 13.8006 14.3557 13.5693C14.0433 13.3392 13.8871 12.9506 13.9552 12.5672L14.3437 10.3522L12.6916 8.77991C12.4072 8.50861 12.3031 8.09898 12.4211 7.72461C12.5413 7.34997 12.8657 7.07653 13.2542 7.02152L15.5595 6.69415L16.5849 4.66446C16.9334 3.97366 18.0669 3.97366 18.4154 4.66446L19.4408 6.69415L21.7458 7.02152C22.1346 7.0768 22.4587 7.34997 22.5792 7.72461C22.6969 8.09898 22.593 8.50861 22.3087 8.77991ZM32.9492 4.63829C32.9492 6.70509 32.2384 8.73184 30.9465 10.346C29.9996 11.5303 28.7705 12.4326 27.3833 13.0235C27.5259 12.5098 27.6359 11.9837 27.696 11.4425L28.7403 2.05078H31.9238C32.4886 2.05078 32.9492 2.51034 32.9492 3.07617V4.63829Z" />
            </svg>
            Ranking
          </button>
          <button
            className={`${state.menu === 'perfil' ? 'active ' : ''} perfil`}
            onClick={() => {
              setMenuState({ menu: 'perfil' })
              setOpenMenu(false)
            }}
          >
            <svg width="27" height="32" viewBox="0 0 27 32" fill="none">
              <path d="M13.5 15.5C17.7609 15.5 21.2143 11.8068 21.2143 7.25C21.2143 2.69316 17.7609 -1 13.5 -1C9.23906 -1 5.78571 2.69316 5.78571 7.25C5.78571 11.8068 9.23906 15.5 13.5 15.5ZM18.9 17.5625H17.8935C16.5556 18.2199 15.067 18.5938 13.5 18.5938C11.933 18.5938 10.4504 18.2199 9.10647 17.5625H8.1C3.62812 17.5625 0 21.4426 0 26.225V28.9062C0 30.6143 1.29576 32 2.89286 32H24.1071C25.7042 32 27 30.6143 27 28.9062V26.225C27 21.4426 23.3719 17.5625 18.9 17.5625Z" />
            </svg>
            Meu Perfil
          </button>
        </Nav>
      </Container>

      {/* default display none: used in tablet display */}
      <Background openMenu={openMenu} onClick={() => setOpenMenu(!openMenu)} />

      {/* default display none: used in tablet mobile display */}
      <Hamburger openMenu={openMenu} onClick={() => setOpenMenu(!openMenu)}>
        <div />
        <div />
        <div />
      </Hamburger>

      {/* topmenu tablet/mobile */}
      <TopMenu>
        <img
          src="/b4youlogotablet.svg"
          alt="b4you logo"
          className="logo-tablet"
        />
        <img
          src="/b4youlogomobile.svg"
          alt="b4you logo"
          className="logo-mobile"
        />
        <div>
          <img src={profileImage} alt="Imagem de perfil" />
          <div>
            <span>{name}</span>
            <div>
              {plan === 'gold' && <Gold>{plan}</Gold>}
              {plan === 'black' && <Black>{plan}</Black>}
              {plan === 'rubi' && <Rubi>{plan}</Rubi>}
              {plan === 'blue' && <Blue>{plan}</Blue>}
              {starsNumber(stars, plan)}
            </div>
          </div>
        </div>
        <button className="balance">
          <p>Saldo diponível</p>
          <p>
            R$ {balance}
            <img src="/chevronrightbalance.svg" />
          </p>
        </button>
      </TopMenu>

      {/* bottom menu mobile */}
      <BottomMenu>
        <button
          className={state.menu === 'home' ? 'active' : ''}
          onClick={() => {
            setMenuState({ menu: 'home' })
            setOpenMenu(false)
          }}
        >
          <svg
            width="35"
            height="35"
            viewBox="0 0 35 35"
            fill="none"
            className="svg-home"
          >
            <path d="M13.142 7.00451L4.50036 16.1572V26.0356C4.50036 26.2914 4.57937 26.5367 4.72001 26.7175C4.86065 26.8984 5.0514 27 5.2503 27L10.5027 26.9825C10.701 26.9812 10.8907 26.8791 11.0306 26.6984C11.1704 26.5176 11.2489 26.2731 11.2489 26.0181V20.2492C11.2489 19.9935 11.3279 19.7482 11.4686 19.5673C11.6092 19.3865 11.7999 19.2849 11.9988 19.2849H14.9986C15.1975 19.2849 15.3883 19.3865 15.5289 19.5673C15.6695 19.7482 15.7486 19.9935 15.7486 20.2492V26.0139C15.7482 26.1408 15.7674 26.2665 15.805 26.3839C15.8425 26.5012 15.8977 26.6079 15.9674 26.6978C16.037 26.7877 16.1198 26.859 16.211 26.9076C16.3021 26.9563 16.3998 26.9813 16.4985 26.9813L21.749 27C21.9479 27 22.1387 26.8984 22.2793 26.7175C22.42 26.5367 22.499 26.2914 22.499 26.0356V16.1506L13.8592 7.00451C13.7576 6.89922 13.6311 6.84181 13.5006 6.84181C13.3701 6.84181 13.2436 6.89922 13.142 7.00451ZM26.7924 13.2254L22.8739 9.07193V0.723295C22.8739 0.531465 22.8147 0.347492 22.7092 0.211848C22.6037 0.0762042 22.4607 0 22.3115 0H19.6867C19.5375 0 19.3944 0.0762042 19.289 0.211848C19.1835 0.347492 19.1242 0.531465 19.1242 0.723295V5.09983L14.9278 0.660007C14.5251 0.233853 14.0198 0.000851888 13.4983 0.000851888C12.9767 0.000851888 12.4714 0.233853 12.0687 0.660007L0.204124 13.2254C0.14717 13.286 0.100049 13.3604 0.065454 13.4443C0.0308591 13.5283 0.00946838 13.6202 0.00250394 13.7148C-0.00446049 13.8094 0.00313788 13.9048 0.0248649 13.9956C0.0465919 14.0865 0.0820218 14.1709 0.12913 14.2441L1.32435 16.1126C1.37133 16.1861 1.42912 16.2469 1.4944 16.2916C1.55968 16.3363 1.63118 16.364 1.7048 16.3731C1.77842 16.3823 1.85272 16.3726 1.92344 16.3448C1.99416 16.3169 2.05992 16.2714 2.11695 16.2108L13.142 4.53325C13.2436 4.42797 13.3701 4.37055 13.5006 4.37055C13.6311 4.37055 13.7576 4.42797 13.8592 4.53325L24.8847 16.2108C24.9417 16.2714 25.0073 16.317 25.0779 16.3449C25.1486 16.3729 25.2228 16.3826 25.2963 16.3737C25.3699 16.3647 25.4414 16.3372 25.5066 16.2927C25.5719 16.2482 25.6298 16.1877 25.6768 16.1144L26.8721 14.2459C26.9191 14.1723 26.9544 14.0874 26.9759 13.9962C26.9974 13.905 27.0046 13.8092 26.9972 13.7144C26.9898 13.6195 26.9679 13.5275 26.9327 13.4436C26.8976 13.3597 26.8499 13.2856 26.7924 13.2254Z" />
          </svg>
          Home
        </button>
        <button
          className={state.menu === 'produtos' ? 'active' : ''}
          onClick={() => {
            setMenuState({ menu: 'produtos' })
            setOpenMenu(false)
          }}
        >
          <svg width="35" height="35" viewBox="0 0 35 35" fill="none">
            <path d="M35.916 14.5254H33.5227C33.1684 13.1834 32.6347 11.8995 31.9292 10.6917L33.6255 8.99548C33.8288 8.7922 33.943 8.5165 33.943 8.22896C33.943 7.94141 33.8288 7.66579 33.6255 7.46251L29.5376 3.37459C29.1143 2.95133 28.4279 2.95126 28.0046 3.37459L26.3082 5.07088C25.1004 4.36535 23.8165 3.83167 22.4746 3.47735V1.08398C22.4746 0.485336 21.9893 0 21.3906 0H15.6094C15.0107 0 14.5254 0.485336 14.5254 1.08398V3.47735C13.1835 3.83167 11.8996 4.36535 10.6918 5.07088L8.99548 3.37459C8.57222 2.95133 7.88584 2.95126 7.46251 3.37459L3.37459 7.46251C3.1713 7.66579 3.05705 7.94149 3.05705 8.22896C3.05705 8.51643 3.1713 8.79212 3.37459 8.99548L5.07088 10.6917C4.36528 11.8996 3.83167 13.1834 3.47728 14.5254H1.08398C0.485336 14.5254 0 15.0107 0 15.6094V21.3906C0 21.9893 0.485336 22.4746 1.08398 22.4746H3.47728C3.8316 23.8166 4.36528 25.1004 5.07081 26.3082L3.37452 28.0044C3.17123 28.2077 3.05698 28.4834 3.05698 28.771C3.05698 29.0584 3.17116 29.3341 3.37452 29.5374L7.46244 33.6254C7.66572 33.8287 7.94141 33.9429 8.22889 33.9429C8.51636 33.9429 8.79205 33.8287 8.99534 33.6254L10.6916 31.9291C11.8995 32.6347 13.1833 33.1683 14.5252 33.5227V35.916C14.5252 36.5147 15.0106 37 15.6092 37H21.3905C21.9891 37 22.4745 36.5147 22.4745 35.916V33.5227C23.8164 33.1684 25.1002 32.6347 26.3081 31.9292L28.0044 33.6255C28.2077 33.8288 28.4834 33.943 28.7708 33.943C29.0584 33.943 29.334 33.8288 29.5373 33.6255L33.6252 29.5375C33.8285 29.3342 33.9427 29.0585 33.9427 28.771C33.9427 28.4835 33.8285 28.2079 33.6252 28.0045L31.9289 26.3083C32.6344 25.1005 33.168 23.8167 33.5224 22.4747H35.916C36.5147 22.4747 37 21.9893 37 21.3907V15.6094C37 15.0107 36.5147 14.5254 35.916 14.5254ZM18.5 28.6172C12.9213 28.6172 8.38281 24.0786 8.38281 18.5C8.38281 12.9214 12.9214 8.38281 18.5 8.38281C24.0786 8.38281 28.6172 12.9214 28.6172 18.5C28.6172 24.0786 24.0787 28.6172 18.5 28.6172Z" />
            <path d="M22.8359 13.0801H19.584V15.248C19.584 15.8467 19.0986 16.332 18.5 16.332C17.9014 16.332 17.416 15.8467 17.416 15.248V13.0801H14.1641C13.5654 13.0801 13.0801 13.5654 13.0801 14.1641V22.8359C13.0801 23.4346 13.5654 23.9199 14.1641 23.9199H22.8359C23.4346 23.9199 23.9199 23.4346 23.9199 22.8359V14.1641C23.9199 13.5654 23.4346 13.0801 22.8359 13.0801Z" />
          </svg>
          Produtos
        </button>
        <button
          className={state.menu === 'treinamentos' ? 'active' : ''}
          onClick={() => {
            setMenuState({ menu: 'treinamentos' })
            setOpenMenu(false)
          }}
        >
          <svg width="35" height="31" viewBox="0 0 35 35" fill="none">
            <path d="M34.0341 7.1879L18.7795 0.28223C17.9482 -0.0940766 17.0514 -0.0940766 16.2206 0.28223L0.965512 7.1879C-0.321837 7.77049 -0.321837 10.2789 0.965512 10.8615L3.62498 12.0654C3.04146 13.1282 2.68271 14.4247 2.64716 15.8446C2.12052 16.2894 1.74973 17.0919 1.74973 18.05C1.74973 18.9187 2.06036 19.6495 2.50771 20.1169L1.11153 29.3739C0.990121 30.1789 1.40575 30.9427 1.9652 30.9427H5.03373C5.59373 30.9427 6.00936 30.1789 5.88795 29.3739L4.49178 20.1169C4.93912 19.6495 5.24975 18.9187 5.24975 18.05C5.24975 17.1177 4.89592 16.3377 4.39334 15.8848C4.4349 14.6745 4.8549 13.6044 5.52483 12.926L16.2201 17.768C16.7156 17.992 17.666 18.2716 18.7789 17.768L34.0341 10.8623C35.322 10.2789 35.322 7.77129 34.0341 7.1879ZM19.293 20.2329C17.7328 20.9388 16.4033 20.5488 15.706 20.2329L7.77522 16.6431L6.99975 25.7857C6.99975 28.6341 11.7007 30.9427 17.4998 30.9427C23.2989 30.9427 27.9998 28.6341 27.9998 25.7857L27.2244 16.6423L19.293 20.2329Z" />
          </svg>
          Treinamentos
        </button>
      </BottomMenu>
    </>
  )
}

export default SideBar

// 768 px ta belezinha - só falta ajustar o responsivo pra celular
