import FaqItem from './FaqItem';
import { faqExamples } from '../../constants/faqExamples';

const FAQ = () => {
  return (
    <div className="container min-vh-100 mb-2 mt-2">
      <div className="accordion" id="accordionExample">
        {faqExamples.map((item, index) => {
          return <FaqItem item={item} key={`faqItem${index}`} index={index} />;
        })}
      </div>
    </div>
  );
};

export default FAQ;
