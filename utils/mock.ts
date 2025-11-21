import { Server } from "./types";

export const servers: Server[] = [
  {
    id: 1,
    name: "DM #1",
    map: "Overpass",
    players: "8",
    maxPlayers: "16",
    mode: "DM",
    ip: "123.45.67.1:27015",
  },
  {
    id: 2,
    name: "DM #2",
    map: "Dust2",
    players: "10",
    maxPlayers: "16",
    mode: "DM",
    ip: "123.45.67.2:27015",
  },
  {
    id: 3,
    name: "DM #3",
    map: "Mirage",
    players: "12",
    maxPlayers: "16",
    mode: "DM",
    ip: "123.45.67.3:27015",
  },

  {
    id: 4,
    name: "5v5 #1",
    map: "Dust2",
    players: "3",
    maxPlayers: "10",
    mode: "5v5",
    ip: "123.45.68.1:27015",
  },
  {
    id: 5,
    name: "5v5 #2",
    map: "Mirage",
    players: "6",
    maxPlayers: "10",
    mode: "5v5",
    ip: "123.45.68.2:27015",
  },
  {
    id: 6,
    name: "5v5 #3",
    map: "Inferno",
    players: "10",
    maxPlayers: "10",
    mode: "5v5",
    ip: "123.45.68.3:27015",
  },

  {
    id: 7,
    name: "Retake #1",
    map: "Train",
    players: "4",
    maxPlayers: "10",
    mode: "Retake",
    ip: "123.45.69.1:27015",
  },
  {
    id: 8,
    name: "Retake #2",
    map: "Anubis",
    players: "5",
    maxPlayers: "10",
    mode: "Retake",
    ip: "123.45.69.2:27015",
  },
  {
    id: 9,
    name: "Retake #3",
    map: "Overpass",
    players: "7",
    maxPlayers: "10",
    mode: "Retake",
    ip: "123.45.69.3:27015",
  },

  {
    id: 10,
    name: "5v5 #4",
    map: "Ancient",
    players: "6",
    maxPlayers: "10",
    mode: "5v5",
    ip: "123.45.69.3:27015",
  },
  {
    id: 11,
    name: "5v5 #5",
    map: "Overpass",
    players: "5",
    maxPlayers: "10",
    mode: "5v5",
    ip: "123.45.69.3:27015",
  },
  {
    id: 12,
    name: "5v5 #6",
    map: "Anubis",
    players: "10",
    maxPlayers: "10",
    mode: "5v5",
    ip: "123.45.69.3:27015",
  },
];

export const Premiums = [
  {
    id: 1,
    name: "Premium Lite",
    price: 10000,
    discountPersantage: 0,
    discountEnds: "",
    benfists: [
      "Rezervlangan Slot",
      "Premium Teg",
      "Skinchanger",
      "Agentlar",
      "Musiqa To'plami",
      "AWP cheklovidan immunitet",
      "Tasodifiy smoke rangi",
      "RETAKE serverlarida kutishsiz o'yinga qo'shilish",
      "Va boshqa imkoniyatlar"
    ],
    term: "30 kun"
  },
  {
    id: 2,
    name: "Premium Lite",
    price: 300000,
    discountPersantage: 50,
    discountEnds: "31.12.2025 23:59",
    benfists: [
      "Rezervlangan Slot",
      "Premium Teg",
      "Skinchanger",
      "Agentlar",
      "Musiqa To'plami",
      "AWP cheklovidan immunitet",
      "Tasodifiy smoke rangi",
      "RETAKE serverlarida kutishsiz o'yinga qo'shilish",
      "Va boshqa imkoniyatlar"
    ],
    term: "1 yil"
  }
]