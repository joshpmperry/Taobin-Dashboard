"use client";

import Image from "next/image"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { login } from "@/lib/actions";
import { useFormState } from "react-dom";


export default function LogInPage() {

  const [state, formAction] = useFormState<any, FormData>(login, undefined)

  return (
    <div className="w-full lg:grid lg:min-h-[600px] lg:grid-cols-2 xl:min-h-[800px]">
      <div className="flex items-center justify-center py-12">
        <div className="mx-auto grid w-[350px] gap-6">
          <div className="grid gap-2 text-center">
            <h1 className="text-3xl font-bold">Log In</h1>
            <p className="text-balance text-muted-foreground">
              Enter your email below to Log in
            </p>
          </div>
        <form action={formAction}>
          <div className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                name="email"
                placeholder="username@tao-bin.com"
                required
                />
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="password">Password</Label>
              </div>
              <Input 
                id="password" 
                type="password" 
                name = "password"
                placeholder="********" 
                required />
            </div>
            <Button type="submit" className="w-full">
              Log in
            </Button>
            {state?.error && <p className="text-center text-sm text-[#9b2c3f]">{state.error}</p>}
          </div>
        </form>
          <div className="mt-4 text-center text-sm">
            Already have an account?{" "}
            <Link href="/signup" className="underline">
              Sign up
            </Link>
          </div>
        </div>
      </div>
      <div className="hidden bg-muted lg:block">
        <Image
          src="/taobin-login.png"
          alt="Image"
          width="1920"
          height="1080"
          className="h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
        />
      </div>
    </div>
  )
}
