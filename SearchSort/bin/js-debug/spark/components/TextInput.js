/**
 * Generated by Apache Royale Compiler from spark/components/TextInput.as
 * spark.components.TextInput
 *
 * @fileoverview
 *
 * @suppress {missingRequire|checkTypes|accessControls}
 */

goog.provide('spark.components.TextInput');
/* Royale Dependency List: mx.core.mx_internal,mx.events.FlexEvent,mx.events.FocusEvent,org.apache.royale.core.WrappedHTMLElement,org.apache.royale.events.Event,org.apache.royale.html.accessories.RestrictTextInputBead,org.apache.royale.html.util.addElementToWrapper,org.apache.royale.utils.Language,XML*/

goog.require('spark.components.supportClasses.SkinnableTextBase');



/**
 *  Constructor. 
 *  
 *  @langversion 3.0
 *  @playerversion Flash 10
 *  @playerversion AIR 1.5
 *  @productversion Royale 0.9.4
 * @constructor
 * @extends {spark.components.supportClasses.SkinnableTextBase}
 */
spark.components.TextInput = function() {
  spark.components.TextInput.base(this, 'constructor');
  this.typeNames = "TextInput";
};
goog.inherits(spark.components.TextInput, spark.components.supportClasses.SkinnableTextBase);


/**
 * Prevent renaming of class. Needed for reflection.
 */
goog.exportSymbol('spark.components.TextInput', spark.components.TextInput);


/**
 * @private
 * @type {boolean}
 */
spark.components.TextInput.prototype.spark_components_TextInput__editable = true;


/**
 * @private
 * @type {org.apache.royale.html.accessories.RestrictTextInputBead}
 */
spark.components.TextInput.prototype.spark_components_TextInput_restrictBead;


/**
 * @protected
 * @override
 */
spark.components.TextInput.prototype.createElement = function() {
  org.apache.royale.html.util.addElementToWrapper(this, 'input');
  this.element.setAttribute('type', 'text');
  goog.events.listen(this.element, 'input', org.apache.royale.utils.Language.closure(this.textChangeHandler, this, 'textChangeHandler'));
  return this.element;
};


/**
 * @private
 * @type {boolean}
 */
spark.components.TextInput.prototype.spark_components_TextInput_inSetter;


/**
 *  dispatch change event in response to a textChange event
 *
 *  @langversion 3.0
 *  @playerversion Flash 10.2
 *  @playerversion AIR 2.6
 *  @productversion Royale 0.0
 * @export
 * @param {org.apache.royale.events.Event} event
 */
spark.components.TextInput.prototype.textChangeHandler = function(event) {
  if (!this.spark_components_TextInput_inSetter) {
    this.dispatchEvent(new org.apache.royale.events.Event(org.apache.royale.events.Event.CHANGE));
  }
};


/**
 * @protected
 * @override
 */
spark.components.TextInput.prototype.focusOutHandler = function(event) {
  spark.components.TextInput.superClass_.focusOutHandler.apply(this, [ event] );
  this.dispatchEvent(new mx.events.FlexEvent(mx.events.FlexEvent.VALUE_COMMIT));
};


spark.components.TextInput.prototype.get__text = function() {
  
  return org.apache.royale.utils.Language.as(this.element, HTMLInputElement).value;
};


spark.components.TextInput.prototype.set__text = function(value) {
  var /** @type {boolean} */ changed = false;
  
  if (value != org.apache.royale.utils.Language.as(this.element, HTMLInputElement).value) {
    org.apache.royale.utils.Language.as(this.element, HTMLInputElement).value = value;
    changed = true;
  }
  if (changed) {
    this.dispatchEvent(new org.apache.royale.events.Event("textChanged"));
    this.dispatchEvent(new mx.events.FlexEvent(mx.events.FlexEvent.VALUE_COMMIT));
  }
};


spark.components.TextInput.prototype.get__editable = function() {
  return this.spark_components_TextInput__editable;
};


spark.components.TextInput.prototype.set__editable = function(value) {
  this.spark_components_TextInput__editable = value;
  if (value == false) {
    org.apache.royale.utils.Language.as(this.element, HTMLInputElement).readOnly = true;
  } else {
    org.apache.royale.utils.Language.as(this.element, HTMLInputElement).readOnly = false;
  }
};


spark.components.TextInput.prototype.set__maxChars = function(value) {
  spark.components.TextInput.superClass_.set__maxChars.apply(this, [ value] );
  org.apache.royale.utils.Language.as(this.element, HTMLInputElement).maxLength = value;
};


spark.components.TextInput.prototype.get__restrict = function() {
  if (!this.spark_components_TextInput_restrictBead)
    return null;
  return this.spark_components_TextInput_restrictBead.restrict;
};


spark.components.TextInput.prototype.set__restrict = function(value) {
  if (!this.spark_components_TextInput_restrictBead) {
    this.spark_components_TextInput_restrictBead = new org.apache.royale.html.accessories.RestrictTextInputBead();
    this.addBead(this.spark_components_TextInput_restrictBead);
  }
  this.spark_components_TextInput_restrictBead.restrict = value;
};


spark.components.TextInput.prototype.get__widthInChars = function() {
  return 0;
};


spark.components.TextInput.prototype.set__widthInChars = function(value) {
};


Object.defineProperties(spark.components.TextInput.prototype, /** @lends {spark.components.TextInput.prototype} */ {
/**
  * @export
  * @type {string} */
text: {
get: spark.components.TextInput.prototype.get__text,
set: spark.components.TextInput.prototype.set__text},
/**
  * @export
  * @type {boolean} */
editable: {
get: spark.components.TextInput.prototype.get__editable,
set: spark.components.TextInput.prototype.set__editable},
/**
  * @export
  * @type {number} */
maxChars: {
get: spark.components.supportClasses.SkinnableTextBase.prototype.get__maxChars,
set: spark.components.TextInput.prototype.set__maxChars},
/**
  * @export
  * @type {string} */
restrict: {
get: spark.components.TextInput.prototype.get__restrict,
set: spark.components.TextInput.prototype.set__restrict},
/**
  * @export
  * @type {number} */
widthInChars: {
get: spark.components.TextInput.prototype.get__widthInChars,
set: spark.components.TextInput.prototype.set__widthInChars}}
);


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
spark.components.TextInput.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'TextInput', qName: 'spark.components.TextInput', kind: 'class' }] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
spark.components.TextInput.prototype.ROYALE_REFLECTION_INFO = function () {
  return {
    accessors: function () {
      return {
        'text': { type: 'String', access: 'readwrite', declaredBy: 'spark.components.TextInput', metadata: function () { return [ { name: 'Bindable', args: [ { key: '', value: 'change' } ] }, { name: 'Bindable', args: [ { key: '', value: 'textChanged' } ] } ]; }},
        'editable': { type: 'Boolean', access: 'readwrite', declaredBy: 'spark.components.TextInput'},
        'maxChars': { type: 'int', access: 'writeonly', declaredBy: 'spark.components.TextInput'},
        'restrict': { type: 'String', access: 'readwrite', declaredBy: 'spark.components.TextInput'},
        'widthInChars': { type: 'Number', access: 'readwrite', declaredBy: 'spark.components.TextInput'}
      };
    },
    methods: function () {
      return {
        'TextInput': { type: '', declaredBy: 'spark.components.TextInput'},
        'textChangeHandler': { type: 'void', declaredBy: 'spark.components.TextInput', parameters: function () { return [ 'org.apache.royale.events.Event', false ]; }}
      };
    }
  };
};
/**
 * @const
 * @type {number}
 */
spark.components.TextInput.prototype.ROYALE_COMPILE_FLAGS = 10;
