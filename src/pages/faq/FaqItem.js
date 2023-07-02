import PropTypes from 'prop-types';

const FaqItem = ({ item, index }) => {
  return (
    <div className="card">
      <div className="card-header bg-green" id={`heading${index}`}>
        <h2 className="mb-0">
          <button
            className="btn btn-link faqButton"
            type="button"
            data-toggle="collapse"
            data-target={`#collapse${index}`}
            aria-expanded="true"
            aria-controls={`collapse${index}`}>
            <i className="fa-sharp fa-solid fa-angles-right pe-1"></i>
            {item.title}
          </button>
        </h2>
      </div>
      <div
        id={`collapse${index}`}
        className="collapse"
        aria-labelledby={`heading${index}`}
        data-parent="#accordionExample">
        <div className="card-body">{item.text}</div>
      </div>
    </div>
  );
};
FaqItem.propTypes = {
  item: PropTypes.object,
  index: PropTypes.number
};

FaqItem.defaultProps = {};
export default FaqItem;
