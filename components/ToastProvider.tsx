"use client";

import { useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";

type PendingToast = {
  message: string;
  type: "success" | "error" | "info" | "warning";
};

const isPendingToast = (value: unknown): value is PendingToast => {
  if (!value || typeof value !== "object") return false;

  const pendingToast = value as Record<string, unknown>;
  return (
    typeof pendingToast.message === "string" &&
    ["success", "error", "info", "warning"].includes(
      pendingToast.type as string
    )
  );
};

export default function ToastProvider() {
  useEffect(() => {
    const storedToast = window.sessionStorage.getItem("soxfindr-toast");
    if (!storedToast) return;

    const timeoutId = window.setTimeout(() => {
      let parsedToast: unknown;
      try {
        parsedToast = JSON.parse(storedToast);
      } catch (error) {
        if (error instanceof SyntaxError) return;
        throw error;
      }

      if (!isPendingToast(parsedToast)) return;
      window.sessionStorage.removeItem("soxfindr-toast");
      toast[parsedToast.type](parsedToast.message);
    }, 100);

    return () => window.clearTimeout(timeoutId);
  }, []);

  return (
    <ToastContainer
      position="bottom-right"
      autoClose={3500}
      newestOnTop
      closeOnClick
      pauseOnHover
      theme="dark"
      toastClassName="soxfindr-toast"
    />
  );
}
