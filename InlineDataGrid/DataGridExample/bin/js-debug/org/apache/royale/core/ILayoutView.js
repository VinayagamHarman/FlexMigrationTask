/**
 * Generated by Apache Royale Compiler from org/apache/royale/core/ILayoutView.as
 * org.apache.royale.core.ILayoutView
 *
 * @fileoverview
 *
 * @suppress {missingRequire|checkTypes|accessControls}
 */

goog.provide('org.apache.royale.core.ILayoutView');
/* Royale Dependency List: org.apache.royale.core.IChild,org.apache.royale.core.WrappedHTMLElement*/




/**
 * @interface
 */
org.apache.royale.core.ILayoutView = function() {
};


/**
 * Prevent renaming of class. Needed for reflection.
 */
goog.exportSymbol('org.apache.royale.core.ILayoutView', org.apache.royale.core.ILayoutView);
/**  * @type {number}
 */org.apache.royale.core.ILayoutView.prototype.width;
/**  * @type {number}
 */org.apache.royale.core.ILayoutView.prototype.height;
/**  * @type {number}
 */org.apache.royale.core.ILayoutView.prototype.numElements;
/**
 * Returns the element child at the given index.
 * 
 *  @langversion 3.0
 *  @playerversion Flash 10.2
 *  @playerversion AIR 2.6
 *  @productversion Royale 0.8
 * @export
 * @param {number} index
 * @return {org.apache.royale.core.IChild}
 */
org.apache.royale.core.ILayoutView.prototype.getElementAt = function(index) {
};


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
org.apache.royale.core.ILayoutView.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'ILayoutView', qName: 'org.apache.royale.core.ILayoutView', kind: 'interface' }] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
org.apache.royale.core.ILayoutView.prototype.ROYALE_REFLECTION_INFO = function () {
  return {
    accessors: function () {
      return {
        'width': { type: 'Number', access: 'readonly', declaredBy: 'org.apache.royale.core.ILayoutView'},
        'height': { type: 'Number', access: 'readonly', declaredBy: 'org.apache.royale.core.ILayoutView'},
        'numElements': { type: 'int', access: 'readonly', declaredBy: 'org.apache.royale.core.ILayoutView'}
      };
    },
    methods: function () {
      return {
        'getElementAt': { type: 'org.apache.royale.core.IChild', declaredBy: 'org.apache.royale.core.ILayoutView', parameters: function () { return [ 'int', false ]; }}
      };
    }
  };
};
/**
 * @const
 * @type {number}
 */
org.apache.royale.core.ILayoutView.prototype.ROYALE_COMPILE_FLAGS = 10;
