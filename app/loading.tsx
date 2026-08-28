import { LoaderIcon } from "lucide-react"

const loading = () => {
  return (
    <div className="h-screen w-screen flex justify-center items-center">
      <LoaderIcon className="animate-spin duration-1000 w-4 h-4 fill-white text-white" />
    </div>
  )
}

export default loading