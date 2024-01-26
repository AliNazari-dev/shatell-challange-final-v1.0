"use server";

import { LoginSchema } from "@/schemas";
import * as z from "zod";

export const login = async (values: z.infer<typeof LoginSchema>) => {
  const validationFields = LoginSchema.safeParse(values);

  if (!validationFields.success) {
    return { error: "Invalid Fields" };
  }

  return { success: "Account created" };
};
