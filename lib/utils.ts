import React from "react";

import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

import { Camera, Color, Point, Side, XYWH } from "@/types/canvas";

const COLORS = [
  "#DC2626",
  "#D97706",
  "#059669",
  "#2563EB",
  "#7C3AED",
  "#F43F5E",
];

export const SELF_COLOR = "#0e776e";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function parseConnectionIdToColor(connectionId: number): string {
  const random_index = connectionId % COLORS.length;
  return COLORS[random_index];
}

export function parsePointerEventToCanvasPoint(
  e: React.PointerEvent,
  camera: Camera
) {
  return {
    x: Math.round(e.clientX) - camera.x,
    y: Math.round(e.clientY) - camera.y,
  };
}

export function parseColorToCss(color: Color) {
  return `#${color.r.toString(16).padStart(2, "0")}${color.g.toString(16).padStart(2, "0")}${color.b.toString(16).padStart(2, "0")}`;
}

export function resizeBounds(bounds: XYWH, corner: Side, point: Point): XYWH {
  const result = {
    x: bounds.x,
    y: bounds.y,
    width: bounds.width,
    height: bounds.height,
  };

  if ((corner & Side.Left) === Side.Left) {
    result.x = Math.min(point.x, bounds.x + bounds.width);
    result.width = Math.abs(bounds.x + bounds.width - point.x);
  }

  if ((corner & Side.Right) === Side.Right) {
    result.x = Math.min(point.x, bounds.x);
    result.width = Math.abs(point.x - bounds.x);
  }

  if ((corner & Side.Top) === Side.Top) {
    result.y = Math.min(point.y, bounds.y + bounds.height);
    result.height = Math.abs(bounds.y + bounds.height - point.y);
  }

  if ((corner & Side.Bottom) === Side.Bottom) {
    result.y = Math.min(point.y, bounds.y);
    result.height = Math.abs(point.y - bounds.y);
  }

  return result;
}
