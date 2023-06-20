const ButtonContainer = ({ jobList, setIndexActive, indexActive }) => {
  return (
    <div className='btn_container'>
      {jobList.map((jobItem, index) => {
        return (
          <button
            className={index === indexActive ? 'btn_active' : 'btn'}
            key={jobItem.id}
            onClick={() => {
              setIndexActive(index);
            }}
          >
            {jobItem.company}
          </button>
        );
      })}
    </div>
  );
};
export default ButtonContainer;
