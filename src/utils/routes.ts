import {RouteType} from '../types/routeTypes'
import React from 'react'

export const PRIVATE_ROUTERS: RouteType = [
    {
        path: '/login',
        component: React.Component
    },
]
export const PUBLIC_ROUTERS: RouteType = [
    {
        path: '/chat',
        component: React.Component
    },
]