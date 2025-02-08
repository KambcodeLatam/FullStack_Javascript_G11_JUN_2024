import { useEffect, useState } from 'react';

const KEY = '79c5b659';

export function useMovies(query){

    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");

    
    useEffect(
        function() {
        //callback?.();
        const controller = new AbortController();
        async function fetchMovies(){
          try {
            setIsLoading(true);
            setError("");
            const res = await fetch(`http://www.omdbapi.com/?apikey=${KEY}&s=${query}`, { signal: controller.signal});

            console.log(res);
    
            if (!res.ok) throw new Error('Something went wrong with fetching movies');
    
            const data = await res.json();
    
            if ( data.Response === 'False') throw new Error('Movie not found');
            
            setMovies(data.Search);
            setError("");
    
          } catch (error) {
            console.error(error.message);
    
            if( error.name !== "AbortError"){
              setError(error.message);
            }
    
          } finally {
            setIsLoading(false);
      
          }
        }
    
        if (query.length < 3) {
          setMovies([]);
          setError('');
          return;
        }
    
        fetchMovies();
    
        return function(){
          controller.abort();
        };
       
      }, [query]);

    return {
        movies,
        isLoading,
        error,
    }
    
}