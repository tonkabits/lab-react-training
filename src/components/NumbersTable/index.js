import React, { Component } from 'react'

export default class NumbersTable extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div>
                this is a table
                
                {this.props.limit}
            </div>
        )
    }
}
