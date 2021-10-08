import React, { Component } from 'react'
import facebookData from '../../data/berlin.json'
import Card from './Card'

export default class Facebook extends React.Component {

    state = {
        facebookData: facebookData
    }
    // test = console.log('this is the data:' , facebookData)
    render() {
        return (
            <div className="flex flex-wrap">
                {this.state.facebookData.map((profile, index) => {
                   
                   return <Card 
                        img={profile.img}
                        lastName={profile.lastName}
                        firstName={profile.firstName}
                        country={profile.country}
                        isStudent={profile.isStudent}
                   />
              })}

            </div>
        )
    }
}
