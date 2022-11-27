
const About = () => {
  return (
    <main>
      {data.map((item, i) => {
        return {
            <AboutRow
            key={i}
            sections={i}
            heading={item.heading}
            text={item.text}
            whisper={item.whisper}
            image={item.image}
        };
      })}
    </main>
  );
};

export default About;