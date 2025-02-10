import HeaderButtonProps from "@models/props/HeaderButtonProps";

export default function HeaderButton({handler, children}: HeaderButtonProps) {
  return (
    <button onClick={() => handler()} className="header-button">
      {children}
    </button>
  )
}