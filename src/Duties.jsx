import { v4 as uuidv4 } from 'uuid';
import { FaAngleDoubleRight } from 'react-icons/fa';
const Duties = ({ duties }) => {
  return (
    <div className='duties_container'>
      {duties.map((dutie) => {
        const idDuties = uuidv4();
        return (
          <div
            className='dutie_item'
            key={idDuties}
          >
            <FaAngleDoubleRight className='dutie-icon' />
            <p>{dutie}</p>
          </div>
        );
      })}
    </div>
  );
};
export default Duties;
