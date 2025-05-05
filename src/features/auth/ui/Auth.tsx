"use client";

import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/shared/components/ui/card";
import { Form } from "@/shared/components/ui/form/form";
import { Button } from "@/shared/components/ui/button";
import { useAuthForm } from "../model/useAuthForm";
import { AuthFields } from "./AuthFields";
import { Socials } from "./Socials";

export function Auth() {
  const [isRegistration, setIsRegistration] = useState(false);
  const { form, onSubmit, isPending } = useAuthForm(isRegistration);

  return (
    <div className="min-h-screen grid grid-cols-1 lg:grid-cols-2">
      <div className="h-full bg-blue-600 hidden lg:flex items-center justify-center">
        Привет
      </div>
      <div className="h-full flex flex-col items-center justify-center">
        <Card className="border-none p-6 flex flex-col items-center justify-center w-[380px]">
          <CardHeader className="text-center pb-5">
            <CardTitle>
              {isRegistration ? "Создать аккаунт" : "Войти в аккаунт"}
            </CardTitle>
            <CardDescription>
              Войдите или создайте учетную запись, чтобы оформлять покупки!
            </CardDescription>
          </CardHeader>
          <CardContent className="p-0 w-full">
            <Form {...form}>
              <form
                className="space-y-5"
                onSubmit={form.handleSubmit(onSubmit)}
              >
                <AuthFields
                  form={form}
                  isPending={isPending}
                  isRegistration={isRegistration}
                />
                <Button className="w-full" disabled={isPending}>
                  Продолжить
                </Button>
              </form>
            </Form>
            <Socials />
          </CardContent>
          <CardFooter className="p-0 mt-4 text-sm text-muted-foreground">
            {isRegistration ? "Уже есть аккаунт?" : "Еще нет аккаунта?"}
            <button
              className="ml-1 text-sky-600"
              onClick={() => setIsRegistration(!isRegistration)}
            >
              {isRegistration ? "Войти" : "Создать"}
            </button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
