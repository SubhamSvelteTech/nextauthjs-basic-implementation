"use client";

import React, { useEffect, useState } from "react";
import { getSession } from "next-auth/react";

const ClientSideComponentSessionUse = () => {
  const [isLoading, setIsLoading] = useState(false);

  const sessionChecker = async () => {
    setIsLoading(true);
    const session = await getSession();
    console.log("session x => ", session);

    if (session?.user?.statusCode === "SUC") {
      console.log("authenticated");
    }

    setIsLoading(false);
  };

  useEffect(() => {
    sessionChecker();
  }, []);

  return (
    <div>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <p>
          Session data:
          {/* {JSON.stringify(session)} */}
        </p>
      )}
    </div>
  );
};

export default ClientSideComponentSessionUse;
