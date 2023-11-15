import CourseComponent from "./CourseComponent";
import React, { useState } from "react";

export default function Courses() {
  const courses = [
    {
      id: 1,
      title: "Python Practicando. Desde 0 hasta Desarrollador en Python",
      author: "Juan",
      price: 100,
      image_url:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqwumba5GzdXVsHLj4vx_IgRvRfkIXkh_FKDiTgmPJsol6nNkjlXG33iA_j5I3Hte6SBo&usqp=CAU",
    },
  ];

  const ciudades = [
    "Nueva York",
    "Los Ángeles",
    "Chicago",
    "Houston",
    "Phoenix",
    "Philadelphia",
    "San Antonio",
    "San Diego",
    "Dallas",
    "San José",
    "Jacksonville",
    "Indianápolis",
    "Austin",
    "San Francisco",
    "Columbus",
    "Charlotte",
    "Fort Worth",
    "Detroit",
    "El Paso",
    "Memphis",
    "Baltimore",
    "Boston",
    "Seattle",
    "Washington, DC",
    "Nashville",
    "Denver",
    "Milwaukee",
    "Portland",
    "Oklahoma City",
    "Las Vegas",
    "Albuquerque",
  ];

  const categorias = [
    "Diseño",
    "Tecnología",
    "Diseño Web",
    "Desarrollo de Aplicaciones",
    "Redacción",
    "Marketing",
    "Robótica",
    "Ciencias",
    "Idiomas",
    "Programación",
  ];

  const [selectedCiudad, setSelectedCiudad] = useState("");
  const [selectedCategoria, setSelectedCategoria] = useState("");
  const [selectedCost, setSelectedCost] = useState("");
  const [afinity, setAfinity] = useState("?");

  const handleSelectCityChange = (e) => {
    setSelectedCiudad(e.target.value);
  };

  const handleSelectCategoryChange = (e) => {
    setSelectedCategoria(e.target.value);
  };

  const handleSelectCostChange = (e) => {
    setSelectedCost(e.target.value);
  };

  const handleConsultarAfinidad = async () => {
    try {
      const endpoint = "https://www.boredapi.com/api/activity"; // Reemplaza con tu endpoint real

      if (selectedCiudad === "") {
        alert("Ciudad no seleccionada");
        return;
      }
      if (selectedCategoria === "") {
        alert("Categoria no seleccionada");
        return;
      }
      if (selectedCost === "") {
        alert("Costo no seleccionado");
        return;
      }

      const data = {
        ciudad: selectedCiudad,
        categoria: selectedCategoria,
        costo: selectedCost,
      };

      console.log(JSON.stringify(data));

      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        const responseData = await response.json();
        setAfinity(responseData);
        console.log("Datos enviados exitosamente:", responseData);
      } else {
        console.error("Error al enviar datos");
      }
    } catch (error) {
      console.error("Error en la solicitud:", error);
    }
  };

  return (
    <div className="flex flex-col pl-10 mb-5 bg-red">
      <div className="pt-10 font-serif text-3xl">
        ¿Me podría gustar este curso?{" "}
      </div>
      <div className="flex">
        <div className="flex w-2/3 p-4 mt-3 space-x-8 bg-purple-600">
          <div className="w-1/3">
            <div className="font-serif font-bold text-white">Ciudad</div>
            <select
              id="selectInput"
              value={selectedCiudad}
              onChange={handleSelectCityChange}
              className="w-full border rounded-lg"
            >
              <option value="">Selecciona...</option>
              {ciudades.map((ciudad, index) => (
                <option key={index} value={ciudad}>
                  {ciudad}
                </option>
              ))}
            </select>
          </div>
          <div className="w-1/3">
            <div className="font-serif font-bold text-white">Categoria</div>
            <select
              id="selectInput"
              value={selectedCategoria}
              onChange={handleSelectCategoryChange}
              className="w-full border rounded-lg"
            >
              <option value="">Selecciona...</option>
              {categorias.map((categoria, index) => (
                <option key={index} value={categoria}>
                  {categoria}
                </option>
              ))}
            </select>
          </div>
          <div className="w-1/3">
            <div className="font-serif font-bold text-white">Costo</div>
            <input
              type="number"
              className="w-full border rounded-lg"
              onChange={handleSelectCostChange}
            ></input>
          </div>
        </div>
        <div className="items-center justify-center h-full mt-8 ml-10 bg-red">
          <button
            className="py-2 px-6 bg-black text-white border-[1px] border-black font-semibold hover:bg-slate-50 hover:text-black"
            onClick={handleConsultarAfinidad}
          >
            Click para ver que tan afín es este curso
          </button>
        </div>
      </div>
      <div className="flex mt-4">
        <div className="flex flex-wrap justify-center w-1/2 h-full text-black lg:justify-start">
          {courses?.map((item, key) => (
            <CourseComponent key={key} data={item} />
          ))}
        </div>
        <div className="flex flex-col justify-center w-1/4 h-full py-10 ml-10 space-y-3 text-center text-white bg-black lg:justify-start">
          <div className="justify-center font-serif text-3xl">
            Tu afinidad con este curso es de
          </div>
          <div className="justify-center font-serif text-5xl">
            {afinity + "/10"}
          </div>
        </div>
      </div>
    </div>
  );
}
