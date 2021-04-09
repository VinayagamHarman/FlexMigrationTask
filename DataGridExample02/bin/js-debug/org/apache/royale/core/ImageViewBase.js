/**
 * Generated by Apache Royale Compiler from org/apache/royale/core/ImageViewBase.as
 * org.apache.royale.core.ImageViewBase
 *
 * @fileoverview
 *
 * @suppress {missingRequire|checkTypes|accessControls}
 */

goog.provide('org.apache.royale.core.ImageViewBase');
/* Royale Dependency List: org.apache.royale.core.IImage,org.apache.royale.core.IImageModel,org.apache.royale.core.IStrand,org.apache.royale.core.IUIBase,org.apache.royale.events.Event,org.apache.royale.utils.sendStrandEvent,org.apache.royale.utils.Language*/

goog.require('org.apache.royale.core.BeadViewBase');
goog.require('org.apache.royale.core.IImageView');



/**
 *  constructor.
 *
 *  @langversion 3.0
 *  @playerversion Flash 10.2
 *  @playerversion AIR 2.6
 *  @productversion Royale 0.0
 * @constructor
 * @extends {org.apache.royale.core.BeadViewBase}
 * @implements {org.apache.royale.core.IImageView}
 */
org.apache.royale.core.ImageViewBase = function() {
  org.apache.royale.core.ImageViewBase.base(this, 'constructor');
};
goog.inherits(org.apache.royale.core.ImageViewBase, org.apache.royale.core.BeadViewBase);


/**
 * Prevent renaming of class. Needed for reflection.
 */
goog.exportSymbol('org.apache.royale.core.ImageViewBase', org.apache.royale.core.ImageViewBase);


/**
 * @protected
 * @type {org.apache.royale.core.IImageModel}
 */
org.apache.royale.core.ImageViewBase.prototype._model;


/**
 * @asprivate
 * @royaleignorecoercion org.apache.royale.core.IImage
 * @protected
 * @param {org.apache.royale.events.Event} event
 */
org.apache.royale.core.ImageViewBase.prototype.handleUrlChange = function(event) {
  
  if (this._model.url) {
    this.setupLoader();
    this.host.applyImageData(this._model.url);
  }
};


/**
 * @private
 * @type {boolean}
 */
org.apache.royale.core.ImageViewBase.prototype.org_apache_royale_core_ImageViewBase__sizeHandlerSet;


/**
 * @royaleignorecoercion org.apache.royale.core.IUIBase
 * @export
 */
org.apache.royale.core.ImageViewBase.prototype.setupLoader = function() {
  var /** @type {Object} */ host = this._strand;
  this.imageElement.addEventListener('load', org.apache.royale.utils.Language.closure(this.loadHandler, this, 'loadHandler'));
  if (!this.org_apache_royale_core_ImageViewBase__sizeHandlerSet) {
    this.listenOnStrand('sizeChanged', org.apache.royale.utils.Language.closure(this.sizeChangedHandler, this, 'sizeChangedHandler'));
    this.org_apache_royale_core_ImageViewBase__sizeHandlerSet = true;
  }
};


/**
 * @royaleignorecoercion org.apache.royale.core.IUIBase
 * @protected
 * @param {Object} event
 */
org.apache.royale.core.ImageViewBase.prototype.loadHandler = function(event) {
  this.imageElement.removeEventListener('load', org.apache.royale.utils.Language.closure(this.loadHandler, this, 'loadHandler'));
  org.apache.royale.utils.sendStrandEvent(this._strand, "layoutNeeded");
};


/**
 * @royaleignorecoercion HTMLElement
 * @royaleignorecoercion org.apache.royale.core.IUIBase
 * @protected
 * @param {Object} event
 */
org.apache.royale.core.ImageViewBase.prototype.sizeChangedHandler = function(event) {
  var /** @type {Object} */ host = this._strand;
  var /** @type {Object} */ s = host.positioner.style;
  var /** @type {number} */ left = this.org_apache_royale_core_ImageViewBase_getStyleValue(s.left);
  var /** @type {number} */ right = this.org_apache_royale_core_ImageViewBase_getStyleValue(s.right);
  var /** @type {number} */ width = this.org_apache_royale_core_ImageViewBase_getStyleValue(s.width);
  if (!isNaN(left) && !isNaN(right) && !isNaN(width)) {
    var /** @type {number} */ computedWidth = host.positioner.offsetParent.offsetWidth - left - right;
    s.width = computedWidth.toString() + 'px';
  }
  var /** @type {number} */ top = this.org_apache_royale_core_ImageViewBase_getStyleValue(s.top);
  var /** @type {number} */ bottom = this.org_apache_royale_core_ImageViewBase_getStyleValue(s.bottom);
  var /** @type {number} */ height = this.org_apache_royale_core_ImageViewBase_getStyleValue(s.height);
  if (!isNaN(top) && !isNaN(bottom) && !isNaN(height)) {
    var /** @type {number} */ computedHeight = host.positioner.offsetParent.offsetHeight - top - bottom;
    s.height = computedHeight.toString() + 'px';
  }
};


/**
 * @private
 * @param {Object} value
 * @return {number}
 */
org.apache.royale.core.ImageViewBase.prototype.org_apache_royale_core_ImageViewBase_getStyleValue = function(value) {
  if (typeof(value) === 'string' && value.length > 0)
    return parseFloat(value.substring(0, value.length - 2));
  return NaN;
};


org.apache.royale.core.ImageViewBase.prototype.set__strand = function(value) {
  org.apache.royale.core.ImageViewBase.superClass_.set__strand.apply(this, [ value] );
  
  this._model = value.getBeadByType(org.apache.royale.core.IImageModel);
  this._model.addEventListener("urlChanged", org.apache.royale.utils.Language.closure(this.handleUrlChange, this, 'handleUrlChange'));
  this.handleUrlChange(null);
};


org.apache.royale.core.ImageViewBase.prototype.get__imageElement = function() {
  return this._strand.imageElement;
};


Object.defineProperties(org.apache.royale.core.ImageViewBase.prototype, /** @lends {org.apache.royale.core.ImageViewBase.prototype} */ {
/**
  * @export
  * @type {org.apache.royale.core.IStrand} */
strand: {
set: org.apache.royale.core.ImageViewBase.prototype.set__strand},
/**
  * @type {Element} */
imageElement: {
get: org.apache.royale.core.ImageViewBase.prototype.get__imageElement}}
);


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
org.apache.royale.core.ImageViewBase.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'ImageViewBase', qName: 'org.apache.royale.core.ImageViewBase', kind: 'class' }], interfaces: [org.apache.royale.core.IImageView] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
org.apache.royale.core.ImageViewBase.prototype.ROYALE_REFLECTION_INFO = function () {
  return {
    accessors: function () {
      return {
        'strand': { type: 'org.apache.royale.core.IStrand', access: 'writeonly', declaredBy: 'org.apache.royale.core.ImageViewBase'}
      };
    },
    methods: function () {
      return {
        'ImageViewBase': { type: '', declaredBy: 'org.apache.royale.core.ImageViewBase'},
        'setupLoader': { type: 'void', declaredBy: 'org.apache.royale.core.ImageViewBase'}
      };
    }
  };
};
/**
 * @const
 * @type {number}
 */
org.apache.royale.core.ImageViewBase.prototype.ROYALE_COMPILE_FLAGS = 10;
