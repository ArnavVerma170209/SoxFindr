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
import { useForm, useWatch } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { updateUserDetails } from "@/app/(actions)/actions/userDetails";
import { Plus } from "lucide-react";
import { ApplicationForm, applicationFormSchema } from "@/lib/validations/applicationForm";
import { societyData } from "@/db/seed";
import { Textarea } from "../ui/textarea";
import { createApplication } from "@/app/(actions)/actions/applicationForm";
import { useEffect } from "react";
import { toast } from "react-toastify";

const NewApplicaionDialog = () => {
  const form = useForm<ApplicationForm>({
    resolver: zodResolver(applicationFormSchema),
    defaultValues: {
      whyYou: "",
      society: "",
      department: "",
    },
  }) ;

const selectedSociety = societyData.find(
  (society) => society.name === form.watch("society")
);

  const selectedSocietyName = useWatch({
    control: form.control,
    name: "society",
  });

  useEffect(() => {
    form.setValue("department", "");
  }, [selectedSocietyName, form]);

  const departments = selectedSociety?.departments ?? [];

  const onSubmit = async (data: ApplicationForm) => {
    try {
      await createApplication(data);
      window.sessionStorage.setItem(
        "soxfindr-toast",
        JSON.stringify({
          type: "success",
          message: "Application submitted successfully.",
        })
      );
      window.location.reload();
    } catch {
      toast.error("Application could not be submitted. Please try again.");
    }
  };

  return (
    <Dialog>
      <DialogTrigger
        className="
          flex h-8 gap-x-1 justify-center items-center
          p-2 bg-mist-100 rounded-sm text-sm
          hover:bg-mist-800 hover:text-mist-100
          transition duration-100 text-mist-950
        "
      >
        <Plus className="size-3 fill-white" />
        <span className="font-medium text-[13px] font-mont">
          Application
        </span>
      </DialogTrigger>

      <DialogContent className="rounded-lg bg-mist-900 text-mist-100 sm:max-w-md">

        <DialogHeader>
          <DialogTitle>
            Society Application Form
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
              Select Society
            </label>

         <Select
        value={form.watch("society")?.toString()}
        onValueChange={(value) =>
            form.setValue("society", String(value), {
            shouldValidate: true,
            shouldDirty: true,
            })
        }
            >
  <SelectTrigger className="w-full">
    <SelectValue placeholder="Select the society you want to apply for" />
  </SelectTrigger>

  <SelectContent>
    {societyData.map((society) => (
      <SelectItem
        key={society.id}
        value={society.name.toString()}
      >
        {society.name}
      </SelectItem>
    ))}
  </SelectContent>
</Select>

            {form.formState.errors.society && (
              <p className="text-sm text-red-400">
                {form.formState.errors.society.message}
              </p>
            )}
    <label className="text-sm font-medium">
              Select Department
            </label>
             <Select
        value={form.watch("department")?.toString()}
        onValueChange={(value) =>
            form.setValue("department", String(value), {
            shouldValidate: true,
            shouldDirty: true,
            })
        }
            >
  <SelectTrigger className="w-full">
    <SelectValue placeholder="Select the department you want to apply for" />
  </SelectTrigger>

  <SelectContent>
    {departments.map((department) => (
      <SelectItem
        key={department}
        value={department}
      >
        {department}
      </SelectItem>
    ))}
  </SelectContent>
</Select>

            {form.formState.errors.department && (
              <p className="text-sm text-red-400">
                {form.formState.errors.department.message}
              </p>
            )}

          </div>


          <div className="flex flex-col gap-2">

            <label className="text-sm font-medium">
              Why You
            </label>

            <Textarea 
            // value={form.watch("whyYou")?.toString()}
            onChange={(e) =>
            form.setValue("whyYou", e.target.value, {
            shouldValidate: true,
            shouldDirty: true,
            })}
            className="rounded-lg bg-mist-950 border-none"
             />
     
            {form.formState.errors.whyYou && (
              <p className="text-sm text-red-400">
                {form.formState.errors.whyYou.message}
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

export default NewApplicaionDialog;