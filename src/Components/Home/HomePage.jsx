
import Abouts from "./Abouts"
import Carousel from "./Crousel"
import Galler from "./Galler"
import OpenHours from "./OpenHours"
import Testimon from "./Testimonial"

const HomePage = () => {
  return (
    <div>
        <Carousel/>
        <Abouts/>
        <OpenHours/>
        <Galler/>
        <Testimon/>
    </div>
  )
}

export default HomePage