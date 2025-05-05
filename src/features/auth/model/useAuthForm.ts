import { DASHBOARD_URL } from "@/shared/services/config/url.config";
import { authService } from "@/shared/services/auth/auth.service";
import { IAuthForm } from "@/shared/types/auth";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { SubmitHandler, useForm } from "react-hook-form";
import toast from "react-hot-toast";

export function useAuthForm(isRegistration: boolean) {
  const router = useRouter();

  const form = useForm<IAuthForm>({ mode: "onChange" });

  const { mutate, isPending } = useMutation({
    mutationFn: (data: IAuthForm) => {
      return authService.main(isRegistration ? "registration" : "login", data);
    },
    onSuccess: () => {
      form.reset();
      toast.success("Успешная авторизация");
      router.replace(DASHBOARD_URL.home());
    },
    onError: (error) => {
      if (error.message) {
        toast.error(error.message);
      } else {
        toast.error("Ошибка при авторизации");
      }
    },
  });

  const onSubmit: SubmitHandler<IAuthForm> = (data) => {
    mutate(data);
  };

  return { onSubmit, isPending, form };
}
