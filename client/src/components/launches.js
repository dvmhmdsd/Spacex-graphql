import React, { Component, Fragment } from 'react'
import gql from 'graphql-tag';
import {Query} from 'react-apollo';
import LaunchItem from './LaunchItem';
import LaunchStatus from './LaunchStatus';

const LAUNCHES_QUERY = gql`
    query LaunchesQuery{
        launches {
            flight_number,
            mission_name,
            launch_date_local,
            launch_success
        }
    }
`

export class Launches extends Component {
  render() {
    return (
      <Fragment>
        <h2 className="display-4 my-3">Launches</h2>
        <LaunchStatus />
        <Query query={LAUNCHES_QUERY}>
            {
                ({loading, error, data}) => {
                    if (loading) return <h4>Loading ....</h4>
                    if (error) console.log(error);
                    console.log(data);

                    return <Fragment>
                        {
                            data.launches.map(launch => (
                                <LaunchItem key={launch.flight_number} launch={launch}/>
                            ))
                        }
                    </Fragment>
                }
            }
        </Query>
      </Fragment>
    )
  }
}

export default Launches;
