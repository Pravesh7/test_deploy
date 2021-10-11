import React, { Component,useRef, useEffect } from 'react';
import tableau from 'tableau-api';

// const { tableau }=window;

function LoadScript(){

    const ref=useRef(null);
     console.log(ref);
     const vizUrl='https://prod-useast-b.online.tableau.com/t/mmamaict/views/m-mama-Payment-Report/PaymentReport?:showAppBanner=false&:origin=viz_share_link&:display_count=n&:showVizHome=n';     
    function initViz(){
        // new tableau.Viz(ref.current, vizUrl);
         let viz = new window.tableau.Viz(ref.current, vizUrl)
    }

    useEffect(()=>{
        initViz();
    },[]);

    return(
        <div>
            <h3>Tableau Dashboard</h3>
            <div ref={ref}>

            </div>
        </div>
    )
}
export default LoadScript;