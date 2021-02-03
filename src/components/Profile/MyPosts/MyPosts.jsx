import AddPostContainer from './AddPost/AddPostContainer';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
  let postsElements = props.state.postsData.map(p => <Post text={p.text} />);

  return (
    <div>
      <h3>My posts</h3>
      <AddPostContainer />
      <div className={s.posts}>
        {postsElements}
      </div>
    </div>
  )
}

export default MyPosts;