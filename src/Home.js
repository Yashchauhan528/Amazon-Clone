import React from "react";
import './home.css'
import Product from './Product';
function Home(){
    return(
        <div className="home">
        <img className="home__image" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNp0zwQUX_a8VaHJF6R_PgFC4UreSkCWrzjw&usqp=CAU" alt="" />
        
        <div className="home__row">
            <Product title='The Lean Startup' price={29.99} image='https://m.media-amazon.com/images/P/0307887898.01._SCLZZZZZZZ_SX500_.jpg' rating={3}/>
            <Product />
        </div>
        
        <div className="home__row">
            <Product />
            <Product />
            <Product />
        </div>
        
        <div className="home__row">
            <Product />  
        </div>
        
        </div>
    )   
}

export default Home