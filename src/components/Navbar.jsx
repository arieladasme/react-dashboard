import { TooltipComponent } from '@syncfusion/ej2-react-popups'
import { AiOutlineMenu } from 'react-icons/ai'
import { BsChatLeft } from 'react-icons/bs'
import { FiShoppingCart } from 'react-icons/fi'
import { MdKeyboardArrowDown } from 'react-icons/md'
import { RiNotification3Line } from 'react-icons/ri'
import { useStateContext } from '../contexts/ContextProvider'
import { NavButton } from './NavButton'
import { Cart, Chat, Notification, UserProfile } from './'

import avatar from '../data/avatar.jpg'

export const Navbar = () => {
  const { activeMenu, setActiveMenu, isClicked, setIsClicked, handleClick } = useStateContext()
  return (
    <div className="flex justify-between p-2 md:mx-6 relative">
      <NavButton
        title="Menu"
        customFunc={() => setActiveMenu(prevActiveMenu => !prevActiveMenu)}
        color="blue"
        icon={<AiOutlineMenu />}
      />
      <div className="flex">
        <NavButton
          title="Cart"
          customFunc={() => handleClick('cart')}
          color="blue"
          icon={<FiShoppingCart />}
        />
        <NavButton
          title="Chat"
          dotColor="#03C9D7"
          customFunc={() => handleClick('chat')}
          color="blue"
          icon={<BsChatLeft />}
        />
        <NavButton
          title="Notifications"
          dotColor="#03C9D7"
          customFunc={() => handleClick('notification')}
          color="blue"
          icon={<RiNotification3Line />}
        />
        <TooltipComponent content="Profile" position="BottomCenter">
          <div
            className="flex items-center gap-2 cursor-pointer p-1 hover:bg-light-gray rounded-lg"
            onClick={() => handleClick('userProfile')}
          >
            <img className=" rounded-full w-8 h-8" src={avatar} />
            <p>
              <span className=" text-gray-400 text-14">Hi, </span>
              <span className=" text-gray-400 font-bold ml-1 text-14">Michael </span>
            </p>
            <MdKeyboardArrowDown className=" text-gray-400 font-bold ml-1 text-14" />
          </div>
        </TooltipComponent>
        {isClicked.cart && <Cart />}
        {isClicked.chat && <Chat />}
        {isClicked.notification && <Notification />}
        {isClicked.userProfile && <UserProfile />}
      </div>
    </div>
  )
}
