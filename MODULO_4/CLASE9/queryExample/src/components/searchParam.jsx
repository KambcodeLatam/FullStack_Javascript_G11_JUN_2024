import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const SearchParam = () => {
  const [characterList, setCharacterList] = useState([]);
  const [query, setQuery] = useState('');
  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search)


  const handleSubmit = (e) => {
    e.preventDefault();
    if(query){
        navigate(`/?character=${query}`)
    }else{
        navigate('/')
    }
  }

  useEffect(() => {
    // "https://rickandmortyapi.com/api/character"
    const characterQuery  = queryParams.get('character')
    const url = characterQuery
        ? `https://rickandmortyapi.com/api/character/?name=${characterQuery}`
        : 'https://rickandmortyapi.com/api/character'
    const fetchCharacter = async () => {
      try {
        const res = await fetch(url);
        const data = await res.json();
        setCharacterList(data.results);
        console.log(data.results);
        
      } catch (error) {
        console.error("error con el servicio", error);
      }
    };

    fetchCharacter();
  }, [location.search]);

  return (
    <div>
      <form className="max-w-md mx-auto" onSubmit={handleSubmit}>
        <div className="relative">
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
            type="search"
            id="default-search"
            value={query}
            onChange={(e) => {
                console.log(e.target.value,'valor input');
                setQuery(e.target.value) 
            }}
            className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search Mockups, Logos..."
            required
          />
          <button
            type="submit"
            className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Search
          </button>
        </div>
      </form>
      <div className="mt-6 ">
        {
            characterList.length > 0 ? (
                characterList.map((item) => (
                    <div className="max-w-sm rounded overflow-hidden shadow-lg m-2" key={item.id}>
                      <img
                        className="w-full"
                        src={item.image}
                        alt="Sunset in the mountains"
                      />
                      <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2">{item.name}</div>
                        <p className="text-gray-700 text-base">
                          {item.species}
                        </p>
                      </div>
                      <div className="px-6 pt-4 pb-2">
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                          {item.status}
                        </span>
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                          {item.gender}
                        </span>
                      </div>
                    </div>
                  ))
            ):(
                <p>No hay caracteres</p>
            )
        }
      </div>
    </div>
  );
};

export default SearchParam;
