import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setQuotes } from '@/redux/actions';

const Quotes = () => {
  const dispatch = useDispatch();
  const quotes = useSelector((state) => state.quotes);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchQuotes = async () => {
      try {
        const response = await fetch('https://dummyjson.com/quotes');
        const data = await response.json();
        dispatch(setQuotes(data.quotes));
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchQuotes();
  }, [dispatch]);

  if (loading) return <p>Loading quotes...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Quotes</h1>
      <ul>
        {quotes.map((quote) => (
          <li key={quote.id} className="mb-3 border p-2 bg-[#fff]">
            <p className="text-lg">{quote.quote}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Quotes;
