import { NavLink } from 'react-router-dom';

const navItems = [
  { to: '/', label: '홈' },
  { to: '/packs', label: '팩 보관함' },
  { to: '/shop', label: '상점' },
  { to: '/cards', label: '카드 보관함' },
  { to: '/squad-builder', label: '스쿼드 빌더' },
  { to: '/gallery', label: '갤러리' },
];

function Navbar() {
  return (
    <nav className="navbar" aria-label="주요 메뉴">
      {navItems.map((item) => (
        <NavLink
          className={({ isActive }) => (isActive ? 'navbar__link navbar__link--active' : 'navbar__link')}
          end={item.to === '/'}
          key={item.to}
          to={item.to}
        >
          {item.label}
        </NavLink>
      ))}
    </nav>
  );
}

export default Navbar;
