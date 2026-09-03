import { societyData } from "@/db/seed";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, CalendarDays, Users } from "lucide-react";
import NewApplicationDialog from "@/components/dashboard/new-application-dialog";
import { getOrCreateUser } from "@/db/user";
import UpdateBranchDialog from "@/components/dashboard/update-branch-dialog";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function SocietyPage({ params }: Props) {
  const { slug } = await params;
  const user = await getOrCreateUser();
  var isSignedIn = false
  if (user){
    isSignedIn = true
  }
  var isBranchUpdated = false

  if (user?.branch !== null){
    isBranchUpdated = true
  }

  
  const societyName = slug.replace(/-/g, ' ');
  var society;

  for(let i=0; i<societyData.length; i++){
    if(societyData[i].name.toLowerCase() === societyName){
      society = societyData[i];
    }
  }
  
  return <div>
     <main className="relative isolate min-h-screen overflow-hidden bg-mist-950 text-mist-100">
        <section aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 z-0 h-[560px] overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center grayscale brightness-[0.6]"
            style={{ backgroundImage: `url("${society?.image}")` }}
          />
          <div
            className="absolute inset-0 bg-gradient-to-b from-mist-950/35 via-mist-950/60 to-mist-950"
          />
          <div
            className="absolute inset-0 bg-gradient-to-r from-mist-950/45 via-transparent to-mist-950/45"
          />
        </section>

<div className="relative z-10 mx-auto max-w-6xl px-6 pt-8">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-mist-400 transition hover:text-mist-100"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to societies
        </Link>
      </div>

         <section className="relative z-10 mx-auto max-w-6xl px-6 pt-16 pb-12">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">

          <div className="max-w-3xl">

            {/* Category */}
            <div className="mb-5 inline-flex items-center rounded-full border border-mist-800 bg-mist-900 px-3 py-1 text-xs font-medium text-mist-300">
              {society?.category}
            </div>

            {/* Name */}
            <h1 className="font-mont text-5xl font-semibold tracking-tight md:text-7xl">
              {society?.name}
            </h1>

            {/* Description */}
            <p className="mt-6 max-w-2xl text-base leading-7 text-mist-400 md:text-lg">
              {society?.description}
            </p>

          </div>

          {/* Apply button */}
          <div className="shrink-0">
          {isSignedIn === true ?  isBranchUpdated === true ? <NewApplicationDialog/> : <UpdateBranchDialog /> : <Link href="/sign-in" className="inline-flex items-center gap-2 rounded-lg bg-mist-800 px-4 py-2 text-sm font-medium text-mist-100 transition hover:bg-mist-700">
              Sign in to apply
            </Link>}
            {/* {isBranchUpdated === true ? <NewApplicationDialog/> : <UpdateBranchDialog />}
            <NewApplicationDialog/> */}
          </div>

        </div>
      </section>
         <div className="mx-auto max-w-6xl px-6">
        <div className="h-px bg-mist-800" />
      </div>
      <section className="mx-auto grid max-w-6xl gap-10 px-6 py-14 md:grid-cols-3">

        {/* About */}
       

        {/* Details */}
        <div className="space-y-5">

          <div className="flex items-start gap-3">
            <Users className="mt-0.5 h-4 w-4 text-mist-500" />

            <div>
              <p className="text-xs text-mist-500">Category</p>
              <p className="mt-1 text-sm">{society?.category}</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <CalendarDays className="mt-0.5 h-4 w-4 text-mist-500" />

            <div>
              <p className="text-xs text-mist-500">Recruitment</p>
              <p className="mt-1 text-sm">Currently open</p>
            </div>
          </div>

        </div>
      </section>
      <section className=" ">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-6 py-16 sm:flex-row sm:items-center">

          <div>
            <h2 className="text-2xl font-semibold">
              Ready to join {society?.name}?
            </h2>

            <p className="mt-2 text-sm text-mist-400">
              Pick a department and submit your application.
            </p>
          </div>

        

        </div>
      </section>
    </main>
  </div>;

}