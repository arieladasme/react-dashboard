export const Header = ({ category, title }) => {
  return (
    <div className="mb-10">
      <p className="text-gray-400">{category}</p>
      <p className="text-3x1 font-extrabold tracking-tight text-slate-900">{title}</p>
    </div>
  )
}
