import { createContext, useEffect, useState } from "react";

type ContextType = {
  data: any;
  loading: boolean;
  error: string | null;
  filteredData: any;
};

type ContextProviderChildren = {
  children: React.ReactNode;
};

export const fetchContext = createContext<ContextType | undefined>(undefined);

export default function DataContextFunction({
  children,
}: ContextProviderChildren) {
  const [data, setData] = useState<any>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [filteredData, setFilteredData] = useState<any>([]);

  const fetchData = async () => {
    setLoading(true);
    setError(null);

    try {
      const authKey = import.meta.env.VITE_AUTH_KEY;
      const response = await fetch(
        "https://fedskillstest.coalitiontechnologies.workers.dev",
        {
          method: "GET",
          headers: {
            Authorization: authKey,
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) throw new Error(`Error ${response.status}`);
      const result = await response.json();
      setData(result);

      setFilteredData(
        result.filter((filtered: any) => filtered.name === "Jessica Taylor")
      );
    } catch (error: unknown) {
      if (error instanceof Error) {
        setError(error.message);
      } else {
        setError("An unknown error occured");
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <fetchContext.Provider value={{ data, loading, error, filteredData }}>
      {children}
    </fetchContext.Provider>
  );
}
