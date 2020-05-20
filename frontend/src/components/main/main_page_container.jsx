import { connect } from 'react-redux';
import { fetchPosts, composePost, removePost, incrementLikes} from '../../actions/post_action'
import MainPage from './main_page';

const mSTP = state => {
    return {
        posts: Object.values(state.posts),
        newPost: state.posts.new
    }
}

const mDTP = dispatch => {
    return {
        composePost:(data) => dispatch(composePost(data)),
        fetchPosts: () => dispatch(fetchPosts()),
        removePost: (post) => dispatch(removePost(post)),
        incrementLikes: (post) => dispatch(incrementLikes(post))

    }
};

export default connect(mSTP, mDTP)(MainPage);
