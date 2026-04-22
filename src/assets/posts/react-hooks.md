---
title: "React Hooks Esencial"
date: "2024-04-18"
tags: ["react", "hooks", "javascript"]
excerpt: "Aprende a usar los hooks más importantes de React para crear componentes funcionales poderosos."
---

# React Hooks Esencial

React Hooks revolucionaron la forma en que escribimos componentes. Te mostraré los hooks más importantes.

## useState

El hook más básico. Permite agregar estado a componentes funcionales.

```javascript
import { useState } from 'react';

function Contador() {
  const [count, setCount] = useState(0);
  
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Incrementar
      </button>
    </div>
  );
}
```

## useEffect

Maneja efectos secundarios (fetch de datos, suscripciones, etc).

```javascript
import { useEffect, useState } from 'react';

function PostList() {
  const [posts, setPosts] = useState([]);
  
  useEffect(() => {
    // Cargar datos
    fetchPosts().then(setPosts);
  }, []); // Solo una vez al montar
  
  return <div>{/* renderizar posts */}</div>;
}
```

## useContext

Comparte estado sin prop drilling.

```javascript
const UserContext = React.createContext();

function App() {
  return (
    <UserContext.Provider value={{ name: 'Juan' }}>
      <UserProfile />
    </UserContext.Provider>
  );
}

function UserProfile() {
  const user = useContext(UserContext);
  return <p>Hola {user.name}</p>;
}
```

## useReducer

Para lógica de estado compleja.

```javascript
function reducer(state, action) {
  switch(action.type) {
    case 'ADD_TODO':
      return [...state, action.payload];
    case 'REMOVE_TODO':
      return state.filter(todo => todo.id !== action.payload);
    default:
      return state;
  }
}

function TodoApp() {
  const [todos, dispatch] = useReducer(reducer, []);
  
  return (
    // ...
  );
}
```

## Consejos Finales

- Usa hooks para mantener el código limpio y reutilizable
- Recuerda las dependencias en useEffect
- Considera custom hooks para lógica reutilizable

¡Happy coding! 🚀
