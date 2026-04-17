
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import DashboardResentCard from './DashboardResentCard'
export default function DashboardRecentData() {
    const Dash = useNavigate()
     const dashboardData = [
            {
      id: 1,
      title: 'abuja mining sites analysis',
      status: 'survey',
      action: 'draft',
      timeStamp: '2026-02-25',
      objective: 'Resource Exploration',
      Content: 'Mineral exploration in FCT region',
      buttonContent: 'Open Project',
      linking: '/dashboard/survey/1'
    },
    {
      id: 2,
      title: 'Lagos Coastal Survey',
      status: 'survey',
      action: 'active',
      timeStamp: '2026-02-28',
      objective: 'Environmental Assessment',
      Content: 'Geophysical survey of coastal erosion',
      buttonContent: 'Open Project',
      linking: '/dashboard/survey/1'
    },
    {
      id: 3,
      title: 'Lagos Coastal execution',
      status: 'project plan',
      action: 'active',
      timeStamp: '2026-02-28',
      objective: 'Environmental Assessment',
      Content: 'Geophysical survey of coastal erosion',
      buttonContent: 'Open Project',
      linking: '/dashboard/project/3'
    },
    
        ]
        const handleDataPath = (path) => {
          Dash(path)
        }
  return (
    <div>
        <DashboardResentCard DashData={dashboardData} handleDataPath={handleDataPath} />
    </div>
  )
}
