import {
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/shared/components/ui/form/form";
import { Input } from "@/shared/components/ui/form/input";
import { IAuthForm } from "@/shared/types/auth";
import { UseFormReturn } from "react-hook-form";

type Props = {
  form: UseFormReturn<IAuthForm, any, IAuthForm>;
  isPending: boolean;
  isRegistration?: boolean;
};

export function AuthFields({ form, isPending, isRegistration = false }: Props) {
  return (
    <>
      {isRegistration && (
        <FormField
          control={form.control}
          name="name"
          rules={{
            required: true,
          }}
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input disabled={isPending} {...field} placeholder="Иван" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      )}
      <FormField
        control={form.control}
        name="email"
        rules={{
          required: true,
          pattern: {
            value:
              /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            message: "Введите почту",
          },
        }}
        render={({ field }) => (
          <FormItem>
            <FormControl>
              <Input
                placeholder="ivan@examle.com"
                type="email"
                disabled={isPending}
                {...field}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="password"
        rules={{
          required: true,
          minLength: {
            value: 6,
            message: "Минимум 6 символов",
          },
        }}
        render={({ field }) => (
          <FormItem>
            <FormControl>
              <Input
                placeholder="******"
                type="password"
                disabled={isPending}
                {...field}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </>
  );
}
