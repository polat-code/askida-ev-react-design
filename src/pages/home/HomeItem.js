import PropTypes from 'prop-types';

const HomeItem = ({ item }) => {
  return (
    <div className="row d-flex text-center">
      <div>
        <img src={item.imageUrl} className="homeIcon" alt="Mission" />
      </div>
      <div>
        <h3 className="fs-2 color-orange">{item.title}</h3>
        <p>{item.text}</p>
      </div>
    </div>
  );
};

HomeItem.propTypes = {
  item: PropTypes.object
};

HomeItem.defaultProps = {};
export default HomeItem;
