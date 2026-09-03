import AdminBoards from '@/components/dashboard/admin-boards'
import DashNavbar from '@/components/dashboard/dash-navbar'
import UserBoards from '@/components/dashboard/user-boards'
import { getOrCreateUser } from '@/db/user'
import { redirect } from 'next/navigation'

const DashboardPage = async () => {
  const user = await getOrCreateUser()
  if (user === null) return redirect('/')
  return (
    <div className='min-h-screen bg-mist-950 text-mist-100'>
      <DashNavbar />
      <div className="h-20" />
      {user?.role === "SUPER ADMIN" || user?.role === "ADMIN" ? <>
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