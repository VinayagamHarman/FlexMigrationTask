/**
 * Generated by Apache Royale Compiler from org/apache/royale/svg/Text.as
 * org.apache.royale.svg.Text
 *
 * @fileoverview
 *
 * @suppress {missingRequire|checkTypes|accessControls}
 */

goog.provide('org.apache.royale.svg.Text');
/* Royale Dependency List: org.apache.royale.core.WrappedHTMLElement,org.apache.royale.html.util.createSVG,org.apache.royale.utils.Language*/

goog.require('org.apache.royale.svg.GraphicShape');
goog.require('org.apache.royale.graphics.IDrawable');
goog.require('org.apache.royale.graphics.IText');



/**
 *  constructor.
 *
 *  @langversion 3.0
 *  @playerversion Flash 10.2
 *  @playerversion AIR 2.6
 *  @productversion Royale 0.0
 * @constructor
 * @extends {org.apache.royale.svg.GraphicShape}
 * @implements {org.apache.royale.graphics.IText}
 * @implements {org.apache.royale.graphics.IDrawable}
 */
org.apache.royale.svg.Text = function() {
  org.apache.royale.svg.Text.base(this, 'constructor');
  
};
goog.inherits(org.apache.royale.svg.Text, org.apache.royale.svg.GraphicShape);


/**
 * Prevent renaming of class. Needed for reflection.
 */
goog.exportSymbol('org.apache.royale.svg.Text', org.apache.royale.svg.Text);


/**
 * @private
 * @type {string}
 */
org.apache.royale.svg.Text.prototype.org_apache_royale_svg_Text__text;


/**
 * @private
 * @type {org.apache.royale.core.WrappedHTMLElement}
 */
org.apache.royale.svg.Text.prototype.org_apache_royale_svg_Text__textElem;


/**
 *  Draws text at the given point.
 *  @asparam value The string to draw.
 *  @asparam xt The x position of the top-left corner of the rectangle.
 *  @asparam yt The y position of the top-left corner.
 *
 *  @langversion 3.0
 *  @playerversion Flash 10.2
 *  @playerversion AIR 2.6
 *  @productversion Royale 0.0
 *  @royaleignorecoercion org.apache.royale.core.WrappedHTMLElement
 *  @royaleignorecoercion Text
 *  @royaleignorecoercion Node
 *  @royaleignorecoercion SVGLocatable
 * @export
 * @param {string} value
 * @param {number} xt
 * @param {number} yt
 */
org.apache.royale.svg.Text.prototype.drawText = function(value, xt, yt) {
  
  var /** @type {string} */ style = this.getStyleStr();
  if (this.org_apache_royale_svg_Text__textElem == null) {
    this.org_apache_royale_svg_Text__textElem = org.apache.royale.html.util.createSVG('text');
    this.org_apache_royale_svg_Text__textElem.royale_wrapper = this;
    this.element.appendChild(this.org_apache_royale_svg_Text__textElem);
  } else {
    this.org_apache_royale_svg_Text__textElem.removeChild(this.org_apache_royale_svg_Text__textElem.childNodes[0]);
  }
  this.org_apache_royale_svg_Text__textElem.setAttribute('style', style);
  this.org_apache_royale_svg_Text__textElem.setAttribute('x', xt);
  this.org_apache_royale_svg_Text__textElem.setAttribute('y', yt);
  var /** @type {org.apache.royale.svg.Text} */ textNode = org.apache.royale.utils.Language.as(document.createTextNode(value), org.apache.royale.svg.Text);
  this.org_apache_royale_svg_Text__textElem.appendChild(textNode);
  this.resize(this.x, this.y);
};


/**
 * @protected
 * @override
 */
org.apache.royale.svg.Text.prototype.drawImpl = function() {
  this.drawText(this.text, this.x, this.y);
};


/**
 * @export
 */
org.apache.royale.svg.Text.prototype.draw = function() {
  this.drawImpl();
};


org.apache.royale.svg.Text.prototype.get__text = function() {
  return this.org_apache_royale_svg_Text__text;
};


org.apache.royale.svg.Text.prototype.set__text = function(value) {
  this.org_apache_royale_svg_Text__text = value;
  this.updateView();
};


Object.defineProperties(org.apache.royale.svg.Text.prototype, /** @lends {org.apache.royale.svg.Text.prototype} */ {
/**
  * @export
  * @type {string} */
text: {
get: org.apache.royale.svg.Text.prototype.get__text,
set: org.apache.royale.svg.Text.prototype.set__text}}
);


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
org.apache.royale.svg.Text.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'Text', qName: 'org.apache.royale.svg.Text', kind: 'class' }], interfaces: [org.apache.royale.graphics.IText, org.apache.royale.graphics.IDrawable] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
org.apache.royale.svg.Text.prototype.ROYALE_REFLECTION_INFO = function () {
  return {
    accessors: function () {
      return {
        'text': { type: 'String', access: 'readwrite', declaredBy: 'org.apache.royale.svg.Text'}
      };
    },
    methods: function () {
      return {
        'Text': { type: '', declaredBy: 'org.apache.royale.svg.Text'},
        'drawText': { type: 'void', declaredBy: 'org.apache.royale.svg.Text', parameters: function () { return [ 'String', false ,'Number', false ,'Number', false ]; }},
        'draw': { type: 'void', declaredBy: 'org.apache.royale.svg.Text'}
      };
    }
  };
};
/**
 * @const
 * @type {number}
 */
org.apache.royale.svg.Text.prototype.ROYALE_COMPILE_FLAGS = 10;
