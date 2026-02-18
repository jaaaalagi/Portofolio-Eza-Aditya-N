"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmitHandler = async (data) => {
    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          message: data.message,
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Gagal mengirim pesan");
      }

      toast.success("Pesan berhasil terkirim! Saya akan segera membalas.");
      reset();
    } catch (error) {
      console.error("Send Email Error:", error);
      toast.error(error.message || "Gagal mengirim pesan. Silakan coba lagi.");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmitHandler)} className="space-y-6">
      <div className="space-y-4">
        {/* Name and Email in a 2-column grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-2">
            <label htmlFor="name" className="text-sm font-medium text-muted-foreground block">
              Your Name
            </label>
            <Input
              {...register("name", { required: "Name is required" })}
              id="name"
              type="text"
              placeholder="Eza Aditya Nugroho"
              className="rounded-lg border-primary/20 w-full"
            />
            {errors.name && (
              <span className="text-xs text-red-500 block mt-1">
                {errors.name.message}
              </span>
            )}
          </div>

          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-medium text-muted-foreground block">
              Email
            </label>
            <Input
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Invalid email address",
                },
              })}
              id="email"
              type="email"
              placeholder="ezaaditya@example.com"
              className="rounded-lg border-primary/20 w-full"
            />
            {errors.email && (
              <span className="text-xs text-red-500 block mt-1">
                {errors.email.message}
              </span>
            )}
          </div>
        </div>

        {/* Message field - full width */}
        <div className="space-y-2">
          <label htmlFor="message" className="text-sm font-medium text-muted-foreground block">
            Message
          </label>
          <Textarea
            {...register("message", { required: "Message is required" })}
            id="message"
            placeholder="Write your message here..."
            className="rounded-lg border-primary/20 min-h-[150px] w-full resize-y"
          />
          {errors.message && (
            <span className="text-xs text-red-500 block mt-1">
              {errors.message.message}
            </span>
          )}
        </div>
      </div>

      <Button
        type="submit"
        className="w-full rounded-xl py-6 text-base font-semibold mt-6"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Sending..." : "Send Message"}
      </Button>
    </form>
  );
};

export default ContactForm;
