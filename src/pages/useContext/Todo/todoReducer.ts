export const enum todoTypes {
    ADD_TODO,
    DELETE_TODO,
  }
  
  export type ActionType = {
    type: todoTypes;
    payload: number | string;
  };
  
  export type TodoType = {
    id: number;
    todoName: string;
    completed: boolean;
  };
  
  export const initState: TodoType[] = [];
  
  export const todoReducer = (state: TodoType[], action: ActionType): TodoType[] => {
    switch (action.type) {
      case todoTypes.ADD_TODO: {
        const newTodo: TodoType = {
          id: state.length ? state[state.length - 1].id + 1 : 1,
          todoName: action.payload as string,
          completed: false,
        };
        return [...state, newTodo];
      }
      case todoTypes.DELETE_TODO:
        return state.filter((todo) => todo.id !== (action.payload as number));
      default:
        return state;
    }
  };
  