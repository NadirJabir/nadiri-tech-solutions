<template>
  <footer class="footer-pro">
    <div class="container-full">
      <div class="footer-grid">
        <div class="footer-col brand-col">
          <h2 class="footer-logo">Nadiri<span>Tech</span></h2>
          <p class="brand-desc">
            Providing high-performance technology solutions to help businesses thrive in the digital age. 
            Precision engineering for modern enterprises.
          </p>
          <div class="footer-socials">
            <a href="https://www.linkedin.com/in/nadirii-j/" aria-label="LinkedIn"><i class="fab fa-linkedin-in"></i></a>
            <a href="https://github.com/NadirJabir"><i class="fab fa-github"></i></a>
            <a href="https://t.me/nadiritech"><i class="fab fa-telegram"></i></a>
          </div>
        </div>

        <div class="footer-col">
          <h4>Navigation</h4>
          <ul class="footer-links">
            <li><router-link to="/">Home</router-link></li>
            <li><router-link to="/solutions">Solutions</router-link></li>
            <li><router-link to="/case-studies">Case Studies</router-link></li>
            <li><router-link to="/blog">Blog</router-link></li>
            <li><router-link to="/contact">Contact</router-link></li>
          </ul>
        </div>

        <div class="footer-col">
          <h4>Services</h4>
          <ul class="footer-links">
            <li>Web Development</li>
            <li>Cloud Solutions</li>
            <li>UI/UX Strategy</li>
            <li>IT Consulting</li>
          </ul>
        </div>

        <div class="footer-col contact-col">
          <h4>Get In Touch</h4>
          <div class="contact-item">
            <i class="fas fa-envelope"></i>
            <a href="mailto:nadirijabir@gmail.com">nadirijabir@gmail.com</a>
          </div>
          <div class="contact-item">
            <i class="fas fa-phone"></i>
            <a href="tel:+251915708414">+251 915 708 414</a>
          </div>
          <div class="contact-item">
            <i class="fas fa-map-marker-alt"></i>
            <span>Addis Ababa, Ethiopia</span>
          </div>
        </div>
      </div>
    </div>

    <div class="footer-bottom">
      <div class="container-full">
        <div class="bottom-flex">
          <p>&copy; 2026 NadiriTech Solutions. All rights reserved.</p>
          <div class="legal-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer-pro {
  background: var(--secondary); /* Dark Navy from your style.css */
  color: #f8fafc;
  padding: 100px 0 0;
  margin-top: 100px;
  width: 100%;
}

.container-full {
  width: 100%;
  padding: 0 5%;
}

.footer-grid {
  display: grid;
  grid-template-columns: 1.5fr 1fr 1fr 1.2fr;
  gap: 60px;
  padding-bottom: 80px;
}

.footer-logo { 
  font-size: 2rem; 
  margin-bottom: 25px; 
  color: #fff;
}
.footer-logo span { color: var(--primary); }

.brand-desc { 
  line-height: 1.8; 
  opacity: 0.7; 
  font-size: 1rem;
  max-width: 350px;
}

.footer-col h4 {
  font-size: 1.1rem;
  margin-bottom: 30px;
  color: #fff;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  font-weight: 700;
}

.footer-links { list-style: none; padding: 0; }
.footer-links li { 
  margin-bottom: 15px; 
  opacity: 0.7;
  transition: var(--transition);
}

.footer-links li:hover { opacity: 1; transform: translateX(5px); }

.footer-links a, .contact-item a {
  color: #fff;
  text-decoration: none;
}

.footer-links a:hover { color: var(--primary); }

.contact-item {
  display: flex;
  align-items: center;
  gap: 15px;
  margin-bottom: 15px;
  opacity: 0.7;
}

.contact-item i { color: var(--primary); width: 20px; }

.footer-socials { display: flex; gap: 15px; margin-top: 30px; }
.footer-socials a {
  color: white;
  background: rgba(255,255,255,0.05);
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  transition: var(--transition);
  text-decoration: none;
}

.footer-socials a:hover { 
  background: var(--primary); 
  transform: translateY(-5px); 
}

/* Bottom Bar Styling */
.footer-bottom {
  border-top: 1px solid rgba(255,255,255,0.08);
  padding: 30px 0;
}

.bottom-flex {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.85rem;
  opacity: 0.6;
}

.legal-links { display: flex; gap: 30px; }
.legal-links a { color: #fff; text-decoration: none; }
.legal-links a:hover { opacity: 1; text-decoration: underline; }

@media (max-width: 1024px) {
  .footer-grid { grid-template-columns: repeat(2, 1fr); }
}

@media (max-width: 768px) {
  .footer-grid { 
    grid-template-columns: 1fr; 
    text-align: left; 
    gap: 40px;
  }
  .bottom-flex { 
    flex-direction: column; 
    gap: 15px; 
    text-align: center; 
  }
}
</style>