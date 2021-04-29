import React, { Component } from 'react';
export default function Profile(){
    return(
        <div style={{maxWidth:"400x",margin:"0px auto"}}>
            <div style={{display:"flex", justifyContent:"space-around", margin:"18px 10px", borderBottom:"1px solid grey"}}> 
                <div>
                    <img style={{width:"160px",height:"160px",borderRadius:"120px"}}
                    src="https://yt3.ggpht.com/ytc/AAUvwnhFY3d8qOpu-KNOALIzsq4ECnGwTPwWmVVpkdM9Fg=s900-c-k-c0x00ffffff-no-rj"/>
                </div>
                <div style={{display:"flex",flexDirection:"column", justifyContent:"space-between", width:"50%"}}>
                <div>
                    <h1>Yogeshwari Jhala</h1>
                </div>
                <div style={{display:"flex",flexDirection:"row", margin:"2%"}}>
                        <h2 style={{padding:"5%"}}>20 Posts</h2>
                        <h2 style={{padding:"5%"}}>20 Followers</h2>
                        <h2 style={{padding:"5%"}}>20 Following</h2>
                    </div>
                    </div>
            </div>
        <div className="gallery" style={{display: "flex", flexWrap: "wrap",justifyContent: "space-around"}}>
            <img id="image" style={{ width: "20%"}} src="https://yt3.ggpht.com/ytc/AAUvwnhFY3d8qOpu-KNOALIzsq4ECnGwTPwWmVVpkdM9Fg=s900-c-k-c0x00ffffff-no-rj"/>
            <img id="image" style={{ width: "20%"}} src="https://yt3.ggpht.com/ytc/AAUvwnhFY3d8qOpu-KNOALIzsq4ECnGwTPwWmVVpkdM9Fg=s900-c-k-c0x00ffffff-no-rj"/>
            <img id="image" style={{ width: "20%"}} src="https://yt3.ggpht.com/ytc/AAUvwnhFY3d8qOpu-KNOALIzsq4ECnGwTPwWmVVpkdM9Fg=s900-c-k-c0x00ffffff-no-rj"/>
            <img id="image" style={{ width: "20%"}} src="https://yt3.ggpht.com/ytc/AAUvwnhFY3d8qOpu-KNOALIzsq4ECnGwTPwWmVVpkdM9Fg=s900-c-k-c0x00ffffff-no-rj"/>
            <img id="image" style={{ width: "20%"}} src="https://yt3.ggpht.com/ytc/AAUvwnhFY3d8qOpu-KNOALIzsq4ECnGwTPwWmVVpkdM9Fg=s900-c-k-c0x00ffffff-no-rj"/>
            <img id="image" style={{ width: "20%"}} src="https://yt3.ggpht.com/ytc/AAUvwnhFY3d8qOpu-KNOALIzsq4ECnGwTPwWmVVpkdM9Fg=s900-c-k-c0x00ffffff-no-rj"/>
        </div>
        </div>
    )

}