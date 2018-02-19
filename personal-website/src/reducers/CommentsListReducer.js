export default function CommentsList(
    state = [
        {
            author: 'Rohan Elukurthy',
            commentData: 'This post is some bullshit'
        },
        {
            author: 'Eden Hazard',
            commentData: 'I am goona beat the shit out of Barcelona'
        }
    ],
    action
){
    if(action.type === "COMMENT_SUBMITTED"){
        return [{author: action.event[0], commentData: action.event[1]}, ...state]
    }
    else{
        return state
    }
}