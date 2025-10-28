"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import type React from "react"
import { cn } from "@/lib/utils"
import { Separator } from "@/components/ui/separator"
import { ChevronRight, type LucideIcon } from "lucide-react"
import * as LucideIcons from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
  SidebarFooter,
} from "@/components/ui/sidebar"

interface NavItem {
  title: string
  href: string
  icon: string // Changed from LucideIcon to string
}

interface NavGroup {
  title: string
  items: NavItem[]
}

interface SidebarLayoutProps {
  title: string
  subtitle: string
  icon: string // Changed from LucideIcon to string
  menuItems: NavItem[]
  footerContent?: React.ReactNode
  // Optional: for dynamic groups like in Teacher Dashboard
  additionalGroups?: NavGroup[]
}

export function SidebarLayout({
  title,
  subtitle,
  icon: IconName,
  menuItems,
  footerContent,
  additionalGroups,
}: SidebarLayoutProps) {
  const pathname = usePathname()
  const Icon = LucideIcons[IconName as keyof typeof LucideIcons];

  if (!Icon) {
    console.error(`Unknown icon: ${IconName}`);
    return null; // Or render a fallback icon
  }

  return (
    <Sidebar>
      <SidebarHeader className="border-b border-gray-200 p-4">
        <div className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
            <Icon className="h-6 w-6 text-primary-foreground" />
          </div>
          <div>
            <h2 className="text-lg font-semibold text-gray-900">{title}</h2>
            <p className="text-xs text-gray-600">{subtitle}</p>
          </div>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Navigation</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => {
                const isActive = pathname === item.href
                const ItemIcon = LucideIcons[item.icon as keyof typeof LucideIcons];
                if (!ItemIcon) {
                  console.error(`Unknown item icon: ${item.icon}`);
                  return null; // Or render a fallback icon
                }
                return (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton
                      asChild
                      className={cn(
                        "text-gray-900",
                        isActive ? "bg-green-100 text-green-700" : "hover:bg-green-50 hover:text-green-700"
                      )}
                    >
                      <Link href={item.href}>
                        <ItemIcon className="h-4 w-4" />
                        <span>{item.title}</span>
                        {isActive && <ChevronRight className="ml-auto h-4 w-4" />}
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                )
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {additionalGroups &&
          additionalGroups.map((group) => (
            <div key={group.title} className="space-y-6 mt-6">
              <Separator className="bg-gray-200" />
              <div>
                <SidebarGroup>
                  <SidebarGroupLabel>{group.title}</SidebarGroupLabel>
                  <SidebarGroupContent>
                    <SidebarMenu>
                      {group.items.map((item) => {
                        const isActive = pathname === item.href
                        const GroupItemIcon = LucideIcons[item.icon as keyof typeof LucideIcons];
                        if (!GroupItemIcon) {
                          console.error(`Unknown group item icon: ${item.icon}`);
                          return null; // Or render a fallback icon
                        }
                        return (
                          <SidebarMenuItem key={item.title}>
                            <SidebarMenuButton
                              asChild
                              className={cn(
                                "text-gray-900",
                                isActive ? "bg-green-100 text-green-700" : "hover:bg-green-50 hover:text-green-700"
                              )}
                            >
                              <Link href={item.href}>
                                <GroupItemIcon className="h-4 w-4" />
                                <span>{item.title}</span>
                                {isActive && <ChevronRight className="ml-auto h-4 w-4" />}
                              </Link>
                            </SidebarMenuButton>
                          </SidebarMenuItem>
                        )
                      })}
                    </SidebarMenu>
                  </SidebarGroupContent>
                </SidebarGroup>
              </div>
            </div>
          ))}
      </SidebarContent>
      <SidebarFooter className="border-t border-gray-200 p-4">
        {footerContent || <p className="text-xs text-gray-600 text-center">© 2025 Ghana SHS Management</p>}
      </SidebarFooter>
    </Sidebar>
  )
}
