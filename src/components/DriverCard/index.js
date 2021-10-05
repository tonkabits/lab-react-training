import React from "react";
import Rating from "../Rating";

    const DriverCard = (props) => {
        return (
            <> 
                <div className="bg-gray-100 py-8 px-4 rounded flex w-full">
                    <div className="w-4/12"> 
                      <img src={props.img} alt="alt" className="w-24 h-24 bg-contain rounded-full m-auto"/>
                    </div>
                    <div className="flex flex-col w-8/12"> 
                        <p className="text-3xl">{props.name}</p>
                        <span className="w-32 m-auto"> 
                            <Rating>{props.rating}</Rating>
                        </span>
                        <p className="text-xl">{props.car.model}</p>
                        <p className="text-sm w-28 px-2 py-1 rounded bg-yellow-500 text-white m-auto">{props.car.licensePlate}</p>
                    </div>
                </div>  
            </>
        )
    }


export default DriverCard