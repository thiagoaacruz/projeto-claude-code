"use client";

import { useCallback, useSyncExternalStore } from "react";

const STORAGE_KEY = "veloce:favorite-cars";

const listeners = new Set<() => void>();

function subscribe(listener: () => void) {
  listeners.add(listener);
  window.addEventListener("storage", listener);

  return () => {
    listeners.delete(listener);
    window.removeEventListener("storage", listener);
  };
}

function notifyListeners() {
  for (const listener of listeners) listener();
}

const EMPTY_FAVORITES: string[] = [];

function parseFavorites(raw: string | null): string[] {
  if (!raw) return EMPTY_FAVORITES;

  try {
    const parsed: unknown = JSON.parse(raw);
    if (!Array.isArray(parsed)) return EMPTY_FAVORITES;

    return parsed.filter((id): id is string => typeof id === "string");
  } catch {
    return EMPTY_FAVORITES;
  }
}

let cachedRaw: string | null = null;
let cachedSnapshot: string[] = EMPTY_FAVORITES;

function readStoredFavorites(): string[] {
  let raw: string | null;
  try {
    raw = window.localStorage.getItem(STORAGE_KEY);
  } catch {
    raw = null;
  }

  if (raw !== cachedRaw) {
    cachedRaw = raw;
    cachedSnapshot = parseFavorites(raw);
  }

  return cachedSnapshot;
}

function getServerSnapshot(): string[] {
  return EMPTY_FAVORITES;
}

export function useFavoriteCars() {
  const favoriteIds = useSyncExternalStore(
    subscribe,
    readStoredFavorites,
    getServerSnapshot,
  );

  const toggleFavorite = useCallback((carId: string) => {
    const current = readStoredFavorites();
    const next = current.includes(carId)
      ? current.filter((id) => id !== carId)
      : [...current, carId];

    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
    } catch {
      // Armazenamento indisponível (ex: navegação privada); a seleção não será persistida.
    }

    notifyListeners();
  }, []);

  const isFavorite = useCallback(
    (carId: string) => favoriteIds.includes(carId),
    [favoriteIds],
  );

  return { favoriteIds, isFavorite, toggleFavorite };
}
