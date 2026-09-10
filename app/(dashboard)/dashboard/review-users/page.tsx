import ReviewUsersList from "@/components/dashboard/reviewUsersList"
import { Separator } from "@/components/ui/separator"
import { getAllUsers } from "@/db/allUsers"
import { getOrCreateUser } from "@/db/user"
import { ArrowLeftIcon } from "lucide-react"
import { redirect } from "next/dist/client/components/navigation"
import Link from "next/link"

const ReviewUsers = async () => {
  const allUsers = await getAllUsers()
  const user = await getOrCreateUser()

  if (user === null) return redirect("/")
  if (user.role !== "SUPER ADMIN") return redirect("/dashboard")

  return (
    <div className="flex flex-col gap-y-2 items-center w-screen min-h-screen bg-mist-950 px-5 sm:px-8 pt-20">
      <div className="font-mont flex text-sm gap-x-3 items-center text-mist-100 text-left w-full max-w-6xl">
        <Link href="/dashboard" className="flex gap-x-2 items-center text-mist-100 transition duration-100">
          <ArrowLeftIcon className="left-4 top-6 size-4 text-mist-100" />
        </Link>
        Review Users
      </div>

      <Separator className="my-5 w-full max-w-6xl bg-mist-800" />
      <ReviewUsersList users={allUsers} />
    </div>
  )
}

export default ReviewUsers
