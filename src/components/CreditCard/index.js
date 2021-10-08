import React from "react";

    const maskNumber = (number) => {
        return '•••• •••• •••• ' + number.slice(-4)
    }

    const CreditCard = (props) => {
        const { bgColor, color } = props
        const style = {
            backgroundColor: bgColor,
            color: color
        }
        return(
            <>
              
                <div className="flex flex-col p-2 justify-between  mt-8 rounded m-auto w-60 h-32 " style={style}>
                    <div className="text-left text-sm uppercase text-bold">{props.bank}</div>
                    <div className="text-left text-2xl uppercase text-bold">{maskNumber(props.number)}</div>
                    <div className="text-left text-sm uppercase text-bold -mt-6">{props.expirationMonth}/{props.expirationYear}</div>
                    <div className="bg-yellow-500 flex relative bottom-0">
                        <div className="absolute text-sm bottom-0 left-0">{props.owner}</div>
                        <div className="bg-orange-500 absolute bottom-0 right-0">
                            <img src={props.type} alt='' width="52px"/>
                        </div>

                    </div>
                </div>
            </>
        )}
export default CreditCard