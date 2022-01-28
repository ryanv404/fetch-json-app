const Header = ({loadData}) => {
  return (
    <header className="appHeader">
      <button className="users" onClick={() => loadData('users')}>users</button>
      <button className="posts" onClick={() => loadData('posts')}>posts</button>
      <button className="comments" onClick={() => loadData('comments')}>comments</button>
    </header>
  );
}

export default Header;
