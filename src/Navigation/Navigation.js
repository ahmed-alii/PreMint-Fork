import logo from "../assets/Logo.png"
import os from "../assets/OpenSea.png"
import tw from "../assets/Twitter.png"

export default function Navigation(){
    return(
        <nav className="navbar navbar-expand navbar-light position-absolute w-100">
            <div className="container">
                <a className="navbar-brand" href="#">
                    <img src={logo} alt="logo image" className={"img-fluid"}/>
                </a>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link" href="https://opensea.io/collection/boardgameyawnclub">
                                <img src={os} alt="" className={"img-fluid"} width={50}/>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="https://twitter.com/BoardGameYC">
                                <img src={tw} alt="" className={"img-fluid"} width={50}/>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}