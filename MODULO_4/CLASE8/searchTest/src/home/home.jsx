import React, { useState } from 'react'
import { data } from "../data";
import { useSearchParams } from 'react-router-dom';

const Home = () => {

    const [buscar, setBuscar] = useState("");
  const [param, setParam] = useSearchParams('');

  function agregarParam(){
    setParam({
      name: 'rick',
      apellido: 'sanchez'
    })
  }

  function eliminarParam(){
    param.delete('name')
  }

  return (
    <div>
        <form className="flex items-center max-w-sm mx-auto">
        <div className="relative w-full">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg
              className="w-4 h-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            type="text"
            id="simple-search"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search branch name..."
            onChange={(e) => {
              setBuscar(e.target.value);
              console.log(e.target.value, "valor input");
            }}
            required
          />
        </div>
        <button
          onClick={agregarParam}
          type="submit"
          className="p-2.5 ms-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          <svg
            className="w-4 h-4"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
          <span className="sr-only">Search</span>
        </button>
      </form>

      
      <div className="relative overflow-x-auto mt-6">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                identificacion
              </th>
              <th scope="col" className="px-6 py-3">
                Nombre
              </th>
              <th scope="col" className="px-6 py-3">
                Apellido
              </th>
              <th scope="col" className="px-6 py-3">
                Correo Electronico
              </th>
              <th scope="col" className="px-6 py-3">
                Genero
              </th>
            </tr>
          </thead>
          <tbody>
            {data
              .filter((res) => {
                return buscar.toLowerCase() === ""
                  ? res
                  : res.first_name.toLowerCase().includes(buscar);
              })
              .map((info) => {
                return (
                  <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      {info.id}
                    </th>
                    <td className="px-6 py-4">{info.first_name}</td>
                    <td className="px-6 py-4">{info.last_name}</td>
                    <td className="px-6 py-4">{info.email}</td>
                    <td className="px-6 py-4">{info.gender}</td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Home