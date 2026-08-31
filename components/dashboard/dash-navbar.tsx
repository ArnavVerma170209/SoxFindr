import { cn } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'
import { UserButton } from '@clerk/nextjs'
import { getOrCreateUser } from '@/db/user'
import { redirect } from 'next/navigation'
import NewApplicationDialog from './new-application-dialog'
import UpdateBranchDialog from './update-branch-dialog'
import { Button } from '../ui/button'

const DashNavbar = async () => {
  const user = await getOrCreateUser()

  if(!user){
    return redirect('/')
  }
  var isBranchUpdated = false

  if (user?.branch !== null){
    isBranchUpdated = true
  }
  return (
      <div className={cn("z-10 w-screen  font-mont flex lg:justify-center border-b border-mist-900 bg-mist-950/80 h-16 fixed backdrop-blur-lg "     )}>

    <div className="flex xl:gap-52   xl:max-w-5xl lg:max-w-3xl lg:gap-28 gap-4  w-full h-16  font-bold text-2xl items-center justify-between   px-10 lg:px-0 ">
     <Link href="/" className="h-full flex justify-center items-center border-x border-x-mist-800/50 w-20"> <div>
        
        <Image
          src="/logo.svg"
          alt="SoxFindr Logo"
          width={32}
          height={32}
        />
      </div>
      </Link>
      <div className="flex gap-4">
        {user.role === "SUPER ADMIN" ? <>
                    <Link href="/dashboard/review-users">
                        <Button
                        className="
                          flex h-8 gap-x-1 justify-center items-center
                          p-2 bg-mist-100 text-mist-950 rounded-sm text-sm
                          hover:bg-mist-800 hover:text-mist-100
                          transition duration-100
                        "
                      >
                        <span className="font-medium text-[13px] font-mont">
                          Review Users 
                        </span>
                      </Button> 
                    </Link>

        </> :
        
        <>
        {isBranchUpdated === true ? <NewApplicationDialog/> : <UpdateBranchDialog /> }        
        </>}
      
        <UserButton />      
      </div>
    </div>
    </div>
  )
}

export default DashNavbar