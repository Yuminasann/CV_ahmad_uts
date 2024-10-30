"use client";
import { useState } from "react";

export default function Form() {
  const [nama, setNama] = useState('');
  const [email, setEmail] = useState('');
  const [pesan, setPesan] = useState('');
  const [rating, setRating] = useState(0);
  const [isSent, setIsSent] = useState(false);

  function handleNamaChange(e:any) {
    setNama(e.target.value);
  }

  function handleEmailChange(e:any) {
    setEmail(e.target.value);
  }

  function handlePesanChange(e:any) {
    setPesan(e.target.value);
  }

  function handleRatingChange(ratingValue:any) {
    setRating(ratingValue);
  }

  if (isSent) {
    return (
      <div className="text-center mt-10">
        <h1 className="text-2xl font-bold">Terima Kasih!</h1>
        <h2 className="mt-4">Nama: {nama}</h2>
        <h2>Email: {email}</h2>
        <h2>Pesan: {pesan}</h2>
        <h2>Rating: {rating} bintang</h2>
        <p className="mt-2">Data di atas akan segera diinput ke database. Terima kasih!</p>
      </div>
    );
  }

  return (
    <div className="flex justify-center mt-20">
      <form
        className="flex flex-col w-1/3 p-6 border border-gray-300 rounded-lg shadow-lg"
        onSubmit={(e) => {
          e.preventDefault();
          setIsSent(true);
        }}
      >
        <h2 className="text-center text-2xl font-semibold mb-5">Contact Saya</h2>

        <label className="mb-4">
          Nama Depan:
          <input
            className="block w-full p-2 mt-1 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-green-300"
            onChange={handleNamaChange}
            required
          />
        </label>

        <label className="mb-4">
          Email:
          <input
            type="email"
            className="block w-full p-2 mt-1 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-green-300"
            onChange={handleEmailChange}
            required
          />
        </label>

        <label className="mb-4">
          Pesan:
          <textarea
            className="block w-full p-2 mt-1 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-green-300"
            onChange={handlePesanChange}
            required
          ></textarea>
        </label>

        <label className="mb-4">
          Rating:
          <div className="flex space-x-1 mt-1">
            {[1, 2, 3, 4, 5].map((value) => (
              <span
                key={value}
                onClick={() => handleRatingChange(value)}
                className={`cursor-pointer text-2xl ${rating >= value ? 'text-yellow-500' : 'text-gray-300'}`}
              >
                ★
              </span>
            ))}
          </div>
        </label>

        <div className="flex justify-between">
          <button type="submit" className="w-1/2 p-2 mr-2 text-white bg-green-500 rounded-full hover:bg-green-600 transition">
            Submit
          </button>
          <button type="reset" className="w-1/2 p-2 text-white bg-gray-500 rounded-full hover:bg-gray-600 transition">
            Clear
          </button>
        </div>
      </form>
    </div>
  );
}
