/**
 * Generated by Apache Royale Compiler from org/apache/royale/textLayout/elements/ITableCellElement.as
 * org.apache.royale.textLayout.elements.ITableCellElement
 *
 * @fileoverview
 *
 * @suppress {missingRequire|checkTypes|accessControls}
 */

goog.provide('org.apache.royale.textLayout.elements.ITableCellElement');
/* Royale Dependency List: org.apache.royale.textLayout.elements.CellContainer,org.apache.royale.textLayout.elements.ITableRowElement,org.apache.royale.textLayout.elements.ITextFlow,XML*/

goog.require('org.apache.royale.textLayout.elements.ITableFormattedElement');



/**
 * @interface
 * @extends {org.apache.royale.textLayout.elements.ITableFormattedElement}
 */
org.apache.royale.textLayout.elements.ITableCellElement = function() {
};


/**
 * Prevent renaming of class. Needed for reflection.
 */
goog.exportSymbol('org.apache.royale.textLayout.elements.ITableCellElement', org.apache.royale.textLayout.elements.ITableCellElement);
/**  * @type {number}
 */org.apache.royale.textLayout.elements.ITableCellElement.prototype.rowIndex;
/**
 * @export
 * @return {org.apache.royale.textLayout.elements.ITableRowElement}
 */
org.apache.royale.textLayout.elements.ITableCellElement.prototype.getRow = function() {
};
/**  * @type {number}
 */org.apache.royale.textLayout.elements.ITableCellElement.prototype.x;
/**  * @type {number}
 */org.apache.royale.textLayout.elements.ITableCellElement.prototype.y;
/**  * @type {number}
 */org.apache.royale.textLayout.elements.ITableCellElement.prototype.width;
/**  * @type {org.apache.royale.textLayout.elements.CellContainer}
 */org.apache.royale.textLayout.elements.ITableCellElement.prototype.container;
/**  * @type {number}
 */org.apache.royale.textLayout.elements.ITableCellElement.prototype.colIndex;
/**
 * @export
 * @return {org.apache.royale.textLayout.elements.ITableCellElement}
 */
org.apache.royale.textLayout.elements.ITableCellElement.prototype.getPreviousCell = function() {
};
/**
 * @export
 * @return {org.apache.royale.textLayout.elements.ITableCellElement}
 */
org.apache.royale.textLayout.elements.ITableCellElement.prototype.getNextCell = function() {
};
/**  * @type {org.apache.royale.textLayout.elements.ITextFlow}
 */org.apache.royale.textLayout.elements.ITableCellElement.prototype.textFlow;
/**  * @type {number}
 */org.apache.royale.textLayout.elements.ITableCellElement.prototype.columnSpan;
org.apache.royale.textLayout.elements.ITableCellElement.prototype.damage = function() {
};
/**  * @type {number}
 */org.apache.royale.textLayout.elements.ITableCellElement.prototype.rowSpan;
/**
 * @export
 * @return {boolean}
 */
org.apache.royale.textLayout.elements.ITableCellElement.prototype.compose = function() {
};
/**
 * @export
 * @return {number}
 */
org.apache.royale.textLayout.elements.ITableCellElement.prototype.getComposedHeight = function() {
};
org.apache.royale.textLayout.elements.ITableCellElement.prototype.updateCompositionShapes = function() {
};


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
org.apache.royale.textLayout.elements.ITableCellElement.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'ITableCellElement', qName: 'org.apache.royale.textLayout.elements.ITableCellElement', kind: 'interface' }], interfaces: [org.apache.royale.textLayout.elements.ITableFormattedElement] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
org.apache.royale.textLayout.elements.ITableCellElement.prototype.ROYALE_REFLECTION_INFO = function () {
  return {
    accessors: function () {
      return {
        'rowIndex': { type: 'int', access: 'readwrite', declaredBy: 'org.apache.royale.textLayout.elements.ITableCellElement'},
        'x': { type: 'Number', access: 'readwrite', declaredBy: 'org.apache.royale.textLayout.elements.ITableCellElement'},
        'y': { type: 'Number', access: 'readwrite', declaredBy: 'org.apache.royale.textLayout.elements.ITableCellElement'},
        'width': { type: 'Number', access: 'readonly', declaredBy: 'org.apache.royale.textLayout.elements.ITableCellElement'},
        'container': { type: 'org.apache.royale.textLayout.elements.CellContainer', access: 'readonly', declaredBy: 'org.apache.royale.textLayout.elements.ITableCellElement'},
        'colIndex': { type: 'int', access: 'readwrite', declaredBy: 'org.apache.royale.textLayout.elements.ITableCellElement'},
        'textFlow': { type: 'org.apache.royale.textLayout.elements.ITextFlow', access: 'readonly', declaredBy: 'org.apache.royale.textLayout.elements.ITableCellElement'},
        'columnSpan': { type: 'uint', access: 'readonly', declaredBy: 'org.apache.royale.textLayout.elements.ITableCellElement'},
        'rowSpan': { type: 'uint', access: 'readonly', declaredBy: 'org.apache.royale.textLayout.elements.ITableCellElement'}
      };
    },
    methods: function () {
      return {
        'getRow': { type: 'org.apache.royale.textLayout.elements.ITableRowElement', declaredBy: 'org.apache.royale.textLayout.elements.ITableCellElement'},
        'getPreviousCell': { type: 'org.apache.royale.textLayout.elements.ITableCellElement', declaredBy: 'org.apache.royale.textLayout.elements.ITableCellElement'},
        'getNextCell': { type: 'org.apache.royale.textLayout.elements.ITableCellElement', declaredBy: 'org.apache.royale.textLayout.elements.ITableCellElement'},
        'damage': { type: 'void', declaredBy: 'org.apache.royale.textLayout.elements.ITableCellElement'},
        'compose': { type: 'Boolean', declaredBy: 'org.apache.royale.textLayout.elements.ITableCellElement'},
        'getComposedHeight': { type: 'Number', declaredBy: 'org.apache.royale.textLayout.elements.ITableCellElement'},
        'updateCompositionShapes': { type: 'void', declaredBy: 'org.apache.royale.textLayout.elements.ITableCellElement'}
      };
    }
  };
};
/**
 * @const
 * @type {number}
 */
org.apache.royale.textLayout.elements.ITableCellElement.prototype.ROYALE_COMPILE_FLAGS = 10;
