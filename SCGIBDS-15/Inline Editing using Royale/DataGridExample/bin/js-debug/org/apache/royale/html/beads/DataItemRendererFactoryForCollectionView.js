/**
 * Generated by Apache Royale Compiler from org/apache/royale/html/beads/DataItemRendererFactoryForCollectionView.as
 * org.apache.royale.html.beads.DataItemRendererFactoryForCollectionView
 *
 * @fileoverview
 *
 * @suppress {missingRequire|checkTypes|accessControls}
 */

goog.provide('org.apache.royale.html.beads.DataItemRendererFactoryForCollectionView');
/* Royale Dependency List: org.apache.royale.collections.ICollectionView,org.apache.royale.core.IIndexedItemRenderer,org.apache.royale.core.IIndexedItemRendererInitializer,org.apache.royale.core.IItemRendererOwnerView,org.apache.royale.core.ISelectionModel,org.apache.royale.core.IStrandWithModelView,org.apache.royale.events.CollectionEvent,org.apache.royale.events.Event,org.apache.royale.events.IEventDispatcher,org.apache.royale.html.beads.IListView,org.apache.royale.utils.sendStrandEvent,org.apache.royale.utils.Language*/

goog.require('org.apache.royale.html.beads.DataItemRendererFactoryBase');



/**
 * @constructor
 * @extends {org.apache.royale.html.beads.DataItemRendererFactoryBase}
 * @param {Object=} target
 */
org.apache.royale.html.beads.DataItemRendererFactoryForCollectionView = function(target) {
  target = typeof target !== 'undefined' ? target : null;
  org.apache.royale.html.beads.DataItemRendererFactoryForCollectionView.base(this, 'constructor', target);
};
goog.inherits(org.apache.royale.html.beads.DataItemRendererFactoryForCollectionView, org.apache.royale.html.beads.DataItemRendererFactoryBase);


/**
 * Prevent renaming of class. Needed for reflection.
 */
goog.exportSymbol('org.apache.royale.html.beads.DataItemRendererFactoryForCollectionView', org.apache.royale.html.beads.DataItemRendererFactoryForCollectionView);


/**
 * @protected
 * @type {org.apache.royale.events.IEventDispatcher}
 */
org.apache.royale.html.beads.DataItemRendererFactoryForCollectionView.prototype.dped;


/**
 * @asprivate
 * @royaleignorecoercion org.apache.royale.collections.ICollectionView
 * @royaleignorecoercion org.apache.royale.core.IListPresentationModel
 * @royaleignorecoercion org.apache.royale.core.IIndexedItemRenderer
 * @royaleignorecoercion org.apache.royale.events.IEventDispatcher
 * @protected
 * @override
 */
org.apache.royale.html.beads.DataItemRendererFactoryForCollectionView.prototype.dataProviderChangeHandler = function(event) {
  if (!this.dataProviderModel)
    return;
  org.apache.royale.html.beads.DataItemRendererFactoryForCollectionView.superClass_.dataProviderChangeHandler.apply(this, [ event] );
  if (!this.dp)
    return;
  if (this.dped) {
    this.dped.removeEventListener(org.apache.royale.events.CollectionEvent.ITEM_ADDED, org.apache.royale.utils.Language.closure(this.itemAddedHandler, this, 'itemAddedHandler'));
    this.dped.removeEventListener(org.apache.royale.events.CollectionEvent.ITEM_REMOVED, org.apache.royale.utils.Language.closure(this.itemRemovedHandler, this, 'itemRemovedHandler'));
    this.dped.removeEventListener(org.apache.royale.events.CollectionEvent.ITEM_UPDATED, org.apache.royale.utils.Language.closure(this.itemUpdatedHandler, this, 'itemUpdatedHandler'));
  }
  this.dped = this.dp;
  this.dped.addEventListener(org.apache.royale.events.CollectionEvent.ITEM_ADDED, org.apache.royale.utils.Language.closure(this.itemAddedHandler, this, 'itemAddedHandler'));
  this.dped.addEventListener(org.apache.royale.events.CollectionEvent.ITEM_REMOVED, org.apache.royale.utils.Language.closure(this.itemRemovedHandler, this, 'itemRemovedHandler'));
  this.dped.addEventListener(org.apache.royale.events.CollectionEvent.ITEM_UPDATED, org.apache.royale.utils.Language.closure(this.itemUpdatedHandler, this, 'itemUpdatedHandler'));
};


/**
 * @asprivate
 * @royaleignorecoercion org.apache.royale.collections.ICollectionView
 * @royaleignorecoercion org.apache.royale.core.IListPresentationModel
 * @royaleignorecoercion org.apache.royale.core.IIndexedItemRenderer
 * @protected
 * @param {org.apache.royale.events.CollectionEvent} event
 */
org.apache.royale.html.beads.DataItemRendererFactoryForCollectionView.prototype.itemAddedHandler = function(event) {
  if (!this.dataProviderModel)
    return;
  this.dp = this.dataProviderModel.dataProvider;
  if (!this.dp)
    return;
  var /** @type {org.apache.royale.html.beads.IListView} */ view = org.apache.royale.utils.Language.as(org.apache.royale.utils.Language.as(this._strand, org.apache.royale.core.IStrandWithModelView).view, org.apache.royale.html.beads.IListView);
  var /** @type {org.apache.royale.core.IItemRendererOwnerView} */ dataGroup = view.dataGroup;
  var /** @type {Object} */ ir = this.itemRendererFactory.createItemRenderer();
  var /** @type {Object} */ data = event.item;
  org.apache.royale.utils.Language.as(this.itemRendererInitializer, org.apache.royale.core.IIndexedItemRendererInitializer).initializeIndexedItemRenderer(ir, data, event.index);
  dataGroup.addItemRendererAt(ir, event.index);
  ir.data = data;
  var /** @type {number} */ n = dataGroup.numItemRenderers;
  for (var /** @type {number} */ i = event.index; i < n; i++) {
    ir = dataGroup.getItemRendererAt(i);
    ir.index = i;
  }
  if (event.index <= org.apache.royale.utils.Language.as(this.dataProviderModel, org.apache.royale.core.ISelectionModel, true).selectedIndex) {
    org.apache.royale.utils.Language.as(this.dataProviderModel, org.apache.royale.core.ISelectionModel, true).selectedIndex = (org.apache.royale.utils.Language.as(this.dataProviderModel, org.apache.royale.core.ISelectionModel, true).selectedIndex + 1) >> 0;
  }
  org.apache.royale.utils.sendStrandEvent(this._strand, "itemsCreated");
  org.apache.royale.utils.sendStrandEvent(this._strand, "layoutNeeded");
};


/**
 * @asprivate
 * @royaleignorecoercion org.apache.royale.collections.ICollectionView
 * @royaleignorecoercion org.apache.royale.core.IListPresentationModel
 * @royaleignorecoercion org.apache.royale.core.IIndexedItemRenderer
 * @protected
 * @param {org.apache.royale.events.CollectionEvent} event
 */
org.apache.royale.html.beads.DataItemRendererFactoryForCollectionView.prototype.itemRemovedHandler = function(event) {
  if (!this.dataProviderModel)
    return;
  this.dp = this.dataProviderModel.dataProvider;
  if (!this.dp)
    return;
  var /** @type {org.apache.royale.html.beads.IListView} */ view = org.apache.royale.utils.Language.as(org.apache.royale.utils.Language.as(this._strand, org.apache.royale.core.IStrandWithModelView).view, org.apache.royale.html.beads.IListView);
  var /** @type {org.apache.royale.core.IItemRendererOwnerView} */ dataGroup = view.dataGroup;
  var /** @type {Object} */ ir = dataGroup.getItemRendererAt(event.index);
  if (!ir)
    return;
  dataGroup.removeItemRenderer(ir);
  var /** @type {number} */ n = dataGroup.numItemRenderers;
  for (var /** @type {number} */ i = event.index; i < n; i++) {
    ir = dataGroup.getItemRendererAt(i);
    ir.index = i;
  }
  if (event.index < org.apache.royale.utils.Language.as(this.dataProviderModel, org.apache.royale.core.ISelectionModel, true).selectedIndex) {
    org.apache.royale.utils.Language.as(this.dataProviderModel, org.apache.royale.core.ISelectionModel, true).selectedIndex = (org.apache.royale.utils.Language.as(this.dataProviderModel, org.apache.royale.core.ISelectionModel, true).selectedIndex - 1) >> 0;
  } else if (event.index == org.apache.royale.utils.Language.as(this.dataProviderModel, org.apache.royale.core.ISelectionModel, true).selectedIndex) {
    org.apache.royale.utils.Language.as(this.dataProviderModel, org.apache.royale.core.ISelectionModel, true).selectedIndex = -1;
  }
  org.apache.royale.utils.sendStrandEvent(this._strand, "layoutNeeded");
};


/**
 * @asprivate
 * @royaleignorecoercion org.apache.royale.collections.ICollectionView
 * @royaleignorecoercion org.apache.royale.core.IIndexedItemRenderer
 * @protected
 * @param {org.apache.royale.events.CollectionEvent} event
 */
org.apache.royale.html.beads.DataItemRendererFactoryForCollectionView.prototype.itemUpdatedHandler = function(event) {
  if (!this.dataProviderModel)
    return;
  this.dp = this.dataProviderModel.dataProvider;
  if (!this.dp)
    return;
  var /** @type {org.apache.royale.html.beads.IListView} */ view = org.apache.royale.utils.Language.as(org.apache.royale.utils.Language.as(this._strand, org.apache.royale.core.IStrandWithModelView).view, org.apache.royale.html.beads.IListView);
  var /** @type {org.apache.royale.core.IItemRendererOwnerView} */ dataGroup = view.dataGroup;
  var /** @type {Object} */ ir = dataGroup.getItemRendererAt(event.index);
  var /** @type {Object} */ data = event.item;
  org.apache.royale.utils.Language.as(this.itemRendererInitializer, org.apache.royale.core.IIndexedItemRendererInitializer).initializeIndexedItemRenderer(ir, data, event.index);
  ir.data = data;
  if (event.index == org.apache.royale.utils.Language.as(this.dataProviderModel, org.apache.royale.core.ISelectionModel, true).selectedIndex) {
    org.apache.royale.utils.Language.as(this.dataProviderModel, org.apache.royale.events.IEventDispatcher, true).dispatchEvent(new org.apache.royale.events.Event('selectedIndexChanged'));
  }
};


/**
 * @protected
 * @override
 */
org.apache.royale.html.beads.DataItemRendererFactoryForCollectionView.prototype.getItemAt = function(i) {
  return this.dp.getItemAt(i);
};


org.apache.royale.html.beads.DataItemRendererFactoryForCollectionView.prototype.get__dataProviderLength = function() {
  return (this.dp.length) >> 0;
};


Object.defineProperties(org.apache.royale.html.beads.DataItemRendererFactoryForCollectionView.prototype, /** @lends {org.apache.royale.html.beads.DataItemRendererFactoryForCollectionView.prototype} */ {
/**
  * @type {number} */
dataProviderLength: {
get: org.apache.royale.html.beads.DataItemRendererFactoryForCollectionView.prototype.get__dataProviderLength}}
);


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
org.apache.royale.html.beads.DataItemRendererFactoryForCollectionView.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'DataItemRendererFactoryForCollectionView', qName: 'org.apache.royale.html.beads.DataItemRendererFactoryForCollectionView', kind: 'class' }] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
org.apache.royale.html.beads.DataItemRendererFactoryForCollectionView.prototype.ROYALE_REFLECTION_INFO = function () {
  return {
    methods: function () {
      return {
        'DataItemRendererFactoryForCollectionView': { type: '', declaredBy: 'org.apache.royale.html.beads.DataItemRendererFactoryForCollectionView', parameters: function () { return [ 'Object', true ]; }}
      };
    }
  };
};
/**
 * @const
 * @type {number}
 */
org.apache.royale.html.beads.DataItemRendererFactoryForCollectionView.prototype.ROYALE_COMPILE_FLAGS = 10;
