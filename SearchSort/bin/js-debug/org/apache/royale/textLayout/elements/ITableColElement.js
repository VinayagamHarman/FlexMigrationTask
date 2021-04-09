/**
 * Generated by Apache Royale Compiler from org/apache/royale/textLayout/elements/ITableColElement.as
 * org.apache.royale.textLayout.elements.ITableColElement
 *
 * @fileoverview
 *
 * @suppress {missingRequire|checkTypes|accessControls}
 */

goog.provide('org.apache.royale.textLayout.elements.ITableColElement');
/* Royale Dependency List: org.apache.royale.textLayout.elements.ITableCellElement,XML*/

goog.require('org.apache.royale.textLayout.elements.ITableFormattedElement');



/**
 * @interface
 * @extends {org.apache.royale.textLayout.elements.ITableFormattedElement}
 */
org.apache.royale.textLayout.elements.ITableColElement = function() {
};


/**
 * Prevent renaming of class. Needed for reflection.
 */
goog.exportSymbol('org.apache.royale.textLayout.elements.ITableColElement', org.apache.royale.textLayout.elements.ITableColElement);
/**  * @type {number}
 */org.apache.royale.textLayout.elements.ITableColElement.prototype.x;
/**  * @type {number}
 */org.apache.royale.textLayout.elements.ITableColElement.prototype.colIndex;
/**  * @type {Array}
 */org.apache.royale.textLayout.elements.ITableColElement.prototype.cells;


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
org.apache.royale.textLayout.elements.ITableColElement.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'ITableColElement', qName: 'org.apache.royale.textLayout.elements.ITableColElement', kind: 'interface' }], interfaces: [org.apache.royale.textLayout.elements.ITableFormattedElement] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
org.apache.royale.textLayout.elements.ITableColElement.prototype.ROYALE_REFLECTION_INFO = function () {
  return {
    accessors: function () {
      return {
        'x': { type: 'Number', access: 'readonly', declaredBy: 'org.apache.royale.textLayout.elements.ITableColElement'},
        'colIndex': { type: 'int', access: 'readonly', declaredBy: 'org.apache.royale.textLayout.elements.ITableColElement'},
        'cells': { type: 'Vector.<org.apache.royale.textLayout.elements.ITableCellElement>', access: 'readonly', declaredBy: 'org.apache.royale.textLayout.elements.ITableColElement'}
      };
    }
  };
};
/**
 * @const
 * @type {number}
 */
org.apache.royale.textLayout.elements.ITableColElement.prototype.ROYALE_COMPILE_FLAGS = 10;
