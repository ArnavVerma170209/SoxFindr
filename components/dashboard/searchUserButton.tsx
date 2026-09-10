"use client"

const SearchUserButton = ({
  searchQuery,
  setSearchQuery,
}: {
  searchQuery: string
  setSearchQuery: (value: string) => void
}) => {
  return (
     <div className="w-full max-w-6xl flex gap-2">

        <input
          value={searchQuery}
          onChange={(event) => setSearchQuery(event.target.value)}
          placeholder="Search users (Just Start Typing)"
          className="
            h-9 flex-1 rounded-md
            bg-mist-900 border border-mist-800
            px-3 text-sm text-mist-100
            outline-none
            focus:border-mist-600
          "
        />

      </div>  )
}

export default SearchUserButton