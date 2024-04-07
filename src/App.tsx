import './App.css';

const App = () => {
  return (
    <div className="app-wrapper">
      <header className='header'>
        <img src="https://w7.pngwing.com/pngs/361/692/png-transparent-dune-dune-movie-dune-movie-icon-dune-logo-dune-movie-symbol-science-fiction-thumbnail.png" alt="" />
      </header>
      <nav className='nav'>
        <div><a href="#1">Profilea</a></div>
        <div><a href="#2">Messages</a></div>
        <div><a href="#3">News</a></div>
        <div><a href="#4">Music</a></div>
        <div><a href="#5">Settings</a></div>
      </nav>
      <div className='content'>
        <div>
          <img className='imgBG' src="https://static-cse.canva.com/blob/685002/vk1524.aa027f62.avif" alt="" />
        </div>
        <div>
          <img className='imgAvatar' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJKLA-bQAxJ2YuKnn2En4cyxW8CowV4Q6kc_7GCJxDWg&s" alt="" />
        </div>
        <div>my posts
          <div>new post</div>
          <div>
            <div>post1</div>
            <div>post2</div>
            <div>post3</div>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default App;
