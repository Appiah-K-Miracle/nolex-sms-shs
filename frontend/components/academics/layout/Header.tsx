"use client"

import React from 'react'
import { LogOut, User } from 'lucide-react'

type HeaderProps = {
  userName?: string
  userEmail?: string
  onLogout?: () => void
  fixed?: boolean
}

const HeadmasterAcademicsHeader: React.FC<HeaderProps> = ({ userName = 'Headmaster Admin', userEmail = 'admin@school.edu.gh', onLogout, fixed = true }) => {
  return (
    <header className={`${fixed ? 'fixed top-0 left-0 right-0 lg:left-64 z-50' : ''} bg-white dark:bg-slate-900 border-b dark:border-slate-700`}>
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-emerald-700 flex items-center justify-center text-white font-semibold">{userName.split(' ').map(n=>n[0]).slice(0,2).join('')}</div>
            <div className="hidden sm:block">
              <div className="text-sm font-medium text-slate-900 dark:text-slate-100">{userName}</div>
              <div className="text-xs text-slate-500 dark:text-slate-400">{userEmail}</div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => onLogout?.()}
              className="inline-flex items-center gap-2 px-3 py-2 text-sm font-medium text-red-600 hover:bg-red-100 rounded-md dark:text-red-600 dark:hover:bg-red-200"
            >
              <LogOut className="w-4 h-4" />
              <span className="hidden sm:inline">Logout</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default HeadmasterAcademicsHeader