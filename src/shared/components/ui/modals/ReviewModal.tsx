import { IReviewInput } from "@/shared/types/review";
import { PropsWithChildren, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../form/form";
import { Rating } from "react-simple-star-rating";
import { Textarea } from "../textarea";
import { Button } from "../button";
import { useCreateReview } from "@/features/product/model";

export function ReviewModal({ children }: PropsWithChildren) {
  const [isOpen, setIsOpen] = useState(false);

  const form = useForm<IReviewInput>({
    mode: "onChange",
  });

  const createReview = useCreateReview(() => {
    form.reset();
    setIsOpen(false);
  });

  const onSubmit: SubmitHandler<IReviewInput> = (data) => {
    createReview.mutate(data);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Создание отзыва</DialogTitle>
          <DialogDescription>
            Для создания отзыва необходимо указать рейтинг и текст.
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="rating"
              rules={{
                required: "Рейтинг обязателен",
              }}
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Rating
                      onClick={field.onChange}
                      initialValue={field.value}
                      SVGstyle={{
                        display: "inline-block",
                      }}
                      size={20}
                      transition
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="text"
              rules={{
                required: true,
              }}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Текст</FormLabel>
                  <FormControl>
                    <Textarea
                      {...field}
                      placeholder="Текст отзыва"
                      disabled={createReview.isPending}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="flex justify-end">
              <Button disabled={createReview.isPending}>Добавить</Button>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
