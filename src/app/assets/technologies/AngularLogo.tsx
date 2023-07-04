import { ImageSize } from "@/app/models/types";

export default function AngularLogo(props: ImageSize) {
  return (
    <svg width={props.width} height={props.height} viewBox={`0 0 ${props.width} ${props.height}`} fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M27 6.48L6.89038 13.6512L9.95758 40.2408L27 49.68L44.0424 40.2408L47.1096 13.6512L27 6.48Z" fill="#DD0031"/>
      <path d="M27 6.48V11.2752V11.2536V33.1344V49.68L44.0424 40.2408L47.1096 13.6512L27 6.48Z" fill="#C3002F"/>
      <path d="M27 11.2536L14.4288 39.4416H19.116L21.6432 33.1344H32.3136L34.8408 39.4416H39.528L27 11.2536ZM30.672 29.2464H23.328L27 20.412L30.672 29.2464Z" fill="white"/>
    </svg>
  )
}

