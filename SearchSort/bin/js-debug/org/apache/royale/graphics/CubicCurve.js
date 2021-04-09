/**
 * Generated by Apache Royale Compiler from org/apache/royale/graphics/CubicCurve.as
 * org.apache.royale.graphics.CubicCurve
 *
 * @fileoverview
 *
 * @suppress {missingRequire|checkTypes|accessControls}
 */

goog.provide('org.apache.royale.graphics.CubicCurve');
/* Royale Dependency List: */

goog.require('org.apache.royale.graphics.IPathCommand');



/**
 * @constructor
 * @implements {org.apache.royale.graphics.IPathCommand}
 * @param {number} controlX1
 * @param {number} controlY1
 * @param {number} controlX2
 * @param {number} controlY2
 * @param {number} anchorX
 * @param {number} anchorY
 */
org.apache.royale.graphics.CubicCurve = function(controlX1, controlY1, controlX2, controlY2, anchorX, anchorY) {
  this.org_apache_royale_graphics_CubicCurve__controlX1 = controlX1;
  this.org_apache_royale_graphics_CubicCurve__controlY1 = controlY1;
  this.org_apache_royale_graphics_CubicCurve__controlX2 = controlX2;
  this.org_apache_royale_graphics_CubicCurve__controlY2 = controlY2;
  this.org_apache_royale_graphics_CubicCurve__anchorX = anchorX;
  this.org_apache_royale_graphics_CubicCurve__anchorY = anchorY;
};


/**
 * Prevent renaming of class. Needed for reflection.
 */
goog.exportSymbol('org.apache.royale.graphics.CubicCurve', org.apache.royale.graphics.CubicCurve);


/**
 * @private
 * @type {number}
 */
org.apache.royale.graphics.CubicCurve.prototype.org_apache_royale_graphics_CubicCurve__controlX1;


/**
 * @private
 * @type {number}
 */
org.apache.royale.graphics.CubicCurve.prototype.org_apache_royale_graphics_CubicCurve__controlY1;


/**
 * @private
 * @type {number}
 */
org.apache.royale.graphics.CubicCurve.prototype.org_apache_royale_graphics_CubicCurve__controlX2;


/**
 * @private
 * @type {number}
 */
org.apache.royale.graphics.CubicCurve.prototype.org_apache_royale_graphics_CubicCurve__controlY2;


/**
 * @private
 * @type {number}
 */
org.apache.royale.graphics.CubicCurve.prototype.org_apache_royale_graphics_CubicCurve__anchorX;


/**
 * @private
 * @type {number}
 */
org.apache.royale.graphics.CubicCurve.prototype.org_apache_royale_graphics_CubicCurve__anchorY;


/**
 * @export
 * @return {string}
 */
org.apache.royale.graphics.CubicCurve.prototype.toString = function() {
  return ["C", this.org_apache_royale_graphics_CubicCurve__controlX1, this.org_apache_royale_graphics_CubicCurve__controlY1, this.org_apache_royale_graphics_CubicCurve__controlX2, this.org_apache_royale_graphics_CubicCurve__controlY2, this.org_apache_royale_graphics_CubicCurve__anchorX, this.org_apache_royale_graphics_CubicCurve__anchorY].join(" ");
};


/**
 * @export
 * @param {Object} ctx
 */
org.apache.royale.graphics.CubicCurve.prototype.execute = function(ctx) {
  ctx.bezierCurveTo(this.org_apache_royale_graphics_CubicCurve__controlX1, this.org_apache_royale_graphics_CubicCurve__controlY1, this.org_apache_royale_graphics_CubicCurve__controlX2, this.org_apache_royale_graphics_CubicCurve__controlY2, this.org_apache_royale_graphics_CubicCurve__anchorX, this.org_apache_royale_graphics_CubicCurve__anchorY);
};


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
org.apache.royale.graphics.CubicCurve.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'CubicCurve', qName: 'org.apache.royale.graphics.CubicCurve', kind: 'class' }], interfaces: [org.apache.royale.graphics.IPathCommand] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
org.apache.royale.graphics.CubicCurve.prototype.ROYALE_REFLECTION_INFO = function () {
  return {
    methods: function () {
      return {
        'CubicCurve': { type: '', declaredBy: 'org.apache.royale.graphics.CubicCurve', parameters: function () { return [ 'Number', false ,'Number', false ,'Number', false ,'Number', false ,'Number', false ,'Number', false ]; }},
        'toString': { type: 'String', declaredBy: 'org.apache.royale.graphics.CubicCurve'},
        'execute': { type: 'void', declaredBy: 'org.apache.royale.graphics.CubicCurve', parameters: function () { return [ 'Object', false ]; }}
      };
    }
  };
};
/**
 * @const
 * @type {number}
 */
org.apache.royale.graphics.CubicCurve.prototype.ROYALE_COMPILE_FLAGS = 10;
