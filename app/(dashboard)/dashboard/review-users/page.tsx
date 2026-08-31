import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Separator } from '@/components/ui/separator'
import { getAllUsers } from '@/db/allUsers'
import { ArrowLeftIcon } from 'lucide-react'
import Link from 'next/link'


const ReviewUsers = async () => {
  const allUsers = await getAllUsers();

  return (
    <div className="flex flex-col gap-y-2 items-center w-screen mt-8 h-full">

      {/* Header */}
      <div className="font-mono flex text-[14px] gap-x-2 items-center text-mist-100 text-left w-full xl:max-w-5xl lg:max-w-3xl">
      <Link href="/dashboard" className="flex gap-x-2 items-center text-mist-100  transition duration-100">
      <ArrowLeftIcon className=" left-4 top-6 size-4 text-mist-100" />
      </Link>

        Review Users

      </div>

      <Separator className="my-4 xl:max-w-5xl lg:max-w-3xl text-mist-800" />

    
      <div className="xl:max-w-5xl lg:max-w-3xl w-full flex gap-2">

        <input
          placeholder="Search users..."
          className="
            h-9 flex-1 rounded-md
            bg-mist-950 border border-mist-800
            px-3 text-sm text-mist-100
            outline-none
            focus:border-mist-600
          "
        />

        <Button
          variant="secondary"
          className="h-9 rounded-md"
        >
          Search
        </Button>

      </div>

      {/* Users */}
     

          {allUsers.map((user) => (
            
             <div key={user?.id} className="xl:max-w-5xl lg:max-w-3xl w-full flex flex-col gap-2 mt-4">

        {/* User */}
        <div className="
          w-full rounded-lg
          border border-mist-800
          bg-mist-900/40
          p-3
          flex flex-col sm:flex-row
          sm:items-center sm:justify-between
          gap-3
        ">
               <div className="flex flex-col gap-1">

            <div className="text-base font-mont font-medium text-white">
              {user.name ?? 'Unknown User'}
            </div>

            <div className="text-xs font-mono text-mist-400">
              {user.email ?? 'Unknown Email'}
            </div>

            <div className="flex gap-2 text-xs mt-1">
              <span className="
                px-2 py-1 rounded-md
                bg-mist-800 text-mist-200
              ">
                {user.branch ?? 'Unknown Branch'}
              </span>

              <span className="
                px-2 py-1 rounded-md
                bg-mist-800 text-mist-200
              ">
                {user.year ?? 'Unknown Year'}
              </span>  <span className="
                px-2 py-1 rounded-md
                bg-mist-800 text-mist-200
              ">
                {user.role ?? 'Unknown Role'}
              </span>
            </div>

          </div>
                  
    <div className="flex flex-col gap-2 items-center">

      <Button
        className="
          flex h-8 gap-x-1 justify-center items-center
          p-2 bg-green-200 text-green-800
          rounded-sm text-sm w-24
          hover:bg-green-800 hover:text-green-200
          transition duration-100
        "
        onClick={async () => {
          'use server';
          const { updateUserRole } = await import('@/db/updateUserRole');
          await updateUserRole(user.id, 'ADMIN');
        }}
      >
        <span className="font-medium text-[13px] font-mont">
          Make Admin
        </span>
      </Button>     
      
       <Button
        className="
        w-24
          flex h-8 gap-x-1 justify-center items-center
          p-2 bg-yellow-200 text-yellow-800
          rounded-sm text-sm
          hover:bg-yellow-800 hover:text-yellow-200
          transition duration-100
        "
        onClick={async () => {
          'use server';
          const { updateUserRole } = await import('@/db/updateUserRole');
          await updateUserRole(user.id, 'STUDENT');
        }}
      >
        <span className="font-medium text-[13px] font-mont">
          Make User
        </span>
      </Button>
          {/* View */}
          <Dialog>
            <DialogTrigger
              className="
                flex h-8
                px-3
                w-24
                justify-center items-center
                bg-mist-100
                text-mist-950
                rounded-sm
                text-sm
                hover:bg-mist-800
                hover:text-mist-100
                transition duration-100
              "
            >
              <span className="font-medium text-[13px] font-mont">
                View User
              </span>
            </DialogTrigger>

            <DialogContent className="
              rounded-lg
              bg-mist-900
              text-mist-100
              sm:max-w-md
            ">

              <DialogHeader>
                <DialogTitle>
                  User Details
                </DialogTitle>
              </DialogHeader>

              <div className="flex flex-col gap-3">

                {/* Name */}
                <div className="flex flex-col gap-1">
                  <label className="text-sm font-medium">
                    Name
                  </label>

                  <div className="
                    bg-mist-950
                    rounded-md
                    w-full
                    p-2
                    border border-mist-800
                    text-sm
                  ">
                    Arnav Verma
                  </div>
                </div>

                {/* Email */}
                <div className="flex flex-col gap-1">
                  <label className="text-sm font-medium">
                    Email
                  </label>

                  <div className="
                    bg-mist-950
                    rounded-md
                    w-full
                    p-2
                    border border-mist-800
                    text-sm
                  ">
                    {user.email ?? 'Unknown Email'}
                  </div>
                </div>

                {/* Branch */}
                <div className="flex flex-col gap-1">
                  <label className="text-sm font-medium">
                    Branch
                  </label>

                  <div className="
                    bg-mist-950
                    rounded-md
                    w-full
                    p-2
                    border border-mist-800
                    text-sm
                  ">
                    {user.branch ?? 'Branch Not Updated'}
                  </div>
                </div>

                {/* Year */}
                <div className="flex flex-col gap-1">
                  <label className="text-sm font-medium">
                    Year
                  </label>

                  <div className="
                    bg-mist-950
                    rounded-md
                    w-full
                    p-2
                    border border-mist-800
                    text-sm
                  ">
                    {user.year ?? 'Year Not Updated'}
                  </div>
                </div>

              </div>

            </DialogContent>

          </Dialog>
    </div>
</div>
        </div>
          ))}
       

          {/* Actions */}


      
      </div>

    )
}

export default ReviewUsers