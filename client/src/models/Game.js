import { api } from "./my-fetch"

export const Game_Server = {
    Get_Hand(amount = 7){
        return api('hand')
    },
    Flip_Picture(){
        return api('picture/flip')
    },
    Get_State(){
        return api('')
    }
}

export class Player {
    name;
    points;
    captions;
}