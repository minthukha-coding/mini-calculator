import { ACTION } from "./App";

export default function OperationButton({ dispatch, operation }) {
  return (
    <button
      onClick={() => dispatch({ type: ACTION.CHOOSE_OPREATION, payload: { operation } })}
    >
      {operation}
    </button>
  );
}
