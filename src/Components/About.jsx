import React from "react";
import Navbar from "./Navbar";
function About() {
  return (
    <>
      <Navbar />
      <div className="bg-white">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div className="sm:flex sm:flex-col sm:align-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-center">
              Welcome to PMusic, your ultimate source of music entertainment!
            </h2>
            <p className="mt-5 text-xl text-gray-500 sm:text-center">
              We are a team of passionate music enthusiasts who believe that
              music is a powerful form of expression that can inspire and unite
              people from all walks of life. Our mission is to provide you with
              a comprehensive platform that offers a diverse range of music
              genres and artists from around the world.
            </p>
          </div>
          <div className="mt-10">
            <h3 className="mt-3 text-lg text-gray-500">
              At PMusic, we strive to bring you the latest and greatest in the
              music industry. Our team works tirelessly to curate playlists that
              cater to different moods and occasions, whether you're looking for
              a soothing melody to unwind after a long day, or an upbeat track
              to get you pumped for a workout session. We also feature exclusive
              interviews with your favorite artists, behind-the-scenes footage
              of concerts and events, and breaking news updates on the latest
              happenings in the music world.
            </h3>
            <p className="mt-3 text-lg text-gray-500">
              We take pride in providing a seamless user experience, making it
              easy for you to discover new music, create and share playlists,
              and connect with other music lovers. Our platform is accessible
              across all devices, so you can enjoy your favorite tunes anytime,
              anywhere. But we're more than just a music streaming service. We
              believe that music has the power to make a positive impact on
              society, which is why we've partnered with various charities and
              non-profit organizations to support their causes through music.
              Thank you for choosing PMusic as your go-to source for all things
              music. We hope to inspire you, entertain you, and connect you with
              the world through the universal language of music.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
