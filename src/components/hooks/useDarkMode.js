import { useEffect } from 'react';
import useLocalStorage from './useLocalStorage';

function useDarkMode (key, isDark) {
  const [ dark, setDark ] = useLocalStorage(key, isDark);
  const body = document.querySelector('body');

  useEffect(() => {
    if(dark) {
      body.classList.add('dark-mode');
    } else {
      body.classList.remove('dark-mode');
    }
  })

  // useEffect() => dark ? body.classList.add('dark-mode') : body.classList.remove('dark-mode');
  return [dark, setDark]
}

export default useDarkMode;