import LoginRegisterDirection from '../components/LoginRegisterDirection';
import SocialMediaLoginRegisterPart from '../components/SocialMediaLoginRegisterPart';
import { useState } from 'react';
import { sendUserInfo } from '../helpers/api';
import { useNavigate } from 'react-router-dom';
import { showErrorNotification, showSuccessNotification } from '../helpers/toast';

const Signup = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [status, setStatus] = useState(0);
  const [password, setPassword] = useState('');
  const [validationPassword, setValidationPassword] = useState('');

  const checkFields = () => {
    if (password === '' || validationPassword === '' || password !== validationPassword) {
      showErrorNotification('Şifreler tutarlı değil!');
      return false;
    }
    const checkBox = document.getElementById('registerCheck').checked;
    if (!checkBox) {
      showErrorNotification('Lütfen sözleşmeyi onaylayınız.');
      return false;
    }
    return true;
  };
  const saveUserInfo = async () => {
    const isValid = checkFields();
    if (!isValid) {
      return;
    }
    const userInfo = {
      memberName: name,
      memberSurname: surname,
      memberPhone: phoneNumber,
      memberMail: email,
      memberPassword: password,
      memberAddress: address,
      status: status
    };
    const resp = await sendUserInfo(userInfo);
    if (resp.status === 200) {
      showSuccessNotification('Başarılı bir şekilde kaydoldunuz!');
      navigate('/login');
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
                <label className="form-label" htmlFor="registerName">
                  Name
                </label>
                <input
                  type="text"
                  onChange={(e) => setName(e.target.value)}
                  id="registerName"
                  className="form-control border border-secondary"
                  placeholder="Please enter your name"
                />
              </div>
              <div className="form-outline mb-4">
                <label className="form-label" htmlFor="registerSurname">
                  Surname
                </label>
                <input
                  type="text"
                  onChange={(e) => setSurname(e.target.value)}
                  id="registerSurname"
                  className="form-control border border-secondary"
                  placeholder="Please enter your surname"
                />
              </div>
              <div className="form-outline mb-4">
                <label className="form-label" htmlFor="registerPhone">
                  Phone number
                </label>
                <input
                  type="tel"
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  pattern="[0-9]{10}"
                  id="registerPhone"
                  className="form-control border border-secondary"
                  placeholder="Please enter your phone number"
                  value={phoneNumber}
                />
              </div>

              <div className="form-outline mb-4">
                <label className="form-label" htmlFor="registerEmail">
                  Email
                </label>
                <input
                  type="email"
                  onChange={(e) => setEmail(e.target.value)}
                  id="registerEmail"
                  className="form-control border border-secondary"
                  placeholder="Please enter your email"
                />
              </div>

              <div className="form-outline mb-4">
                <label className="form-label" htmlFor="registerAddress">
                  Addres
                </label>
                <textarea
                  id="registerAddress"
                  onChange={(e) => setAddress(e.target.value)}
                  className="form-control border border-secondary"
                  placeholder="Please enter your address"
                />
              </div>

              <label className="form-label">Üyelik amacınızı seçiniz:</label>
              <div className="form-outline mb-4 border rounded p-2 border border-secondary">
                <input
                  type="radio"
                  className="me-1 border border-secondary"
                  id="basvuru"
                  name="memberType"
                  value="Başvuru yapmak"
                  onClick={() => {
                    setStatus(1);
                  }}
                />
                <label htmlFor="basvuru" className="pe-3">
                  Başvuru yapmak
                </label>
                <input
                  type="radio"
                  id="ilan"
                  name="memberType"
                  value="İlan Vermek"
                  onClick={() => setStatus(0)}
                />
                <label htmlFor="ilan">İlan Vermek</label>
                <br />
              </div>

              <div className="form-outline mb-4">
                <label className="form-label" htmlFor="registerPassword">
                  Password
                </label>
                <input
                  type="password"
                  id="registerPassword"
                  className="form-control border border-secondary"
                  placeholder="Please enter your password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              <div className="form-outline mb-4">
                <label className="form-label" htmlFor="registerRepeatPassword">
                  Repeat password
                </label>
                <input
                  type="password"
                  id="registerRepeatPassword"
                  className="form-control border border-secondary"
                  placeholder="Please enter your password again"
                  onChange={(e) => {
                    setValidationPassword(e.target.value);
                  }}
                />
              </div>

              <div className="d-flex justify-content-center">
                <div className="form-check mb-4">
                  <input
                    className="form-check-input me-2 border border-secondary"
                    type="checkbox"
                    value=""
                    id="registerCheck"
                    aria-describedby="registerCheckHelpText"
                  />
                  <label className="form-check-label" htmlFor="registerCheck">
                    I have read and agree to the terms
                  </label>
                </div>
              </div>
              <div className="row p-4">
                <button
                  type="button"
                  className="btn submitBtn btn-block mb-3"
                  onClick={saveUserInfo}>
                  Sign up
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Signup;
