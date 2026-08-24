import { useEffect, useState } from "react";

function useCards(quantity = 5) {
  const [cards, setCards] = useState()
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(true)
  
  useEffect(() => {
    const fetchImgs = async () => {
      try {
        setLoading(true)
        setError(null)

        const imgs = []
        const res = await fetch(`https://api.giphy.com/v1/gifs/trending?api_key=${import.meta.env.VITE_GIPHY_API_KEY}&limit=${quantity}&offset=0&rating=g&bundle=messaging_non_clips`);

        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }

        const result = await res.json()
        
        const data = result.data
        data.forEach(item => {
          imgs.push({ id: crypto.randomUUID(),clicked: false, imgUrl: item.images.fixed_height_small.url })
        });

        
        setCards(imgs)
        setLoading(false)
      } catch (e) {
        setError(e)
      }
    } 

    fetchImgs()
  }, [quantity])

  return { cards, setCards, error, loading }
}

export default useCards