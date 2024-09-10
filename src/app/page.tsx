import { getServerSession } from "next-auth";
import { AuthOptions } from "@/lib/auth";
import Login from "./Login";

export default async function Home() {
  const session = await getServerSession(AuthOptions);
  if (session) {
    console.log("session exists session => ", session);
  }

  return (
    <>
      {session == null ? (
        <div className="flex flex-col h-screen">
          <Login />
        </div>
      ): <div>Authenticated</div>}
    </>
  );
}
