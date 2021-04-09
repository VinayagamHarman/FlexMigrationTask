/**
 * Generated by Apache Royale Compiler from org/apache/royale/textLayout/events/TextLayoutEvent.as
 * org.apache.royale.textLayout.events.TextLayoutEvent
 *
 * @fileoverview
 *
 * @suppress {missingRequire|checkTypes|accessControls}
 */

goog.provide('org.apache.royale.textLayout.events.TextLayoutEvent');
/* Royale Dependency List: org.apache.royale.events.IRoyaleEvent,XML*/

goog.require('org.apache.royale.events.Event');



/**
 *  The TextLayoutEvent class represents the event object passed to
 *  the event listener for many Text Layout events.
 * @playerversion Flash 10
 * @playerversion AIR 1.5
 * @langversion 3.0
 * @constructor
 * @extends {org.apache.royale.events.Event}
 * @param {string} type
 * @param {boolean=} bubbles
 * @param {boolean=} cancelable
 */
org.apache.royale.textLayout.events.TextLayoutEvent = function(type, bubbles, cancelable) {
  bubbles = typeof bubbles !== 'undefined' ? bubbles : false;
  cancelable = typeof cancelable !== 'undefined' ? cancelable : false;
  org.apache.royale.textLayout.events.TextLayoutEvent.base(this, 'constructor', type, bubbles, cancelable);
};
goog.inherits(org.apache.royale.textLayout.events.TextLayoutEvent, org.apache.royale.events.Event);


/**
 * Prevent renaming of class. Needed for reflection.
 */
goog.exportSymbol('org.apache.royale.textLayout.events.TextLayoutEvent', org.apache.royale.textLayout.events.TextLayoutEvent);


/**
 * @export
 * @nocollapse
 * @const
 * @type {string}
 */
org.apache.royale.textLayout.events.TextLayoutEvent.SCROLL = "scroll";


/** @asprivate 
 * @export
 * @override
 */
org.apache.royale.textLayout.events.TextLayoutEvent.prototype.cloneEvent = function() {
  return new org.apache.royale.textLayout.events.TextLayoutEvent(this.type, this.bubbles, this.cancelable);
};


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
org.apache.royale.textLayout.events.TextLayoutEvent.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'TextLayoutEvent', qName: 'org.apache.royale.textLayout.events.TextLayoutEvent', kind: 'class' }] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
org.apache.royale.textLayout.events.TextLayoutEvent.prototype.ROYALE_REFLECTION_INFO = function () {
  return {
    methods: function () {
      return {
        'TextLayoutEvent': { type: '', declaredBy: 'org.apache.royale.textLayout.events.TextLayoutEvent', parameters: function () { return [ 'String', false ,'Boolean', true ,'Boolean', true ]; }},
        'cloneEvent': { type: 'org.apache.royale.events.IRoyaleEvent', declaredBy: 'org.apache.royale.textLayout.events.TextLayoutEvent'}
      };
    }
  };
};
/**
 * @const
 * @type {number}
 */
org.apache.royale.textLayout.events.TextLayoutEvent.prototype.ROYALE_COMPILE_FLAGS = 10;
