import { getOrCreateUser } from "@/db/user";
import { RedirectToSignIn, UserButton } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export default async function Page() {
  const user = await auth()

  if (!user){
    return RedirectToSignIn
  }

  const CreateOrGetUser = await getOrCreateUser()

  return redirect("/dashboard")

}