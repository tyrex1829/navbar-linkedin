// code for atom family, here rendering todos.
import "./App.css";
import { RecoilRoot, useRecoilState, useRecoilValue } from "recoil";
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
  const currentTodo = useRecoilValue(todosAtomFamily(id));

  return (
    <>
      <h2>{currentTodo.title}</h2>
      <p>{currentTodo.description}</p>
      <br />
    </>
  );
}

export default Appz;
