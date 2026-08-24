import { useEffect, useState } from "react";

function useCards(quantity = 5) {
  const [cards, setCards] = useState()
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(true)
  
  useEffect(() => {
    const fetchImgs = async () => {
      const query = "animals"
      
      try {
        setLoading(true)
        setError(null)

        const imgs = []
        const res = await fetch(`https://api.unsplash.com/photos/random?query=${query}&count=${quantity}&client_id=${import.meta.env.VITE_UNSPLASH_API_KEY}`);

        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }

        const data = await res.json()
        
        data.forEach(item => {
          imgs.push({ id: crypto.randomUUID(), clicked: false, imgUrl: `${item.urls.raw}&w=300&h=300&fit=crop&crop=entropy` })
        });

        setCards(imgs)
      } catch (e) {
        setError(e)
      } finally {
        setLoading(false)
      }
    } 

    fetchImgs()
  }, [quantity])

  return { cards, setCards, error, loading }
}

export default useCards