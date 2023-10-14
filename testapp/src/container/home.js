import { useNavigate } from "react-router-dom";
import NavBar from "../headers";
import { useEffect, useState } from "react";



export default function HomePage() {

    const navigate = useNavigate();

    const [authenticated, setauthenticated] = useState(null);

    useEffect(() => {
        const loggedInUser = localStorage.getItem("authenticated");
        if (loggedInUser === 'true') {

            setauthenticated(true);
        }
    }, []);

    if (authenticated) {
        console.log(localStorage.getItem("authenticated"));
        navigate('loggedin')
    }


    return (
        <body>
            <NavBar />


            <div className="row">
                <div id="carouselExampleControls" className="carousel slide carousel-fade col w-50" data-ride="carousel">
                    <div className="carousel-inner">
                        <div className="row">
                            <div className="carousel-item active">
                                <img className="d-block w-100" src={process.env.PUBLIC_URL + 'static/images/cow.jpg'} alt="First slide" />
                                <div className="carousel-caption d-none d-md-block " style={{ background: 'rgba(0, 0, 0, .6)' }}>
                                    <h3>Welcome to our dairy farm</h3>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <img className="d-block w-100" src={process.env.PUBLIC_URL + 'static/images/cowimage.jpg'} alt="Second slide" />
                                <div className="carousel-caption d-none d-md-block" style={{ background: 'rgba(0, 0, 0, .6)' }}>
                                    <h5> we rear dairy cows</h5>
                                    <p>we also sell dairy products</p>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <img className="d-block w-100" src={process.env.PUBLIC_URL + 'static/images/istockphoto-1297005217-612x612.jpg'} alt="Third slide" />
                                <div className="carousel-caption d-none d-md-block" style={{ background: 'rgba(0, 0, 0, .6)' }}>
                                    <h5 className="transparent">we milk our cows and sell milk too</h5>
                                </div>
                            </div>
                        </div>
                        <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="sr-only">Previous</span>
                        </a>
                        <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="sr-only">Next</span>
                        </a>
                    </div>
                </div>
                <div id="carouselExampleControls1" className="carousel slide carousel-fade col w-50" data-ride="carousel">
                    <div className="carousel-inner">
                        <div className="row">
                            <div className="carousel-item active">
                                <img className="d-block w-100" src={process.env.PUBLIC_URL + 'static/images/istockphoto-94508915-612x612.jpg'} alt="First slide" />
                                <div className="carousel-caption d-none d-md-block" style={{ background: 'rgba(0, 0, 0, .6)' }}>
                                    <h5 className="transparent">The dairy management system </h5>
                                    <h5>here we do alot regarding dairy cows</h5>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <img className="d-block w-100" src={process.env.PUBLIC_URL + "static/images/53-3-col_GettyImages-1072682504-707x650.jpg"} alt="Second slide" />
                                <div className="carousel-caption d-none d-md-block" style={{ background: 'rgba(0, 0, 0, .6)' }}>
                                    <h5 className="transparent">we breed and produce high quality cattle using </h5>
                                    <h5>artificial insemination</h5>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <img className="d-block w-100" src={process.env.PUBLIC_URL + "static/images/istockphoto-184344585-612x612.jpg"} alt="Third slide" />
                                <div className="carousel-caption d-none d-md-block" style={{ background: 'rgba(0, 0, 0, .6)' }}>
                                    <h5 className="transparent">we feed our cows on nutritious feeds</h5>
                                    <h5>for they to grow healthy and strong</h5>
                                </div>
                            </div>
                        </div>
                        <a className="carousel-control-prev" href="#carouselExampleControls1" role="button" data-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="sr-only">Previous</span>
                        </a>
                        <a className="carousel-control-next" href="#carouselExampleControls1" role="button" data-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="sr-only">Next</span>
                        </a>
                    </div>
                </div>
            </div>



            <div className="row text-white" style={{ backgroundImage: `url(${process.env.PUBLIC_URL + 'static/images/istockphoto-184344585-612x612.jpg'})`, backgroundSize: 'cover ' }}>
                <div style={{ background: 'rgba(0, 0, 0, .6)' }}>

                    <div className="row">
                        <div className="col w-50">
                            <p>welcome to our dairy farm</p>
                            <p>we sell cows and milk</p>
                            <p>we rear and breed dairy cow</p>
                            <p>You are at the right place</p>

                        </div>
                        <div className="col w-50">
                            <h1>contact us on:</h1>
                            <h3>phone number: 0726739857</h3>
                            <h3>email: gtreksolution@gmail.com</h3>

                        </div>
                    </div>


                </div>
            </div>
            <>
                <style>
                    {`
        .w-100 {
            height:50vh;
        }
        
        .carousel .next {
            top: 40px;
            padding-left: 160px;
        }
        
        .carousel .prev {
            top: 40px;
            padding-left: 160px;
        }`}
                </style></>


            <script src={process.env.PUBLIC_URL + "static/jquery3.min.js"}></script>

            <script src={process.env.PUBLIC_URL + "static/bootstrap3.min.js"}></script>


        </body >


    );
}