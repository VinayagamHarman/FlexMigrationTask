/**
 * Generated by Apache Royale Compiler from spark/events/TextOperationEvent.as
 * spark.events.TextOperationEvent
 *
 * @fileoverview
 *
 * @suppress {missingRequire|checkTypes|accessControls}
 */

goog.provide('spark.events.TextOperationEvent');
/* Royale Dependency List: XML*/

goog.require('org.apache.royale.events.Event');



/**
 *  Constructor.
 *
 *  @asparam type The event type; indicates the action that caused the event.
 *
 *  @asparam bubbles Specifies whether the event
 *  can bubble up the display list hierarchy.
 *
 *  @asparam cancelable Specifies whether the behavior
 *  associated with the event can be prevented.
 *
 *  @asparam operation The FlowOperation object representing
 *  the editing operation being performed on the text by the user.
 *  
 *  @langversion 3.0
 *  @playerversion Flash 10
 *  @playerversion AIR 1.5
 *  @productversion Royale 0.9.4
 * @constructor
 * @extends {org.apache.royale.events.Event}
 * @param {string} type
 * @param {boolean=} bubbles
 * @param {boolean=} cancelable
 * @param {Object=} operation
 */
spark.events.TextOperationEvent = function(type, bubbles, cancelable, operation) {
  bubbles = typeof bubbles !== 'undefined' ? bubbles : false;
  cancelable = typeof cancelable !== 'undefined' ? cancelable : true;
  operation = typeof operation !== 'undefined' ? operation : null;
  spark.events.TextOperationEvent.base(this, 'constructor', type, bubbles, cancelable);
  this.operation = operation;
};
goog.inherits(spark.events.TextOperationEvent, org.apache.royale.events.Event);


/**
 * Prevent renaming of class. Needed for reflection.
 */
goog.exportSymbol('spark.events.TextOperationEvent', spark.events.TextOperationEvent);


/**
 * @export
 * @nocollapse
 * @const
 * @type {string}
 */
spark.events.TextOperationEvent.CHANGING = "changing";


/**
 * @export
 * @nocollapse
 * @const
 * @type {string}
 */
spark.events.TextOperationEvent.CHANGE = "change";


/**
 * @export
 * @type {Object}
 */
spark.events.TextOperationEvent.prototype.operation;


/**
 *  @asprivate
 * @export
 * @override
 */
spark.events.TextOperationEvent.prototype.cloneEvent = function() {
  return new spark.events.TextOperationEvent(this.type, this.bubbles, this.cancelable, this.operation);
};


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
spark.events.TextOperationEvent.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'TextOperationEvent', qName: 'spark.events.TextOperationEvent', kind: 'class' }] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
spark.events.TextOperationEvent.prototype.ROYALE_REFLECTION_INFO = function () {
  return {
    variables: function () {
      return {
        'operation': { type: 'Object', get_set: function (/** spark.events.TextOperationEvent */ inst, /** * */ v) {return v !== undefined ? inst.operation = v : inst.operation;}}
      };
    },
    methods: function () {
      return {
        'TextOperationEvent': { type: '', declaredBy: 'spark.events.TextOperationEvent', parameters: function () { return [ 'String', false ,'Boolean', true ,'Boolean', true ,'Object', true ]; }},
        'cloneEvent': { type: 'org.apache.royale.events.Event', declaredBy: 'spark.events.TextOperationEvent'}
      };
    }
  };
};
/**
 * @const
 * @type {number}
 */
spark.events.TextOperationEvent.prototype.ROYALE_COMPILE_FLAGS = 10;
