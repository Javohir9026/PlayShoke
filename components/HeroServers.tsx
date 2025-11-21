"use client";

import { servers } from "@/utils/mock";
import { Server } from "@/utils/types";
import Dust2Map from "@/assets/images/maps/dust2.webp";
import InfernoMap from "@/assets/images/maps/inferno.webp";
import NukeMap from "@/assets/images/maps/nuke.png";
import MirageMap from "@/assets/images/maps/mirage.webp";
import OverpassMap from "@/assets/images/maps/overpass.webp";
import AnubisMap from "@/assets/images/maps/Anubis.webp";
import AncientMap from "@/assets/images/maps/Ancient.jpg";
import TrainMap from "@/assets/images/maps/Train.jpg";
import DefaultMap from "@/assets/images/maps/default.jpg";

import Dust2Icon from "@/assets/images/MapIcons/dust2Icon.webp";
import infernoIcon from "@/assets/images/MapIcons/InfernoIcon.png";
import NukeIcon from "@/assets/images/MapIcons/NukeIcon.webp";
import MirageIcon from "@/assets/images/MapIcons/MirageIcon.webp";
import OverpassIcon from "@/assets/images/MapIcons/OberpassIcon.webp";
import AnubisIcon from "@/assets/images/MapIcons/AnubisIcon.png";
import AncientIcon from "@/assets/images/MapIcons/AncientIcon.webp";
import TrainIcon from "@/assets/images/MapIcons/TrainIcon.webp";
import DefaultIcon from "@/assets/images/MapIcons/DefaultIcon.png";

import Image from "next/image";
import { Copy, Dot, Play, Users } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

const HeroServers = () => {
  const ServersDM: Server[] = servers.filter((server) => server.mode === "DM");
  const ServersRetake: Server[] = servers.filter(
    (server) => server.mode === "Retake"
  );
  const Servers5V5: Server[] = servers.filter(
    (server) => server.mode === "5v5"
  );
  const ServerModes = [
    "All",
    ...new Set(servers.map((servers) => servers.mode)),
  ];
  const [copiedId, setCopiedId] = useState<number | null>(null);
  const [selectedMode, setSelectedMode] = useState<string>("All");
  const handleCopy = (ip: string, id: number) => {
    navigator.clipboard.writeText(`connect ${ip}`);
    setCopiedId(id);

    setTimeout(() => setCopiedId(null), 2000);
  };

  const ServerMapImage = (map: string) => {
    if (map === "Dust2") return Dust2Map;
    if (map === "Inferno") return InfernoMap;
    if (map === "Nuke") return NukeMap;
    if (map === "Mirage") return MirageMap;
    if (map === "Ancient") return AncientMap;
    if (map === "Overpass") return OverpassMap;
    if (map === "Anubis") return AnubisMap;
    if (map === "Train") return TrainMap;
    return DefaultMap;
  };
  const ServerIcon = (icon: string) => {
    if (icon === "Dust2") return Dust2Icon;
    if (icon === "Inferno") return infernoIcon;
    if (icon === "Nuke") return NukeIcon;
    if (icon === "Mirage") return MirageIcon;
    if (icon === "Ancient") return AncientIcon;
    if (icon === "Overpass") return OverpassIcon;
    if (icon === "Anubis") return AnubisIcon;
    if (icon === "Train") return TrainIcon;

    return DefaultIcon;
  };
  const renderServerCard = (server: Server) => (
    <div
      key={server.id}
      className="relative h-[200px] rounded-[30px] overflow-hidden text-white shadow-[200px] group"
    >
      <Image
        src={ServerMapImage(server.map)}
        alt={server.map}
        fill
        className="object-cover"
      />

      <div
        className="absolute inset-0 rounded-[30px] bg-black/50 flex flex-col justify-between p-4
        text-center transition-all duration-300 group-hover:bg-black/70 
            border-3 border-transparent hover:border-red-500"
      >
        <div className="flex flex-col items-center">
          <h2 className="text-[24px] flex gap-2 items-center font-bold">
            PlayShoke
            <Dot />
            {server.name}
          </h2>
          <div className="flex gap-1 items-center">
            <Image
              src={ServerIcon(server.map)}
              width={20}
              height={20}
              alt={server.name}
            />
            <h1>{server.map}</h1>
          </div>
        </div>

        <div className="flex justify-center items-center flex-1">
          <div className="rounded-full bg-white/20 p-2 hover:bg-black/70 cursor-pointer">
            <Play
              width={35}
              height={35}
              strokeWidth={1.5}
              className="hover:stroke-red-500"
            />
          </div>
        </div>

        <div className="flex flex-col gap-1">
          <div className="flex justify-between w-full text-[16px]">
            <button
              className="flex items-center cursor-pointer text-white/80 hover:text-red-500"
              onClick={() => handleCopy(server.ip, server.id)}
            >
              <Copy width={18} height={18} />
              {copiedId === server.id ? "Copied!" : server.ip}
            </button>

            <button className="flex items-center text-white/80 hover:text-red-500 cursor-pointer">
              <Users width={18} height={18} /> {server.players}/
              {server.maxPlayers}
            </button>
          </div>
          <div className="w-full h-2 bg-white/20 rounded-lg">
            <div
              className="h-2 bg-red-500 rounded-lg"
              style={{
                width: `${
                  (Number(server.players) / Number(server.maxPlayers)) * 100
                }%`,
              }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
  return (
    <div className="flex flex-col mt-15 gap-8 px-4">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <h1 className="font-bold text-2xl md:text-3xl text-center md:text-left">
          Bizning Serverlar
        </h1>

        <div className="flex flex-wrap justify-center md:justify-end gap-2">
          {ServerModes.map((mode) => (
            <button
              key={mode}
              onClick={() => setSelectedMode(mode)}
              className={cn(
                "px-3 py-1 rounded-md transition text-sm sm:text-base",
                selectedMode === mode
                  ? "bg-red-600 text-white font-bold"
                  : "bg-neutral-800 text-gray-300 hover:bg-neutral-700"
              )}
            >
              {mode === "All" ? "Barchasi" : mode}
            </button>
          ))}
        </div>
      </div>

      {selectedMode === "All" && (
        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-4">
            <h2 className="text-2xl font-semibold text-center">5v5</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {Servers5V5.map(renderServerCard)}
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <h2 className="text-2xl font-semibold text-center">DeathMatch</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {ServersDM.map(renderServerCard)}
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <h2 className="text-2xl font-semibold text-center">Retake</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {ServersRetake.map(renderServerCard)}
            </div>
          </div>
        </div>
      )}
      {selectedMode === "5v5" && (
        <div className="flex flex-col gap-4">
          <h2 className="text-2xl font-semibold text-center">5v5</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {Servers5V5.map(renderServerCard)}
          </div>
        </div>
      )}
      {selectedMode === "DM" && (
        <div className="flex flex-col gap-4">
          <h2 className="text-2xl font-semibold text-center">DeathMatch</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {ServersDM.map(renderServerCard)}
          </div>
        </div>
      )}
      {selectedMode === "Retake" && (
        <div className="flex flex-col gap-4">
          <h2 className="text-2xl font-semibold text-center">Retake</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {ServersRetake.map(renderServerCard)}
          </div>
        </div>
      )}
    </div>
  );
};

export default HeroServers;
