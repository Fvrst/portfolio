import { motion } from 'framer-motion'
import { projects } from '../data/portfolioData'
import { useNavigate } from 'react-router-dom'

// =============================================
// BLOG SECTION - commented out, restore if needed
// =============================================
// import { blogPosts } from '../data/portfolioData'
// const BlogSection = () => {
//   const navigate = useNavigate()
//   const duplicatedPosts = [...blogPosts, ...blogPosts, ...blogPosts]
//   return (
//     <section className="py-24 bg-navy text-white overflow-hidden relative">
//       <div className="section-padding relative z-10 px-4 md:px-8">
//         <div className="container-max text-center mb-12 md:mb-16">
//           <h2 className="font-space-grotesk font-bold text-3xl md:text-6xl mb-4 text-white">
//             What's on my <span className="text-deep-orange">Mind?</span>
//           </h2>
//         </div>
//         <div className="relative">
//           <div className="flex gap-4 md:gap-6 animate-infinite-scroll">
//             {duplicatedPosts.map((post, index) => (
//               <div key={`${post.id}-${index}`} className="flex-shrink-0 w-72 md:w-80 bg-white/10 rounded-2xl overflow-hidden cursor-pointer"
//                 onClick={() => navigate(`/blog/${post.id}`)}>
//                 <img src={post.image} alt={post.title} className="w-full aspect-[16/10] object-cover" />
//                 <div className="p-4 md:p-6">
//                   <h3 className="font-space-grotesk font-bold text-lg text-white">{post.title}</h3>
//                   <p className="font-inter text-white/70 text-sm mt-2 line-clamp-3">{post.excerpt}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }
// =============================================

const ProjectGallerySection = () => {
  const navigate = useNavigate()
  const duplicated = [...projects, ...projects, ...projects]

  return (
    <section className="py-24 bg-navy text-white overflow-hidden relative">
      {/* Section Number */}
      <motion.div
        className="absolute top-8 md:top-12 left-4 md:left-8 z-10"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="font-space-grotesk font-bold text-4xl md:text-6xl lg:text-7xl text-white/20">
          06
        </div>
        <div className="w-8 md:w-12 h-1 bg-white/30 mt-2"></div>
      </motion.div>

      <div className="section-padding relative z-10 px-4 md:px-8">
        {/* Header */}
        <motion.div
          className="container-max text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-space-grotesk font-bold text-3xl md:text-4xl lg:text-5xl xl:text-6xl mb-4 text-white">
            Projects <span className="text-deep-orange">Gallery</span>
          </h2>
          <p className="font-inter text-base md:text-lg text-white/70 max-w-2xl mx-auto">
            A showcase of mobile applications built with passion, precision, and purpose.
          </p>
        </motion.div>

        {/* Row 1 - scrolls left */}
        <div className="relative mb-6">
          <div className="flex gap-4 md:gap-6 animate-infinite-scroll">
            {duplicated.map((project, index) => (
              <motion.div
                key={`row1-${project.id}-${index}`}
                className="flex-shrink-0 w-56 md:w-72 rounded-2xl overflow-hidden cursor-pointer group relative"
                whileHover={{ scale: 1.05, zIndex: 10 }}
                onClick={() => navigate(`/project/${project.id}`)}
              >
                <div className="aspect-[9/16] overflow-hidden rounded-2xl bg-white/5">
                  <img
                    src={project.thumbnail}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="font-space-grotesk font-bold text-deep-orange text-sm md:text-base">
                      {project.title}
                    </h3>
                    <div className="flex flex-wrap gap-1 mt-1">
                      {project.tech.slice(0, 2).map((t, i) => (
                        <span key={i} className="text-xs bg-deep-orange/20 text-deep-orange border border-deep-orange/40 px-2 py-0.5 rounded-full">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="absolute left-0 top-0 w-16 md:w-32 h-full bg-gradient-to-r from-navy to-transparent pointer-events-none z-10" />
          <div className="absolute right-0 top-0 w-16 md:w-32 h-full bg-gradient-to-l from-navy to-transparent pointer-events-none z-10" />
        </div>

        {/* Row 2 - scrolls right (reverse) */}
        <div className="relative">
          <div className="flex gap-4 md:gap-6" style={{ animation: 'infinite-scroll 30s linear infinite reverse' }}>
            {[...duplicated].reverse().map((project, index) => (
              <motion.div
                key={`row2-${project.id}-${index}`}
                className="flex-shrink-0 w-56 md:w-72 rounded-2xl overflow-hidden cursor-pointer group relative"
                whileHover={{ scale: 1.05, zIndex: 10 }}
                onClick={() => navigate(`/project/${project.id}`)}
              >
                <div className="aspect-[9/16] overflow-hidden rounded-2xl bg-white/5">
                  <img
                    src={project.screenshots?.[1] || project.thumbnail}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="font-space-grotesk font-bold text-deep-orange text-sm md:text-base">
                      {project.title}
                    </h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="absolute left-0 top-0 w-16 md:w-32 h-full bg-gradient-to-r from-navy to-transparent pointer-events-none z-10" />
          <div className="absolute right-0 top-0 w-16 md:w-32 h-full bg-gradient-to-l from-navy to-transparent pointer-events-none z-10" />
        </div>
      </div>
    </section>
  )
}

export default ProjectGallerySection
