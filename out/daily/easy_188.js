// Compiled by ClojureScript 0.0-2740 {}
goog.provide('daily.easy_188');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('ajax.core');
goog.require('reagent.core');
goog.require('dommy.core');
/**
* Converts a two digit year string into a four digit year string. The valid two digit years are between 1950 and 2049.
* This means numbers between 00 and 49 get 20 preappended and numbers between 50 and 99 get 19.
*/
daily.easy_188.convert_year = (function convert_year(two_digit_year){
if((parseInt(two_digit_year) < (50))){
return [cljs.core.str("20"),cljs.core.str(two_digit_year)].join('');
} else {
return [cljs.core.str("19"),cljs.core.str(two_digit_year)].join('');
}
});
/**
* Converts three character month abrieviations into their numeral representation. It uses a simple map lookup.
* 
* There is some redundancy in the map. A different implementation might use a vector of the abrieviations and get the
* index of the query word.
*/
daily.easy_188.convert_month = (function convert_month(month_word){
return cljs.core.get.call(null,cljs.core.PersistentHashMap.fromArrays(["Sep","Jun","May","Nov","Dec","Mar","Feb","Jan","Aug","Apr","Oct","Jul"],["09","06","05","11","12","03","02","01","08","04","10","07"]),month_word);
});
/**
* Combine the year, month, and day strings with the correct dilimeter for ISO 8601 format.
*/
daily.easy_188.to_iso8601 = (function to_iso8601(year,month,day){
return [cljs.core.str(year),cljs.core.str("-"),cljs.core.str(month),cljs.core.str("-"),cljs.core.str(day)].join('');
});
/**
* Transforms the given function into one that takes a vector as an argument, ignoring the first value in the vector.
* The original function is called with the last values in the vector as individual arguments.
*/
daily.easy_188.apply_groups = (function apply_groups(f){
return (function (p1__6617_SHARP_){
return cljs.core.apply.call(null,f,cljs.core.rest.call(null,p1__6617_SHARP_));
});
});
/**
* ## Format Matching
* 
* This is the core function. It goes through each of the given regular expressions in sequence. When it finds one that
* matches, it passes the result of [`re-matches`](https://clojuredocs.org/clojure.core/re-matches) to the given
* function. In the case of a date that is already in the correct format, the `identity` function returns it unchanged.
* The other functions rearrange the matched groups, running them through the auxiliary functions as necessary.
* 
* The regular expressions were tested with the test input at [regexr](http://regexr.com/3a9ec)
*/
daily.easy_188.normalize_date = (function normalize_date(date){
var pred__6636 = cljs.core.re_matches;
var expr__6637 = date;
var temp__4124__auto__ = pred__6636.call(null,/\d\d\d\d-\d\d-\d\d/,expr__6637);
if(cljs.core.truth_(temp__4124__auto__)){
var p__4471__auto__ = temp__4124__auto__;
return cljs.core.identity.call(null,p__4471__auto__);
} else {
var temp__4124__auto____$1 = pred__6636.call(null,/(\d\d)\/(\d\d)\/(\d\d)/,expr__6637);
if(cljs.core.truth_(temp__4124__auto____$1)){
var p__4471__auto__ = temp__4124__auto____$1;
return daily.easy_188.apply_groups.call(null,((function (p__4471__auto__,temp__4124__auto____$1,temp__4124__auto__,pred__6636,expr__6637){
return (function (p1__6619_SHARP_,p2__6620_SHARP_,p3__6618_SHARP_){
return daily.easy_188.to_iso8601.call(null,daily.easy_188.convert_year.call(null,p3__6618_SHARP_),p1__6619_SHARP_,p2__6620_SHARP_);
});})(p__4471__auto__,temp__4124__auto____$1,temp__4124__auto__,pred__6636,expr__6637))
).call(null,p__4471__auto__);
} else {
var temp__4124__auto____$2 = pred__6636.call(null,/(\d\d)#(\d\d)#(\d\d)/,expr__6637);
if(cljs.core.truth_(temp__4124__auto____$2)){
var p__4471__auto__ = temp__4124__auto____$2;
return daily.easy_188.apply_groups.call(null,((function (p__4471__auto__,temp__4124__auto____$2,temp__4124__auto____$1,temp__4124__auto__,pred__6636,expr__6637){
return (function (p1__6622_SHARP_,p2__6621_SHARP_,p3__6623_SHARP_){
return daily.easy_188.to_iso8601.call(null,daily.easy_188.convert_year.call(null,p2__6621_SHARP_),p1__6622_SHARP_,p3__6623_SHARP_);
});})(p__4471__auto__,temp__4124__auto____$2,temp__4124__auto____$1,temp__4124__auto__,pred__6636,expr__6637))
).call(null,p__4471__auto__);
} else {
var temp__4124__auto____$3 = pred__6636.call(null,/(\d\d)\*(\d\d)\*(\d\d\d\d)/,expr__6637);
if(cljs.core.truth_(temp__4124__auto____$3)){
var p__4471__auto__ = temp__4124__auto____$3;
return daily.easy_188.apply_groups.call(null,((function (p__4471__auto__,temp__4124__auto____$3,temp__4124__auto____$2,temp__4124__auto____$1,temp__4124__auto__,pred__6636,expr__6637){
return (function (p1__6626_SHARP_,p2__6625_SHARP_,p3__6624_SHARP_){
return daily.easy_188.to_iso8601.call(null,p3__6624_SHARP_,p2__6625_SHARP_,p1__6626_SHARP_);
});})(p__4471__auto__,temp__4124__auto____$3,temp__4124__auto____$2,temp__4124__auto____$1,temp__4124__auto__,pred__6636,expr__6637))
).call(null,p__4471__auto__);
} else {
var temp__4124__auto____$4 = pred__6636.call(null,/(\w\w\w) (\d\d), (\d\d\d\d)/,expr__6637);
if(cljs.core.truth_(temp__4124__auto____$4)){
var p__4471__auto__ = temp__4124__auto____$4;
return daily.easy_188.apply_groups.call(null,((function (p__4471__auto__,temp__4124__auto____$4,temp__4124__auto____$3,temp__4124__auto____$2,temp__4124__auto____$1,temp__4124__auto__,pred__6636,expr__6637){
return (function (p1__6628_SHARP_,p2__6629_SHARP_,p3__6627_SHARP_){
return daily.easy_188.to_iso8601.call(null,p3__6627_SHARP_,daily.easy_188.convert_month.call(null,p1__6628_SHARP_),p2__6629_SHARP_);
});})(p__4471__auto__,temp__4124__auto____$4,temp__4124__auto____$3,temp__4124__auto____$2,temp__4124__auto____$1,temp__4124__auto__,pred__6636,expr__6637))
).call(null,p__4471__auto__);
} else {
var temp__4124__auto____$5 = pred__6636.call(null,/(\w\w\w) (\d\d), (\d\d)/,expr__6637);
if(cljs.core.truth_(temp__4124__auto____$5)){
var p__4471__auto__ = temp__4124__auto____$5;
return daily.easy_188.apply_groups.call(null,((function (p__4471__auto__,temp__4124__auto____$5,temp__4124__auto____$4,temp__4124__auto____$3,temp__4124__auto____$2,temp__4124__auto____$1,temp__4124__auto__,pred__6636,expr__6637){
return (function (p1__6631_SHARP_,p2__6632_SHARP_,p3__6630_SHARP_){
return daily.easy_188.to_iso8601.call(null,daily.easy_188.convert_year.call(null,p3__6630_SHARP_),daily.easy_188.convert_month.call(null,p1__6631_SHARP_),p2__6632_SHARP_);
});})(p__4471__auto__,temp__4124__auto____$5,temp__4124__auto____$4,temp__4124__auto____$3,temp__4124__auto____$2,temp__4124__auto____$1,temp__4124__auto__,pred__6636,expr__6637))
).call(null,p__4471__auto__);
} else {
return "no match";
}
}
}
}
}
}
});
daily.easy_188.single_input = (function single_input(){
var value = reagent.core.atom.call(null,"10*11*2010");
return ((function (value){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Input: ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref.call(null,value),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (value){
return (function (p1__6639_SHARP_){
return cljs.core.reset_BANG_.call(null,value,p1__6639_SHARP_.target.value);
});})(value))
], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Output: ",daily.easy_188.normalize_date.call(null,cljs.core.deref.call(null,value))], null)], null)], null);
});
;})(value))
});
reagent.core.render_component.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [daily.easy_188.single_input], null),document.getElementById("single-input"));
daily.easy_188.test_input = (function test_input(input_file){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table","table",-564943036),(function (){var iter__4515__auto__ = (function iter__6644(s__6645){
return (new cljs.core.LazySeq(null,(function (){
var s__6645__$1 = s__6645;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__6645__$1);
if(temp__4126__auto__){
var s__6645__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__6645__$2)){
var c__4513__auto__ = cljs.core.chunk_first.call(null,s__6645__$2);
var size__4514__auto__ = cljs.core.count.call(null,c__4513__auto__);
var b__6647 = cljs.core.chunk_buffer.call(null,size__4514__auto__);
if((function (){var i__6646 = (0);
while(true){
if((i__6646 < size__4514__auto__)){
var input = cljs.core._nth.call(null,c__4513__auto__,i__6646);
cljs.core.chunk_append.call(null,b__6647,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),input], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),daily.easy_188.normalize_date.call(null,input)], null)], null));

var G__6648 = (i__6646 + (1));
i__6646 = G__6648;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6647),iter__6644.call(null,cljs.core.chunk_rest.call(null,s__6645__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6647),null);
}
} else {
var input = cljs.core.first.call(null,s__6645__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),input], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),daily.easy_188.normalize_date.call(null,input)], null)], null),iter__6644.call(null,cljs.core.rest.call(null,s__6645__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4515__auto__.call(null,clojure.string.split_lines.call(null,input_file));
})()], null);
});
var button_6649 = document.getElementById("test-input-button");
dommy.core.listen_BANG_.call(null,button_6649,new cljs.core.Keyword(null,"click","click",1912301393),((function (button_6649){
return (function (){
return ajax.core.GET.call(null,"https://gist.githubusercontent.com/coderd00d/a88d4d2da014203898af/raw/73e9055107b5185468e2ec28b27e3b7b853312e9/gistfile1.txt",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"handler","handler",-195596612),((function (button_6649){
return (function (response){
return reagent.core.render_component.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [daily.easy_188.test_input,response], null),document.getElementById("test-input"));
});})(button_6649))
], null));
});})(button_6649))
);

//# sourceMappingURL=easy_188.js.map