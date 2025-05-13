import { Button } from "@/shared/components/ui/button";
import { useProfile } from "@/shared/hooks/queries/useProfile";
import { IProduct } from "@/shared/types/product";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { toggleFavorite } from "../../model";

type Props = {
  product: IProduct;
};

export function FavoriteButton({ product }: Props) {
  const { user } = useProfile();

  const isFavorite = user?.favorites.some((f) => f.id === product.id) ?? false;

  const { toggle, isOptimisticFavorite, isPending } =
    toggleFavorite(isFavorite);

  if (!user) {
    return null;
  }

  return (
    <Button
      variant="secondary"
      size="icon"
      onClick={() => toggle(product.id)}
      disabled={isPending}
    >
      {isOptimisticFavorite() ? (
        <AiFillHeart color="#F43F5E" className="size-5" />
      ) : (
        <AiOutlineHeart className="size-5" />
      )}
    </Button>
  );
}
