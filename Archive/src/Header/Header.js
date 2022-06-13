import {useState} from "react";
import g3 from "../assets/Suspect poster.png"
import g2 from "../assets/Rooms poster.png"
import g1 from "../assets/Murder weapons poster.png"

import gif1 from "../assets/Suspects.gif"
import gif2 from "../assets/Rooms.gif"
import gif3 from "../assets/Murder Weapons.gif"


export default function Header({isPreMint, showMintButton}) {
    const [qty, setQty] = useState(1)

    function counter(showMint) {
        return (
            <>
                <div className={"counter-wrapper mx-auto"}>
                    <button onClick={() => setQty(c => c - 1)}> -</button>
                    <input type="number" value={qty}/>
                    <button onClick={() => setQty(c => c + 1)}> +</button>
                </div>
                <div className={"text-center"}>
                    <p className={"p my-3"}>0.025 ETH + Gas Fee</p>
                    {showMint ? <button className={"btn btn-blue"}>Mint NFT</button>
                        : <button className={"btn btn-blue"}>Connect Wallet</button>}

                    <p className={"my-3 p"}>0 / 2,000</p>
                </div>
            </>
        )
    }

    function PreMint() {
        return (
            <>
                <div className={"text-center text-white"}>
                    <p className={"h3 fw-light"}>Mint Date: June 29th, 2022</p>
                </div>
            </>
        )
    }

    function photos() {
        return (
            <>
                <div className={"photos-container"}>
                    <div>
                        <img src={g3} alt="NFT PHOTO" className={"img-fluid frame"}/>
                        <img src={gif1} alt="NFT PHOTO" className={"img-fluid gif"}/>
                    </div>
                    <div>
                        <img src={g2} alt="NFT PHOTO" className={"img-fluid frame"}/>
                        <img src={gif2} alt="NFT PHOTO" className={"img-fluid gif"}/>
                    </div>
                    <div>
                        <img src={g1} alt="NFT PHOTO" className={"img-fluid frame"}/>
                        <img src={gif3} alt="NFT PHOTO" className={"img-fluid gif"}/>
                    </div>
                </div>
            </>
        )
    }

    return (
        <>
            <div className="min-vh-100 bg-black header-wrapper">
                <div className="container position-relative has-photos">
                    <div className="row">
                        <div className="col-md-6 offset-md-3 mt-md-5 pt-md-5">
                            {!isPreMint && counter(showMintButton)}
                            {isPreMint && PreMint()}
                        </div>
                    </div>
                    {photos()}
                </div>
            </div>
        </>
    )
}