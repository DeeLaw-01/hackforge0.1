import React from "react";
import "./Navbar.css";
function Navbar() {
  return (
    <>
      <div className="navbar">
        <header>
          <svg
            className="logo"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="30 35 120 30"
          >
            <path d="M67.88,57.39a2.65,2.65,0,0,1-1.67-.48,1.56,1.56,0,0,1-.63-1.31V46.33a.26.26,0,0,1,.29-.29h1.68c.19,0,.28.1.28.29v8.55c0,.38.17.57.52.57a1.44,1.44,0,0,0,.44-.05c.2,0,.31.06.32.24l.15,1.25a.26.26,0,0,1-.24.31A3.77,3.77,0,0,1,67.88,57.39Z" />
            <path d="M77.33,56.32a4.71,4.71,0,0,1-6,0,4,4,0,0,1,0-5.63,4.73,4.73,0,0,1,6,0,4.06,4.06,0,0,1,0,5.62ZM72.91,55a2.13,2.13,0,0,0,2.86,0,2.24,2.24,0,0,0,0-2.94,2.13,2.13,0,0,0-2.86,0,2.24,2.24,0,0,0,0,2.94Z" />
            <path d="M87.71,49.87c.19,0,.28.1.28.29v7.17a3.26,3.26,0,0,1-1.11,2.57,4.2,4.2,0,0,1-2.91,1,4.68,4.68,0,0,1-2.71-.75,3,3,0,0,1-1.31-2c0-.2,0-.29.27-.29H81.9a.37.37,0,0,1,.33.23,1.31,1.31,0,0,0,.61.71,2.34,2.34,0,0,0,1.12.26,1.77,1.77,0,0,0,1.29-.46,1.7,1.7,0,0,0,.47-1.25v-.63a3.35,3.35,0,0,1-2.08.65,3.88,3.88,0,0,1-2.84-1.09,4,4,0,0,1,0-5.56,3.91,3.91,0,0,1,2.84-1.08,3.36,3.36,0,0,1,2.13.69v-.16a.26.26,0,0,1,.28-.29Zm-3.88,5.72A1.76,1.76,0,0,0,85.2,55a2.45,2.45,0,0,0,0-3,1.75,1.75,0,0,0-1.36-.58,1.8,1.8,0,0,0-1.39.59,2.12,2.12,0,0,0-.54,1.5A2.16,2.16,0,0,0,82.44,55,1.81,1.81,0,0,0,83.83,55.59Z" />
            <path d="M96.62,56.32a4.73,4.73,0,0,1-6,0,4.07,4.07,0,0,1,0-5.63,4.74,4.74,0,0,1,6,0,4.06,4.06,0,0,1,0,5.62ZM92.19,55a2,2,0,0,0,1.44.55A2,2,0,0,0,95.06,55a2.27,2.27,0,0,0,0-2.94,2,2,0,0,0-1.43-.55,2,2,0,0,0-1.44.55,2.27,2.27,0,0,0,0,2.94Z" />
            <path d="M101.36,48.17a1.45,1.45,0,0,1-1.91,0,1.21,1.21,0,0,1,0-1.76,1.48,1.48,0,0,1,1.91,0,1.21,1.21,0,0,1,0,1.76Zm.21,9.22a2.69,2.69,0,0,1-1.67-.48,1.58,1.58,0,0,1-.62-1.31V50.16a.26.26,0,0,1,.29-.29h1.68c.19,0,.28.1.28.29v4.72q0,.57.51.57a1.55,1.55,0,0,0,.45-.05c.2,0,.31.06.32.24l.15,1.25a.26.26,0,0,1-.24.31A3.79,3.79,0,0,1,101.57,57.39Z" />
            <path d="M109.14,49.63A3.92,3.92,0,0,1,112,50.71a4.1,4.1,0,0,1,0,5.59,3.89,3.89,0,0,1-2.86,1.09,3.44,3.44,0,0,1-2.09-.65v3.61c0,.19-.1.28-.29.28h-1.68a.24.24,0,0,1-.28-.28v-8.2a.52.52,0,0,0-.59-.59l-.33,0q-.33,0-.33-.24V50.14a.32.32,0,0,1,.23-.33,3,3,0,0,1,1.08-.18,1.85,1.85,0,0,1,1.81,1A3.37,3.37,0,0,1,109.14,49.63ZM107.58,55a1.91,1.91,0,0,0,2.76,0,2.16,2.16,0,0,0,.55-1.53,2.13,2.13,0,0,0-.55-1.53,1.91,1.91,0,0,0-2.76,0,2.21,2.21,0,0,0-.53,1.53A2.24,2.24,0,0,0,107.58,55Z" />
            <path d="M117.82,57.39a4.82,4.82,0,0,1-2.57-.62A2.44,2.44,0,0,1,114.09,55c0-.2.07-.3.29-.3h1.47a.38.38,0,0,1,.33.22c.21.54.76.81,1.64.81a1.87,1.87,0,0,0,.89-.18.58.58,0,0,0,.34-.49c0-.26-.16-.44-.48-.56a5.41,5.41,0,0,0-1.17-.25A11.12,11.12,0,0,1,116,54a2.3,2.3,0,0,1-1.17-.67,2.14,2.14,0,0,1,.43-3.1,4.12,4.12,0,0,1,2.42-.64,4.42,4.42,0,0,1,2.36.59,2.23,2.23,0,0,1,1.1,1.57q0,.3-.27.3h-1.48a.31.31,0,0,1-.3-.18,1,1,0,0,0-.52-.53,1.76,1.76,0,0,0-.86-.2,1.74,1.74,0,0,0-.85.17.5.5,0,0,0-.32.46.64.64,0,0,0,.48.59,5.42,5.42,0,0,0,1.19.3,13.08,13.08,0,0,1,1.39.26,2.3,2.3,0,0,1,1.17.67,1.89,1.89,0,0,1,.49,1.37,2,2,0,0,1-.93,1.74A4.37,4.37,0,0,1,117.82,57.39Z" />
            <path d="M131.83,56.89a.27.27,0,0,1-.23.31,3.86,3.86,0,0,1-1.13.19,2.22,2.22,0,0,1-2-.87,3.62,3.62,0,0,1-2.55.87,3.1,3.1,0,0,1-2.34-.91,3.28,3.28,0,0,1-.89-2.41V50.16c0-.19.09-.29.28-.29h1.68c.19,0,.28.1.28.29v3.61a1.77,1.77,0,0,0,.43,1.23,1.5,1.5,0,0,0,1.15.47,1.66,1.66,0,0,0,1.2-.44,1.6,1.6,0,0,0,.45-1.19V50.16c0-.19.09-.29.28-.29h1.7c.19,0,.28.1.28.29v4.71c0,.39.17.58.5.58a1.58,1.58,0,0,0,.46-.05.26.26,0,0,1,.33.24Z" />
            <path d="M147.72,56.89a.25.25,0,0,1-.23.31,3.88,3.88,0,0,1-1.15.19,2.67,2.67,0,0,1-1.67-.48A1.56,1.56,0,0,1,144,55.6V53.25a1.77,1.77,0,0,0-.42-1.23,1.42,1.42,0,0,0-1.12-.47,1.25,1.25,0,0,0-1,.44,1.78,1.78,0,0,0-.38,1.18v3.69c0,.19-.09.29-.28.29h-1.69a.26.26,0,0,1-.29-.29V53.25a1.85,1.85,0,0,0-.39-1.23,1.3,1.3,0,0,0-1-.47,1.45,1.45,0,0,0-1.1.44,1.65,1.65,0,0,0-.41,1.18v3.69a.26.26,0,0,1-.29.29H134c-.19,0-.28-.1-.28-.29V52.15a.52.52,0,0,0-.59-.59l-.33,0q-.33,0-.33-.24V50.14a.32.32,0,0,1,.23-.33,3,3,0,0,1,1.08-.18,1.88,1.88,0,0,1,1.78.92,3.38,3.38,0,0,1,2.54-.92,2.87,2.87,0,0,1,2.37,1.06,3.3,3.3,0,0,1,2.62-1.06,3.16,3.16,0,0,1,2.37.91,3.26,3.26,0,0,1,.89,2.41v1.93c0,.38.17.57.49.57a1.5,1.5,0,0,0,.46-.05q.31,0,.33.24Z" />
            <path d="M30.46,48.57a13.69,13.69,0,0,1,26.57,0h-1.2a9.69,9.69,0,0,0-5.67,1.73,2.86,2.86,0,0,1-.3.19h-.14a2.86,2.86,0,0,1-.3-.19,10.17,10.17,0,0,0-11.35,0,2.86,2.86,0,0,1-.3.19h-.14a2.86,2.86,0,0,1-.3-.19,9.69,9.69,0,0,0-5.67-1.73Zm23.21,6.27a3.37,3.37,0,0,1,2.16-.71h1.61V50.92H55.83A6.38,6.38,0,0,0,52,52.14a3.64,3.64,0,0,1-4.32,0,6.8,6.8,0,0,0-7.77,0,3.64,3.64,0,0,1-4.32,0,6.38,6.38,0,0,0-3.88-1.22H30.05v3.21h1.61a3.37,3.37,0,0,1,2.16.71,6.78,6.78,0,0,0,7.76,0,3.39,3.39,0,0,1,2.16-.71,3.35,3.35,0,0,1,2.16.71,6.8,6.8,0,0,0,7.77,0Zm0,5.74a3.37,3.37,0,0,1,2.16-.71h1.61V56.66H55.83A6.38,6.38,0,0,0,52,57.88a3.64,3.64,0,0,1-4.32,0,6.8,6.8,0,0,0-7.77,0,3.64,3.64,0,0,1-4.32,0,6.38,6.38,0,0,0-3.88-1.22H30.05v3.21h1.61a3.37,3.37,0,0,1,2.16.71,6.78,6.78,0,0,0,7.76,0,3.39,3.39,0,0,1,2.16-.71,3.35,3.35,0,0,1,2.16.71,6.8,6.8,0,0,0,7.77,0Z" />
          </svg>
          <nav>
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <a href="#">Something else</a>
              </li>
            </ul>
          </nav>
        </header>

        <main className="content-grid flow">
          {/* <section className="hero full-width"></section> */}
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam
            nam doloremque asperiores doloribus fugiat at ut, eligendi vel
            aspernatur ea, ducimus excepturi. Ipsum cumque eum hic cum mollitia
            totam quis.
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam
            nam doloremque asperiores doloribus fugiat at ut, eligendi vel
            aspernatur ea, ducimus excepturi. Ipsum cumque eum hic cum mollitia
            totam quis.
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam
            nam doloremque asperiores doloribus fugiat at ut, eligendi vel
            aspernatur ea, ducimus excepturi. Ipsum cumque eum hic cum mollitia
            totam quis.
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam
            nam doloremque asperiores doloribus fugiat at ut, eligendi vel
            aspernatur ea, ducimus excepturi. Ipsum cumque eum hic cum mollitia
            totam quis.
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam
            nam doloremque asperiores doloribus fugiat at ut, eligendi vel
            aspernatur ea, ducimus excepturi. Ipsum cumque eum hic cum mollitia
            totam quis.
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam
            nam doloremque asperiores doloribus fugiat at ut, eligendi vel
            aspernatur ea, ducimus excepturi. Ipsum cumque eum hic cum mollitia
            totam quis.
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam
            nam doloremque asperiores doloribus fugiat at ut, eligendi vel
            aspernatur ea, ducimus excepturi. Ipsum cumque eum hic cum mollitia
            totam quis.
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam
            nam doloremque asperiores doloribus fugiat at ut, eligendi vel
            aspernatur ea, ducimus excepturi. Ipsum cumque eum hic cum mollitia
            totam quis.
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam
            nam doloremque asperiores doloribus fugiat at ut, eligendi vel
            aspernatur ea, ducimus excepturi. Ipsum cumque eum hic cum mollitia
            totam quis.
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam
            nam doloremque asperiores doloribus fugiat at ut, eligendi vel
            aspernatur ea, ducimus excepturi. Ipsum cumque eum hic cum mollitia
            totam quis.
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam
            nam doloremque asperiores doloribus fugiat at ut, eligendi vel
            aspernatur ea, ducimus excepturi. Ipsum cumque eum hic cum mollitia
            totam quis.
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam
            nam doloremque asperiores doloribus fugiat at ut, eligendi vel
            aspernatur ea, ducimus excepturi. Ipsum cumque eum hic cum mollitia
            totam quis.
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam
            nam doloremque asperiores doloribus fugiat at ut, eligendi vel
            aspernatur ea, ducimus excepturi. Ipsum cumque eum hic cum mollitia
            totam quis.
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam
            nam doloremque asperiores doloribus fugiat at ut, eligendi vel
            aspernatur ea, ducimus excepturi. Ipsum cumque eum hic cum mollitia
            totam quis.
          </p>
        </main>
      </div>
    </>
  );
}

export default Navbar;
