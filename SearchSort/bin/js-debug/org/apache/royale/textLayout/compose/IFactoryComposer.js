/**
 * Generated by Apache Royale Compiler from org/apache/royale/textLayout/compose/IFactoryComposer.as
 * org.apache.royale.textLayout.compose.IFactoryComposer
 *
 * @fileoverview
 *
 * @suppress {missingRequire|checkTypes|accessControls}
 */

goog.provide('org.apache.royale.textLayout.compose.IFactoryComposer');
/* Royale Dependency List: org.apache.royale.textLayout.container.IContainerController,XML*/

goog.require('org.apache.royale.textLayout.compose.IFlowComposer');



/**
 * @interface
 * @extends {org.apache.royale.textLayout.compose.IFlowComposer}
 */
org.apache.royale.textLayout.compose.IFactoryComposer = function() {
};


/**
 * Prevent renaming of class. Needed for reflection.
 */
goog.exportSymbol('org.apache.royale.textLayout.compose.IFactoryComposer', org.apache.royale.textLayout.compose.IFactoryComposer);
/**
 * @export
 * @param {number} absoluteEndPosition
 * @param {number} controllerEndIndex
 * @return {org.apache.royale.textLayout.container.IContainerController}
 */
org.apache.royale.textLayout.compose.IFactoryComposer.prototype.callTheComposer = function(absoluteEndPosition, controllerEndIndex) {
};


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
org.apache.royale.textLayout.compose.IFactoryComposer.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'IFactoryComposer', qName: 'org.apache.royale.textLayout.compose.IFactoryComposer', kind: 'interface' }], interfaces: [org.apache.royale.textLayout.compose.IFlowComposer] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
org.apache.royale.textLayout.compose.IFactoryComposer.prototype.ROYALE_REFLECTION_INFO = function () {
  return {
    methods: function () {
      return {
        'callTheComposer': { type: 'org.apache.royale.textLayout.container.IContainerController', declaredBy: 'org.apache.royale.textLayout.compose.IFactoryComposer', parameters: function () { return [ 'int', false ,'int', false ]; }}
      };
    }
  };
};
/**
 * @const
 * @type {number}
 */
org.apache.royale.textLayout.compose.IFactoryComposer.prototype.ROYALE_COMPILE_FLAGS = 10;
