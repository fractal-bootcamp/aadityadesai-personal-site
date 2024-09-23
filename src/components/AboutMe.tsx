function AboutMe() {
    return (
      <section style={{ textAlign: 'center', padding: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <h2>Hi, I'm Aaditya Desai</h2>
        <img
          src="/aaditya2.jpg"
          alt="Your Name"
          style={{
            borderRadius: '50%',
            width: '100px',
            height: '100px',
            marginTop: '50px',
            marginBottom: '50px', // Adds space between the image and the paragraph
          }}
        />
        <p style={{ margin: '0 20px' }}>
          I'm a software engineer based out of Los Angeles. I'm currently a sophomore in college majoring in Computer Science.
          When I'm older, I hope to work for defense technology companies such as Anduril and Galvanick.
        </p>
      </section>
    );
  }

  export default AboutMe;

  