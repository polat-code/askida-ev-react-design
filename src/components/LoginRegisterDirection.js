// geldiği page route a göre active yapacağız
// linklerle bağlarız
const LoginRegisterDirection = () => {
  return (
    <ul className="nav nav-justified mb-3 rounded loginRegisterDirectionTab ">
      <li className="nav-item ">
        <a
          className="nav-link loginRegisterDirection active color-whitesmoke"
          href="../../../../Desktop/askida-ev-react-yapılı olan/src/components#!"
          role="tab">
          Login
        </a>
      </li>
      <li className="nav-item">
        <a
          className="nav-link loginRegisterDirection "
          href="../../../../Desktop/askida-ev-react-yapılı olan/src/components#!"
          role="tab">
          Register
        </a>
      </li>
    </ul>
  );
};
export default LoginRegisterDirection;
