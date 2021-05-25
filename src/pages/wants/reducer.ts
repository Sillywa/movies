import {ADD_WANT} from "./actions"

interface IAction {
  type: string;
  [propertyName:string]:any;
}
const reducer = (state:Array<Object> = [], action:IAction):Array<Object> => {
  switch(action.type){
    case ADD_WANT:
      return [
        ...state,
        action.data
      ]
    default:
      return state
  }
}
export default reducer