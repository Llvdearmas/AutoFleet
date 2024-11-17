// src/admin/Vehicles/Vehicles.js

import { Form, Button, Alert, Modal, Container } from 'react-bootstrap';
import { FaBell, FaSearch, FaUser, FaEdit, FaTrash, FaEye } from 'react-icons/fa';
import React, { useState } from 'react';
import './Vehicles.css';
import VehicleDetailsTab from './VehicleDetailsTab';

const Vehicles = () => {
  const [selectedVehicle, setSelectedVehicle] = useState(null);

  // sample data, icoconnect ito sa db
  const vehicles = [
    {
      vehicleNo: '1',
      plateNo: 'ABC-1234',
      driver: 'Juan Dela Cruz',
      model: 'Toyota Hiace',
      status: 'Repair',
      image: '/path/to/driver-image.jpg',
      performanceNotes:
        'The vehicle has been performing well, with no reported issues. Regular check-ups are recommended to maintain efficiency',
      utilization:
        'Actively utilized for local deliveries, averaging 500 km/week.',
    },
    {
      vehicleNo: '2',
      plateNo: 'ABC-1234',
      driver: 'Juan Dela Cruz',
      model: 'Toyota Hiace',
      status: 'Active',
      image: '/path/to/driver-image.jpg',
      performanceNotes:
        'The vehicle has been performing well, with no reported issues. Regular check-ups are recommended to maintain efficiency',
      utilization:
        'Actively utilized for local deliveries, averaging 500 km/week.',
    },
    {
      vehicleNo: '3',
      plateNo: 'ABC-1234',
      driver: 'Juan Dela Cruz',
      model: 'Toyota Hiace',
      status: 'Inactive',
      image: '/path/to/driver-image.jpg',
      performanceNotes:
        'The vehicle has been performing well, with no reported issues. Regular check-ups are recommended to maintain efficiency',
      utilization:
        'Actively utilized for local deliveries, averaging 500 km/week.',
    },
  ];

  const handleRowClick = (vehicle) => {
    setSelectedVehicle(vehicle);
  };

  const closeVehicleDetailsTab = () => {
    setSelectedVehicle(null);
  };

  const handleEdit = (vehicle) => {
    console.log("Edit vehicle", vehicle);
  };

  const handleRemove = (vehicle) => {
    console.log("Remove vehicle", vehicle);
  };

  const handleView = (vehicle) => {
    console.log("View vehicle", vehicle);
  };

  return (
    <div className="vehicles-container">
      <div className="top-ribbon">
        <div className="left-side">
          <div className="vehicle-header">
            <h2 >VEHICLES RECORD</h2>
            <p>Welcome Back, Someone!</p>
          </div>
        </div>
        <div className="right-side">
          <div className='header-button'>
            <Button className='notif-button'><FaBell /></Button>
            <Button className='search-button'><FaSearch /></Button>
            <Button className='user-button'>
              <div className='user-icon'><FaUser /></div> 
              Someone else
            </Button>
          </div>
        </div>
      </div>
      <div className="header-row">
        <h3 className="list-header">LIST OF VEHICLES</h3>
        <div className="action-buttons">
          <button className="export-btn">Export</button>
          <button className="add-vehicle-btn">Add Vehicle</button>
        </div>
      </div>

      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Vehicle #</th>
              <th>Plate #</th>
              <th>Driver</th>
              <th>Car Model</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {vehicles.map((vehicle, index) => (
              <tr
                key={index}
                onClick={() => handleRowClick(vehicle)}
                className="vehicle-row"
              >
                <td>{vehicle.vehicleNo}</td>
                <td>{vehicle.plateNo}</td>
                <td>{vehicle.driver}</td>
                <td>{vehicle.model}</td>
                <td>
                  <span className={`status ${vehicle.status.toLowerCase()}`}>
                    {vehicle.status}
                  </span>
                </td>
                <td className="actions-icons">
                  <Button className="action-btn" onClick={() => handleEdit(vehicle)}>
                    <FaEdit />
                  </Button>
                  <Button className="action-btn" onClick={() => handleRemove(vehicle)}>
                    <FaTrash />
                  </Button>
                  <Button className="action-btn" onClick={() => handleView(vehicle)}>
                    <FaEye />
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {selectedVehicle && (
        <VehicleDetailsTab
          vehicle={selectedVehicle}
          onClose={closeVehicleDetailsTab}
        />
      )}
    </div>
  );
};

export default Vehicles;
