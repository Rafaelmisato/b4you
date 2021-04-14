import { MenuContextProvider } from './MenuContext'

const MenuContext: React.FC = ({ children }) => {
  return <MenuContextProvider>{children}</MenuContextProvider>
}

export default MenuContext
