import { Form, Button, Alert, Modal, Container, Row, Col, Table } from 'react-bootstrap';

import './Dashboard.css'

import { FaBell, FaSearch, FaUser } from 'react-icons/fa';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'; // Import required elements
import { Pie } from 'react-chartjs-2';
import user from './../../img/user.png';

ChartJS.register(ArcElement, Tooltip, Legend); 



function Dashboard() {
  const fleetstatusdata = {
    labels: ['On The Road', 'Damaged', 'Inactive'],
    datasets: [
      {
        label: 'Fleet Status',
        data: [56, 10, 8],
        backgroundColor: ['#FF6A18', '#023047', '#FFC8A9'],
        hoverBackgroundColor: ['#FF8B4B', '#014567', '#FFE1D0'],
      },
    ],
  };

  const chartOptions = {
    plugins: {
      legend: {
        position: 'right', // Move the legend to the right side of the chart
        align: 'center',   // Center-align the legend vertically
        labels: {
          usePointStyle: true, // Use circles instead of squares in the legend
        },
      },
    },
    responsive: true,
    maintainAspectRatio: false, // Allows for better control over sizing
  };

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

      <div className="dashboard-content">
        <Row className="w-100 m-0">
          <Col xs={12} md={7} className="left-content p-0">
            <Row className="dashboard-total m-0">
              <Col xs={6} sm={6} md={6} lg={3} className="total-car">
                <div className='total-car-custom'>
                  <h4>TOTAL CARS</h4>
                  <p>56</p>
                </div>
              </Col>
              <Col xs={6} sm={6} md={6} lg={3} className="total-car available">
                <div className='total-car-custom'>
                  <h4>AVAILABLE</h4>
                  <p>56</p>
                </div>
              </Col>
              <Col xs={6} sm={6} md={6} lg={3} className="total-car undermaintenance">
                <div className='total-car-custom'>
                  <h4>UNDER MAINTENANCE</h4>
                  <p>56</p>
                </div>
              </Col>
              <Col xs={6} sm={6} md={6} lg={3} className="total-car undermonitoring">
                <div className='total-car-custom'>
                  <h4>UNDER MONITORING</h4>
                  <p>56</p>
                </div>
              </Col>
            </Row>

            <Row className='location-overview'>
              <h4>LOCATION OVERVIEW</h4>
              <div className='location-overview-custom'>
                <iframe
                  title="Google Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d128041.0482820389!2d120.9842!3d14.5995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33b5b594b0e626c7%3A0xa2c5ebd24e07a68!2zTW5pbGFwYXIsIFBILjAgMDE0MCA3NCcgU0lYJZ2Fv!5e0!3m2!1sen!2sph!4v1642125664995!5m2!1sen!2sph"
                  width="100%"
                  height="100%" 
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                ></iframe>
              </div>
              
            </Row>
          </Col>

          <Col xs={12} md={5} className="right-content p-0">
            {/* <Row className='dashboard-crashreport'>
              <h4>CRASH REPORT</h4>
              <div className='crash-report-table'>
                <table className="table">
                  <tbody>
                    <tr>
                      <td className='col-3'>
                        <div className='time'>
                          <h4>10:30am</h4>
                          <p>7-OCT 2023</p>
                        </div>
                      </td>
                      <td className='col-6'>
                        <div className='driver'>
                          <h4>Driver: Crisostomo</h4>
                          <p>Car Plate #: 763HGD</p>
                        </div>
                      </td>
                      <td>
                        <div className='open-btn'>
                          <Button className='open-btn-custom'>OPEN</Button>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className='col-3'>
                        <div className='time'>
                          <h4>10:30am</h4>
                          <p>7-OCT 2023</p>
                        </div>
                      </td>
                      <td className='col-6'>
                        <div className='driver'>
                          <h4>Driver: Tiyago</h4>
                          <p>Car Plate #: 763HGD</p>
                        </div>
                      </td>
                      <td>
                        <div className='open-btn'>
                          <Button className='open-btn-custom'>OPEN</Button>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </Row> */}

            <Row className='fleet-status'>
              <h4>CURRENT FLEET STATUS</h4>
              <div className="pie-chart-container">
                <Pie data={fleetstatusdata} options={chartOptions} />
              </div>
            </Row>

            <Row className='upcoming-trips'>
              <h4>UPCOMING TRIPS</h4>
              <div className='upcoming-trips-table'>
                <table className="table">
                  <tbody>
                    <tr className='upcoming-trips-custom-table'>
                      <td className='col-3'>
                        <div className='user-img'>
                          <img src={user}/>
                        </div>
                      </td>
                      <td className='col-6'>
                        <div className='about'>
                          <h4>Ford Transit</h4>
                          <p>Driver: Juan Dela Cruz</p>
                        </div>
                      </td>
                      <td className='col-3'>
                        <div className='status'>
                          <Button>5 Mins</Button>
                        </div>
                      </td>
                    </tr>
                    <tr className='upcoming-trips-custom-table'>
                      <td className='col-3'>
                        <div className='user-img'>
                          <img src={user}/>
                        </div>
                      </td>
                      <td className='col-6'>
                        <div className='about'>
                          <h4>Ford Transit</h4>
                          <p>Driver: Juan Dela Cruz</p>
                        </div>
                      </td>
                      <td className='col-3'>
                        <div className='status'>
                          <Button>5 Mins</Button>
                        </div>
                      </td>
                    </tr>
                    <tr className='upcoming-trips-custom-table'>
                      <td className='col-3'>
                        <div className='user-img'>
                          <img src={user}/>
                        </div>
                      </td>
                      <td className='col-6'>
                        <div className='about'>
                          <h4>Ford Transit</h4>
                          <p>Driver: Juan Dela Cruz</p>
                        </div>
                      </td>
                      <td className='col-3'>
                        <div className='status'>
                          <Button>5 Mins</Button>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </Row>
          </Col>
        </Row>

      </div>
    </div>
  );
}

export default Dashboard;