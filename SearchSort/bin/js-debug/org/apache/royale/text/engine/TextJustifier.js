/**
 * Generated by Apache Royale Compiler from org/apache/royale/text/engine/TextJustifier.as
 * org.apache.royale.text.engine.TextJustifier
 *
 * @fileoverview
 *
 * @suppress {missingRequire|checkTypes|accessControls}
 */

goog.provide('org.apache.royale.text.engine.TextJustifier');
/* Royale Dependency List: org.apache.royale.text.engine.LineJustification*/




/**
 * @constructor
 * @param {string} locale
 * @param {string} lineJustification
 */
org.apache.royale.text.engine.TextJustifier = function(locale, lineJustification) {
  this.org_apache_royale_text_engine_TextJustifier__locale = locale;
  this.lineJustification = lineJustification;
};


/**
 * Prevent renaming of class. Needed for reflection.
 */
goog.exportSymbol('org.apache.royale.text.engine.TextJustifier', org.apache.royale.text.engine.TextJustifier);


/**
 * @export
 * @type {string}
 */
org.apache.royale.text.engine.TextJustifier.prototype.lineJustification;


/**
 * @private
 * @type {string}
 */
org.apache.royale.text.engine.TextJustifier.prototype.org_apache_royale_text_engine_TextJustifier__locale;


/**
 * @export
 * @return {org.apache.royale.text.engine.TextJustifier}
 */
org.apache.royale.text.engine.TextJustifier.prototype.clone = function() {
  return new org.apache.royale.text.engine.TextJustifier(this.locale, this.lineJustification);
};


/**
 * @export
 * @param {string} locale
 * @return {org.apache.royale.text.engine.TextJustifier}
 */
org.apache.royale.text.engine.TextJustifier.getJustifierForLocale = function(locale) {
  return new org.apache.royale.text.engine.TextJustifier(locale, org.apache.royale.text.engine.LineJustification.UNJUSTIFIED);
};


org.apache.royale.text.engine.TextJustifier.prototype.get__locale = function() {
  return this.org_apache_royale_text_engine_TextJustifier__locale;
};


Object.defineProperties(org.apache.royale.text.engine.TextJustifier.prototype, /** @lends {org.apache.royale.text.engine.TextJustifier.prototype} */ {
/**
  * @export
  * @type {string} */
locale: {
get: org.apache.royale.text.engine.TextJustifier.prototype.get__locale}}
);


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
org.apache.royale.text.engine.TextJustifier.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'TextJustifier', qName: 'org.apache.royale.text.engine.TextJustifier', kind: 'class' }] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
org.apache.royale.text.engine.TextJustifier.prototype.ROYALE_REFLECTION_INFO = function () {
  return {
    variables: function () {
      return {
        'lineJustification': { type: 'String', get_set: function (/** org.apache.royale.text.engine.TextJustifier */ inst, /** * */ v) {return v !== undefined ? inst.lineJustification = v : inst.lineJustification;}}
      };
    },
    accessors: function () {
      return {
        'locale': { type: 'String', access: 'readonly', declaredBy: 'org.apache.royale.text.engine.TextJustifier'}
      };
    },
    methods: function () {
      return {
        'TextJustifier': { type: '', declaredBy: 'org.apache.royale.text.engine.TextJustifier', parameters: function () { return [ 'String', false ,'String', false ]; }},
        'clone': { type: 'org.apache.royale.text.engine.TextJustifier', declaredBy: 'org.apache.royale.text.engine.TextJustifier'},
        '|getJustifierForLocale': { type: 'org.apache.royale.text.engine.TextJustifier', declaredBy: 'org.apache.royale.text.engine.TextJustifier', parameters: function () { return [ 'String', false ]; }}
      };
    }
  };
};
/**
 * @const
 * @type {number}
 */
org.apache.royale.text.engine.TextJustifier.prototype.ROYALE_COMPILE_FLAGS = 10;
