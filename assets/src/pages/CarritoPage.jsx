import { useState } from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
export function Carrito (){
    // Estado local para los productos del carrito
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      nombre: 'Amoxibay 250mg',
      precio: 4200,
      cantidad: 1,
    },
  ]);

  // Función para eliminar un ítem
  const handleRemoveItem = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  // Cálculo del subtotal sumando precio * cantidad
  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.precio * item.cantidad,
    0
  );
    return(
        <div className="flex flex-col min-h-screen font-sans bg-slate-50 text-slate-800 antialiased">
      {/* Componente Header */}
      <Header />

      {/* Contenido principal del Carrito */}
      <main className="flex-grow max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <section className="contenedor-carrito space-y-8">
          <div className="border-b border-slate-200 pb-4">
            <h1 className="text-3xl font-extrabold text-slate-900">
              Tu Carrito de Compras
            </h1>
            <p className="text-slate-500 text-sm mt-1">
              Revisa los artículos seleccionados antes de finalizar tu orden.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            {/* Tabla de Productos */}
            <div className="lg:col-span-2 bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="tabla-carrito w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-slate-50 border-b border-slate-100 text-xs font-semibold text-slate-500 uppercase tracking-wider">
                      <th className="py-4 px-6">Producto</th>
                      <th className="py-4 px-4 text-center">Precio</th>
                      <th className="py-4 px-4 text-center">Cantidad</th>
                      <th className="py-4 px-4 text-right">Subtotal</th>
                      <th className="py-4 px-6 text-center">Acción</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 text-sm text-slate-700">
                    {cartItems.length > 0 ? (
                      cartItems.map((item) => (
                        <tr key={item.id} className="hover:bg-slate-50/50 transition-colors">
                          <td className="py-4 px-6 font-medium text-slate-900">
                            {item.nombre}
                          </td>
                          <td className="py-4 px-4 text-center whitespace-nowrap">
                            ${item.precio.toLocaleString('es-CL')}
                          </td>
                          <td className="py-4 px-4 text-center">
                            <span className="inline-block bg-slate-100 text-slate-800 font-medium px-3 py-1 rounded-md text-xs border border-slate-200">
                              {item.cantidad}
                            </span>
                          </td>
                          <td className="py-4 px-4 text-right font-semibold text-slate-900 whitespace-nowrap">
                            ${(item.precio * item.cantidad).toLocaleString('es-CL')}
                          </td>
                          <td className="py-4 px-6 text-center whitespace-nowrap">
                            <button
                              type="button"
                              onClick={() => handleRemoveItem(item.id)}
                              className="btn-eliminar-carrito text-xs font-semibold text-rose-600 hover:text-rose-700 bg-rose-50 hover:bg-rose-100 px-3 py-1.5 rounded-lg border border-rose-200 transition-colors"
                            >
                              Eliminar
                            </button>
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan="5" className="py-8 text-center text-slate-500">
                          Tu carrito está vacío.
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Resumen de la compra */}
            <div className="resumen-compra bg-white p-6 rounded-2xl shadow-sm border border-slate-100 space-y-6">
              <h2 className="text-xl font-bold text-slate-900 border-b border-slate-100 pb-3">
                Resumen del pedido
              </h2>

              <div className="space-y-3 text-sm text-slate-600">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="font-medium text-slate-800">
                    ${subtotal.toLocaleString('es-CL')}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Envío</span>
                  <span className="text-emerald-600 font-medium">Gratis</span>
                </div>
                <div className="border-t border-slate-100 pt-3 flex justify-between items-center">
                  <h3 className="text-base font-bold text-slate-900">Total a Pagar</h3>
                  <span className="text-2xl font-extrabold text-emerald-600">
                    ${subtotal.toLocaleString('es-CL')}
                  </span>
                </div>
              </div>

              <div className="space-y-3 pt-2">
                <button
                  type="button"
                  disabled={cartItems.length === 0}
                  className="boton-finalizar w-full py-3 px-4 bg-emerald-600 hover:bg-emerald-700 disabled:bg-slate-300 text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition-all duration-200 text-sm text-center"
                >
                  Proceder al Pago
                </button>
                <a
                  href="/tienda"
                  className="enlace-seguir block text-center text-xs font-semibold text-emerald-600 hover:text-emerald-700 hover:underline py-1"
                >
                  ← Seguir comprando
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Componente Footer */}
      <Footer />
    </div>
    );
}