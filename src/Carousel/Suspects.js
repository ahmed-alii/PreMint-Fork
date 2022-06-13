import Slider from "react-slick";
import Suspect_Professor_Opluma from "../assets/Suspect_Professor_Opluma.png"
import Suspect_Miss_White from "../assets/Suspect_Miss_White.png"
import Suspect_Colonel_Muskard from "../assets/Suspect_Colonel_Muskard.png"
import Suspect_Ms_Green from "../assets/Suspect_Ms_Green.png"
import Suspect_Mister_Scarlet from "../assets/Suspect_Mister_Scarlet.png"
import Suspect_Mrs_Peacock from "../assets/Suspect_Mrs_Peacock.png"
import "../Carousel/slick.css"

export default function Suspects() {

    function Arrows(toLeft){
        if (toLeft){
            return <img src='https://via.palceholder.com/20'/>
        }else{
            return <img src='https://via.palceholder.com/20'/>
        }
    }


    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        // nextArrow: <Arrows/>,
        // prevArrow: <Arrows true/>
    };



    function Suspects_Slides_Professor_Opluma() {

        return (
            <div className={"suspect-slide-wrapper p-2 m-2"}>
                <div className={"suspect-image text-center"}>
                    <img src={Suspect_Professor_Opluma} alt="suspect" className={"img-fluid mx-auto"} width={400}/>
                </div>
                <div
                    className={"suspect-name-wrapper d-flex justify-content-center align-items-center text-start my-2"}>
                    <div className={"pe-2"}>
                        <span className={"h2 fw-light initial"}></span>
                    </div>
                    <div>
                        <span></span>
                    </div>
                </div>
                <div className="suspect-data p-2 border-1 border-light border">
                    <div className="row my-2">
                        <div className="col-4">AGE: 60</div>
                        <div className="col-4">PROFESSION: Retired</div>
                        <div className="col-4">RESIDES: DC</div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <p>As thunder clapped and the rain fell steady, Professor Opluma stepped from his black Escalade to the tile portico. A former professor of constitutional law, Professor Opluma spent many years in Washington shilling government programs. He is first to arrive at the mansion and is anxious to learn more about this mysterious invitation.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    function Suspects_Slides_Miss_White() {

        return (
            <div className={"suspect-slide-wrapper p-2 m-2"}>
                <div className={"suspect-image text-center"}>
                    <img src={Suspect_Miss_White} alt="suspect" className={"img-fluid mx-auto"} width={400}/>
                </div>
                <div
                    className={"suspect-name-wrapper d-flex justify-content-center align-items-center text-start my-2"}>
                    <div className={"pe-2"}>
                        <span className={"h2 fw-light initial"}></span>
                    </div>
                    <div>
                        <span></span>
                    </div>
                </div>
                <div className="suspect-data p-2 border-1 border-light border">
                    <div className="row my-2">
                        <div className="col-4">AGE: 32</div>
                        <div className="col-4">PROFESSION: Artist</div>
                        <div className="col-4">RESIDES: London</div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <p>After her transatlantic flight from her home in Primrose Hill, Miss White arrives in a 1932 Chevrolet Cabriolet. Unsure how she knows Mr. Boddy, or why she received the invite for this dinner party, Miss White has a look of concern as she approaches the front door of the mansion. She wonders to herself how the road not taken looks real good now.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    function Suspects_Slides_Colonel_Muskard() {

        return (
            <div className={"suspect-slide-wrapper p-2 m-2"}>
                <div className={"suspect-image text-center"}>
                    <img src={Suspect_Colonel_Muskard} alt="suspect" className={"img-fluid mx-auto"} width={400}/>
                </div>
                <div
                    className={"suspect-name-wrapper d-flex justify-content-center align-items-center text-start my-2"}>
                    <div className={"pe-2"}>
                        <span className={"h2 fw-light initial"}></span>
                    </div>
                    <div>
                        <span></span>
                    </div>
                </div>
                <div className="suspect-data p-2 border-1 border-light border">
                    <div className="row my-2">
                        <div className="col-4">AGE: 50</div>
                        <div className="col-4">PROFESSION: Contractor</div>
                        <div className="col-4">RESIDES: Austin</div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <p>Arriving in what appears to be a 2019 Cybertruck prototype, the Colonel rushes in from the rain. The Colonel is very successful at winning government contracts due to his ability to “seize the memes of production,” but he is usually uncomfortable rubbing shoulders with bureaucrats. To help ease his angst, he sparks a j as he steps into the mansion.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    function Suspects_Slides_Ms_Green() {

        return (
            <div className={"suspect-slide-wrapper p-2 m-2"}>
                <div className={"suspect-image text-center"}>
                    <img src={Suspect_Ms_Green} alt="suspect" className={"img-fluid mx-auto"} width={400}/>
                </div>
                <div
                    className={"suspect-name-wrapper d-flex justify-content-center align-items-center text-start my-2"}>
                    <div className={"pe-2"}>
                        <span className={"h2 fw-light initial"}></span>
                    </div>
                    <div>
                        <span></span>
                    </div>
                </div>
                <div className="suspect-data p-2 border-1 border-light border">
                    <div className="row my-2">
                        <div className="col-4">AGE: 32</div>
                        <div className="col-4">PROFESSION: Activist</div>
                        <div className="col-4">RESIDES: BX</div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <p>Ms. Green arrives from Washington after a long day of Congressional hearings. She appears apprehensive as she has not grown accustomed to fundraising dinner parties with constituents. However, she wasn’t quite sure what to make of this invitation as she is unsure who the host of this party actually is.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    
    function Suspects_Slides_Mister_Scarlet() {

        return (
            <div className={"suspect-slide-wrapper p-2 m-2"}>
                <div className={"suspect-image text-center"}>
                    <img src={Suspect_Mister_Scarlet} alt="suspect" className={"img-fluid mx-auto"} width={400}/>
                </div>
                <div
                    className={"suspect-name-wrapper d-flex justify-content-center align-items-center text-start my-2"}>
                    <div className={"pe-2"}>
                        <span className={"h2 fw-light initial"}></span>
                    </div>
                    <div>
                        <span></span>
                    </div>
                </div>
                <div className="suspect-data p-2 border-1 border-light border">
                    <div className="row my-2">
                        <div className="col-4">AGE: 37</div>
                        <div className="col-4">PROFESSION: Soldier</div>
                        <div className="col-4">RESIDES: LA</div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <p>After taking a red eye flight from the west coast, Mister Scarlet arrives in a cherry red Rolls-Royce. For someone who has been in the public eye since he was born, and has met countless celebrities and world leaders, he remains apprehensive about the dinner party and why the host has requested his presence.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    function Suspects_Slides_Mrs_Peacock() {

        return (
            <div className={"suspect-slide-wrapper p-2 m-2"}>
                <div className={"suspect-image text-center"}>
                    <img src={Suspect_Mrs_Peacock} alt="suspect" className={"img-fluid mx-auto"} width={400}/>
                </div>
                <div
                    className={"suspect-name-wrapper d-flex justify-content-center align-items-center text-start my-2"}>
                    <div className={"pe-2"}>
                        <span className={"h2 fw-light initial"}></span>
                    </div>
                    <div>
                        <span></span>
                    </div>
                </div>
                <div className="suspect-data p-2 border-1 border-light border">
                    <div className="row my-2">
                        <div className="col-4">AGE: 49</div>
                        <div className="col-4">PROFESSION: Journalist</div>
                        <div className="col-4">RESIDES: NYC</div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <p>Although Mrs. Peacock works in both New York City and Washington DC, she has traveled for the dinner party from her vacation home in western Massachusetts. She’s used to asking famous people tough questions, but tonight she has a lot of unanswered questions. Mrs. Peacock takes a deep breath, straightens her feathers, and steps into the foyer.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }


    return (
        <>
            <section className={"red"}>
                <div className="container">
                    <div className={"text-center"}>
                        <h2 className={"fw-light"}>Meet the Suspects</h2>

                        <div className="row">
                            <div className="col-md-8 offset-md-2">
                                <div>
                                    <div className={"w-100 d-block"}>
                                        <Slider {...settings}>
                                            <div><Suspects_Slides_Professor_Opluma/></div>
                                            <div><Suspects_Slides_Miss_White/></div>
                                            <div><Suspects_Slides_Colonel_Muskard/></div>
                                            <div><Suspects_Slides_Ms_Green/></div>
                                            <div><Suspects_Slides_Mister_Scarlet/></div>
                                            <div><Suspects_Slides_Mrs_Peacock/></div>
                                        </Slider>
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </section>
        </>
    )
}