import { Link } from 'react-router'
import { formatPrice, calculateDiscountedPrice } from '../mockDB.js'
import Button from './Button'

export default function ProductCard({
  id,
  name,
  category,
  presentation,
  price,
  image,
  discount,
  onAdd,
}) {
  const finalPrice = calculateDiscountedPrice(price, discount)

  return (
    <article className="group bg-white rounded-2xl shadow-sm hover:shadow-md border border-slate-200 overflow-hidden flex flex-col transition-all duration-200">
      <Link
        to={`/tienda/${id}`}
        className="relative overflow-hidden bg-slate-100 aspect-square flex items-center justify-center p-4 block"
      >
        {discount > 0 && (
          <span className="absolute top-3 right-3 bg-rose-500 text-white text-xs font-bold px-2 py-1 rounded-full">
            -{discount}%
          </span>
        )}
        <img
          src={image}
          alt={name}
          className="object-contain h-full w-full group-hover:scale-105 transition-transform duration-300"
        />
      </Link>

      <div className="p-5 flex flex-col flex-grow">
        <Link to={`/tienda/${id}`}>
          <h2 className="text-lg font-bold text-slate-900 group-hover:text-emerald-600 transition-colors line-clamp-1">
            {name}
          </h2>
        </Link>
        <p className="text-xs text-slate-500 mt-1">
          {category} · {presentation}
        </p>

        <div className="mt-auto pt-4 flex items-center justify-between">
          <div>
            {discount > 0 && (
              <p className="text-sm text-slate-400 line-through">
                {formatPrice(price)}
              </p>
            )}
            <p className="text-xl font-extrabold text-emerald-700">
              {formatPrice(finalPrice)}
            </p>
          </div>
          <Button onClick={() => onAdd(id)}>Añadir</Button>
        </div>
      </div>
    </article>
  )
}
