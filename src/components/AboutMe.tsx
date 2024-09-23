function AboutMe() {
  return (
    <section style={{ textAlign: 'center', padding: '20px'}}>
      <h2>Hi, I'm Aaditya Desai</h2>
      <img
        src="/aaditya2.jpg"
        alt="Your Name"
        style={{
          display: 'flex',
          margin: '0 auto',     
          borderRadius: '50%',  
          width: '100px',       
          height: '100px',      
          alignItems: 'center',
        }}
      />
      <p>
        I'm a software engineer based out of Los Angeles. I'm currently in a sophmore in college majoring in Computer Science.
         When I'm older, I hope to work for defence technology companies such as Anduril and Galvanick.
      </p>
    </section>
  );
}

export default AboutMe;
