import { useTodoDispatch } from "../App";
import { Todo } from "../types"

interface Props extends Todo {
}

export default function TodoItem(props: Props) {
  const dispatch = useTodoDispatch();

  const onClickButton = () => {
    dispatch.onClickDelete(props.id)
  }

  return (
    <div key={props.id}>
      <span>{props.id}번:</span>
      <span>{props.content}</span>
      <button onClick={onClickButton}>x</button>
    </div>
  );
}