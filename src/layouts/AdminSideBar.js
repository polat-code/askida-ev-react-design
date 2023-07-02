import { pages } from '../constants/pages';
import MenuItem from '../components/MenuItem';

const AdminSideBar = () => {
  return (
    <div className="col-md-2 bg-dark">
      <div className="position-sticky min-vh-100">
        <div className="list-group list-group-flush  pt-2">
          {Object.keys(pages.adminPages).map((page, index) => {
            return (
              <MenuItem
                item={pages.adminPages[page]}
                classes="list-group-item sideBarItem bg-dark list-group-item-action pt-3 ripple"
                key={`sideBar${index}`}
              />
            );
          })}
        </div>
      </div>
      <div className="mx-3 pb-3">
        <MenuItem
          item={pages.otherPages.logout}
          classes="list-group-item sideBarItem bg-dark list-group-item-action pt-3 ripple"
        />
      </div>
    </div>
  );
};

export default AdminSideBar;
