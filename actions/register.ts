"use server";

import { RegisterSchema } from "@/schemas";
import * as z from "zod";

export const register = async (values: z.infer<typeof RegisterSchema>) => {
  const validationFields = RegisterSchema.safeParse(values);

  if (!validationFields.success) {
    return { error: "Invalid Fields" };
  }

  return { success: "Email sent" };
};
