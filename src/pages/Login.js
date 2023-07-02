import LoginRegisterDirection from '../components/LoginRegisterDirection';
import SocialMediaLoginRegisterPart from '../components/SocialMediaLoginRegisterPart';

const Login = () => {
  return (
    <>
      <section className="bg-yellow pb-4 d-flex justify-content-center">
        <div className="p-4 m-4 loginRegisterForm">
          <LoginRegisterDirection />
          <div className="tab-content d-flex justify-content-center">
            <form style={{ width: '65%' }}>
              <SocialMediaLoginRegisterPart />
              <p className="text-center">or:</p>
              <div className="form-outline mb-4">
                <input type="email" id="loginName" className="form-control" />
                <label className="form-label" htmlFor="loginName">
                  Email
                </label>
              </div>

              <div className="form-outline mb-4">
                <input type="password" id="loginPassword" className="form-control" />
                <label className="form-label" htmlFor="loginPassword">
                  Password
                </label>
              </div>

              <div className="row mb-4">
                <div className="col-md-6 d-flex justify-content-center">
                  <div className="form-check mb-3 mb-md-0">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="loginCheck"
                      checked
                    />
                    <label className="form-check-label" htmlFor="loginCheck">
                      Remember me
                    </label>
                  </div>
                </div>
                <div className="col-md-6 d-flex justify-content-center">
                  <a href="src/pages/login#!">Forgot password?</a>
                </div>
              </div>
              <div className="row p-4">
                <button type="submit" className="btn submitBtn btn-block mb-4">
                  Sign in
                </button>
              </div>

              <div className="text-center">
                <p>
                  Not a member? <a href="src/pages/login#!">Register</a>
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};
export default Login;
