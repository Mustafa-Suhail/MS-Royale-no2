import React from 'react';

const linkStyle = {
  color: 'white',
  textDecoration: 'none',
  transition: 'color 0.3s',
  marginRight: '1.5rem',
  display: 'inline-flex',
  alignItems: 'center',
};

const hoverStyle = {
  color: '#00BFFF',
  cursor: 'pointer',
};

function ContactUs() {
  const [hoveredLink, setHoveredLink] = React.useState(null);

  const handleMouseEnter = (key) => setHoveredLink(key);
  const handleMouseLeave = () => setHoveredLink(null);

  const getLinkStyle = (key) =>
    hoveredLink === key ? { ...linkStyle, ...hoverStyle } : linkStyle;

  return (
    <section
      style={{
        width: '100%',
        minHeight: '100vh',
        padding: '4rem 2rem',
        background: 'linear-gradient(to right, #4a641dff, #22808cff)',
        color: 'white',
        boxSizing: 'border-box',
        fontWeight: 300,
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      }}
    >
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem', fontWeight: 300 }}>
          Contact Us
        </h1>
        <p style={{ fontSize: '1.2rem', marginBottom: '2rem', fontWeight: 300 }}>
          We'd love to hear from you! You can reach us using the contact details below.
        </p>

        <div style={{ lineHeight: '2.2' }}>
          <h3 style={{ marginBottom: '0.8rem' }}>Address</h3>
          <p style={{ marginBottom: '1.5rem' }}>
            Our Company Pvt. Ltd.<br />
            123 Main Street,<br />
            Bahria Town Phase 5,<br />
            Rawalpindi, Pakistan
          </p>

          <h3 style={{ marginBottom: '0.8rem' }}>Phone</h3>
          <p style={{ marginBottom: '1.5rem' }}>
            Office:{' '}
            <a
              href="tel:+923001234567"
              style={getLinkStyle('office')}
              onMouseEnter={() => handleMouseEnter('office')}
              onMouseLeave={handleMouseLeave}
            >
              +92 300 123 4567
            </a>
            <br />
            Support:{' '}
            <a
              href="tel:+923451234567"
              style={getLinkStyle('support')}
              onMouseEnter={() => handleMouseEnter('support')}
              onMouseLeave={handleMouseLeave}
            >
              +92 345 123 4567
            </a>
          </p>

          <h3 style={{ marginBottom: '0.8rem' }}>Email</h3>
          <p style={{ marginBottom: '1.5rem' }}>
            General:{' '}
            <a
              href="mailto:info@ourcompany.com"
              style={getLinkStyle('info')}
              onMouseEnter={() => handleMouseEnter('info')}
              onMouseLeave={handleMouseLeave}
            >
              info@ourcompany.com
            </a>
            <br />
            Support:{' '}
            <a
              href="mailto:support@ourcompany.com"
              style={getLinkStyle('emailSupport')}
              onMouseEnter={() => handleMouseEnter('emailSupport')}
              onMouseLeave={handleMouseLeave}
            >
              support@ourcompany.com
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}

export default ContactUs;
