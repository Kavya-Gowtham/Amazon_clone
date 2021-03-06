import React from 'react'
import './Home.css';
import Product from "./Product";
function Home() {
    return (
        <div className="home">
            <div className="home_container">
                <img className="home_background" src="https://wallpapercave.com/wp/wp4682705.jpg" alt = ""/>
    
                <div className="home_row home_row1_adjustment">
                    <Product 
                    id="1234"
                    title= "The Lean Startup: How Constant Innovation Creates Radically Successful Businesses" 
                    image="https://m.media-amazon.com/images/I/51WIKlio9qL.jpg" 
                    price={19.99} 
                    rating={5}/>
                    <Product 
                    id="654"
                    title="Singer Promise 1408 Automatic Zig-Zag Electric Sewing Machine (White), Metal Frame" 
                    image="data:image/jpeg;base64,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" 
                    price={29.89} 
                    rating={4}/>
                    {/*Product*/}
                </div>
                <div className="home_row">
                    {/*Product*/}
                    <Product 
                    id="876"
                    title="OnePlus Bullets Wireless Z2 Bluetooth in Ear Earphones with mic, IP55 Dust & Water Resistant (Magico Black)" 
                    image="https://m.media-amazon.com/images/I/51UhwaQXCpL._SY355_.jpg" 
                    price={15.99} 
                    rating={4}/>
                    <Product 
                    id="897"
                    title="Echo Dot (4th Gen, 2020 release)| Smart speaker with Alexa (Blue)" 
                    image="https://m.media-amazon.com/images/I/61MbLLagiVL._SX425_.jpg" 
                    price={12.89} 
                    rating={3}/>
                    <Product 
                    id="987"
                    title="2021 Apple 10.2-inch (25.91 cm) iPad with A13 Bionic chip (Wi-Fi, 64GB) - Space Grey (9th Generation)" 
                    image="https://m.media-amazon.com/images/I/61NGnpjoRDL._SX522_.jpg" 
                    price={20.99} 
                    rating={3}/>
                    {/*Product*/}
                    {/*Product*/}
                </div>
                <div className="home_row">
                    {/*Product*/}
                    <Product 
                    id="654"
                    title="ASUS VivoBook 14 (2021), Intel Core i3-1005G1 10th Gen, 14-Inch (35.56 cms) FHD Thin and Light Laptop (8GB RAM/512GB SSD + 32GB Optane Memory/Office 2021/Windows 11/Silver/1.6 kg), X415JA-EB362WS" 
                    image="https://images-eu.ssl-images-amazon.com/images/I/41DHBo5r6hL._SX300_SY300_QL70_FMwebp_.jpg" 
                    price={15.78} 
                    rating={2}/>
                </div>
            </div>
        </div>
    )
}

export default Home
