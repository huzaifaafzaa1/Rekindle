"use client"

import { useForm } from "react-hook-form";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import CustomButton from "../CustomButton";

const BusinessInquiryForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) => {
    console.log("Form Submitted:", data);
  };

  return (
    <div className="p-4 bg-white shadow-md rounded-lg ">

      <hr className="border-2 border-[var(--color-blue-primary)] rounded-4xl mb-4" />

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <Label htmlFor="firstName">First Name</Label>
          <Input
            id="firstName"
            type="text"
            placeholder="Enter your first name"
            {...register("firstName", { required: "First name is required" })}
          />
          {errors.firstName && (
            <p className="text-red-500 text-sm">{errors.firstName.message as string}</p>
          )}
        </div>

        <div>
          <Label htmlFor="companyName">Company Name</Label>
          <Input
            id="companyName"
            type="text"
            placeholder="Enter your company name"
            {...register("companyName")}
          />
          <p className="text-xs text-[var(--color-light-slate)]">If you aren't business or don't have this information, you can leave this blank</p>
        </div>

        <div>
          <Label htmlFor="email">Email Address</Label>
          <Input
            id="email"
            type="email"
            placeholder="Enter your email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                message: "Enter a valid email",
              },
            })}
          />
           {errors.email && (
           <p className="text-red-500 text-sm">{errors.email.message as string}</p>
           )}
        </div>

        <div>
          <Label htmlFor="phone">Phone Number (Optional)</Label>
          <Input
            id="phone"
            type="tel"
            placeholder="Enter your phone number"
            {...register("phone", {
              pattern: {
                value: /^[0-9]{10,14}$/,
                message: "Enter a valid phone number",
              },
            })}
          />
          {errors.phone && (
          <p className="text-red-500 text-sm">{errors.phone.message as string}</p>
          )}
        </div>

        <div>
          <Label htmlFor="website">Website (Optional)</Label>
          <Input
            id="website"
            type="url"
            placeholder="Enter your website"
            {...register("website")}
          />
        </div>

       <CustomButton label="Submit" textColor="white" bgColor="bg-[var(--color-blue-primary)]"/>
      </form>
    </div>
  );
};

export default BusinessInquiryForm;
