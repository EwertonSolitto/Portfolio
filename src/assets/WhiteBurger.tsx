import ImageSize from "../types/ImageSize";

export function WhiteBurger (props: ImageSize) {
  return (
    <svg width={props.width} height={props.height} viewBox={`0 0 ${props.width} ${props.height}`} fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width={props.width} height={props.height} fill="url(#pattern0)"/>
      <defs>
      <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
      <use href="#image0_106_95" transform="scale(0.00195312)"/>
      </pattern>
      <image id="image0_106_95" width="512" height="512" href="data:image/png;base64,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lIACELVOYQgQIECAQE9AAeg5mSJAgAABAlECCkDUOoUhQIAAAQI9AQWg52SKAAECBAhECSgAUesUhgABAgQI9AQUgJ6TKQIECBAgECWgAEStUxgCBAgQINATUAB6TqYIECBAgECUgAIQtU5hCBAgQIBAT0AB6DmZIkCAAAECUQIKQNQ6hSFAgAABAj0BBaDnZIoAAQIECEQJKABR6xSGAAECBAj0BBSAnpMpAgQIECAQJaAARK1TGAIECBAg0BNQAHpOpggQIECAQJSAAhC1TmEIECBAgEBPQAHoOZkiQIAAAQJRAgpA1DqFIUCAAAECPQEFoOdkigABAgQIRAkoAFHrFIYAAQIECPQEFICekykCBAgQIBAloABErVMYAgQIECDQE1AAek6mCBAgQIBAlIACELVOYQgQIECAQE9AAeg5mSJAgAABAlECCkDUOoUhQIAAAQI9AQWg52SKAAECBAhECSgAUesUhgABAgQI9AQUgJ6TKQIECBAgECWgAEStUxgCBAgQINATUAB6TqYIECBAgECUgAIQtU5hCBAgQIBAT0AB6DmZIkCAAAECUQIKQNQ6hSFAgAABAj0BBaDnZIoAAQIECEQJKABR6xSGAAECBAj0BBSAnpMpAgQIECAQJaAARK1TGAIECBAg0BNQAHpOpggQIECAQJSAAhC1TmEIECBAgEBPQAHoOZkiQIAAAQJRAgpA1DqFIUCAAAECPQEFoOdkigABAgQIRAkoAFHrFIYAAQIECPQEFICekykCBAgQIBAloABErVMYAgQIECDQE1AAek6mCBAgQIBAlIACELVOYQgQIECAQE9AAeg5mSJAgAABAlECCkDUOoUhQIAAAQI9AQWg52SKAAECBAhECSgAUesUhgABAgQI9AQUgJ6TKQIECBAgECWgAEStUxgCBAgQINATUAB6TqYIECBAgECUgAIQtU5hCBAgQIBAT0AB6DmZIkCAAAECUQIKQNQ6hSFAgAABAj0BBaDnZIoAAQIECEQJKABR6xSGAAECBAj0BBSAnpMpAgQIECAQJaAARK1TGAIECBAg0BNQAHpOpggQIECAQJSAAhC1TmEIECBAgEBPQAHoOZkiQIAAAQJRAgpA1DqFIUCAAAECPQEFoOdkigABAgQIRAkoAFHrFIYAAQIECPQEFICekykCBAgQIBAloABErVMYAgQIECDQE1AA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"/>
    </defs>
  </svg>
  )
}