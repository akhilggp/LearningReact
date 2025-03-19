import marketLogo from "../assets/marker.png";
export default function Entry(Props) {
  return (
    <article className="article-main">
      <div className="container-1">
        <img className="image" src={Props.img.src} alt={Props.img.alt} />
      </div>
      <div className="container-2">
        <img className="marker" src={marketLogo} alt="marker_logo" />
        <span>{Props.country}</span>
        <a href={Props.googleMapsLink}>View on Google Maps</a>

        <h2>{Props.title}</h2>
        <p>{Props.dates}</p>
        <p>{Props.text}</p>
      </div>
    </article>
  );
}
