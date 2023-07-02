import { pages } from '../constants/pages';
import MenuItem from '../components/MenuItem';

const Header = () => {
  return (
    <div className="bg-green">
      <div className="container bg-green">
        <div className="row py-3 d-flex align-items-center">
          <div className="col-md-3">
            <b>
              <h3>LOGO HERE</h3>
            </b>
          </div>
          <div className="col-md-9 d-flex justify-content-end">
            <ul className="nav nav-pills">
              {Object.keys(pages.userPages).map((page, index) => (
                <MenuItem
                  item={pages.userPages[page]}
                  classes="menuItem me-2 p-2"
                  key={`menuItem${index}`}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
