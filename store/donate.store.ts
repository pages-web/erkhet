import { OrderItem } from "@/types/order.types";
import { atom } from "jotai";
import { atomWithStorage } from "jotai/utils";

export const donateViewAtom = atomWithStorage<string>("donateView", "");

export const donateOrderIdAtom = atomWithStorage<string>("donateOrderId", "");

export const donateItemAtom = atom<OrderItem | null>(null);
