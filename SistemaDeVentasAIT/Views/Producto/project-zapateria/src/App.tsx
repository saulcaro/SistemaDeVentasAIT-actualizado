import React, { useState } from 'react';
import { 
  LayoutDashboard, 
  ShoppingBag, 
  Users, 
  BarChart3, 
  Settings, 
  LogOut, 
  Search, 
  Bell, 
  ShoppingCart, 
  Plus, 
  Trash2, 
  CreditCard,
  Package,
  TrendingUp,
  DollarSign,
  Calendar
} from 'lucide-react';

// Mock data for the dashboard
const recentSales = [
  { id: 1, product: 'Nike Air Max 270', customer: 'Carlos Rodríguez', price: 129.99, date: '2025-06-10', status: 'Completed' },
  { id: 2, product: 'Adidas Ultraboost 22', customer: 'María González', price: 159.99, date: '2025-06-09', status: 'Completed' },
  { id: 3, product: 'Puma RS-X', customer: 'Juan Pérez', price: 89.99, date: '2025-06-09', status: 'Processing' },
  { id: 4, product: 'New Balance 574', customer: 'Ana Martínez', price: 79.99, date: '2025-06-08', status: 'Completed' },
  { id: 5, product: 'Vans Old Skool', customer: 'Diego López', price: 69.99, date: '2025-06-08', status: 'Completed' },
];

const popularProducts = [
  { id: 1, name: 'Nike Air Force 1', price: 99.99, stock: 45, sold: 128, image: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&q=80&w=150&h=150' },
  { id: 2, name: 'Adidas Stan Smith', price: 89.99, stock: 32, sold: 96, image: 'https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?auto=format&fit=crop&q=80&w=150&h=150' },
  { id: 3, name: 'Converse Chuck Taylor', price: 59.99, stock: 28, sold: 87, image: 'https://images.unsplash.com/photo-1607522370275-f14206abe5d3?auto=format&fit=crop&q=80&w=150&h=150' },
  { id: 4, name: 'Puma Suede Classic', price: 69.99, stock: 18, sold: 64, image: 'https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&q=80&w=150&h=150' },
];

const cartItems = [
  { id: 1, name: 'Nike Air Max 270', size: '42', color: 'Black/Red', price: 129.99, quantity: 1 },
  { id: 2, name: 'Adidas Superstar', size: '39', color: 'White', price: 89.99, quantity: 1 },
];

function App() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [showCart, setShowCart] = useState(false);
  const [cart, setCart] = useState(cartItems);

  const removeFromCart = (id: number) => {
    setCart(cart.filter(item => item.id !== id));
  };

  const incrementQuantity = (id: number) => {
    setCart(cart.map(item => 
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    ));
  };

  const decrementQuantity = (id: number) => {
    setCart(cart.map(item => 
      item.id === id && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
    ));
  };

  const totalAmount = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  return (
    <div className="flex h-screen bg-gray-900 text-white overflow-hidden">
      {/* Sidebar */}
      <div className="w-20 md:w-64 bg-gray-800 flex flex-col">
        <div className="p-4 flex items-center justify-center md:justify-start">
          <ShoppingBag className="h-8 w-8 text-blue-400" />
          <span className="ml-2 text-xl font-bold hidden md:block">ZapatosPRO</span>
        </div>
        <nav className="flex-1 mt-6">
          <ul>
            <li>
              <button 
                onClick={() => setActiveTab('dashboard')}
                className={`flex items-center w-full p-4 ${activeTab === 'dashboard' ? 'bg-blue-600' : 'hover:bg-gray-700'}`}
              >
                <LayoutDashboard className="h-5 w-5" />
                <span className="ml-4 hidden md:block">Dashboard</span>
              </button>
            </li>
            <li>
              <button 
                onClick={() => setActiveTab('products')}
                className={`flex items-center w-full p-4 ${activeTab === 'products' ? 'bg-blue-600' : 'hover:bg-gray-700'}`}
              >
                <Package className="h-5 w-5" />
                <span className="ml-4 hidden md:block">Productos</span>
              </button>
            </li>
            <li>
              <button 
                onClick={() => setActiveTab('customers')}
                className={`flex items-center w-full p-4 ${activeTab === 'customers' ? 'bg-blue-600' : 'hover:bg-gray-700'}`}
              >
                <Users className="h-5 w-5" />
                <span className="ml-4 hidden md:block">Clientes</span>
              </button>
            </li>
            <li>
              <button 
                onClick={() => setActiveTab('sales')}
                className={`flex items-center w-full p-4 ${activeTab === 'sales' ? 'bg-blue-600' : 'hover:bg-gray-700'}`}
              >
                <BarChart3 className="h-5 w-5" />
                <span className="ml-4 hidden md:block">Ventas</span>
              </button>
            </li>
            <li>
              <button 
                onClick={() => setActiveTab('settings')}
                className={`flex items-center w-full p-4 ${activeTab === 'settings' ? 'bg-blue-600' : 'hover:bg-gray-700'}`}
              >
                <Settings className="h-5 w-5" />
                <span className="ml-4 hidden md:block">Configuración</span>
              </button>
            </li>
          </ul>
        </nav>
        <div className="p-4">
          <button className="flex items-center w-full p-2 hover:bg-gray-700 rounded">
            <LogOut className="h-5 w-5" />
            <span className="ml-4 hidden md:block">Cerrar Sesión</span>
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top Bar */}
        <header className="bg-gray-800 border-b border-gray-700 p-4 flex items-center justify-between">
          <div className="flex items-center bg-gray-700 rounded-lg px-3 py-2 w-64">
            <Search className="h-5 w-5 text-gray-400" />
            <input 
              type="text" 
              placeholder="Buscar..." 
              className="bg-transparent border-none focus:outline-none text-white ml-2 w-full"
            />
          </div>
          <div className="flex items-center space-x-4">
            <button className="relative p-2 rounded-full hover:bg-gray-700">
              <Bell className="h-5 w-5" />
              <span className="absolute top-0 right-0 h-2 w-2 bg-red-500 rounded-full"></span>
            </button>
            <button 
              className="relative p-2 rounded-full hover:bg-gray-700"
              onClick={() => setShowCart(!showCart)}
            >
              <ShoppingCart className="h-5 w-5" />
              {cart.length > 0 && (
                <span className="absolute -top-1 -right-1 h-5 w-5 bg-blue-500 rounded-full flex items-center justify-center text-xs">
                  {cart.length}
                </span>
              )}
            </button>
            <div className="flex items-center">
              <img 
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=32&h=32" 
                alt="Profile" 
                className="h-8 w-8 rounded-full"
              />
              <span className="ml-2 hidden md:block">Admin</span>
            </div>
          </div>
        </header>

        {/* Main Content Area */}
        <main className="flex-1 overflow-y-auto bg-gray-900 p-6">
          {activeTab === 'dashboard' && (
            <div>
              <h1 className="text-2xl font-bold mb-6">Dashboard</h1>
              
              {/* Stats Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl p-6 shadow-lg">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-blue-100">Ventas Totales</p>
                      <h3 className="text-3xl font-bold mt-1">$12,845</h3>
                      <p className="text-blue-200 text-sm mt-2">+18% desde el mes pasado</p>
                    </div>
                    <div className="bg-blue-500 bg-opacity-30 p-3 rounded-lg">
                      <DollarSign className="h-8 w-8 text-blue-100" />
                    </div>
                  </div>
                </div>
                
                <div className="bg-gradient-to-br from-purple-600 to-purple-800 rounded-xl p-6 shadow-lg">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-purple-100">Clientes Nuevos</p>
                      <h3 className="text-3xl font-bold mt-1">124</h3>
                      <p className="text-purple-200 text-sm mt-2">+5% desde el mes pasado</p>
                    </div>
                    <div className="bg-purple-500 bg-opacity-30 p-3 rounded-lg">
                      <Users className="h-8 w-8 text-purple-100" />
                    </div>
                  </div>
                </div>
                
                <div className="bg-gradient-to-br from-green-600 to-green-800 rounded-xl p-6 shadow-lg">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-green-100">Productos Vendidos</p>
                      <h3 className="text-3xl font-bold mt-1">342</h3>
                      <p className="text-green-200 text-sm mt-2">+12% desde el mes pasado</p>
                    </div>
                    <div className="bg-green-500 bg-opacity-30 p-3 rounded-lg">
                      <Package className="h-8 w-8 text-green-100" />
                    </div>
                  </div>
                </div>
                
                <div className="bg-gradient-to-br from-red-600 to-red-800 rounded-xl p-6 shadow-lg">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-red-100">Ticket Promedio</p>
                      <h3 className="text-3xl font-bold mt-1">$94.20</h3>
                      <p className="text-red-200 text-sm mt-2">+2% desde el mes pasado</p>
                    </div>
                    <div className="bg-red-500 bg-opacity-30 p-3 rounded-lg">
                      <TrendingUp className="h-8 w-8 text-red-100" />
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Recent Sales & Popular Products */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Recent Sales */}
                <div className="bg-gray-800 rounded-xl shadow-lg overflow-hidden">
                  <div className="p-6 border-b border-gray-700 flex justify-between items-center">
                    <h2 className="text-xl font-bold">Ventas Recientes</h2>
                    <button className="text-blue-400 hover:text-blue-300 text-sm">Ver Todas</button>
                  </div>
                  <div className="p-6">
                    <div className="overflow-x-auto">
                      <table className="w-full">
                        <thead>
                          <tr className="text-left text-gray-400 text-sm">
                            <th className="pb-3">Producto</th>
                            <th className="pb-3">Cliente</th>
                            <th className="pb-3">Precio</th>
                            <th className="pb-3">Estado</th>
                          </tr>
                        </thead>
                        <tbody>
                          {recentSales.map(sale => (
                            <tr key={sale.id} className="border-t border-gray-700">
                              <td className="py-3">{sale.product}</td>
                              <td className="py-3">{sale.customer}</td>
                              <td className="py-3">${sale.price}</td>
                              <td className="py-3">
                                <span className={`px-2 py-1 rounded-full text-xs ${
                                  sale.status === 'Completed' 
                                    ? 'bg-green-900 text-green-300' 
                                    : 'bg-yellow-900 text-yellow-300'
                                }`}>
                                  {sale.status}
                                </span>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
                
                {/* Popular Products */}
                <div className="bg-gray-800 rounded-xl shadow-lg overflow-hidden">
                  <div className="p-6 border-b border-gray-700 flex justify-between items-center">
                    <h2 className="text-xl font-bold">Productos Populares</h2>
                    <button className="text-blue-400 hover:text-blue-300 text-sm">Ver Todos</button>
                  </div>
                  <div className="p-6">
                    <div className="space-y-4">
                      {popularProducts.map(product => (
                        <div key={product.id} className="flex items-center space-x-4">
                          <img 
                            src={product.image} 
                            alt={product.name} 
                            className="h-16 w-16 object-cover rounded-lg"
                          />
                          <div className="flex-1">
                            <h3 className="font-medium">{product.name}</h3>
                            <div className="flex items-center text-sm text-gray-400 mt-1">
                              <span>${product.price}</span>
                              <span className="mx-2">•</span>
                              <span>Stock: {product.stock}</span>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="text-green-400 font-medium">{product.sold} vendidos</div>
                            <button className="mt-1 text-sm text-blue-400 hover:text-blue-300">Detalles</button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'products' && (
            <div>
              <h1 className="text-2xl font-bold mb-6">Productos</h1>
              <p className="text-gray-400">Interfaz de gestión de productos lista para integrar con ASP.NET</p>
            </div>
          )}

          {activeTab === 'customers' && (
            <div>
              <h1 className="text-2xl font-bold mb-6">Clientes</h1>
              <p className="text-gray-400">Interfaz de gestión de clientes lista para integrar con ASP.NET</p>
            </div>
          )}

          {activeTab === 'sales' && (
            <div>
              <h1 className="text-2xl font-bold mb-6">Ventas</h1>
              <p className="text-gray-400">Interfaz de reportes de ventas lista para integrar con ASP.NET</p>
            </div>
          )}

          {activeTab === 'settings' && (
            <div>
              <h1 className="text-2xl font-bold mb-6">Configuración</h1>
              <p className="text-gray-400">Interfaz de configuración lista para integrar con ASP.NET</p>
            </div>
          )}
        </main>
      </div>

      {/* Shopping Cart Sidebar */}
      {showCart && (
        <div className="fixed inset-0 z-50 overflow-hidden">
          <div className="absolute inset-0 bg-black bg-opacity-50" onClick={() => setShowCart(false)}></div>
          <div className="absolute right-0 top-0 bottom-0 w-full max-w-md bg-gray-800 shadow-xl flex flex-col">
            <div className="p-6 border-b border-gray-700 flex items-center justify-between">
              <h2 className="text-xl font-bold">Carrito de Compra</h2>
              <button onClick={() => setShowCart(false)} className="text-gray-400 hover:text-white">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <div className="flex-1 overflow-y-auto p-6">
              {cart.length === 0 ? (
                <div className="text-center py-12">
                  <ShoppingCart className="h-16 w-16 mx-auto text-gray-500" />
                  <p className="mt-4 text-gray-400">Tu carrito está vacío</p>
                </div>
              ) : (
                <div className="space-y-6">
                  {cart.map(item => (
                    <div key={item.id} className="flex items-start space-x-4 border-b border-gray-700 pb-6">
                      <div className="bg-gray-700 h-20 w-20 rounded-lg flex items-center justify-center">
                        <ShoppingBag className="h-10 w-10 text-gray-400" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-medium">{item.name}</h3>
                        <p className="text-sm text-gray-400 mt-1">Talla: {item.size} • Color: {item.color}</p>
                        <div className="mt-3 flex items-center">
                          <button 
                            onClick={() => decrementQuantity(item.id)}
                            className="h-8 w-8 rounded-full border border-gray-600 flex items-center justify-center text-gray-400 hover:bg-gray-700"
                          >
                            -
                          </button>
                          <span className="mx-3">{item.quantity}</span>
                          <button 
                            onClick={() => incrementQuantity(item.id)}
                            className="h-8 w-8 rounded-full border border-gray-600 flex items-center justify-center text-gray-400 hover:bg-gray-700"
                          >
                            +
                          </button>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-medium">${(item.price * item.quantity).toFixed(2)}</p>
                        <button 
                          onClick={() => removeFromCart(item.id)}
                          className="mt-3 text-red-400 hover:text-red-300 flex items-center"
                        >
                          <Trash2 className="h-4 w-4 mr-1" />
                          <span className="text-sm">Eliminar</span>
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
            
            {cart.length > 0 && (
              <div className="p-6 border-t border-gray-700">
                <div className="flex justify-between mb-4">
                  <span className="text-gray-400">Subtotal</span>
                  <span>${totalAmount.toFixed(2)}</span>
                </div>
                <div className="flex justify-between mb-6">
                  <span className="text-gray-400">Impuestos (16%)</span>
                  <span>${(totalAmount * 0.16).toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-lg font-bold mb-6">
                  <span>Total</span>
                  <span>${(totalAmount * 1.16).toFixed(2)}</span>
                </div>
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg flex items-center justify-center">
                  <CreditCard className="h-5 w-5 mr-2" />
                  Proceder al Pago
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;