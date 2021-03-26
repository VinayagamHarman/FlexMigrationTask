/**
 * Generated by Apache Royale Compiler from org/apache/royale/html/NodeElementBase.as
 * org.apache.royale.html.NodeElementBase
 *
 * @fileoverview
 *
 * @suppress {missingRequire|checkTypes|accessControls}
 */

goog.provide('org.apache.royale.html.NodeElementBase');
/* Royale Dependency List: */

goog.require('org.apache.royale.html.Group');



/**
 * @constructor
 * @extends {org.apache.royale.html.Group}
 */
org.apache.royale.html.NodeElementBase = function() {
  org.apache.royale.html.NodeElementBase.base(this, 'constructor');
  this.typeNames = "";
};
goog.inherits(org.apache.royale.html.NodeElementBase, org.apache.royale.html.Group);


/**
 * Prevent renaming of class. Needed for reflection.
 */
goog.exportSymbol('org.apache.royale.html.NodeElementBase', org.apache.royale.html.NodeElementBase);


/**
 * @export
 * @param {string} name
 * @param {string} value
 */
org.apache.royale.html.NodeElementBase.prototype.setAttribute = function(name, value) {
  this.element.setAttribute(name, value);
  
};


/**
 * @export
 * @param {string} name
 * @return {string}
 */
org.apache.royale.html.NodeElementBase.prototype.getAttribute = function(name) {
  return this.element.getAttribute(name);
  
};


org.apache.royale.html.NodeElementBase.prototype.get__nodeValue = function() {
  
  return this.element.nodeValue;
};


org.apache.royale.html.NodeElementBase.prototype.set__nodeValue = function(value) {
  
  this.element.nodeValue = value;
};


org.apache.royale.html.NodeElementBase.prototype.get__class = function() {
  
  return this.element.getAttribute("class");
};


org.apache.royale.html.NodeElementBase.prototype.set__class = function(value) {
  this.element.setAttribute("class", value);
};


org.apache.royale.html.NodeElementBase.prototype.get__tabIndex = function() {
  return (this.element.tabIndex) >> 0;
};


org.apache.royale.html.NodeElementBase.prototype.set__tabIndex = function(value) {
  this.element.tabIndex = value;
};


Object.defineProperties(org.apache.royale.html.NodeElementBase.prototype, /** @lends {org.apache.royale.html.NodeElementBase.prototype} */ {
/**
  * @export
  * @type {string} */
nodeValue: {
get: org.apache.royale.html.NodeElementBase.prototype.get__nodeValue,
set: org.apache.royale.html.NodeElementBase.prototype.set__nodeValue},
/**
  * @export
  * @type {string} */
class: {
get: org.apache.royale.html.NodeElementBase.prototype.get__class,
set: org.apache.royale.html.NodeElementBase.prototype.set__class},
/**
  * @export
  * @type {number} */
tabIndex: {
get: org.apache.royale.html.NodeElementBase.prototype.get__tabIndex,
set: org.apache.royale.html.NodeElementBase.prototype.set__tabIndex}}
);


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
org.apache.royale.html.NodeElementBase.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'NodeElementBase', qName: 'org.apache.royale.html.NodeElementBase', kind: 'class' }] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
org.apache.royale.html.NodeElementBase.prototype.ROYALE_REFLECTION_INFO = function () {
  return {
    accessors: function () {
      return {
        'nodeValue': { type: 'String', access: 'readwrite', declaredBy: 'org.apache.royale.html.NodeElementBase'},
        'class': { type: 'String', access: 'readwrite', declaredBy: 'org.apache.royale.html.NodeElementBase'},
        'tabIndex': { type: 'int', access: 'readwrite', declaredBy: 'org.apache.royale.html.NodeElementBase'}
      };
    },
    methods: function () {
      return {
        'NodeElementBase': { type: '', declaredBy: 'org.apache.royale.html.NodeElementBase'},
        'setAttribute': { type: 'void', declaredBy: 'org.apache.royale.html.NodeElementBase', parameters: function () { return [ 'String', false ,'String', false ]; }},
        'getAttribute': { type: 'String', declaredBy: 'org.apache.royale.html.NodeElementBase', parameters: function () { return [ 'String', false ]; }}
      };
    }
  };
};
/**
 * @const
 * @type {number}
 */
org.apache.royale.html.NodeElementBase.prototype.ROYALE_COMPILE_FLAGS = 10;
