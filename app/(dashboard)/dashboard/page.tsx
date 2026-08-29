import DashNavbar from '@/components/dashboard/dash-navbar'
import { getOrCreateUser } from '@/db/user'
import { getUserApplications } from '@/db/userApplications'
import { redirect } from 'next/navigation'

const DashboardPage = async () => {
  const user = await getOrCreateUser()
  if (user === null) return redirect('/')
  const applications = await getUserApplications(user.id)

  return (
    <div className='text-accent '>
      <DashNavbar />
      <div className="h-16" />
      {user?.role === "SUPER ADMIN" ? "super sigma" : 
      <>
        <div>
          {applications.map((app) => (
            <div key={app.id}>
              {app.whyYou}
            </div>
          ))}
        </div>
      </>
      }
      </div>
  )
}

export default DashboardPage