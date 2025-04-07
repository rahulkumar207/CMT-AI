"use client"

export default function ContactSection() {
  return (
    <section style={{
      width: '100%',
      background: 'linear-gradient(135deg, #161623 0%, #1a1a2e 100%)',
      color: '#fff',
      fontFamily: 'Arial, sans-serif',
      padding: '60px 0',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Animated background element */}
      <div style={{
        position: 'absolute',
        bottom: '-150px',
        right: '-150px',
        width: '400px',
        height: '400px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(0, 184, 212, 0.2) 0%, transparent 70%)',
        filter: 'blur(60px)',
        opacity: '0.3',
        zIndex: '0'
      }}></div>
      
      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '20px',
        position: 'relative',
        zIndex: '1'
      }}>
        <div style={{
          flex: '1',
          minWidth: '300px',
          padding: '40px',
          background: 'rgba(22, 22, 35, 0.6)',
          borderRadius: '16px',
          border: '1px solid rgba(255, 255, 255, 0.08)',
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)'
        }}>
          {/* Logo and Company Name */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            marginBottom: '30px'
          }}>
            <h1 style={{
              fontSize: '48px',
              fontWeight: 'bold',
              marginRight: '15px',
              marginBottom: '0'
            }}>
              CMT<span style={{ color: '#00B8D4', textShadow: '0 0 15px rgba(0, 184, 212, 0.5)' }}>AI</span>
            </h1>
            <p style={{
              fontSize: '18px',
              fontWeight: '300',
              color: '#e0e0e0',
              borderLeft: '2px solid #00B8D4',
              paddingLeft: '15px',
              lineHeight: '1.4',
              margin: '0'
            }}>Completrix Micro Technologies Pvt Ltd</p>
          </div>
          
          {/* Address */}
          <div style={{
            marginBottom: '40px',
            lineHeight: '1.8',
            paddingLeft: '25px',
            position: 'relative'
          }}>
            <p style={{ margin: '5px 0' }}>E-23 Lower Ground Floor, Sector-3.</p>
            <p style={{ margin: '5px 0' }}>NOIDA, Dist- G.B.N Uttar Pradesh,</p>
            <p style={{ margin: '5px 0' }}>India</p>
            <p style={{ margin: '5px 0' }}>PIN-201301</p>
          </div>

          {/* Contact Information */}
          <div style={{ marginTop: '30px' }}>
            <div style={{
              marginBottom: '20px',
              display: 'flex',
              alignItems: 'center'
            }}>
              <div style={{
                width: '24px',
                height: '24px',
                marginRight: '15px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: 'rgba(0, 184, 212, 0.1)',
                borderRadius: '50%',
                padding: '5px'
              }}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#00B8D4" width="18px" height="18px">
                  <path d="M0 0h24v24H0V0z" fill="none"/>
                  <path d="M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6zm-2 0l-8 5-8-5h16zm0 12H4V8l8 5 8-5v10z"/>
                </svg>
              </div>
              <p style={{ margin: '0' }}>
                For Info -{" "}
                <a href="mailto:info@cmtai.in" style={{
                  color: '#00B8D4',
                  textDecoration: 'none',
                  fontWeight: '500',
                  letterSpacing: '0.5px'
                }}>
                  info@cmtai.in
                </a>
              </p>
            </div>
            
            <div style={{
              marginBottom: '20px',
              display: 'flex',
              alignItems: 'center'
            }}>
              <div style={{
                width: '24px',
                height: '24px',
                marginRight: '15px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: 'rgba(0, 184, 212, 0.1)',
                borderRadius: '50%',
                padding: '5px'
              }}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#00B8D4" width="18px" height="18px">
                  <path d="M0 0h24v24H0V0z" fill="none"/>
                  <path d="M20 7h-4V5c0-1.1-.9-2-2-2h-4c-1.1 0-2 .9-2 2v2H4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2zm-8-2h4v2h-4V5zm8 12H4V9h16v8z"/>
                  <path d="M13 11h-2v3H8v2h3v3h2v-3h3v-2h-3z"/>
                </svg>
              </div>
              <p style={{ margin: '0' }}>
                For Careers -{" "}
                <a href="mailto:hr@cmtai.in" style={{
                  color: '#00B8D4',
                  textDecoration: 'none',
                  fontWeight: '500',
                  letterSpacing: '0.5px'
                }}>
                  hr@cmtai.in
                </a>
              </p>
            </div>
            
            <div style={{
              marginBottom: '20px',
              display: 'flex',
              alignItems: 'center'
            }}>
              <div style={{
                width: '24px',
                height: '24px',
                marginRight: '15px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: 'rgba(0, 184, 212, 0.1)',
                borderRadius: '50%',
                padding: '5px'
              }}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#00B8D4" width="18px" height="18px">
                  <path d="M0 0h24v24H0V0z" fill="none"/>
                  <path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H5.17l-.59.59-.58.58V4h16v12z"/>
                  <path d="M11 12h2v2h-2zm0-6h2v4h-2z"/>
                </svg>
              </div>
              <p style={{ margin: '0' }}>
                For Complaints -{" "}
                <a href="mailto:ceo@cmtai.in" style={{
                  color: '#00B8D4',
                  textDecoration: 'none',
                  fontWeight: '500',
                  letterSpacing: '0.5px'
                }}>
                  ceo@cmtai.in
                </a>
              </p>
            </div>
            
            <div style={{
              marginBottom: '20px',
              display: 'flex',
              alignItems: 'center'
            }}>
              <div style={{
                width: '24px',
                height: '24px',
                marginRight: '15px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: 'rgba(0, 184, 212, 0.1)',
                borderRadius: '50%',
                padding: '5px'
              }}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#00B8D4" width="18px" height="18px">
                  <path d="M0 0h24v24H0V0z" fill="none"/>
                  <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56-.35-.12-.74-.03-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"/>
                </svg>
              </div>
              <p style={{ margin: '0' }}>
                For any other Query -{" "}
                <a href="tel:+919818234884" style={{
                  color: '#00B8D4',
                  textDecoration: 'none',
                  fontWeight: '500',
                  letterSpacing: '0.5px'
                }}>
                  +919818234884
                </a>
              </p>
            </div>
          </div>
          
          {/* Social Links */}
          <div style={{
            display: 'flex',
            marginTop: '40px',
            gap: '15px'
          }}>
            {/* Facebook */}
            <a href="#" style={{
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              backgroundColor: 'rgba(255, 255, 255, 0.05)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <svg style={{
                width: '20px',
                height: '20px',
                fill: '#fff'
              }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M20 3H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h8.62v-7h-2.35v-2.69h2.35v-2a3.27 3.27 0 0 1 3.49-3.59 19.25 19.25 0 0 1 2.1.11v2.43h-1.44c-1.13 0-1.35.54-1.35 1.32v1.73h2.69L17.76 14h-2.34v7H20a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1z"/>
              </svg>
            </a>
            
            {/* Twitter/X */}
            <a href="#" style={{
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              backgroundColor: 'rgba(255, 255, 255, 0.05)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <svg style={{
                width: '20px',
                height: '20px',
                fill: '#fff'
              }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
              </svg>
            </a>
            
            {/* LinkedIn */}
            <a href="#" style={{
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              backgroundColor: 'rgba(255, 255, 255, 0.05)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <svg style={{
                width: '20px',
                height: '20px',
                fill: '#fff'
              }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
              </svg>
            </a>
            
            {/* Instagram */}
            <a href="#" style={{
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              backgroundColor: 'rgba(255, 255, 255, 0.05)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <svg style={{
                width: '20px',
                height: '20px',
                fill: '#fff'
              }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8 1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3z"/>
              </svg>
            </a>
          </div>
          
          {/* CTA Button */}
          {/* <a href="#contact-form" style={{
            display: 'inline-block',
            marginTop: '30px',
            padding: '12px 25px',
            background: 'linear-gradient(135deg, #00B8D4 0%, #0091ea 100%)',
            color: '#fff',
            border: 'none',
            borderRadius: '30px',
            fontWeight: '600',
            fontSize: '16px',
            textDecoration: 'none',
            textAlign: 'center',
            cursor: 'pointer',
            boxShadow: '0 4px 15px rgba(0, 184, 212, 0.3)'
          }}>
            Contact Us Today
          </a> */}
        </div>
      </div>
    </section>
  );
}