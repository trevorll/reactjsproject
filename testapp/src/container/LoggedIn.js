import { useNavigate } from "react-router-dom";
import StaffNavBar from "../staffnav";
import Links from "../links";




export default function LoggedIn() {

    const getdata = async () => {
        navigate('/data');

    }
    const logout = async () => {
        localStorage.setItem('authenticated', false)
        navigate('/')
    }


    const navigate = useNavigate()
    const role = localStorage.getItem('role')

    if (role === 'cow info admin') {
        return (



            <body className="container">
                <Links />
                < StaffNavBar />

                <section id="action" className="py-4 mb-4 mt-5">
                    <div className="container">
                        <div className="row mt-3 justify-content-center">
                            <div className="col">

                                <a href="#" data-target="#cowrecordmodal" data-toggle="modal" className="btn btn-info btn-block">
                                    <i className="fa fa-plus"></i>enter cow records
                                </a>

                            </div>


                            <div className="col">
                                <a href="#" data-target="#soldcowsinfo" data-toggle="modal" className="btn btn-info btn-block">
                                    <i className=""></i>sold cows
                                </a>
                            </div>



                            <div className="col">

                                <a href="#" data-target="#cowreporthmodal" data-toggle="modal" className="btn btn-info btn-block">
                                    <i className="fa fa-print"></i>generate report
                                </a>






                            </div>

                            <div className="col">
                                <a href="#" data-target="#changepasswordmodal" data-toggle="modal" className="btn btn-danger btn-block">
                                    <i className="fa fa-pen"></i>change password
                                </a>
                            </div>

                        </div>
                    </div>
                </section>
            </body>)
    } else if (role === 'health admin' || role === 'vaccine inventory admin') {
        return (
            <body className="container">
                < StaffNavBar />

                <section id="action" className="py-4 mb-4">
                    <div className="container">
                        <div className="row mt-3 justify-content-center">
                            <div className="col">

                                <a href="#" data-toggle="modal" data-target="#enterrecordmodal" className="btn btn-info btn-block">
                                    <i className="fa fa-plus"></i>enter new details
                                </a>


                            </div>



                        </div>
                        <div className="col">

                            <a href="#" data-toggle="modal" data-target="#enterreportmodal" className="btn btn-info btn-block">
                                <i className="fa fa-print"></i>generate report
                            </a>

                            <div className="col">
                                <a href="#" data-target="#changepasswordmodal" data-toggle="modal" className="btn btn-danger btn-block">
                                    <i className="fa fa-pen"></i>change password
                                </a>
                            </div>

                        </div>
                    </div>

                </section>
            </body>
        )
    } else if (role === 'milk admin') {
        return (
            <body className="container">
                <Links />
                <div className="mb-4">< StaffNavBar /></div>
                <div>

                    <section id="action" className="py-4 mb-4 mt-5">
                        <div className="container">
                            <div className="row mt-3 justify-content-center">
                                <div className="col">

                                    <a href="#" data-target="#milkreportmodal" data-toggle="modal" className="btn btn-info btn-block">
                                        <i className="fa fa-print"></i>generate report
                                    </a>


                                </div>



                            </div>
                            <div className="col">
                                <a href="{{url_for('staffs')}}" className="btn btn-warning btn-block">
                                    <i className="fa fa-user-plus"></i>add staff
                                </a>
                            </div>
                            <div className="col">

                                <a href="#" data-target="#milkreportmodal" data-toggle="modal" className="btn btn-info btn-block">
                                    <i className="fa fa-print"></i>generate report
                                </a>
                            </div>

                            <div className="col">
                                <a href="#" data-target="#changepasswordmodal" data-toggle="modal" className="btn btn-danger btn-block">
                                    <i className="fa fa-pen"></i>change password
                                </a>
                            </div>


                        </div>

                    </section>
                </div>
            </body>


        )
    } else if (role === 'feeds admin') {
        return (
            <body className="container">
                < StaffNavBar />

                <section id="action" className="py-4 mb-4">
                    <div className="container">
                        <div className="row mt-3 justify-content-center">
                            <div className="col">

                                <a href="#" data-target="#feedrecordmodal" data-toggle="modal" data-dismiss="modal" className="btn btn-info btn-block">
                                    <i className="fa fa-plus"></i>cow feed records
                                </a>


                            </div>



                        </div>
                        <div className="col">
                            <a href="{{url_for('staffs')}}" className="btn btn-warning btn-block">
                                <i className="fa fa-user-plus"></i>add staff
                            </a>
                        </div>
                        <div className="col">

                            <a href="#" data-target="#cowfeedreportmodal" data-toggle="modal" data-dismiss="modal" className="btn btn-info btn-block">
                                <i className="fa fa-print"></i>generate report
                            </a>
                        </div>

                        <div className="col">
                            <a href="#" data-target="#changepasswordmodal" data-toggle="modal" className="btn btn-danger btn-block">
                                <i className="fa fa-pen"></i>change password
                            </a>
                        </div>


                    </div>

                </section>
            </body>

        )

    } else if (role === 'calving admin') {
        return (
            <body className="container">
                < StaffNavBar />

                <section id="action" className="py-4 mb-4">
                    <div className="container">
                        <div className="row mt-3 justify-content-center">
                            <div className="col">

                                <a href="#" data-target="#calvingmodal" data-toggle="modal" data-dismiss="modal" className="btn btn-info btn-block">
                                    <i className="fa fa-print"></i>enter records
                                </a>


                            </div>



                        </div>
                        <div className="col">

                            <a href="#" data-target="#milkreportmodal" data-toggle="modal" className="btn btn-info btn-block">
                                <i className="fa fa-print"></i>generate report
                            </a>
                        </div>

                        <div className="col">
                            <a href="#" data-target="#changepasswordmodal" data-toggle="modal" className="btn btn-danger btn-block">
                                <i className="fa fa-pen"></i>change password
                            </a>
                        </div>


                    </div>

                </section>
            </body>


        )
    }
}