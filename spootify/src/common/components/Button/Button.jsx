
import "./_button.scss"
export default function Button({ onClick, children }) {
  return <button onClick = {onClick} className="sp-button">{children}</button>;
}
