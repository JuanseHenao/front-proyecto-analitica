import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Courses from "./Courses";
import SliderMain from "./SliderMain";

function HomePage() {
  const images = [
    "https://udemybucketeia.s3.sa-east-1.amazonaws.com/static/a.jpg",
    "https://udemybucketeia.s3.sa-east-1.amazonaws.com/static/b.jpg",
  ];

  return (
    <div className="bg-red">
      <Navbar />
      <SliderMain images={images} />
      <div className="flex justify-center my-5">
        <div className="space-y-3 text-center">
          <div className="text-lg text-gray-600">
            Más de 14.400 empresas y millones de estudiantes de todo el mundo
            confían en nosotros
          </div>
          <div className="flex flex-wrap justify-between mx-8 space-x-16 space-y-5">
            <img
              src="https://udemybucketeia.s3.sa-east-1.amazonaws.com/static/volkswagen.svg"
              className=""
              alt="volkswagen"
            />
            <img
              src="https://udemybucketeia.s3.sa-east-1.amazonaws.com/static/samsung.svg"
              className=""
              alt="samsung"
            />
            <img
              src="https://udemybucketeia.s3.sa-east-1.amazonaws.com/static/cisco.svg"
              className=""
              alt="cisco"
            />
            <img
              src="https://udemybucketeia.s3.sa-east-1.amazonaws.com/static/att.svg"
              className=""
              alt="att"
            />
            <img
              src="https://udemybucketeia.s3.sa-east-1.amazonaws.com/static/procter_gamble.svg"
              className=""
              alt="procter_gamble"
            />
            <img
              src="https://udemybucketeia.s3.sa-east-1.amazonaws.com/static/hewlett_packard_enterprise.svg"
              className=""
              alt="hewlett_packard_enterprise"
            />
            <img
              src="https://udemybucketeia.s3.sa-east-1.amazonaws.com/static/citi.svg"
              className=""
              alt="citi"
            />
            <img
              src="https://udemybucketeia.s3.sa-east-1.amazonaws.com/static/ericsson.svg"
              className=""
              alt="ericsson"
            />
          </div>
        </div>
      </div>
      <Courses />
      <Footer />
    </div>
  );
}

export default HomePage;
