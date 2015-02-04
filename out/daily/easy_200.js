// Compiled by ClojureScript 0.0-2740 {}
goog.provide('daily.easy_200');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('reagent.core');
goog.require('dommy.core');
/**
* Read in the input string and divide it into dimensions, the array, and fill arguments.
*/
daily.easy_200.read_input = (function read_input(input_text){
var all_lines = clojure.string.split_lines.call(null,input_text);
var data_lines = cljs.core.butlast.call(null,cljs.core.drop.call(null,(1),all_lines));
var fill_args = clojure.string.split.call(null,cljs.core.last.call(null,all_lines),/ /);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.vec.call(null,cljs.core.map.call(null,cljs.core.vec,data_lines)),cljs.core.vec.call(null,cljs.core.reverse.call(null,cljs.core.map.call(null,parseInt,cljs.core.take.call(null,(2),fill_args)))),cljs.core.last.call(null,fill_args)], null);
});
/**
* Find all of the neighbors of a cell that would be filled from that cell. Neighbors must be inside of the bounds of
* the array and have the same contents.
*/
daily.easy_200.matching_neighbors = (function matching_neighbors(array,point){
var iter__4515__auto__ = (function iter__5740(s__5741){
return (new cljs.core.LazySeq(null,(function (){
var s__5741__$1 = s__5741;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__5741__$1);
if(temp__4126__auto__){
var s__5741__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__5741__$2)){
var c__4513__auto__ = cljs.core.chunk_first.call(null,s__5741__$2);
var size__4514__auto__ = cljs.core.count.call(null,c__4513__auto__);
var b__5743 = cljs.core.chunk_buffer.call(null,size__4514__auto__);
if((function (){var i__5742 = (0);
while(true){
if((i__5742 < size__4514__auto__)){
var vec__5748 = cljs.core._nth.call(null,c__4513__auto__,i__5742);
var dx = cljs.core.nth.call(null,vec__5748,(0),null);
var dy = cljs.core.nth.call(null,vec__5748,(1),null);
var char$ = cljs.core.get_in.call(null,array,point);
var vec__5749 = point;
var x = cljs.core.nth.call(null,vec__5749,(0),null);
var y = cljs.core.nth.call(null,vec__5749,(1),null);
var x_SINGLEQUOTE_ = (x + dx);
var y_SINGLEQUOTE_ = (y + dy);
if(((x_SINGLEQUOTE_ >= (0))) && ((y_SINGLEQUOTE_ >= (0))) && ((y_SINGLEQUOTE_ < cljs.core.count.call(null,array))) && ((x_SINGLEQUOTE_ < cljs.core.count.call(null,cljs.core.get.call(null,array,y_SINGLEQUOTE_)))) && (cljs.core._EQ_.call(null,char$,cljs.core.get_in.call(null,array,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x_SINGLEQUOTE_,y_SINGLEQUOTE_], null))))){
cljs.core.chunk_append.call(null,b__5743,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x_SINGLEQUOTE_,y_SINGLEQUOTE_], null));

var G__5752 = (i__5742 + (1));
i__5742 = G__5752;
continue;
} else {
var G__5753 = (i__5742 + (1));
i__5742 = G__5753;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5743),iter__5740.call(null,cljs.core.chunk_rest.call(null,s__5741__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5743),null);
}
} else {
var vec__5750 = cljs.core.first.call(null,s__5741__$2);
var dx = cljs.core.nth.call(null,vec__5750,(0),null);
var dy = cljs.core.nth.call(null,vec__5750,(1),null);
var char$ = cljs.core.get_in.call(null,array,point);
var vec__5751 = point;
var x = cljs.core.nth.call(null,vec__5751,(0),null);
var y = cljs.core.nth.call(null,vec__5751,(1),null);
var x_SINGLEQUOTE_ = (x + dx);
var y_SINGLEQUOTE_ = (y + dy);
if(((x_SINGLEQUOTE_ >= (0))) && ((y_SINGLEQUOTE_ >= (0))) && ((y_SINGLEQUOTE_ < cljs.core.count.call(null,array))) && ((x_SINGLEQUOTE_ < cljs.core.count.call(null,cljs.core.get.call(null,array,y_SINGLEQUOTE_)))) && (cljs.core._EQ_.call(null,char$,cljs.core.get_in.call(null,array,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x_SINGLEQUOTE_,y_SINGLEQUOTE_], null))))){
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x_SINGLEQUOTE_,y_SINGLEQUOTE_], null),iter__5740.call(null,cljs.core.rest.call(null,s__5741__$2)));
} else {
var G__5754 = cljs.core.rest.call(null,s__5741__$2);
s__5741__$1 = G__5754;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4515__auto__.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-1)], null)], null));
});
/**
* Perform one step of the flood fill.
* 
* 1. Change the character at all of the cells that have been marked for filling.
* 2. Find any new cells that will be changed on the next step.
*/
daily.easy_200.flood_fill_step = (function flood_fill_step(p__5758){
var vec__5760 = p__5758;
var array = cljs.core.nth.call(null,vec__5760,(0),null);
var fill_points = cljs.core.nth.call(null,vec__5760,(1),null);
var fill_char = cljs.core.nth.call(null,vec__5760,(2),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.reduce.call(null,((function (vec__5760,array,fill_points,fill_char){
return (function (p1__5755_SHARP_,p2__5756_SHARP_){
return cljs.core.assoc_in.call(null,p1__5755_SHARP_,p2__5756_SHARP_,fill_char);
});})(vec__5760,array,fill_points,fill_char))
,array,fill_points),cljs.core.set.call(null,cljs.core.mapcat.call(null,((function (vec__5760,array,fill_points,fill_char){
return (function (p1__5757_SHARP_){
return daily.easy_200.matching_neighbors.call(null,array,p1__5757_SHARP_);
});})(vec__5760,array,fill_points,fill_char))
,fill_points)),fill_char], null);
});
/**
* Repeatedly call `flood-fill-step` on its own result (`iterate`) until there are no more new cells to fill.
* Ignore intermediate results; we only care about the final state.
*/
daily.easy_200.flood_fill = (function flood_fill(array,fill_point,fill_char){
return cljs.core.first.call(null,cljs.core.drop_while.call(null,(function (p1__5761_SHARP_){
return !(cljs.core.empty_QMARK_.call(null,cljs.core.get.call(null,p1__5761_SHARP_,(1))));
}),cljs.core.iterate.call(null,daily.easy_200.flood_fill_step,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [array,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [fill_point], null),fill_char], null))));
});
/**
* Take just the data array and format it nicely.
*/
daily.easy_200.write_output = (function write_output(array){
return clojure.string.join.call(null,"\n",cljs.core.map.call(null,clojure.string.join,cljs.core.first.call(null,array)));
});
/**
* Put it all together and print a helpful message when there is a problem.
* 
* 1. Parse raw input
* 2. Perform flood-fille
* 3. Format output
*/
daily.easy_200.process_input = (function process_input(input_text){
try{return daily.easy_200.write_output.call(null,cljs.core.apply.call(null,daily.easy_200.flood_fill,daily.easy_200.read_input.call(null,input_text)));
}catch (e5763){var e = e5763;
return [cljs.core.str("Problem with processing input: "),cljs.core.str(e)].join('');
}});
if(typeof daily.easy_200.input_text !== 'undefined'){
} else {
daily.easy_200.input_text = reagent.core.atom.call(null,"9 9\naaaaaaaaa\naaadefaaa\nabcdafgha\nabcdafgha\nabcdafgha\nabcdafgha\naacdafgaa\naaadafaaa\naaaaaaaaa\n8 3 ,");
}
daily.easy_200.input_component = (function input_component(){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"cols","cols",-1914801295),(37),new cljs.core.Keyword(null,"rows","rows",850049680),(24),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__5764_SHARP_){
return cljs.core.reset_BANG_.call(null,daily.easy_200.input_text,p1__5764_SHARP_.target.value);
}),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref.call(null,daily.easy_200.input_text)], null)], null);
});
});
reagent.core.render_component.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [daily.easy_200.input_component], null),document.getElementById("input"));
daily.easy_200.output_component = (function output_component(){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"cols","cols",-1914801295),(37),new cljs.core.Keyword(null,"rows","rows",850049680),(24),new cljs.core.Keyword(null,"read-only","read-only",-191706886),true,new cljs.core.Keyword(null,"value","value",305978217),daily.easy_200.process_input.call(null,cljs.core.deref.call(null,daily.easy_200.input_text))], null)], null);
});
});
reagent.core.render_component.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [daily.easy_200.output_component], null),document.getElementById("output"));

//# sourceMappingURL=easy_200.js.map