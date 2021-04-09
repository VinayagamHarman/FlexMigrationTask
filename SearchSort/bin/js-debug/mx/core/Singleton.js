/**
 * Generated by Apache Royale Compiler from mx/core/Singleton.as
 * mx.core.Singleton
 *
 * @fileoverview
 *
 * @suppress {missingRequire|checkTypes|accessControls}
 */

goog.provide('mx.core.Singleton');
/* Royale Dependency List: XML*/



/**
 * @constructor
 */
mx.core.Singleton = function() {
};


/**
 * Prevent renaming of class. Needed for reflection.
 */
goog.exportSymbol('mx.core.Singleton', mx.core.Singleton);


/**
 * @private
 * @type {Object}
 */
mx.core.Singleton.classMap = {};


/**
 *  @asprivate
 *  Adds an interface-name-to-implementation-class mapping to the registry,
 *  if a class hasn't already been registered for the specified interface.
 *  The class must implement a getInstance() method which returns
 *  its singleton instance.
 * @export
 * @param {string} interfaceName
 * @param {Object} clazz
 */
mx.core.Singleton.registerClass = function(interfaceName, clazz) {
  var /** @type {Object} */ c = mx.core.Singleton.classMap[interfaceName];
  if (!c)
    mx.core.Singleton.classMap[interfaceName] = clazz;
};


/**
 *  @asprivate
 *  Returns the implementation class registered for the specified
 *  interface, or null if no class has been registered for that interface.
 *
 *  This method should not be called at static initialization time,
 *  because the factory class may not have called registerClass() yet.
 * @export
 * @param {string} interfaceName
 * @return {Object}
 */
mx.core.Singleton.getClass = function(interfaceName) {
  return mx.core.Singleton.classMap[interfaceName];
};


/**
 *  @asprivate
 *  Returns the singleton instance of the implementation class
 *  that was registered for the specified interface,
 *  by looking up the class in the registry
 *  and calling its getInstance() method.
 *
 *  This method should not be called at static initialization time,
 *  because the factory class may not have called registerClass() yet.
 * @export
 * @param {string} interfaceName
 * @return {Object}
 */
mx.core.Singleton.getInstance = function(interfaceName) {
  var /** @type {Object} */ c = mx.core.Singleton.classMap[interfaceName];
  if (!c) {
    throw new Error("No class registered for interface '" + interfaceName + "'.");
  }
  return c["getInstance"]();
};


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
mx.core.Singleton.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'Singleton', qName: 'mx.core.Singleton', kind: 'class' }] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
mx.core.Singleton.prototype.ROYALE_REFLECTION_INFO = function () {
  return {
    methods: function () {
      return {
        '|registerClass': { type: 'void', declaredBy: 'mx.core.Singleton', parameters: function () { return [ 'String', false ,'Class', false ]; }},
        '|getClass': { type: 'Class', declaredBy: 'mx.core.Singleton', parameters: function () { return [ 'String', false ]; }},
        '|getInstance': { type: 'Object', declaredBy: 'mx.core.Singleton', parameters: function () { return [ 'String', false ]; }}
      };
    }
  };
};
/**
 * @const
 * @type {number}
 */
mx.core.Singleton.prototype.ROYALE_COMPILE_FLAGS = 26;
