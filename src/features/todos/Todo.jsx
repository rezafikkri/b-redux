export default function Todo({ onClick, completed, text }) {
  const liStyle = {
    textDecoration: completed ? 'line-through' : 'none'
  };

  return <li onClick={onClick} style={liStyle}>{text}</li>;
}
