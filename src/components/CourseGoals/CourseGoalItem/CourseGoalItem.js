import React from 'react';

import './CourseGoalItem.css';

const CourseGoalItem = props => {
  // const [deleteText, setDeleteText] = useState('');

  const deleteHandler = () => {
    // setDeleteText('(Deleted!)');
    props.onDelete(props.id);
  };

  return (
    <li className="goal-item">
      {props.children}
      <button onClick={deleteHandler}>X</button>
    </li>
  );
};

export default CourseGoalItem;
