import React from "react";

const translate = (lang) => {
    switch(lang) {
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


const Greetings = (props) => {
    return(
        <>
            <div className="bg-red-100 flex justify-center items-center h-10 my-2 w-10/12 m-auto rounded border-2 border-red-300">
                    {translate(props.lang)} {props.children}
            </div>
        </>

)}

export default Greetings