import { useEffect, useState } from 'react';
import './App.scss';
import ButtonContainer from './ButtonContainer';
import JobDesc from './JobDesc';
import loading from './assets/loading.svg';
const url = 'https://course-api.com/react-tabs-project';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [jobList, setJobList] = useState([]);
  const [indexActive, setIndexActive] = useState(0);
  const fetchJobList = async () => {
    const response = await fetch(url);
    const resJobList = await response.json();
    setJobList(resJobList);
    setIsLoading(false);
  };
  useEffect(() => {
    fetchJobList();
  }, []);
  if (isLoading) {
    return (
      <div className='container-loading'>
        <img
          src={loading}
          alt='Loading'
        />
      </div>
    );
  }
  return (
    <div className='container-main'>
      <ButtonContainer
        jobList={jobList}
        setIndexActive={setIndexActive}
        indexActive={indexActive}
      />
      <JobDesc
        jobList={jobList}
        indexActive={indexActive}
      />
    </div>
  );
}

export default App;
