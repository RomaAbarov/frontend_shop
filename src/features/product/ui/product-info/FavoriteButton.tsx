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

  const mutateToggleFavorite = toggleFavorite(product.id);

  if (!user) {
    return null;
  }

  const isExists = user.favorites.some((f) => f.id === product.id);

  return (
    <Button
      variant="secondary"
      size="icon"
      onClick={() => mutateToggleFavorite.mutate()}
      disabled={mutateToggleFavorite.isPending}
    >
      {isExists ? (
        <AiFillHeart color="#F43F5E" className="size-5" />
      ) : (
        <AiOutlineHeart className="size-5" />
      )}
    </Button>
  );
}
