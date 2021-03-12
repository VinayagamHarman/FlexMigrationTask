/**
 * Generated by Apache Royale Compiler from org/apache/royale/events/MouseEvent.as
 * org.apache.royale.events.MouseEvent
 *
 * @fileoverview
 *
 * @suppress {missingRequire|checkTypes|accessControls}
 */

goog.provide('org.apache.royale.events.MouseEvent');
/* Royale Dependency List: org.apache.royale.events.IEventDispatcher,org.apache.royale.events.getTargetWrapper,org.apache.royale.geom.Point,org.apache.royale.utils.PointUtils*/
/* Royale Static Dependency List: org.apache.royale.core.ElementWrapper,org.apache.royale.events.utils.MouseEventConverter*/

goog.require('org.apache.royale.core.ElementWrapper');
goog.require('org.apache.royale.events.Event');
goog.require('org.apache.royale.events.IRoyaleEvent');
goog.require('org.apache.royale.events.utils.MouseEventConverter');
goog.require('org.apache.royale.core.IBead');
goog.require('org.apache.royale.core.IStrand');
goog.require('org.apache.royale.core.WrappedHTMLElement');
goog.require('org.apache.royale.events.BrowserEvent');
goog.require('org.apache.royale.events.ElementEvents');
goog.require('org.apache.royale.events.EventDispatcher');
goog.require('org.apache.royale.events.utils.EventUtils');
goog.require('org.apache.royale.utils.Language');
goog.require('org.apache.royale.events.IBrowserEvent');



/**
 *  Constructor.
 *
 *  @asparam type The name of the event.
 *  @asparam bubbles Whether the event bubbles.
 *  @asparam cancelable Whether the event can be canceled.
 *
 *  @langversion 3.0
 *  @playerversion Flash 10.2
 *  @playerversion AIR 2.6
 *  @productversion Royale 0.0
 * @constructor
 * @extends {org.apache.royale.events.Event}
 * @implements {org.apache.royale.events.IRoyaleEvent}
 * @implements {org.apache.royale.events.IBrowserEvent}
 * @param {string} type
 * @param {boolean=} bubbles
 * @param {boolean=} cancelable
 * @param {number=} localX
 * @param {number=} localY
 * @param {Object=} relatedObject
 * @param {boolean=} ctrlKey
 * @param {boolean=} altKey
 * @param {boolean=} shiftKey
 * @param {boolean=} buttonDown
 * @param {number=} delta
 * @param {boolean=} metaKey
 * @param {boolean=} controlKey
 * @param {number=} clickCount
 * @param {org.apache.royale.events.IEventDispatcher=} targetBeforeBubbling
 */
org.apache.royale.events.MouseEvent = function(type, bubbles, cancelable, localX, localY, relatedObject, ctrlKey, altKey, shiftKey, buttonDown, delta, metaKey, controlKey, clickCount, targetBeforeBubbling) {
  bubbles = typeof bubbles !== 'undefined' ? bubbles : false;
  cancelable = typeof cancelable !== 'undefined' ? cancelable : false;
  localX = typeof localX !== 'undefined' ? localX : NaN;
  localY = typeof localY !== 'undefined' ? localY : NaN;
  relatedObject = typeof relatedObject !== 'undefined' ? relatedObject : null;
  ctrlKey = typeof ctrlKey !== 'undefined' ? ctrlKey : false;
  altKey = typeof altKey !== 'undefined' ? altKey : false;
  shiftKey = typeof shiftKey !== 'undefined' ? shiftKey : false;
  buttonDown = typeof buttonDown !== 'undefined' ? buttonDown : false;
  delta = typeof delta !== 'undefined' ? delta : 0;
  metaKey = typeof metaKey !== 'undefined' ? metaKey : false;
  controlKey = typeof controlKey !== 'undefined' ? controlKey : false;
  clickCount = typeof clickCount !== 'undefined' ? clickCount : 0;
  targetBeforeBubbling = typeof targetBeforeBubbling !== 'undefined' ? targetBeforeBubbling : null;
  org.apache.royale.events.MouseEvent.base(this, 'constructor', type, bubbles, cancelable);
  this.localX = localX;
  this.localY = localY;
  this.relatedObject = relatedObject;
  this.ctrlKey = ctrlKey;
  this.altKey = altKey;
  this.shiftKey = shiftKey;
  this.buttonDown = buttonDown;
  this.delta = delta;
  this.metaKey = metaKey;
  this.clickCount = clickCount;
};
goog.inherits(org.apache.royale.events.MouseEvent, org.apache.royale.events.Event);


/**
 * Prevent renaming of class. Needed for reflection.
 */
goog.exportSymbol('org.apache.royale.events.MouseEvent', org.apache.royale.events.MouseEvent);


/**
 * @private
 * @param {string} s
 * @return {string}
 */
org.apache.royale.events.MouseEvent.platformConstant = function(s) {
  return s.toLowerCase();
};


/**
 * @export
 * @nocollapse
 * @const
 * @type {string}
 */
org.apache.royale.events.MouseEvent.MOUSE_DOWN;


/**
 * @export
 * @nocollapse
 * @const
 * @type {string}
 */
org.apache.royale.events.MouseEvent.MOUSE_MOVE;


/**
 * @export
 * @nocollapse
 * @const
 * @type {string}
 */
org.apache.royale.events.MouseEvent.MOUSE_UP;


/**
 * @export
 * @nocollapse
 * @const
 * @type {string}
 */
org.apache.royale.events.MouseEvent.MOUSE_OUT;


/**
 * @export
 * @nocollapse
 * @const
 * @type {string}
 */
org.apache.royale.events.MouseEvent.MOUSE_OVER;


/**
 * @export
 * @nocollapse
 * @const
 * @type {string}
 */
org.apache.royale.events.MouseEvent.ROLL_OVER;


/**
 * @export
 * @nocollapse
 * @const
 * @type {string}
 */
org.apache.royale.events.MouseEvent.ROLL_OUT;


/**
 * @export
 * @nocollapse
 * @const
 * @type {string}
 */
org.apache.royale.events.MouseEvent.CLICK = "click";


/**
 * @export
 * @nocollapse
 * @const
 * @type {string}
 */
org.apache.royale.events.MouseEvent.DOUBLE_CLICK = "dblclick";


/**
 * @export
 * @nocollapse
 * @const
 * @type {string}
 */
org.apache.royale.events.MouseEvent.WHEEL = "wheel";


/**
 * @private
 * @type {Object}
 */
org.apache.royale.events.MouseEvent.prototype.org_apache_royale_events_MouseEvent_wrappedEvent;


/**
 * @export
 * @type {Object}
 */
org.apache.royale.events.MouseEvent.prototype.nativeEvent;


/**
 * @export
 * @param {goog.events.BrowserEvent} event
 */
org.apache.royale.events.MouseEvent.prototype.wrapEvent = function(event) {
  this.org_apache_royale_events_MouseEvent_wrappedEvent = event;
  this.nativeEvent = event.getBrowserEvent();
  this.org_apache_royale_events_MouseEvent__button = -1;
  this.org_apache_royale_events_MouseEvent__buttons = -1;
};


/**
 * @export
 * @type {Object}
 */
org.apache.royale.events.MouseEvent.prototype.relatedObject;


/**
 * @private
 * @type {boolean}
 */
org.apache.royale.events.MouseEvent.prototype.org_apache_royale_events_MouseEvent__ctrlKey;


/**
 * @private
 * @type {boolean}
 */
org.apache.royale.events.MouseEvent.prototype.org_apache_royale_events_MouseEvent__altKey;


/**
 * @private
 * @type {boolean}
 */
org.apache.royale.events.MouseEvent.prototype.org_apache_royale_events_MouseEvent__shiftKey;


/**
 * @private
 * @type {boolean}
 */
org.apache.royale.events.MouseEvent.prototype.org_apache_royale_events_MouseEvent__metaKey;


/**
 * @private
 * @type {number}
 */
org.apache.royale.events.MouseEvent.prototype.org_apache_royale_events_MouseEvent__buttons = -1;


/**
 * @private
 * @type {number}
 */
org.apache.royale.events.MouseEvent.prototype.org_apache_royale_events_MouseEvent__button = -1;


/**
 * @private
 * @type {number}
 */
org.apache.royale.events.MouseEvent.prototype.org_apache_royale_events_MouseEvent__delta = 0;


/**
 * @private
 * @type {number}
 */
org.apache.royale.events.MouseEvent.prototype.org_apache_royale_events_MouseEvent__deltaX = 0;


/**
 * @private
 * @type {number}
 */
org.apache.royale.events.MouseEvent.prototype.org_apache_royale_events_MouseEvent__deltaY = 0;


/**
 * @export
 * @type {number}
 */
org.apache.royale.events.MouseEvent.prototype.clickCount = 0;


/**
 * @private
 * @type {Object}
 */
org.apache.royale.events.MouseEvent.prototype.org_apache_royale_events_MouseEvent__target;


/**
 * @private
 * @type {number}
 */
org.apache.royale.events.MouseEvent.prototype.org_apache_royale_events_MouseEvent__localX;


/**
 * @private
 * @type {number}
 */
org.apache.royale.events.MouseEvent.prototype.org_apache_royale_events_MouseEvent__localY;


/**
 * @private
 * @type {org.apache.royale.geom.Point}
 */
org.apache.royale.events.MouseEvent.prototype.org_apache_royale_events_MouseEvent__stagePoint;


/**
 * Whether the default action has been prevented.
 *
 * @langversion 3.0
 * @playerversion Flash 10.2
 * @playerversion AIR 2.6
 * @productversion Royale 0.0
 * @export
 * @override
 */
org.apache.royale.events.MouseEvent.prototype.preventDefault = function() {
  if (this.org_apache_royale_events_MouseEvent_wrappedEvent)
    this.org_apache_royale_events_MouseEvent_wrappedEvent.preventDefault(); else {
    org.apache.royale.events.MouseEvent.superClass_.preventDefault.apply(this);
    this.org_apache_royale_events_MouseEvent__defaultPrevented = true;
  }
};


/**
 * @private
 * @type {boolean}
 */
org.apache.royale.events.MouseEvent.prototype.org_apache_royale_events_MouseEvent__defaultPrevented;


/**
 * @asprivate
 * @private
 * @return {boolean}
 */
org.apache.royale.events.MouseEvent.installRollOverMixin = function() {
  window.addEventListener(org.apache.royale.events.MouseEvent.MOUSE_OVER, org.apache.royale.events.MouseEvent.mouseOverHandler, false);
  return true;
};


/**
 * @asparam e The event.
 * RollOver/RollOut is entirely implemented in mouseOver because
 * when a parent and child share an edge, you only get a mouseout
 * for the child and not the parent and you need to send rollout
 * to both.  A similar issue exists for rollover.
 * @private
 * @param {org.apache.royale.events.MouseEvent} e
 */
org.apache.royale.events.MouseEvent.mouseOverHandler = function(e) {
  var /** @type {number} */ j = 0;
  var /** @type {number} */ m = 0;
  //var /** @type {number} */ j = 0;
  //var /** @type {number} */ m = 0;
  var /** @type {Array} */ outs;
  var /** @type {MouseEvent} */ me;
  var /** @type {Object} */ parent;
  var /** @type {Object} */ target = e.target.royale_wrapper;
  if (target == null)
    return;
  var /** @type {Array} */ targets = org.apache.royale.events.MouseEvent.targets;
  var /** @type {number} */ index = (targets.indexOf(target)) >> 0;
  if (index != -1) {
    outs = targets.slice(index + 1);
    m = (outs.length) >> 0;
    for (j = 0; j < m; j++) {
      me = org.apache.royale.events.MouseEvent.makeMouseEvent(org.apache.royale.events.MouseEvent.ROLL_OUT, e);
      outs[j].element.dispatchEvent(me);
    }
    org.apache.royale.events.MouseEvent.targets = targets.slice(0, index + 1);
  } else {
    var /** @type {Array} */ newTargets = [target];
    if (!('parent' in target))
      parent = null;
    else
      parent = target.parent;
    while (parent) {
      index = (targets.indexOf(parent)) >> 0;
      if (index == -1) {
        newTargets.unshift(parent);
        if (!('parent' in parent))
          break;
        parent = parent.parent;
      } else {
        outs = targets.slice(index + 1);
        m = (outs.length) >> 0;
        for (j = 0; j < m; j++) {
          me = org.apache.royale.events.MouseEvent.makeMouseEvent(org.apache.royale.events.MouseEvent.ROLL_OUT, e);
          outs[j].element.dispatchEvent(me);
        }
        targets = targets.slice(0, index + 1);
        break;
      }
    }
    var /** @type {number} */ n = (newTargets.length) >> 0;
    for (var /** @type {number} */ i = 0; i < n; i++) {
      me = org.apache.royale.events.MouseEvent.makeMouseEvent(org.apache.royale.events.MouseEvent.ROLL_OVER, e);
      newTargets[i].element.dispatchEvent(me);
    }
    org.apache.royale.events.MouseEvent.targets = targets.concat(newTargets);
  }
};


/**
 * @private
 * @type {boolean}
 */
org.apache.royale.events.MouseEvent.rollOverMixin;


/**
 * @private
 * @type {Array}
 */
org.apache.royale.events.MouseEvent.targets = [];


/**
 * @asparam {string} type The event type.
 * @asparam {Event} e The mouse event.
 * @asreturn {MouseEvent} The new event.
 * @private
 * @param {string} type
 * @return {MouseEvent}
 */
org.apache.royale.events.MouseEvent.makeMouseEvent = function(type, e) {
  var /** @type {MouseEvent} */ out = org.apache.royale.events.MouseEvent.createMouseEvent(type, false, false, {view:e.view, detail:e.detail, screenX:e.screenX, screenY:e.screenY, clientX:e.clientX, clientY:e.clientY, ctrlKey:e.ctrlKey, altKey:e.altKey, shiftKey:e.shiftKey, metaKey:e.metaKey, button:e.button, relatedTarget:e.relatedTarget});
  return out;
};


/**
 * Create a copy/clone of the Event object.
 *
 * @langversion 3.0
 * @playerversion Flash 10.2
 * @playerversion AIR 2.6
 * @productversion Royale 0.0
 * @export
 * @override
 */
org.apache.royale.events.MouseEvent.prototype.cloneEvent = function() {
  return new org.apache.royale.events.MouseEvent(this.type, this.bubbles, this.cancelable, this.localX, this.localY, this.relatedObject, this.ctrlKey, this.altKey, this.shiftKey, this.buttonDown, this.delta);
};


/**
 * @langversion 3.0
 * @playerversion Flash 10.2
 * @playerversion AIR 2.6
 * @productversion Royale 0.9
 * @export
 * @override
 */
org.apache.royale.events.MouseEvent.prototype.stopImmediatePropagation = function() {
  if (this.org_apache_royale_events_MouseEvent_wrappedEvent) {
    this.org_apache_royale_events_MouseEvent_wrappedEvent.stopPropagation();
    this.nativeEvent.stopImmediatePropagation();
  }
};


/**
 * @langversion 3.0
 * @playerversion Flash 10.2
 * @playerversion AIR 2.6
 * @productversion Royale 0.9
 * @export
 * @override
 */
org.apache.royale.events.MouseEvent.prototype.stopPropagation = function() {
  if (this.org_apache_royale_events_MouseEvent_wrappedEvent)
    this.org_apache_royale_events_MouseEvent_wrappedEvent.stopPropagation();
};


/**
 * @export
 * @return {boolean}
 */
org.apache.royale.events.MouseEvent.setupConverter = function() {
  org.apache.royale.core.ElementWrapper.converterMap["MouseEvent"] = org.apache.royale.events.utils.MouseEventConverter.convert;
  org.apache.royale.events.MouseEvent._useNativeConstructor = typeof(window.MouseEvent) == 'function';
  return true;
};


/**
 * @export
 * @nocollapse
 * @type {boolean}
 */
org.apache.royale.events.MouseEvent.initialized;


/**
 * @private
 * @type {boolean}
 */
org.apache.royale.events.MouseEvent._useNativeConstructor;


/**
 * @royaleignorecoercion MouseEventInit
 * @export
 * @param {string} type
 * @param {boolean=} bubbles
 * @param {boolean=} cancelable
 * @param {Object=} params
 * @return {Object}
 */
org.apache.royale.events.MouseEvent.createMouseEvent = function(type, bubbles, cancelable, params) {
  bubbles = typeof bubbles !== 'undefined' ? bubbles : false;
  cancelable = typeof cancelable !== 'undefined' ? cancelable : false;
  params = typeof params !== 'undefined' ? params : null;
  var /** @type {Object} */ mouseEvent = null;
  if (!params)
    params = {};
  if (org.apache.royale.events.MouseEvent._useNativeConstructor) {
    params.bubbles = bubbles;
    params.cancelable = cancelable;
    mouseEvent = new MouseEvent(type, params);
  } else {
    mouseEvent = document.createEvent('MouseEvent');
    mouseEvent.initMouseEvent(type, bubbles, cancelable, params.view, params.detail, params.screenX, params.screenY, params.clientX, params.clientY, params.ctrlKey, params.altKey, params.shiftKey, params.metaKey, params.button, params.relatedTarget);
  }
  return mouseEvent;
};


org.apache.royale.events.MouseEvent.prototype.get__ctrlKey = function() {
  return !!(this.org_apache_royale_events_MouseEvent_wrappedEvent ? this.org_apache_royale_events_MouseEvent_wrappedEvent.ctrlKey : this.org_apache_royale_events_MouseEvent__ctrlKey);
};


org.apache.royale.events.MouseEvent.prototype.set__ctrlKey = function(value) {
  if (this.org_apache_royale_events_MouseEvent_wrappedEvent)
    this.org_apache_royale_events_MouseEvent_wrappedEvent.ctrlKey = value;
  else
    this.org_apache_royale_events_MouseEvent__ctrlKey = value;
};


org.apache.royale.events.MouseEvent.prototype.get__altKey = function() {
  return !!(this.org_apache_royale_events_MouseEvent_wrappedEvent ? this.org_apache_royale_events_MouseEvent_wrappedEvent.altKey : this.org_apache_royale_events_MouseEvent__altKey);
};


org.apache.royale.events.MouseEvent.prototype.set__altKey = function(value) {
  if (this.org_apache_royale_events_MouseEvent_wrappedEvent)
    this.org_apache_royale_events_MouseEvent_wrappedEvent.altKey = value;
  else
    this.org_apache_royale_events_MouseEvent__altKey = value;
};


org.apache.royale.events.MouseEvent.prototype.get__shiftKey = function() {
  return !!(this.org_apache_royale_events_MouseEvent_wrappedEvent ? this.org_apache_royale_events_MouseEvent_wrappedEvent.shiftKey : this.org_apache_royale_events_MouseEvent__shiftKey);
};


org.apache.royale.events.MouseEvent.prototype.set__shiftKey = function(value) {
  if (this.org_apache_royale_events_MouseEvent_wrappedEvent)
    this.org_apache_royale_events_MouseEvent_wrappedEvent.shiftKey = value;
  else
    this.org_apache_royale_events_MouseEvent__shiftKey = value;
};


org.apache.royale.events.MouseEvent.prototype.get__metaKey = function() {
  return !!(this.org_apache_royale_events_MouseEvent_wrappedEvent ? this.org_apache_royale_events_MouseEvent_wrappedEvent.metaKey : this.org_apache_royale_events_MouseEvent__metaKey);
};


org.apache.royale.events.MouseEvent.prototype.set__metaKey = function(value) {
  if (this.org_apache_royale_events_MouseEvent_wrappedEvent)
    this.org_apache_royale_events_MouseEvent_wrappedEvent.metaKey = value;
  else
    this.org_apache_royale_events_MouseEvent__metaKey = value;
};


org.apache.royale.events.MouseEvent.prototype.get__buttonDown = function() {
  return this.button > -1 && this.button < 3;
};


org.apache.royale.events.MouseEvent.prototype.set__buttonDown = function(value) {
  this.org_apache_royale_events_MouseEvent__button = (value ? 0 : 9) >> 0;
};


org.apache.royale.events.MouseEvent.prototype.get__button = function() {
  if (this.org_apache_royale_events_MouseEvent__button > -1)
    return this.org_apache_royale_events_MouseEvent__button;
  return (this.nativeEvent["button"]) >> 0;
};


org.apache.royale.events.MouseEvent.prototype.set__button = function(value) {
  this.org_apache_royale_events_MouseEvent__button = value;
};


org.apache.royale.events.MouseEvent.prototype.get__buttons = function() {
  if (this.org_apache_royale_events_MouseEvent__buttons > -1)
    return this.org_apache_royale_events_MouseEvent__buttons;
  return (this.nativeEvent["buttons"]) >> 0;
};


org.apache.royale.events.MouseEvent.prototype.set__buttons = function(value) {
  this.org_apache_royale_events_MouseEvent__buttons = value;
};


org.apache.royale.events.MouseEvent.prototype.get__delta = function() {
  return (this.nativeEvent ? this.nativeEvent.deltaY : this.org_apache_royale_events_MouseEvent__delta) >> 0;
};


org.apache.royale.events.MouseEvent.prototype.set__delta = function(value) {
  this.org_apache_royale_events_MouseEvent__delta = value;
};


org.apache.royale.events.MouseEvent.prototype.get__deltaX = function() {
  return (this.nativeEvent ? this.nativeEvent.deltaX : this.org_apache_royale_events_MouseEvent__deltaX) >> 0;
};


org.apache.royale.events.MouseEvent.prototype.set__deltaX = function(value) {
  this.org_apache_royale_events_MouseEvent__deltaX = value;
};


org.apache.royale.events.MouseEvent.prototype.get__deltaY = function() {
  return (this.nativeEvent ? this.nativeEvent.deltaY : this.org_apache_royale_events_MouseEvent__deltaY) >> 0;
};


org.apache.royale.events.MouseEvent.prototype.set__deltaY = function(value) {
  this.org_apache_royale_events_MouseEvent__deltaY = value;
};


org.apache.royale.events.MouseEvent.prototype.get__target = function() {
  return this.org_apache_royale_events_MouseEvent_wrappedEvent ? org.apache.royale.events.getTargetWrapper(this.org_apache_royale_events_MouseEvent_wrappedEvent.target) : this.org_apache_royale_events_MouseEvent__target;
};


org.apache.royale.events.MouseEvent.prototype.set__target = function(value) {
  this.org_apache_royale_events_MouseEvent__target = value;
};


org.apache.royale.events.MouseEvent.prototype.get__currentTarget = function() {
  return this.org_apache_royale_events_MouseEvent_wrappedEvent ? org.apache.royale.events.getTargetWrapper(this.org_apache_royale_events_MouseEvent_wrappedEvent.currentTarget) : this.org_apache_royale_events_MouseEvent__target;
};


org.apache.royale.events.MouseEvent.prototype.set__currentTarget = function(value) {
  this.org_apache_royale_events_MouseEvent__target = value;
};


org.apache.royale.events.MouseEvent.prototype.get__targetBeforeBubbling = function() {
  return this.target;
};


org.apache.royale.events.MouseEvent.prototype.get__clientX = function() {
  return Number(this.org_apache_royale_events_MouseEvent_wrappedEvent ? this.org_apache_royale_events_MouseEvent_wrappedEvent.clientX : this.org_apache_royale_events_MouseEvent__localX);
};


org.apache.royale.events.MouseEvent.prototype.get__localX = function() {
  return this.org_apache_royale_events_MouseEvent_wrappedEvent ? this.org_apache_royale_events_MouseEvent_wrappedEvent.clientX - this.org_apache_royale_events_MouseEvent_wrappedEvent.currentTarget.getBoundingClientRect().left : this.org_apache_royale_events_MouseEvent__localX;
};


org.apache.royale.events.MouseEvent.prototype.set__localX = function(value) {
  this.org_apache_royale_events_MouseEvent__localX = value;
};


org.apache.royale.events.MouseEvent.prototype.get__clientY = function() {
  return Number(this.org_apache_royale_events_MouseEvent_wrappedEvent ? this.org_apache_royale_events_MouseEvent_wrappedEvent.clientY : this.org_apache_royale_events_MouseEvent__localY);
};


org.apache.royale.events.MouseEvent.prototype.get__localY = function() {
  return this.org_apache_royale_events_MouseEvent_wrappedEvent ? this.org_apache_royale_events_MouseEvent_wrappedEvent.clientY - this.org_apache_royale_events_MouseEvent_wrappedEvent.currentTarget.getBoundingClientRect().top : this.org_apache_royale_events_MouseEvent__localY;
};


org.apache.royale.events.MouseEvent.prototype.set__localY = function(value) {
  this.org_apache_royale_events_MouseEvent__localY = value;
};


org.apache.royale.events.MouseEvent.prototype.get__screenX = function() {
  if (this.org_apache_royale_events_MouseEvent_wrappedEvent)
    return Number(this.org_apache_royale_events_MouseEvent_wrappedEvent.screenX);
  if (!this.target)
    return this.localX;
  return this.org_apache_royale_events_MouseEvent_stagePoint.x;
};


org.apache.royale.events.MouseEvent.prototype.get__screenY = function() {
  if (this.org_apache_royale_events_MouseEvent_wrappedEvent)
    return Number(this.org_apache_royale_events_MouseEvent_wrappedEvent.screenY);
  if (!this.target)
    return this.localY;
  return this.org_apache_royale_events_MouseEvent_stagePoint.y;
};


org.apache.royale.events.MouseEvent.prototype.get__org_apache_royale_events_MouseEvent_stagePoint = function() {
  if (!this.org_apache_royale_events_MouseEvent__stagePoint) {
    var /** @type {org.apache.royale.geom.Point} */ localPoint = new org.apache.royale.geom.Point(this.localX, this.localY);
    this.org_apache_royale_events_MouseEvent__stagePoint = org.apache.royale.utils.PointUtils.localToGlobal(localPoint, this.target);
  }
  return this.org_apache_royale_events_MouseEvent__stagePoint;
};


org.apache.royale.events.MouseEvent.prototype.get__defaultPrevented = function() {
  return !!(this.org_apache_royale_events_MouseEvent_wrappedEvent ? this.org_apache_royale_events_MouseEvent_wrappedEvent.defaultPrevented : this.org_apache_royale_events_MouseEvent__defaultPrevented);
};


org.apache.royale.events.MouseEvent.prototype.set__defaultPrevented = function(value) {
  this.org_apache_royale_events_MouseEvent__defaultPrevented = value;
};


Object.defineProperties(org.apache.royale.events.MouseEvent.prototype, /** @lends {org.apache.royale.events.MouseEvent.prototype} */ {
/**
  * @export
  * @type {boolean} */
ctrlKey: {
get: org.apache.royale.events.MouseEvent.prototype.get__ctrlKey,
set: org.apache.royale.events.MouseEvent.prototype.set__ctrlKey},
/**
  * @export
  * @type {boolean} */
altKey: {
get: org.apache.royale.events.MouseEvent.prototype.get__altKey,
set: org.apache.royale.events.MouseEvent.prototype.set__altKey},
/**
  * @export
  * @type {boolean} */
shiftKey: {
get: org.apache.royale.events.MouseEvent.prototype.get__shiftKey,
set: org.apache.royale.events.MouseEvent.prototype.set__shiftKey},
/**
  * @export
  * @type {boolean} */
metaKey: {
get: org.apache.royale.events.MouseEvent.prototype.get__metaKey,
set: org.apache.royale.events.MouseEvent.prototype.set__metaKey},
/**
  * @export
  * @type {boolean} */
buttonDown: {
get: org.apache.royale.events.MouseEvent.prototype.get__buttonDown,
set: org.apache.royale.events.MouseEvent.prototype.set__buttonDown},
/**
  * @export
  * @type {number} */
button: {
get: org.apache.royale.events.MouseEvent.prototype.get__button,
set: org.apache.royale.events.MouseEvent.prototype.set__button},
/**
  * @export
  * @type {number} */
buttons: {
get: org.apache.royale.events.MouseEvent.prototype.get__buttons,
set: org.apache.royale.events.MouseEvent.prototype.set__buttons},
/**
  * @export
  * @type {number} */
delta: {
get: org.apache.royale.events.MouseEvent.prototype.get__delta,
set: org.apache.royale.events.MouseEvent.prototype.set__delta},
/**
  * @export
  * @type {number} */
deltaX: {
get: org.apache.royale.events.MouseEvent.prototype.get__deltaX,
set: org.apache.royale.events.MouseEvent.prototype.set__deltaX},
/**
  * @export
  * @type {number} */
deltaY: {
get: org.apache.royale.events.MouseEvent.prototype.get__deltaY,
set: org.apache.royale.events.MouseEvent.prototype.set__deltaY},
/**
  * @export
  * @type {Object} */
target: {
get: org.apache.royale.events.MouseEvent.prototype.get__target,
set: org.apache.royale.events.MouseEvent.prototype.set__target},
/**
  * @export
  * @type {Object} */
currentTarget: {
get: org.apache.royale.events.MouseEvent.prototype.get__currentTarget,
set: org.apache.royale.events.MouseEvent.prototype.set__currentTarget},
/**
  * @export
  * @type {Object} */
targetBeforeBubbling: {
get: org.apache.royale.events.MouseEvent.prototype.get__targetBeforeBubbling},
/**
  * @export
  * @type {number} */
clientX: {
get: org.apache.royale.events.MouseEvent.prototype.get__clientX},
/**
  * @export
  * @type {number} */
localX: {
get: org.apache.royale.events.MouseEvent.prototype.get__localX,
set: org.apache.royale.events.MouseEvent.prototype.set__localX},
/**
  * @export
  * @type {number} */
clientY: {
get: org.apache.royale.events.MouseEvent.prototype.get__clientY},
/**
  * @export
  * @type {number} */
localY: {
get: org.apache.royale.events.MouseEvent.prototype.get__localY,
set: org.apache.royale.events.MouseEvent.prototype.set__localY},
/**
  * @export
  * @type {number} */
screenX: {
get: org.apache.royale.events.MouseEvent.prototype.get__screenX},
/**
  * @export
  * @type {number} */
screenY: {
get: org.apache.royale.events.MouseEvent.prototype.get__screenY},
/**
  * @type {org.apache.royale.geom.Point} */
org_apache_royale_events_MouseEvent_stagePoint: {
get: org.apache.royale.events.MouseEvent.prototype.get__org_apache_royale_events_MouseEvent_stagePoint},
/**
  * @export
  * @type {boolean} */
defaultPrevented: {
get: org.apache.royale.events.MouseEvent.prototype.get__defaultPrevented,
set: org.apache.royale.events.MouseEvent.prototype.set__defaultPrevented}}
);

org.apache.royale.events.MouseEvent.MOUSE_DOWN = org.apache.royale.events.MouseEvent.platformConstant("mouseDown");
org.apache.royale.events.MouseEvent.MOUSE_MOVE = org.apache.royale.events.MouseEvent.platformConstant("mouseMove");
org.apache.royale.events.MouseEvent.MOUSE_UP = org.apache.royale.events.MouseEvent.platformConstant("mouseUp");
org.apache.royale.events.MouseEvent.MOUSE_OUT = org.apache.royale.events.MouseEvent.platformConstant("mouseOut");
org.apache.royale.events.MouseEvent.MOUSE_OVER = org.apache.royale.events.MouseEvent.platformConstant("mouseOver");
org.apache.royale.events.MouseEvent.ROLL_OVER = org.apache.royale.events.MouseEvent.platformConstant("rollOver");
org.apache.royale.events.MouseEvent.ROLL_OUT = org.apache.royale.events.MouseEvent.platformConstant("rollOut");
org.apache.royale.events.MouseEvent.rollOverMixin = org.apache.royale.events.MouseEvent.installRollOverMixin();
org.apache.royale.events.MouseEvent.initialized = org.apache.royale.events.MouseEvent.setupConverter();




/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
org.apache.royale.events.MouseEvent.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'MouseEvent', qName: 'org.apache.royale.events.MouseEvent', kind: 'class' }], interfaces: [org.apache.royale.events.IRoyaleEvent, org.apache.royale.events.IBrowserEvent] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
org.apache.royale.events.MouseEvent.prototype.ROYALE_REFLECTION_INFO = function () {
  return {
    variables: function () {
      return {
        'nativeEvent': { type: 'Object', get_set: function (/** org.apache.royale.events.MouseEvent */ inst, /** * */ v) {return v !== undefined ? inst.nativeEvent = v : inst.nativeEvent;}},
        'relatedObject': { type: 'Object', get_set: function (/** org.apache.royale.events.MouseEvent */ inst, /** * */ v) {return v !== undefined ? inst.relatedObject = v : inst.relatedObject;}},
        'clickCount': { type: 'int', get_set: function (/** org.apache.royale.events.MouseEvent */ inst, /** * */ v) {return v !== undefined ? inst.clickCount = v : inst.clickCount;}},
        '|initialized': { type: 'Boolean', get_set: function (/** * */ v) {return v !== undefined ? org.apache.royale.events.MouseEvent.initialized = v : org.apache.royale.events.MouseEvent.initialized;}}
      };
    },
    accessors: function () {
      return {
        'ctrlKey': { type: 'Boolean', access: 'readwrite', declaredBy: 'org.apache.royale.events.MouseEvent'},
        'altKey': { type: 'Boolean', access: 'readwrite', declaredBy: 'org.apache.royale.events.MouseEvent'},
        'shiftKey': { type: 'Boolean', access: 'readwrite', declaredBy: 'org.apache.royale.events.MouseEvent'},
        'metaKey': { type: 'Boolean', access: 'readwrite', declaredBy: 'org.apache.royale.events.MouseEvent'},
        'buttonDown': { type: 'Boolean', access: 'readwrite', declaredBy: 'org.apache.royale.events.MouseEvent'},
        'button': { type: 'int', access: 'readwrite', declaredBy: 'org.apache.royale.events.MouseEvent'},
        'buttons': { type: 'int', access: 'readwrite', declaredBy: 'org.apache.royale.events.MouseEvent'},
        'delta': { type: 'int', access: 'readwrite', declaredBy: 'org.apache.royale.events.MouseEvent'},
        'deltaX': { type: 'int', access: 'readwrite', declaredBy: 'org.apache.royale.events.MouseEvent'},
        'deltaY': { type: 'int', access: 'readwrite', declaredBy: 'org.apache.royale.events.MouseEvent'},
        'target': { type: 'Object', access: 'readwrite', declaredBy: 'org.apache.royale.events.MouseEvent'},
        'currentTarget': { type: 'Object', access: 'readwrite', declaredBy: 'org.apache.royale.events.MouseEvent'},
        'targetBeforeBubbling': { type: 'Object', access: 'readonly', declaredBy: 'org.apache.royale.events.MouseEvent'},
        'clientX': { type: 'Number', access: 'readonly', declaredBy: 'org.apache.royale.events.MouseEvent'},
        'localX': { type: 'Number', access: 'readwrite', declaredBy: 'org.apache.royale.events.MouseEvent'},
        'clientY': { type: 'Number', access: 'readonly', declaredBy: 'org.apache.royale.events.MouseEvent'},
        'localY': { type: 'Number', access: 'readwrite', declaredBy: 'org.apache.royale.events.MouseEvent'},
        'screenX': { type: 'Number', access: 'readonly', declaredBy: 'org.apache.royale.events.MouseEvent'},
        'screenY': { type: 'Number', access: 'readonly', declaredBy: 'org.apache.royale.events.MouseEvent'},
        'defaultPrevented': { type: 'Boolean', access: 'readwrite', declaredBy: 'org.apache.royale.events.MouseEvent'}
      };
    },
    methods: function () {
      return {
        'MouseEvent': { type: '', declaredBy: 'org.apache.royale.events.MouseEvent', parameters: function () { return [ 'String', false ,'Boolean', true ,'Boolean', true ,'Number', true ,'Number', true ,'Object', true ,'Boolean', true ,'Boolean', true ,'Boolean', true ,'Boolean', true ,'int', true ,'Boolean', true ,'Boolean', true ,'int', true ,'org.apache.royale.events.IEventDispatcher', true ]; }},
        'wrapEvent': { type: 'void', declaredBy: 'org.apache.royale.events.MouseEvent', parameters: function () { return [ 'goog.events.BrowserEvent', false ]; }},
        'preventDefault': { type: 'void', declaredBy: 'org.apache.royale.events.MouseEvent'},
        'cloneEvent': { type: 'org.apache.royale.events.IRoyaleEvent', declaredBy: 'org.apache.royale.events.MouseEvent'},
        'stopImmediatePropagation': { type: 'void', declaredBy: 'org.apache.royale.events.MouseEvent'},
        'stopPropagation': { type: 'void', declaredBy: 'org.apache.royale.events.MouseEvent'},
        '|setupConverter': { type: 'Boolean', declaredBy: 'org.apache.royale.events.MouseEvent'},
        '|createMouseEvent': { type: 'Object', declaredBy: 'org.apache.royale.events.MouseEvent', parameters: function () { return [ 'String', false ,'Boolean', true ,'Boolean', true ,'Object', true ]; }}
      };
    }
  };
};
/**
 * @const
 * @type {number}
 */
org.apache.royale.events.MouseEvent.prototype.ROYALE_COMPILE_FLAGS = 10;
