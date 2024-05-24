import profilemg from "./assets/profileimg.jpg";
function Card() {
  return (
    <div className="card">
      <img className="image" src={profilemg}></img>
      <h1>Anusree Prakash</h1>
      <p>
        <b>Software Engineer</b>
      </p>
    </div>
  );
}
export default Card;
