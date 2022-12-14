import '../utils/css/About.css';
import heartHands from '../assets/images/heart-hands.jpg';
import weLikeYou from '../assets/images/we-like-you.jpg';
import loveYoue from '../assets/images/love-you.jpg';
import mountain from '../assets/images/mountain.jpg';
import AboutRows from '../components/about/AboutRows';

const data = [
  {
    heading: 'Have a truely safe space.',
    text: "A place where, everything is kept anonymous. No personal information, including usernames, will be displayed in public areas.",
    whisper: 'Smile, you are enough',
    image: mountain,
  },
  {
    heading: 'Come together with the like-minded.',
    text: 'At Peace of Mind we believe in the power of community support for mental health care needs.',
    whisper: 'Speak your mind without consequence',
    image: weLikeYou,
  },
  {
    heading: '24/7/365',
    text: 'Have access to a large community of people who truly understand what you are going through and genuinely want to help. Every minute. Every hour. Every day.',
    whisper: "Don't struggle in silence",
    image: heartHands,
  },
  {
    heading: 'Share your successes!',
    text: "Our community isn't just here for those times of need. Come tell us about your recent successes too! We're always happy to cheer you on!",
    whisper: 'Smile, you are enough',
    image: loveYoue,
  },

];

const About = () => {
  return (
    <main className="mainContent" id="aboutContent">
      {data.map((item, i) => {
        return (
          <AboutRows
            key={i}
            sections={i}
            heading={item.heading}
            text={item.text}
            whisper={item.whisper}
            image={item.image}
          />
        );
      })}
    </main>
  );
};

export default About;
