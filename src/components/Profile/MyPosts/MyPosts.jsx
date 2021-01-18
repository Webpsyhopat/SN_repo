import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {

  let postsData = [
    {id : 1, text : 'WoW, Wow. My first post!'},
    {id : 2, text : 'Hi there! I am new here.'},
    {id : 3, text : 'Blah Blah Blah'},
    {id : 4, text : 'Итить-колотить. Напишите мне кто-нибудь'},
  ]
  let postsElements = postsData.map( p => <Post text = {p.text} />);

  return (
    <div>
      <h3>My posts</h3>
      <div>

        <div>
          <textarea></textarea>
        </div>
        <div>
          <button>Написать</button>
        </div>
      </div>
      <div className = {s.posts}>
        {postsElements}
      </div>
    </div>
  )
}

export default MyPosts;