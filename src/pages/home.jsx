import About from '../pages/about';
import Contact from '../pages/contacts';
import Explore from '../pages/explore';
import Landing from '../pages/landing';

const Home = () =>
{
    return (
        <div>
            <div id='home'>
            <Landing/>
          </div>
          <div id='explore'>
            <Explore />
          </div>
          <div id='about'>
            <About />
          </div>
          <div id='contacts'>
            <Contact />
          </div>
        </div>
    )
};

export default Home;