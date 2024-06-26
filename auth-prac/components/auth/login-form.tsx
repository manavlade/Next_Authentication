"use client"
import { useForm } from 'react-hook-form'
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginSchema } from '@/schemas';
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
import { Login } from '@/actions/login';
import { useState, useTransition } from 'react';

export default function LoginForm() {

  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState<string | undefined>("");
  const [success, setSuceess] = useState<string | undefined>("");

  const form = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  })

  const onSubmit = (values: z.infer<typeof LoginSchema>) => {
    setError("")
    setSuceess("")
    startTransition(() => {
      Login(values)
        .then((data) => {
          setError(data.error);
          setSuceess(data.success)
        })
    })
  }

  return (
    <CardWrapper
      headerLabel="Welcome Back"
      backButtonLabel="Don't Have an account"
      backButtonHref="/auth/register"
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
            Log In
          </Button>
        </form>
      </Form>
    </CardWrapper>
  )
}
