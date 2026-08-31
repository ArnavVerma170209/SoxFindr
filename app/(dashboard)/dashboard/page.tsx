import AdminBoards from '@/components/dashboard/admin-boards'
import DashNavbar from '@/components/dashboard/dash-navbar'
import UserBoards from '@/components/dashboard/user-boards'
import { getOrCreateUser } from '@/db/user'
import { getUserApplications } from '@/db/userApplications'
import { redirect } from 'next/navigation'

const DashboardPage = async () => {
  const user = await getOrCreateUser()
  if (user === null) return redirect('/')
  return (
    <div className='text-accent '>
      <DashNavbar />
      <div className="h-16" />
      {user?.role === "SUPER ADMIN" ? <>
        <div>
          <AdminBoards />
        </div>
      </>: 
      <>
        <div>
          
          <UserBoards />
        </div>
      </>
      }
      </div>
  )
}

export default DashboardPage