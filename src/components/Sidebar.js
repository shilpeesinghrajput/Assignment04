import React from 'react'
import './Sidebar.css'
import {
          Card,
          // Typography,
          List,
          ListItem,
          ListItemPrefix,
          // ListItemSuffix,
          // Chip,
        } from "@material-tailwind/react";

        import {
          PresentationChartBarIcon,
          ShoppingBagIcon,
          UserIcon,
          WalletIcon,
          Cog6ToothIcon,
          // InboxIcon,
          // AddIcon,
          HomeIcon,
          PowerIcon,
        } from "@heroicons/react/24/solid";

const Sidebar = () => {
  return (
    <div>
    <div>
    <div className='sidebar-logo'>
        <h5 className="p-4">
      LOGO
        </h5>
      </div>
    <Card className="cards h-[707px] w-[260px]">
      
      <List>
        <ListItem className='active'>
          <ListItemPrefix>
            <HomeIcon className="iconn "/>
          </ListItemPrefix>
        Home
        </ListItem>
        <ListItem className='active'>
          <ListItemPrefix>
            <ShoppingBagIcon className="iconn " />
          </ListItemPrefix>
       Notifications
        </ListItem>
        <ListItem className='active'>
          <ListItemPrefix>
            <ShoppingBagIcon className="iconn " />
          </ListItemPrefix>
     Shop
        </ListItem>
        <ListItem className='active'>
          <ListItemPrefix>
            <PresentationChartBarIcon className="iconn " />
          </ListItemPrefix>
        Conversation
        </ListItem>

        <ListItem className='active'>
          <ListItemPrefix>
            <WalletIcon className="iconn" />
          </ListItemPrefix>
       Wallet
        </ListItem>

        <ListItem className='active'>
          <ListItemPrefix>
            <UserIcon className="iconn " />
          </ListItemPrefix>
    Subscription
        </ListItem>

        <ListItem className='active'>
          <ListItemPrefix>
            <UserIcon className="iconn" />
          </ListItemPrefix>
       User
        </ListItem>
        <ListItem className='active'>
          <ListItemPrefix>
            <Cog6ToothIcon className="iconn" />
          </ListItemPrefix>
          Settings
        </ListItem>
        <ListItem className='more'>
          <ListItemPrefix>
            <PowerIcon className="iconn" />
          </ListItemPrefix>
          Log Out
        </ListItem>
      </List>
    </Card>
    </div>
    <div className='flex justify-between text-xs pt-4 text-gray-600'>
      <span>2022©logo name</span>
      <span>Developed by Shilpee rajput</span>
    </div>
    </div>
  )
}

export default Sidebar
