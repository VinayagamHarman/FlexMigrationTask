/**
 * Generated by Apache Royale Compiler from org/apache/royale/core/IItemRendererOwnerView.as
 * org.apache.royale.core.IItemRendererOwnerView
 *
 * @fileoverview
 *
 * @suppress {missingRequire|checkTypes|accessControls}
 */

goog.provide('org.apache.royale.core.IItemRendererOwnerView');
/* Royale Dependency List: org.apache.royale.core.IItemRenderer,org.apache.royale.core.IUIBase*/

goog.require('org.apache.royale.events.IEventDispatcher');



/**
 * @interface
 * @extends {org.apache.royale.events.IEventDispatcher}
 */
org.apache.royale.core.IItemRendererOwnerView = function() {
};


/**
 * Prevent renaming of class. Needed for reflection.
 */
goog.exportSymbol('org.apache.royale.core.IItemRendererOwnerView', org.apache.royale.core.IItemRendererOwnerView);
/**
 *  The IItemRendererOwnerView interface is the basic interface for the 
 *  container that parents item renderers.
 * 
 *  @asparam index The index of the data item.
 *  @asreturn The item renderer for the data item.
 * 
 *  @see org.apache.royale.core.IItemRenderer
 * 
 *  @langversion 3.0
 *  @playerversion Flash 10.2
 *  @playerversion AIR 2.6
 *  @productversion Royale 0.0
 * @export
 * @param {org.apache.royale.core.IItemRenderer} renderer
 * @param {boolean} dispatchAdded
 */
org.apache.royale.core.IItemRendererOwnerView.prototype.addItemRenderer = function(renderer, dispatchAdded) {
};
/**
 * @export
 * @param {org.apache.royale.core.IItemRenderer} renderer
 * @param {number} index
 */
org.apache.royale.core.IItemRendererOwnerView.prototype.addItemRendererAt = function(renderer, index) {
};
/**
 * @export
 * @param {org.apache.royale.core.IItemRenderer} renderer
 */
org.apache.royale.core.IItemRendererOwnerView.prototype.removeItemRenderer = function(renderer) {
};
/**
 * @export
 * @param {number} index
 * @return {org.apache.royale.core.IItemRenderer}
 */
org.apache.royale.core.IItemRendererOwnerView.prototype.getItemRendererForIndex = function(index) {
};
/**
 * @export
 * @param {number} index
 * @return {org.apache.royale.core.IItemRenderer}
 */
org.apache.royale.core.IItemRendererOwnerView.prototype.getItemRendererAt = function(index) {
};
org.apache.royale.core.IItemRendererOwnerView.prototype.removeAllItemRenderers = function() {
};
org.apache.royale.core.IItemRendererOwnerView.prototype.updateAllItemRenderers = function() {
};
/**  * @type {number}
 */org.apache.royale.core.IItemRendererOwnerView.prototype.numItemRenderers;
/**  * @type {org.apache.royale.core.IUIBase}
 */org.apache.royale.core.IItemRendererOwnerView.prototype.host;


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
org.apache.royale.core.IItemRendererOwnerView.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'IItemRendererOwnerView', qName: 'org.apache.royale.core.IItemRendererOwnerView', kind: 'interface' }], interfaces: [org.apache.royale.events.IEventDispatcher] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
org.apache.royale.core.IItemRendererOwnerView.prototype.ROYALE_REFLECTION_INFO = function () {
  return {
    accessors: function () {
      return {
        'numItemRenderers': { type: 'int', access: 'readonly', declaredBy: 'org.apache.royale.core.IItemRendererOwnerView'},
        'host': { type: 'org.apache.royale.core.IUIBase', access: 'readonly', declaredBy: 'org.apache.royale.core.IItemRendererOwnerView'}
      };
    },
    methods: function () {
      return {
        'addItemRenderer': { type: 'void', declaredBy: 'org.apache.royale.core.IItemRendererOwnerView', parameters: function () { return [ 'org.apache.royale.core.IItemRenderer', false ,'Boolean', false ]; }},
        'addItemRendererAt': { type: 'void', declaredBy: 'org.apache.royale.core.IItemRendererOwnerView', parameters: function () { return [ 'org.apache.royale.core.IItemRenderer', false ,'int', false ]; }},
        'removeItemRenderer': { type: 'void', declaredBy: 'org.apache.royale.core.IItemRendererOwnerView', parameters: function () { return [ 'org.apache.royale.core.IItemRenderer', false ]; }},
        'getItemRendererForIndex': { type: 'org.apache.royale.core.IItemRenderer', declaredBy: 'org.apache.royale.core.IItemRendererOwnerView', parameters: function () { return [ 'int', false ]; }},
        'getItemRendererAt': { type: 'org.apache.royale.core.IItemRenderer', declaredBy: 'org.apache.royale.core.IItemRendererOwnerView', parameters: function () { return [ 'int', false ]; }},
        'removeAllItemRenderers': { type: 'void', declaredBy: 'org.apache.royale.core.IItemRendererOwnerView'},
        'updateAllItemRenderers': { type: 'void', declaredBy: 'org.apache.royale.core.IItemRendererOwnerView'}
      };
    }
  };
};
/**
 * @const
 * @type {number}
 */
org.apache.royale.core.IItemRendererOwnerView.prototype.ROYALE_COMPILE_FLAGS = 10;
