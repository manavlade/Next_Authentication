"use client"
import { useForm } from 'react-hook-form'
import { zodResolver } from "@hookform/resolvers/zod";
import { RegisterSchema } from '@/schemas';
import * as z from "zod";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage

} from '../ui/form';

import { CardWrapper } from './card-wrapper'
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { FormError } from '../form-error';
import { FormSuccess } from '../form-success';
import { Register } from '@/actions/register';
import { useState, useTransition } from 'react';

export default function RegisterForm() {

  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState<string | undefined>("");
  const [success, setSuceess] = useState<string | undefined>("");

  const form = useForm<z.infer<typeof RegisterSchema>>({
    resolver: zodResolver(RegisterSchema),
    defaultValues: {
      email: "",
      password: "",
      name: "",
    },
  })

  const onSubmit = (values: z.infer<typeof RegisterSchema>) => {
    setError("")
    setSuceess("")
    startTransition(() => {
      Register(values)
        .then((data) => {
          setError(data.error);
          setSuceess(data.success)
        })
    })
  }

  return (
    <CardWrapper
      headerLabel="Create an account"
      backButtonLabel="Alreay Have an account"
      backButtonHref="/auth/login"
      showSocial
    >
      <Form  {...form} >
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className=' space-y-6'
        >
          <div>
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    Name
                  </FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      disabled={isPending}
                      placeholder='Mr X'
                      type="name"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    Email
                  </FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      disabled={isPending}
                      placeholder='auth@gmail.com'
                      type="email"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    Password
                  </FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      disabled={isPending}
                      placeholder='********'
                      type="password"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
          </div>
          <FormError message= {error} />
          <FormSuccess message= {success} />
          <Button
            disabled={isPending}
            variant="destructive"
            size="lg"
            type="submit"
            className=' text-lg bg-purple-800  w-full'
          >
            Create Account
          </Button>
        </form>
      </Form>
    </CardWrapper>
  )
}
