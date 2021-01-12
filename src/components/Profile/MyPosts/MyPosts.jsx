import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
  return (
    <div>
      My posts
      <div>New post</div>
      <div>
        <Post text = 'WoW, Wow. My first post!'/>
        <Post text = 'Hi there! I am new here.'/>
        <Post text = 'Blah Blah Blah'/>
        <Post text = 'Итить-колотить. Напишите мне кто-нибудь'/>
      </div>
    </div>
  )
}

export default MyPosts;