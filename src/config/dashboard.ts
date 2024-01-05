import type { icons } from 'lucide-react'

export type DashboardConfig = {
  mainNav: NavItem[]
  sidebarNav: SidebarNavItem[]
}

export type NavItem = {
  title: string
  href: string
  disabled?: boolean
}

export type SidebarNavItem = {
  title: string
  disabled?: boolean
  external?: boolean
  icon?: keyof typeof icons
} & {
  href: string
  items?: never
}

export const dashboardConfig: DashboardConfig = {
  mainNav: [
    { title: 'Documentation', href: '/docs' },
    { title: 'Support', href: '/support', disabled: true },
  ],
  sidebarNav: [
    { title: 'Posts', href: '/dashboard', icon: 'FileText' },
    { title: 'Billing', href: '/dashboard/billing', icon: 'CreditCard' },
    { title: 'Settings', href: '/dashboard/settings', icon: 'Settings' },
  ],
}
