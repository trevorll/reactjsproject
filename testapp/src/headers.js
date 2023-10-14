
import 'bootstrap'
export default function NavBar() {
    return (
        <div>
            <script src={process.env.PUBLIC_URL + "static/js/jquery.min.js"}></script>
            <link rel="stylesheet" href={process.env.PUBLIC_URL + "style/app.css"} />
            <link rel="stylesheet" href={process.env.PUBLIC_URL + "static/bootstrap/css/bootstrap.min.css"} />
            <link rel="stylesheet" href={process.env.PUBLIC_URL + "fontawesome/css/all.css"} />
            <link rel="stylesheet" href={process.env.PUBLIC_URL + "fontawesome/css/fontawesome.css"} />

            <link rel="stylesheet" href={process.env.PUBLIC_URL + "static/bootstrap2.min.css"} />
            <link rel="stylesheet" href={process.env.PUBLIC_URL + "font-awesome-animation/css/font-awesome-animation.css"} />
            <script src={process.env.PUBLIC_URL + "fontawesome/js/all.js"}></script>
            <script src={process.env.PUBLIC_URL + "static/js/jquery.slim.min.js"}></script>
            <script src={process.env.PUBLIC_URL + "static/js/popper.min.js"}></script>
            <script src={process.env.PUBLIC_URL + "static/js/bootstrap.min.js"}></script>
            <script src={process.env.PUBLIC_URL + "static/bootstrap/js/bootstrap.js"}></script>
            <link rel="stylesheet" href={process.env.PUBLIC_URL + "static/style.css"} />

            <script src="/public/static/js/utils2.js"></script>
            <script src={process.env.PUBLIC_URL + "static/js/telinputs.js"}></script>
            <script src={process.env.PUBLIC_URL + "static/js/itlinputs.min.js"}></script>
            <link rel="stylesheet" href={process.env.PUBLIC_URL + "static/itlinput.css"}></link>

            <nav className="container navbar navbar-expand-lg navbar-dark bg-dark p-0">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/"><i className="fa fa-home"></i>Home</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ">
                            <li className="nav-item px-5">
                                <a href="#" className="nav-link" data-bs-target="#choicemodal" data-bs-toggle="modal">
                                    <i></i>view cows
                                </a>
                            </li>
                            <li className="nav-item px-5">
                                <a href="/login" className="nav-link">
                                    <i className="fa fa-sign-in-alt"></i>staff login
                                </a>
                            </li>
                            <li className="nav-item px-5">
                                <a href="" className="nav-link">
                                    <i className="fa fa-sign-in-alt"></i>farm login
                                </a>
                            </li>
                            <li className="nav-item px-5">
                                <a href="" className="nav-link">
                                    <i className="fa fa-sign-in-alt"></i>customer login
                                </a>
                            </li>
                            <li className="nav-item px-5">
                                <a href="" className="nav-link">
                                    <i className="fas fa-user-plus"></i>user signup
                                </a>
                            </li>
                        </ul>

                        <ul className="navbar-nav navbar-right ms-auto mb-2 mb-lg-0">
                            <li className="nav-item mr-auto">
                                <span className="dropdown-toggle mt-4" type="button" id="dropdownMenuButton1" data-toggle="dropdown" aria-expanded="false"><b className="text-white"><i className="fa fa-question-circle" ></i>Need help</b></span>
                                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                    <li>
                                        <a className="dropdown-item" href="">
                                            <i className=""></i>help to login
                                        </a>

                                    </li>
                                    <li>
                                        <a className="" href="">
                                            <i className=""></i>help to buy cow
                                        </a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="">
                                            <i className=""></i>help to purchase milk
                                        </a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="">
                                            <i className=""></i>help to reset password
                                        </a>
                                    </li>
                                </ul>
                            </li>

                        </ul>



                    </div>
                </div>
            </nav>
        </div>
    );
}