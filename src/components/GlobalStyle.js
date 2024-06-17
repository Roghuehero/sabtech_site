import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

  body {
    font-family: 'Roboto', sans-serif;
    margin: 0;
    padding: 0;
    line-height: 1.6;
    background: #f0f8ff; /* Light background color */
    color: #333; /* Dark color for better visibility */
    overflow-x: hidden;
    position: relative;
  }

  * {
    box-sizing: border-box;
  }

  h1, h2, h3 {
    color: #333; /* Dark color for headers */
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  .primary-color {
    color: #ff6f61;
  }

  .secondary-color {
    color: #4caf50;
  }

  /* Background with emojis */
  body::before {
    content: '😊 🌟 🚀 💻 🎉';
    font-size: 50px;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: repeating-linear-gradient(
      45deg,
      #f0f8ff,
      #f0f8ff 10px,
      #e6f7ff 10px,
      #e6f7ff 20px
    );
    opacity: 0.1;
    z-index: -1;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
  }
`;

export default GlobalStyle;