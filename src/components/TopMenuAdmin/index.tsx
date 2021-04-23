import { useContext } from 'react'

import { Container } from './styles'

import MenuContext from '../../context/MenuContext'

interface Props {
  menus: string[]
}

/**
 *
 * @param param0
 * needs to pass the params:
 * - menus: string[] ex:
 * ["menu 1", "menu 2", "menu 3"]
 */

const TopMenuAdmin: React.FC<Props> = ({ menus }) => {
  const { state, setState: setMenuState } = useContext(MenuContext)

  const width = menus.length * 270
  const height = menus.length * 46

  return (
    <Container width={width} height={height}>
      {menus.map((menu, index) => {
        return (
          <div
            key={index}
            onClick={() => setMenuState({ menu: 'admin', submenu: menu })}
            className={state.submenu === menu ? 'active' : ''}
          >
            {menu}
          </div>
        )
      })}
    </Container>
  )
}

export default TopMenuAdmin
