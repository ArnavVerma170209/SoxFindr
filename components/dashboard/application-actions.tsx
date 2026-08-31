"use client";

import { Button } from "../ui/button";
import { updateApplicationStatus } from "@/db/changeApplicationStatus";

const ApplicationActions = ({
  applicationId,
}: {
  applicationId: string;
}) => {
  const handleStatusChange = async (
    status: "ACCEPTED" | "REJECTED" | "PENDING"
  ) => {
    await updateApplicationStatus(applicationId, status);
  };

  return (
    <>
      <Button
        className="
          flex h-8 gap-x-1 justify-center items-center
          p-2 bg-red-200 text-red-800
          hover:bg-red-800 hover:text-red-200
          rounded-sm text-sm transition duration-100
        "
        onClick={() => handleStatusChange("REJECTED")}
      >
        <span className="font-medium text-[13px] font-mont">
          Reject
        </span>
      </Button>

      <Button
        className="
          flex h-8 gap-x-1 justify-center items-center
          p-2 bg-green-200 text-green-800
          rounded-sm text-sm
          hover:bg-green-800 hover:text-green-200
          transition duration-100
        "
        onClick={() => handleStatusChange("ACCEPTED")}
      >
        <span className="font-medium text-[13px] font-mont">
          Accept
        </span>
      </Button>     
      
       <Button
        className="
          flex h-8 gap-x-1 justify-center items-center
          p-2 bg-yellow-200 text-yellow-800
          rounded-sm text-sm
          hover:bg-yellow-800 hover:text-yellow-200
          transition duration-100
        "
        onClick={() => handleStatusChange("PENDING")}
      >
        <span className="font-medium text-[13px] font-mont">
          Pending
        </span>
      </Button>
    </>
  );
};

export default ApplicationActions;