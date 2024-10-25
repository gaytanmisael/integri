import { defineAction } from "astro:actions"
import { z } from "astro:schema"

export const contact = {
  submit: defineAction({
    accept: "form",
    input: z.object({
      firstName: z.string().min(2, { message: "First name is required." }),
      lastName: z.string().min(2, { message: "Last name is required." }),
      phone: z.string().min(7, {
        message: "Please provide a valid phone number."
      }),
      email: z.string().email({
        message: "The email address you entered doesn’t seem to be valid."
      }),
      company: z.string().optional(),
      comments: z.string().optional()
    }),
    handler: async (form, ctx) => {
      console.log(form)
    }
  })
}
