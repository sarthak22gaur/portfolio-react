function NavBarItem({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <li>
      <a href="/">
        <div className="navbar-item">
          <i>{icon}</i>
          <span>{label}</span>
        </div>
      </a>
    </li>
  );
}
export default NavBarItem;
