// import { useState } from 'react';
// import sequelize from "@/config/database"
// import { Sequelize } from "sequelize";
// import connectDb from "./app";

// export default function Home() {
//   const [result, setResult] = useState(null);

//   async function handleClick() {
//     try {
//       const connectionResult = await connectDb();
//       setResult(connectionResult);
//     } catch (error) {
//       console.error('Erro ao conectar ao banco de dados:', error);
//     }
//   }

//   return (
//     <main>
//       <button onClick={handleClick}>Clique para conectar</button>
//       {result && <p>Resultado da conexão: {result}</p>}
//     </main>
//   )
// }
