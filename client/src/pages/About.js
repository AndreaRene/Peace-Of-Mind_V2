import '../utils/css/About.css';
import heartHands from '../assets/images/heart-hands.jpg';
import weLikeYou from '../assets/images/we-like-you.jpg';
import handsSupport from '../assets/images/hands-support.jpg';
import AboutRows from '../components/about/AboutRows';

const data = [
  {
    heading: 'Come together with the like-minded to be your best self.',
    text: 'At Peace of Mind we believe in the power of community support for mental health care needs.',
    whisper: 'Speak your mind without consequence.',
    image: { weLikeYou },
  },
  {
    heading: '24/7/365',
    text: 'Have access to a large community of people who truly understand what you are going through and genuinely want to help. Every minute. Every hour. Every day.',
    whisper: "Don't struggle in silence.",
    image: { heartHands },
  },
  {
    heading: 'Share your successes!',
    text: "Our community isn't just here for those times of need. Come tell us about your recent successes too! We're always happy to cheer you on!",
    whisper: 'Smile, you are enough.',
    image: { handsSupport },
  },
];

const About = () => {
  return (
    <main className="mainContent">
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
