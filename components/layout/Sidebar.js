import React from 'react'
import Link from 'next/link'

const Sidebar = props => {
  const { toggleSidebar, sideOpen } = props
  return (
    <aside className={sideOpen ? 'on-sidebar': ''}>
      <ul>
        <li>
          <Link href="/">
            <a>
              home
            </a>
          </Link>
        </li>
        <li>
          <Link href="/menu1">
            <a>
              menu1
            </a>
          </Link>
        </li>
      </ul>
      <button onClick={toggleSidebar}>
        x
      </button>
    </aside>
  )
}

export default Sidebar
