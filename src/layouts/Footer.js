import { pages } from '../constants/pages';
import MenuItem from '../components/MenuItem';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <section className="bg-green">
      <div className="container">
        <footer className="py-3">
          <ul className="nav justify-content-center border-bottom pb-3 mb-3 ">
            {Object.keys(pages.userPages).map((page, index) => (
              <MenuItem
                item={pages.userPages[page]}
                classes="menuItem me-1 p-2"
                key={`FooterItem${index}`}
                footer
              />
            ))}
          </ul>
          <p className="text-center color-whitesmoke">
            &copy; {currentYear} Askıda Ev. Tüm Hakları Saklıdır.
          </p>
        </footer>
      </div>
    </section>
  );
};

export default Footer;
