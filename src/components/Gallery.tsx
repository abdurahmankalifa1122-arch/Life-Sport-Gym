import React, { useState } from 'react';
import { Maximize2, X, ChevronLeft, ChevronRight, Dumbbell } from 'lucide-react';
import { GALLERY_IMAGES } from '../data/gymData';
import { GalleryItem } from '../types';
import { SafeImage } from './SafeImage';

export const Gallery: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

  const categories = [
    { id: 'all', label: 'All Equipment' },
    { id: 'freeweights', label: 'Free Weights & Barbells' },
    { id: 'machines', label: 'Resistance Machines' },
    { id: 'cardio', label: 'Cardio Zone' },
    { id: 'facility', label: 'Facility Floor' },
  ];

  const filteredImages =
    activeCategory === 'all'
      ? GALLERY_IMAGES
      : GALLERY_IMAGES.filter((img) => img.category === activeCategory);

  const handleNext = () => {
    if (!selectedImage) return;
    const currentIndex = filteredImages.findIndex((img) => img.id === selectedImage.id);
    const nextIndex = (currentIndex + 1) % filteredImages.length;
    setSelectedImage(filteredImages[nextIndex]);
  };

  const handlePrev = () => {
    if (!selectedImage) return;
    const currentIndex = filteredImages.findIndex((img) => img.id === selectedImage.id);
    const prevIndex = (currentIndex - 1 + filteredImages.length) % filteredImages.length;
    setSelectedImage(filteredImages[prevIndex]);
  };

  return (
    <section id="gallery" className="py-20 lg:py-28 bg-[#0D1017] border-y border-neutral-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-amber-400 text-xs font-extrabold tracking-[0.2em] uppercase font-heading bg-amber-500/10 px-3 py-1 rounded border border-amber-500/20 inline-block mb-3">
            Facility & Equipment Tour
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-heading tracking-tight uppercase">
            TRAINING ENVIRONMENT & <span className="text-amber-400">IRON</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-amber-500 to-amber-600 mx-auto mt-4 mb-4 rounded-full" />
          <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">
            Take a visual tour through Life Sport Gym in Bole. Dedicated heavy lifting zones, precision machines, dumbbells, and cardio equipment.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider font-heading transition-all ${
                activeCategory === cat.id
                  ? 'bg-amber-500 text-black shadow-lg shadow-amber-500/20 scale-105'
                  : 'bg-neutral-900 text-neutral-400 hover:text-white hover:bg-neutral-800 border border-neutral-800'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredImages.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedImage(item)}
              className="group relative rounded-2xl overflow-hidden bg-[#12151C] border border-neutral-800 hover:border-amber-500/50 transition-all duration-300 cursor-pointer aspect-[4/3] shadow-lg"
            >
              <SafeImage
                src={item.imageUrl}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                fallbackTitle={item.title}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />

              {/* Hover/Tap Overlay Info */}
              <div className="absolute inset-0 p-4 flex flex-col justify-between">
                <div className="flex justify-between items-start">
                  <span className="px-2 py-0.5 rounded bg-neutral-900/90 text-[10px] font-bold text-amber-400 uppercase tracking-wider font-heading border border-neutral-700">
                    {item.categoryLabel}
                  </span>
                  <div className="w-8 h-8 rounded-lg bg-neutral-900/90 border border-neutral-700 flex items-center justify-center text-white group-hover:text-amber-400 transition-colors">
                    <Maximize2 className="w-4 h-4" />
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-bold text-white font-heading uppercase group-hover:text-amber-400 transition-colors line-clamp-1">
                    {item.title}
                  </h4>
                  <p className="text-[11px] text-neutral-400 line-clamp-2 mt-0.5">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {selectedImage && (
          <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-6">
            <div className="relative max-w-4xl w-full bg-[#12151C] rounded-2xl border border-neutral-700 overflow-hidden shadow-2xl flex flex-col">
              {/* Modal Header */}
              <div className="p-4 bg-neutral-900 border-b border-neutral-800 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Dumbbell className="w-4 h-4 text-amber-400" />
                  <span className="text-xs font-bold text-white uppercase font-heading">
                    {selectedImage.title}
                  </span>
                </div>
                <button
                  onClick={() => setSelectedImage(null)}
                  className="p-1.5 rounded-lg bg-neutral-800 text-neutral-400 hover:text-white hover:bg-neutral-700 transition"
                  aria-label="Close lightbox"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Modal Image Display */}
              <div className="relative max-h-[65vh] overflow-hidden bg-black flex items-center justify-center">
                <SafeImage
                  src={selectedImage.imageUrl}
                  alt={selectedImage.title}
                  className="w-full h-full max-h-[65vh] object-contain"
                  fallbackTitle={selectedImage.title}
                />

                {/* Left/Right Navigation Buttons */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handlePrev();
                  }}
                  className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/70 border border-neutral-700 text-white hover:text-amber-400 hover:bg-black transition"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleNext();
                  }}
                  className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/70 border border-neutral-700 text-white hover:text-amber-400 hover:bg-black transition"
                  aria-label="Next image"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>

              {/* Modal Footer */}
              <div className="p-4 bg-neutral-900 border-t border-neutral-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
                <div>
                  <span className="text-[10px] font-bold text-amber-400 uppercase tracking-widest font-heading block">
                    {selectedImage.categoryLabel} • Life Sport Gym Bole
                  </span>
                  <p className="text-xs text-neutral-300 mt-0.5">
                    {selectedImage.description}
                  </p>
                </div>
                <button
                  onClick={() => setSelectedImage(null)}
                  className="px-4 py-1.5 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-xs font-bold text-neutral-200 uppercase font-heading"
                >
                  Close Viewer
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
