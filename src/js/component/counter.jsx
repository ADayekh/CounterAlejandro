import React from "react";
import {stopcounter } from "..";

const SecondCounter = (props) => {

        let unitsecond= props.second;
        let tensecond = 0;
        let hundredsecond = 0;
        let thousandsecond = 0;
        let tenthousandsecond = 0;
        let hundredthousandsecond = 0;

        if (unitsecond > 9){
            tensecond = Math.trunc(unitsecond / 10);
            unitsecond =  unitsecond % 10;
            if (tensecond > 9){
                hundredsecond = Math.trunc(tensecond / 10);
                tensecond =  tensecond % 10;
                if (hundredsecond > 9){
                    thousandsecond = Math.trunc(hundredsecond / 10);
                    hundredsecond =  hundredsecond % 10;
                    if (thousandsecond > 9){
                        tenthousandsecond = Math.trunc(thousandsecond / 10);
                        thousandsecond =  thousandsecond % 10;
                        if (tenthousandsecond > 9){
                            hundredthousandsecond = Math.trunc(tenthousandsecond / 10);
                            tenthousandsecond =  tenthousandsecond % 10;
                        }
                    }
                }
            }
        }

    return (
    <>
        <div className = "counter d-flex justify-content-center bg-dark pb-3">
          <div><img className="clock mt-4 mb-2  mx-2" src="https://png.pngtree.com/png-vector/20190508/ourmid/pngtree-vector-clock-icon-png-image_1028324.jpg"></img></div>
            <div className = "hundredtbox mt-4 mb-2 mx-2">{hundredthousandsecond}</div>
            <div className = "tentbox mt-4 mb-2  mx-2">{tenthousandsecond}</div>
            <div className = "thousandbox mt-4 mb-2  mx-2">{thousandsecond}</div>
            <div className = "hundredbox mt-4 mb-2  mx-2">{hundredsecond}</div>
            <div className = "tenbox mt-4 mb-2  mx-2">{tensecond}</div>
            <div className = "unitbox mt-4 mb-2  mx-2">{unitsecond}</div>
        </div>
        <button onClick={stopcounter}></button>
    </>
    )


} 

export {SecondCounter}


