import { motion } from 'framer-motion'
import { testimonials } from '../data/portfolioData'

const TestimonialsSection = () => {
  // Create duplicate arrays for seamless scrolling
  const testimonialCards = [...testimonials, ...testimonials]

  return (
    <section className="py-16 md:py-24 bg-black text-black relative overflow-hidden">
      {/* Section Number */}
      <div className="absolute top-8 md:top-12 left-4 md:left-8 z-10">
        <div className="font-space-grotesk font-bold text-4xl md:text-6xl lg:text-7xl text-white/20">
          05
        </div>
        <div className="w-8 md:w-12 h-1 bg-white/30 mt-2"></div>
      </div>

      <div className="max-w-7xl mx-auto py-16 md:py-20 relative z-10 px-4 md:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20">
          <h2 className="font-space-grotesk font-bold text-3xl md:text-4xl lg:text-5xl xl:text-6xl mb-6 text-white">
            People I've <span className="text-deep-orange">Worked With</span>
          </h2>
          <p className="font-inter text-base md:text-lg lg:text-xl text-white/70 max-w-3xl mx-auto">
            Real feedback from colleagues, clients, and collaborators who've experienced 
            my work firsthand across different projects and companies.
          </p>
        </div>

        {/* First Row - Right to Left (Starting from end) */}
        <div className="relative mb-8 overflow-hidden">
          <motion.div
            className="flex gap-6 w-fit"
            initial={{
              x: -100 * testimonialCards.length / 2
            }}
            animate={{
              x: [-100 * testimonialCards.length / 2, 0]
            }}
            transition={{
              duration: 15, // Faster - reduced from 30 to 15
              repeat: Infinity,
              ease: "linear"
            }}
          >
            {testimonialCards.map((testimonial, index) => (
              <div
                key={`row1-${index}`}
                className="bg-cream border-2 border-deep-orange rounded-2xl p-6 w-96 h-72 flex-shrink-0 shadow-lg flex flex-col"
              >
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-deep-orange rounded-full flex items-center justify-center text-cream font-space-grotesk font-bold text-sm mr-3">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-space-grotesk font-bold text-base text-black">
                      {testimonial.name}
                    </h4>
                    <p className="font-inter text-xs text-black/70">
                      {testimonial.position} at {testimonial.company}
                    </p>
                  </div>
                </div>
                <p className="font-inter text-black/80 leading-relaxed text-sm flex-1 overflow-hidden">
                  "{testimonial.testimonial.length > 200 ? testimonial.testimonial.substring(0, 200) + '...' : testimonial.testimonial}"
                </p>
                <div className="flex text-deep-orange mt-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                    </svg>
                  ))}
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Second Row - Left to Right (Starting from end) */}
        <div className="relative overflow-hidden">
          <motion.div
            className="flex gap-6 w-fit"
            initial={{
              x: 0
            }}
            animate={{
              x: [0, -100 * testimonialCards.length / 2]
            }}
            transition={{
              duration: 15, // Faster - reduced from 30 to 15
              repeat: Infinity,
              ease: "linear"
            }}
          >
            {testimonialCards.map((testimonial, index) => (
              <div
                key={`row2-${index}`}
                className="bg-cream border-2 border-deep-orange rounded-2xl p-6 w-96 h-72 flex-shrink-0 shadow-lg flex flex-col"
              >
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-deep-orange rounded-full flex items-center justify-center text-cream font-space-grotesk font-bold text-sm mr-3">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-space-grotesk font-bold text-base text-black">
                      {testimonial.name}
                    </h4>
                    <p className="font-inter text-xs text-black/70">
                      {testimonial.position} at {testimonial.company}
                    </p>
                  </div>
                </div>
                <p className="font-inter text-black/80 leading-relaxed text-sm flex-1 overflow-hidden">
                  "{testimonial.testimonial.length > 200 ? testimonial.testimonial.substring(0, 200) + '...' : testimonial.testimonial}"
                </p>
                <div className="flex text-deep-orange mt-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                    </svg>
                  ))}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default TestimonialsSection