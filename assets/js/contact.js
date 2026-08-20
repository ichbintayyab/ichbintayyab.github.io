/* ============================================================
   CONTACT FORM JS — ichbintayyab Portfolio
   Loaded by: pages/contact.html only (after shared.js)
============================================================ */

/* === CONTACT FORM — validation + mailto === */
(function initContactForm() {
  var form      = document.getElementById('contactForm');
  var statusMsg = document.getElementById('statusMsg');
  var submitBtn = document.getElementById('submitBtn');
  if (!form) return;

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    var name    = form.name.value.trim();
    var email   = form.email.value.trim();
    var subject = form.subject.value.trim();
    var message = form.message.value.trim();

    /* Basic presence check */
    if (!name || !email || !subject || !message) {
      statusMsg.textContent = 'Please fill in all fields.';
      statusMsg.className   = '';
      return;
    }

    /* Email format check */
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      statusMsg.textContent = 'Please enter a valid email address.';
      statusMsg.className   = '';
      return;
    }

    /* Loading state */
    submitBtn.classList.add('loading');
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin" aria-hidden="true"></i> Opening email...';

    /* Build mailto link */
    var body       = 'Name: ' + name + '\nEmail: ' + email + '\n\nMessage:\n' + message;
    var mailtoLink = 'mailto:ichbintayyab@gmail.com'
                   + '?subject=' + encodeURIComponent(subject)
                   + '&body='    + encodeURIComponent(body);

    window.location.href = mailtoLink;

    /* Reset UI after a short delay */
    setTimeout(function () {
      statusMsg.textContent = '✓ Your email client has been opened. Send it from there!';
      statusMsg.className   = 'success';
      submitBtn.classList.remove('loading');
      submitBtn.innerHTML   = '<i class="fas fa-paper-plane" aria-hidden="true"></i> Send Message';
      form.reset();
    }, 1200);
  });

  /* Clear status message on any input change */
  form.querySelectorAll('input, textarea').forEach(function (el) {
    el.addEventListener('input', function () {
      if (statusMsg.textContent) statusMsg.textContent = '';
    });
  });
})();
