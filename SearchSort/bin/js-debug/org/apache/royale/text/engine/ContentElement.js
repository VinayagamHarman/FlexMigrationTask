/**
 * Generated by Apache Royale Compiler from org/apache/royale/text/engine/ContentElement.as
 * org.apache.royale.text.engine.ContentElement
 *
 * @fileoverview
 *
 * @suppress {missingRequire|checkTypes|accessControls}
 */

goog.provide('org.apache.royale.text.engine.ContentElement');
/* Royale Dependency List: org.apache.royale.events.EventDispatcher,org.apache.royale.text.engine.ElementFormat,org.apache.royale.text.engine.GroupElement,org.apache.royale.text.engine.ITextBlock*/




/**
 * @constructor
 * @param {org.apache.royale.text.engine.ElementFormat=} elementFormat
 * @param {org.apache.royale.events.EventDispatcher=} eventMirror
 * @param {string=} textRotation
 */
org.apache.royale.text.engine.ContentElement = function(elementFormat, eventMirror, textRotation) {
  elementFormat = typeof elementFormat !== 'undefined' ? elementFormat : null;
  eventMirror = typeof eventMirror !== 'undefined' ? eventMirror : null;
  textRotation = typeof textRotation !== 'undefined' ? textRotation : "rotate0";
  this.elementFormat = elementFormat;
  this.eventMirror = eventMirror;
  this.textRotation = textRotation;
};


/**
 * Prevent renaming of class. Needed for reflection.
 */
goog.exportSymbol('org.apache.royale.text.engine.ContentElement', org.apache.royale.text.engine.ContentElement);


/**
 * @export
 * @nocollapse
 * @const
 * @type {number}
 */
org.apache.royale.text.engine.ContentElement.GRAPHIC_ELEMENT = 0xfdef;


/**
 * @private
 * @type {org.apache.royale.text.engine.ElementFormat}
 */
org.apache.royale.text.engine.ContentElement.prototype.org_apache_royale_text_engine_ContentElement__elementFormat;


/**
 * @export
 * @type {org.apache.royale.events.EventDispatcher}
 */
org.apache.royale.text.engine.ContentElement.prototype.eventMirror;


/**
 * @private
 * @type {org.apache.royale.text.engine.GroupElement}
 */
org.apache.royale.text.engine.ContentElement.prototype.org_apache_royale_text_engine_ContentElement__groupElement;


/**
 * @private
 * @type {org.apache.royale.text.engine.ITextBlock}
 */
org.apache.royale.text.engine.ContentElement.prototype.org_apache_royale_text_engine_ContentElement__textBlock;


/**
 * @export
 * @type {string}
 */
org.apache.royale.text.engine.ContentElement.prototype.textRotation;


/**
 * @export
 * @type {*}
 */
org.apache.royale.text.engine.ContentElement.prototype.userData;


org.apache.royale.text.engine.ContentElement.prototype.get__elementFormat = function() {
  return this.org_apache_royale_text_engine_ContentElement__elementFormat;
};


org.apache.royale.text.engine.ContentElement.prototype.set__elementFormat = function(value) {
  this.org_apache_royale_text_engine_ContentElement__elementFormat = value;
};


org.apache.royale.text.engine.ContentElement.prototype.get__groupElement = function() {
  if (this.org_apache_royale_text_engine_ContentElement__groupElement)
    return this.org_apache_royale_text_engine_ContentElement__groupElement.getElementIndex(this) < 0 ? null : this.org_apache_royale_text_engine_ContentElement__groupElement;
  return null;
};


org.apache.royale.text.engine.ContentElement.prototype.set__groupElement = function(value) {
  this.org_apache_royale_text_engine_ContentElement__groupElement = value;
};


org.apache.royale.text.engine.ContentElement.prototype.get__rawText = function() {
  return null;
};


org.apache.royale.text.engine.ContentElement.prototype.get__text = function() {
  return null;
};


org.apache.royale.text.engine.ContentElement.prototype.get__textBlock = function() {
  if (this.groupElement)
    return this.groupElement.textBlock;
  return this.org_apache_royale_text_engine_ContentElement__textBlock;
};


org.apache.royale.text.engine.ContentElement.prototype.set__textBlock = function(value) {
  this.org_apache_royale_text_engine_ContentElement__textBlock = value;
};


org.apache.royale.text.engine.ContentElement.prototype.get__textBlockBeginIndex = function() {
  return (this.textBlock ? this.textBlock.getRelativeStart(this) : 0) >> 0;
};


Object.defineProperties(org.apache.royale.text.engine.ContentElement.prototype, /** @lends {org.apache.royale.text.engine.ContentElement.prototype} */ {
/**
  * @export
  * @type {org.apache.royale.text.engine.ElementFormat} */
elementFormat: {
get: org.apache.royale.text.engine.ContentElement.prototype.get__elementFormat,
set: org.apache.royale.text.engine.ContentElement.prototype.set__elementFormat},
/**
  * @export
  * @type {org.apache.royale.text.engine.GroupElement} */
groupElement: {
get: org.apache.royale.text.engine.ContentElement.prototype.get__groupElement,
set: org.apache.royale.text.engine.ContentElement.prototype.set__groupElement},
/**
  * @export
  * @type {string} */
rawText: {
get: org.apache.royale.text.engine.ContentElement.prototype.get__rawText},
/**
  * @export
  * @type {string} */
text: {
get: org.apache.royale.text.engine.ContentElement.prototype.get__text},
/**
  * @export
  * @type {org.apache.royale.text.engine.ITextBlock} */
textBlock: {
get: org.apache.royale.text.engine.ContentElement.prototype.get__textBlock,
set: org.apache.royale.text.engine.ContentElement.prototype.set__textBlock},
/**
  * @export
  * @type {number} */
textBlockBeginIndex: {
get: org.apache.royale.text.engine.ContentElement.prototype.get__textBlockBeginIndex}}
);


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
org.apache.royale.text.engine.ContentElement.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'ContentElement', qName: 'org.apache.royale.text.engine.ContentElement', kind: 'class' }] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
org.apache.royale.text.engine.ContentElement.prototype.ROYALE_REFLECTION_INFO = function () {
  return {
    variables: function () {
      return {
        'eventMirror': { type: 'org.apache.royale.events.EventDispatcher', get_set: function (/** org.apache.royale.text.engine.ContentElement */ inst, /** * */ v) {return v !== undefined ? inst.eventMirror = v : inst.eventMirror;}},
        'textRotation': { type: 'String', get_set: function (/** org.apache.royale.text.engine.ContentElement */ inst, /** * */ v) {return v !== undefined ? inst.textRotation = v : inst.textRotation;}},
        'userData': { type: '*', get_set: function f(/** org.apache.royale.text.engine.ContentElement */ inst, /** * */ v) {return v !== f ? inst.userData = v : inst.userData;}}
      };
    },
    accessors: function () {
      return {
        'elementFormat': { type: 'org.apache.royale.text.engine.ElementFormat', access: 'readwrite', declaredBy: 'org.apache.royale.text.engine.ContentElement'},
        'groupElement': { type: 'org.apache.royale.text.engine.GroupElement', access: 'readwrite', declaredBy: 'org.apache.royale.text.engine.ContentElement'},
        'rawText': { type: 'String', access: 'readonly', declaredBy: 'org.apache.royale.text.engine.ContentElement'},
        'text': { type: 'String', access: 'readonly', declaredBy: 'org.apache.royale.text.engine.ContentElement'},
        'textBlock': { type: 'org.apache.royale.text.engine.ITextBlock', access: 'readwrite', declaredBy: 'org.apache.royale.text.engine.ContentElement'},
        'textBlockBeginIndex': { type: 'int', access: 'readonly', declaredBy: 'org.apache.royale.text.engine.ContentElement'}
      };
    },
    methods: function () {
      return {
        'ContentElement': { type: '', declaredBy: 'org.apache.royale.text.engine.ContentElement', parameters: function () { return [ 'org.apache.royale.text.engine.ElementFormat', true ,'org.apache.royale.events.EventDispatcher', true ,'String', true ]; }}
      };
    }
  };
};
/**
 * @const
 * @type {number}
 */
org.apache.royale.text.engine.ContentElement.prototype.ROYALE_COMPILE_FLAGS = 10;
