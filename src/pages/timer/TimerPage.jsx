import "./Timer.css";
import { Link, useLocation } from "react-router-dom";
import { Timer } from "./Timer";

const TimerPage = () => {
    const location = useLocation();
    const { title, time, breakTime, desc } = location.state?.task;

  return (
    <div>
      <main >
        <section>
          <Timer breakTime={breakTime} time={time} />
        </section>
        <section>
          <h4>{title} </h4>
          <p>{desc}</p>
          <Link to="/home">
            Done? Go Back to the Task List
          </Link>
        </section>
      </main>
    </div>
  );
};
export { TimerPage };