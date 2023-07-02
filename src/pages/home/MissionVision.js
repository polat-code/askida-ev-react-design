import home from '../../constants/home';
import HomeItem from './HomeItem';

const MissionVision = () => {
  return (
    <section className="bg-yellow">
      <div className="container px-4 py-5 bg-yellow " id="hanging-icons">
        <div className="row g-4 py-5 row-cols-1 row-cols-lg-3">
          {home.map((item, index) => {
            return <HomeItem item={item} key={`homeItem${index}`} />;
          })}
        </div>
      </div>
    </section>
  );
};
export default MissionVision;
