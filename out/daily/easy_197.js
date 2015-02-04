// Compiled by ClojureScript 0.0-2740 {}
goog.provide('daily.easy_197');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('dommy.core');
/**
* Convert a numeral character into an integer. In this case, it also works with the Roman numeral "X".
*/
daily.easy_197.char_to_num = (function char_to_num(chr){
if(cljs.core._EQ_.call(null,chr,"X")){
return (10);
} else {
return parseInt(chr);
}
});
/**
* The magic function here is `map-indexed`, which applies a binary function to pairs of elements and their indicies.
* The indicies are 0 to 9, so I subtract them from 10 to get 10 to 1.
* 
* The threading macro `->>` would have worked instead of `as->` if it wasn't for that pesky `mod`. I like `as->` better
* anyway because I have a visual mark of where the value goes in the next function.
*/
daily.easy_197.validate_isbn_10 = (function validate_isbn_10(input){
var $ = input;
var $__$1 = cljs.core.filter.call(null,((function ($){
return (function (p1__5790_SHARP_){
return cljs.core.not_EQ_.call(null,"-",p1__5790_SHARP_);
});})($))
,$);
var $__$2 = cljs.core.map.call(null,daily.easy_197.char_to_num,$__$1);
var $__$3 = cljs.core.map_indexed.call(null,((function ($,$__$1,$__$2){
return (function (p1__5791_SHARP_,p2__5792_SHARP_){
return (((10) - p1__5791_SHARP_) * p2__5792_SHARP_);
});})($,$__$1,$__$2))
,$__$2);
var $__$4 = cljs.core.reduce.call(null,cljs.core._PLUS_,$__$3);
var $__$5 = cljs.core.mod.call(null,$__$4,(11));
var $__$6 = cljs.core._EQ_.call(null,(0),$__$5);
return $__$6;
});
daily.easy_197.single_input = (function single_input(){
var value = reagent.core.atom.call(null,"0-3453-0256-7");
return ((function (value){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Input: ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref.call(null,value),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (value){
return (function (p1__5793_SHARP_){
return cljs.core.reset_BANG_.call(null,value,p1__5793_SHARP_.target.value);
});})(value))
], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Output: ",[cljs.core.str(daily.easy_197.validate_isbn_10.call(null,cljs.core.deref.call(null,value)))].join('')], null)], null)], null);
});
;})(value))
});
reagent.core.render_component.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [daily.easy_197.single_input], null),document.getElementById("single-input"));

//# sourceMappingURL=easy_197.js.map