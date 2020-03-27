import React from 'react'
import Link from 'next/link'

const Sidebar = props => {
  const { toggleSidebar, sideOpen } = props
  return (
    <aside className={sideOpen ? 'on-sidebar': ''}>
      <div>
      <ul>
        <li>
          <Link href="/">
            <a>
              home
            </a>
          </Link>
        </li>
        <li>
          <Link href="/search">
            <a>
              search
            </a>
          </Link>
        </li>
        <li>
          <Link href="/search-class">
            <a>
              search class
            </a>
          </Link>
        </li>
        <li>
          <Link href="/todos">
            <a>
              todos
            </a>
          </Link>
        </li>
        <li>
          <Link href="/posts">
            <a>
              posts
            </a>
          </Link>
        </li>
      </ul>
      </div>
      <button className='btn--sidebar-toggle' onClick={toggleSidebar}>
        x
      </button>
    </aside>
  )
}

export default Sidebar
