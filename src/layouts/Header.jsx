import { useReducer } from 'react'
import { Disclosure } from '@headlessui/react'
// import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { useLocation } from 'react-router-dom'
import MobileMenuButton from '../components/MobileMenuButton'
import Container from '../components/Container'
import Notifications from '../components/Notifications'
import Profile from '../components/Profile'
import Logo from '../components/Logo'
import Menu from '../components/Menu'
import NavigationReducer from '../reducers/navigationReducer'
import { setNavigator } from '../hooks/useNavigator'


export default function Header() {  

  let navigationItems = [
    { name: 'Home', to: '/', active: useLocation().pathname == '/' },
    { name: 'Posts', to: '/posts', active: useLocation().pathname == '/posts' },
    { name: 'About Us', to: '/about', active: useLocation().pathname == '/about' },
  ]
  
  const [navigation, navigationDispatcher] = useReducer(NavigationReducer, navigationItems)
  setNavigator(navigationDispatcher)
  
  return (
    <Disclosure as="nav" className="bg-gray-800/90  backdrop-blur-xl py-1 sm:py-4 fixed right-0 left-0 shadow-md shadow-slate-950/50 -translate-y-1 z-50">
      {({ open }) => (
        <>
          <Container>
            <div className="relative flex h-16 items-center justify-between">
              
                {/* Mobile menu button*/}
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                <MobileMenuButton isOpen={open} />
              </div>

              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                {/* center Logo */}
                <div className="flex flex-shrink-0 items-center">
                  <Logo />
                </div>

                {/* first menu */}
                <Menu role="primary" dispatcher={navigationDispatcher} >
                  {navigation}
                </Menu>
              </div>

              {/* profile settings */}
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                  <Notifications />
                  <Profile />
              </div>
            </div>
          </Container>

          {/* second menu */}
          <Menu role="secondary" dispatcher={navigationDispatcher} >
            {navigation}
          </Menu>
        </>
      )}
    </Disclosure>
  )
}
