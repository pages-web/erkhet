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
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { LoadingIcon } from "@/components/ui/loading";

const Huwihun = z
  .string()
  .regex(/^\d{8}$/, "Регистрийн дугаар 8 оронтой байх ёстой.");

const Baiguullaga = z
  .string()
  .regex(/^\d{6}$/, "Регистрийн дугаар 6 оронтой байх ёстой.");

const dynamicSchema = (activeType: "huwiHun" | "baiguullaga") =>
  z.object({
    value: activeType === "huwiHun" ? Huwihun : Baiguullaga,
  });

export default function DonateInfo() {
  const [activeType, setActiveType] = useState<"huwiHun" | "baiguullaga">(
    "huwiHun"
  );
  const [loading, setLoading] = useState(false);

  const formSchema = dynamicSchema(activeType);

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: { value: "" },
  });

  const onSubmit = async (data: any) => {
    setLoading(true);
  };

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
        <Label
          htmlFor="huwiHun"
          className={`flex w-full text-black items-center justify-start px-4 py-4 border bg-white hover:bg-gray-50 font-medium text-base rounded-lg cursor-pointer ${
            activeType === "huwiHun"
              ? "border-black shadow-lg"
              : "border-gray-300"
          }`}
        >
          <RadioGroupItem value="huwiHun" id="huwiHun" className="mr-2" />
          Хувь хүн
        </Label>

        <Label
          htmlFor="baiguullaga"
          className={`flex w-full text-black items-center justify-start px-4 py-4 border bg-white hover:bg-gray-50 font-medium text-base rounded-lg cursor-pointer ${
            activeType === "baiguullaga"
              ? "border-black shadow-lg"
              : "border-gray-300"
          }`}
        >
          <RadioGroupItem
            value="baiguullaga"
            id="baiguullaga"
            className="mr-2"
          />
          Байгууллага
        </Label>
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
                    placeholder={
                      activeType === "huwiHun"
                        ? "Регистрийн дугаар оруулна уу"
                        : "Регистрийн дугаар оруулна уу"
                    }
                    type="text"
                    {...field}
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
