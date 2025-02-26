import { useEffect, useState } from 'react';
import ProductList from '../components/productList';
import { useLoader } from '@/context/LoaderContext';
import Loader from '@/components/Loader';
import Quotes from '@/components/Quotes';

export default function Home() {
  const { loading, setLoading } = useLoader();
  const [quotes, setQuotes] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch('https://dummyjson.com/quotes');
        const {quotes} = await response.json();
        setQuotes(quotes.slice(0,10));
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
       setLoading(false);
      }
    };

    fetchData();
  }, [setLoading]);
  console.log('quotes',quotes)
  return (
    <div
      className={`p-8 pb-20`}
    >
      <div className="max-w-[300px] mb-5 bg-[#eee] p-5">
      <h2 className='font-bold text-[28px] mb-2'>Question 1</h2>
        <ProductList />
      </div>
      <div className="mb-5 bg-[#eee] p-5">
      <h2 className='font-bold text-[28px] mb-2'>Question 2</h2>
        {loading && <Loader />}
        <p className='text-[red]'>refresh the page and see the loader in action</p>
        <div style={{ border: '1px solid #ddd', padding: '20px', borderRadius: '8px' }}>
          {quotes && quotes.map((quote)=>{
            return(
              <p key={quote.id}>{quote.quote}</p>
            )
          })}
        </div>
      </div>
      <div className="mb-5 bg-[#eee] p-5">
        <h2 className='font-bold text-[28px] mb-2'>Question 3</h2>
        <Quotes />
      </div>
    </div>
  );
}
