const Header = ({setResType}) => {
  return (
    <header className="appHeader">
      <button className="users" onClick={() => setResType('users')}>users</button>
      <button className="posts" onClick={() => setResType('posts')}>posts</button>
      <button className="comments" onClick={() => setResType('comments')}>comments</button>
    </header>
  );
}

export default Header;
