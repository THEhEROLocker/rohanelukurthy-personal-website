import { connect } from "react-redux";
import CommentsList from "../components/CommentsList";
// import CommentsListReducer from "../reducers/CommentsListReducer"

const mapStateToProps = ({ CommentsListReducer }) => ({
  CommentsListReducer
});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(
  CommentsList
);