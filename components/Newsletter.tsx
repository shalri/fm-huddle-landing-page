"use client";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { useForm } from "react-hook-form";

interface NewsletterProps {
  newsletterCopy: string;
}

export default function Newsletter({ newsletterCopy }: NewsletterProps) {
  const [email, setEmail] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
    reset
  } = useForm();
  const onSubmit = () => {
    console.log("You are now subscribed to the newsletter.");
    reset();
  };

  return (
    <div className="sm:order-last sm:max-w-[520px] sm:flex-grow">
      <h3 className="mt-[60px] text-xl font-bold uppercase sm:mt-0 sm:text-2xl">
        Newsletter
      </h3>
      <p className="mt-4 text-[0.91rem] leading-[1.62] sm:max-w-[350px]">
        {newsletterCopy}
      </p>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mt-[34px] flex flex-col items-end gap-y-4 sm:mt-[40px] sm:w-full"
      >
        <div className="flex w-full gap-x-9">
          <input
            type="text"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message: "Check your email please.",
              },
            })}
            aria-invalid={errors.mail ? "true" : "false"}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="email@company.com"
            className={cn(
              "form-input w-full flex-grow rounded-md p-3  px-6 text-hud-very-dark-cyan ring-hud-very-dark-cyan  transition-all duration-500 focus:ring-0 focus:ring-offset-0",
              {
                "bg-red-200 text-red-700 focus:border-red-500": errors.mail,
                "focus:border-hud-very-dark-cyan": !errors.mail,
              },
            )}
          />
          <button
            className="w-[50%] rounded-md bg-hud-pink hover:bg-pink-400 transition-color duration-300 p-3 font-bold"
            type="submit"
          >
            Subscribe
          </button>
        </div>
      </form>
      {errors.email && (
        <p className="mt-2 text-red-500 text-sm">{errors.email.message as string}</p>
      )}
      {isSubmitSuccessful && Object.keys(errors).length === 0 && (
        <p className="mt-2 text-green-500 text-sm">Thank you for subscribing!</p>
      )}
    </div>
  );
}
