"use client";

import { Button } from "../ui/button";
import { updateApplicationStatus } from "@/db/changeApplicationStatus";
import { toast } from "react-toastify";

const ApplicationActions = ({
  applicationId,
}: {
  applicationId: string;
}) => {
  const handleStatusChange = async (
    status: "ACCEPTED" | "REJECTED" | "PENDING"
  ) => {
    try {
      await updateApplicationStatus(applicationId, status);

      const messages = {
        ACCEPTED: "Application accepted successfully.",
        REJECTED: "Application rejected.",
        PENDING: "Application moved back to pending.",
      };

      const toastType = {
        ACCEPTED: "success",
        REJECTED: "error",
        PENDING: "warning",
      } as const;

      toast[toastType[status]](messages[status]);
    } catch {
      toast.error("Application status could not be updated. Please try again.");
    }
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