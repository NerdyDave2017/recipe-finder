// https://edamam-recipe-search.p.rapidapi.com/search'
import React, {
  useState,
  useContext,
  createContext,
  useCallback,
  PropsWithChildren,
} from "react";
import axios from "axios";

interface RecipeAPIContextType {
  hits: any;
  loading: boolean;
  getRecipes: (query: string) => Promise<void>;
}

const RecipeAPIContext = createContext<RecipeAPIContextType>(
  {} as RecipeAPIContextType
);

export const RecipeAPIProvider = ({ children }: PropsWithChildren<{}>) => {
  const [hits, setHits] = useState([]);
  const [loading, setLoading] = useState(false);

  const getRecipes = useCallback(async (query: string) => {
    setLoading(true);

    //@ts-ignore
    const response = await axios.get(process.env.NEXT_PUBLIC_BASE_URL, {
      params: { q: query },
      headers: {
        "X-RapidAPI-Key": process.env.NEXT_PUBLIC_RAPID_API_KEY,
        "X-RapidAPI-Host": process.env.NEXT_PUBLIC_RAPID_API_HOST,
      },
    });
    setHits(response.data.hits);

    setLoading(false);

    return response.data.hits;
  }, []);

  return (
    <RecipeAPIContext.Provider value={{ hits, loading, getRecipes }}>
      {children}
    </RecipeAPIContext.Provider>
  );
};

export const useRecipeAPI = () => useContext(RecipeAPIContext);
