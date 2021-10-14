import React, { Component } from 'react'
import SingleColorPicker from '../SingleColorPicker'

export default class RGBColorPicker extends Component {
    state = {
        r:  0,
        g:  0,
        b:  0,
        rgb: ''
    }

    liftColor = event => {
        let {name, value} = event.target
        this.setState({
            [name]: value,
        })
    }

    calculatedStyle = () => {
        let rgbCalc =  this.state.r + ',' + this.state.g + ',' + this.state.b
      return  'rgb('+ rgbCalc + ')'
 
    }

    style = {
        backgroundColor: this.calculatedStyle()
    }

    render() {
        return (
            <div>
                
                <SingleColorPicker 
                    channel="R"
                    liftColor={this.liftColor}
                />
                <SingleColorPicker 
                    channel="G"
                    liftColor={this.liftColor}
                />
                <SingleColorPicker 
                    channel="B"
                    liftColor={this.liftColor}
                />
                <div className="flex items-center">
                    <div style={{backgroundColor: this.calculatedStyle() }} className="h-12 w-12 rounded border border-gray-600"></div>
                    <span className="ml-4">
                        RGB {this.calculatedStyle()}
                    </span>
                </div>
            </div>
        )
    }
}
