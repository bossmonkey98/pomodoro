import "./Timer.css";
import { Link,  useParams } from "react-router-dom";
import { Timer } from "./Timer";
import { useTask } from "../../context/task-context";
import { taskType } from "../../context/task-context.type";

const TimerPage = () => {
  const { id } = useParams();
  const { taskState } = useTask()
  const [task] = taskState.taskList.filter((i:any|taskType[]) => i._id === id)
  const {title,breakTime,desc,time} = task
  
  return (
    <div >
       <main >
        <section>
          <Timer breakTime={breakTime} time={time} />
        </section>
        <section className="txt">
          <h4>{title} </h4>
          <p>{desc}</p>
          <Link to="/task">
            Done? Go Back to the Task List
          </Link>
        </section>
      </main>
    </div>
  );
};
export { TimerPage };