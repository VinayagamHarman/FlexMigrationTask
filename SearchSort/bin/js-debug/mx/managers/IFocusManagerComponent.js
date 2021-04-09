/**
 * Generated by Apache Royale Compiler from mx/managers/IFocusManagerComponent.as
 * mx.managers.IFocusManagerComponent
 *
 * @fileoverview
 *
 * @suppress {missingRequire|checkTypes|accessControls}
 */

goog.provide('mx.managers.IFocusManagerComponent');
/* Royale Dependency List: XML*/



/**
 * @interface
 */
mx.managers.IFocusManagerComponent = function() {
};


/**
 * Prevent renaming of class. Needed for reflection.
 */
goog.exportSymbol('mx.managers.IFocusManagerComponent', mx.managers.IFocusManagerComponent);
/**  * @type {boolean}
 */mx.managers.IFocusManagerComponent.prototype.focusEnabled;
/**  * @type {boolean}
 */mx.managers.IFocusManagerComponent.prototype.hasFocusableChildren;
/**  * @type {boolean}
 */mx.managers.IFocusManagerComponent.prototype.tabFocusEnabled;
/**  * @type {number}
 */mx.managers.IFocusManagerComponent.prototype.tabIndex;
mx.managers.IFocusManagerComponent.prototype.setFocus = function() {
};


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
mx.managers.IFocusManagerComponent.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'IFocusManagerComponent', qName: 'mx.managers.IFocusManagerComponent', kind: 'interface' }] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
mx.managers.IFocusManagerComponent.prototype.ROYALE_REFLECTION_INFO = function () {
  return {
    accessors: function () {
      return {
        'focusEnabled': { type: 'Boolean', access: 'readwrite', declaredBy: 'mx.managers.IFocusManagerComponent'},
        'hasFocusableChildren': { type: 'Boolean', access: 'readwrite', declaredBy: 'mx.managers.IFocusManagerComponent'},
        'tabFocusEnabled': { type: 'Boolean', access: 'readonly', declaredBy: 'mx.managers.IFocusManagerComponent'},
        'tabIndex': { type: 'int', access: 'readwrite', declaredBy: 'mx.managers.IFocusManagerComponent'}
      };
    },
    methods: function () {
      return {
        'setFocus': { type: 'void', declaredBy: 'mx.managers.IFocusManagerComponent'}
      };
    }
  };
};
/**
 * @const
 * @type {number}
 */
mx.managers.IFocusManagerComponent.prototype.ROYALE_COMPILE_FLAGS = 26;
