import { getServerSession } from "next-auth";
import Login from "./Login";
import { AuthOptions } from "@/lib/auth";

export default async function Home() {
  const session: any = await getServerSession(AuthOptions);
  if (session) {
    console.log("session exists session => ", session);
  }

  return (
    <>
      {session == null && (
        <div className="flex flex-col h-screen">
          <Login />
        </div>
      )}
    </>
  );
}
