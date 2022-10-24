import React from 'react'
import './login.css'

function Login() {
  return (
    <section className="h-100 gradient-form bg1" style={{backgroundColor: "#eee"}}>
        <div className="container py-5 ">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-xl-10">
              <div className="card rounded-3 text-black">
                <div className="row g-0">
                  <div className="col-lg-6">
                    <div className="card-body p-md-5 mx-md-4">
      
                      <div className="text-center">
                        <img src="./statics/icecrown.png"
                          width="185px" alt="logo"/>
                        <h3 className="mt-1 mb-5 pb-1"><b>Creampire|Log in</b></h3>
                      </div>
      
                      <form>
      
                        <div className="form-outline mb-4">
                          <input type="email" id="form2Example11" className="form-control"
                            placeholder="Username" />
                        </div>
      
                        <div className="form-outline mb-4">
                          <input type="password" id="form2Example22" className="form-control"  placeholder="Password" />
                        </div>
      
                        <div className="text-center pt-1 mb-5 pb-1">
                          <button className="btn1 btn-primary btn-block fa-lg gradient-custom-2 " type="button">Log
                            in</button> <br/>
                            <a className="text-muted" href="#!">Forgot password?</a>
                        </div>
      
                      </form>
      
                    </div>
                  </div>
                  <div className="col-lg-6 d-flex align-items-center gradient-custom-2">
                    <div className="card-body p-md-5 mx-md-4">
      
                        <div className="text-center">
                          <img src="./statics/icecrown.png"
                            width= "185px;" alt="logo"/>
                          <h3 className="mt-1 mb-5 pb-1"><b>Creampire|Sign Up</b></h3>
                        </div>
        
                        <form>
                          <div className="form-outline mb-4">
                            <input type="Name" id="form2Example11" className="form-control"
                              placeholder="Username" />
                          </div>
        
                          <div className="form-outline mb-4">
                            <input type="email" id="form2Example11" className="form-control"
                              placeholder="Email" />
                          </div>
        
                          <div className="form-outline mb-4">
                            <input type="password" id="form2Example22" className="form-control"  placeholder="Password" />
                          </div>
        
                          <div className="text-center pt-1 mb-5 pb-1">
                            <button className="btn1 btn-primary btn-block fa-lg gradient-custom-2 " type="button">Sign up</button>
                          </div>
                          
        
                          <div className="form-check d-flex justify-content-center mb-5">
                            <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3cg" />
                            <label className="form-check-label" htmlFor="form2Example3g">
                              I agree all statements in <a href="#!" className="text-body"><u>Terms of service</u></a>
                            </label>
                          </div>
        
                        </form>
        
                      </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default Login