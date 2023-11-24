"use client";
import Awnser from "./Awnser";
import { useState, useEffect } from "react";
import { io } from "socket.io-client";

interface Awnser {
  id: string;
  author: string;
  date: string;
  awnser: string;
}

const socket = io("http://localhost:3000");

export default function AwnserList({ threadId }: { threadId: string }) {
  const [awnsers, setAwnsers] = useState<Awnser[]>([]);

  async function getAwnsers(threadId: string) {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_CLIENT}${threadId}`
    );
    const data = await response.json();
    setAwnsers(data.awnsers);
  }

  useEffect(() => {
    getAwnsers(threadId);

    socket.on("changesInThreads", getAwnsers);

    // Cleanup-Funktion
    return () => {
      socket.off("changesInThreads", getAwnsers);
    };
  }, []);

  return (
    <>
      {awnsers.length === 0 ? (
        <div className="text-2xl font-bold text-white mx-auto w-fit">
          No Answers
        </div>
      ) : (
        awnsers.map((awnser: Awnser) => (
          <Awnser key={awnser.id} awnser={awnser} threadId={threadId} />
        ))
      )}
    </>
  );
}
