// https://fireship.io/snippets/use-media-query-hook/
import { useState, useEffect } from 'react';

const useMediaQuery = (query) => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }
    const listener = () => { return setMatches(media.matches); };
    window.addEventListener('resize', listener);
    return () => { return window.removeEventListener('resize', listener); };
  }, [matches, query]);

  return matches;
};

export default useMediaQuery;
