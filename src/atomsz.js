import { atomFamily, selectorFamily } from "recoil";
import { TODOS } from "./todos";
import axios from "axios";

// for hard coded todo, atom family
// export const todosAtomFamily = atomFamily({
//   key: "todosAtomFamily",
//   default: (id) => {
//     return TODOS.find((x) => x.id === id);
//   },
// });

// fetch from beckend, selector family
export const todosAtomFamily = atomFamily({
  key: "todosAtomFamily",
  default: selectorFamily({
    key: "todoSelectorFamily",
    get:
      (id) =>
      async ({ get }) => {
        const res = await axios.get(
          `https://sum-server.100xdevs.com/todo?id=${id}`
        );
        return res.data.todo;
      },
  }),
});
