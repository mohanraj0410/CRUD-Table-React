import React from 'react'
import "../style/resgistrationForm.css"

const ResgistrationForm = () => {
    return (
        <div className="row">
            <div className="col-75">
                <div className="container1">
                    <center>
                        <h2>Gym Registration Form</h2>
                    </center>
                    <form>
                        <div className="row">
                            <div className="col-50">
                                <input
                                    type="text"
                                    id="name"
                                    required=""
                                    name="name"
                                    placeholder="Name"
                                />
                            </div>
                            <div className="col-50">
                                <input type="radio" required="" name="gender" defaultValue="MALE" />
                                MALE &nbsp;&nbsp;&nbsp;
                                <input
                                    type="radio"
                                    required=""
                                    name="gender"
                                    defaultValue="FEMALE"
                                />
                                FEMALE
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-50">
                                <input type="email" name="email" required="" placeholder="Email" />
                            </div>
                            <div className="col-50">
                                <input type="number" name="phone" required="" placeholder="Phone" />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-50">
                                <input
                                    type="text"
                                    id="name"
                                    required=""
                                    name="current_wt"
                                    placeholder="Your current weight (lbs)"
                                />
                            </div>
                            <div className="col-50">
                                <input
                                    type="text"
                                    id="name"
                                    required=""
                                    name="desire_wt"
                                    placeholder="Desired weight (lbs)"
                                />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-50">
                                <input type="text" name="height" required="" placeholder="Height" />
                            </div>
                            <div className="col-50">
                                <input type="text" name="BMI" placeholder="BMI" />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-50">
                                <textarea
                                    name="address"
                                    id="address"
                                    rows={2}
                                    placeholder="Address"
                                    defaultValue={""}
                                />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-50">
                                <input type="text" name="city" required="" placeholder="City" />
                            </div>
                            <div className="col-50">
                                <input type="text" name="state" required="" placeholder="State" />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-50">
                                <input
                                    type="number"
                                    name="zip_code"
                                    required=""
                                    placeholder="Zip Code"
                                />
                            </div>
                            <div className="col-50">
                                <input
                                    type="text"
                                    name="country"
                                    required=""
                                    placeholder="Country"
                                />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-50">
                                <label>Do you require a personal trainer?</label>
                                <br />
                                <br />
                                <input
                                    type="radio"
                                    name="personal_trainer"
                                    defaultValue="Yes"
                                />{" "}
                                Yes <br />
                                <br />
                                <input
                                    type="radio"
                                    name="personal_trainer"
                                    defaultValue="No"
                                /> No <br />
                                <br />
                            </div>
                            <div className="col-50">
                                <label>Have you been in a Gym before?</label>
                                <br />
                                <br />
                                <input
                                    type="radio"
                                    required=""
                                    name="gym_before"
                                    defaultValue="Yes"
                                />{" "}
                                Yes <br />
                                <br />
                                <input
                                    type="radio"
                                    required=""
                                    name="gym_before"
                                    defaultValue="No"
                                />{" "}
                                No <br />
                                <br />
                            </div>
                        </div>
                        <input type="submit" defaultValue="Apply" className="btn" />
                    </form>
                </div>
            </div>
        </div>

    )
}

export default ResgistrationForm