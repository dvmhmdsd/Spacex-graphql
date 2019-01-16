import React from 'react';

export default function LaunchItem({launch}) {
    const {flight_number, mission_name, mission_success, launch_date_local } = launch;
  return (
    <div className="card card-body mb-3">
        <div className="row">
            <div className="col-md-9">
                <h4>Mission: {mission_name}</h4>
                <p>{launch_date_local}</p>
            </div>
            <div className="col-md-3">
                <button className="btn btn-secondary">Launch Details</button>
            </div>
        </div>
    </div>
  )
}
