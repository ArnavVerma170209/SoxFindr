import { getOrCreateUser } from '@/db/user'
import { UserButton } from '@clerk/nextjs'


const DashboardPage = async () => {
  const user = await getOrCreateUser()
  return (
    <div className='text-accent'>
       Hi  {user?.name} <UserButton />
    </div>
  )
}

export default DashboardPage