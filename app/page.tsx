import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 w-screen bg-gray-100">
      <h1
        className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 drop-shadow-lg animate-pulse mb-6"
        style={{
          textShadow: "0 4px 24px rgba(199, 21, 133, 0.4), 0 1.5px 0 #fff",
          letterSpacing: "0.1em",
        }}
      >
        WONDERLIFE.VN
      </h1>
    </div>
  );
}
