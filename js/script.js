/**
 * Nipunya Vinod - Personal Portfolio Website Script
 * Personal Web Development Project
 * Handles mobile navigation, clipboard utilities, contact helper, and active states.
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Mobile Navigation Drawer Toggle
  initMobileNav();

  // 2. Highlight Active Navigation Link
  highlightActiveNavLink();

  // 3. Setup Email Copy-to-Clipboard Utility
  initClipboardButtons();

  // 4. Setup Static Contact Mailto Helper
  initContactFormHelper();

  // 5. Update Copyright Year dynamically
  updateCopyrightYear();
});

/**
 * Toggles mobile navigation menu and ensures accessibility
 */
function initMobileNav() {
  const navToggle = document.getElementById('navToggle');
  const navMenu = document.getElementById('navMenu');

  if (!navToggle || !navMenu) return;

  navToggle.addEventListener('click', (e) => {
    e.stopPropagation();
    const isExpanded = navToggle.getAttribute('aria-expanded') === 'true';
    toggleMenu(!isExpanded);
  });

  // Close when clicking any nav link
  const navLinks = navMenu.querySelectorAll('.nav-link');
  navLinks.forEach((link) => {
    link.addEventListener('click', () => {
      toggleMenu(false);
    });
  });

  // Close when clicking outside of the navigation
  document.addEventListener('click', (e) => {
    if (!navMenu.contains(e.target) && !navToggle.contains(e.target)) {
      toggleMenu(false);
    }
  });

  // Close on Escape key press
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      toggleMenu(false);
    }
  });

  function toggleMenu(open) {
    navMenu.classList.toggle('open', open);
    navToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    const menuIcon = navToggle.querySelector('.menu-icon');
    const closeIcon = navToggle.querySelector('.close-icon');

    if (menuIcon && closeIcon) {
      if (open) {
        menuIcon.style.display = 'none';
        closeIcon.style.display = 'block';
      } else {
        menuIcon.style.display = 'block';
        closeIcon.style.display = 'none';
      }
    }
  }
}

/**
 * Ensures navigation active class corresponds to current file name
 */
function highlightActiveNavLink() {
  const currentPath = window.location.pathname;
  const pageName = currentPath.substring(currentPath.lastIndexOf('/') + 1) || 'index.html';
  const navLinks = document.querySelectorAll('.nav-link');

  navLinks.forEach((link) => {
    const href = link.getAttribute('href');
    if (href === pageName || (pageName === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });
}

/**
 * 1-Click Copy Email to Clipboard with Toast Notification
 */
function initClipboardButtons() {
  const copyButtons = document.querySelectorAll('[data-copy-email]');
  const toast = document.getElementById('toastNotification');

  copyButtons.forEach((btn) => {
    btn.addEventListener('click', async (e) => {
      e.preventDefault();
      const email = btn.getAttribute('data-copy-email') || 'nipunyav@gmail.com';

      try {
        if (navigator.clipboard && window.isSecureContext) {
          await navigator.clipboard.writeText(email);
        } else {
          // Fallback for non-https or older browser environments
          const textArea = document.createElement('textarea');
          textArea.value = email;
          textArea.style.position = 'fixed';
          textArea.style.left = '-999999px';
          textArea.style.top = '-999999px';
          document.body.appendChild(textArea);
          textArea.focus();
          textArea.select();
          document.execCommand('copy');
          document.body.removeChild(textArea);
        }
        showToast(`Email copied: ${email}`);
      } catch (err) {
        console.error('Could not copy email: ', err);
        showToast(`Email: ${email}`);
      }
    });
  });
}

/**
 * Displays toast alert message for 3 seconds
 */
function showToast(message) {
  let toast = document.getElementById('toastNotification');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'toastNotification';
    toast.className = 'toast';
    toast.setAttribute('role', 'alert');
    toast.setAttribute('aria-live', 'polite');
    toast.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
        <polyline points="22 4 12 14.01 9 11.01"></polyline>
      </svg>
      <span id="toastMessage"></span>
    `;
    document.body.appendChild(toast);
  }

  const msgSpan = toast.querySelector('#toastMessage');
  if (msgSpan) {
    msgSpan.textContent = message;
  }
  toast.classList.add('show');

  setTimeout(() => {
    toast.classList.remove('show');
  }, 3200);
}

/**
 * Handles the contact form by opening the user's default email client
 * with the pre-filled message, explaining pure static site behavior.
 */
function initContactFormHelper() {
  const contactForm = document.getElementById('contactForm');
  if (!contactForm) return;

  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const nameInput = document.getElementById('contactName');
    const emailInput = document.getElementById('contactEmail');
    const subjectInput = document.getElementById('contactSubject');
    const messageInput = document.getElementById('contactMessage');

    const name = nameInput ? nameInput.value.trim() : '';
    const email = emailInput ? emailInput.value.trim() : '';
    const subject = subjectInput ? subjectInput.value.trim() : 'Portfolio Contact / Inquiry';
    const message = messageInput ? messageInput.value.trim() : '';

    const formattedSubject = encodeURIComponent(`[Portfolio Contact] ${subject} - from ${name || 'Visitor'}`);
    const bodyContent = `Hello Nipunya,\n\nName: ${name}\nEmail: ${email}\n\nMessage:\n${message}\n\n---\nSent from Nipunya's Portfolio Contact Page`;
    const formattedBody = encodeURIComponent(bodyContent);

    // Launch default email client
    const mailtoUrl = `mailto:nipunyav@gmail.com?subject=${formattedSubject}&body=${formattedBody}`;
    window.location.href = mailtoUrl;

    showToast('Opening your default email client...');
  });
}

/**
 * Automatically updates current year in footer
 */
function updateCopyrightYear() {
  const yearEls = document.querySelectorAll('.current-year');
  const thisYear = new Date().getFullYear();
  yearEls.forEach((el) => {
    el.textContent = thisYear;
  });
}
