// Compiled by ClojureScript 0.0-2740 {}
goog.provide('daily.easy_198');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('dommy.core');
/**
* Convert a string into a multiset of characters. Since Clojure has no native multiset, I'm using a map of characters
* to integers, where the integer value is the number of that character that is in the string.
*/
daily.easy_198.count_chars = (function count_chars(word){
return cljs.core.reduce.call(null,(function (p1__5767_SHARP_,p2__5768_SHARP_){
return cljs.core.merge_with.call(null,cljs.core._PLUS_,p1__5767_SHARP_,new cljs.core.PersistentArrayMap.fromArray([p2__5768_SHARP_,(1)], true, false));
}),cljs.core.PersistentArrayMap.EMPTY,word);
});
/**
* The reverse operation. Take a multiset of characters and expand it a string.
*/
daily.easy_198.expand_chars = (function expand_chars(char_counts){
return cljs.core.apply.call(null,cljs.core.str,cljs.core.flatten.call(null,(function (){var iter__4515__auto__ = (function iter__5777(s__5778){
return (new cljs.core.LazySeq(null,(function (){
var s__5778__$1 = s__5778;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__5778__$1);
if(temp__4126__auto__){
var s__5778__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__5778__$2)){
var c__4513__auto__ = cljs.core.chunk_first.call(null,s__5778__$2);
var size__4514__auto__ = cljs.core.count.call(null,c__4513__auto__);
var b__5780 = cljs.core.chunk_buffer.call(null,size__4514__auto__);
if((function (){var i__5779 = (0);
while(true){
if((i__5779 < size__4514__auto__)){
var vec__5783 = cljs.core._nth.call(null,c__4513__auto__,i__5779);
var char$ = cljs.core.nth.call(null,vec__5783,(0),null);
var count = cljs.core.nth.call(null,vec__5783,(1),null);
cljs.core.chunk_append.call(null,b__5780,cljs.core.repeat.call(null,count,char$));

var G__5785 = (i__5779 + (1));
i__5779 = G__5785;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5780),iter__5777.call(null,cljs.core.chunk_rest.call(null,s__5778__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5780),null);
}
} else {
var vec__5784 = cljs.core.first.call(null,s__5778__$2);
var char$ = cljs.core.nth.call(null,vec__5784,(0),null);
var count = cljs.core.nth.call(null,vec__5784,(1),null);
return cljs.core.cons.call(null,cljs.core.repeat.call(null,count,char$),iter__5777.call(null,cljs.core.rest.call(null,s__5778__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4515__auto__.call(null,char_counts);
})()));
});
/**
* Combine two multisets, destroying duplicate letters. This may result in negative letter counts, but they will be
* ignored on expansion.
*/
daily.easy_198.explode = (function explode(left,right){
return cljs.core.merge_with.call(null,cljs.core._,left,right);
});
/**
* Put it all together.
* 
* 1. Convert each word to a multiset
* 2. Do battle
* 3. Expand the resulting multiset back to a string
*/
daily.easy_198.eval_enemy_words = (function eval_enemy_words(left,right){
return daily.easy_198.expand_chars.call(null,daily.easy_198.explode.call(null,daily.easy_198.count_chars.call(null,left),daily.easy_198.count_chars.call(null,right)));
});
daily.easy_198.single_input = (function single_input(){
var left = reagent.core.atom.call(null,"hat");
var right = reagent.core.atom.call(null,"cat");
return ((function (left,right){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Input: ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref.call(null,left),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (left,right){
return (function (p1__5786_SHARP_){
return cljs.core.reset_BANG_.call(null,left,p1__5786_SHARP_.target.value);
});})(left,right))
], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref.call(null,right),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (left,right){
return (function (p1__5787_SHARP_){
return cljs.core.reset_BANG_.call(null,right,p1__5787_SHARP_.target.value);
});})(left,right))
], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Output: ",[cljs.core.str(daily.easy_198.eval_enemy_words.call(null,cljs.core.deref.call(null,left),cljs.core.deref.call(null,right)))].join('')], null),(function (){var l_count = cljs.core.count.call(null,cljs.core.deref.call(null,left));
var r_count = cljs.core.count.call(null,cljs.core.deref.call(null,right));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),((cljs.core._EQ_.call(null,l_count,r_count))?"tie":(((l_count > r_count))?"left wins":"right wins"))], null);
})()], null)], null);
});
;})(left,right))
});
reagent.core.render_component.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [daily.easy_198.single_input], null),document.getElementById("single-input"));

//# sourceMappingURL=easy_198.js.map