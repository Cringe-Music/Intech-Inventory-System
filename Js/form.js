/**
 * ================================================================
 * IIS - INTECH INVENTORY SYSTEM
 * form-handler.js - Manejo Avanzado de Formularios
 * ================================================================
 * Validaciones avanzadas, reglas personalizadas y procesamiento
 */

'use strict';

/**
 * Clase para gestionar formularios con validaciones complejas
 */
class FormHandler {
  /**
   * Constructor
   * @param {string|HTMLElement} formSelector - Selector o elemento del formulario
   * @param {Object} options - Opciones de configuración
   */
  constructor(formSelector, options = {}) {
    this.form = typeof formSelector === 'string'
      ? document.querySelector(formSelector)
      : formSelector;

    if (!this.form) {
      console.error('Formulario no encontrado:', formSelector);
      return;
    }

    this.options = {
      debug: false,
      showErrors: true,
      enableAutoSave: false,
      autoSaveDelay: 5000,
      customRules: {},
      onSuccess: null,
      onError: null,
      ...options,
    };

    this.fields = new Map();
    this.errors = new Map();
    this.isDirty = false;
    this.autoSaveInterval = null;

    this.init();
  }

  /**
   * Inicializa el handler del formulario
   */
  init() {
    this.log('Inicializando FormHandler');

    // Registrar campos
    this.registerFields();

    // Agregar listeners
    this.attachEventListeners();

    // Auto-guardar si está habilitado
    if (this.options.enableAutoSave) {
      this.startAutoSave();
    }
  }

  /**
   * Registra todos los campos del formulario
   */
  registerFields() {
    const fields = this.form.querySelectorAll('input, textarea, select');

    fields.forEach(field => {
      this.fields.set(field.name, {
        element: field,
        value: field.value,
        type: field.type,
        required: field.required,
        validators: this.getValidatorsForField(field),
      });
    });

      this.log(`${this.fields.size} campos registrados`);
    }
  
  }