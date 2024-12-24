"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Form,
  FormField,
  FormItem,
  FormControl,
  FormMessage,
} from "@/components/ui/form";

// Define Zod schemas for validation
const HuwihunSchema = z
  .string()
  .regex(/^\d{8}$/, "Регистрийн дугаар 8 оронтой байх ёстой.");

const BaiguullagaSchema = z
  .string()
  .regex(/^\d{6}$/, "Регистрийн дугаар 6 оронтой байх ёстой.");

// Dynamically set the validation schema based on the selected type
const dynamicSchema = (activeType: "huwiHun" | "baiguullaga") =>
  z.object({
    value: activeType === "huwiHun" ? HuwihunSchema : BaiguullagaSchema,
  });

export default function DonateInfo() {
  const [activeType, setActiveType] = useState<"huwiHun" | "baiguullaga">(
    "huwiHun"
  );

  // Use react-hook-form with Zod resolver
  const form = useForm({
    resolver: zodResolver(dynamicSchema(activeType)),
    defaultValues: { value: "" },
    mode: "onChange", // Trigger validation on input change
  });

  const onSubmit = (data: any) => {
    console.log("Form Data:", data);
  };

  const placeholderText =
    activeType === "huwiHun"
      ? "Хувь хүний регистрийн дугаар оруулна уу"
      : "Байгууллагын регистрийн дугаар оруулна уу";

  return (
    <div className="">
      <h1 className="text-black font-medium text-lg mb-4">Ибаримт</h1>

      <RadioGroup
        value={activeType}
        onValueChange={(value: "huwiHun" | "baiguullaga") =>
          setActiveType(value)
        }
        className="flex gap-4 mb-6"
      >
        {[
          { label: "Хувь хүн", value: "huwiHun" },
          { label: "Байгууллага", value: "baiguullaga" },
        ].map(({ label, value }) => (
          <Label
            key={value}
            htmlFor={value}
            className={`flex w-full text-black items-center justify-start px-4 py-4 border bg-white hover:bg-gray-50 font-medium text-base rounded-lg cursor-pointer ${
              activeType === value
                ? "border-black shadow-lg"
                : "border-gray-300"
            }`}
          >
            <RadioGroupItem value={value} id={value} className="mr-2" />
            {label}
          </Label>
        ))}
      </RadioGroup>

      {/* Form */}
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="value"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    type="tel" // Use tel to ensure numeric input only
                    placeholder={placeholderText}
                    {...field}
                    maxLength={activeType === "huwiHun" ? 10 : 6}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </form>
      </Form>
    </div>
  );
}
