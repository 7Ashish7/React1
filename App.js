import React from "react"
import ReactDOM from "react-dom/client"
const Header=()=>{
    return(
        <div className="header">
        <div className="logo">
            <img className="logoimg" src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png" alt="" />
        </div>
        <div className="nav-items">
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Contact Us</li>
                <li>Cart</li>
            </ul>
        </div>
        </div>

       
    )
}
const Rescard=()=>{
    return (
        <div className="rescard">
            <div className="resimg">
                <img className="foodimg" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/90e65f9bfc54de0d1da6a000def0ea2b" alt="foodimg" />
            </div>
        <div className="name">Darbar Veg Restaurant</div>
        <div className="cusines">Chinese North Indian</div>
        <div className="stars">4.4 stars</div>
        <div className="price">240 rupees</div>
        </div>
        
    )
}
const Body=()=>{
    return(
        <div className="body">
            <div className="search">Search</div>
        <div className="res-container">
            <Rescard/>
            <Rescard/>
            <Rescard/>
            <Rescard/>
            <Rescard/>
            <Rescard/>
            <Rescard/>
            <Rescard/>
            <Rescard/>
            <Rescard/>
            <Rescard/>
            <Rescard/>
            <Rescard/>
            <Rescard/>
            <Rescard/>
            <Rescard/>
        </div>
        </div>
        
    )
}
const AppLayout=()=>{
    return(
        <div className="app">
        <Header/>
        <Body />
        </div>
    )
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);