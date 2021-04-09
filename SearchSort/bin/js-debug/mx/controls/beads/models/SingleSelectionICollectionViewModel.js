/**
 * Generated by Apache Royale Compiler from mx/controls/beads/models/SingleSelectionICollectionViewModel.as
 * mx.controls.beads.models.SingleSelectionICollectionViewModel
 *
 * @fileoverview
 *
 * @suppress {missingRequire|checkTypes|accessControls}
 */

goog.provide('mx.controls.beads.models.SingleSelectionICollectionViewModel');
/* Royale Dependency List: mx.collections.CursorBookmark,mx.collections.ICollectionView,mx.collections.IViewCursor,mx.events.CollectionEvent,mx.events.CollectionEventKind,org.apache.royale.core.IStrand,org.apache.royale.events.Event,org.apache.royale.utils.Language,XML*/

goog.require('org.apache.royale.events.EventDispatcher');
goog.require('org.apache.royale.core.IRollOverModel');
goog.require('org.apache.royale.core.ISelectionModel');



/**
 *  Constructor.
 *
 *  @langversion 3.0
 *  @playerversion Flash 10.2
 *  @playerversion AIR 2.6
 *  @productversion Royale 0.9
 * @constructor
 * @extends {org.apache.royale.events.EventDispatcher}
 * @implements {org.apache.royale.core.ISelectionModel}
 * @implements {org.apache.royale.core.IRollOverModel}
 */
mx.controls.beads.models.SingleSelectionICollectionViewModel = function() {
  mx.controls.beads.models.SingleSelectionICollectionViewModel.base(this, 'constructor');
};
goog.inherits(mx.controls.beads.models.SingleSelectionICollectionViewModel, org.apache.royale.events.EventDispatcher);


/**
 * Prevent renaming of class. Needed for reflection.
 */
goog.exportSymbol('mx.controls.beads.models.SingleSelectionICollectionViewModel', mx.controls.beads.models.SingleSelectionICollectionViewModel);


/**
 * @private
 * @type {org.apache.royale.core.IStrand}
 */
mx.controls.beads.models.SingleSelectionICollectionViewModel.prototype.mx_controls_beads_models_SingleSelectionICollectionViewModel__strand;


/**
 * @private
 * @type {mx.collections.ICollectionView}
 */
mx.controls.beads.models.SingleSelectionICollectionViewModel.prototype.mx_controls_beads_models_SingleSelectionICollectionViewModel__dataProvider;


/**
 * @private
 * @type {mx.collections.IViewCursor}
 */
mx.controls.beads.models.SingleSelectionICollectionViewModel.prototype.mx_controls_beads_models_SingleSelectionICollectionViewModel__cursor;


/**
 * @private
 * @type {number}
 */
mx.controls.beads.models.SingleSelectionICollectionViewModel.prototype.mx_controls_beads_models_SingleSelectionICollectionViewModel_lastIndex = -1;


/**
 * @private
 * @param {number} index
 * @return {Object}
 */
mx.controls.beads.models.SingleSelectionICollectionViewModel.prototype.mx_controls_beads_models_SingleSelectionICollectionViewModel_getItemAt = function(index) {
  if (index == 0) {
    if (this.mx_controls_beads_models_SingleSelectionICollectionViewModel_lastIndex == 1) {
      this.mx_controls_beads_models_SingleSelectionICollectionViewModel__cursor.movePrevious();
    } else {
      this.mx_controls_beads_models_SingleSelectionICollectionViewModel__cursor.seek(mx.collections.CursorBookmark["FIRST"]);
    }
    this.mx_controls_beads_models_SingleSelectionICollectionViewModel_lastIndex = 0;
  } else if (index + 1 == this.mx_controls_beads_models_SingleSelectionICollectionViewModel_lastIndex) {
    this.mx_controls_beads_models_SingleSelectionICollectionViewModel__cursor.movePrevious();
  } else if (this.mx_controls_beads_models_SingleSelectionICollectionViewModel_lastIndex + 1 == index) {
    this.mx_controls_beads_models_SingleSelectionICollectionViewModel__cursor.moveNext();
  } else {
    this.mx_controls_beads_models_SingleSelectionICollectionViewModel__cursor.seek(mx.collections.CursorBookmark["FIRST"], index);
  }
  return this.mx_controls_beads_models_SingleSelectionICollectionViewModel__cursor.current;
};


/**
 * @private
 * @type {number}
 */
mx.controls.beads.models.SingleSelectionICollectionViewModel.prototype.mx_controls_beads_models_SingleSelectionICollectionViewModel__selectedIndex = -1;


/**
 * @private
 * @type {number}
 */
mx.controls.beads.models.SingleSelectionICollectionViewModel.prototype.mx_controls_beads_models_SingleSelectionICollectionViewModel__rollOverIndex = -1;


/**
 * @private
 * @type {string}
 */
mx.controls.beads.models.SingleSelectionICollectionViewModel.prototype.mx_controls_beads_models_SingleSelectionICollectionViewModel__labelField = null;


/**
 * @private
 * @type {Object}
 */
mx.controls.beads.models.SingleSelectionICollectionViewModel.prototype.mx_controls_beads_models_SingleSelectionICollectionViewModel__selectedItem;


/**
 * @private
 * @type {string}
 */
mx.controls.beads.models.SingleSelectionICollectionViewModel.prototype.mx_controls_beads_models_SingleSelectionICollectionViewModel__selectedString;


/**
 * @export
 * @param {mx.events.CollectionEvent} event
 */
mx.controls.beads.models.SingleSelectionICollectionViewModel.prototype.collectionChangeHandler = function(event) {
  if (event.kind == mx.events.CollectionEventKind.ADD) {
    if (event.location <= this.mx_controls_beads_models_SingleSelectionICollectionViewModel__selectedIndex) {
      this.mx_controls_beads_models_SingleSelectionICollectionViewModel__selectedIndex++;
      this.dispatchEvent(new org.apache.royale.events.Event("selectedIndexChanged"));
    }
  } else if (event.kind == mx.events.CollectionEventKind.REMOVE) {
    if (event.location < this.mx_controls_beads_models_SingleSelectionICollectionViewModel__selectedIndex) {
      this.mx_controls_beads_models_SingleSelectionICollectionViewModel__selectedIndex--;
      this.dispatchEvent(new org.apache.royale.events.Event("selectedIndexChanged"));
    } else if (event.location == this.mx_controls_beads_models_SingleSelectionICollectionViewModel__selectedIndex) {
      this.mx_controls_beads_models_SingleSelectionICollectionViewModel__selectedItem = null;
      this.mx_controls_beads_models_SingleSelectionICollectionViewModel__selectedIndex = -1;
      this.dispatchEvent(new org.apache.royale.events.Event("selectedItemChanged"));
      this.dispatchEvent(new org.apache.royale.events.Event("selectedIndexChanged"));
    }
  }
};


mx.controls.beads.models.SingleSelectionICollectionViewModel.prototype.set__strand = function(value) {
  this.mx_controls_beads_models_SingleSelectionICollectionViewModel__strand = value;
};


mx.controls.beads.models.SingleSelectionICollectionViewModel.prototype.get__dataProvider = function() {
  return this.mx_controls_beads_models_SingleSelectionICollectionViewModel__dataProvider;
};


mx.controls.beads.models.SingleSelectionICollectionViewModel.prototype.set__dataProvider = function(value) {
  if (value == this.mx_controls_beads_models_SingleSelectionICollectionViewModel__dataProvider)
    return;
  this.mx_controls_beads_models_SingleSelectionICollectionViewModel__dataProvider = org.apache.royale.utils.Language.as(value, mx.collections.ICollectionView);
  if (this.mx_controls_beads_models_SingleSelectionICollectionViewModel__dataProvider) {
    this.mx_controls_beads_models_SingleSelectionICollectionViewModel__cursor = this.mx_controls_beads_models_SingleSelectionICollectionViewModel__dataProvider.createCursor();
    this.dataProvider.addEventListener(mx.events.CollectionEvent.COLLECTION_CHANGE, org.apache.royale.utils.Language.closure(this.collectionChangeHandler, this, 'collectionChangeHandler'));
  }
  if (!this.mx_controls_beads_models_SingleSelectionICollectionViewModel__dataProvider || this.mx_controls_beads_models_SingleSelectionICollectionViewModel__selectedIndex >= this.mx_controls_beads_models_SingleSelectionICollectionViewModel__dataProvider.length)
    this.mx_controls_beads_models_SingleSelectionICollectionViewModel__selectedIndex = -1;
  this.mx_controls_beads_models_SingleSelectionICollectionViewModel__selectedItem = this.mx_controls_beads_models_SingleSelectionICollectionViewModel__selectedIndex == -1 ? null : this.mx_controls_beads_models_SingleSelectionICollectionViewModel_getItemAt(this.mx_controls_beads_models_SingleSelectionICollectionViewModel__selectedIndex);
  this.dispatchEvent(new org.apache.royale.events.Event("dataProviderChanged"));
};


mx.controls.beads.models.SingleSelectionICollectionViewModel.prototype.get__labelField = function() {
  return this.mx_controls_beads_models_SingleSelectionICollectionViewModel__labelField;
};


mx.controls.beads.models.SingleSelectionICollectionViewModel.prototype.set__labelField = function(value) {
  if (value != this.mx_controls_beads_models_SingleSelectionICollectionViewModel__labelField) {
    this.mx_controls_beads_models_SingleSelectionICollectionViewModel__labelField = value;
    this.dispatchEvent(new org.apache.royale.events.Event("labelFieldChanged"));
  }
};


mx.controls.beads.models.SingleSelectionICollectionViewModel.prototype.get__selectedIndex = function() {
  return this.mx_controls_beads_models_SingleSelectionICollectionViewModel__selectedIndex;
};


mx.controls.beads.models.SingleSelectionICollectionViewModel.prototype.set__selectedIndex = function(value) {
  if (value == this.mx_controls_beads_models_SingleSelectionICollectionViewModel__selectedIndex)
    return;
  this.mx_controls_beads_models_SingleSelectionICollectionViewModel_lastIndex = this.mx_controls_beads_models_SingleSelectionICollectionViewModel__selectedIndex;
  this.mx_controls_beads_models_SingleSelectionICollectionViewModel__selectedIndex = value;
  if (value == -1 || this.dataProvider == null) {
    this.mx_controls_beads_models_SingleSelectionICollectionViewModel__selectedItem = null;
  } else {
    if (value >= this.dataProvider.length) {
      value = (this.dataProvider.length - 1) >> 0;
      this.mx_controls_beads_models_SingleSelectionICollectionViewModel__selectedIndex = value;
    }
    this.mx_controls_beads_models_SingleSelectionICollectionViewModel__selectedItem = this.mx_controls_beads_models_SingleSelectionICollectionViewModel_getItemAt(value);
  }
  this.dispatchEvent(new org.apache.royale.events.Event("selectedIndexChanged"));
};


mx.controls.beads.models.SingleSelectionICollectionViewModel.prototype.get__rollOverIndex = function() {
  return this.mx_controls_beads_models_SingleSelectionICollectionViewModel__rollOverIndex;
};


mx.controls.beads.models.SingleSelectionICollectionViewModel.prototype.set__rollOverIndex = function(value) {
  if (value != this.mx_controls_beads_models_SingleSelectionICollectionViewModel__rollOverIndex) {
    this.mx_controls_beads_models_SingleSelectionICollectionViewModel__rollOverIndex = value;
    this.dispatchEvent(new org.apache.royale.events.Event("rollOverIndexChanged"));
  }
};


mx.controls.beads.models.SingleSelectionICollectionViewModel.prototype.get__selectedItem = function() {
  return this.mx_controls_beads_models_SingleSelectionICollectionViewModel__selectedItem;
};


mx.controls.beads.models.SingleSelectionICollectionViewModel.prototype.set__selectedItem = function(value) {
  if (value == this.mx_controls_beads_models_SingleSelectionICollectionViewModel__selectedItem)
    return;
  this.mx_controls_beads_models_SingleSelectionICollectionViewModel__selectedItem = value;
  var /** @type {number} */ n = this.mx_controls_beads_models_SingleSelectionICollectionViewModel__dataProvider.length;
  for (var /** @type {number} */ i = 0; i < n; i++) {
    if (this.mx_controls_beads_models_SingleSelectionICollectionViewModel_getItemAt(i) == value) {
      this.mx_controls_beads_models_SingleSelectionICollectionViewModel__selectedIndex = i;
      break;
    }
  }
  this.dispatchEvent(new org.apache.royale.events.Event("selectedItemChanged"));
  this.dispatchEvent(new org.apache.royale.events.Event("selectedIndexChanged"));
};


mx.controls.beads.models.SingleSelectionICollectionViewModel.prototype.get__selectedString = function() {
  return String(this.mx_controls_beads_models_SingleSelectionICollectionViewModel__selectedItem);
};


mx.controls.beads.models.SingleSelectionICollectionViewModel.prototype.set__selectedString = function(value) {
  this.mx_controls_beads_models_SingleSelectionICollectionViewModel__selectedString = value;
  var /** @type {number} */ n = this.mx_controls_beads_models_SingleSelectionICollectionViewModel__dataProvider.length;
  for (var /** @type {number} */ i = 0; i < n; i++) {
    if (String(this.mx_controls_beads_models_SingleSelectionICollectionViewModel_getItemAt(i)) == value) {
      this.mx_controls_beads_models_SingleSelectionICollectionViewModel__selectedIndex = i;
      break;
    }
  }
  this.dispatchEvent(new org.apache.royale.events.Event("selectedItemChanged"));
  this.dispatchEvent(new org.apache.royale.events.Event("selectedIndexChanged"));
};


Object.defineProperties(mx.controls.beads.models.SingleSelectionICollectionViewModel.prototype, /** @lends {mx.controls.beads.models.SingleSelectionICollectionViewModel.prototype} */ {
/**
  * @export
  * @type {org.apache.royale.core.IStrand} */
strand: {
set: mx.controls.beads.models.SingleSelectionICollectionViewModel.prototype.set__strand},
/**
  * @export
  * @type {Object} */
dataProvider: {
get: mx.controls.beads.models.SingleSelectionICollectionViewModel.prototype.get__dataProvider,
set: mx.controls.beads.models.SingleSelectionICollectionViewModel.prototype.set__dataProvider},
/**
  * @export
  * @type {string} */
labelField: {
get: mx.controls.beads.models.SingleSelectionICollectionViewModel.prototype.get__labelField,
set: mx.controls.beads.models.SingleSelectionICollectionViewModel.prototype.set__labelField},
/**
  * @export
  * @type {number} */
selectedIndex: {
get: mx.controls.beads.models.SingleSelectionICollectionViewModel.prototype.get__selectedIndex,
set: mx.controls.beads.models.SingleSelectionICollectionViewModel.prototype.set__selectedIndex},
/**
  * @export
  * @type {number} */
rollOverIndex: {
get: mx.controls.beads.models.SingleSelectionICollectionViewModel.prototype.get__rollOverIndex,
set: mx.controls.beads.models.SingleSelectionICollectionViewModel.prototype.set__rollOverIndex},
/**
  * @export
  * @type {Object} */
selectedItem: {
get: mx.controls.beads.models.SingleSelectionICollectionViewModel.prototype.get__selectedItem,
set: mx.controls.beads.models.SingleSelectionICollectionViewModel.prototype.set__selectedItem},
/**
  * @export
  * @type {string} */
selectedString: {
get: mx.controls.beads.models.SingleSelectionICollectionViewModel.prototype.get__selectedString,
set: mx.controls.beads.models.SingleSelectionICollectionViewModel.prototype.set__selectedString}}
);


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
mx.controls.beads.models.SingleSelectionICollectionViewModel.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'SingleSelectionICollectionViewModel', qName: 'mx.controls.beads.models.SingleSelectionICollectionViewModel', kind: 'class' }], interfaces: [org.apache.royale.core.ISelectionModel, org.apache.royale.core.IRollOverModel] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
mx.controls.beads.models.SingleSelectionICollectionViewModel.prototype.ROYALE_REFLECTION_INFO = function () {
  return {
    accessors: function () {
      return {
        'strand': { type: 'org.apache.royale.core.IStrand', access: 'writeonly', declaredBy: 'mx.controls.beads.models.SingleSelectionICollectionViewModel'},
        'dataProvider': { type: 'Object', access: 'readwrite', declaredBy: 'mx.controls.beads.models.SingleSelectionICollectionViewModel'},
        'labelField': { type: 'String', access: 'readwrite', declaredBy: 'mx.controls.beads.models.SingleSelectionICollectionViewModel'},
        'selectedIndex': { type: 'int', access: 'readwrite', declaredBy: 'mx.controls.beads.models.SingleSelectionICollectionViewModel'},
        'rollOverIndex': { type: 'int', access: 'readwrite', declaredBy: 'mx.controls.beads.models.SingleSelectionICollectionViewModel'},
        'selectedItem': { type: 'Object', access: 'readwrite', declaredBy: 'mx.controls.beads.models.SingleSelectionICollectionViewModel'},
        'selectedString': { type: 'String', access: 'readwrite', declaredBy: 'mx.controls.beads.models.SingleSelectionICollectionViewModel'}
      };
    },
    methods: function () {
      return {
        'SingleSelectionICollectionViewModel': { type: '', declaredBy: 'mx.controls.beads.models.SingleSelectionICollectionViewModel'}
      };
    }
  };
};
/**
 * @const
 * @type {number}
 */
mx.controls.beads.models.SingleSelectionICollectionViewModel.prototype.ROYALE_COMPILE_FLAGS = 26;
