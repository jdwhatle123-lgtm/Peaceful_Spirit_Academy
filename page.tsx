'use client';

import { useState } from 'react';

interface Product {
  id: string;
  name: string;
  type: string;
  price: number;
  originalPrice?: number;
  description: string;
  features: string[];
  emoji: string;
  color: string;
  badge?: string;
}

interface CartItem extends Product {
  quantity: number;
}

export default function Shop() {
  const [selectedPayment, setSelectedPayment] = useState('card');
  const [cart, setCart] = useState<CartItem[]>([]);
  const [showCheckout, setShowCheckout] = useState(false);

  const products = [
    {
      id: 'seedling-package',
      name: 'Seedling Package',
      type: 'Monthly Subscription',
      price: 47,
      description: 'Perfect for families beginning their spiritual journey',
      features: [
        'Access to 3 core courses',
        'Monthly family activities',
        'Digital downloads',
        'Community forum access',
        'Email support'
      ],
      emoji: '🌱',
      color: 'from-green-500 to-emerald-600'
    },
    {
      id: 'sprouting-package',
      name: 'Sprouting Package',
      type: 'Monthly Subscription',
      price: 97,
      description: 'For families ready to deepen their practice',
      features: [
        'All Seedling features',
        'Access to ALL courses',
        'Weekly live sessions',
        'Personal progress tracking',
        'Priority support',
        'Advanced materials'
      ],
      emoji: '🌿',
      color: 'from-blue-500 to-cyan-600'
    },
    {
      id: 'wisdom-keeper-package',
      name: 'Wisdom Keeper Package',
      type: 'Monthly Subscription',
      price: 197,
      description: 'Complete spiritual education experience',
      features: [
        'All Sprouting features',
        'One-on-one monthly sessions',
        'Custom family plan',
        'Certification pathway',
        'Direct access to Jennifer',
        'Exclusive workshops'
      ],
      emoji: '🌳',
      color: 'from-purple-500 to-violet-600'
    },
    {
      id: 'seedling-cert',
      name: 'Spiritual Seedling Certificate',
      type: 'Certification Program',
      price: 297,
      description: 'Foundation level certification program',
      features: [
        '6-month program',
        'Complete 3 core courses',
        'Reflection journals',
        'Family practice sessions',
        'Official certificate',
        'Assessment included'
      ],
      emoji: '🏆',
      color: 'from-green-500 to-emerald-600'
    },
    {
      id: 'sprout-cert',
      name: 'Spiritual Sprout Practitioner',
      type: 'Certification Program',
      price: 597,
      description: 'Intermediate certification with mentoring',
      features: [
        '12-month program',
        'Advanced techniques',
        'Mentor younger students',
        'Community workshops',
        'Practical assessment',
        'Practitioner status'
      ],
      emoji: '🌿',
      color: 'from-blue-500 to-cyan-600'
    },
    {
      id: 'wisdom-cert',
      name: 'Wisdom Keeper Master',
      type: 'Certification Program',
      price: 997,
      description: 'Master level certification program',
      features: [
        '18-month program',
        'Teach community workshops',
        'Thesis project',
        'Master assessment',
        'Jennifer\'s approval',
        'Teaching credentials'
      ],
      emoji: '👑',
      color: 'from-purple-500 to-violet-600'
    },
    {
      id: 'master-cert',
      name: 'Master of Spiritual Living',
      type: 'Complete Certification',
      price: 1497,
      originalPrice: 1891,
      description: 'Complete mastery certification journey',
      features: [
        'All certification levels',
        '24-month journey',
        'Complete spiritual mastery',
        'Teaching credentials',
        'Practitioner network',
        'Lifetime access'
      ],
      emoji: '🌟',
      color: 'from-gold-500 to-yellow-600',
      badge: 'SAVE $394'
    }
  ];

  const addToCart = (product: Product) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item => 
          item.id === product.id 
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (productId: string) => {
    setCart(prev => prev.filter(item => item.id !== productId));
  };

  const updateQuantity = (productId: string, newQuantity: number) => {
    if (newQuantity === 0) {
      removeFromCart(productId);
      return;
    }
    setCart(prev => 
      prev.map(item => 
        item.id === productId 
          ? { ...item, quantity: newQuantity }
          : item
      )
    );
  };

  const getCartTotal = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const handleCheckout = () => {
    if (cart.length === 0) {
      alert('Please add items to cart before checkout');
      return;
    }
    setShowCheckout(true);
  };

  const processPayment = () => {
    alert(`Payment processed successfully with ${selectedPayment}! Welcome to Peaceful Spirit Academy! 🌟`);
    setCart([]);
    setShowCheckout(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100 dark:from-purple-900 dark:via-blue-900 dark:to-indigo-900 p-8 pt-24">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent mb-6">
            🛒 Academy Shop
          </h1>
          <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed max-w-4xl mx-auto">
            Purchase subscriptions, certification programs, and begin your spiritual journey with secure payment options.
          </p>
        </div>

        {/* Shopping Cart Summary */}
        <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-xl p-6 mb-8 border border-purple-200 dark:border-purple-700 shadow-lg">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <span className="text-2xl">🛍️</span>
              <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                Shopping Cart ({cart.length} items)
              </h2>
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">
                ${getCartTotal()}/month
              </div>
              <button
                onClick={handleCheckout}
                disabled={cart.length === 0}
                className={`mt-2 px-6 py-2 rounded-full font-medium transition-all ${
                  cart.length > 0
                    ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:from-purple-700 hover:to-blue-700'
                    : 'bg-gray-300 dark:bg-gray-600 text-gray-500 dark:text-gray-400 cursor-not-allowed'
                }`}
              >
                💳 Checkout
              </button>
            </div>
          </div>
          
          {cart.length > 0 && (
            <div className="mt-4 space-y-2">
              {cart.map(item => (
                <div key={item.id} className="flex justify-between items-center bg-purple-50 dark:bg-purple-900/30 rounded-lg p-3">
                  <div className="flex items-center space-x-3">
                    <span className="text-lg">{item.emoji}</span>
                    <span className="font-medium text-gray-800 dark:text-gray-200">{item.name}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="flex items-center space-x-2">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="w-8 h-8 rounded-full bg-purple-200 dark:bg-purple-700 text-purple-800 dark:text-purple-200 hover:bg-purple-300 dark:hover:bg-purple-600"
                      >
                        -
                      </button>
                      <span className="w-8 text-center font-medium">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="w-8 h-8 rounded-full bg-purple-200 dark:bg-purple-700 text-purple-800 dark:text-purple-200 hover:bg-purple-300 dark:hover:bg-purple-600"
                      >
                        +
                      </button>
                    </div>
                    <span className="font-bold text-purple-600 dark:text-purple-400 w-20 text-right">
                      ${item.price * item.quantity}
                    </span>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="w-8 h-8 rounded-full bg-red-200 dark:bg-red-700 text-red-800 dark:text-red-200 hover:bg-red-300 dark:hover:bg-red-600"
                    >
                      ×
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {products.map((product) => (
            <div 
              key={product.id}
              className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-xl border border-purple-200 dark:border-purple-700 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="p-6">
                {product.badge && (
                  <div className="bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full mb-4 inline-block">
                    {product.badge}
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <div className="text-4xl mb-3">{product.emoji}</div>
                  <div className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-2">
                    {product.type}
                  </div>
                  <h3 className={`text-xl font-bold bg-gradient-to-r ${product.color} bg-clip-text text-transparent mb-3`}>
                    {product.name}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                    {product.description}
                  </p>
                  
                  <div className="flex items-center justify-center space-x-2 mb-4">
                    {product.originalPrice && (
                      <span className="text-gray-500 dark:text-gray-400 line-through text-lg">
                        ${product.originalPrice}
                      </span>
                    )}
                    <span className="text-3xl font-bold text-purple-600 dark:text-purple-400">
                      ${product.price}
                    </span>
                    {product.type.includes('Monthly') && (
                      <span className="text-gray-600 dark:text-gray-400">/month</span>
                    )}
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-3">
                    ✨ Includes:
                  </h4>
                  <ul className="space-y-2">
                    {product.features.map((feature, index) => (
                      <li key={index} className="flex items-start space-x-2 text-sm">
                        <span className="text-green-500 dark:text-green-400 mt-1">✓</span>
                        <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  onClick={() => addToCart(product)}
                  className={`w-full py-3 px-6 rounded-full bg-gradient-to-r ${product.color} text-white font-medium hover:shadow-lg transition-all duration-300`}
                >
                  🛒 Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Checkout Modal */}
        {showCheckout && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="bg-white dark:bg-gray-800 rounded-xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200">
                  💳 Secure Checkout
                </h2>
                <button
                  onClick={() => setShowCheckout(false)}
                  className="w-8 h-8 rounded-full bg-gray-200 dark:bg-gray-600 text-gray-600 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-500"
                >
                  ×
                </button>
              </div>

              {/* Order Summary */}
              <div className="bg-purple-50 dark:bg-purple-900/30 rounded-lg p-4 mb-6">
                <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-3">Order Summary</h3>
                {cart.map(item => (
                  <div key={item.id} className="flex justify-between items-center mb-2">
                    <span className="text-gray-700 dark:text-gray-300">
                      {item.emoji} {item.name} × {item.quantity}
                    </span>
                    <span className="font-medium text-purple-600 dark:text-purple-400">
                      ${item.price * item.quantity}
                    </span>
                  </div>
                ))}
                <div className="border-t border-purple-200 dark:border-purple-700 pt-2 mt-2">
                  <div className="flex justify-between items-center">
                    <span className="font-bold text-gray-800 dark:text-gray-200">Total:</span>
                    <span className="text-2xl font-bold text-purple-600 dark:text-purple-400">
                      ${getCartTotal()}/month
                    </span>
                  </div>
                </div>
              </div>

              {/* Payment Method Selection */}
              <div className="mb-6">
                <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-4">Select Payment Method</h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <button
                    onClick={() => setSelectedPayment('card')}
                    className={`p-4 rounded-lg border-2 transition-all ${
                      selectedPayment === 'card'
                        ? 'border-purple-500 bg-purple-50 dark:bg-purple-900/30'
                        : 'border-gray-300 dark:border-gray-600 hover:border-purple-300'
                    }`}
                  >
                    <div className="text-2xl mb-2">💳</div>
                    <div className="font-medium text-gray-800 dark:text-gray-200">Credit/Debit Card</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Visa, MasterCard, AmEx</div>
                  </button>
                  
                  <button
                    onClick={() => setSelectedPayment('paypal')}
                    className={`p-4 rounded-lg border-2 transition-all ${
                      selectedPayment === 'paypal'
                        ? 'border-purple-500 bg-purple-50 dark:bg-purple-900/30'
                        : 'border-gray-300 dark:border-gray-600 hover:border-purple-300'
                    }`}
                  >
                    <div className="text-2xl mb-2">💰</div>
                    <div className="font-medium text-gray-800 dark:text-gray-200">PayPal</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Quick & Secure</div>
                  </button>
                  
                  <button
                    onClick={() => setSelectedPayment('crypto')}
                    className={`p-4 rounded-lg border-2 transition-all ${
                      selectedPayment === 'crypto'
                        ? 'border-purple-500 bg-purple-50 dark:bg-purple-900/30'
                        : 'border-gray-300 dark:border-gray-600 hover:border-purple-300'
                    }`}
                  >
                    <div className="text-2xl mb-2">₿</div>
                    <div className="font-medium text-gray-800 dark:text-gray-200">Cryptocurrency</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Bitcoin, Ethereum, more</div>
                  </button>
                </div>
              </div>

              {/* Payment Form */}
              {selectedPayment === 'card' && (
                <div className="space-y-4 mb-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Card Number
                    </label>
                    <input
                      type="text"
                      placeholder="1234 5678 9012 3456"
                      className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Expiry Date
                      </label>
                      <input
                        type="text"
                        placeholder="MM/YY"
                        className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        CVV
                      </label>
                      <input
                        type="text"
                        placeholder="123"
                        className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Cardholder Name
                    </label>
                    <input
                      type="text"
                      placeholder="John Doe"
                      className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200"
                    />
                  </div>
                </div>
              )}

              {selectedPayment === 'crypto' && (
                <div className="bg-blue-50 dark:bg-blue-900/30 rounded-lg p-4 mb-6">
                  <h4 className="font-semibold text-blue-800 dark:text-blue-300 mb-3">
                    ₿ Cryptocurrency Payment
                  </h4>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 bg-white dark:bg-gray-700 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <span className="text-xl">₿</span>
                        <span className="font-medium text-gray-800 dark:text-gray-200">Bitcoin (BTC)</span>
                      </div>
                      <span className="text-sm text-gray-600 dark:text-gray-400">Most Popular</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-white dark:bg-gray-700 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <span className="text-xl">Ξ</span>
                        <span className="font-medium text-gray-800 dark:text-gray-200">Ethereum (ETH)</span>
                      </div>
                      <span className="text-sm text-gray-600 dark:text-gray-400">Smart Contracts</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-white dark:bg-gray-700 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <span className="text-xl">◎</span>
                        <span className="font-medium text-gray-800 dark:text-gray-200">Solana (SOL)</span>
                      </div>
                      <span className="text-sm text-gray-600 dark:text-gray-400">Low Fees</span>
                    </div>
                  </div>
                  <p className="text-sm text-blue-700 dark:text-blue-300 mt-3">
                    You'll be redirected to complete payment with your preferred crypto wallet.
                  </p>
                </div>
              )}

              {selectedPayment === 'paypal' && (
                <div className="bg-yellow-50 dark:bg-yellow-900/30 rounded-lg p-4 mb-6 text-center">
                  <div className="text-4xl mb-3">💰</div>
                  <h4 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
                    PayPal Secure Payment
                  </h4>
                  <p className="text-sm text-yellow-700 dark:text-yellow-300">
                    You'll be redirected to PayPal to complete your secure payment.
                  </p>
                </div>
              )}

              {/* Contact Information */}
              <div className="space-y-4 mb-6">
                <h3 className="font-semibold text-gray-800 dark:text-gray-200">Contact Information</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="First Name"
                    className="p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200"
                  />
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200"
                  />
                </div>
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200"
                />
              </div>

              {/* Security Notice */}
              <div className="bg-green-50 dark:bg-green-900/30 rounded-lg p-4 mb-6">
                <div className="flex items-center space-x-2 mb-2">
                  <span className="text-green-600 dark:text-green-400">🔒</span>
                  <span className="font-semibold text-green-800 dark:text-green-300">Secure Payment</span>
                </div>
                <p className="text-sm text-green-700 dark:text-green-300">
                  Your payment information is encrypted and secure. We use industry-standard SSL encryption to protect your data.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex space-x-4">
                <button
                  onClick={() => setShowCheckout(false)}
                  className="flex-1 py-3 px-6 border border-gray-300 dark:border-gray-600 rounded-full text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-all"
                >
                  Cancel
                </button>
                <button
                  onClick={processPayment}
                  className="flex-1 py-3 px-6 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full font-medium hover:from-purple-700 hover:to-blue-700 transition-all"
                >
                  🔒 Complete Payment ${getCartTotal()}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}