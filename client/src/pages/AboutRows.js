import "./AboutRows.css";

const AboutRows = ({ heading, text, whisper, image, sections }) => {
  return (
    <section className={"aboutGroup section" + (sections + 1)}>
      <div className="aboutTexts">
        <h2>{heading}</h2>
        <p>{text}</p>
        <p>{whisper}</p>
      </div>
      <img src={image} />
    </section>
  );
};

export default AboutRows;
