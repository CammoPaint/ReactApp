import React, { Component } from 'react';
import AlertItem from './AlertItem';

class Alerts extends Component {
    render() {
        // add an AlertItem for every item in the alerts array
        var items = [];
        if (this.props.alerts !== undefined) {
          this.props.alerts.forEach((alert) => {
            items.push(<AlertItem alert={alert} key={alert.key} />);
          });
        }
    
        return (
          <div>
            {items}
          </div>
        )
    }
}

export default Alerts;