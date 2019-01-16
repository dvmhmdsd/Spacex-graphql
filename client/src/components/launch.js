import React, { Component, Fragment } from 'react'
import gql from 'graphql-tag';
import {Query} from 'react-apollo';
import classNames from 'classnames';
import {Link} from 'react-router-dom';

const LAUNCH_QUERY = gql`
    query LaunchQuery($flight_number: Int!){
        launch(flight_number: $flight_number) {
            flight_number
            mission_name
            launch_year
            launch_success
            launch_date_local
            rocket {
                rocket_id
                rocket_name
                rocket_type
            }
        }
    }
`;

export class Launch extends Component {
  render() {
    let {flight_number} = this.props.match.params;
    flight_number = +flight_number;
    return (
      <Fragment>
        <Query query={LAUNCH_QUERY} variables={{flight_number}}>
            {
                ({loading, error, data}) => {
                    if(loading) return <h1>Loading ...</h1>;
                    if(error) console.log(error);

                    const {
                        flight_number,
                        mission_name,
                        launch_year,
                        launch_success,
                        launch_date_local,
                        rocket: {rocket_id, rocket_name, rocket_type }
                    } = data.launch;
                    return( 
                        <div>
                            <h2 className="display-4 my-3"> <span className="text-dark">Mission: </span> {mission_name} </h2>
                            <div>
                                <h4 className="mb-3">Launch Details</h4>
                                <ul className="list-group">
                                    <li className="list-group-item">Flight Number: {flight_number}</li>
                                    <li className="list-group-item">Mission Year: {launch_year}</li>
                                    <li className="list-group-item">Launch successful: <span className={classNames({
                                        'text-success': launch_success,
                                        'text-danger': !launch_success
                                    })}>{launch_success ? 'Yes' : 'No'}</span></li>
                                </ul>
                                <h4 className="my-3">Rocket Details</h4>
                                <ul className="list-group">
                                    <li className="list-group-item">Rocket ID: {rocket_id}</li>
                                    <li className="list-group-item">Rocket name: {rocket_name}</li>
                                    <li className="list-group-item">Rocket Type: {rocket_type}</li>
                                </ul>
                                <hr/>
                                <Link to='/' className='btn btn-secondary'>Back</Link>
                            </div>
                        </div>
                    )
                }
            }
        </Query>
      </Fragment>
    )
  }
}

export default Launch
