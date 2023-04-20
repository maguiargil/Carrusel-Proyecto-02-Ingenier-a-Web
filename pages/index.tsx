import Image from 'next/image'
import React from 'react'
import { CarouselData } from './CarouselData'
import Card from './Card'
export default function Home() {

  const [posicion1, setPosicion1] = React.useState(0)
  const [posicion2, setPosicion2] = React.useState(1)
  const [posicion3, setPosicion3] = React.useState(2)
  const [posicion4, setPosicion4] = React.useState(3)
  const posicionFotos = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  const Array = [
    { posicion: posicion1, nombre: posicion4 },
    { posicion: posicion2, nombre: posicion3 },
    { posicion: posicion3, nombre: posicion2 },
    { posicion: posicion4, nombre: posicion1 }
  ]

  const ArrayTwo = CarouselData.slice(posicion1, posicion4 + 1)

  const handleClickForward = () => {
    setPosicion4(posicion3 % posicionFotos.length)
    setPosicion3(posicion2 % posicionFotos.length)
    setPosicion2(posicion1 % posicionFotos.length)
    setPosicion1((posicion1 + 9) % posicionFotos.length)
    {/*const ArrayTwo = CarouselData.slice(posicion1, posicion4 + 1)*/ }
    ArrayTwo[0] = CarouselData[posicion1]
    ArrayTwo[1] = CarouselData[posicion2]
    ArrayTwo[2] = CarouselData[posicion3]
    ArrayTwo[3] = CarouselData[posicion4]
    ArrayTwo.map((x => x.id_index = ArrayTwo.indexOf(x)))
    {/*ArrayTwo[posicion1] = ArrayTwo[posicion2 % posicionFotos.length]
    ArrayTwo[posicion2] = ArrayTwo[posicion3 % posicionFotos.length]
    ArrayTwo[posicion3] = ArrayTwo[posicion4 % posicionFotos.length]
  ArrayTwo[posicion4] = ArrayTwo[(posicion4 + 1) % posicionFotos.length]*/}
    console.log(ArrayTwo)
    /*clics % posicionFotos.length */
  }

  const handleClickReverse = () => {
    setPosicion4((posicion4 + 1) % posicionFotos.length)
    setPosicion1(posicion2 % posicionFotos.length)
    setPosicion2(posicion3 % posicionFotos.length)
    setPosicion3(posicion4 % posicionFotos.length)
    {/*const ArrayTwo = CarouselData.slice(posicion1, posicion4 + 1)*/ }
    ArrayTwo[0] = CarouselData[posicion1]
    ArrayTwo[1] = CarouselData[posicion2]
    ArrayTwo[2] = CarouselData[posicion3]
    ArrayTwo[3] = CarouselData[posicion4]
    ArrayTwo.map((x => x.id_index = ArrayTwo.indexOf(x)))
    console.log(ArrayTwo)
    {/*ArrayTwo[posicion1] = ArrayTwo[(posicion1 + 9) % posicionFotos.length]
    ArrayTwo[posicion2] = ArrayTwo[posicion1 % posicionFotos.length]
    ArrayTwo[posicion3] = ArrayTwo[posicion2 % posicionFotos.length]
  ArrayTwo[posicion4] = ArrayTwo[posicion3 % posicionFotos.length]*/}
  }

  return (
    <main>
      <div className="flex flex-row gap-4">
        <button
          onClick={handleClickReverse}>
          <svg width="117" height="117" viewBox="0 0 117 117" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g filter="url(#filter0_d_1417_6)">
              <circle cx="58.5" cy="54.5" r="54.5" transform="rotate(-180 58.5 54.5)" fill="white" />
            </g>
            <path d="M43.8812 56.3674C42.7094 55.2088 42.7094 53.3273 43.8812 52.1688L61.8812 34.3733C63.0531 33.2147 64.9562 33.2147 66.1281 34.3733C67.3 35.5319 67.3 37.4134 66.1281 38.5719L50.2469 54.2727L66.1187 69.9735C67.2906 71.132 67.2906 73.0135 66.1187 74.1721C64.9469 75.3307 63.0437 75.3307 61.8719 74.1721L43.8719 56.3766L43.8812 56.3674Z" fill="#3483FA" />
            <defs>
              <filter id="filter0_d_1417_6" x="0" y="0" width="117" height="117" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                <feOffset dy="4" />
                <feGaussianBlur stdDeviation="2" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1417_6" />
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1417_6" result="shape" />
              </filter>
            </defs>
          </svg>
        </button>
        <div className="flex flex-row gap-6 align-center">
          {ArrayTwo.map(({id_index, img, price }) => (
            <div key={id_index}>
              <div>{img}</div>
              <div>{price}</div>
            </div>
          ))}
        </div>
        <button
          onClick={handleClickForward}>
          <svg width="117" height="117" viewBox="0 0 117 117" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g filter="url(#filter0_d_1417_10)">
              <circle cx="58.5" cy="54.5" r="54.5" fill="white" />
            </g>
            <path d="M73.1188 52.6326C74.2906 53.7912 74.2906 55.6727 73.1188 56.8312L55.1188 74.6267C53.9469 75.7853 52.0438 75.7853 50.8719 74.6267C49.7 73.4681 49.7 71.5866 50.8719 70.4281L66.7531 54.7273L50.8813 39.0265C49.7094 37.868 49.7094 35.9865 50.8813 34.8279C52.0531 33.6693 53.9563 33.6693 55.1281 34.8279L73.1281 52.6234L73.1188 52.6326Z" fill="#3483FA" />
            <defs>
              <filter id="filter0_d_1417_10" x="0" y="0" width="117" height="117" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                <feOffset dy="4" />
                <feGaussianBlur stdDeviation="2" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1417_10" />
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1417_10" result="shape" />
              </filter>
            </defs>
          </svg>
        </button>
      </div>
    </main>
  )
}
