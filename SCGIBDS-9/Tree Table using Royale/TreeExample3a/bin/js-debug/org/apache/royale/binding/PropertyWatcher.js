/**
 * Generated by Apache Royale Compiler from org/apache/royale/binding/PropertyWatcher.as
 * org.apache.royale.binding.PropertyWatcher
 *
 * @fileoverview
 *
 * @suppress {missingRequire|checkTypes|accessControls}
 */

goog.provide('org.apache.royale.binding.PropertyWatcher');
/* Royale Dependency List: org.apache.royale.events.Event,org.apache.royale.events.IEventDispatcher,org.apache.royale.events.ValueChangeEvent,org.apache.royale.utils.Language*/

goog.require('org.apache.royale.binding.WatcherBase');



/**
 *  Constructor.
 *  
 *  @asparam source The object who's property we are watching.
 *  @asparam propertyName The name of the property we are watching.
 *  @asparam eventNames The name or array of names of events that get
 *  dispatched when the property changes.
 *  @asparam getterFunction  A function to call to get the value
 *  of the property changes if the property is not public.
 * 
 *  @langversion 3.0
 *  @playerversion Flash 10.2
 *  @playerversion AIR 2.6
 *  @productversion Royale 0.0
 * @constructor
 * @extends {org.apache.royale.binding.WatcherBase}
 * @param {Object} document
 * @param {string} propertyName
 * @param {Object} eventNames
 * @param {Function} getterFunction
 */
org.apache.royale.binding.PropertyWatcher = function(document, propertyName, eventNames, getterFunction) {
  org.apache.royale.binding.PropertyWatcher.base(this, 'constructor');
  this.document = document;
  this.propertyName = propertyName;
  this.getterFunction = getterFunction;
  this.eventNames = eventNames;
};
goog.inherits(org.apache.royale.binding.PropertyWatcher, org.apache.royale.binding.WatcherBase);


/**
 * Prevent renaming of class. Needed for reflection.
 */
goog.exportSymbol('org.apache.royale.binding.PropertyWatcher', org.apache.royale.binding.PropertyWatcher);


/**
 * @protected
 * @type {org.apache.royale.events.IEventDispatcher}
 */
org.apache.royale.binding.PropertyWatcher.prototype.dispatcher;


/**
 * @export
 * @type {Object}
 */
org.apache.royale.binding.PropertyWatcher.prototype.document;


/**
 * @export
 * @type {Object}
 */
org.apache.royale.binding.PropertyWatcher.prototype.source;


/**
 * @export
 * @type {string}
 */
org.apache.royale.binding.PropertyWatcher.prototype.propertyName;


/**
 * @export
 * @type {Object}
 */
org.apache.royale.binding.PropertyWatcher.prototype.eventNames;


/**
 * @export
 * @type {Function}
 */
org.apache.royale.binding.PropertyWatcher.prototype.getterFunction;


/**
 * @export
 * @type {Object}
 */
org.apache.royale.binding.PropertyWatcher.prototype.funcProps;


/**
 *  The event handler that gets called when
 *  the change events are dispatched.
 *  
 *  @asparam event The event that was dispatched to notify of a value change.
 * 
 *  @langversion 3.0
 *  @playerversion Flash 10.2
 *  @playerversion AIR 2.6
 *  @productversion Royale 0.0
 *  @royaleignorecoercion org.apache.royale.events.ValueChangeEvent
 * @protected
 * @param {org.apache.royale.events.Event} event
 */
org.apache.royale.binding.PropertyWatcher.prototype.changeHandler = function(event) {
  if (org.apache.royale.utils.Language.is(event, org.apache.royale.events.ValueChangeEvent)) {
    if (event.type == org.apache.royale.events.ValueChangeEvent.VALUE_CHANGE) {
      var /** @type {string} */ propName = event.propertyName;
      if (propName != this.propertyName) {
        return;
      }
    }
  }
  this.wrapUpdate(org.apache.royale.utils.Language.closure(this.org_apache_royale_binding_PropertyWatcher_updateProperty, this, 'org_apache_royale_binding_PropertyWatcher_updateProperty'));
  this.notifyListeners();
};


/**
 *  @asprivate
 *  @royaleignorecoercion org.apache.royale.binding.PropertyWatcher
 * @royaleignorecoercion org.apache.royale.events.IEventDispatcher
 * @export
 * @override
 */
org.apache.royale.binding.PropertyWatcher.prototype.parentChanged = function(parent) {
  if (this.dispatcher)
    this.org_apache_royale_binding_PropertyWatcher_adjustListeners(false);
  if (org.apache.royale.utils.Language.is(parent, org.apache.royale.binding.PropertyWatcher))
    this.source = parent.value;
  else
    this.source = parent;
  if (this.source) {
    if (org.apache.royale.utils.Language.is(this.source, org.apache.royale.events.IEventDispatcher))
      this.dispatcher = this.source;
    else if (org.apache.royale.utils.Language.is(this.source, org.apache.royale.utils.Language.synthType('Class')) && this.source['staticEventDispatcher'] != null)
      this.dispatcher = this.source.staticEventDispatcher;
  }
  if (this.dispatcher)
    this.org_apache_royale_binding_PropertyWatcher_adjustListeners(true);
  this.wrapUpdate(org.apache.royale.utils.Language.closure(this.org_apache_royale_binding_PropertyWatcher_updateProperty, this, 'org_apache_royale_binding_PropertyWatcher_updateProperty'));
  this.notifyListeners();
};


/**
 * @royaleignorecoercion Array
 * @royaleignorecoercion String
 * @private
 * @param {boolean} add
 */
org.apache.royale.binding.PropertyWatcher.prototype.org_apache_royale_binding_PropertyWatcher_adjustListeners = function(add) {
  var /** @type {Function} */ adjustListener = add ? org.apache.royale.utils.Language.closure(this.dispatcher.addEventListener, this.dispatcher, 'addEventListener') : org.apache.royale.utils.Language.closure(this.dispatcher.removeEventListener, this.dispatcher, 'removeEventListener');
  if (org.apache.royale.utils.Language.is(this.eventNames, String)) {
    adjustListener(this.eventNames, org.apache.royale.utils.Language.closure(this.changeHandler, this, 'changeHandler'));
  } else if (org.apache.royale.utils.Language.is(this.eventNames, Array)) {
    var /** @type {Array} */ arr = this.eventNames;
    var /** @type {number} */ n = (arr.length) >> 0;
    for (var /** @type {number} */ i = 0; i < n; i++) {
      var /** @type {string} */ eventName = org.apache.royale.utils.Language.string(this.eventNames[i]);
      adjustListener(eventName, org.apache.royale.utils.Language.closure(this.changeHandler, this, 'changeHandler'));
    }
  }
  if (!add)
    this.dispatcher = null;
};


/**
 *  Gets the actual property then updates
 *  the Watcher's children appropriately.
 *  
 *  @langversion 3.0
 *  @playerversion Flash 10.2
 *  @playerversion AIR 2.6
 *  @productversion Royale 0.0
 * @private
 */
org.apache.royale.binding.PropertyWatcher.prototype.org_apache_royale_binding_PropertyWatcher_updateProperty = function() {
  if (this.source) {
    if (this.propertyName == "this") {
      this.value = this.source;
    } else {
      if (this.funcProps != null) {
        try {
          if (this.funcProps.functionGetter != null) {
            this.value = this.funcProps.functionGetter(this.funcProps.functionName).apply(this.source, this.funcProps.paramFunction.apply(this.document));
          } else {
            this.value = this.source[this.funcProps.functionName].apply(this.source, this.funcProps.paramFunction.apply(this.document));
          }
        } catch (e) {
          this.value = null;
        }
      } else if (this.getterFunction != null) {
        try {
          this.value = this.getterFunction.apply(this.document, [this.propertyName]);
        } catch (e) {
          this.value = null;
        }
      } else {
        if (typeof(this.source["getProperty"]) === "function")
          this.value = this.source["getProperty"](this.propertyName);
        else
          this.value = this.source[this.propertyName];
        
      }
    }
  } else {
    this.value = null;
  }
  this.updateChildren();
};


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
org.apache.royale.binding.PropertyWatcher.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'PropertyWatcher', qName: 'org.apache.royale.binding.PropertyWatcher', kind: 'class' }] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
org.apache.royale.binding.PropertyWatcher.prototype.ROYALE_REFLECTION_INFO = function () {
  return {
    variables: function () {
      return {
        'document': { type: 'Object', get_set: function (/** org.apache.royale.binding.PropertyWatcher */ inst, /** * */ v) {return v !== undefined ? inst.document = v : inst.document;}},
        'source': { type: 'Object', get_set: function (/** org.apache.royale.binding.PropertyWatcher */ inst, /** * */ v) {return v !== undefined ? inst.source = v : inst.source;}},
        'propertyName': { type: 'String', get_set: function (/** org.apache.royale.binding.PropertyWatcher */ inst, /** * */ v) {return v !== undefined ? inst.propertyName = v : inst.propertyName;}},
        'eventNames': { type: 'Object', get_set: function (/** org.apache.royale.binding.PropertyWatcher */ inst, /** * */ v) {return v !== undefined ? inst.eventNames = v : inst.eventNames;}},
        'getterFunction': { type: 'Function', get_set: function (/** org.apache.royale.binding.PropertyWatcher */ inst, /** * */ v) {return v !== undefined ? inst.getterFunction = v : inst.getterFunction;}},
        'funcProps': { type: 'Object', get_set: function (/** org.apache.royale.binding.PropertyWatcher */ inst, /** * */ v) {return v !== undefined ? inst.funcProps = v : inst.funcProps;}}
      };
    },
    methods: function () {
      return {
        'PropertyWatcher': { type: '', declaredBy: 'org.apache.royale.binding.PropertyWatcher', parameters: function () { return [ 'Object', false ,'String', false ,'Object', false ,'Function', false ]; }},
        'parentChanged': { type: 'void', declaredBy: 'org.apache.royale.binding.PropertyWatcher', parameters: function () { return [ 'Object', false ]; }}
      };
    }
  };
};
/**
 * @const
 * @type {number}
 */
org.apache.royale.binding.PropertyWatcher.prototype.ROYALE_COMPILE_FLAGS = 10;
