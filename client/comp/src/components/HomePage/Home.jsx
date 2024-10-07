import Carousel from './Carousel.jsx'
import Marquee from './CustomMarquee.jsx'
import HorizontalScroll from './HorizontalScroll.jsx'
import Question from '../Question/Question.jsx'
export default function Home () {
  return (
    <>
      {/* Carousel */}
      <section>
        <Carousel />
      </section>
      {/* Services */}
      <section>
        <HorizontalScroll />
      </section>
      {/* Testimonials */}
      <section className='my-4'>
        <div>
          <h2 className='text-6xl h-fit text-white text-center '>
            Don't Just Take Our Word For It
          </h2>
          <p className='mt-1 text-slate-400 text-center italic'>
            Spoiler: They love it
          </p>
        </div>
        <Marquee />
      </section>
    </>
  )
}
