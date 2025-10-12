
export default function NavLink({ title, href, external = false }: NavItem) {
  return (
    <li>
      <a
        href={href}
        target={external ? "_blank" : undefined}
        aria-label={`Go to ${title} page`}
        className="cursor-pointer opacity-60 hover:opacity-100"
      >
        {title}
      </a>
    </li>
  )
}
