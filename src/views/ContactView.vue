<template>
  <div class="contact-page">
    <section class="contact-hero">
      <div class="container">
        <h1>Start Your <span>Transformation</span></h1>
        <p>Ready to scale? Let’s discuss how our technology solutions can solve your business challenges.</p>
      </div>
    </section>

    <section class="section-padding">
      <div class="container">
        <div class="contact-grid">
          <div class="contact-form-container">
            <h3>Send a Project Inquiry</h3>
            <form @submit.prevent="handleSubmit">
              <div class="form-group">
                <label>Full Name</label>
                <input v-model="form.name" type="text" placeholder="Nadiri Jabir" required />
              </div>
              
              <div class="form-group">
                <label>Work Email</label>
                <input v-model="form.email" type="email" placeholder="nadiri@tech.com" required />
              </div>

              <div class="form-group">
                <label>Required Solution</label>
                <select v-model="form.service" required>
                  <option value="" disabled selected>Select a service</option>
                  <option value="web">Enterprise Web Development</option>
                  <option value="cloud">Cloud & DevOps</option>
                  <option value="design">Digital Transformation</option>
                  <option value="other">Other Inquiry</option>
                </select>
              </div>

              <div class="form-group">
                <label>Message</label>
                <textarea v-model="form.message" rows="5" placeholder="Tell us about your project goals..." required></textarea>
              </div>

              <button type="submit" class="submit-btn" :disabled="isSubmitting">
                {{ isSubmitting ? 'Sending Inquiry...' : 'Submit Request' }}
              </button>

              <p v-if="showSuccess" class="success-msg">
                <i class="fas fa-check-circle"></i> Thank you! Our team will contact you within 24 hours.
              </p>
            </form>
          </div>

          <div class="contact-sidebar">
            <div class="info-card">
              <i class="fas fa-map-marker-alt"></i>
              <div>
                <h4>Headquarters</h4>
                <p>Addis Ababa, Ethiopia</p>
              </div>
            </div>

            <div class="info-card">
              <i class="fas fa-envelope-open-text"></i>
              <div>
                <h4>Business Inquiries</h4>
                <p>nadirjabir14@gmail.com</p>
              </div>
            </div>

            <div class="info-card">
              <i class="fas fa-phone-alt"></i>
              <div>
                <h4>Direct Line</h4>
                <p>+251 915 708 414</p>
              </div>
            </div>

            <div class="social-box">
              <h4>Connect with us</h4>
              <div class="social-links">
                <a href="https://www.linkedin.com/in/nadirii-j/"><i class="fab fa-linkedin"></i></a>
                <a href="https://github.com/NadirJabir"><i class="fab fa-github"></i></a>
                <a href="https://t.me/nadiritech"><i class="fab fa-telegram"></i></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue';

const form = reactive({
  name: '',
  email: '',
  service: '',
  message: ''
});

const isSubmitting = ref(false);
const showSuccess = ref(false);

const handleSubmit = () => {
  isSubmitting.value = true;
  
  // Simulate an API call
  setTimeout(() => {
    isSubmitting.value = false;
    showSuccess.value = true;
    
    // Reset form
    form.name = '';
    form.email = '';
    form.service = '';
    form.message = '';
    
    // Hide success message after 5 seconds
    setTimeout(() => { showSuccess.value = false; }, 5000);
  }, 1500);
};
</script>

<style scoped>
.contact-hero {
  padding: 150px 0 60px;
  background: #f8f9fa;
  text-align: center;
}

.contact-hero h1 { font-size: 3rem; color: #2c3e50; }
.contact-hero h1 span { color: #3498db; }

.contact-grid {
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  gap: 60px;
  align-items: start;
}

.contact-form-container {
  background: white;
  padding: 40px;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.05);
}

.contact-form-container h3 { margin-bottom: 30px; font-size: 1.5rem; }

.form-group { margin-bottom: 20px; }

.form-group label {
  display: block;
  margin-bottom: 8px;
  font-weight: 600;
  color: #34495e;
}

input, select, textarea {
  width: 100%;
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 6px;
  font-family: inherit;
  transition: border-color 0.3s;
}

input:focus, select:focus, textarea:focus {
  outline: none;
  border-color: #3498db;
}

.submit-btn {
  width: 100%;
  padding: 15px;
  background: #3498db;
  color: white;
  border: none;
  border-radius: 6px;
  font-size: 1rem;
  font-weight: 700;
  cursor: pointer;
  transition: background 0.3s;
}

.submit-btn:hover:not(:disabled) { background: #2980b9; }
.submit-btn:disabled { opacity: 0.7; cursor: not-allowed; }

.success-msg {
  margin-top: 20px;
  color: #27ae60;
  font-weight: 600;
  text-align: center;
}

.info-card {
  display: flex;
  gap: 20px;
  margin-bottom: 30px;
  padding: 20px;
  background: #fdfdfd;
  border-radius: 10px;
}

.info-card i { font-size: 1.5rem; color: #3498db; }
.info-card h4 { margin-bottom: 5px; color: #2c3e50; }
.info-card p { color: #7f8c8d; }

.social-box { margin-top: 40px; }
.social-links { display: flex; gap: 15px; margin-top: 15px; }
.social-links a { font-size: 1.5rem; color: #2c3e50; transition: color 0.3s; }
.social-links a:hover { color: #3498db; }

@media (max-width: 992px) {
  .contact-grid { grid-template-columns: 1fr; }
}
</style>