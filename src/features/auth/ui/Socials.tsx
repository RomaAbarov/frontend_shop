import { GoogleIcon } from "@/shared/components/ui";
import { Button } from "@/shared/components/ui/button";
import { SERVER_URL } from "@/shared/services/config/api.config";
import { useRouter } from "next/navigation";

export function Socials() {
  const router = useRouter();

  return (
    <div className="space-y-3 w-full mt-5">
      <Button
        className="w-full"
        variant="outline"
        onClick={() => router.push(`${SERVER_URL}/auth/google`)}
      >
        <GoogleIcon size={20} />
        Продолжить через Google
      </Button>
    </div>
  );
}
