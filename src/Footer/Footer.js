import flogo from "../assets/footerLogo.png"

export default function Footer(){
    return(
        <>
            <footer className={"footer"}>
                <div className="container">
                    <div className="row py-3">
                        <div className="col-md-6 offset-md-3 text-center">
                            <img src={flogo} alt="footer logo" className={"img-fluid"}/>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}