import { cn } from "@/lib/utils";
import Image, { ImageProps } from "next/image";

function DOTImage({ alt, className, ...props }: ImageProps) {
  return (
    <Image
      alt={alt}
      className={cn("pointer-events-none", className)}
      {...props}
    />
  );
}

export default DOTImage;
