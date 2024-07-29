"use client";

import { api } from "@/convex/_generated/api";
import { useApiMutation } from "@/hooks/use-api-mutation";

import { cn } from "@/lib/utils";
import { Plus } from "lucide-react";
import { toast } from "sonner";

interface NewBoardButtonProps {
  orgId: string;
  disabled?: boolean;
}

export const NewBoardButton = ({ orgId, disabled }: NewBoardButtonProps) => {
  const { mutate, pending } = useApiMutation(api.board.create);

  const onClick = async () => {
    mutate({
      title: "New Board",
      orgId,
    })
      .then((id) => {
        toast.success("Board created!");
        //TODO: Redirect to the new board
      })
      .then(() => {
        toast.error("Failed to create board");
      });
  };

  return (
    <button
      disabled={disabled || pending}
      onClick={() => onClick()}
      className={cn(
        "rounded-lg group col-span-1 aspect-[100/127] border bg-secondary relative flex flex-col justify-center items-center",
        (disabled || pending) &&
          "opacity-75 hover:opacity-75 cursor-not-allowed"
      )}
    >
      <Plus
        className={cn(
          "opacity-75 group-hover:opacity-100 h-12 w-12 text-primary stroke-2",
          (disabled || pending) && "opacity-45 group-hover:opacity-45"
        )}
      />

      {!disabled && (
        <>
          <div className="rounded-lg absolute opacity-0 group-hover:opacity-20 transition-opacity h-full w-full bg-black" />
          <p className="opacity-0 group-hover:opacity-100 text-primary text-base mt-2">
            Create Board
          </p>
        </>
      )}
    </button>
  );
};