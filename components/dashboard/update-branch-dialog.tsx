"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";

import { Button } from "../ui/button";

import {
  userDetailsSchema,
  type UserDetails,
} from "@/lib/validations/userDetails";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { updateUserDetails } from "@/app/(actions)/actions/userDetails";

const branches = ["CSAI", "CSE", "CSDS", "CSIOT", "IT", "ITNS", "MAC", "ECE", "EE", "MECH", "CIVIL", "ICE", "MEEV"]
const years = [1, 2,3 ,4];

const UpdateBranchDialog = () => {
  const form = useForm<UserDetails>({
    resolver: zodResolver(userDetailsSchema),
    defaultValues: {
      branch: "",
      year: 1,
    },
  });

  const onSubmit = async (data: UserDetails) => {
    await updateUserDetails(data)
    window.location.reload();
  };

  return (
    <Dialog>
      <DialogTrigger
        className="
          flex h-full gap-x-1 justify-center items-center
          p-2 bg-mist-100 rounded-sm text-sm
          hover:bg-mist-800 hover:text-mist-100
          transition duration-100 text-mist-950
        "
      >
        <span className="font-medium font-mont">
          Update details
        </span>
      </DialogTrigger>

      <DialogContent className="rounded-lg bg-mist-900 text-mist-100 sm:max-w-md">

        <DialogHeader>
          <DialogTitle>
            Please update your branch and year details here
          </DialogTitle>

          <DialogDescription>
            Fill in the relevant details and submit the form
          </DialogDescription>
        </DialogHeader>

        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col gap-5"
        >

          <div className="flex flex-col gap-2">

            <label className="text-sm font-medium">
              Year
            </label>

         <Select
  value={form.watch("year")?.toString()}
  onValueChange={(value) =>
    form.setValue("year", Number(value), {
      shouldValidate: true,
      shouldDirty: true,
    })
  }
>
  <SelectTrigger className="w-full">
    <SelectValue placeholder="Select your year" />
  </SelectTrigger>

  <SelectContent>
    {years.map((year) => (
      <SelectItem
        key={year}
        value={year.toString()}
      >
        Year {year}
      </SelectItem>
    ))}
  </SelectContent>
</Select>

            {form.formState.errors.branch && (
              <p className="text-sm text-red-400">
                {form.formState.errors.branch.message}
              </p>
            )}

          </div>


          <div className="flex flex-col gap-2">

            <label className="text-sm font-medium">
              Branch
            </label>

         <Select
            value={form.watch("branch")}
           onValueChange={(value) => {
  if (value !== null) {
    form.setValue("branch", value, {
      shouldValidate: true,
      shouldDirty: true,
    });
  }
}}
            
>
  <SelectTrigger className="w-full">
    <SelectValue placeholder="Select your branch" />
  </SelectTrigger>

  <SelectContent>
    {branches.map((branch) => (
      <SelectItem key={branch} value={branch}>
        {branch}
      </SelectItem>
    ))}
  </SelectContent>
</Select>
            {form.formState.errors.year && (
              <p className="text-sm text-red-400">
                {form.formState.errors.year.message}
              </p>
            )}

          </div>


          {/* SUBMIT */}
          <DialogFooter>
            <Button
              type="submit"
              variant="secondary"
              className="w-full rounded-md"
              disabled={form.formState.isSubmitting}
            >
              {form.formState.isSubmitting
                ? "Submitting..."
                : "Submit"}
            </Button>
          </DialogFooter>

        </form>

      </DialogContent>
    </Dialog>
  );
};

export default UpdateBranchDialog;