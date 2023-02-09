import React, { Component, useEffect, useState } from "react";
const Goto =()=>
{
    const[Dimension,detect]=useState(
        {
            winWidth:window.innerWidth,
            winHeight:window.innerHeight
        })
    const detectHw=()=>{
        detect({
            winWidth:window.innerWidth,
            winHeight:window.innerHeight
        })
    }
        useEffect(()=>{
            window.addEventListener('resize',detectHw)
            return()=>{
                window.removeEventListener('resize',detectHw)
            }
        }
        ,[Dimension])
    const scroll=()=>
    {
        window.scrollTo({
            top:0,left:0,behavior:"smooth"
        });
    }
        return(
            <div className="top-btn" onClick={scroll}>
                <span className="fa fa-arrow-up fa-lg icon">
                    {Dimension.winWidth}
                </span>
            </div>
        )
}
export default Goto;
