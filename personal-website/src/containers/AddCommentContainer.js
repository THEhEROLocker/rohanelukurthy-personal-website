import { connect } from 'react-redux';
import AddComment from "../components/AddComment";

const mapDispatchToProps = dispatch => ({
    handleCommentSubmit: (author, commentData) => {
        dispatch({
            type: "COMMENT_SUBMITTED",
            event: [author, commentData]
        })
    }
});

export default connect(null, mapDispatchToProps)(
  AddComment
);