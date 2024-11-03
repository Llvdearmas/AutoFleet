import { Form, Button, Alert, Modal, Container } from 'react-bootstrap';

import './Dashboard.css'

import { FaBell, FaSearch, FaUser } from 'react-icons/fa';

function Dashboard() {
  return (
    <div className="Dashboard">
      <div className='header-dashboard'>
        <div className='header-row'>
          <h1>DASHBOARD</h1>
          <p>Welcome Back, Christy!</p>
        </div>
        <div className='header-button'>
          <Button className='notif-button'><FaBell /></Button>
          <Button className='search-button'><FaSearch /></Button>
          <Button className='user-button'>
            <div className='user-icon'><FaUser /></div> 
            Christy Segunto
          </Button>
        </div>
        
      </div>
    </div>
  );
}

export default Dashboard;