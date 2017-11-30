import React, { Component } from 'react';

class AlertItem extends Component {
    constructor(props){
        super(props)
        this.state = {
            timerDone:false
        }
    }

    componentDidMount () {
        // handle closing the alert if the duration value has been set
        var _this = this;
        if(_this.props.alert !== undefined) {
            if(_this.props.alert.duration !== undefined) {
                setTimeout(function() {
                    _this.setState(
                        { timerDone: true }
                    )
                }, _this.props.alert.duration);
            }
        }

    }

    render() {
        if (this.state.timerDone) return null;
        return (
            <div className={"alert alert-" + this.props.alert.type} id={this.props.alert.key}>
                <strong>{this.props.alert.title} </strong>
                {this.props.alert.msg}
            </div>
        )
    }
}
export default AlertItem;