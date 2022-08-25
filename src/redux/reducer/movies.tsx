import * as t from "../constant/movies"

const initialState=''
const moviesList=(state=initialState,action:any)=>{
    switch(action.type){

            case t.GETMOVIES: return action.payload

        default : return state
    }
}

export default moviesList