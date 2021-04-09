/**
 * Generated by Apache Royale Compiler from org/apache/royale/textLayout/events/FlowElementMouseEvent.as
 * org.apache.royale.textLayout.events.FlowElementMouseEvent
 *
 * @fileoverview
 *
 * @suppress {missingRequire|checkTypes|accessControls}
 */

goog.provide('org.apache.royale.textLayout.events.FlowElementMouseEvent');
/* Royale Dependency List: org.apache.royale.events.IRoyaleEvent,org.apache.royale.events.MouseEvent,org.apache.royale.textLayout.elements.IFlowElement,XML*/

goog.require('org.apache.royale.events.Event');



/** 
 * Creates an event object that contains information about mouse activity.
 * Event objects are passed as parameters to event listeners. Use the
 * constructor if you plan to manually dispatch an event. You do not need
 * to use the constructor to listen for FlowElementMouseEvent objects
 * generated by a FlowElement.
 * @asparam type  The type of the event. Event listeners can access this information through the
 * inherited <code>type</code> property. There are six types:
 * <code>FlowElementMouseEvent.CLICK</code>; <code>FlowElementMouseEvent.MOUSE_DOWN</code>; <code>FlowElementMouseEvent.MOUSE_MOVE</code>;
 * <code>FlowElementMouseEvent.MOUSE_UP</code>; <code>FlowElementMouseEvent.ROLL_OVER</code>; and <code>FlowElementMouseEvent.ROLL_OUT</code>.
 * @asparam bubbles Determines whether the Event object participates in the bubbling phase of the
 * event flow. FlowElementMouseEvent objects do not bubble.
 * @asparam cancelable Determines whether the Event object can be canceled. Event listeners can
 * access this information through the inherited <code>cancelable</code> property. FlowElementMouseEvent
 * objects can be cancelled. You can cancel the default behavior associated with this event
 * by calling the <code>preventDefault()</code> method in your event listener.
 * @asparam flowElement The instance of FlowElement, currently a LinkElement, associated with this
 * event. Event listeners can access this information through the <code>flowElement</code> property.
 * @asparam originalEvent The original mouse event that occurred on the flowElement. Event listeners can 
 * access this information through the <code>originalEvent</code> property.
 
 * @playerversion Flash 10
 * @playerversion AIR 1.5
 * @langversion 3.0 
 * @constructor
 * @extends {org.apache.royale.events.Event}
 * @param {string} type
 * @param {boolean=} bubbles
 * @param {boolean=} cancelable
 * @param {org.apache.royale.textLayout.elements.IFlowElement=} flowElement
 * @param {org.apache.royale.events.MouseEvent=} originalEvent
 */
org.apache.royale.textLayout.events.FlowElementMouseEvent = function(type, bubbles, cancelable, flowElement, originalEvent) {
  bubbles = typeof bubbles !== 'undefined' ? bubbles : false;
  cancelable = typeof cancelable !== 'undefined' ? cancelable : true;
  flowElement = typeof flowElement !== 'undefined' ? flowElement : null;
  originalEvent = typeof originalEvent !== 'undefined' ? originalEvent : null;
  org.apache.royale.textLayout.events.FlowElementMouseEvent.base(this, 'constructor', type, bubbles, cancelable);
  this.org_apache_royale_textLayout_events_FlowElementMouseEvent__flowElement = flowElement;
  this.org_apache_royale_textLayout_events_FlowElementMouseEvent__originalEvent = originalEvent;
};
goog.inherits(org.apache.royale.textLayout.events.FlowElementMouseEvent, org.apache.royale.events.Event);


/**
 * Prevent renaming of class. Needed for reflection.
 */
goog.exportSymbol('org.apache.royale.textLayout.events.FlowElementMouseEvent', org.apache.royale.textLayout.events.FlowElementMouseEvent);


/**
 * @export
 * @nocollapse
 * @const
 * @type {string}
 */
org.apache.royale.textLayout.events.FlowElementMouseEvent.MOUSE_DOWN = "mouseDown";


/**
 * @export
 * @nocollapse
 * @const
 * @type {string}
 */
org.apache.royale.textLayout.events.FlowElementMouseEvent.MOUSE_UP = "mouseUp";


/**
 * @export
 * @nocollapse
 * @const
 * @type {string}
 */
org.apache.royale.textLayout.events.FlowElementMouseEvent.MOUSE_MOVE = "mouseMove";


/**
 * @export
 * @nocollapse
 * @const
 * @type {string}
 */
org.apache.royale.textLayout.events.FlowElementMouseEvent.ROLL_OVER = "rollOver";


/**
 * @export
 * @nocollapse
 * @const
 * @type {string}
 */
org.apache.royale.textLayout.events.FlowElementMouseEvent.ROLL_OUT = "rollOut";


/**
 * @export
 * @nocollapse
 * @const
 * @type {string}
 */
org.apache.royale.textLayout.events.FlowElementMouseEvent.CLICK = "click";


/**
 * @private
 * @type {org.apache.royale.textLayout.elements.IFlowElement}
 */
org.apache.royale.textLayout.events.FlowElementMouseEvent.prototype.org_apache_royale_textLayout_events_FlowElementMouseEvent__flowElement;


/**
 * @private
 * @type {org.apache.royale.events.MouseEvent}
 */
org.apache.royale.textLayout.events.FlowElementMouseEvent.prototype.org_apache_royale_textLayout_events_FlowElementMouseEvent__originalEvent;


/** @asprivate 
 * @export
 * @override
 */
org.apache.royale.textLayout.events.FlowElementMouseEvent.prototype.cloneEvent = function() {
  return new org.apache.royale.textLayout.events.FlowElementMouseEvent(this.type, this.bubbles, this.cancelable, this.flowElement, this.originalEvent);
};


org.apache.royale.textLayout.events.FlowElementMouseEvent.prototype.get__flowElement = function() {
  return this.org_apache_royale_textLayout_events_FlowElementMouseEvent__flowElement;
};


org.apache.royale.textLayout.events.FlowElementMouseEvent.prototype.set__flowElement = function(value) {
  this.org_apache_royale_textLayout_events_FlowElementMouseEvent__flowElement = value;
};


org.apache.royale.textLayout.events.FlowElementMouseEvent.prototype.get__originalEvent = function() {
  return this.org_apache_royale_textLayout_events_FlowElementMouseEvent__originalEvent;
};


org.apache.royale.textLayout.events.FlowElementMouseEvent.prototype.set__originalEvent = function(value) {
  this.org_apache_royale_textLayout_events_FlowElementMouseEvent__originalEvent = value;
};


Object.defineProperties(org.apache.royale.textLayout.events.FlowElementMouseEvent.prototype, /** @lends {org.apache.royale.textLayout.events.FlowElementMouseEvent.prototype} */ {
/**
  * @export
  * @type {org.apache.royale.textLayout.elements.IFlowElement} */
flowElement: {
get: org.apache.royale.textLayout.events.FlowElementMouseEvent.prototype.get__flowElement,
set: org.apache.royale.textLayout.events.FlowElementMouseEvent.prototype.set__flowElement},
/**
  * @export
  * @type {org.apache.royale.events.MouseEvent} */
originalEvent: {
get: org.apache.royale.textLayout.events.FlowElementMouseEvent.prototype.get__originalEvent,
set: org.apache.royale.textLayout.events.FlowElementMouseEvent.prototype.set__originalEvent}}
);


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
org.apache.royale.textLayout.events.FlowElementMouseEvent.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'FlowElementMouseEvent', qName: 'org.apache.royale.textLayout.events.FlowElementMouseEvent', kind: 'class' }] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
org.apache.royale.textLayout.events.FlowElementMouseEvent.prototype.ROYALE_REFLECTION_INFO = function () {
  return {
    accessors: function () {
      return {
        'flowElement': { type: 'org.apache.royale.textLayout.elements.IFlowElement', access: 'readwrite', declaredBy: 'org.apache.royale.textLayout.events.FlowElementMouseEvent'},
        'originalEvent': { type: 'org.apache.royale.events.MouseEvent', access: 'readwrite', declaredBy: 'org.apache.royale.textLayout.events.FlowElementMouseEvent'}
      };
    },
    methods: function () {
      return {
        'FlowElementMouseEvent': { type: '', declaredBy: 'org.apache.royale.textLayout.events.FlowElementMouseEvent', parameters: function () { return [ 'String', false ,'Boolean', true ,'Boolean', true ,'org.apache.royale.textLayout.elements.IFlowElement', true ,'org.apache.royale.events.MouseEvent', true ]; }},
        'cloneEvent': { type: 'org.apache.royale.events.IRoyaleEvent', declaredBy: 'org.apache.royale.textLayout.events.FlowElementMouseEvent'}
      };
    }
  };
};
/**
 * @const
 * @type {number}
 */
org.apache.royale.textLayout.events.FlowElementMouseEvent.prototype.ROYALE_COMPILE_FLAGS = 10;
