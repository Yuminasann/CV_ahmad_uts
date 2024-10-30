"use client";

import { useState } from "react";

export default function FavColor() {
    const [warna, setWarna] = useState("Biru");

    const backgroundColor = () => {
        switch (warna.toLowerCase()) {
            case "merah":
                return "bg-red-500";
            case "kuning":
                return "bg-yellow-500";
            case "biru":
                return "bg-blue-500";
            case "hijau":
                return "bg-green-500";
            case "ungu":
                return "bg-purple-500";
            default:
                return "bg-white";
        }
    };

    return (
        <div className={`container mx-auto p-4 text-center ${backgroundColor()}`}>
            <h1 className="text-white">Warna Favorit saya adalah {warna}</h1>
            <hr className="m-10" />
            <p className="text-white">Ubah state warna ke warna:</p>
            <button
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                onClick={() => setWarna("Merah")}
            >
                Merah
            </button>
            <button
                className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded"
                onClick={() => setWarna("Kuning")}
            >
                Kuning
            </button>
            <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                onClick={() => setWarna("Biru")}
            >
                Biru
            </button>
            <button
                className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                onClick={() => setWarna("Hijau")}
            >
                Hijau
            </button>
            <button
                className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded"
                onClick={() => setWarna("Ungu")}
            >
                Ungu
            </button>
        </div>
    );
}
