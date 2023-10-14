import { useNavigate } from "react-router-dom"


export default function StaffNavBar() {
    const navigate = useNavigate()

    const logout = async () => {
        localStorage.setItem('authenticated', false)
        navigate('/')
    }

    return (
        <><nav id="navbar_top" className=" container navbar navbar-expand-lg navbar-dark bg-dark p-0 navbar-fixed-top">
            <div className="container">
                <a className="navbar-brand"><i className="fa fa-home"></i>Back To Dashboard</a>
                <button className="navbar-toggler" type="button" data-dismiss="collapse" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="nav navbar-nav mr-auto">
                        <li>
                            <a href="{{url_for('view')}}" className="nav-link">
                                <i className="fa fa-eye"></i>view cows
                            </a>

                        </li>



                    </ul>
                    <ul className="navbar-nav navbar-right ms-auto mb-2 mb-lg-0 ">
                        <li className="nav-item">
                            <a href="#" onClick={logout} className="nav-link" style={{ textDecoration: 'none' }}>
                                <i className="fa fa-sign-out-alt"></i>logout
                            </a>
                        </li>

                        <li className="navbar-nav">
                            <a href="{{url_for('display')}}" className="nav-link mt-2">
                                <i className="fa fa-bell faa-ring animated"></i><span className="badge badge-danger badge-pill">1</span>
                            </a>
                        </li>


                    </ul>
                </div>



            </div>
        </nav><div className="mt-6"></div>
            <div className="modal fade" id="updatedetailsmodal">
                <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                        <div className="modal-header text-white bg-primary">
                            <h3 className="modal-title" id="updatedetailslabel">update details</h3>
                            <button type="button" className="close" data-dismiss="modal">&times;</button>
                        </div>
                        <div className="modal-body">
                            <form action="" method="post">
                                <div className="form-group">
                                    <label className="form-control-label" for="vaccine_name">vaccine name</label>
                                    <input type="text" className="form-control" name="vaccine_name" placeholder="vaccine name" />
                                </div>
                                <button className="btn btn-primary" type="submit">submit</button>
                            </form>

                        </div>
                    </div>
                </div>
            </div>

            <div className="modal fade" id="enterrecordmodal">
                <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                        <div className="modal-header text-white bg-primary">
                            <h3 className="modal-title" id="updatedetailslabel">enter new record</h3>
                            <button type="button" className="close" data-dismiss="modal">&times;</button>
                        </div>
                        <div className="modal-body">
                            <a href="{{url_for('health')}}" className="btn btn-primary btn-block">health details</a>
                            <a href="{{url_for('vaccineinventory')}}" className="btn btn-primary btn-block">vaccine inventory</a>

                        </div>
                    </div>
                </div>
            </div>
            <div className="modal fade" id="calvingmodal">
                <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                        <div className="modal-header text-white bg-primary">
                            <h3 className="modal-title" id="calvingmodal">enter new record</h3>
                            <button type="button" className="close" data-dismiss="modal">&times;</button>
                        </div>
                        <div className="modal-body">
                            <a href="{{url_for('calving')}}" className="btn btn-primary btn-block">calving details</a>
                            <a href="{{url_for('deathrecord')}}" className="btn btn-primary btn-block">death records</a>
                            <a href="{{url_for('inseminationrecord')}}" className="btn btn-primary btn-block">insemination record</a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="modal fade" id="milkrecordmodal">
                <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                        <div className="modal-header text-white bg-primary">
                            <h3 className="modal-title" id="milkrecordmodal">enter new record</h3>
                            <button type="button" className="close" data-dismiss="modal">&times;</button>
                        </div>
                        <div className="modal-body">
                            <a href="{{url_for('milk_sales')}}" className="btn btn-primary btn-block">milk sale</a>
                            <a href="{{url_for('milk_collections')}}" className="btn btn-primary btn-block">milk collection</a>
                            <a href="#" data-target="#spoiltmodal" data-dismiss="modal" data-toggle="modal" className="btn btn-primary btn-block">spoilt milk</a>

                        </div>
                    </div>
                </div>
            </div>

            <div className="modal fade" id="soldcowsinfo">
                <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                        <div className="modal-header text-white bg-primary">
                            <h3 className="modal-title" id="milkrecordmodal">sold cows records</h3>
                            <button type="button" className="close" data-dismiss="modal">&times;</button>
                        </div>
                        <div className="modal-body">
                            <a href="{{url_for('search_farm_inseminations')}}" className="btn btn-primary btn-block">insemination records</a>
                            <a href="{{url_for('search_farm_health_info')}}" className="btn btn-primary btn-block">health records</a>
                            <a href="{{url_for('search_farm_calvings')}}" className="btn btn-primary btn-block">calving records</a>

                        </div>
                    </div>
                </div>
            </div>
            <div className="modal fade" id="cowrecordmodal">
                <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                        <div className="modal-header text-white bg-primary">
                            <h3 className="modal-title" id="cowrecordmodal">enter new record</h3>
                            <button type="button" className="close" data-dismiss="modal">&times;</button>
                        </div>
                        <div className="modal-body">
                            <a href="{{url_for('cowinfo')}}" className="btn btn-primary btn-block">enter cow info</a>
                            <a href="{{url_for('cowscat')}}" className="btn btn-primary btn-block">cows category</a>

                        </div>
                    </div>
                </div>
            </div>
            <div className="modal fade" id="feedrecordmodal">
                <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                        <div className="modal-header text-white bg-primary">
                            <h3 className="modal-title" id="feedrecordmodal">enter new record</h3>
                            <button type="button" className="close" data-dismiss="modal">&times;</button>
                        </div>
                        <div className="modal-body">
                            <a href="{{url_for('cowfeedinventori')}}" className="btn btn-primary btn-block">cow feed inventory</a>
                            <a href="{{url_for('feed')}}" className="btn btn-primary btn-block">cow feeding record</a>

                        </div>
                    </div>
                </div>
            </div>

            <div className="modal fade" id="cowfeedreportmodal">
                <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                        <div className="modal-header text-white bg-primary">
                            <h3 className="modal-title" id="cowinforeportmodal">Print Reports</h3>
                            <button type="button" className="close" data-dismiss="modal">&times;</button>
                        </div>
                        <div className="modal-body">
                            <div><input type="radio" name="" id="cowsfeeding" />cow feeding report</div>
                            <div><input type="radio" name="" id="cowsfeedinventory" />cow feed inventory report </div>
                            <form action="{{url_for('cowsfeeding_report')}}" method="post" id="cowsfeedingform" hidden>
                                <div className="text-center"><input type="radio" name="" id="btn8" />filter by date </div>
                                <div>
                                </div>
                                <div className="input-group" id="cowsfeedingfilter" hidden>
                                    <div className="form-group col-md-6">
                                        <label className="form-control-label">start date</label>
                                        <div className='input-group date'>
                                            <input name="start" type='text' id="date14" className="form-control" readonly />
                                            <span className="input-group-addon">
                                                <span className="glyphicon glyphicon-calendar"></span>
                                            </span>
                                        </div>
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label className="form-control-label">End Date</label>
                                        <div className='input-group date'>
                                            <input name="end" type='text' id="date15" className="form-control" readonly />
                                            <span className="input-group-addon">
                                                <span className="glyphicon glyphicon-calendar"></span>
                                            </span>
                                        </div>
                                    </div>
                                    <input type="text" name="other" name="" hidden />




                                </div>
                                <input type="submit" name="" value="generate" className="btn btn-primary btn-block" />

                            </form>
                            <form action="{{url_for('cowsfeedinventory_report')}}" method="post" id="cowsfeedinventoryform" hidden>
                                <div className="text-center"><input type="radio" name="" id="btn9" />filter by date </div>
                                <div>
                                </div>
                                <div className="input-group" id="cowsfeedinventoryfilter" hidden>
                                    <div className="form-group col-md-6">
                                        <label className="form-control-label">start date</label>
                                        <div className='input-group date'>
                                            <input name="start" type='text' id="date16" className="form-control" readonly />
                                            <span className="input-group-addon">
                                                <span className="glyphicon glyphicon-calendar"></span>
                                            </span>
                                        </div>
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label className="form-control-label">End Date</label>
                                        <div className='input-group date'>
                                            <input name="end" type='text' id="date17" className="form-control" readonly />
                                            <span className="input-group-addon">
                                                <span className="glyphicon glyphicon-calendar"></span>
                                            </span>
                                        </div>
                                    </div>
                                    <input type="text" name="other" name="" hidden />




                                </div>
                                <input type="submit" name="" value="generate" className="btn btn-primary btn-block" />

                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div className="modal fade" id="milkreportmodal">
                <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                        <div className="modal-header text-white bg-primary">
                            <h3 className="modal-title" id="milkreportmodal">Print Reports</h3>
                            <button type="button" className="close" data-dismiss="modal">&times;</button>
                        </div>
                        <div className="modal-body">
                            <div><input type="radio" name="" id="milksale" />milksale report</div>
                            <div><input type="radio" name="" id="unservedmilksale" />unserved milksale report</div>
                            <div><input type="radio" name="" id="milkcollection" />milkcollection report </div>
                            <form action="{{url_for('milksale_report')}}" method="post" id="milksaleform" hidden>
                                <div className="text-center"><input type="radio" name="" id="btn6" />filter by date </div>
                                <div>
                                </div>
                                <div className="input-group" id="milksalefilter" hidden>
                                    <div className="form-group col-md-6">
                                        <label className="form-control-label">start date</label>
                                        <div className='input-group date'>
                                            <input name="start" type='text' id="date10" className="form-control" readonly />
                                            <span className="input-group-addon">
                                                <span className="glyphicon glyphicon-calendar"></span>
                                            </span>
                                        </div>
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label className="form-control-label">End Date</label>
                                        <div className='input-group date'>
                                            <input name="end" type='text' id="date11" className="form-control" readonly />
                                            <span className="input-group-addon">
                                                <span className="glyphicon glyphicon-calendar"></span>
                                            </span>
                                        </div>
                                    </div>
                                    <input type="text" name="other" hidden />




                                </div>
                                <input type="submit" name="" value="generate" className="btn btn-primary btn-block" />

                            </form>
                            <form action="{{url_for('milksale_reports')}}" method="post" id="unservedmilksaleform" hidden>
                                <div className="text-center"><input type="radio" name="" id="btn32" />filter by date </div>
                                <div>
                                </div>
                                <div className="input-group" id="unservedmilksalefilter" hidden>
                                    <div className="form-group col-md-6">
                                        <label className="form-control-label">start date</label>
                                        <div className='input-group date'>
                                            <input name="start" type='text' id="date30" className="form-control" readonly />
                                            <span className="input-group-addon">
                                                <span className="glyphicon glyphicon-calendar"></span>
                                            </span>
                                        </div>
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label className="form-control-label">End Date</label>
                                        <div className='input-group date'>
                                            <input name="end" type='text' id="date31" className="form-control" readonly />
                                            <span className="input-group-addon">
                                                <span className="glyphicon glyphicon-calendar"></span>
                                            </span>
                                        </div>
                                    </div>
                                    <input type="text" name="other" hidden />




                                </div>
                                <input type="submit" name="" value="generate" className="btn btn-primary btn-block" />

                            </form>
                            <form action="{{url_for('milkcollection_report')}}" method="post" id="milkcollectionform" hidden>
                                <div className="text-center"><input type="radio" name="" id="btn7" />filter by date </div>
                                <div>
                                </div>
                                <div className="input-group" id="milkcollectionfilter" hidden>
                                    <div className="form-group col-md-6">
                                        <label className="form-control-label">start date</label>
                                        <div className='input-group date'>
                                            <input name="start" type='text' id="date12" className="form-control" readonly />
                                            <span className="input-group-addon">
                                                <span className="glyphicon glyphicon-calendar"></span>
                                            </span>
                                        </div>
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label className="form-control-label">End Date</label>
                                        <div className='input-group date'>
                                            <input name="end" type='text' id="date13" className="form-control" readonly />
                                            <span className="input-group-addon">
                                                <span className="glyphicon glyphicon-calendar"></span>
                                            </span>
                                        </div>
                                    </div>
                                    <input type="text" name="other" hidden />




                                </div>
                                <input type="submit" name="" value="generate" className="btn btn-primary btn-block" />

                            </form>


                        </div>
                    </div>
                </div>
            </div>
            <div className="modal fade" id="enterreportmodal">
                <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                        <div className="modal-header text-white bg-primary">
                            <h3 className="modal-title" id="enterreportmodal">Print Reports</h3>
                            <button type="button" className="close" data-dismiss="modal">&times;</button>
                        </div>
                        <div className="modal-body">
                            <div><input type="radio" name="" id="health" />cow health report</div>
                            <div><input type="radio" name="" id="vaccineinventory" />vaccine inventory report </div>
                            <form action="{{url_for('vaccineinventory_report')}}" method="post" id="vaccineinventoryform" hidden>
                                <div className="text-center"><input type="radio" name="" id="btn1" />filter by date </div>
                                <div>
                                </div>
                                <div className="input-group" id="vaccineinventoryfilter" hidden>
                                    <div className="form-group col-md-6">
                                        <label className="form-control-label">start date</label>
                                        <div className='input-group date'>
                                            <input name="start" type='text' id="date" className="form-control" readonly />
                                            <span className="input-group-addon">
                                                <span className="glyphicon glyphicon-calendar"></span>
                                            </span>
                                        </div>
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label className="form-control-label">End Date</label>
                                        <div className='input-group date'>
                                            <input name="end" type='text' id="date1" className="form-control" readonly />
                                            <span className="input-group-addon">
                                                <span className="glyphicon glyphicon-calendar"></span>
                                            </span>
                                        </div>
                                    </div>
                                    <input type="text" name="other" hidden />




                                </div>
                                <input type="submit" name="" value="generate" className="btn btn-primary btn-block" />

                            </form>
                            <form action="{{url_for('healthinfo_report')}}" method="post" id="healthform" hidden>
                                <div className="text-center"><input type="radio" name="" id="btn2" />filter by date </div>
                                <div>
                                </div>
                                <div className="input-group" id="healthfilter" hidden>
                                    <div className="form-group col-md-6">
                                        <label className="form-control-label">start date</label>
                                        <div className='input-group date'>
                                            <input name="start" type='text' id="date2" className="form-control" readonly />
                                            <span className="input-group-addon">
                                                <span className="glyphicon glyphicon-calendar"></span>
                                            </span>
                                        </div>
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label className="form-control-label">End Date</label>
                                        <div className='input-group date'>
                                            <input name="end" type='text' id="date3" className="form-control" readonly />
                                            <span className="input-group-addon">
                                                <span className="glyphicon glyphicon-calendar"></span>
                                            </span>
                                        </div>
                                    </div>
                                    <input type="text" name="other" hidden />




                                </div>
                                <input type="submit" name="" value="generate" className="btn btn-primary btn-block" />

                            </form>



                        </div>
                    </div>
                </div>
            </div>
            <div className="modal fade" id="cowreporthmodal">
                <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                        <div className="modal-header text-white bg-primary">
                            <h3 className="modal-title" id="cowreportmodal">Print report</h3>
                            <button type="button" className="close" data-dismiss="modal">&times;</button>
                        </div>
                        <div className="modal-body">
                            <div><input type="radio" name="" id="check1" />filter by date of birth</div>
                            <form action="{{url_for('cowinfo_report')}}" method="POST">
                                <div>
                                </div>
                                <div className="input-group" id="action2" hidden>
                                    <div className="form-group col-md-6">
                                        <label className="form-control-label">start date</label>
                                        <div className='input-group date'>
                                            <input name="start" type='text' id="date0" className="form-control" readonly />
                                            <span className="input-group-addon">
                                                <span className="glyphicon glyphicon-calendar"></span>
                                            </span>
                                        </div>
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label className="form-control-label">End Date</label>
                                        <div className='input-group date'>
                                            <input name="end" type='text' id="date00" className="form-control" readonly />
                                            <span className="input-group-addon">
                                                <span className="glyphicon glyphicon-calendar"></span>
                                            </span>
                                        </div>
                                    </div>

                                    <input type="text" name="other" name="" hidden />



                                </div>
                                <input type="submit" name="" value="generate" className="btn btn-primary btn-block" />

                            </form>



                        </div>
                    </div>
                </div>
            </div>
            <div className="modal fade" id="changepasswordmodal">
                <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                        <div className="modal-header text-center text-white bg-danger">
                            <h2 className="modal-title" id="changepasswordlabel">Change password</h2>
                            <button type="button" data-dismiss="modal" className="close">&times;</button>
                        </div>
                        <div className="modal-body">
                            <form action="{{url_for('changepassword')}}" method="POST">
                                <div className="form-group">
                                    <label className="form-group-label">Old password</label>
                                    <input type="password" name="old_password" className="form-control" />
                                </div>
                                <div className="form-group">
                                    <label className="form-group-label">New password</label>
                                    <input type="password" minlength="6" name="new_password" className="form-control" />
                                </div>
                                <div className="form-group">
                                    <label className="form-group-label">Confirm password</label>
                                    <input type="password" minlength="6" name="confirm_password" className="form-control" />
                                </div>
                                <input type="submit" value="Change" className="btn btn-primary btn-block" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div className="modal fade" id="spoiltmodal">
                <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                        <div className="modal-header text-center text-white bg-primary">
                            <h2 className="modal-title" id="spoiltlabel">Spoilt milk</h2>
                            <button type="button" data-dismiss="modal" className="close">&times;</button>
                        </div>
                        <div className="modal-block">
                            <form action="{{url_for('spoilt_milk')}}" method="POST">
                                <div className="form-group">
                                    <label className="form-group-label">quantity</label>
                                    <input type="number" min="1" name="quantity" placeholder="quantity" className="form-control" />
                                </div>
                                <input type="submit" value="Submit" className="btn btn-primary btn-block" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            <div className="modal fade" id="calvingreportmodal">
                <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                        <div className="modal-header text-white bg-primary">
                            <h3 className="modal-title" id="calvingreportmodal">Generate Report</h3>
                            <button type="button" className="close" data-dismiss="modal">&times;</button>
                        </div>
                        <div className="modal-body">
                            <div><input type="radio" name="" id="calving" />calving report</div>
                            <div><input type="radio" name="" id="inseminations" />inseminations report </div>
                            <div><input type="radio" name="" id="death" />death report</div>
                            <form action="{{url_for('calving_report')}}" method="POST" id="calvingform" hidden>
                                <div className="text-center"><input type="radio" name="" id="btn3" />filter by date </div>
                                <div>
                                </div>
                                <div className="input-group" id="calvingfilter" hidden>
                                    <div className="form-group col-md-6">
                                        <label className="form-control-label">start date</label>
                                        <div className='input-group date'>
                                            <input name="start" type='text' id="date4" className="form-control" readonly />
                                            <span className="input-group-addon">
                                                <span className="glyphicon glyphicon-calendar"></span>
                                            </span>
                                        </div>
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label className="form-control-label">End Date</label>
                                        <div className='input-group date'>
                                            <input name="end" type='text' id="date5" className="form-control" readonly />
                                            <span className="input-group-addon">
                                                <span className="glyphicon glyphicon-calendar"></span>
                                            </span>
                                        </div>
                                    </div>
                                    <input type="text" name="other" hidden />




                                </div>
                                <input type="submit" name="" value="generate" className="btn btn-primary btn-block" />

                            </form>
                            <form action="{{url_for('death_report')}}" method="POST" id="deathform" hidden>
                                <div className="text-center"><input type="radio" name="" id="btn4" />filter by date </div>
                                <div>
                                </div>
                                <div className="input-group" id="deathfilter" hidden>
                                    <div className="form-group col-md-6">
                                        <label className="form-control-label">start date</label>
                                        <div className='input-group date'>
                                            <input name="start" type='text' id="date6" className="form-control" readonly />
                                            <span className="input-group-addon">
                                                <span className="glyphicon glyphicon-calendar"></span>
                                            </span>
                                        </div>
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label className="form-control-label">End Date</label>
                                        <div className='input-group date'>
                                            <input name="end" type='text' id="date7" className="form-control" readonly />
                                            <span className="input-group-addon">
                                                <span className="glyphicon glyphicon-calendar"></span>
                                            </span>
                                        </div>
                                    </div>
                                    <input type="text" name="other" hidden />




                                </div>
                                <input type="submit" name="" value="generate" className="btn btn-primary btn-block" />

                            </form>
                            <form action="{{url_for('inseminations_report')}}" method="POST" id="inseminationsform" hidden>
                                <div className="text-center"><input type="radio" name="" id="btn5" />filter by date </div>
                                <div>
                                </div>
                                <div className="input-group" id="inseminationsfilter" hidden>
                                    <div className="form-group col-md-6">
                                        <label className="form-control-label">start date</label>
                                        <div className='input-group date'>
                                            <input name="start" type='text' id="date8" className="form-control" readonly />
                                            <span className="input-group-addon">
                                                <span className="glyphicon glyphicon-calendar"></span>
                                            </span>
                                        </div>
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label className="form-control-label">End Date</label>
                                        <div className='input-group date'>
                                            <input name="end" type='text' id="date9" className="form-control" readonly />
                                            <span className="input-group-addon">
                                                <span className="glyphicon glyphicon-calendar"></span>
                                            </span>
                                        </div>
                                    </div>




                                </div>
                                <input type="submit" name="" value="generate" className="btn btn-primary btn-block" />

                            </form>

                        </div>
                    </div>
                </div>
            </div>




        </>
    )
}