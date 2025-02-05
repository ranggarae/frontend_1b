import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const WatchFilm = ({ redirectPath = "/beranda" }) => {
  const [isVisible, ] = useState(true);
  const [subtitlePopupVisible, setSubtitlePopupVisible] = useState(false);
  const [speedPopupVisible, setSpeedPopupVisible] = useState(false);
  const [premiumPopupVisible, setPremiumPopupVisible] = useState(false);
  const navigate = useNavigate();

  const closeAllPopups = () => {
    setSubtitlePopupVisible(false);
    setSpeedPopupVisible(false);
    setPremiumPopupVisible(false);    
  };

  const handleSubtitleClick = () => {
    closeAllPopups();
    setSubtitlePopupVisible(!subtitlePopupVisible);
  };

  const handleSpeedClick = () => {
    closeAllPopups();
    setSpeedPopupVisible(!speedPopupVisible);
  };

  const handlePremiumClick = () => {
    closeAllPopups();
    setPremiumPopupVisible(!premiumPopupVisible);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
      {/* Popup Container */}
      <div className="relative w-full md:w-[800px] h-[300px] md:h-[450px] bg-black rounded-lg shadow-lg overflow-hidden">
        {/* Close Button */}
        <button
          className="absolute top-3 right-3 bg-gray-800 text-white rounded-full w-8 h-8 flex items-center justify-center hover:bg-gray-700 z-50"
          onClick={() => navigate(redirectPath)}>
          ✕
        </button>

        {/* Video Content */}
        <div className="relative w-full h-full">
          {/* Video Placeholder */}
          <img
            src="/WatchFilm.svg"
            alt="Video Placeholder"
            className="w-full h-full object-cover"
          />

          {/* Pause Icon */}
          <div className="absolute inset-0 flex items-center justify-center">
            <button className="bg-white bg-opacity-0 rounded-full w-12 h-12 md:w-16 md:h-16 flex items-center justify-center">
              <img
                src="/pause.svg"
                alt="Pause"
                className="w-full h-full"
              />
            </button>
          </div>

          {/* Lewati Intro */}
          <button
            className="absolute bottom-16 left-4 md:bottom-20 md:left-8 bg-white text-black px-3 py-1 md:px-4 md:py-2 rounded-full text-sm shadow hover:bg-gray-200"
          >
            Lewati Intro
          </button>
        </div>

        {/* Controls */}
        <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-80 flex items-center justify-between px-4 md:px-8 py-2 md:py-4">
          {/* Left Controls */}
          <div className="flex items-center space-x-4 md:space-x-6">
            {/* Play Button */}
            <button>
              <img
                src="/playfilm.svg"
                alt="Play"
                className="w-5 h-5 md:w-6 md:h-6"
              />
            </button>

            {/* Rewind Button */}
            <button>
              <img
                src="/rewind.svg"
                alt="Rewind"
                className="w-5 h-5 md:w-6 md:h-6"
              />
            </button>

            {/* Forward Button */}
            <button>
              <img
                src="/fastforward.svg"
                alt="Forward"
                className="w-5 h-5 md:w-6 md:h-6"
              />
            </button>

            {/* Volume */}
            <button>
              <img
                src="/volumehigh.svg"
                alt="Volume"
                className="w-5 h-5 md:w-6 md:h-6"
              />
            </button>
          </div>

          {/* Video Info */}
          <div className="text-center">
            <p className="text-white text-sm">A Man Called Otto "Example"</p>
          </div>

          {/* Right Controls */}
          <div className="flex items-center space-x-4 md:space-x-6 relative">
            {/* Subtitles Button */}
            <button onClick={handleSubtitleClick} className="relative">
              <img
                src="/subtitle.svg"
                alt="Subtitles"
                className="w-5 h-5 md:w-6 md:h-6"
              />
            </button>

            {/* Speedometer Button */}
            <button onClick={handleSpeedClick} className="relative">
              <img
                src="/speedometer.svg"
                alt="Speed"
                className="w-5 h-5 md:w-6 md:h-6"
              />
            </button>

            {/* Fullscreen Button */}
            <button onClick={handlePremiumClick} className="relative">
              <img
                src="/fullscreen.svg"
                alt="Fullscreen"
                className="w-5 h-5 md:w-6 md:h-6"
              />
            </button>
          </div>
        </div>
      </div>

      {/* Subtitles Popup */}
      {subtitlePopupVisible && (
        <div className="absolute bottom-[370px] md:bottom-[290px] right-[32%] transform translate-x-[50%] md:right-[35%] bg-gray-800 text-white rounded-lg shadow-lg p-4 w-52">
          <div className="flex justify-between">
            <div>
              <h4 className="font-semibold mb-2">Audio</h4>
              <p className="text-sm">✔ Bahasa Inggris</p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Terjemahan</h4>
              <p className="text-sm">✔ Bahasa Indonesia</p>
              <p className="text-sm">Bahasa Inggris</p>
            </div>
          </div>
        </div>
      )}

      {/* Speed Popup */}
      {speedPopupVisible && (
        <div className="absolute bottom-[365px] md:bottom-[290px] right-[20%] transform translate-x-[50%] md:right-[33%] bg-gray-800 text-white rounded-lg shadow-lg p-4 w-28">
          <h4 className="font-semibold mb-2">Kecepatan</h4>
          <ul className="space-y-1">
            <li className="text-sm">0.5x</li>
            <li className="text-sm">0.75x</li>
            <li className="text-sm font-bold">1x (Normal)</li>
            <li className="text-sm">1.25x</li>
            <li className="text-sm">1.5x</li>
          </ul>
        </div>
      )}

      {/* Premium Popup */}
      {premiumPopupVisible && (
        <div className="absolute bottom-[250px] md:bottom-[290px] right-[50%] transform translate-x-[50%] md:right-[50%] bg-black text-white rounded-lg shadow-lg p-4 md:p-6 w-[70%] md:w-[30%] text-center">
          <h4 className="text-xl font-bold mb-2">Layanan Premium🌟</h4>
          <p className="text-sm mb-4">Tingkatkan paket anda untuk dapat menonton video ini.</p>
          <h5 className="text-md font-semibold mb-3">Kenapa Harus Berlangganan?</h5>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div className="flex flex-col items-center">
              <img src="/download.svg" alt="Download" className="w-6 h-6 mb-1" />
              <p className="text-xs">Download Konten Pilihan</p>
            </div>
            <div className="flex flex-col items-center">
              <img src="/ads.svg" alt="No Ads" className="w-6 h-6 mb-1" />
              <p className="text-xs">Tidak Ada Iklan</p>
            </div>
            <div className="flex flex-col items-center">
              <img src="/movie-roll.svg" alt="All Content" className="w-6 h-6 mb-1" />
              <p className="text-xs">Tonton Semua Konten</p>
            </div>
            <div className="flex flex-col items-center">
              <img src="/4k.svg" alt="4K" className="w-6 h-6 mb-1" />
              <p className="text-xs">Kualitas Maksimal Sampai Dengan 4K</p>
            </div>
            <div className="flex flex-col items-center">
              <img src="/tablet-cellphone.svg" alt="Devices" className="w-6 h-6 mb-1" />
              <p className="text-xs">Tonton di TV, Tablet, Mobile, dan Laptop</p>
            </div>
            <div className="flex flex-col items-center">
              <img src="/subtitlepremium.svg" alt="Subtitles" className="w-6 h-6 mb-1" />
              <p className="text-xs">Subtitle Untuk Konten Pilihan</p>
            </div>
          </div>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm hover:bg-blue-700" onClick={() => navigate("/paket")}>
            Ubah Jadi Premium
          </button>
        </div>
      )}
    </div>
  );
};

export default WatchFilm;