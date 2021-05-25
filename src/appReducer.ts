import {CHANGE_TAB} from "./appActions"
interface IAction {
  type: string;
  [propertyName:string]: any
}
const tabReducer = (state:string = "1", action:IAction) => {
  switch(action.type) {
    case CHANGE_TAB:
      return action.id;
    default:
      return state;
  }
}

export default tabReducer