import React from "react";
import CreditCard from "../CreditCard";

const joinName = (firstName, lastName) => {
    return firstName + ' ' + lastName
}

const IdCard = (props) => {
    return (
        <>
           <div className="w-1/3 h-48 p-2">
               <div className="rounded-lg bg-gray-100">
                <div className="rounded">
                    <img src={props.picture} alt="any" className="w-full rounded-lg"/> 
                </div>
                <div className="px-2 py-4">
                    <div className="flex items-center">
                        <label className="text-sm uppercase text-gray-600 font-bold">
                        First Name
                        </label>
                        <p className=" ml-2"> 
                            {props.firstName}
                        </p>
                    </div>
                    <div className="flex items-center">
                        <label className="text-sm uppercase text-gray-600 font-bold">
                        Last Name
                        </label>
                        <p className=" ml-2"> 
                            {props.lastName}
                        </p>
                    </div>
                    <div className="flex items-center">
                        <label className="text-sm uppercase text-gray-600 font-bold">
                        Gender
                        </label>
                        <p className=" ml-2"> 
                            {props.gender}
                        </p>
                    </div>
                    <div className="flex items-center">
                        <label className="text-sm uppercase text-gray-600 font-bold">
                        Height
                        </label>
                        <p className=" ml-2"> 
                            {props.height}
                        </p>
                    </div>
                    <div className="flex items-center">
                        <label className="text-sm uppercase text-gray-600 font-bold">
                        Birth
                        </label>
                        <p className=" ml-2"> 
                            {props.birth}
                        </p>
                    </div>
                    <CreditCard 
                            type="visa.png"
                            number="0123456789018845"
                            expirationMonth={3}
                            expirationYear={2021}
                            bank="BNP"
                            owner={joinName(props.firstName, props.lastName)}
                            bgColor="#11aa99"
                            color="white"
                    
                    />
                </div>
               </div>

           </div>
        
        </>
    )}

export default IdCard