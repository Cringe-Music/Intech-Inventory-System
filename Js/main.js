/**
 * ================================================================
 * IIS - INTECH INVENTORY SYSTEM
 * main.js - Script Principal Completo
 * Versión 3.0 - Producción
 * ================================================================
 */

'use strict';

// ================================================================
// CONFIGURACIÓN GLOBAL
// ================================================================

const IIS_CONFIG = {
  debug: false,
  animationDuration: 300,
  formTimeout: 5000,
  apiEndpoint: null,
};

/**
 * Log personalizado para debugging
 */
function debugLog(message, data = null) {
  if (IIS_CONFIG.debug) {
    console.log(`[IIS DEBUG] ${message}`, data || '');
  }
}

// ================================================================
// INICIALIZACIÓN AL CARGAR EL DOCUMENTO
// ================================================================

document.addEventListener('DOMContentLoaded', () => {
  debugLog('Aplicación IIS iniciada');
  initializeNavigation();
  initializeButtons();
  initializeFormValidation();
  initializeScrollAnimations();
  debugLog('Componentes inicializados');
});

// ================================================================
// 1. NAVEGACIÓN
// ================================================================

function initializeNavigation() {
  const navLinks = document.querySelectorAll('nav a');
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';

  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    
    if (
      href === currentPage ||
      (href === 'index.html' && currentPage === '') ||
      (href === '/' && currentPage === '')
    ) {
      link.setAttribute('aria-current', 'page');
      debugLog(`Página actual detectada: ${href}`);
    } else {
      link.removeAttribute('aria-current');
    }
  });

  document.addEventListener('click', (e) => {
    if (e.target.closest('nav a')) {
      debugLog(`Navegando a: ${e.target.href}`);
    }
  });
}

// ================================================================
// 2. BOTONES
// ================================================================

function initializeButtons() {
  const buttons = document.querySelectorAll('button:not([type="reset"])');

  buttons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      debugLog(`Botón clickeado: ${btn.textContent.trim()}`);

      if (btn.type === 'submit') {
        btn.setAttribute('disabled', 'disabled');
        setTimeout(() => {
          btn.removeAttribute('disabled');
        }, IIS_CONFIG.formTimeout);
      }
    });

    btn.addEventListener('focus', () => {
      btn.classList.add('focused');
    });

    btn.addEventListener('blur', () => {
      btn.classList.remove('focused');
    });
  });
}

// ================================================================
// 3. VALIDACIÓN DE FORMULARIOS
// ================================================================

function initializeFormValidation() {
  const forms = document.querySelectorAll('form');

  forms.forEach(form => {
    const formType = form.dataset.formType || 'default';
    debugLog(`Inicializando validación de formulario: ${formType}`);

    const inputs = form.querySelectorAll('input, textarea, select');
    inputs.forEach(input => {
      input.addEventListener('blur', () => {
        validateField(input);
      });

      input.addEventListener('change', () => {
        validateField(input);
      });

      if (input.tagName === 'TEXTAREA' && input.maxLength) {
        input.addEventListener('input', () => {
          updateCharacterCount(input);
        });
      }
    });

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      handleFormSubmit(form);
    });

    const resetBtn = form.querySelector('button[type="reset"]');
    if (resetBtn) {
      resetBtn.addEventListener('click', () => {
        debugLog('Formulario reseteado');
        form.reset();
        const statusDiv = form.querySelector('#form-status');
        if (statusDiv) {
          statusDiv.classList.remove('show', 'success', 'error', 'info');
        }
      });
    }
  });
}

/**
 * Valida un campo individual
 */
function validateField(field) {
  const isValid = field.checkValidity();
  const errorMsg = field.validationMessage;

  debugLog(`Validando campo ${field.id}: ${isValid}`);

  const errorContainer = field.parentElement.querySelector('.error-message');
  if (errorContainer) {
    errorContainer.remove();
  }

  if (!isValid && field.value) {
    const errorDiv = document.createElement('small');
    errorDiv.className = 'error-message';
    errorDiv.style.color = 'var(--error)';
    errorDiv.style.display = 'block';
    errorDiv.style.marginTop = 'var(--spacing-xs)';
    errorDiv.textContent = errorMsg || 'Este campo es inválido';
    field.parentElement.appendChild(errorDiv);
    field.setAttribute('aria-invalid', 'true');
  } else {
    field.removeAttribute('aria-invalid');
  }

  return isValid;
}

/**
 * Actualiza contador de caracteres en textarea
 */
function updateCharacterCount(textarea) {
  const counter = textarea.parentElement.querySelector('.form-counter');
  if (counter) {
    const current = textarea.value.length;
    const max = textarea.maxLength || 'Sin límite';
    counter.textContent = `${current}/${max} caracteres`;
  }
}

/**
 * Maneja el envío del formulario
 */
function handleFormSubmit(form) {
  debugLog('Procesando envío de formulario');

  const fields = form.querySelectorAll('input, textarea, select');
  let isFormValid = true;

  fields.forEach(field => {
    if (!validateField(field)) {
      isFormValid = false;
    }
  });

  if (!isFormValid) {
    showFormStatus(form, 'error', 'Por favor, completa todos los campos correctamente');
    return;
  }

  const formData = new FormData(form);
  const data = Object.fromEntries(formData);

  debugLog('Datos del formulario:', data);

  simulateFormSubmission(form, data);
}

/**
 * Simula el envío del formulario
 */
function simulateFormSubmission(form, data) {
  const submitBtn = form.querySelector('button[type="submit"]');
  const originalText = submitBtn.textContent;

  submitBtn.disabled = true;
  submitBtn.textContent = 'Enviando...';

  setTimeout(() => {
    showFormStatus(form, 'success', '¡Mensaje enviado correctamente! Pronto nos pondremos en contacto.');

    form.reset();

    submitBtn.disabled = false;
    submitBtn.textContent = originalText;

    debugLog('Formulario enviado exitosamente');

    setTimeout(() => {
      const statusDiv = form.querySelector('#form-status');
      if (statusDiv) {
        statusDiv.classList.remove('show', 'success', 'error', 'info');
      }
    }, 5000);
  }, 1500);
}

/**
 * Muestra mensaje de estado del formulario
 */
function showFormStatus(form, type, message) {
  const statusDiv = form.querySelector('#form-status');

  if (statusDiv) {
    statusDiv.textContent = message;
    statusDiv.className = `form-status show ${type}`;
    debugLog(`Estado del formulario: ${type} - ${message}`);
  }
}

// ================================================================
// 4. ANIMACIONES AL SCROLL
// ================================================================

function initializeScrollAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px',
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.animation = 'fadeInUp 0.8s ease-out forwards';
        observer.unobserve(entry.target);
        debugLog(`Elemento animado en pantalla: ${entry.target.id || entry.target.className}`);
      }
    });
  }, observerOptions);

  const elementsToAnimate = document.querySelectorAll(
    'section[aria-labelledby], .card, .phase-card, .video-container'
  );

  elementsToAnimate.forEach(element => {
    observer.observe(element);
  });
}

// ================================================================
// 5. UTILIDADES GLOBALES
// ================================================================

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function copyToClipboard(text) {
  try {
    await navigator.clipboard.writeText(text);
    debugLog(`Texto copiado: ${text}`);
    return true;
  } catch (err) {
    console.error('Error al copiar:', err);
    return false;
  }
}

function getCSSVariable(varName) {
  return getComputedStyle(document.documentElement)
    .getPropertyValue(`--${varName}`)
    .trim();
}

function setCSSVariable(varName, value) {
  document.documentElement.style.setProperty(`--${varName}`, value);
  debugLog(`Variable CSS actualizada: --${varName} = ${value}`);
}

function isMobileDevice() {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  );
}

function emitEvent(eventName, detail = null) {
  const event = new CustomEvent(eventName, { detail });
  document.dispatchEvent(event);
  debugLog(`Evento emitido: ${eventName}`, detail);
}

function onEvent(eventName, callback) {
  document.addEventListener(eventName, callback);
  debugLog(`Escuchador registrado para evento: ${eventName}`);
}

// ================================================================
// 6. MANEJO DE ERRORES GLOBAL
// ================================================================

window.addEventListener('error', (event) => {
  console.error('Error global:', event.error);
  debugLog('Error en la aplicación', event.error);
});

window.addEventListener('unhandledrejection', (event) => {
  console.error('Promesa rechazada no manejada:', event.reason);
  debugLog('Promesa rechazada', event.reason);
});

// ================================================================
// EXPORTAR FUNCIONES
// ================================================================

if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    debugLog,
    validateField,
    showFormStatus,
    isMobileDevice,
    getCSSVariable,
    setCSSVariable,
    sleep,
    copyToClipboard,
    emitEvent,
    onEvent,
  };
}

// ================================================================
// FIN - main.js
// ================================================================