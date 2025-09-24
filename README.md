abres un terminal y escribe el comando
npm create vite@latest
escribe el nombre , react , javascript
ingresa a la carpeta
abre vscode con 
code .

cuando abras vscode escribe en el terminal lo siguiente
npm install && npm run dev

Despues de esto limpiaremos el proyecto y lo volveremos a hacer

Borramos App.css e index.css
El assets/react.svg lo subimos a public
borramos vite.svg

en index.html modificamos esto
    <link rel="icon" type="image/svg+xml" href="/react.svg" />

en main.jsx
borramos 
import './index.css'

y en App.jsx
solo dejamos esto 

function App() {
   return (
      <h1>Happy Store</h1>
   )
}
export default App

https://fakestoreapi.com/products

IU

