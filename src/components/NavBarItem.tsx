export function NavBarItem({ icon, label }: { icon: React.ReactNode; label: string }) {
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

export function NavBarMenuIcon({ icon }: { icon: React.ReactNode;}) {
  return (
      <button className="text-white float-right p-4 sm:hidden">
        {icon}
      </button>
  );
}
