// src/admin/Vehicles/MaintenanceOthersTab.js
import React from 'react';
import './MaintenanceOthersTab.css';

const MaintenanceOthersTab = () => {
  return (
    <div className="vehicle-content">
        
      <div className="maintenance-section">
        <div className="maintenance-header">MAINTENANCE SCHEDULE</div>
        <div className="maintenance-grid">
          <div className="maintenance-item">
            <div className="maintenance-label">Routine Maintenance:</div>
            <div className="maintenance-value">Every 10,000 km</div>
          </div>
          <div className="maintenance-item">
            <div className="maintenance-label">Next Scheduled Maintenance:</div>
            <div className="maintenance-value">90,000 km (Due in 5,000 km)</div>
          </div>
          <div className="maintenance-item">
            <div className="maintenance-label">Last Maintenance Date:</div>
            <div className="maintenance-value">September 1, 2024</div>
          </div>
          <div className="maintenance-item">
            <div className="maintenance-label">Service Performed:</div>
            <div className="maintenance-value">Oil change, brake inspection, tire rotation</div>
          </div>
        </div>
      </div>

      <div className="maintenance-section">
        <div className="maintenance-header">ADDITIONAL INFORMATION</div>
        <div className="maintenance-grid">
          <div className="maintenance-item">
            <div className="maintenance-label">Tire Condition:</div>
            <div className="maintenance-value">Good (50% tread remaining)</div>
          </div>
          <div className="maintenance-item">
            <div className="maintenance-label">Battery Condition:</div>
            <div className="maintenance-value">New (Replaced on August 15, 2024)</div>
          </div>
          <div className="maintenance-item">
            <div className="maintenance-label">Insurance Validity:</div>
            <div className="maintenance-value">Until March 2025</div>
          </div>
          <div className="maintenance-item">
            <div className="maintenance-label">Driver Training Completed:</div>
            <div className="maintenance-value">Yes (Safe Driving Course)</div>
          </div>
        </div>
      </div>

      <div className="update-container">
        <button className="update-btn">UPDATE</button>
      </div>
    </div>
  );
};

export default MaintenanceOthersTab;