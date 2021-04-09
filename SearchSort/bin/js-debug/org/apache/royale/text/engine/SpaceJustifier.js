/**
 * Generated by Apache Royale Compiler from org/apache/royale/text/engine/SpaceJustifier.as
 * org.apache.royale.text.engine.SpaceJustifier
 *
 * @fileoverview
 *
 * @suppress {missingRequire|checkTypes|accessControls}
 */

goog.provide('org.apache.royale.text.engine.SpaceJustifier');
/* Royale Dependency List: */

goog.require('org.apache.royale.text.engine.TextJustifier');



/**
 * @constructor
 * @extends {org.apache.royale.text.engine.TextJustifier}
 * @param {string=} locale
 * @param {string=} lineJustification
 * @param {boolean=} letterSpacing
 */
org.apache.royale.text.engine.SpaceJustifier = function(locale, lineJustification, letterSpacing) {
  locale = typeof locale !== 'undefined' ? locale : "en";
  lineJustification = typeof lineJustification !== 'undefined' ? lineJustification : "unjustified";
  letterSpacing = typeof letterSpacing !== 'undefined' ? letterSpacing : false;
  this.letterSpacing = letterSpacing;
  org.apache.royale.text.engine.SpaceJustifier.base(this, 'constructor', locale, lineJustification);
};
goog.inherits(org.apache.royale.text.engine.SpaceJustifier, org.apache.royale.text.engine.TextJustifier);


/**
 * Prevent renaming of class. Needed for reflection.
 */
goog.exportSymbol('org.apache.royale.text.engine.SpaceJustifier', org.apache.royale.text.engine.SpaceJustifier);


/**
 * @export
 * @override
 */
org.apache.royale.text.engine.SpaceJustifier.prototype.clone = function() {
  var /** @type {org.apache.royale.text.engine.SpaceJustifier} */ retVal = new org.apache.royale.text.engine.SpaceJustifier(this.locale, this.lineJustification);
  retVal.letterSpacing = this.letterSpacing;
  retVal.maximumSpacing = this.maximumSpacing;
  retVal.minimumSpacing = this.minimumSpacing;
  retVal.optimumSpacing = this.optimumSpacing;
  return retVal;
};


/**
 * @export
 * @type {boolean}
 */
org.apache.royale.text.engine.SpaceJustifier.prototype.letterSpacing;


/**
 * @export
 * @type {number}
 */
org.apache.royale.text.engine.SpaceJustifier.prototype.maximumSpacing;


/**
 * @export
 * @type {number}
 */
org.apache.royale.text.engine.SpaceJustifier.prototype.minimumSpacing;


/**
 * @export
 * @type {number}
 */
org.apache.royale.text.engine.SpaceJustifier.prototype.optimumSpacing;


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
org.apache.royale.text.engine.SpaceJustifier.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'SpaceJustifier', qName: 'org.apache.royale.text.engine.SpaceJustifier', kind: 'class' }] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
org.apache.royale.text.engine.SpaceJustifier.prototype.ROYALE_REFLECTION_INFO = function () {
  return {
    variables: function () {
      return {
        'letterSpacing': { type: 'Boolean', get_set: function (/** org.apache.royale.text.engine.SpaceJustifier */ inst, /** * */ v) {return v !== undefined ? inst.letterSpacing = v : inst.letterSpacing;}},
        'maximumSpacing': { type: 'Number', get_set: function (/** org.apache.royale.text.engine.SpaceJustifier */ inst, /** * */ v) {return v !== undefined ? inst.maximumSpacing = v : inst.maximumSpacing;}},
        'minimumSpacing': { type: 'Number', get_set: function (/** org.apache.royale.text.engine.SpaceJustifier */ inst, /** * */ v) {return v !== undefined ? inst.minimumSpacing = v : inst.minimumSpacing;}},
        'optimumSpacing': { type: 'Number', get_set: function (/** org.apache.royale.text.engine.SpaceJustifier */ inst, /** * */ v) {return v !== undefined ? inst.optimumSpacing = v : inst.optimumSpacing;}}
      };
    },
    methods: function () {
      return {
        'SpaceJustifier': { type: '', declaredBy: 'org.apache.royale.text.engine.SpaceJustifier', parameters: function () { return [ 'String', true ,'String', true ,'Boolean', true ]; }},
        'clone': { type: 'org.apache.royale.text.engine.TextJustifier', declaredBy: 'org.apache.royale.text.engine.SpaceJustifier'}
      };
    }
  };
};
/**
 * @const
 * @type {number}
 */
org.apache.royale.text.engine.SpaceJustifier.prototype.ROYALE_COMPILE_FLAGS = 10;
