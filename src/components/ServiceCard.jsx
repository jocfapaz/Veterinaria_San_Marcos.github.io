import { formatPrice } from '../mockDB.js'
import Button from './Button'

export default function ServiceCard({
  id,
  name,
  category,
  species,
  duration,
  price,
  image,
  note,
  onAddToRequests,
}) {
  return (
    <article className="group bg-white rounded-2xl shadow-sm hover:shadow-md border border-slate-200 overflow-hidden flex flex-col transition duration-200">
      <div className="overflow-hidden bg-slate-100 aspect-video">
        <img
          src={image}
          alt={name}
          className="object-cover w-full h-full group-hover:scale-105 transition duration-300"
        />
      </div>

      <div className="p-5 flex flex-col flex-grow">
        <h2 className="text-lg font-bold text-slate-900 group-hover:text-emerald-600 transition">
          {name}
        </h2>
        <p className="text-xs text-slate-500 mt-1">
          {category} · {species} · {duration}
        </p>

        {note && (
          <p className="text-xs text-amber-600 font-medium mt-2 bg-amber-50 p-2 rounded-lg border border-amber-200">
            {note}
          </p>
        )}

        <div className="mt-auto pt-4 flex items-center justify-between">
          <p className="text-xl font-extrabold text-emerald-700">
            {formatPrice(price)}
          </p>
          <Button onClick={() => onAddToRequests(id)}>Solicitar</Button>
        </div>
      </div>
    </article>
  )
}