import { createContext, useState, Dispatch, SetStateAction } from 'react'

type MenuType = {
  menu: string
}

type PropsMenuContext = {
  state: MenuType
  setState: Dispatch<SetStateAction<MenuType>>
}

const DEFAULT_VALUE = {
  state: {
    menu: 'home'
  },
  setState: () => {}
}

const MenuContext = createContext<PropsMenuContext>(DEFAULT_VALUE)

const MenuContextProvider: React.FC = ({ children }) => {
  const [state, setState] = useState(DEFAULT_VALUE.state)
  return (
    <MenuContext.Provider
      value={{
        state,
        setState
      }}
    >
      {children}
    </MenuContext.Provider>
  )
}
export { MenuContextProvider }
export default MenuContext
