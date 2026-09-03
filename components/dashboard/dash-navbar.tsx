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
  let isBranchUpdated = false

  if (user?.branch !== null){
    isBranchUpdated = true
  }
  return (
      <div className={cn("z-10 w-screen font-mont flex lg:justify-center border-b border-mist-800/80 bg-mist-950/90 h-16 fixed backdrop-blur-xl shadow-lg shadow-black/10" )}>

    <div className="flex xl:gap-52 xl:max-w-6xl lg:max-w-4xl lg:gap-28 gap-4 w-full h-16 font-bold text-2xl items-center justify-between px-5 lg:px-0">
     <Link href="/" aria-label="SoxFindr home" className="flex justify-center items-center">
        
        <Image
          src="/logo.svg"
          alt="SoxFindr Logo"
          width={34}
          height={34}
        />
      </Link>
      <div className="flex items-center gap-3">
        {user.role === "SUPER ADMIN" ? <>
                    <Link href="/dashboard/review-users">
                        <Button
                        className="
                          flex h-8 gap-x-1 justify-center items-center
                          p-2 px-3 bg-mist-100 text-mist-950 rounded-lg text-sm
                          hover:bg-accent hover:text-white
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