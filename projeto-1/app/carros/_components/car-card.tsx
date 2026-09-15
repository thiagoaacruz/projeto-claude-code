"use client";

import type { Car } from "@/types/car";

type CarCardProps = {
  car: Car;
  isMarked: boolean;
  onToggleMark: (carId: string) => void;
};

export function CarCard({ car, isMarked, onToggleMark }: CarCardProps) {
  function handleToggleMark() {
    onToggleMark(car.id);
  }

  return (
    <div
      className={`flex flex-col overflow-hidden rounded-2xl border transition-colors ${
        isMarked
          ? "border-foreground"
          : "border-black/[.08] dark:border-white/[.08]"
      }`}
    >
      <div className="relative aspect-video bg-gradient-to-br from-zinc-200 to-zinc-100 dark:from-zinc-800 dark:to-zinc-900">
        <button
          type="button"
          onClick={handleToggleMark}
          aria-pressed={isMarked}
          aria-label={
            isMarked
              ? `Remover ${car.name} da lista de interesse`
              : `Marcar ${car.name} como carro de interesse`
          }
          className="absolute right-3 top-3 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-zinc-700 shadow-sm transition-colors hover:bg-white dark:bg-black/70 dark:text-zinc-200 dark:hover:bg-black"
        >
          <svg
            viewBox="0 0 24 24"
            className="h-5 w-5"
            fill={isMarked ? "currentColor" : "none"}
            stroke="currentColor"
            strokeWidth={2}
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 20.5s-7.5-4.6-9.75-9.02C.83 8.2 2.1 4.9 5.4 4.06 7.6 3.5 9.9 4.4 12 6.6c2.1-2.2 4.4-3.1 6.6-2.54 3.3.84 4.57 4.14 3.15 7.42C19.5 15.9 12 20.5 12 20.5Z"
            />
          </svg>
        </button>
      </div>

      <div className="flex flex-1 flex-col gap-3 p-6">
        <div>
          <span className="text-xs font-medium uppercase tracking-wide text-zinc-500">
            {car.category}
          </span>
          <h3 className="text-lg font-semibold text-foreground">
            {car.name}
          </h3>
        </div>

        <p className="text-sm text-zinc-600 dark:text-zinc-400">
          A partir de{" "}
          <span className="font-semibold text-foreground">
            {car.priceFrom}
          </span>
        </p>

        <button
          type="button"
          onClick={handleToggleMark}
          aria-pressed={isMarked}
          className={`mt-auto flex h-10 items-center justify-center rounded-full text-sm font-medium transition-colors ${
            isMarked
              ? "bg-foreground text-background hover:bg-[#383838] dark:hover:bg-[#ccc]"
              : "border border-solid border-black/[.08] text-foreground hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a]"
          }`}
        >
          {isMarked ? "Carro marcado" : "Marcar este carro"}
        </button>
      </div>
    </div>
  );
}
