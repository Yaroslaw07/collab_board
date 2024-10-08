import { Heart } from "lucide-react";

import { cn } from "@/lib/utils";
import { auth } from "@clerk/nextjs/server";

interface FooterProps {
  title: string;
  authorLabel: string;
  createdAtLabel: string;
  isFavorite: boolean;
  onClick: () => void;
  disabled: boolean;
}

export const Footer = ({
  title,
  authorLabel,
  createdAtLabel,
  isFavorite,
  onClick,
  disabled,
}: FooterProps) => {
  const handleClick = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.stopPropagation();
    event.preventDefault();

    onClick();
  };

  return (
    <div className="relative bg-background p-3">
      <p className="text-[16px] font-medium truncate max-w-[calc(100%-20px)]">
        {title}
      </p>
      <p className="opacity-0 group-hover:opacity-100 transition-opacity text-[11px]">
        {authorLabel} - {createdAtLabel}
      </p>
      <button
        disabled={disabled}
        onClick={handleClick}
        className={cn(
          "opacity-0 group-hover:opacity-100 transition absolute top-[0.85rem] right-3 text-muted-foreground hover:text-accent hover:scale-110",
          isFavorite && "opacity-100",
          disabled && "cursor-not-allowed opacity-75"
        )}
      >
        <Heart
          className={cn("h-5 w-5", isFavorite && "fill-accent text-accent]")}
        />
      </button>
    </div>
  );
};
