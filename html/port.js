import React, { useState } from 'react';
import { Star, Calendar, MapPin, User, Quote } from 'lucide-react';

const ConstructionPortfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  // Sample projects data
  const projects = [
    {
      id: 1,
      title: "Modern Office Complex",
      category: "commercial",
      location: "Colombo",
      date: "2024-08",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80",
      description: "A state-of-the-art office building with sustainable design features"
    },
    {
      id: 2,
      title: "Luxury Villa Residence",
      category: "residential",
      location: "Galle",
      date: "2024-06",
      image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80",
      description: "Contemporary luxury villa with ocean views and modern amenities"
    },
    {
      id: 3,
      title: "Shopping Mall Renovation",
      category: "commercial",
      location: "Kandy",
      date: "2024-09",
      image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&q=80",
      description: "Complete renovation and modernization of retail space"
    },
    {
      id: 4,
      title: "Apartment Complex",
      category: "residential",
      location: "Negombo",
      date: "2024-07",
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80",
      description: "Multi-story residential complex with premium facilities"
    },
    {
      id: 5,
      title: "Industrial Warehouse",
      category: "industrial",
      location: "Kalutara",
      date: "2024-05",
      image: "https://images.unsplash.com/photo-1565008576549-57569a49371d?w=800&q=80",
      description: "High-capacity storage facility with advanced logistics systems"
    },
    {
      id: 6,
      title: "Eco-Friendly Home",
      category: "residential",
      location: "Matara",
      date: "2024-10",
      image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&q=80",
      description: "Sustainable home with solar panels and rainwater harvesting"
    }
  ];

  // Sample feedback data
  const feedbacks = [
    {
      id: 1,
      user: "Rajesh Kumar",
      project: "Modern Office Complex",
      rating: 5,
      comment: "Outstanding work! The team delivered beyond our expectations. Professional, timely, and excellent quality construction.",
      date: "2024-09-15",
      photo: "https://ui-avatars.com/api/?name=Rajesh+Kumar&background=0D47A1&color=fff"
    },
    {
      id: 2,
      user: "Priya Silva",
      project: "Luxury Villa Residence",
      rating: 5,
      comment: "Absolutely thrilled with our new villa. The attention to detail and craftsmanship is remarkable. Highly recommended!",
      date: "2024-08-22",
      photo: "https://ui-avatars.com/api/?name=Priya+Silva&background=1565C0&color=fff"
    },
    {
      id: 3,
      user: "Michael Fernando",
      project: "Shopping Mall Renovation",
      rating: 4,
      comment: "Great renovation work. The mall looks modern and attractive. Minor delays but overall very satisfied with the outcome.",
      date: "2024-10-05",
      photo: "https://ui-avatars.com/api/?name=Michael+Fernando&background=1976D2&color=fff"
    },
    {
      id: 4,
      user: "Nimal Perera",
      project: "Apartment Complex",
      rating: 5,
      comment: "Excellent construction quality and timely delivery. The amenities are top-notch. Best investment decision!",
      date: "2024-09-28",
      photo: "https://ui-avatars.com/api/?name=Nimal+Perera&background=1E88E5&color=fff"
    },
    {
      id: 5,
      user: "Anita Jayawardena",
      project: "Eco-Friendly Home",
      rating: 5,
      comment: "Love our sustainable home! The team understood our vision perfectly and executed it beautifully. Energy bills are incredibly low!",
      date: "2024-11-02",
      photo: "https://ui-avatars.com/api/?name=Anita+Jayawardena&background=2196F3&color=fff"
    }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'residential', name: 'Residential' },
    { id: 'commercial', name: 'Commercial' },
    { id: 'industrial', name: 'Industrial' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-6 shadow-lg">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold tracking-tight">BUILD</h1>
              <p className="text-blue-200 text-sm mt-1">Construction Excellence</p>
            </div>
            <nav className="hidden md:flex gap-6">
              <a href="#projects" className="hover:text-blue-200 transition">Projects</a>
              <a href="#feedback" className="hover:text-blue-200 transition">Feedback</a>
              <a href="#contact" className="hover:text-blue-200 transition">Contact</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 via-blue-800 to-slate-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-5xl font-bold mb-4">Our Portfolio</h2>
          <p className="text-xl text-blue-200 max-w-2xl mx-auto">
            Explore our completed projects and hear what our clients say about their experience
          </p>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-12 bg-white shadow-sm">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-white rounded-xl shadow-sm">
              <div className="text-4xl font-bold text-blue-900">180+</div>
              <div className="text-gray-600 mt-2">Projects</div>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-white rounded-xl shadow-sm">
              <div className="text-4xl font-bold text-blue-900">4</div>
              <div className="text-gray-600 mt-2">Years</div>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-white rounded-xl shadow-sm">
              <div className="text-4xl font-bold text-blue-900">&lt; 0.4%</div>
              <div className="text-gray-600 mt-2">Defect Rate</div>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-white rounded-xl shadow-sm">
              <div className="text-4xl font-bold text-blue-900">100%</div>
              <div className="text-gray-600 mt-2">Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Projects</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore our portfolio of completed construction projects, from residential homes to commercial complexes
            </p>
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setActiveFilter(cat.id)}
                className={`px-6 py-2 rounded-full font-medium transition ${
                  activeFilter === cat.id
                    ? 'bg-blue-900 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-gray-100 shadow'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map(project => (
              <div key={project.id} className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300">
                <div className="relative overflow-hidden h-64">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <span className="absolute top-4 right-4 px-3 py-1 bg-blue-900 text-white text-sm rounded-full capitalize">
                    {project.category}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4 text-sm">{project.description}</p>
                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    <div className="flex items-center gap-1">
                      <MapPin size={16} />
                      <span>{project.location}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar size={16} />
                      <span>{new Date(project.date).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Feedback Section */}
      <section id="feedback" className="py-16 bg-gradient-to-br from-blue-50 to-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Client Feedback</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Don't just take our word for it. Here's what our satisfied clients have to say about our work
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {feedbacks.map(feedback => (
              <div key={feedback.id} className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-shadow duration-300">
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src={feedback.photo}
                    alt={feedback.user}
                    className="w-16 h-16 rounded-full"
                  />
                  <div className="flex-1">
                    <h4 className="font-bold text-gray-900">{feedback.user}</h4>
                    <p className="text-sm text-gray-500">{feedback.project}</p>
                  </div>
                  <Quote className="text-blue-200" size={32} />
                </div>
                
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={20}
                      className={i < feedback.rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}
                    />
                  ))}
                </div>

                <p className="text-gray-700 mb-4 italic">"{feedback.comment}"</p>
                
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <Calendar size={16} />
                  <span>{new Date(feedback.date).toLocaleDateString('en-US', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-slate-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Start Your Project?</h2>
          <p className="text-xl text-blue-200 mb-8 max-w-2xl mx-auto">
            Let's bring your construction vision to life with our expert team
          </p>
          <button className="bg-white text-blue-900 px-8 py-4 rounded-full font-bold hover:bg-blue-50 transition shadow-lg">
            Book a Consultation
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">BUILD</h3>
              <p className="text-gray-400">Building excellence through quality construction and transparent project control.</p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition">About Us</a></li>
                <li><a href="#projects" className="hover:text-white transition">Projects</a></li>
                <li><a href="#" className="hover:text-white transition">Services</a></li>
                <li><a href="#" className="hover:text-white transition">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Residential Construction</li>
                <li>Commercial Buildings</li>
                <li>Renovations</li>
                <li>Industrial Projects</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Contact</h4>
              <ul className="space-y-2 text-gray-400">
                <li>+94 77 123 4567</li>
                <li>info@buildconstruction.lk</li>
                <li>Colombo, Sri Lanka</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2024 BUILD Construction Company. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ConstructionPortfolio;
