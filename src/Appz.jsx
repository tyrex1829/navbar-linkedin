// code for atom family, here rendering todos.
import "./App.css";
import {
  RecoilRoot,
  useRecoilState,
  useRecoilStateLoadable,
  useRecoilValue,
} from "recoil";
import { todosAtomFamily } from "./atomsz";

function Appz() {
  return (
    <RecoilRoot>
      <Todo id={1} />
      <Todo id={2} />
    </RecoilRoot>
  );
}

function Todo({ id }) {
  const [currentTodo, setCurrentTodo] = useRecoilStateLoadable(
    todosAtomFamily(id)
  );

  if (currentTodo.state === "loading") {
    return <h2>"loading..."</h2>;
  } else if (currentTodo.state === "hasValue") {
    return (
      <>
        <h2>{currentTodo.contents.title}</h2>
        <p>{currentTodo.contents.description}</p>
        <br />
      </>
    );
  } else if (currentTodo.state === "hasError") {
    return <div>Error while getting data from backend</div>;
  }
}

export default Appz;
