import AddToDo from "../components/addTodo";
import ListToDo from "../components/listTodo";
import "./style.css";

const Home = () => {
  return (
    <>
      <div className="container-base">
        <div className="container-content">
          <div className="title">ToDos</div>
          <div className="quote">work and do your best!</div>
          <AddToDo />
          <ListToDo />
        </div>
      </div>
    </>
  );
};

export default Home;
