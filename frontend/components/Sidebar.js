import Link from 'next/link'

const Sidebar = () => {
  return (
    <div className="sidebar">
      <nav>
        <ul>
          <li>
            <Link href="/dashboard">
              <a>Dashboard</a>
            </Link>
          </li>
          <li>
            <Link href="/import">
              <a>Importação CSV</a>
            </Link>
          </li>
          <li>
            <Link href="/products">
              <a>Produtos</a>
            </Link>
          </li>
          <li>
            <Link href="/settings">
              <a>Configurações</a>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Sidebar
