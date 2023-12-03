export default function Header({ logo }) {
  return (
    <header>
      <nav className="flex flex-between f-inter">
        <div className="flex">
          <img src={logo} className="logo" />
          <h3 className="cyan">ReactFacts</h3>
        </div>

        <div>
          React Couse - Project 1
        </div>
      </nav>

    </header>
  )
};
