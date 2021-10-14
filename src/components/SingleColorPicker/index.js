import React, { Component } from 'react'

export default class SingleColorPicker extends Component {
    state = {
        r: 33,
        g: 33,
        b: 33
    }
    calculatedStyle = () => {
        let rgbCalc = this.state.r + ',' + this.state.g + ',' + this.state.b
        return 'rgb(' + rgbCalc + ')'

    }

    render() {
        return (
            <div className="mb-2 flex items-center">
                <div style={{ backgroundColor: this.calculatedStyle() }}  className="h-12 w-12 rounded"></div>
               <span className="ml-4">
                    {this.props.channel}
                </span>
                <input
                    name={this.props.channel.toLowerCase()}
                    type="number"
                    className="border rounded ml-4 h-12 w-24"
                    onChange={this.props.liftColor}
                />
            </div>
        )
    }
}
