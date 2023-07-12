import { ImageSize } from "@/app/models/types";

export default function FigmaLogo(props: ImageSize) {
  return (
    <svg width={props.width} height={props.height} viewBox={`0 0 ${props.width} ${props.height}`} fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_108_244)">
      <path d="M18 27C18 22.0801 21.9884 18.0916 26.9084 18.0916C31.8282 18.0916 35.8167 22.0801 35.8167 27C35.8167 31.92 31.8282 35.9084 26.9084 35.9084C21.9884 35.9084 18 31.92 18 27Z" fill="#1ABCFE"/>
      <path d="M0.183228 44.8167C0.183228 39.8969 4.17164 35.9084 9.0916 35.9084H18V44.8167C18 49.7367 14.0116 53.7251 9.0916 53.7251C4.17164 53.7251 0.183228 49.7367 0.183228 44.8167Z" fill="#0ACF83"/>
      <path d="M18 0.274933V18.0916H26.9084C31.8284 18.0916 35.8167 14.1033 35.8167 9.1833C35.8167 4.26335 31.8284 0.274933 26.9084 0.274933H18Z" fill="#FF7262"/>
      <path d="M0.183228 9.18331C0.183228 14.1033 4.17164 18.0916 9.0916 18.0916H18V0.274933H9.0916C4.17164 0.274933 0.183228 4.26334 0.183228 9.18331Z" fill="#F24E1E"/>
      <path d="M0.183228 27C0.183228 31.92 4.17164 35.9084 9.0916 35.9084H18V18.0916H9.0916C4.17164 18.0916 0.183228 22.0801 0.183228 27Z" fill="#A259FF"/>
      </g>
      <defs>
        <clipPath id="clip0_108_244">
          <rect width={props.width} height={props.height} fill="white"/>
        </clipPath>
      </defs>
    </svg>
  )
}