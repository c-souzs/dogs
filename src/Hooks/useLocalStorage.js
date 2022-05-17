import React from 'react'

const useLocalStorage = (key, valor) => {
  const [estadoInicial, setEstadoInicial] = React.useState(() => {
      const temLocal = localStorage.getItem(key);

      return temLocal ? JSON.parse(temLocal) : valor;
  });

  React.useEffect(() => {
      localStorage.setItem(key, valor);
  }, [key, estadoInicial]);

  return {estadoInicial, setEstadoInicial};
}

export default useLocalStorage