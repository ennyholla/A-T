if (self.CavalryLogger) { CavalryLogger.start_js(["toIPh"]); }

__d("PhotosAppSection",["ProfileTabUtils","TidyArbiterMixin","TimelineAppSectionCuration"],(function(a,b,c,d,e,f){var g=babelHelpers["extends"]({init:function(a){var c=b("ProfileTabUtils").getIDForSectionKey(a);b("TimelineAppSectionCuration").subscribe("toggle_drawer",function(a,b){b.section.id===c&&g.inform("toggle_drawer",b)})}},b("TidyArbiterMixin"));e.exports=g}),null);
__d("TagSuggestionsDrawer",["AsyncRequest","PhotosAppSection"],(function(a,b,c,d,e,f){var g=!1,h={init:function(){if(g)return;g=!0;b("PhotosAppSection").subscribe("toggle_drawer",h._onToggle)},_onToggle:function(a,b){b.button_clicked=="show"?h._notify(!1):h._notify(!0)},_notify:function(a){new(b("AsyncRequest"))("/ajax/medley/tag_suggestions_drawer.php").setData({is_closed:a}).send()}};e.exports=h}),null);
__d("PhotoCreateButtonsVisibility",["csx","Arbiter","CSS","DOMQuery","Event","Parent","$"],(function(a,b,c,d,e,f,g){__p&&__p();function h(a){a=b("Parent").bySelector(a,"._3cz");return b("DOMQuery").find(a,"._69l")}a={addHideClickListener:function(a){b("Event").listen(a,"click",function(){b("CSS").hide(h(a))})},addShowClickListener:function(a){b("Event").listen(a,"click",function(){b("CSS").show(h(a))})},hideButtons:function(a){a=b("$")("pagelet_timeline_medley_photos");b("CSS").hide(b("DOMQuery").find(a,"._69l"))},showButtonOnTabChange:function(a){b("Arbiter").subscribe("Medley/tab-change",function(c){b("CSS").show(a)})}};e.exports=a}),null);