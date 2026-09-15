import type { Car } from "@/types/car";

const cars: Car[] = [
  {
    id: "veloce-sedan-gt",
    name: "Veloce Sedan GT",
    category: "Sedã executivo",
    priceFrom: "R$ 129.900",
    sessionId: "lote-1",
    sessionName: "Lote 1",
  },
  {
    id: "veloce-suv-trail",
    name: "Veloce SUV Trail",
    category: "SUV compacto",
    priceFrom: "R$ 149.900",
    sessionId: "lote-1",
    sessionName: "Lote 1",
  },
  {
    id: "veloce-city-ev",
    name: "Veloce City EV",
    category: "Hatch elétrico",
    priceFrom: "R$ 169.900",
    sessionId: "lote-1",
    sessionName: "Lote 1",
  },
  {
    id: "veloce-pickup-terra",
    name: "Veloce Pickup Terra",
    category: "Picape média",
    priceFrom: "R$ 189.900",
    sessionId: "lote-2",
    sessionName: "Lote 2",
  },
  {
    id: "veloce-minivan-family",
    name: "Veloce Minivan Family",
    category: "Minivan 7 lugares",
    priceFrom: "R$ 179.900",
    sessionId: "lote-2",
    sessionName: "Lote 2",
  },
  {
    id: "veloce-coupe-sprint",
    name: "Veloce Coupé Sprint",
    category: "Esportivo",
    priceFrom: "R$ 219.900",
    sessionId: "lote-2",
    sessionName: "Lote 2",
  },
];

export function getCars(): Car[] {
  return cars;
}
