/**
 * Generated by Apache Royale Compiler from org/apache/royale/svg/GraphicShape.as
 * org.apache.royale.svg.GraphicShape
 *
 * @fileoverview
 *
 * @suppress {missingRequire|checkTypes|accessControls}
 */

goog.provide('org.apache.royale.svg.GraphicShape');
/* Royale Dependency List: org.apache.royale.core.WrappedHTMLElement,org.apache.royale.graphics.IFill,org.apache.royale.graphics.IStroke,org.apache.royale.html.util.addSvgElementToWrapper*/

goog.require('org.apache.royale.core.UIBase');
goog.require('org.apache.royale.graphics.IGraphicShape');



/**
 * Constructor
 *
 * @royaleignorecoercion org.apache.royale.core.WrappedHTMLElement
 * @constructor
 * @extends {org.apache.royale.core.UIBase}
 * @implements {org.apache.royale.graphics.IGraphicShape}
 */
org.apache.royale.svg.GraphicShape = function() {
  org.apache.royale.svg.GraphicShape.base(this, 'constructor');
};
goog.inherits(org.apache.royale.svg.GraphicShape, org.apache.royale.core.UIBase);


/**
 * Prevent renaming of class. Needed for reflection.
 */
goog.exportSymbol('org.apache.royale.svg.GraphicShape', org.apache.royale.svg.GraphicShape);


/**
 * @private
 * @type {org.apache.royale.graphics.IFill}
 */
org.apache.royale.svg.GraphicShape.prototype.org_apache_royale_svg_GraphicShape__fill;


/**
 * @private
 * @type {org.apache.royale.graphics.IStroke}
 */
org.apache.royale.svg.GraphicShape.prototype.org_apache_royale_svg_GraphicShape__stroke;


/**
 * Setting visuals after the element is added to the parent should have an effect (i.e. in MXML binding)
 * @protected
 */
org.apache.royale.svg.GraphicShape.prototype.updateView = function() {
  if (this.parent)
    this.drawImpl();
};


/**
 * @royaleignorecoercion org.apache.royale.core.WrappedHTMLElement
 * @protected
 * @override
 */
org.apache.royale.svg.GraphicShape.prototype.createElement = function() {
  return org.apache.royale.html.util.addSvgElementToWrapper(this, 'svg');
};


/**
 * This is where the drawing methods get called from
 * @protected
 */
org.apache.royale.svg.GraphicShape.prototype.drawImpl = function() {
};


/**
 * @export
 * @override
 */
org.apache.royale.svg.GraphicShape.prototype.addedToParent = function() {
  org.apache.royale.svg.GraphicShape.superClass_.addedToParent.apply(this);
  this.drawImpl();
  this.element.style.overflow = 'visible';
};


/**
 * @asreturn {string} The style attribute.
 * @export
 * @return {string}
 */
org.apache.royale.svg.GraphicShape.prototype.getStyleStr = function() {
  var /** @type {string} */ fillStr;
  if (this.fill) {
    fillStr = this.fill.addFillAttrib(this);
  } else {
    fillStr = 'fill:none';
  }
  var /** @type {string} */ strokeStr;
  if (this.stroke) {
    strokeStr = this.stroke.addStrokeAttrib(this);
  } else {
    strokeStr = 'stroke:none';
  }
  return fillStr + ';' + strokeStr;
};


/**
 * @protected
 * @override
 */
org.apache.royale.svg.GraphicShape.prototype.setClassName = function(value) {
  this.element.setAttribute('class', value);
};


/**
 * @asparam x X position.
 * @asparam y Y position.
 * @asparam bbox The bounding box of the svg element.
 * @export
 * @param {number} x
 * @param {number} y
 */
org.apache.royale.svg.GraphicShape.prototype.resize = function(x, y) {
  var /** @type {number} */ useWidth = this.explicitWidth;
  var /** @type {number} */ useHeight = this.explicitHeight;
  this.element.style.position = 'absolute';
  if (!isNaN(x)) {
    this.element.style.left = x + "px";
    this.element.setAttribute("x", x);
  }
  if (!isNaN(y)) {
    this.element.style.top = y + "px";
    this.element.setAttribute("y", y);
  }
  if (!isNaN(useWidth)) {
    this.element.style.width = useWidth + "px";
    this.element.setAttribute("width", useWidth);
  }
  if (!isNaN(useHeight)) {
    this.element.style.height = useHeight + "px";
    this.element.setAttribute("height", useHeight);
  }
};


/**
 * @private
 * @type {number}
 */
org.apache.royale.svg.GraphicShape.prototype.org_apache_royale_svg_GraphicShape__x;


/**
 * @private
 * @type {number}
 */
org.apache.royale.svg.GraphicShape.prototype.org_apache_royale_svg_GraphicShape__y;


/**
 * @private
 * @type {number}
 */
org.apache.royale.svg.GraphicShape.prototype.org_apache_royale_svg_GraphicShape__xOffset;


/**
 * @private
 * @type {number}
 */
org.apache.royale.svg.GraphicShape.prototype.org_apache_royale_svg_GraphicShape__yOffset;


/**
 * @asparam x X position.
 * @asparam y Y position.
 * @asparam xOffset offset from x position.
 * @asparam yOffset offset from y position.
 * @export
 * @param {number} x
 * @param {number} y
 * @param {number} xOffset
 * @param {number} yOffset
 */
org.apache.royale.svg.GraphicShape.prototype.setPosition = function(x, y, xOffset, yOffset) {
  this.org_apache_royale_svg_GraphicShape__x = x;
  this.org_apache_royale_svg_GraphicShape__y = y;
  this.org_apache_royale_svg_GraphicShape__xOffset = xOffset;
  this.org_apache_royale_svg_GraphicShape__yOffset = yOffset;
  this.element.setAttribute("x", xOffset);
  this.element.setAttribute("y", yOffset);
  this.element.style.left = xOffset + "px";
  this.element.style.top = yOffset + "px";
};


org.apache.royale.svg.GraphicShape.prototype.get__stroke = function() {
  return this.org_apache_royale_svg_GraphicShape__stroke;
};


org.apache.royale.svg.GraphicShape.prototype.set__stroke = function(value) {
  this.org_apache_royale_svg_GraphicShape__stroke = value;
  this.updateView();
};


org.apache.royale.svg.GraphicShape.prototype.get__fill = function() {
  return this.org_apache_royale_svg_GraphicShape__fill;
};


org.apache.royale.svg.GraphicShape.prototype.set__fill = function(value) {
  this.org_apache_royale_svg_GraphicShape__fill = value;
  this.updateView();
};


org.apache.royale.svg.GraphicShape.prototype.set__x = function(value) {
  org.apache.royale.svg.GraphicShape.superClass_.set__x.apply(this, [ value] );
  this.element.setAttribute("x", value);
};


org.apache.royale.svg.GraphicShape.prototype.set__y = function(value) {
  org.apache.royale.svg.GraphicShape.superClass_.set__y.apply(this, [ value] );
  this.element.setAttribute("y", value);
};


Object.defineProperties(org.apache.royale.svg.GraphicShape.prototype, /** @lends {org.apache.royale.svg.GraphicShape.prototype} */ {
/**
  * @export
  * @type {org.apache.royale.graphics.IStroke} */
stroke: {
get: org.apache.royale.svg.GraphicShape.prototype.get__stroke,
set: org.apache.royale.svg.GraphicShape.prototype.set__stroke},
/**
  * @export
  * @type {org.apache.royale.graphics.IFill} */
fill: {
get: org.apache.royale.svg.GraphicShape.prototype.get__fill,
set: org.apache.royale.svg.GraphicShape.prototype.set__fill},
/**
  * @export
  * @type {number} */
x: {
get: org.apache.royale.core.UIBase.prototype.get__x,
set: org.apache.royale.svg.GraphicShape.prototype.set__x},
/**
  * @export
  * @type {number} */
y: {
get: org.apache.royale.core.UIBase.prototype.get__y,
set: org.apache.royale.svg.GraphicShape.prototype.set__y}}
);


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
org.apache.royale.svg.GraphicShape.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'GraphicShape', qName: 'org.apache.royale.svg.GraphicShape', kind: 'class' }], interfaces: [org.apache.royale.graphics.IGraphicShape] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
org.apache.royale.svg.GraphicShape.prototype.ROYALE_REFLECTION_INFO = function () {
  return {
    accessors: function () {
      return {
        'stroke': { type: 'org.apache.royale.graphics.IStroke', access: 'readwrite', declaredBy: 'org.apache.royale.svg.GraphicShape'},
        'fill': { type: 'org.apache.royale.graphics.IFill', access: 'readwrite', declaredBy: 'org.apache.royale.svg.GraphicShape'},
        'x': { type: 'Number', access: 'writeonly', declaredBy: 'org.apache.royale.svg.GraphicShape'},
        'y': { type: 'Number', access: 'writeonly', declaredBy: 'org.apache.royale.svg.GraphicShape'}
      };
    },
    methods: function () {
      return {
        'GraphicShape': { type: '', declaredBy: 'org.apache.royale.svg.GraphicShape'},
        'addedToParent': { type: 'void', declaredBy: 'org.apache.royale.svg.GraphicShape'},
        'getStyleStr': { type: 'String', declaredBy: 'org.apache.royale.svg.GraphicShape'},
        'resize': { type: 'void', declaredBy: 'org.apache.royale.svg.GraphicShape', parameters: function () { return [ 'Number', false ,'Number', false ]; }},
        'setPosition': { type: 'void', declaredBy: 'org.apache.royale.svg.GraphicShape', parameters: function () { return [ 'Number', false ,'Number', false ,'Number', false ,'Number', false ]; }}
      };
    }
  };
};
/**
 * @const
 * @type {number}
 */
org.apache.royale.svg.GraphicShape.prototype.ROYALE_COMPILE_FLAGS = 10;
