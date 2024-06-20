function Heading() {
  return (
    <div className="heading">
      <h1 className="title">Welcome to the European Artwork Image Search</h1>
      <h2 className="sub-heading">Enter an artists name below</h2>
      <input
        type="text"
        placeholder="Search for an artist's work"
        id="Search bar"
      />
    </div>
  );
}

export default Heading;
