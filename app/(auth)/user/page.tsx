import { getOrCreateUser } from "@/db/user";
import { RedirectToSignIn } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export default async function Page() {
  const { userId } = await auth();

  if (!userId) {
    return <RedirectToSignIn />;
  }

  await getOrCreateUser();

  return redirect("/dashboard");
}