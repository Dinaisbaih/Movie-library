import "tailwindcss/tailwind.css";
const MovieList = () => {
  return (
    <section>
      <header>
        <h2>Projects</h2>
        <button style={{ width: "60px", height: "40px" }}>New</button>
      </header>
      <form>
        <svg>
          <path />
        </svg>
        <input
          type="text"
          aria-label="Filter projects"
          placeholder="Filter projects"
        />
      </form>
      <ul>
        <li>
          <a href="item.url">
            <dl>
              <div>
                <dt>Sherlock Holmes</dt>
              </div>
              <div>
                <dt>Category</dt>
              </div>
              <div>
                <dd>
                  <img
                    src="user.avatar"
                    alt="user.name"
                    width="48"
                    height="48"
                  />
                </dd>
              </div>
            </dl>
          </a>
        </li>
        <li>
          <a href="/new">New Project</a>
        </li>
      </ul>
    </section>
  );
};

export default MovieList;
