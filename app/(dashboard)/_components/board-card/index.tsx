"use client";

import Image from "next/image";
import Link from "next/link";

import { useAuth } from "@clerk/nextjs";

import { formatDistanceToNow } from "date-fns";

import { Skeleton } from "@/components/ui/skeleton";
import { Actions } from "../actions";

import { Overlay } from "./overlay";
import { Footer } from "./footer";
import { CircleEllipsis, MoreHorizontal } from "lucide-react";

interface BoardCardProps {
  key: string;
  id: string;
  title: string;
  authorId: string;
  authorName: string;
  createdAt: number;
  imageUrl: string;
  orgId: string;
  isFavorite: boolean;
}

export const BoardCard = ({
  id,
  title,
  authorId,
  authorName,
  createdAt,
  imageUrl,
  orgId,
  isFavorite,
}: BoardCardProps) => {
  const { userId } = useAuth();

  const authorLabel = userId === authorId ? "You" : authorName;
  const createdAtLabel = formatDistanceToNow(createdAt, {
    addSuffix: true,
  });

  return (
    <Link href={`/board/${id}`}>
      <div className="group aspect-[100/127] border rounded-lg flex flex-col justify-between overflow-hidden">
        <div className="relative flex-1 bg-secondary">
          <Image
            src={imageUrl}
            alt={"Image of board"}
            fill
            className="object-fit"
          />
          <Overlay />
          <Actions id={id} title={title} side="right">
            <button className="absolute top-0 right-1 opacity-0 group-hover:opacity-100 transition-opacity px-1 py-1 outline-none">
              <MoreHorizontal className="h-7 w-7 text-primary opacity-75 hover:opacity-100 transition-opacity" />
            </button>
          </Actions>
        </div>
        <Footer
          isFavorite={isFavorite}
          title={title}
          authorLabel={authorLabel}
          createdAtLabel={createdAtLabel}
          onClick={() => {}}
          disabled={false}
        />
      </div>
    </Link>
  );
};

BoardCard.Skeleton = function BoardCardSkeleton() {
  return (
    <div className="aspect-[100/127] border rounded-lg overflow-hidden">
      <Skeleton className="h-full w-full" />
    </div>
  );
};
