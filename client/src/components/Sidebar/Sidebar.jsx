import { ChevronFirst, ChevronLast } from 'lucide-react'
import {
    LifeBuoy,
    Receipt,
    MessageCircle,
    UserCircle,
    Folders,
    LayoutDashboard,
    Settings,
} from 'lucide-react'
import AccountToggle from './AccountToggle.jsx'
import SidebarItem from './SidebarItem.jsx'
import { useState,createContext } from 'react'

export const SidebarContext = createContext();
const Sidebar = () => {
    const [expanded, setExpanded] = useState(true);
  return (
    <aside className={`${expanded ? "w-56" : "w-18"} h-screen transition-width duration-300 text-white`}>
        <nav className='h-full flex flex-col bg-white border-r shadow-sm'>
            <div className='p-4 pb-2 flex justify-between items-center'>
                <h2 className={`overflow-hidden transition-all ${expanded ? "w-36 text-3xl font-bold text-black" : "w-0"}`}>SkillHunt</h2>
                <button onClick={() => setExpanded(curr => !curr)} className='p-1.5 rounded-lg bg-gray-300 hover:bg-gray-600'>
                    {expanded? <ChevronFirst />: <ChevronLast />}
                </button>
            </div>

            <SidebarContext.Provider value={{expanded}}>
            <ul className='flex-1 px-3 space-y-2 mt-4'>
            <SidebarItem icon={<LayoutDashboard />} text="Dashboard" alert />
            <SidebarItem icon={<Folders />} text="Projects" active />
            <SidebarItem icon={<MessageCircle />} text="Messages" alert />
            <SidebarItem icon={<Receipt />} text="Payments" />         
            <SidebarItem icon={<UserCircle />} text="Profile" />
            <hr className='my-3 border-stone-300' />
            <SidebarItem icon={<Settings />} text="Settings" />
            <SidebarItem icon={<LifeBuoy />} text="Help" />
            </ul>
            </SidebarContext.Provider>

            <AccountToggle expanded={expanded} />                 
        </nav>
    </aside> 
  
  )
}

export default Sidebar