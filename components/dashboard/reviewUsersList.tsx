"use client"

import { useState } from "react"
import { Button } from "../ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "../ui/dialog"
import { updateUserRole } from "@/db/updateUserRole"
import { users } from "@/db/schema"
import type { InferSelectModel } from "drizzle-orm"
import SearchUserButton from "./searchUserButton"

type User = InferSelectModel<typeof users>

const ReviewUsersList = ({ users: userList }: { users: User[] }) => {
  const [searchQuery, setSearchQuery] = useState("")
  const normalizedQuery = searchQuery.trim().toLowerCase()
  const filteredUsers = userList.filter((user) =>
    user.name?.toLowerCase().includes(normalizedQuery)
  )

  return (
    <>
      <SearchUserButton
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />

      {filteredUsers.map((user) => (
        <div key={user.id} className="w-full max-w-6xl flex flex-col gap-3 mt-3">
          <div className="w-full rounded-lg border border-mist-800 bg-mist-900/40 p-3 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 shadow-lg shadow-black/10">
            <div className="flex flex-col gap-1">
              <div className="text-base font-mont font-medium text-white">
                {user.name ?? "Unknown User"}
              </div>
              <div className="text-xs font-mono text-mist-400">
                {user.email ?? "Unknown Email"}
              </div>
              <div className="flex gap-2 text-xs mt-1">
                <span className="px-2 py-1 rounded-md bg-mist-800 text-mist-200">
                  {user.branch ?? "Unknown Branch"}
                </span>
                <span className="px-2 py-1 rounded-md bg-mist-800 text-mist-200">
                  {user.year ?? "Unknown Year"}
                </span>
                <span className="px-2 py-1 rounded-md bg-mist-800 text-mist-200">
                  {user.role ?? "Unknown Role"}
                </span>
              </div>
            </div>

            <div className="flex flex-col gap-2 items-center">
              <Button
                className="flex h-8 gap-x-1 justify-center items-center p-2 bg-green-200 text-green-800 rounded-sm text-sm w-24 hover:bg-green-800 hover:text-green-200 transition duration-100"
                onClick={() => updateUserRole(user.id, "ADMIN")}
              >
                <span className="font-medium text-[13px] font-mont">Make Admin</span>
              </Button>
              <Button
                className="w-24 flex h-8 gap-x-1 justify-center items-center p-2 bg-yellow-200 text-yellow-800 rounded-sm text-sm hover:bg-yellow-800 hover:text-yellow-200 transition duration-100"
                onClick={() => updateUserRole(user.id, "STUDENT")}
              >
                <span className="font-medium text-[13px] font-mont">Make User</span>
              </Button>
              <Dialog>
                <DialogTrigger className="flex h-8 px-3 w-24 justify-center items-center bg-mist-100 text-mist-950 rounded-sm text-sm hover:bg-mist-800 hover:text-mist-100 transition duration-100">
                  <span className="font-medium text-[13px] font-mont">View User</span>
                </DialogTrigger>
                <DialogContent className="rounded-lg bg-mist-900 text-mist-100 sm:max-w-md">
                  <DialogHeader>
                    <DialogTitle>User Details</DialogTitle>
                  </DialogHeader>
                  <div className="flex flex-col gap-3">
                    {[
                      ["Name", user.name ?? "Unknown Name"],
                      ["Email", user.email ?? "Unknown Email"],
                      ["Branch", user.branch ?? "Branch Not Updated"],
                      ["Year", user.year ?? "Year Not Updated"],
                    ].map(([label, value]) => (
                      <div key={label} className="flex flex-col gap-1">
                        <label className="text-sm font-medium">{label}</label>
                        <div className="bg-mist-950 rounded-md w-full p-2 border border-mist-800 text-sm">
                          {value}
                        </div>
                      </div>
                    ))}
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </div>
      ))}
    </>
  )
}

export default ReviewUsersList
