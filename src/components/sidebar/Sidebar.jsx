import React from 'react'
import "./sidebar.scss";
import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleOutlinedIcon from '@mui/icons-material/PeopleOutlined';
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
import LibraryBooksOutlinedIcon from '@mui/icons-material/LibraryBooksOutlined';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import QueryStatsOutlinedIcon from '@mui/icons-material/QueryStatsOutlined';
import CircleNotificationsOutlinedIcon from '@mui/icons-material/CircleNotificationsOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import PsychologyOutlinedIcon from '@mui/icons-material/PsychologyOutlined';
import SettingsBrightnessOutlinedIcon from '@mui/icons-material/SettingsBrightnessOutlined';
import ManageAccountsOutlinedIcon from '@mui/icons-material/ManageAccountsOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';

const Sidebar = () => {
  return (
    <div className='sidebar'>
        <div className="top">
            <span className="logo">Admin</span>
        </div>
        <hr />
        <div className="center">
            <ul>
                <p className="title">MAIN</p>
                <li>
                    <DashboardIcon className="icon"/>
                    <span>Dashboard</span>
                </li>
                <p className="title">LISTS</p>
                <li>
                    <PeopleOutlinedIcon className="icon"/>
                    <span>Users</span>
                </li>
                <li>
                    <Inventory2OutlinedIcon className="icon"/>
                    <span>Products</span>
                </li>
                <li>
                    <LibraryBooksOutlinedIcon className="icon"/>
                    <span>Orders</span>
                </li>
                <li>
                    <LocalShippingOutlinedIcon className="icon"/>
                    <span>Delivery</span>
                </li>
                <p className="title">USEFUL</p>
                <li>
                    <QueryStatsOutlinedIcon className="icon"/>
                    <span>Stats</span>
                </li>
                <li>
                    <CircleNotificationsOutlinedIcon className="icon"/>
                    <span>Notifications</span>
                </li>
                <p className="title">SERVICE</p>
                <li>
                    <FavoriteBorderOutlinedIcon className="icon"/>
                    <span>System Health</span>
                </li>
                <li>
                    < PsychologyOutlinedIcon className="icon"/>
                    <span>Logs</span>
                </li>
                 <li>
                     < SettingsBrightnessOutlinedIcon className="icon"/>
                    <span>Settings</span>
                </li>
                <p className="title">USER</p>
                 <li>
                     < ManageAccountsOutlinedIcon className="icon"/>
                    <span>Profile</span>
                </li>
                 <li>
                     < LogoutOutlinedIcon className="icon"/>
                    <span>Logout</span>
                </li>
                
            </ul>
        </div>
        <div className="bottom">
            <div className="colorOption"></div>
             <div className="colorOption"></div>

        </div>
    </div>
  )
}




export default Sidebar