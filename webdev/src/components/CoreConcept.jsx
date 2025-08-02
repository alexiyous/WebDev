export default function CoreConcept({ imgSrc, title, description }) {
  return (
    <li>
      <img src={imgSrc} alt="React Core Concepts Logo" className="core-concepts-logo"/>
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  );
}