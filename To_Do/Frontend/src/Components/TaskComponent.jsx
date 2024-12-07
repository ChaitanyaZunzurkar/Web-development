/* eslint-disable react/prop-types */
import style from '../Stylesheets/TaskList.module.css';

const TaskComponent = ({ task, deleteTask }) => {
  return (
    <div className={style.taskItem}>
      <div className={style.taskText}>
        {task}
      </div>
      <div className={style.deleteIcon} onClick={() => deleteTask(task)}>
        <span className="material-symbols-outlined">delete</span>
      </div>
    </div>
  );
};

export default TaskComponent;
