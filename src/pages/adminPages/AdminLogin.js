const AdminLogin = () => {
  return (
    <div>
      <div
        className="modal modal-signin position-static d-block bg-yellow py-5 min-vh-100 "
        tabIndex="-1"
        role="dialog"
        id="modalSignin">
        <div className="modal-dialog" role="document">
          <div className="modal-content rounded-4 shadow adminLogin">
            <div className="p-5 pb-3 text-center">
              <h3>LOGO HERE</h3>
            </div>
            <div className="text-center pb-3 border-bottom-0 ">
              <h1 className="fw-bold mb-0 fs-2 color-orange">Admin Login</h1>
            </div>

            <div className="modal-body p-5 pt-0">
              <form className="">
                <div className="form-floating mb-3">
                  <input
                    type="email"
                    className="form-control rounded-3 border border-dark"
                    id="floatingInput"
                    placeholder="name@example.com"
                  />
                  <label htmlFor="floatingInput">Email address</label>
                </div>
                <div className="form-floating mb-3">
                  <input
                    type="password"
                    className="form-control rounded-3 border border-dark"
                    id="floatingPassword"
                    placeholder="Password"
                  />
                  <label htmlFor="floatingPassword">Password</label>
                </div>
                <button className="w-100 mb-2 btn btn-lg rounded-3 submitBtn" type="submit">
                  Login
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
