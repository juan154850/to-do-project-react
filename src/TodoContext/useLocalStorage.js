import React from "react";

// const defaultTodos = [
//   { text: 'Complete all the course.', completed: false },
//   { text: 'Pay the services.', completed: true },
//   { text: 'Pay the rent.', completed: false }

// ]

// localStorage.setItem('TODOS_V1', JSON.stringify(defaultTodos))
// localStorage.removeItem('TODOS_V1');

const useLocalStorage = (itemName, initialValue) => {

    const [item, setItem] = React.useState(initialValue);
    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState(false);

  React.useEffect(() => { 
    setTimeout(() => { 
      try {
                const localStorageItem = localStorage.getItem(itemName);

                let parsedItem;

                if (!localStorageItem) {
                  localStorage.setItem(itemName, JSON.stringify(initialValue));
                  parsedItem = initialValue;
                } else {
                  parsedItem = JSON.parse(localStorageItem);
                  setItem(parsedItem);
                }

                setLoading(false);
      } catch (error) {
                setLoading(false);
                setError(true);
      }
    },1000)
  })


  // const localStorageItem = localStorage.getItem(itemName);
  // let parsedItem;

  // if (!localStorageItem) {
  //   localStorage.setItem(itemName, JSON.stringify(initialValue));
  //   parsedItem = initialValue;
  // } else {
  //   parsedItem = JSON.parse(localStorageItem);
  // }

  // const [item, setItem] = React.useState(parsedItem);

  const saveItem = (newItem) => {
    localStorage.setItem(itemName, JSON.stringify(newItem));
    setItem(newItem);
  };

  return { item, saveItem, loading, error };
};

export { useLocalStorage };
