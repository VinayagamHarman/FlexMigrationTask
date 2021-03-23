/**
 * Generated by Apache Royale Compiler from org/apache/royale/events/IEventDispatcher.as
 * org.apache.royale.events.IEventDispatcher
 *
 * @fileoverview
 *
 * @suppress {missingRequire|checkTypes|accessControls}
 */

goog.provide('org.apache.royale.events.IEventDispatcher');
/* Royale Dependency List: */



/**
 * @interface
 */
org.apache.royale.events.IEventDispatcher = function() {
};


/**
 * Prevent renaming of class. Needed for reflection.
 */
goog.exportSymbol('org.apache.royale.events.IEventDispatcher', org.apache.royale.events.IEventDispatcher);
/**
 * @export
 * @param {string} type
 * @param {Function} handler
 * @param {boolean=} opt_capture
 * @param {Object=} opt_handlerScope
 */
org.apache.royale.events.IEventDispatcher.prototype.addEventListener = function(type, handler, opt_capture, opt_handlerScope) {
};
/**
 * @export
 * @param {string} type
 * @param {Function} handler
 * @param {boolean=} opt_capture
 * @param {Object=} opt_handlerScope
 */
org.apache.royale.events.IEventDispatcher.prototype.removeEventListener = function(type, handler, opt_capture, opt_handlerScope) {
};
/**
 * @export
 * @param {string} type
 * @return {boolean}
 */
org.apache.royale.events.IEventDispatcher.prototype.hasEventListener = function(type) {
};
/**
 * @export
 * @param {Object} event
 * @return {boolean}
 */
org.apache.royale.events.IEventDispatcher.prototype.dispatchEvent = function(event) {
};


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
org.apache.royale.events.IEventDispatcher.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'IEventDispatcher', qName: 'org.apache.royale.events.IEventDispatcher', kind: 'interface' }] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
org.apache.royale.events.IEventDispatcher.prototype.ROYALE_REFLECTION_INFO = function () {
  return {
    methods: function () {
      return {
        'addEventListener': { type: 'void', declaredBy: 'org.apache.royale.events.IEventDispatcher', parameters: function () { return [ 'String', false ,'Function', false ,'Boolean', true ,'Object', true ]; }},
        'removeEventListener': { type: 'void', declaredBy: 'org.apache.royale.events.IEventDispatcher', parameters: function () { return [ 'String', false ,'Function', false ,'Boolean', true ,'Object', true ]; }},
        'hasEventListener': { type: 'Boolean', declaredBy: 'org.apache.royale.events.IEventDispatcher', parameters: function () { return [ 'String', false ]; }},
        'dispatchEvent': { type: 'Boolean', declaredBy: 'org.apache.royale.events.IEventDispatcher', parameters: function () { return [ 'Object', false ]; }}
      };
    }
  };
};
/**
 * @const
 * @type {number}
 */
org.apache.royale.events.IEventDispatcher.prototype.ROYALE_COMPILE_FLAGS = 10;
