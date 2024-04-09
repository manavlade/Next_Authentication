"use server"
import * as z from "zod";

import { RegisterSchema } from "@/schemas";

export const Register = async (values: z.infer<typeof RegisterSchema > ) => {
    const validatedFields = RegisterSchema.safeParse(values);
    
    if(!validatedFields.success){
        return { error : "Invalid fiels!" };
    }

    return {  success: "Email Sent" }
};

