import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";
// Custom Hook
export const useFetchGifs = (category) => {
    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const getImages = async () => {
      const newImages = await getGifs(category);
      // console.log(`esto es newImages: ${}`);
      setImages(newImages);
      setIsLoading(false);
    };
  
    useEffect(() => {
      getImages();
    }, []);
return{
    images,
    isLoading
}
}
