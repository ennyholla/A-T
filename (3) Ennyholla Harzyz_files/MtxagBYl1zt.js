if (self.CavalryLogger) { CavalryLogger.start_js(["eoo+N"]); }

__d("LinkSelector",["csx","ArbiterMixin","DOM","mixin"],(function(a,b,c,d,e,f,g){__p&&__p();var h;c=babelHelpers.inherits(a,b("mixin")(b("ArbiterMixin")));h=c&&c.prototype;function a(a,c,d){"use strict";h.constructor.call(this),this._link=a,this._menu=c,this._input=d,this._label=b("DOM").find(this._link,"._554b"),this.init()}a.prototype.init=function(){"use strict";this._menu.subscribe("change",function(a,c){b("DOM").setContent(this._label,c.label),this._input.value=c.value,this.inform("change",c)}.bind(this))};a.prototype.getValue=function(){"use strict";return this._input.value};a.prototype.setValue=function(a){"use strict";this._menu.setValue(a)};e.exports=a}),null);
__d("SavedForLaterChromeExtensionDashNux",["Event","AsyncRequest","XSavedForLaterNUXSeenController","SavedForLaterChromeExtensionInstallLink","TimelineInHouseAppCollections","tidyEvent"],(function(a,b,c,d,e,f){var g="impression",h="dismiss",i="save_dashboard",j="chrome_extension_dash_nux";function a(a,c,d){"use strict";this.installInstance=new(b("SavedForLaterChromeExtensionInstallLink"))(c,i),b("tidyEvent")(b("Event").listen(d,"click",function(b){a.remove(),this.fireEvent(h)}.bind(this))),this.fireEvent(g)}a.prototype.fireEvent=function(a){"use strict";new(b("AsyncRequest"))(b("XSavedForLaterNUXSeenController").getURIBuilder().setEnum("action",a).setEnum("surface",i).setEnum("mechanism",j).setEnum("collection_id",b("TimelineInHouseAppCollections").SAVED_ALL).getURI()).setMethod("POST").send()};e.exports=a}),null);
__d("SavedForLaterCounterContainer",[],(function(a,b,c,d,e,f){"use strict";__p&&__p();function a(){this.counters=new Map()}a.prototype.add=function(a,b){this.counters.set(a,b)};a.prototype.increment=function(){this.counters.forEach(function(a){a.increment()})};a.prototype.decrement=function(){this.counters.forEach(function(a){a.decrement()})};e.exports=a}),null);
__d("SavedForLaterDashboardCollectionIcon.react",["cx","Image.react","React"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();var h,i=20;c=babelHelpers.inherits(a,b("React").Component);h=c&&c.prototype;function a(a){h.constructor.call(this,a)}a.prototype.render=function(){if(this.props.src)return b("React").createElement("span",null,b("React").createElement(b("Image.react"),{src:this.props.src,width:i,height:i,className:"_2mwd"}));else if(this.props.firstLetter.length>0)return b("React").createElement("span",{className:"_2mwe"},b("React").createElement("span",{className:"_2mwg"},this.props.firstLetter));return null};e.exports=a}),null);
__d("XSaveListCreateDialogController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/save/list/dialog/",{object_id:{type:"FBID"},mechanism:{type:"String"},surface:{type:"String"}})}),null);
__d("SavedForLaterDashboardAddToCollectionButton.react",["ix","cx","fbt","CollectionCurationMechanisms","CollectionsDisplaySurface","Image.react","MenuSeparator","PopoverMenu.react","React","ReactXUIMenu","SavedForLaterDashboardCollectionIcon.react","SavedListStateActions","XSaveListCreateDialogController","XSaveListMutationController","XUIButton.react","fbglyph"],(function(a,b,c,d,e,f,g,h,i){"use strict";__p&&__p();var j,k=b("ReactXUIMenu").Item;c=babelHelpers.inherits(a,b("React").Component);j=c&&c.prototype;function a(a){j.constructor.call(this,a)}a.prototype.render=function(){return b("React").createElement(b("PopoverMenu.react"),{alignv:"baseline",menu:this.$1()},b("React").createElement(b("XUIButton.react"),{className:"_2p-o",image:b("React").createElement(b("Image.react"),{src:g("130011")}),label:i._("Add to Collection")}))};a.prototype.$1=function(){var a=this.$2();a.length>0&&a.push(b("React").createElement(b("MenuSeparator"),{key:"createListMenuSeparator"}));a.push(this.$3());return b("React").createElement(b("ReactXUIMenu"),null,a)};a.prototype.$2=function(){return this.props.nonContainingLists.map(function(a){var c=b("XSaveListMutationController").getURIBuilder().setFBID("object_id",this.props.itemId).setEnum("action",b("SavedListStateActions").SAVE_IN_EXISTING_LIST).setEnum("mechanism",b("CollectionCurationMechanisms").ADD_TO_LIST_BUTTON).setEnum("surface",b("CollectionsDisplaySurface").SAVE_DASHBOARD).setInt("list_id",a.listId).getURI();return b("React").createElement(k,{icon:b("React").createElement(b("SavedForLaterDashboardCollectionIcon.react"),{firstLetter:a.firstLetter,src:a.imageSource}),href:"#",ajaxify:c,rel:"async-post",key:a.listId,onClick:this.handleAddToCollection.bind(this,a.listId)},a.name)}.bind(this))};a.prototype.$3=function(){var a=b("XSaveListCreateDialogController").getURIBuilder().setFBID("object_id",this.props.itemId).setString("surface",b("CollectionsDisplaySurface").SAVE_DASHBOARD).setString("mechanism",b("CollectionCurationMechanisms").ADD_TO_SAVED_LIST_BUTTON).getURI();return b("React").createElement(k,{key:"createListMenuItem",ajaxify:a,rel:"dialog"},i._("Create New Collection"))};a.prototype.handleAddToCollection=function(a){this.props.addItemToList(a)};e.exports=a}),null);
__d("SavedForLaterDashboardDataStore",["CollectionsDisplaySurface","DataStore"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g="constant_save_dashboard";a={setCollectionID:function(a){b("DataStore").set(g,"collection_id",a)},getCollectionID:function(){var a=null;b("DataStore").get(g,"collection_id")&&(a=b("DataStore").get(g,"collection_id"));return a},setSurface:function(a){b("DataStore").set(g,"surface",a)},getSurface:function(){var a=b("CollectionsDisplaySurface").SAVE_DASHBOARD;b("DataStore").get(g,"surface")&&(a=b("DataStore").get(g,"surface"));return a}};e.exports=a}),null);
__d("SavedForLaterDashboardClickLogger",["csx","cx","Banzai","CollectionsDisplaySurface","CSS","DOM","DOMQuery","Event","Parent","SavedForLaterDashboardDataStore","guid","tidyEvent"],(function(a,b,c,d,e,f,g,h){__p&&__p();var i="_5wci",j="_5wcf",k="_4mvy",l="._16xn",m="_16xn",n="_16xq",o="._16xq",p="._5yjp",q={init:function(a,c,d,e){var f=b("SavedForLaterDashboardDataStore").getSurface();b("tidyEvent")(b("Event").listen(a,"click",function(a){b("Banzai").post(c,{save_id:d,surface:f,mechanism:e,event_id:b("guid")()},{delay:0,retry:!0})}))},initForItemConsumption:function(a){__p&&__p();b("tidyEvent")(b("Event").listen(a,"click",function(c){__p&&__p();c=b("Parent").bySelector(a,p);b("CSS").addClass(c,k);c=b("Parent").byClass(a,i);c=b("DOMQuery").scry(c,o);if(c.length>0){c=c[0];b("CSS").removeClass(c,n);b("CSS").addClass(c,m)}c=b("Parent").byClass(a,j);var d=b("DOMQuery").scry(c,l);if(d.length>0){d=d[0];b("CSS").removeClass(d,m);b("CSS").addClass(d,n)}d=new CustomEvent("saveItemConsumed");c.dispatchEvent(d)}))},initForLikeButton:function(a,c,d,e){b("tidyEvent")(b("Event").listen(a,"click",function(a){var f=b("SavedForLaterDashboardDataStore").getSurface();b("CSS").hasClass(a.target.parentElement,"PageLikedButton")||b("Banzai").post(c,{save_id:d,surface:f,mechanism:e})}))},initBySelector:function(a,c,d,e,f){a=b("DOMQuery").scry(a,c);a.forEach(function(a){q.init(a,d,e,f)})},initForSearchButton:function(a,c,d){a=b("DOM").find(a,"button");b("tidyEvent")(b("Event").listen(a,"click",function(a){if(a.isRightClick()||a.isMiddleClick())return;a=b("SavedForLaterDashboardDataStore").getSurface();b("SavedForLaterDashboardDataStore").setSurface(b("CollectionsDisplaySurface").SAVE_SEARCH_DASHBOARD);b("Banzai").post(c,{surface:a,mechanism:d})}))},initForSettingsButton:function(a,c,d){b("tidyEvent")(b("Event").listen(a,"click",function(a){if(a.isRightClick()||a.isMiddleClick())return;b("Banzai").post(c,{surface:b("SavedForLaterDashboardDataStore").getSurface(),mechanism:d})}))}};e.exports=q}),null);
__d("SavedForLaterDashboardHeader",["AsyncRequest","CollectionsDisplaySurface","DataStore","DOM","SavedForLaterCounterContainer","SavedStateActions","XSaveController"],(function(a,b,c,d,e,f){__p&&__p();var g="SavedForLaterItemCounters",h="SavedForLaterDataStoreNamespace";function i(a,b){"use strict";a=i.getStoredItemCounters();for(var c in b)a.set(c,b[c])}i.getStoredItemCounters=function(){"use strict";return b("DataStore").get(h,g,new Map())};i.addItemCounter=function(a,c,d){"use strict";var e=this.getStoredItemCounters();e.has(a)||e.set(a,new(b("SavedForLaterCounterContainer"))());e.get(a).add(d,c)};i.update=function(a,b){"use strict";var c=this.getStoredItemCounters();c.forEach(function(c,d){j(a,d)&&c.increment(),j(b,d)&&c.decrement()})};i.updateAndReplace=function(a,c){"use strict";i.update(c.increment,c.decrement),a&&b("DOM").replace(a,c.markup)};i.incrementList=function(a){"use strict";var b=this.getStoredItemCounters();b.has(a)&&b.get(a).increment()};i.decrementList=function(a){"use strict";var b=this.getStoredItemCounters();b.has(a)&&b.get(a).decrement()};i.removeItem=function(a,c,d,e){"use strict";d=b("XSaveController").getURIBuilder().setInt("object_id",d.object_id).setEnum("action",b("SavedStateActions").UNSAVE).setEnum("mechanism",e).setEnum("surface",b("CollectionsDisplaySurface").SAVE_DASHBOARD);i.updateAndReplace(a,c);new(b("AsyncRequest"))(d.getURI()).setServerDialogCancelHandler(function(d){a&&b("DOM").replace(c.markup,a),i.update(c.decrement,[])}).send()};function j(a,b){for(var c=0;c<a.length;c++)if(a[c]==b)return!0;return!1}e.exports=i}),null);
__d("SavedForLaterDashboardNUX",["cx","DataStore","DOM","Event","Parent","tidyEvent"],(function(a,b,c,d,e,f,g){__p&&__p();var h="saved_for_later_dashboard_nux",i="fb_content";function a(a,c,d){"use strict";this.nuxElement=d;b("tidyEvent")([b("Event").listen(a,"click",this.remove.bind(this)),b("Event").listen(c,"click",this.remove.bind(this))]);a=b("Parent").byClass(d,i);b("DataStore").set(a,h,this)}a.prototype.remove=function(){"use strict";b("DOM").remove(this.nuxElement)};a.dismiss=function(a){"use strict";a=b("Parent").byClass(a,i);a=b("DataStore").get(a,h);a&&a.remove()};e.exports=a}),null);
__d("SavedForLaterDashboardHeaderCategoryFilter",["cx","Banzai","CollectionCurationMechanisms","CollectionsDisplaySurface","LoadingIndicator.react","PageTransitions","React","ReactDOM","SavedForLaterDashboardDataStore","SavedForLaterDashboardNUX","Selector","ge","guid"],(function(a,b,c,d,e,f,g){__p&&__p();var h="saved_for_later:click",i="_5x-b",j="saved_loading_indicator",k=b("CollectionsDisplaySurface").SAVE_DASHBOARD;a={init:function(a){this.bindSelectorBehavior(a)},initLinkSelector:function(a){this.bindSelectorBehavior(a)},bindSelectorBehavior:function(a){__p&&__p();a._menu.subscribe("show",function(){b("SavedForLaterDashboardDataStore").setSurface(k),b("Banzai").post(h,{surface:k,mechanism:b("CollectionCurationMechanisms").FILTER_BUTTON,event_id:b("guid")()},{delay:0,retry:!0})}),a.subscribe("change",function(){var c=a.getValue(),d=b("ge")("saveContentFragment");b("SavedForLaterDashboardDataStore").setSurface(k);b("Banzai").post(h,{surface:k,mechanism:b("CollectionCurationMechanisms").FILTER_LIST_BUTTON,event_id:b("guid")()},{delay:0,retry:!0});b("SavedForLaterDashboardNUX").dismiss(d);var e=b("PageTransitions").getCurrentURI().getUnqualifiedURI(),f=b("PageTransitions").getCurrentURI().getUnqualifiedURI();c=="UNSEEN"?f.addQueryData({seen_state_filter:"UNSEEN"}):c=="UNLISTED"?f.addQueryData({unlisted_only:"true"}):f.addQueryData({dashboard_section:c});f.removeQueryData("list_id");b("PageTransitions").rewriteCurrentURI(e,f);b("ReactDOM").render(b("React").createElement("div",{className:i,id:j},b("React").createElement(b("LoadingIndicator.react"),{size:"large",color:"white"})),d)})}};e.exports=a}),null);
__d("XSavedForLaterDashboardFragmentController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/saved/more/",{collection_token:{type:"String"},cursor:{type:"String"},target_class:{type:"String"},search_token:{type:"String"},list_id:{type:"Int"},unlisted_only:{type:"Bool",defaultValue:!1},seen_state_filter:{type:"Enum",enumType:0},dashboard_section:{type:"Enum",enumType:1}})}),null);
__d("SavedForLaterDashboardHeaderItem",["cx","AsyncRequest","Banzai","CollectionCurationMechanisms","CollectionsDisplaySurface","DOM","Event","guid","LoadingIndicator.react","PageTransitions","React","ReactDOM","SavedForLaterDashboardDataStore","SavedForLaterDashboardNUX","XSavedForLaterDashboardFragmentController","tidyEvent"],(function(a,b,c,d,e,f,g){__p&&__p();var h="saved_for_later:section_imp",i="_5uqu",j="_5x-b",k="saved_loading_indicator",l="_2pjv";function a(a,c,d,e){"use strict";__p&&__p();this.collectionId=d;this.count=e;e=b("DOM").scry(a,"span."+i);this.headerItemCountElement=null;e.length===1&&(this.headerItemCountElement=e[0]);b("tidyEvent")(b("Event").listen(a,"click",function(a){__p&&__p();if(a.isRightClick()||a.isMiddleClick())return;var e=b("DOM").find(document,"div."+l),f=b("CollectionsDisplaySurface").SAVE_DASHBOARD;b("SavedForLaterDashboardDataStore").setCollectionID(d);b("SavedForLaterDashboardDataStore").setSurface(f);b("Banzai").post(h,{surface:f,mechanism:b("CollectionCurationMechanisms").SECTION_BUTTON,collection_id:d,event_id:b("guid")()},{delay:0,retry:!0});b("SavedForLaterDashboardNUX").dismiss(e);f=b("PageTransitions").getCurrentURI().getUnqualifiedURI();var g=b("PageTransitions").getCurrentURI().getUnqualifiedURI();g.addQueryData({collection_token:c});g.removeQueryData("list_id");b("PageTransitions").rewriteCurrentURI(f,g);b("ReactDOM").render(b("React").createElement("div",{className:j,id:k},b("React").createElement(b("LoadingIndicator.react"),{size:"large",color:"white"})),e);f=b("XSavedForLaterDashboardFragmentController").getURIBuilder();f.setString("collection_token",c);g=f.getURI();new(b("AsyncRequest"))(g).send();a.preventDefault()}))}a.prototype.getCollectionId=function(){"use strict";return this.collectionId};a.prototype.increment=function(){"use strict";this.$1(this.$2()+1)};a.prototype.decrement=function(){"use strict";this.$1(this.$2()-1)};a.prototype.$2=function(){"use strict";return this.count};a.prototype.$1=function(a){"use strict";a<0&&(a=0),this.headerItemCountElement!==null&&b("DOM").setContent(this.headerItemCountElement,a),this.count=a};e.exports=a}),null);
__d("SavedForLaterDashboardItemListsManager",["DataStore","SavedForLaterDashboardHeader"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g="SavedForLaterListsForItem",h="SavedForLaterDataStoreNamespace";a={getListsForAllItems:function(){return b("DataStore").get(h,g,new Map())},getListsForItem:function(a){return this.getListsForAllItems().get(a)},setListsForItem:function(a,b){var c=this.getListsForAllItems();c.set(a,new Set());b.forEach(function(b){c.get(a).add(b)})},removeFromListsForItem:function(a,c){a=this.getListsForItem(a);a&&(a["delete"](c),b("SavedForLaterDashboardHeader").decrementList(c))},addToListsForItem:function(a,c){a=this.getListsForItem(a);a&&(a.add(c),b("SavedForLaterDashboardHeader").incrementList(c))}};e.exports=a}),null);
__d("SavedForLaterDashboardItemTags.react",["cx","fbt","SavedForLaterDashboardCollectionIcon.react","MenuSeparator","MenuStaticItem","PageTransitions","PopoverMenu.react","React","ReactXUIMenu","URI","XUISubNavigationItemsAndNavigationShortcutsHighlighting","XUIText.react"],(function(a,b,c,d,e,f,g,h){"use strict";__p&&__p();var i,j=b("ReactXUIMenu").Item;c=babelHelpers.inherits(a,b("React").Component);i=c&&c.prototype;function a(a){i.constructor.call(this,a)}a.prototype.render=function(){return this.props.containingLists.length==0?null:b("React").createElement("span",{className:"_440n _3vo5"},b("React").createElement(b("XUIText.react"),{className:"_5znp"},"\xb7\xa0",this.$1()))};a.prototype.$1=function(){var a=this.props.containingLists[0];return b("React").createElement("span",{className:"_3a4y"},h._("Saved to"),b("React").createElement("span",{className:"_397o"},b("React").createElement("a",{href:"#",onClick:this.handleTagClick.bind(null,a)},a.name)),this.$2())};a.prototype.$2=function(){var a=this.props.containingLists.slice(1);return a.length==0?null:b("React").createElement(b("PopoverMenu.react"),{alignv:"baseline",menu:this.$3()},b("React").createElement("span",{className:"_397o"},b("React").createElement("a",{href:"#"},h._({"*":"+{other collections} more"},[h._param("other collections",a.length,[0])]))))};a.prototype.$3=function(){var a=this.props.containingLists.slice(1),c=this.handleTagClick;a=a.map(function(a){return b("React").createElement(j,{icon:b("React").createElement(b("SavedForLaterDashboardCollectionIcon.react"),{firstLetter:a.firstLetter,src:a.imageSource}),key:a.listId,onClick:c.bind(null,a)},a.name)});a.unshift(b("React").createElement(b("MenuStaticItem"),{key:"alsoLivesInMenuItem"},h._("Also lives in:")),b("React").createElement(b("MenuSeparator"),{key:"alsoLivesInMenuSeparator"}));return b("React").createElement(b("ReactXUIMenu"),null,a)};a.prototype.handleTagClick=function(a){a=new(b("URI"))(a.uri);b("PageTransitions").go(a,!0);b("XUISubNavigationItemsAndNavigationShortcutsHighlighting").removeHighlightingFromAllItemsExceptForURI(a.toString())};e.exports=a}),null);
__d("SavedForLaterDashboardMoreButton.react",["ix","cx","fbt","AsyncRequest","Banzai","CollectionCurationMechanisms","CollectionsDisplaySurface","Image.react","MenuSeparator","MenuStaticItem","PopoverMenu.react","React","ReactXUIMenu","SavedForLaterDashboardCollectionIcon.react","SavedListStateActions","SavedStateActions","XSaveController","XSaveListMutationController","XUIButton.react","fbglyph","guid"],(function(a,b,c,d,e,f,g,h,i){"use strict";__p&&__p();var j,k="saved_for_later:click",l=b("ReactXUIMenu").Item;c=babelHelpers.inherits(a,b("React").Component);j=c&&c.prototype;function a(a){j.constructor.call(this,a),this.handleUnsaveItem=function(){this.props.unsaveItem();var a=b("XSaveController").getURIBuilder().setInt("object_id",this.props.itemId).setEnum("action",b("SavedStateActions").UNSAVE).setEnum("mechanism",b("CollectionCurationMechanisms").DELETE_BUTTON).setEnum("surface",b("CollectionsDisplaySurface").SAVE_DASHBOARD).getURI();new(b("AsyncRequest"))(a).setServerDialogCancelHandler(this.props.cancelUnsaveItem).send()}.bind(this)}a.prototype.render=function(){return b("React").createElement(b("PopoverMenu.react"),{alignv:"baseline",menu:this.$1()},b("React").createElement(b("XUIButton.react"),{className:"_2p-o",image:b("React").createElement(b("Image.react"),{src:g("128601")}),label:i._("more"),labelIsHidden:!0}))};a.prototype.$1=function(){__p&&__p();var a=[];if(this.props.isArchive){a.push(b("React").createElement(l,{href:"#",key:"unarchiveMenuItem",onClick:this.handleUnarchive.bind(this)},i._("Unarchive")));return b("React").createElement(b("ReactXUIMenu"),null,a)}a.push(this.$2());a.push(b("React").createElement(b("MenuSeparator"),{key:"markAsMenuSeparator"}));var c=this.$3();c.length>0&&(a.push(b("React").createElement(b("MenuStaticItem"),{key:"removeFromMenuItem"},i._("Remove from:"))),a=a.concat(c),a.push(b("React").createElement(b("MenuSeparator"),{key:"unsaveMenuSeparator"})));a.push(this.$4());return b("React").createElement(b("ReactXUIMenu"),null,a)};a.prototype.$2=function(){var a=i._("Mark as unopened");this.props.unseen&&(a=i._("Mark as opened"));return b("React").createElement(l,{href:"#",key:"markAsMenuItem",onClick:this.handleMarkAs.bind(this)},a)};a.prototype.$3=function(){return this.props.containingLists.map(function(a){var c=b("XSaveListMutationController").getURIBuilder().setFBID("object_id",this.props.itemId).setEnum("action",b("SavedListStateActions").REMOVE_FROM_LIST).setEnum("mechanism",b("CollectionCurationMechanisms").REMOVE_FROM_SAVED_LIST_BUTTON).setEnum("surface",b("CollectionsDisplaySurface").SAVE_DASHBOARD).setInt("list_id",a.listId).getURI();return b("React").createElement(l,{icon:b("React").createElement(b("SavedForLaterDashboardCollectionIcon.react"),{firstLetter:a.firstLetter,src:a.imageSource}),href:"#",ajaxify:c,rel:"async-post",key:a.listId,onClick:this.handleRemoveFromCollection.bind(this,a.listId)},a.name)}.bind(this))};a.prototype.$4=function(){return b("React").createElement(l,{href:"#",key:"unsaveMenuItem",onClick:this.handleUnsaveItem},i._("Unsave"))};a.prototype.handleMarkAs=function(a){a=b("CollectionCurationMechanisms").MARK_AS_UNSEEN_BUTTON;this.props.unseen&&(a=b("CollectionCurationMechanisms").MARK_AS_SEEN_BUTTON);b("Banzai").post(k,{save_id:this.props.saveId,surface:b("CollectionsDisplaySurface").SAVE_DASHBOARD,mechanism:a,event_id:b("guid")()},{delay:0,retry:!0});this.props.toggleSeenStatus()};a.prototype.handleRemoveFromCollection=function(a){this.props.removeItemFromList(a)};a.prototype.handleUnarchive=function(){var a=b("XSaveController").getURIBuilder().setInt("object_id",this.props.itemId).setEnum("action",b("SavedStateActions").UNARCHIVE).setEnum("mechanism",b("CollectionCurationMechanisms").UNARCHIVE_BUTTON).setEnum("surface",b("CollectionsDisplaySurface").SAVE_DASHBOARD).getURI();new(b("AsyncRequest"))(a).send();this.props.unarchiveItem()};e.exports=a}),null);
__d("SavedForLaterDashboardItemActionButtonManager.react",["ix","cx","$","CSS","fbglyph","Image.react","React","ReactDOM","SavedForLaterDashboardItemListsManager","SavedForLaterDashboardAddToCollectionButton.react","SavedForLaterDashboardItemTags.react","SavedForLaterDashboardMoreButton.react","TimelineInHouseAppCollections","XUICardSection.react"],(function(a,b,c,d,e,f,g,h){"use strict";__p&&__p();var i,j=b("TimelineInHouseAppCollections").SAVED_ALL.toString();c=babelHelpers.inherits(a,b("React").Component);i=c&&c.prototype;function a(){__p&&__p();var a,c;for(var d=arguments.length,e=Array(d),f=0;f<d;f++)e[f]=arguments[f];return c=(a=i.constructor).call.apply(a,[this].concat(e)),this.state={belongsToList:this.$1(),unseen:this.props.unseen,removed:!1},this.$3=function(a){this.setState(function(b,c){c=new Map(b.belongsToList);c.set(a,!0);return{belongsToList:c}}),b("SavedForLaterDashboardItemListsManager").addToListsForItem(this.props.itemId,a)}.bind(this),this.$4=function(a){this.setState(function(b,c){c=new Map(b.belongsToList);c.set(a,!1);return{belongsToList:c}}),b("SavedForLaterDashboardItemListsManager").removeFromListsForItem(this.props.itemId,a)}.bind(this),this.$5=function(){this.setState(function(a,b){return{unseen:!a.unseen}})}.bind(this),this.$7=function(){__p&&__p();var a=this.$2(!0);for(var a=a,c=Array.isArray(a),d=0,a=c?a:a[typeof Symbol==="function"?Symbol.iterator:"@@iterator"]();;){var e;if(c){if(d>=a.length)break;e=a[d++]}else{d=a.next();if(d.done)break;e=d.value}e=e;b("SavedForLaterDashboardItemListsManager").removeFromListsForItem(this.props.itemId,e.listId)}b("SavedForLaterDashboardItemListsManager").removeFromListsForItem(this.props.itemId,j);this.$10()}.bind(this),this.$6=function(){__p&&__p();var a=this.$2(!0);for(var a=a,c=Array.isArray(a),d=0,a=c?a:a[typeof Symbol==="function"?Symbol.iterator:"@@iterator"]();;){var e;if(c){if(d>=a.length)break;e=a[d++]}else{d=a.next();if(d.done)break;e=d.value}e=e;b("SavedForLaterDashboardItemListsManager").addToListsForItem(this.props.itemId,e.listId)}b("SavedForLaterDashboardItemListsManager").addToListsForItem(this.props.itemId,j);this.$10()}.bind(this),this.$8=function(){this.$11()}.bind(this),c}a.prototype.$1=function(){__p&&__p();var a=new Map();for(var b=this.props.savedLists,c=Array.isArray(b),d=0,b=c?b:b[typeof Symbol==="function"?Symbol.iterator:"@@iterator"]();;){var e;if(c){if(d>=b.length)break;e=b[d++]}else{d=b.next();if(d.done)break;e=d.value}e=e;a.set(e.listId,!1)}for(var e=this.props.containingLists,d=Array.isArray(e),c=0,e=d?e:e[typeof Symbol==="function"?Symbol.iterator:"@@iterator"]();;){if(d){if(c>=e.length)break;b=e[c++]}else{c=e.next();if(c.done)break;b=c.value}b=b;a.set(b,!0)}return a};a.prototype.render=function(){var a=this.$2(!0),c=this.$2(!1),d=b("$")("saved-seen-indicator-"+this.props.itemId),e=b("$")("saved-more-button-"+this.props.itemId),f=b("$")("saved-add-button-"+this.props.itemId),g=b("$")("saved-item-tags-"+this.props.itemId);return b("React").createElement(b("XUICardSection.react"),null,b("ReactDOM").createPortal(b("React").createElement(b("SavedForLaterDashboardItemTags.react"),{containingLists:a}),g),b("ReactDOM").createPortal(b("React").createElement(b("SavedForLaterDashboardAddToCollectionButton.react"),{nonContainingLists:c,addItemToList:this.$3,itemId:this.props.itemId}),f),b("ReactDOM").createPortal(b("React").createElement(b("SavedForLaterDashboardMoreButton.react"),{containingLists:a,removeItemFromList:this.$4,toggleSeenStatus:this.$5,saveId:this.props.saveId,cancelUnsaveItem:this.$6,unsaveItem:this.$7,itemId:this.props.itemId,unseen:this.state.unseen,unarchiveItem:this.$8,isArchive:this.props.isArchive}),e),b("ReactDOM").createPortal(this.$9(),d))};a.prototype.$9=function(){return this.state.unseen?b("React").createElement(b("Image.react"),{className:"_4trz",src:g("115777")}):null};a.prototype.$2=function(a){return this.props.savedLists.filter(function(b){return a==this.state.belongsToList.get(b.listId)}.bind(this))};a.prototype.$10=function(){var a=b("$")("item-"+this.props.itemId),c=b("$")("removed-item-"+this.props.itemId);this.state.removed?(b("CSS").removeClass(a,"hidden_elem"),b("CSS").addClass(c,"hidden_elem")):(b("CSS").removeClass(c,"hidden_elem"),b("CSS").addClass(a,"hidden_elem"));this.setState(function(a,b){return{removed:!a.removed}})};a.prototype.$11=function(){var a=b("$")("item-"+this.props.itemId),c=b("$")("unarchived-item-"+this.props.itemId);this.state.removed?(b("CSS").removeClass(a,"hidden_elem"),b("CSS").addClass(c,"hidden_elem")):(b("CSS").removeClass(c,"hidden_elem"),b("CSS").addClass(a,"hidden_elem"));this.setState(function(a,b){return{removed:!a.removed}})};e.exports=a}),null);
__d("SavedForLaterDashboardMoreButton",["csx","cx","fbt","Banzai","CollectionsDisplaySurface","CollectionCurationMechanisms","DOMQuery","Parent","SavedForLaterDashboardHeader","Event","CSS","React","ReactDOM","SavedForLaterDashboardItemListsManager","guid","tidyEvent"],(function(a,b,c,d,e,f,g,h,i){__p&&__p();var j="archive",k="unarchive",l="remove",m="remove_with_confirm",n="add_to_list",o="_2iv7",p="_5wcf",q="._5yjp",r="_4mvy",s="._3a4y",t="._3a4x",u="saved_for_later:click";function v(a,c,d,e,f,g,h){"use strict";__p&&__p();g=b("Parent").byClass(a,p);b("tidyEvent")(b("Event").listen(g,"saveItemConsumed",function(a){v.updateSeenState(c,b("CollectionCurationMechanisms").MARK_AS_SEEN_BUTTON)}));b("tidyEvent")(c.subscribe("itemclick",function(g,i){__p&&__p();g=b("Parent").byClass(a,p);if(g==null)return;var o=i.item.getValue();if(o==j)b("SavedForLaterDashboardHeader").updateAndReplace(g,d);else if(o==k)b("SavedForLaterDashboardHeader").updateAndReplace(g,e);else if(o==l)b("SavedForLaterDashboardHeader").updateAndReplace(g,f);else if(o==m)h&&b("SavedForLaterDashboardHeader").removeItem(g,f,h,b("CollectionCurationMechanisms").DELETE_BUTTON);else if(o){o=o.split(",");var s=o[0];if(s==n){var t=o[1];h&&b("SavedForLaterDashboardItemListsManager").addToListsForItem(h.object_id,t);t=i.item.getLabel();var w;h&&(w=h.list_count==null?null:++h.list_count);v.updateSubtitle(g,t,w);c.removeItem(i.item)}else if(s==b("CollectionCurationMechanisms").MARK_AS_SEEN_BUTTON||s==b("CollectionCurationMechanisms").MARK_AS_UNSEEN_BUTTON){b("Banzai").post(u,{save_id:o[1],surface:b("CollectionsDisplaySurface").SAVE_DASHBOARD,mechanism:s,event_id:b("guid")()},{delay:0,retry:!0});t=b("DOMQuery").find(g,q);s==b("CollectionCurationMechanisms").MARK_AS_SEEN_BUTTON?b("CSS").addClass(t,r):b("CSS").removeClass(t,r);v.updateSeenState(c,s)}}}))}v.updateSeenState=function(a,c){"use strict";a=a.getRoot();c==b("CollectionCurationMechanisms").MARK_AS_UNSEEN_BUTTON?b("CSS").removeClass(a,o):b("CSS").addClass(a,o)};v.updateSubtitle=function(a,c,d){"use strict";__p&&__p();if(d==null)return;d--;if(d===0){var e=b("DOMQuery").scry(a,s);e&&e.length>0&&b("ReactDOM").render(b("React").createElement("span",null," \xb7 ",b("React").createElement("span",{className:"_3a4x"},i._("Saved to {collection_name}",[i._param("collection_name",b("React").createElement("span",{className:"_440l"},c))]))),e[0])}else{e=b("DOMQuery").scry(a,t);e&&e.length>0&&b("ReactDOM").render(b("React").createElement("span",null,i._("Saved to {collection_name}",[i._param("collection_name",b("React").createElement("span",{className:"_440l"},c))])," ",b("React").createElement("span",{className:"_440l"},i._({"*":"+{number} others","_1":"+1 other"},[i._plural(d,"number")]))),e[0])}};e.exports=v}),null);
__d("SavedForLaterDashboardOptInNUX",["AsyncRequest","DOM"],(function(a,b,c,d,e,f){function a(a,c){"use strict";a.setDismissHandler(function(){b("DOM").remove(a.getRoot()),a.destroy(),new(b("AsyncRequest"))(c).send()})}e.exports=a}),null);
__d("SavedForLaterDashboardRemoveButton",["cx","Event","Parent","SavedForLaterDashboardHeader","CollectionCurationMechanisms","SavedForLaterDashboardItemListsManager","tidyEvent"],(function(a,b,c,d,e,f,g){__p&&__p();var h="_5wcf";function a(a,c,d){"use strict";b("tidyEvent")(b("Event").listen(a,"click",function(e){e=b("Parent").byClass(a,h);if(e){var f=b("SavedForLaterDashboardItemListsManager").getListsForItem(d.object_id);f&&(c.decrement=Array.from(f));b("SavedForLaterDashboardHeader").removeItem(e,c,d,b("CollectionCurationMechanisms").XOUT_BUTTON)}}))}e.exports=a}),null);
__d("SavedForLaterDashboardSearch",["cx","Banzai","CollectionCurationMechanisms","CollectionsDisplaySurface","DOM","Event","LoadingIndicator.react","PageTransitions","React","ReactDOM","SavedForLaterDashboardDataStore","tidyEvent"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();var h="_5x-b",i="saved_loading_indicator",j="_2pjv";a={init:function(a,c){__p&&__p();a=b("DOM").find(a,"button");b("tidyEvent")(b("Event").listen(a,"click",function(a){__p&&__p();var d=c.trim();if(a.isRightClick()||a.isMiddleClick()||d.length==0)return;a=b("PageTransitions").getCurrentURI().getUnqualifiedURI();d=b("PageTransitions").getCurrentURI().getUnqualifiedURI();d.setQueryData({});c!==null&&d.addQueryData({search_token:c});if(Object.prototype.hasOwnProperty.call(a.getQueryData(),"collection_token")){var e=a.getQueryData().collection_token;d.addQueryData({collection_token:e})}b("PageTransitions").rewriteCurrentURI(a,d);e=b("DOM").find(document,"div."+j);b("ReactDOM").render(b("React").createElement("div",{className:h,id:i},b("React").createElement(b("LoadingIndicator.react"),{size:"large",color:"white"})),e)}))},initForSeeAllButton:function(a,c){b("tidyEvent")(b("Event").listen(a,"click",function(a){if(a.isRightClick()||a.isMiddleClick())return;b("Banzai").post(c,{collection_id:b("SavedForLaterDashboardDataStore").getCollectionID(),surface:b("CollectionsDisplaySurface").SAVE_SEARCH_DASHBOARD,mechanism:b("CollectionCurationMechanisms").SEE_ALL_BUTTON});a=b("DOM").find(document,"div."+j);b("ReactDOM").render(b("React").createElement("div",{className:h,id:i},b("React").createElement(b("LoadingIndicator.react"),{size:"large",color:"white"})),a)}))}};e.exports=a}),null);
__d("XSavedForLaterDashboardSettingsModuleController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/saved/settings/edit/",{})}),null);
__d("SavedForLaterDashboardSettingsModule",["cx","AsyncRequest","CollectionsDisplaySurface","DOM","Event","LoadingIndicator.react","PageTransitions","React","ReactDOM","SavedForLaterDashboardDataStore","XSavedForLaterDashboardSettingsModuleController","ge","tidyEvent"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();var h="_3-i6",i="_3-i7",j="_5x-b",k="saved_loading_indicator",l="_2pjv",m="_1hqh";a={init:function(a,c){__p&&__p();b("tidyEvent")(b("Event").listen(a,"click",function(a){__p&&__p();if(a.isRightClick()||a.isMiddleClick())return;a=b("ge")(h);a=b("DOM").scry(a,"li."+m)[0];a.firstChild.setAttribute("class",i);b("SavedForLaterDashboardDataStore").setCollectionID(c);b("SavedForLaterDashboardDataStore").setSurface(b("CollectionsDisplaySurface").SAVE_SETTINGS_DASHBOARD);a=b("PageTransitions").getCurrentURI().getUnqualifiedURI();var d=b("PageTransitions").getCurrentURI().getUnqualifiedURI();d.setQueryData({});b("PageTransitions").rewriteCurrentURI(a,d);a=b("DOM").find(document,"div."+l);b("ReactDOM").render(b("React").createElement("div",{className:j,id:k},b("React").createElement(b("LoadingIndicator.react"),{size:"large",color:"white"})),a);d=b("XSavedForLaterDashboardSettingsModuleController").getURIBuilder().getURI();new(b("AsyncRequest"))(d).send()}))}};e.exports=a}),null);
__d("SavedForLaterDashboardSidebarSearch",["XUISubNavigationItemsAndNavigationShortcutsHighlighting","Event"],(function(a,b,c,d,e,f){"use strict";function a(a,c){b("Event").listen(a,"submit",b("XUISubNavigationItemsAndNavigationShortcutsHighlighting").removeHighlightingFromAllItemsExceptForURI.bind(c))}e.exports=a}),null);
__d("SavedForLaterDashboardTopLevelArchiveButton",["cx","DOM","Event","Parent","SavedForLaterDashboardHeader","tidyEvent"],(function(a,b,c,d,e,f,g){var h="_5wcf";function a(a,c){"use strict";b("tidyEvent")(b("Event").listen(a,"click",function(d){d=b("Parent").byClass(a,h);d&&(b("SavedForLaterDashboardHeader").update(c.increment,c.decrement),d&&b("DOM").replace(d,c.markup))}))}e.exports=a}),null);
__d("SavedForLaterHeaderCollectionCounter",["fbt","SavedForLaterDashboardHeader","DOM"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();var h="savedForLaterCollectionHeader";function a(a,c,d){this.itemCounterContainer=a,this.listId=c.toString(),this.count=d,b("SavedForLaterDashboardHeader").addItemCounter(this.listId,this,h)}a.prototype.getListId=function(){return this.listId};a.prototype.increment=function(){this.$1(this.$2()+1)};a.prototype.decrement=function(){this.$1(this.$2()-1)};a.prototype.$2=function(){return this.count};a.prototype.$1=function(a){a<0&&(a=0);var c=g._({"*":"{number} items","_1":"1 item"},[g._plural(a,"number")]);b("DOM").setContent(this.itemCounterContainer,c);this.count=a};e.exports=a}),null);
__d("SavedForLaterSidebarBadgeAccesory",["SavedForLaterDashboardHeader","CSS","DOM"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g="savedForLaterSidebarCounter";function a(a,c,d,e){this.sidebarBadgeAccessory=a,this.maxCount=e,this.listId=c.toString(),this.count=d,b("SavedForLaterDashboardHeader").addItemCounter(this.listId,this,g)}a.prototype.getListId=function(){return this.listId};a.prototype.increment=function(){this.$1(this.$2()+1)};a.prototype.decrement=function(){this.$1(this.$2()-1)};a.prototype.$2=function(){return this.count};a.prototype.$1=function(a){a<0&&(a=0),a<=0?b("CSS").addClass(this.sidebarBadgeAccessory,"hidden_elem"):b("CSS").removeClass(this.sidebarBadgeAccessory,"hidden_elem"),a<=this.maxCount?b("DOM").setContent(this.sidebarBadgeAccessory,a):b("DOM").setContent(this.sidebarBadgeAccessory,this.maxCount+"+"),this.count=a};e.exports=a}),null);