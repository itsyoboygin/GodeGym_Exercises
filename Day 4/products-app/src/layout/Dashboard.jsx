import { NavLink, Outlet } from 'react-router-dom';
import PlayersList from '../pages/content/PlayerList';
import SearchPlayers from '../pages/content/SearchPlayer';
import AddPlayers from '../pages/content/AddPlayers';

function Dashboard() {
    return(
        <div className="dashboard-page">
            <h1>Dashboard</h1>
            <div className="dashboard-navigator">
                <button><NavLink to='/dashboard/players'>Players</NavLink></button>
                <button><NavLink to='/dashboard/search'>Search</NavLink></button>
                <button><NavLink to='/dashboard/add'>Add</NavLink></button>
            </div>
            <div className="dashboard-card">
                <Outlet/>
            </div>
        </div>
    );
}

export default Dashboard;
