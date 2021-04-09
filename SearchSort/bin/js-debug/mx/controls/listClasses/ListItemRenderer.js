/**
 * Generated by Apache Royale Compiler from mx/controls/listClasses/ListItemRenderer.as
 * mx.controls.listClasses.ListItemRenderer
 *
 * @fileoverview
 *
 * @suppress {missingRequire|checkTypes|accessControls}
 */

goog.provide('mx.controls.listClasses.ListItemRenderer');
/* Royale Dependency List: XML,mx.events.ListEvent,org.apache.royale.core.IBead,org.apache.royale.core.IBeadView,org.apache.royale.core.IChild,org.apache.royale.core.IItemRendererOwnerView,org.apache.royale.core.IParent,org.apache.royale.core.ISelectableItemRenderer,org.apache.royale.core.IStrand,org.apache.royale.core.ValuesManager,org.apache.royale.events.IEventDispatcher,org.apache.royale.events.ItemClickedEvent,org.apache.royale.events.MouseEvent,org.apache.royale.html.util.getLabelFromData,org.apache.royale.utils.Language*/

goog.require('mx.core.UIComponent');
goog.require('mx.controls.listClasses.IListItemRenderer');
goog.require('org.apache.royale.core.IIndexedItemRenderer');
goog.require('org.apache.royale.core.ILabelFieldItemRenderer');
goog.require('org.apache.royale.core.IOwnerViewItemRenderer');



/**
 * @constructor
 * @extends {mx.core.UIComponent}
 * @implements {mx.controls.listClasses.IListItemRenderer}
 * @implements {org.apache.royale.core.IIndexedItemRenderer}
 * @implements {org.apache.royale.core.ILabelFieldItemRenderer}
 * @implements {org.apache.royale.core.IOwnerViewItemRenderer}
 */
mx.controls.listClasses.ListItemRenderer = function() {
  mx.controls.listClasses.ListItemRenderer.base(this, 'constructor');
  this.addEventListener("click", org.apache.royale.utils.Language.closure(this.mx_controls_listClasses_ListItemRenderer_clickHandler, this, 'mx_controls_listClasses_ListItemRenderer_clickHandler'));
  
  this.typeNames = "ListItemRenderer";
  this.isAbsolute = false;
};
goog.inherits(mx.controls.listClasses.ListItemRenderer, mx.core.UIComponent);


/**
 * Prevent renaming of class. Needed for reflection.
 */
goog.exportSymbol('mx.controls.listClasses.ListItemRenderer', mx.controls.listClasses.ListItemRenderer);


/**
 * @private
 * @type {number}
 */
mx.controls.listClasses.ListItemRenderer.prototype.mx_controls_listClasses_ListItemRenderer__rowIndex = 0;


/**
 * @royaleignorecoercion mx.core.UIComponent
 * @royaleignorecoercion org.apache.royale.events.IEventDispatcher
 * @private
 * @param {org.apache.royale.events.MouseEvent} event
 */
mx.controls.listClasses.ListItemRenderer.prototype.mx_controls_listClasses_ListItemRenderer_clickHandler = function(event) {
  var /** @type {mx.events.ListEvent} */ le = new mx.events.ListEvent("itemClick");
  le.rowIndex = this.rowIndex;
  le.columnIndex = 0;
  le.itemRenderer = this;
  this.getComponentDispatcher().dispatchEvent(le);
  var /** @type {org.apache.royale.events.ItemClickedEvent} */ ice = new org.apache.royale.events.ItemClickedEvent("itemClicked");
  ice.index = this.rowIndex;
  ice.data = this.data;
  this.dispatchEvent(ice);
};


/**
 * @private
 * @type {org.apache.royale.core.IItemRendererOwnerView}
 */
mx.controls.listClasses.ListItemRenderer.prototype.mx_controls_listClasses_ListItemRenderer__itemRendererOwnerView;


/**
 * @private
 * @type {string}
 */
mx.controls.listClasses.ListItemRenderer.prototype.mx_controls_listClasses_ListItemRenderer__labelField = "label";


/**
 * @export
 * @return {org.apache.royale.events.IEventDispatcher}
 */
mx.controls.listClasses.ListItemRenderer.prototype.getComponentDispatcher = function() {
  var /** @type {Object} */ irp = this.itemRendererOwnerView;
  var /** @type {org.apache.royale.core.IParent} */ p = this.parent;
  while (p) {
    if (org.apache.royale.utils.Language.is(p, org.apache.royale.core.IStrand)) {
      var /** @type {org.apache.royale.core.IBead} */ b = org.apache.royale.utils.Language.as(p, org.apache.royale.core.IStrand).getBeadByType(org.apache.royale.core.IBeadView);
      if (b == irp)
        return org.apache.royale.utils.Language.as(p, org.apache.royale.events.IEventDispatcher);
    }
    p = org.apache.royale.utils.Language.as(p, org.apache.royale.core.IChild).parent;
  }
  return null;
};


/**
 * @export
 * @param {Object} value
 * @return {string}
 */
mx.controls.listClasses.ListItemRenderer.prototype.dataToString = function(value) {
  if (org.apache.royale.utils.Language.is(value, XML)) {
    var /** @type {XML} */ xml = org.apache.royale.utils.Language.as(value, XML);
    return org.apache.royale.utils.Language.string(xml.child(this.labelField));
  }
  return org.apache.royale.html.util.getLabelFromData(this, value);
};


/**
 * @private
 * @type {Object}
 */
mx.controls.listClasses.ListItemRenderer.prototype.mx_controls_listClasses_ListItemRenderer__data;


/**
 * @private
 * @type {Object}
 */
mx.controls.listClasses.ListItemRenderer.prototype.mx_controls_listClasses_ListItemRenderer__listData;


/**
 * @private
 * @type {number}
 */
mx.controls.listClasses.ListItemRenderer.prototype.mx_controls_listClasses_ListItemRenderer__index = 0;


mx.controls.listClasses.ListItemRenderer.prototype.get__rowIndex = function() {
  return this.mx_controls_listClasses_ListItemRenderer__rowIndex;
};


mx.controls.listClasses.ListItemRenderer.prototype.set__rowIndex = function(value) {
  this.mx_controls_listClasses_ListItemRenderer__rowIndex = value;
};


mx.controls.listClasses.ListItemRenderer.prototype.get__itemRendererOwnerView = function() {
  return this.mx_controls_listClasses_ListItemRenderer__itemRendererOwnerView;
};


mx.controls.listClasses.ListItemRenderer.prototype.set__itemRendererOwnerView = function(value) {
  this.mx_controls_listClasses_ListItemRenderer__itemRendererOwnerView = value;
  if (!this.getBeadByType(org.apache.royale.core.ISelectableItemRenderer)) {
    var /** @type {Object} */ c = org.apache.royale.core.ValuesManager["valuesImpl"].getValue(value.host, "iSelectableItemRenderer");
    if (c)
      this.addBead(org.apache.royale.utils.Language.as(new c(), org.apache.royale.core.IBead));
  }
};


mx.controls.listClasses.ListItemRenderer.prototype.get__labelField = function() {
  return this.mx_controls_listClasses_ListItemRenderer__labelField;
};


mx.controls.listClasses.ListItemRenderer.prototype.set__labelField = function(value) {
  this.mx_controls_listClasses_ListItemRenderer__labelField = value;
};


mx.controls.listClasses.ListItemRenderer.prototype.get__text = function() {
  
  return this.element.textContent;
};


mx.controls.listClasses.ListItemRenderer.prototype.set__text = function(value) {
  
  this.element.textContent = value;
};


mx.controls.listClasses.ListItemRenderer.prototype.get__data = function() {
  return this.mx_controls_listClasses_ListItemRenderer__data;
};


mx.controls.listClasses.ListItemRenderer.prototype.set__data = function(value) {
  this.mx_controls_listClasses_ListItemRenderer__data = value;
  this.text = this.dataToString(value);
};


mx.controls.listClasses.ListItemRenderer.prototype.get__listData = function() {
  return this.mx_controls_listClasses_ListItemRenderer__listData;
};


mx.controls.listClasses.ListItemRenderer.prototype.set__listData = function(value) {
  this.mx_controls_listClasses_ListItemRenderer__listData = value;
};


mx.controls.listClasses.ListItemRenderer.prototype.get__nestLevel = function() {
  throw new Error("Method not implemented.");
};


mx.controls.listClasses.ListItemRenderer.prototype.set__nestLevel = function(value) {
  throw new Error("Method not implemented.");
};


mx.controls.listClasses.ListItemRenderer.prototype.get__processedDescriptors = function() {
  throw new Error("Method not implemented.");
};


mx.controls.listClasses.ListItemRenderer.prototype.set__processedDescriptors = function(value) {
  throw new Error("Method not implemented.");
};


mx.controls.listClasses.ListItemRenderer.prototype.get__updateCompletePendingFlag = function() {
  throw new Error("Method not implemented.");
};


mx.controls.listClasses.ListItemRenderer.prototype.set__updateCompletePendingFlag = function(value) {
  throw new Error("Method not implemented.");
};


Object.defineProperties(mx.controls.listClasses.ListItemRenderer.prototype, /** @lends {mx.controls.listClasses.ListItemRenderer.prototype} */ {
/**
  * @export
  * @type {number} */
rowIndex: {
get: mx.controls.listClasses.ListItemRenderer.prototype.get__rowIndex,
set: mx.controls.listClasses.ListItemRenderer.prototype.set__rowIndex},
/**
  * @export
  * @type {org.apache.royale.core.IItemRendererOwnerView} */
itemRendererOwnerView: {
get: mx.controls.listClasses.ListItemRenderer.prototype.get__itemRendererOwnerView,
set: mx.controls.listClasses.ListItemRenderer.prototype.set__itemRendererOwnerView},
/**
  * @export
  * @type {string} */
labelField: {
get: mx.controls.listClasses.ListItemRenderer.prototype.get__labelField,
set: mx.controls.listClasses.ListItemRenderer.prototype.set__labelField},
/**
  * @export
  * @type {string} */
text: {
get: mx.controls.listClasses.ListItemRenderer.prototype.get__text,
set: mx.controls.listClasses.ListItemRenderer.prototype.set__text},
/**
  * @export
  * @type {Object} */
data: {
get: mx.controls.listClasses.ListItemRenderer.prototype.get__data,
set: mx.controls.listClasses.ListItemRenderer.prototype.set__data},
/**
  * @export
  * @type {Object} */
listData: {
get: mx.controls.listClasses.ListItemRenderer.prototype.get__listData,
set: mx.controls.listClasses.ListItemRenderer.prototype.set__listData},
/**
  * @export
  * @type {number} */
nestLevel: {
get: mx.controls.listClasses.ListItemRenderer.prototype.get__nestLevel,
set: mx.controls.listClasses.ListItemRenderer.prototype.set__nestLevel},
/**
  * @export
  * @type {boolean} */
processedDescriptors: {
get: mx.controls.listClasses.ListItemRenderer.prototype.get__processedDescriptors,
set: mx.controls.listClasses.ListItemRenderer.prototype.set__processedDescriptors},
/**
  * @export
  * @type {boolean} */
updateCompletePendingFlag: {
get: mx.controls.listClasses.ListItemRenderer.prototype.get__updateCompletePendingFlag,
set: mx.controls.listClasses.ListItemRenderer.prototype.set__updateCompletePendingFlag}}
);


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
mx.controls.listClasses.ListItemRenderer.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'ListItemRenderer', qName: 'mx.controls.listClasses.ListItemRenderer', kind: 'class' }], interfaces: [mx.controls.listClasses.IListItemRenderer, org.apache.royale.core.IIndexedItemRenderer, org.apache.royale.core.ILabelFieldItemRenderer, org.apache.royale.core.IOwnerViewItemRenderer] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
mx.controls.listClasses.ListItemRenderer.prototype.ROYALE_REFLECTION_INFO = function () {
  return {
    accessors: function () {
      return {
        'rowIndex': { type: 'int', access: 'readwrite', declaredBy: 'mx.controls.listClasses.ListItemRenderer'},
        'itemRendererOwnerView': { type: 'org.apache.royale.core.IItemRendererOwnerView', access: 'readwrite', declaredBy: 'mx.controls.listClasses.ListItemRenderer'},
        'labelField': { type: 'String', access: 'readwrite', declaredBy: 'mx.controls.listClasses.ListItemRenderer'},
        'text': { type: 'String', access: 'readwrite', declaredBy: 'mx.controls.listClasses.ListItemRenderer'},
        'data': { type: 'Object', access: 'readwrite', declaredBy: 'mx.controls.listClasses.ListItemRenderer', metadata: function () { return [ { name: 'Bindable', args: [ { key: '', value: '__NoChangeEvent__' } ] } ]; }},
        'listData': { type: 'Object', access: 'readwrite', declaredBy: 'mx.controls.listClasses.ListItemRenderer', metadata: function () { return [ { name: 'Bindable', args: [ { key: '', value: '__NoChangeEvent__' } ] } ]; }},
        'nestLevel': { type: 'int', access: 'readwrite', declaredBy: 'mx.controls.listClasses.ListItemRenderer'},
        'processedDescriptors': { type: 'Boolean', access: 'readwrite', declaredBy: 'mx.controls.listClasses.ListItemRenderer'},
        'updateCompletePendingFlag': { type: 'Boolean', access: 'readwrite', declaredBy: 'mx.controls.listClasses.ListItemRenderer'}
      };
    },
    methods: function () {
      return {
        'ListItemRenderer': { type: '', declaredBy: 'mx.controls.listClasses.ListItemRenderer'}
      };
    }
  };
};
/**
 * @const
 * @type {number}
 */
mx.controls.listClasses.ListItemRenderer.prototype.ROYALE_COMPILE_FLAGS = 26;
