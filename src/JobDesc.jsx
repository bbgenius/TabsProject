/* eslint-disable react/prop-types */
import Duties from './Duties';

const JobDesc = ({ jobList, indexActive }) => {
  const { title, company, dates, duties } = jobList[indexActive];
  return (
    <article className='jobdesc-container'>
      <h3 className='job-title'>{title}</h3>
      <span className='job-company'>{company}</span>
      <span className='job-date'>{dates}</span>
      <Duties duties={duties} />
    </article>
  );
};

export default JobDesc;
