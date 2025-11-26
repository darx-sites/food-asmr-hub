'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useState, useEffect } from 'react'

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const { scrollYProgress } = useScroll()
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95])

  const socialLinks = [
    {
      name: 'TikTok',
      icon: '🎵',
      url: 'https://tiktok.com',
      color: 'from-black to-gray-800',
      description: '2M+ Followers'
    },
    {
      name: 'Instagram',
      icon: '📸',
      url: 'https://instagram.com',
      color: 'from-purple-600 to-pink-600',
      description: '1.5M+ Followers'
    },
    {
      name: 'YouTube',
      icon: '▶️',
      url: 'https://youtube.com',
      color: 'from-red-600 to-red-700',
      description: '800K+ Subscribers'
    },
    {
      name: 'Shop',
      icon: '🛍️',
      url: 'https://shop.example.com',
      color: 'from-food-orange to-food-gold',
      description: 'Exclusive Merch'
    }
  ]

  const affiliateLinks = [
    {
      name: 'Kitchen Tools',
      icon: '🔪',
      url: 'https://amazon.com',
      description: 'My favorite cooking essentials'
    },
    {
      name: 'Recipe Book',
      icon: '📖',
      url: 'https://example.com',
      description: 'Digital cookbook collection'
    },
    {
      name: 'Exclusive Content',
      icon: '⭐',
      url: 'https://patreon.com',
      description: 'Behind-the-scenes access'
    }
  ]

  const recentVideos = [
    {
      title: 'Crispy Fried Chicken ASMR',
      thumbnail: 'https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?w=800&q=80',
      views: '2.5M views'
    },
    {
      title: 'Chocolate Lava Cake Mukbang',
      thumbnail: 'https://images.unsplash.com/photo-1624353365286-3f8d62daad51?w=800&q=80',
      views: '1.8M views'
    },
    {
      title: 'Sushi Platter Eating Sounds',
      thumbnail: 'https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=800&q=80',
      views: '3.2M views'
    },
    {
      title: 'Cheese Pull Pizza ASMR',
      thumbnail: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=800&q=80',
      views: '2.1M views'
    }
  ]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', { name, email })
    alert('Thank you for signing up! Check your email for course details.')
    setIsModalOpen(false)
    setName('')
    setEmail('')
  }

  return (
    <main className="min-h-screen relative overflow-hidden">
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-food-orange/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-food-gold/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-warm-300/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      <motion.section 
        style={{ opacity, scale }}
        className="relative min-h-screen flex items-center justify-center px-4 py-20"
      >
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ type: 'spring', stiffness: 100, damping: 15, duration: 1 }}
            className="mb-8 inline-block"
          >
            <div className="w-32 h-32 mx-auto bg-gradient-to-br from-food-orange to-food-gold rounded-full flex items-center justify-center text-6xl shadow-2xl">
              🍜
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-5xl md:text-7xl font-display font-bold mb-6 gradient-text"
          >
            Food ASMR Hub
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-xl md:text-2xl text-warm-800 mb-8 font-light"
          >
            Satisfying sounds, delicious recipes, and culinary magic ✨
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="flex flex-wrap gap-4 justify-center mb-12"
          >
            <span className="px-6 py-2 bg-white/80 backdrop-blur-sm rounded-full text-warm-900 font-medium shadow-lg">2M+ TikTok Followers</span>
            <span className="px-6 py-2 bg-white/80 backdrop-blur-sm rounded-full text-warm-900 font-medium shadow-lg">1.5M+ Instagram Fans</span>
            <span className="px-6 py-2 bg-white/80 backdrop-blur-sm rounded-full text-warm-900 font-medium shadow-lg">800K+ YouTube Subs</span>
          </motion.div>

          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.9, duration: 0.5 }}
            whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(255, 107, 53, 0.3)' }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsModalOpen(true)}
            className="px-10 py-5 bg-gradient-to-r from-food-orange to-food-gold text-white text-lg font-semibold rounded-full shadow-2xl hover:shadow-food-orange/50 transition-all duration-300"
          >
            🎓 Join My Cooking Course
          </motion.button>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 1 }}
            className="mt-12"
          >
            <p className="text-warm-600 text-sm mb-4">Scroll to explore</p>
            <div className="w-6 h-10 border-2 border-warm-400 rounded-full mx-auto flex justify-center">
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
                className="w-1.5 h-3 bg-food-orange rounded-full mt-2"
              />
            </div>
          </motion.div>
        </div>
      </motion.section>

      <section className="relative py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-display font-bold text-center mb-4 gradient-text"
          >
            Connect With Me
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center text-warm-700 text-lg mb-16"
          >
            Follow my journey across all platforms
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {socialLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="glass-effect rounded-2xl p-8 text-center group cursor-pointer shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                <div className={`w-20 h-20 mx-auto mb-4 bg-gradient-to-br ${link.color} rounded-2xl flex items-center justify-center text-4xl shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  {link.icon}
                </div>
                <h3 className="text-2xl font-bold text-warm-900 mb-2">{link.name}</h3>
                <p className="text-warm-600 text-sm">{link.description}</p>
              </motion.a>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="glass-effect rounded-3xl p-8 md:p-12"
          >
            <h3 className="text-3xl font-display font-bold text-center mb-8 gradient-text">Affiliate Links & Exclusives</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {affiliateLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-food-orange"
                >
                  <div className="text-5xl mb-4">{link.icon}</div>
                  <h4 className="text-xl font-bold text-warm-900 mb-2">{link.name}</h4>
                  <p className="text-warm-600 text-sm">{link.description}</p>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="relative py-20 px-4 bg-gradient-to-b from-transparent to-warm-100/50">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-display font-bold text-center mb-4 gradient-text"
          >
            Latest ASMR Videos
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center text-warm-700 text-lg mb-16"
          >
            Watch my most satisfying food moments
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {recentVideos.map((video, index) => (
              <motion.div
                key={video.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="group cursor-pointer"
              >
                <div className="relative overflow-hidden rounded-2xl shadow-xl group-hover:shadow-2xl transition-all duration-300">
                  <img 
                    src={video.thumbnail} 
                    alt={video.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-4 w-full">
                      <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center mx-auto mb-2">
                        <span className="text-3xl">▶️</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-4">
                  <h3 className="text-lg font-semibold text-warm-900 mb-1">{video.title}</h3>
                  <p className="text-warm-600 text-sm">{video.views}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="glass-effect rounded-3xl p-12 md:p-16 shadow-2xl"
          >
            <div className="text-6xl mb-6">👨‍🍳</div>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 gradient-text">Master the Art of Cooking</h2>
            <p className="text-xl text-warm-700 mb-8 leading-relaxed">
              Join my exclusive online cooking course and learn the secrets behind creating restaurant-quality dishes at home. From knife skills to plating techniques, I'll guide you every step of the way.
            </p>
            <div className="flex flex-wrap gap-4 justify-center mb-10">
              <span className="px-6 py-3 bg-white rounded-full text-warm-900 font-medium shadow-md">✓ 50+ Video Lessons</span>
              <span className="px-6 py-3 bg-white rounded-full text-warm-900 font-medium shadow-md">✓ Lifetime Access</span>
              <span className="px-6 py-3 bg-white rounded-full text-warm-900 font-medium shadow-md">✓ Private Community</span>
            </div>
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(255, 107, 53, 0.4)' }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsModalOpen(true)}
              className="px-12 py-6 bg-gradient-to-r from-food-orange to-food-gold text-white text-xl font-bold rounded-full shadow-2xl hover:shadow-food-orange/50 transition-all duration-300"
            >
              Enroll Now - Limited Spots!
            </motion.button>
          </motion.div>
        </div>
      </section>

      <footer className="relative py-12 px-4 bg-warm-900 text-warm-100">
        <div className="max-w-6xl mx-auto text-center">
          <div className="text-5xl mb-6">🍜</div>
          <h3 className="text-2xl font-display font-bold mb-4">Food ASMR Hub</h3>
          <p className="text-warm-300 mb-6">Creating satisfying content, one bite at a time</p>
          <div className="flex justify-center gap-6 mb-8">
            <a href="#" className="text-warm-300 hover:text-white transition-colors duration-300 text-2xl">📧</a>
            <a href="#" className="text-warm-300 hover:text-white transition-colors duration-300 text-2xl">🎵</a>
            <a href="#" className="text-warm-300 hover:text-white transition-colors duration-300 text-2xl">📸</a>
            <a href="#" className="text-warm-300 hover:text-white transition-colors duration-300 text-2xl">▶️</a>
          </div>
          <p className="text-warm-400 text-sm">© 2024 Food ASMR Hub. All rights reserved.</p>
        </div>
      </footer>

      {isModalOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setIsModalOpen(false)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="bg-white rounded-3xl p-8 md:p-12 max-w-md w-full shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 w-10 h-10 bg-warm-100 hover:bg-warm-200 rounded-full flex items-center justify-center text-warm-900 text-xl transition-colors duration-300"
            >
              ×
            </button>
            
            <div className="text-center mb-8">
              <div className="text-6xl mb-4">🎓</div>
              <h3 className="text-3xl font-display font-bold gradient-text mb-2">Join the Course</h3>
              <p className="text-warm-600">Start your culinary journey today</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-warm-900 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="w-full px-4 py-3 border-2 border-warm-200 rounded-xl focus:border-food-orange focus:outline-none transition-colors duration-300"
                  placeholder="Enter your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-warm-900 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full px-4 py-3 border-2 border-warm-200 rounded-xl focus:border-food-orange focus:outline-none transition-colors duration-300"
                  placeholder="your@email.com"
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full px-8 py-4 bg-gradient-to-r from-food-orange to-food-gold text-white text-lg font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Sign Me Up! 🚀
              </motion.button>
            </form>

            <p className="text-center text-warm-500 text-xs mt-6">
              By signing up, you agree to receive course updates and exclusive content.
            </p>
          </motion.div>
        </motion.div>
      )}
    </main>
  )
}