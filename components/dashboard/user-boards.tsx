import { getOrCreateUser } from '@/db/user'
import { getUserApplications } from '@/db/userApplications'
import { redirect } from 'next/navigation'
import React from 'react'
import { Separator } from '../ui/separator'
import { societyData } from '@/db/seed'
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '../ui/dialog'
import { Button } from '../ui/button'
import { Textarea } from '../ui/textarea'

const UserBoards = async () => {
  const user = await getOrCreateUser()

  if (user === null) return redirect('/')
  
  const applications = await getUserApplications(user.id)
  
  var rejectedCount = 0
  
  for(let i = 0; i< applications.length; i++){
    if (applications[i].status === "REJECTED"){
        rejectedCount +=1 
    }
  }
 
  var pendingCount = 0
  
  for(let i = 0; i< applications.length; i++){
    if (applications[i].status === "PENDING"){
        pendingCount +=1 
    }
  }
 
  var acceptedCount = 0
  
  for(let i = 0; i< applications.length; i++){
 
    if (applications[i].status === "ACCEPTED"){
        acceptedCount +=1 
    }
  }
 
  function getSociety(socId : any){
      for(let i = 0; i< societyData.length; i++){
 
    if (societyData[i].id === socId){
        return societyData[i]
    }
        }
  }

  return (
    <>
    <div className='flex-col flex gap-y-2  items-center w-screen mt-8 h-full  '>
        <div className='font-mono text-[14px] text-center lg:text-left w-full xl:max-w-5xl lg:max-w-3xl'>
            Hi <span className="text-[20px]">
               {user.name} </span>, welcome to your dashboard.
          </div>
          <Separator className={ 'my-4 xl:max-w-5xl lg:max-w-3xl text-mist-800'} />
        <div className="xl:max-w-5xl gap-y-4 flex px-10 lg:px-0 items-center flex-col xl:flex-row justify-between gap-x-4  h-full w-full lg:max-w-3xl">
           
            <div className="rounded-lg h-48 w-full flex flex-col justify-between bg-mist-900 border-mist-800 border-[1.5px]">
                <div className='px-4 py-3 font-mono'>
                    Total Applications
                   
                    </div>
                    <div className='px-4 py-3 font-bold font-mont text-7xl'>
                         {applications.length}

                        </div>
            </div>   
             <div className="rounded-lg text-yellow-500/70 h-48 w-full flex flex-col justify-between bg-yellow-950/20 border-yellow-900/20 border-[1.5px]">
                <div className='px-4 py-3 font-mono'>
                    Applications Pending
                   
                    </div>
                    <div className='px-4 py-3 font-bold font-mont text-7xl'>
                         {pendingCount}

                        </div>
            </div>   
             <div className="rounded-lg text-red-500/70 h-48 w-full flex flex-col justify-between bg-red-950/20 border-red-900/20 border-[1.5px]">
                <div className='px-4 py-3 font-mono'>
                    Applicatons Rejected
                    </div>
                    <div className='px-4 py-3 font-bold font-mont text-7xl'>
                         {rejectedCount}

                        </div>
            </div>   
             <div className="rounded-lg text-green-500/70 h-48 w-full flex flex-col justify-between bg-green-950/20 border-green-900/20 border-[1.5px]">
                <div className='px-4 py-3 font-mono'>
                    Applications accepted
                    </div>
                    <div className='px-4 py-3 font-bold font-mont text-7xl'>
                         {acceptedCount}

                        </div>
            </div>   
        </div>
                  <Separator className={ 'my-4 xl:max-w-5xl lg:max-w-3xl text-mist-800'} />
        <div className="font-mono text-[14px] text-left lg:text-left w-full xl:max-w-5xl lg:max-w-3xl">
            Your Applications
        </div>

       {applications.map((app) => {
    const society = getSociety(app.societyId)

    const statusStyles: Record<string, string> = {
      PENDING: 'bg-yellow-500/10 text-yellow-400 border-yellow-500/30',
      ACCEPTED: 'bg-green-500/10 text-green-400 border-green-500/30',
      REJECTED: 'bg-red-500/10 text-red-400 border-red-500/30',
    }

    return (
      <div
        key={app.id}
        className="xl:max-w-5xl lg:max-w-3xl w-full rounded-lg border border-mist-800 bg-mist-900/40 p-2 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3"
      >
        {/* Left: Society + Status */}
        <div className="flex   gap-2">
          <div className="text-base font-mont font-medium text-white">
            {society?.name ?? 'Unknown Society'}
          </div>

          <span
            className={`w-fit text-xs px-2.5 py-1 rounded-full border font-medium ${
              statusStyles[app.status] ?? 'bg-gray-500/10 text-gray-300 border-gray-500/30'
            }`}
          >
            {app.status}
          </span>
        </div>

        {/* Right: View button */}
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

          <div className="flex flex-col gap-2">

            <label className="text-sm font-medium">
              Society Name
            </label>

                <div className='bg-mist-950 rounded-md w-full p-2 border border-mist-800'>

            {society?.name}
                </div>


          </div>


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
    </>
  )
}

export default UserBoards