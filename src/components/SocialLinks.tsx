import { Linkedin, Instagram } from 'lucide-react';
import ShineBorder from './magicui/shine-border';

function SocialLinks() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', marginTop: '50px', fontSize: '50px', fontWeight: 'bold' }}>
      <h2>Connect with Me</h2>

      <div style={{ marginTop: '60px', display: 'flex', gap: '20px' }}>
        <ShineBorder
          className="relative h-[200px] w-[200px] rounded-xl flex justify-center items-center"
          color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
        >
          <a
            href="https://www.linkedin.com/in/aaditya-desai-2231851b6/"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              padding: '10px 20px',
              textDecoration: 'none',
              color: 'inherit',
              transition: 'background-color 0.3s',
              textAlign: 'center',
              zIndex: 1,
            }}
          >
            <Linkedin size={50} />
          </a>
        </ShineBorder>

        <ShineBorder
          className="relative h-[200px] w-[200px] rounded-xl flex justify-center items-center"
          color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
        >
          <a
            href="https://www.instagram.com/aadityadesai__/"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              padding: '10px 20px',
              textDecoration: 'none',
              color: 'inherit',
              transition: 'background-color 0.3s',
              textAlign: 'center',
              zIndex: 1,
            }}
          >
            <Instagram size={50} />
          </a>
        </ShineBorder>
      </div>
    </div>
  );
}

export default SocialLinks;

//comment
