/**
 * Generated by Apache Royale Compiler from org/apache/royale/html/ButtonBase.as
 * org.apache.royale.html.ButtonBase
 *
 * @fileoverview
 *
 * @suppress {missingRequire|checkTypes|accessControls}
 */

goog.provide('org.apache.royale.html.ButtonBase');
/* Royale Dependency List: org.apache.royale.core.WrappedHTMLElement,org.apache.royale.html.util.addElementToWrapper*/

goog.require('org.apache.royale.core.UIBase');
goog.require('org.apache.royale.core.IStrand');
goog.require('org.apache.royale.core.IUIBase');
goog.require('org.apache.royale.events.IEventDispatcher');



/**
 * @constructor
 * @extends {org.apache.royale.core.UIBase}
 * @implements {org.apache.royale.core.IStrand}
 * @implements {org.apache.royale.events.IEventDispatcher}
 * @implements {org.apache.royale.core.IUIBase}
 */
org.apache.royale.html.ButtonBase = function() {
  org.apache.royale.html.ButtonBase.base(this, 'constructor');
};
goog.inherits(org.apache.royale.html.ButtonBase, org.apache.royale.core.UIBase);


/**
 * Prevent renaming of class. Needed for reflection.
 */
goog.exportSymbol('org.apache.royale.html.ButtonBase', org.apache.royale.html.ButtonBase);


/**
 * @royaleignorecoercion org.apache.royale.core.WrappedHTMLElement
 * @protected
 * @override
 */
org.apache.royale.html.ButtonBase.prototype.createElement = function() {
  org.apache.royale.html.util.addElementToWrapper(this, 'button');
  this.element.setAttribute('type', 'button');
  return this.element;
};


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
org.apache.royale.html.ButtonBase.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'ButtonBase', qName: 'org.apache.royale.html.ButtonBase', kind: 'class' }], interfaces: [org.apache.royale.core.IStrand, org.apache.royale.events.IEventDispatcher, org.apache.royale.core.IUIBase] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
org.apache.royale.html.ButtonBase.prototype.ROYALE_REFLECTION_INFO = function () {
  return {};
};
/**
 * @const
 * @type {number}
 */
org.apache.royale.html.ButtonBase.prototype.ROYALE_COMPILE_FLAGS = 10;
