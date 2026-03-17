import React from 'react'
import SidebarContainer from './SidebarContainer'
import NavContainer from '../nav backend/NavContainer'

export default function Sidebar() {
  return (
    <div className="container-fluid">
      <NavContainer />
      <SidebarContainer />
    </div>
  )
}
