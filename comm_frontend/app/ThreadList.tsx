"use client";
import { useState, useEffect } from "react";
import Thread from "./Thread";
import { io } from "socket.io-client";

interface Thread {
  _id: string;
  title: string;
  description: string;
  author: string;
  date: string;
  awnsers: string[];
}

const socket = io("http://localhost:3000");

export default function ThreadList() {
  const [threads, setThreads] = useState<Thread[]>([]);

  async function getThreads() {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_CLIENT}`);
    const data = await response.json();
    setThreads(data);
  }

  useEffect(() => {
    getThreads();
    socket.on("changesInThreads", getThreads);

    // Cleanup-Funktion
    return () => {
      socket.off("changesInThreads", getThreads);
    };
  }, []);

  return (
    <>
      {threads.length === 0 ? (
        <div className="text-2xl font-bold text-white mx-auto">No Threads</div>
      ) : (
        threads.map((thread: Thread) => (
          <Thread thread={thread} key={thread._id} />
        ))
      )}
    </>
  );
}
