import { PROCESS, SETNUMBER } from "../actions-type/token-action-type"

export const setNumberAction = (number) => {
    return {
        type: SETNUMBER,
        payload: number
    }
   }

export const processAction = () => {
    return{
        type: PROCESS,
    }
}