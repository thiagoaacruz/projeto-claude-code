"use client";

import { useFavoriteCars } from "@/hooks/use-favorite-cars";
import type { Car } from "@/types/car";

import { CarCard } from "./car-card";

type CarsContentProps = {
  cars: Car[];
};

type CarSession = {
  sessionId: string;
  sessionName: string;
  cars: Car[];
};

function groupCarsBySession(cars: Car[]): CarSession[] {
  const sessions: CarSession[] = [];
  const sessionsById = new Map<string, CarSession>();

  for (const car of cars) {
    let session = sessionsById.get(car.sessionId);

    if (!session) {
      session = { sessionId: car.sessionId, sessionName: car.sessionName, cars: [] };
      sessionsById.set(car.sessionId, session);
      sessions.push(session);
    }

    session.cars.push(car);
  }

  return sessions;
}

export function CarsContent({ cars }: CarsContentProps) {
  const { favoriteIds, isFavorite, toggleFavorite } = useFavoriteCars();

  const markedCars = cars.filter((car) => favoriteIds.includes(car.id));
  const sessions = groupCarsBySession(cars);

  return (
    <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-6 py-16">
      <div className="flex flex-col gap-3">
        <h1 className="text-3xl font-semibold tracking-tight text-foreground">
          Escolha o carro que você quer comprar
        </h1>
        <p className="max-w-xl text-zinc-600 dark:text-zinc-400">
          Marque um ou mais modelos de interesse. Sua seleção fica salva
          neste navegador.
        </p>
      </div>

      {markedCars.length > 0 && (
        <div className="rounded-2xl border border-foreground/20 bg-black/[.02] p-6 dark:bg-white/[.04]">
          <h2 className="text-sm font-medium uppercase tracking-wide text-zinc-500">
            Carros marcados ({markedCars.length})
          </h2>
          <ul className="mt-3 flex flex-wrap gap-2">
            {markedCars.map((car) => (
              <li
                key={car.id}
                className="rounded-full bg-foreground px-4 py-1.5 text-sm font-medium text-background"
              >
                {car.name}
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className="flex flex-col gap-8">
        {sessions.map((session) => {
          const isSessionComplete = session.cars.every((car) =>
            isFavorite(car.id),
          );

          return (
            <section
              key={session.sessionId}
              className={`flex flex-col gap-4 rounded-2xl border p-6 transition-colors ${
                isSessionComplete
                  ? "border-green-200 bg-green-50 dark:border-green-900 dark:bg-green-950/30"
                  : "border-black/[.08] dark:border-white/[.08]"
              }`}
            >
              <h2 className="text-sm font-medium uppercase tracking-wide text-zinc-500">
                {session.sessionName}
              </h2>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {session.cars.map((car) => (
                  <CarCard
                    key={car.id}
                    car={car}
                    isMarked={isFavorite(car.id)}
                    onToggleMark={toggleFavorite}
                  />
                ))}
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
}
