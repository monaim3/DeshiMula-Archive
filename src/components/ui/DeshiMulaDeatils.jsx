import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { useParams, useNavigate } from 'react-router-dom';

const DeshiMulaDeatils = () => {
    const [deshiMula, setDeshiMula] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const { id } = useParams();
    const navigate = useNavigate();

    const fetchData = async () => {
        setLoading(true);
        setError(null);
        try {
            const response = await fetch("/Mula.json");
            if (!response.ok) {
                throw new Error(`Failed to fetch data: ${response.status} ${response.statusText}`);
            }
            const data = await response.json();
            setDeshiMula(data);
        } catch (error) {
            console.error("Error fetching data:", error);
            setError(error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    const deshiMulas = deshiMula.find((item) => item.guid === id);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;
    if (!deshiMulas) return <p>No item found with id: {id}</p>;

    return (
        <div>
            <h1>{deshiMulas.title}</h1>
            <div className="flex items-center gap-5">

                <h3 className='bg-gray-200 border-1 p-2 rounded mt-4 mb-4' >{deshiMulas.company}</h3>
                <h3 className={`text-white px-3 py-1 rounded ${deshiMulas.sentiment === "Negative"
                    ? "bg-red-500"
                    : deshiMulas.sentiment === "Positive"
                        ? "bg-green-400"
                        : "bg-gray-500"
                    }`}>
                    {deshiMulas.sentiment}
                </h3>
            </div>
            <p>{deshiMulas.content}</p>
            <Button className="mt-6 inline-block" onClick={() => navigate(-1)}>
                Go Back
            </Button>

        </div>
    );
};

export default DeshiMulaDeatils;
