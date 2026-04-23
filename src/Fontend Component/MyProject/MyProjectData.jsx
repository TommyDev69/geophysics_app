import React from 'react'
import MyProject from './MyProject'
import { useNavigate } from 'react-router-dom'

export default function MyProjectData() {
  const navigate = useNavigate()

  const projectData = [
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
    {
      id: 4,
      title: 'Port Harcourt Foundation Study',
      status: 'project plan',
      action: 'complete',
      timeStamp: '2026-02-28',
      objective: 'Engineering Investigation',
      Content: 'Subsurface investigation for construction',
      buttonContent: 'Open Project',
      linking: '/dashboard/project/3'
    },
    {
      id: 5,
      title: 'Port Harcourt Foundation Study',
      status: 'project plan',
      action: 'complete',
      timeStamp: '2026-02-28',
      objective: 'Engineering Investigation',
      Content: 'Subsurface investigation for construction',
      buttonContent: 'Open Project',
      linking: '/dashboard/project/3'
    }
  ]

  const handlePath = (path) => {
    navigate(path)
  }

  return (
    <div>
      <MyProject projectData={projectData} handlePath={handlePath} />
    </div>
  )
}