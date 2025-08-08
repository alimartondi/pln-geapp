type NavLink = {
  to: string;
  label: string;
};

type MobileMenuProps = {
  links: NavLink[];
};

export default function DesktopMenu({ links }: MobileMenuProps) {
  return (
    <ul className="flex gap-6">
      {links.map((link, i) => (
        <li key={i}>
          <a
            className="font-semibold hover:underline transition-all duration-300"
            href={link.to}
          >
            {link.label}
          </a>
        </li>
      ))}
    </ul>
  );
}
