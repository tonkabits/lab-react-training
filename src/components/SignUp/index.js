import React, { Component } from 'react'

export default class SignUp extends Component {

    state = {
      
        email: '',
        password: '',
        nationality: 'en',
        langOptions: [
            'en',
            'de',
            'fr',
            'es'
        ]
    }

    onChangeHandler = (event) => {
        
        let { name, value } = event.target
        this.setState({
            
                [name]: value,
           
        })
        
    }



   translate = (lang) => {
       switch (lang) {
           case 'de':
               return 'Hallo'
               break
           case 'en':
               return 'Hello'
               break
           case 'es':
               return 'Hola'
               break
           case 'fr':
               return 'Bonjourrrt'
               break
       }
        
    }

    render() {
        return (
            
                <form className="w-1/2">
                   <span className="text-5xl">
                        {this.translate(this.state.nationality)}
                    </span><br/>    
                        {this.state.email &&
                            <h2>
                            your email is {this.state.email}
                            </h2>
                        }
                {/* email */}
                <div className=" flex flex-col pr-4">
                    <label className="uppercase text-gray-600 text-left "> email
                    </label>
                    <input
                        name="email"
                        type="text"
                        className="bg-white border border-2 border-gray-200 rounded-xl h-12 px-4"
                        value={this.state.email}
                        onChange={this.onChangeHandler}
                    />
                </div>
                {/* password */}
                <div className=" flex flex-col pr-4">
                    <label className="uppercase text-gray-600 text-left "> password
                    </label>
                    <input
                        name="password"
                        type="password"
                        className="bg-white border border-2 border-gray-200 rounded-xl h-12 px-4"
                        value={this.state.password}
                        onChange={this.onChangeHandler}
                    />
                </div>
                {/* nationality */}
                <div className=" flex flex-col pr-4">
                    <label className="uppercase text-gray-600 text-left "> nationality
                    </label>
                    <select
                        name="nationality"
                        type="select"
                        className="bg-white border border-2 border-gray-200 rounded-xl h-12 px-3"
                        value={this.state.email}
                        onChange={this.onChangeHandler}
                    >
                        { this.state.langOptions.map((lang) =>{
                            return(
                                <option>
                                    {lang}

                                </option>
                            )

                        })

                        }


                    </select>

                </div>

                </form>
        
        )
    }
}
