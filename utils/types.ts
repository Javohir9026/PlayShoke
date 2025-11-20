export interface Server {
  id: number;
  name: string;
  map: string;
  players: string;
  maxPlayers: string;
  mode: "DM" | "5v5" | "Retake";
  ip: string;
}
