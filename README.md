# 📱 React Props Practice: Carros & Celular

Este repositório contém um projeto prático desenvolvido para exercitar os conceitos de **Componentização** e **Props** no React.js. O objetivo foi criar componentes reutilizáveis que recebem e exibem dados dinamicamente.

## 🚀 Sobre o Projeto

A aplicação consiste em renderizar cards de especificações técnicas. O mesmo componente é utilizado para exibir diferentes dados, demonstrando o poder de reutilização das `props`.

### 📋 O que foi implementado:
*   **Componente Celular:** Exibição completa de hardware (CPU, RAM, Bateria) e interface gráfica.
*   **Componente Carro:** Especificações de modelos populares (Kwid e Celta).
*   **Passagem de Props:** Comunicação entre o componente pai (`App.jsx`) e os componentes filhos.

---

## 🛠️ Tecnologias
*   [React.js](https://reactjs.org/)
*   [Vite](https://vitejs.dev/) (ou Create React App)
*   JavaScript (ES6+)

---

## 💻 Exemplos de Código

### Como o componente recebe os dados:
No arquivo `Celular.jsx`, definimos a estrutura que receberá as propriedades:
```javascript
function Celular(props) {
  return (
    <>
      <h2>{props.modelo}</h2>
      <img src={props.imagem} alt={props.alternative} />
      <p>Marca: {props.marca}</p>
      <p>Memória RAM: {props.memoriaram}</p>
      
    </>
  );
}
