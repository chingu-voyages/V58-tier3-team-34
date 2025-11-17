import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <header>
      <nav>
        <ul className='flex justify-center gap-6 p-6'>
          <li>
            <NavLink to='/'>Home</NavLink>
          </li>
          <li>
            <NavLink to='map'>Map</NavLink>
          </li>
          <li>
            <NavLink to='list'>List</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
