import { useState } from 'react';
import LoginRegisterDirection from '../components/LoginRegisterDirection';
import SocialMediaLoginRegisterPart from '../components/SocialMediaLoginRegisterPart';
import { validateUser } from '../helpers/api';
import {
  showErrorNotification,
  showInfoNotification,
  showSuccessNotification
} from '../helpers/toast';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleRegisterButton = async () => {
    const resp = await validateUser({ email, password });
    if (resp.status === 200) {
      //local storage
      window.localStorage.setItem('user', JSON.stringify(resp.data));
      showSuccessNotification('Giriş Başarılı');
      navigate('/');
      navigate(0);
    } else if (resp.response.status === 404) {
      // invalid password and email
      showErrorNotification('Kullanıcı Adı veya Şifre Yanlış');
    } else if (resp.response.status === 406) {
      showInfoNotification('Lütfen Emailiniz Onaylayınız!');
    }
  };

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
                <input
                  type="email"
                  id="loginName"
                  className="form-control"
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  value={email}
                />
                <label className="form-label" htmlFor="loginName">
                  Email
                </label>
              </div>

              <div className="form-outline mb-4">
                <input
                  type="password"
                  id="loginPassword"
                  className="form-control"
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  value={password}
                />
                <label className="form-label" htmlFor="loginPassword">
                  Password
                </label>
              </div>

              <div className="row mb-4">
                <div className="col-md-6 d-flex justify-content-center">
                  <div className="form-check mb-3 mb-md-0">
                    <input className="form-check-input" type="checkbox" value="" id="loginCheck" />
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
                <button
                  type="button"
                  className="btn submitBtn btn-block mb-4"
                  onClick={handleRegisterButton}>
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
