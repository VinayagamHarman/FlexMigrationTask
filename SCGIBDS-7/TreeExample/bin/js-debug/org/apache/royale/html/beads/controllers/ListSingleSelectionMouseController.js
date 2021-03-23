/**
 * Generated by Apache Royale Compiler from org/apache/royale/html/beads/controllers/ListSingleSelectionMouseController.as
 * org.apache.royale.html.beads.controllers.ListSingleSelectionMouseController
 *
 * @fileoverview
 *
 * @suppress {missingRequire|checkTypes|accessControls}
 */

goog.provide('org.apache.royale.html.beads.controllers.ListSingleSelectionMouseController');
/* Royale Dependency List: org.apache.royale.core.IIndexedItemRenderer,org.apache.royale.core.IItemRendererOwnerView,org.apache.royale.core.IRollOverModel,org.apache.royale.core.ISelectableItemRenderer,org.apache.royale.core.ISelectionModel,org.apache.royale.core.IStrand,org.apache.royale.events.Event,org.apache.royale.events.IEventDispatcher,org.apache.royale.events.ItemAddedEvent,org.apache.royale.events.ItemClickedEvent,org.apache.royale.events.ItemRemovedEvent,org.apache.royale.html.beads.IListView,org.apache.royale.utils.getSelectionRenderBead,org.apache.royale.utils.sendEvent,org.apache.royale.utils.Language*/

goog.require('org.apache.royale.core.Bead');
goog.require('org.apache.royale.core.IBeadController');



/**
 *  Constructor.
 *  
 *  @langversion 3.0
 *  @playerversion Flash 10.2
 *  @playerversion AIR 2.6
 *  @productversion Royale 0.9
 * @constructor
 * @extends {org.apache.royale.core.Bead}
 * @implements {org.apache.royale.core.IBeadController}
 */
org.apache.royale.html.beads.controllers.ListSingleSelectionMouseController = function() {
  org.apache.royale.html.beads.controllers.ListSingleSelectionMouseController.base(this, 'constructor');
};
goog.inherits(org.apache.royale.html.beads.controllers.ListSingleSelectionMouseController, org.apache.royale.core.Bead);


/**
 * Prevent renaming of class. Needed for reflection.
 */
goog.exportSymbol('org.apache.royale.html.beads.controllers.ListSingleSelectionMouseController', org.apache.royale.html.beads.controllers.ListSingleSelectionMouseController);


/**
 * @protected
 * @type {org.apache.royale.core.ISelectionModel}
 */
org.apache.royale.html.beads.controllers.ListSingleSelectionMouseController.prototype.listModel;


/**
 * @protected
 * @type {org.apache.royale.html.beads.IListView}
 */
org.apache.royale.html.beads.controllers.ListSingleSelectionMouseController.prototype.listView;


/**
 * @protected
 * @type {org.apache.royale.core.IItemRendererOwnerView}
 */
org.apache.royale.html.beads.controllers.ListSingleSelectionMouseController.prototype.dataGroup;


/**
 * @royaleignorecoercion org.apache.royale.events.IEventDispatcher
 * @protected
 * @param {org.apache.royale.events.ItemAddedEvent} event
 */
org.apache.royale.html.beads.controllers.ListSingleSelectionMouseController.prototype.handleItemAdded = function(event) {
  event.item.addEventListener("itemClicked", org.apache.royale.utils.Language.closure(this.selectedHandler, this, 'selectedHandler'));
  event.item.addEventListener("itemRollOver", org.apache.royale.utils.Language.closure(this.rolloverHandler, this, 'rolloverHandler'));
  event.item.addEventListener("itemRollOut", org.apache.royale.utils.Language.closure(this.rolloutHandler, this, 'rolloutHandler'));
};


/**
 * @royaleignorecoercion org.apache.royale.events.IEventDispatcher
 * @protected
 * @param {org.apache.royale.events.ItemRemovedEvent} event
 */
org.apache.royale.html.beads.controllers.ListSingleSelectionMouseController.prototype.handleItemRemoved = function(event) {
  event.item.removeEventListener("itemClicked", org.apache.royale.utils.Language.closure(this.selectedHandler, this, 'selectedHandler'));
  event.item.removeEventListener("itemRollOver", org.apache.royale.utils.Language.closure(this.rolloverHandler, this, 'rolloverHandler'));
  event.item.removeEventListener("itemRollOut", org.apache.royale.utils.Language.closure(this.rolloutHandler, this, 'rolloutHandler'));
};


/**
 * @protected
 * @param {org.apache.royale.events.ItemClickedEvent} event
 */
org.apache.royale.html.beads.controllers.ListSingleSelectionMouseController.prototype.selectedHandler = function(event) {
  this.listModel.selectedIndex = (event.index) >> 0;
  this.listModel.selectedItem = event.data;
  org.apache.royale.utils.sendEvent(this.listView.host, "change");
};


/**
 * @royaleemitcoercion org.apache.royale.core.IIndexedItemRenderer
 * @royaleignorecoercion org.apache.royale.core.IRollOverModel
 * @protected
 * @param {Object} event
 */
org.apache.royale.html.beads.controllers.ListSingleSelectionMouseController.prototype.rolloverHandler = function(event) {
  var /** @type {org.apache.royale.core.IIndexedItemRenderer} */ renderer = org.apache.royale.utils.Language.as(event.currentTarget, org.apache.royale.core.IIndexedItemRenderer);
  if (renderer) {
    this.listModel.rollOverIndex = renderer.index;
  }
};


/**
 * @royaleemitcoercion org.apache.royale.core.IIndexedItemRenderer
 * @royaleignorecoercion org.apache.royale.core.IRollOverModel
 * @protected
 * @param {Object} event
 */
org.apache.royale.html.beads.controllers.ListSingleSelectionMouseController.prototype.rolloutHandler = function(event) {
  var /** @type {org.apache.royale.core.IIndexedItemRenderer} */ renderer = org.apache.royale.utils.Language.as(event.currentTarget, org.apache.royale.core.IIndexedItemRenderer);
  if (renderer) {
    var /** @type {Object} */ selectionBead = org.apache.royale.utils.getSelectionRenderBead(renderer);
    if (selectionBead) {
      selectionBead.hovered = false;
      selectionBead.down = false;
    }
    this.listModel.rollOverIndex = -1;
  }
};


org.apache.royale.html.beads.controllers.ListSingleSelectionMouseController.prototype.set__strand = function(value) {
  this._strand = value;
  this.listModel = value.getBeadByType(org.apache.royale.core.ISelectionModel);
  this.listView = value.getBeadByType(org.apache.royale.html.beads.IListView);
  this.listenOnStrand("itemAdded", org.apache.royale.utils.Language.closure(this.handleItemAdded, this, 'handleItemAdded'));
  this.listenOnStrand("itemRemoved", org.apache.royale.utils.Language.closure(this.handleItemRemoved, this, 'handleItemRemoved'));
};


Object.defineProperties(org.apache.royale.html.beads.controllers.ListSingleSelectionMouseController.prototype, /** @lends {org.apache.royale.html.beads.controllers.ListSingleSelectionMouseController.prototype} */ {
/**
  * @export
  * @type {org.apache.royale.core.IStrand} */
strand: {
set: org.apache.royale.html.beads.controllers.ListSingleSelectionMouseController.prototype.set__strand}}
);


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
org.apache.royale.html.beads.controllers.ListSingleSelectionMouseController.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'ListSingleSelectionMouseController', qName: 'org.apache.royale.html.beads.controllers.ListSingleSelectionMouseController', kind: 'class' }], interfaces: [org.apache.royale.core.IBeadController] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
org.apache.royale.html.beads.controllers.ListSingleSelectionMouseController.prototype.ROYALE_REFLECTION_INFO = function () {
  return {
    accessors: function () {
      return {
        'strand': { type: 'org.apache.royale.core.IStrand', access: 'writeonly', declaredBy: 'org.apache.royale.html.beads.controllers.ListSingleSelectionMouseController'}
      };
    },
    methods: function () {
      return {
        'ListSingleSelectionMouseController': { type: '', declaredBy: 'org.apache.royale.html.beads.controllers.ListSingleSelectionMouseController'}
      };
    }
  };
};
/**
 * @const
 * @type {number}
 */
org.apache.royale.html.beads.controllers.ListSingleSelectionMouseController.prototype.ROYALE_COMPILE_FLAGS = 10;
