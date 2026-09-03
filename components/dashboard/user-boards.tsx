import { getOrCreateUser } from '@/db/user'
import { getUserApplications } from '@/db/userApplications'
import { redirect } from 'next/navigation'
import React from 'react'

import { Separator } from '../ui/separator'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '../ui/dialog'
import { Button } from '../ui/button'
import { Textarea } from '../ui/textarea'

const UserBoards = async () => {
  const user = await getOrCreateUser()

  if (user === null) return redirect('/')

  const applications = await getUserApplications(user.id)

  let rejectedCount = 0
  let pendingCount = 0
  let acceptedCount = 0

  for (let i = 0; i < applications.length; i++) {
    if (applications[i].status === 'REJECTED') {
      rejectedCount += 1
    }

    if (applications[i].status === 'PENDING') {
      pendingCount += 1
    }

    if (applications[i].status === 'ACCEPTED') {
      acceptedCount += 1
    }
  }

  const statusStyles: Record<string, string> = {
    PENDING:
      'bg-yellow-500/10 text-yellow-400 border-yellow-500/30',

    ACCEPTED:
      'bg-green-500/10 text-green-400 border-green-500/30',

    REJECTED:
      'bg-red-500/10 text-red-400 border-red-500/30',
  }

  return (
    <>
      <div className="flex flex-col gap-y-2 items-center w-screen px-5 sm:px-8 mt-8 h-full">

        {/* Welcome */}
        <div className="w-full max-w-6xl rounded-2xl border border-mist-800 bg-mist-900/60 px-6 py-6 font-mont text-sm text-mist-400">
          Hi{' '}
          <span className="text-xl font-bold text-mist-100">
            {user.name}
          </span>
          , welcome to your dashboard.
        </div>

        <Separator className="my-5 w-full max-w-6xl bg-mist-800" />

        {/* Stats */}
        <div className="grid w-full max-w-6xl grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">

          {/* Total */}
          <div className="rounded-2xl h-40 w-full flex flex-col justify-between bg-mist-900 border-mist-800 border p-5 shadow-lg shadow-black/10">
            <div className="font-mont text-xs font-semibold uppercase tracking-wider text-mist-400">
              Total Applications
            </div>

            <div className="font-mont text-6xl font-bold text-mist-100">
              {applications.length}
            </div>
          </div>

          {/* Pending */}
          <div className="rounded-2xl text-yellow-400 h-40 w-full flex flex-col justify-between bg-yellow-500/10 border-yellow-500/30 border p-5">
            <div className="font-mont text-xs font-semibold uppercase tracking-wider text-yellow-300/70">
              Applications Pending
            </div>

            <div className="font-mont text-6xl font-bold">
              {pendingCount}
            </div>
          </div>

          {/* Rejected */}
          <div className="rounded-2xl text-red-400 h-40 w-full flex flex-col justify-between bg-red-500/10 border-red-500/30 border p-5">
            <div className="font-mont text-xs font-semibold uppercase tracking-wider text-red-300/70">
              Applicatons Rejected
            </div>

            <div className="font-mont text-6xl font-bold">
              {rejectedCount}
            </div>
          </div>

          {/* Accepted */}
          <div className="rounded-2xl text-green-400 h-40 w-full flex flex-col justify-between bg-green-500/10 border-green-500/30 border p-5">
            <div className="font-mont text-xs font-semibold uppercase tracking-wider text-green-300/70">
              Applications accepted
            </div>

            <div className="font-mont text-6xl font-bold">
              {acceptedCount}
            </div>
          </div>

        </div>

        <Separator className="my-7 w-full max-w-6xl bg-mist-800" />
        <div className="mb-4 w-full max-w-6xl font-mont text-xs font-semibold uppercase tracking-[0.18em] text-mist-400">
          Your Applications
        </div>
    <div className="flex w-full max-w-6xl flex-col gap-3">
        {/* Applications */}
        {applications.map((app) => {
          return (
            <div
              key={app.id}
              className="w-full rounded-2xl border border-mist-800 bg-mist-900/60 p-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 transition-colors hover:border-mist-600"
            >

              {/* Left: Society + Status */}
              <div className="flex gap-2 items-center">

                <div className="text-base font-mont font-semibold text-mist-100">
                  {app.societyName ?? 'Unknown Society'}
                </div>

                <span
                  className={`w-fit text-xs px-2.5 py-1 rounded-full border font-medium ${
                    statusStyles[app.status] ??
                    'bg-gray-500/10 text-gray-300 border-gray-500/30'
                  }`}
                >
                  {app.status}
                </span>

              </div>

              {/* View Application */}
              <Dialog>

                <DialogTrigger
                  className="
                    flex h-8 gap-x-1 justify-center items-center
                    p-2 bg-mist-100 rounded-sm text-sm
                    hover:bg-mist-800 hover:text-mist-100
                    transition duration-100 text-mist-950
                    
                  "
                >
                  <span className="font-medium text-[13px] font-mont">
                    View Application
                  </span>
                </DialogTrigger>

                <DialogContent className="rounded-lg bg-mist-900 text-mist-100 sm:max-w-md">

                  <DialogHeader>
                    <DialogTitle>
                      View Application Form
                    </DialogTitle>
                  </DialogHeader>

                  {/* Society */}
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-medium">
                      Society Name
                    </label>

                    <div className="bg-mist-950 rounded-md w-full p-2 border border-mist-800">
                      {app.societyName ?? 'Unknown Society'}
                    </div>
                  </div>

                  {/* Department */}
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-medium">
                      Department Name
                    </label>

                    <div className="bg-mist-950 rounded-md w-full p-2 border border-mist-800">
                      {app.departmentName ?? 'Unknown Department'}
                    </div>
                  </div>

                  {/* Why You */}
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-medium">
                      Why You
                    </label>

                    <Textarea
                      value={app.whyYou}
                      className="rounded-lg border border-mist-800 h-full bg-mist-950 border-none"
                      readOnly
                    />
                  </div>

                </DialogContent>

              </Dialog>

            </div>
          )
        })}
        </div>

      </div>
    </>
  )
}

export default UserBoards