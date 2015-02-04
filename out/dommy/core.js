// Compiled by ClojureScript 0.0-2740 {}
goog.provide('dommy.core');
goog.require('cljs.core');
goog.require('dommy.utils');
goog.require('clojure.string');
/**
* Returns a selector in string format.
* Accepts string, keyword, or collection.
*/
dommy.core.selector = (function selector(data){
if(cljs.core.coll_QMARK_.call(null,data)){
return clojure.string.join.call(null," ",cljs.core.map.call(null,selector,data));
} else {
if((typeof data === 'string') || ((data instanceof cljs.core.Keyword))){
return cljs.core.name.call(null,data);
} else {
return null;
}
}
});
dommy.core.text = (function text(elem){
var or__3759__auto__ = elem.textContent;
if(cljs.core.truth_(or__3759__auto__)){
return or__3759__auto__;
} else {
return elem.innerText;
}
});
dommy.core.html = (function html(elem){
return elem.innerHTML;
});
dommy.core.value = (function value(elem){
return elem.value;
});
dommy.core.class$ = (function class$(elem){
return elem.className;
});
dommy.core.attr = (function attr(elem,k){
if(cljs.core.truth_(k)){
return elem.getAttribute(dommy.utils.as_str.call(null,k));
} else {
return null;
}
});
/**
* The computed style of `elem`, optionally specifying the key of
* a particular style to return
*/
dommy.core.style = (function() {
var style = null;
var style__1 = (function (elem){
return cljs.core.js__GT_clj.call(null,window.getComputedStyle(elem));
});
var style__2 = (function (elem,k){
return (window.getComputedStyle(elem)[dommy.utils.as_str.call(null,k)]);
});
style = function(elem,k){
switch(arguments.length){
case 1:
return style__1.call(this,elem);
case 2:
return style__2.call(this,elem,k);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
style.cljs$core$IFn$_invoke$arity$1 = style__1;
style.cljs$core$IFn$_invoke$arity$2 = style__2;
return style;
})()
;
dommy.core.px = (function px(elem,k){

var pixels = dommy.core.style.call(null,elem,k);
if(cljs.core.seq.call(null,pixels)){
return parseInt(pixels);
} else {
return null;
}
});
/**
* Does `elem` contain `c` in its class list
*/
dommy.core.has_class_QMARK_ = (function has_class_QMARK_(elem,c){
var c__$1 = dommy.utils.as_str.call(null,c);
var temp__4124__auto__ = elem.classList;
if(cljs.core.truth_(temp__4124__auto__)){
var class_list = temp__4124__auto__;
return class_list.contains(c__$1);
} else {
var temp__4126__auto__ = dommy.core.class$.call(null,elem);
if(cljs.core.truth_(temp__4126__auto__)){
var class_name = temp__4126__auto__;
var temp__4126__auto____$1 = dommy.utils.class_index.call(null,class_name,c__$1);
if(cljs.core.truth_(temp__4126__auto____$1)){
var i = temp__4126__auto____$1;
return (i >= (0));
} else {
return null;
}
} else {
return null;
}
}
});
/**
* Is `elem` hidden (as associated with hide!/show!/toggle!, using display: none)
*/
dommy.core.hidden_QMARK_ = (function hidden_QMARK_(elem){
return (dommy.core.style.call(null,elem,new cljs.core.Keyword(null,"display","display",242065432)) === "none");
});
/**
* Returns a map of the bounding client rect of `elem`
* as a map with [:top :left :right :bottom :width :height]
*/
dommy.core.bounding_client_rect = (function bounding_client_rect(elem){
var r = elem.getBoundingClientRect();
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"top","top",-1856271961),r.top,new cljs.core.Keyword(null,"bottom","bottom",-1550509018),r.bottom,new cljs.core.Keyword(null,"left","left",-399115937),r.left,new cljs.core.Keyword(null,"right","right",-452581833),r.right,new cljs.core.Keyword(null,"width","width",-384071477),r.width,new cljs.core.Keyword(null,"height","height",1025178622),r.height], null);
});
dommy.core.parent = (function parent(elem){
return elem.parentNode;
});
dommy.core.children = (function children(elem){
return elem.children;
});
/**
* Lazy seq of the ancestors of `elem`
*/
dommy.core.ancestors = (function ancestors(elem){
return cljs.core.take_while.call(null,cljs.core.identity,cljs.core.iterate.call(null,dommy.core.parent,elem));
});
dommy.core.ancestor_nodes = dommy.core.ancestors;
/**
* Returns a predicate on nodes that match `selector` at the
* time of this `matches-pred` call (may return outdated results
* if you fuck with the DOM)
*/
dommy.core.matches_pred = (function() {
var matches_pred = null;
var matches_pred__1 = (function (selector){
return matches_pred.call(null,document,selector);
});
var matches_pred__2 = (function (base,selector){
var matches = dommy.utils.__GT_Array.call(null,base.querySelectorAll(dommy.core.selector.call(null,selector)));
return ((function (matches){
return (function (elem){
return (matches.indexOf(elem) >= (0));
});
;})(matches))
});
matches_pred = function(base,selector){
switch(arguments.length){
case 1:
return matches_pred__1.call(this,base);
case 2:
return matches_pred__2.call(this,base,selector);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
matches_pred.cljs$core$IFn$_invoke$arity$1 = matches_pred__1;
matches_pred.cljs$core$IFn$_invoke$arity$2 = matches_pred__2;
return matches_pred;
})()
;
/**
* Closest ancestor of `elem` (up to `base`, if provided)
* that matches `selector`
*/
dommy.core.closest = (function() {
var closest = null;
var closest__2 = (function (elem,selector){
return closest.call(null,document.body,elem,selector);
});
var closest__3 = (function (base,elem,selector){
return cljs.core.first.call(null,cljs.core.filter.call(null,dommy.core.matches_pred.call(null,base,selector),cljs.core.take_while.call(null,(function (p1__13004_SHARP_){
return !((p1__13004_SHARP_ === base));
}),dommy.core.ancestors.call(null,elem))));
});
closest = function(base,elem,selector){
switch(arguments.length){
case 2:
return closest__2.call(this,base,elem);
case 3:
return closest__3.call(this,base,elem,selector);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
closest.cljs$core$IFn$_invoke$arity$2 = closest__2;
closest.cljs$core$IFn$_invoke$arity$3 = closest__3;
return closest;
})()
;
/**
* Is `descendant` a descendant of `ancestor`?
* (http://goo.gl/T8pgCX)
*/
dommy.core.descendant_QMARK_ = (function descendant_QMARK_(descendant,ancestor){
if(cljs.core.truth_(ancestor.contains)){
return ancestor.contains(descendant);
} else {
if(cljs.core.truth_(ancestor.compareDocumentPosition)){
return ((ancestor.compareDocumentPosition(descendant) & (1 << (4))) != 0);
} else {
return null;
}
}
});
/**
* Set the textContent of `elem` to `text`, fall back to innerText
*/
dommy.core.set_text_BANG_ = (function set_text_BANG_(elem,text){
if(!((void 0 === elem.textContent))){
elem.textContent = text;
} else {
elem.innerText = text;
}

return elem;
});
/**
* Set the innerHTML of `elem` to `html`
*/
dommy.core.set_html_BANG_ = (function set_html_BANG_(elem,html){
elem.innerHTML = html;

return elem;
});
/**
* Set the value of `elem` to `value`
*/
dommy.core.set_value_BANG_ = (function set_value_BANG_(elem,value){
elem.value = value;

return elem;
});
/**
* Set the css class of `elem` to `elem`
*/
dommy.core.set_class_BANG_ = (function set_class_BANG_(elem,c){
return elem.className = c;
});
/**
* Set the style of `elem` using key-value pairs:
* 
* (set-style! elem :display "block" :color "red")
* @param {...*} var_args
*/
dommy.core.set_style_BANG_ = (function() { 
var set_style_BANG___delegate = function (elem,kvs){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1827825394,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"kvs","kvs",-1695980277,null)))))].join('')));
}

var style = elem.style;
var seq__13011_13017 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),kvs));
var chunk__13012_13018 = null;
var count__13013_13019 = (0);
var i__13014_13020 = (0);
while(true){
if((i__13014_13020 < count__13013_13019)){
var vec__13015_13021 = cljs.core._nth.call(null,chunk__13012_13018,i__13014_13020);
var k_13022 = cljs.core.nth.call(null,vec__13015_13021,(0),null);
var v_13023 = cljs.core.nth.call(null,vec__13015_13021,(1),null);
style.setProperty(dommy.utils.as_str.call(null,k_13022),v_13023);

var G__13024 = seq__13011_13017;
var G__13025 = chunk__13012_13018;
var G__13026 = count__13013_13019;
var G__13027 = (i__13014_13020 + (1));
seq__13011_13017 = G__13024;
chunk__13012_13018 = G__13025;
count__13013_13019 = G__13026;
i__13014_13020 = G__13027;
continue;
} else {
var temp__4126__auto___13028 = cljs.core.seq.call(null,seq__13011_13017);
if(temp__4126__auto___13028){
var seq__13011_13029__$1 = temp__4126__auto___13028;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13011_13029__$1)){
var c__4546__auto___13030 = cljs.core.chunk_first.call(null,seq__13011_13029__$1);
var G__13031 = cljs.core.chunk_rest.call(null,seq__13011_13029__$1);
var G__13032 = c__4546__auto___13030;
var G__13033 = cljs.core.count.call(null,c__4546__auto___13030);
var G__13034 = (0);
seq__13011_13017 = G__13031;
chunk__13012_13018 = G__13032;
count__13013_13019 = G__13033;
i__13014_13020 = G__13034;
continue;
} else {
var vec__13016_13035 = cljs.core.first.call(null,seq__13011_13029__$1);
var k_13036 = cljs.core.nth.call(null,vec__13016_13035,(0),null);
var v_13037 = cljs.core.nth.call(null,vec__13016_13035,(1),null);
style.setProperty(dommy.utils.as_str.call(null,k_13036),v_13037);

var G__13038 = cljs.core.next.call(null,seq__13011_13029__$1);
var G__13039 = null;
var G__13040 = (0);
var G__13041 = (0);
seq__13011_13017 = G__13038;
chunk__13012_13018 = G__13039;
count__13013_13019 = G__13040;
i__13014_13020 = G__13041;
continue;
}
} else {
}
}
break;
}

return elem;
};
var set_style_BANG_ = function (elem,var_args){
var kvs = null;
if (arguments.length > 1) {
var G__13042__i = 0, G__13042__a = new Array(arguments.length -  1);
while (G__13042__i < G__13042__a.length) {G__13042__a[G__13042__i] = arguments[G__13042__i + 1]; ++G__13042__i;}
  kvs = new cljs.core.IndexedSeq(G__13042__a,0);
} 
return set_style_BANG___delegate.call(this,elem,kvs);};
set_style_BANG_.cljs$lang$maxFixedArity = 1;
set_style_BANG_.cljs$lang$applyTo = (function (arglist__13043){
var elem = cljs.core.first(arglist__13043);
var kvs = cljs.core.rest(arglist__13043);
return set_style_BANG___delegate(elem,kvs);
});
set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_style_BANG___delegate;
return set_style_BANG_;
})()
;
/**
* @param {...*} var_args
*/
dommy.core.set_px_BANG_ = (function() { 
var set_px_BANG___delegate = function (elem,kvs){

if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1827825394,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"kvs","kvs",-1695980277,null)))))].join('')));
}

var seq__13050_13056 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),kvs));
var chunk__13051_13057 = null;
var count__13052_13058 = (0);
var i__13053_13059 = (0);
while(true){
if((i__13053_13059 < count__13052_13058)){
var vec__13054_13060 = cljs.core._nth.call(null,chunk__13051_13057,i__13053_13059);
var k_13061 = cljs.core.nth.call(null,vec__13054_13060,(0),null);
var v_13062 = cljs.core.nth.call(null,vec__13054_13060,(1),null);
dommy.core.set_style_BANG_.call(null,elem,k_13061,[cljs.core.str(v_13062),cljs.core.str("px")].join(''));

var G__13063 = seq__13050_13056;
var G__13064 = chunk__13051_13057;
var G__13065 = count__13052_13058;
var G__13066 = (i__13053_13059 + (1));
seq__13050_13056 = G__13063;
chunk__13051_13057 = G__13064;
count__13052_13058 = G__13065;
i__13053_13059 = G__13066;
continue;
} else {
var temp__4126__auto___13067 = cljs.core.seq.call(null,seq__13050_13056);
if(temp__4126__auto___13067){
var seq__13050_13068__$1 = temp__4126__auto___13067;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13050_13068__$1)){
var c__4546__auto___13069 = cljs.core.chunk_first.call(null,seq__13050_13068__$1);
var G__13070 = cljs.core.chunk_rest.call(null,seq__13050_13068__$1);
var G__13071 = c__4546__auto___13069;
var G__13072 = cljs.core.count.call(null,c__4546__auto___13069);
var G__13073 = (0);
seq__13050_13056 = G__13070;
chunk__13051_13057 = G__13071;
count__13052_13058 = G__13072;
i__13053_13059 = G__13073;
continue;
} else {
var vec__13055_13074 = cljs.core.first.call(null,seq__13050_13068__$1);
var k_13075 = cljs.core.nth.call(null,vec__13055_13074,(0),null);
var v_13076 = cljs.core.nth.call(null,vec__13055_13074,(1),null);
dommy.core.set_style_BANG_.call(null,elem,k_13075,[cljs.core.str(v_13076),cljs.core.str("px")].join(''));

var G__13077 = cljs.core.next.call(null,seq__13050_13068__$1);
var G__13078 = null;
var G__13079 = (0);
var G__13080 = (0);
seq__13050_13056 = G__13077;
chunk__13051_13057 = G__13078;
count__13052_13058 = G__13079;
i__13053_13059 = G__13080;
continue;
}
} else {
}
}
break;
}

return elem;
};
var set_px_BANG_ = function (elem,var_args){
var kvs = null;
if (arguments.length > 1) {
var G__13081__i = 0, G__13081__a = new Array(arguments.length -  1);
while (G__13081__i < G__13081__a.length) {G__13081__a[G__13081__i] = arguments[G__13081__i + 1]; ++G__13081__i;}
  kvs = new cljs.core.IndexedSeq(G__13081__a,0);
} 
return set_px_BANG___delegate.call(this,elem,kvs);};
set_px_BANG_.cljs$lang$maxFixedArity = 1;
set_px_BANG_.cljs$lang$applyTo = (function (arglist__13082){
var elem = cljs.core.first(arglist__13082);
var kvs = cljs.core.rest(arglist__13082);
return set_px_BANG___delegate(elem,kvs);
});
set_px_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_px_BANG___delegate;
return set_px_BANG_;
})()
;
/**
* Sets dom attributes on and returns `elem`.
* Attributes without values will be set to "true":
* 
* (set-attr! elem :disabled)
* 
* With values, the function takes variadic kv pairs:
* 
* (set-attr! elem :id "some-id"
* :name "some-name")
* @param {...*} var_args
*/
dommy.core.set_attr_BANG_ = (function() {
var set_attr_BANG_ = null;
var set_attr_BANG___2 = (function (elem,k){
return set_attr_BANG_.call(null,elem,k,"true");
});
var set_attr_BANG___3 = (function (elem,k,v){
var k__$1 = dommy.utils.as_str.call(null,k);
if(cljs.core.truth_(v)){
if(cljs.core.fn_QMARK_.call(null,v)){
var G__13091 = elem;
(G__13091[k__$1] = v);

return G__13091;
} else {
var G__13092 = elem;
G__13092.setAttribute(k__$1,v);

return G__13092;
}
} else {
return null;
}
});
var set_attr_BANG___4 = (function() { 
var G__13099__delegate = function (elem,k,v,kvs){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1827825394,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"kvs","kvs",-1695980277,null)))))].join('')));
}

var seq__13093_13100 = cljs.core.seq.call(null,cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),cljs.core.partition.call(null,(2),kvs)));
var chunk__13094_13101 = null;
var count__13095_13102 = (0);
var i__13096_13103 = (0);
while(true){
if((i__13096_13103 < count__13095_13102)){
var vec__13097_13104 = cljs.core._nth.call(null,chunk__13094_13101,i__13096_13103);
var k_13105__$1 = cljs.core.nth.call(null,vec__13097_13104,(0),null);
var v_13106__$1 = cljs.core.nth.call(null,vec__13097_13104,(1),null);
set_attr_BANG_.call(null,elem,k_13105__$1,v_13106__$1);

var G__13107 = seq__13093_13100;
var G__13108 = chunk__13094_13101;
var G__13109 = count__13095_13102;
var G__13110 = (i__13096_13103 + (1));
seq__13093_13100 = G__13107;
chunk__13094_13101 = G__13108;
count__13095_13102 = G__13109;
i__13096_13103 = G__13110;
continue;
} else {
var temp__4126__auto___13111 = cljs.core.seq.call(null,seq__13093_13100);
if(temp__4126__auto___13111){
var seq__13093_13112__$1 = temp__4126__auto___13111;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13093_13112__$1)){
var c__4546__auto___13113 = cljs.core.chunk_first.call(null,seq__13093_13112__$1);
var G__13114 = cljs.core.chunk_rest.call(null,seq__13093_13112__$1);
var G__13115 = c__4546__auto___13113;
var G__13116 = cljs.core.count.call(null,c__4546__auto___13113);
var G__13117 = (0);
seq__13093_13100 = G__13114;
chunk__13094_13101 = G__13115;
count__13095_13102 = G__13116;
i__13096_13103 = G__13117;
continue;
} else {
var vec__13098_13118 = cljs.core.first.call(null,seq__13093_13112__$1);
var k_13119__$1 = cljs.core.nth.call(null,vec__13098_13118,(0),null);
var v_13120__$1 = cljs.core.nth.call(null,vec__13098_13118,(1),null);
set_attr_BANG_.call(null,elem,k_13119__$1,v_13120__$1);

var G__13121 = cljs.core.next.call(null,seq__13093_13112__$1);
var G__13122 = null;
var G__13123 = (0);
var G__13124 = (0);
seq__13093_13100 = G__13121;
chunk__13094_13101 = G__13122;
count__13095_13102 = G__13123;
i__13096_13103 = G__13124;
continue;
}
} else {
}
}
break;
}

return elem;
};
var G__13099 = function (elem,k,v,var_args){
var kvs = null;
if (arguments.length > 3) {
var G__13125__i = 0, G__13125__a = new Array(arguments.length -  3);
while (G__13125__i < G__13125__a.length) {G__13125__a[G__13125__i] = arguments[G__13125__i + 3]; ++G__13125__i;}
  kvs = new cljs.core.IndexedSeq(G__13125__a,0);
} 
return G__13099__delegate.call(this,elem,k,v,kvs);};
G__13099.cljs$lang$maxFixedArity = 3;
G__13099.cljs$lang$applyTo = (function (arglist__13126){
var elem = cljs.core.first(arglist__13126);
arglist__13126 = cljs.core.next(arglist__13126);
var k = cljs.core.first(arglist__13126);
arglist__13126 = cljs.core.next(arglist__13126);
var v = cljs.core.first(arglist__13126);
var kvs = cljs.core.rest(arglist__13126);
return G__13099__delegate(elem,k,v,kvs);
});
G__13099.cljs$core$IFn$_invoke$arity$variadic = G__13099__delegate;
return G__13099;
})()
;
set_attr_BANG_ = function(elem,k,v,var_args){
var kvs = var_args;
switch(arguments.length){
case 2:
return set_attr_BANG___2.call(this,elem,k);
case 3:
return set_attr_BANG___3.call(this,elem,k,v);
default:
var G__13127 = null;
if (arguments.length > 3) {
var G__13128__i = 0, G__13128__a = new Array(arguments.length -  3);
while (G__13128__i < G__13128__a.length) {G__13128__a[G__13128__i] = arguments[G__13128__i + 3]; ++G__13128__i;}
G__13127 = new cljs.core.IndexedSeq(G__13128__a,0);
}
return set_attr_BANG___4.cljs$core$IFn$_invoke$arity$variadic(elem,k,v, G__13127);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
set_attr_BANG_.cljs$lang$maxFixedArity = 3;
set_attr_BANG_.cljs$lang$applyTo = set_attr_BANG___4.cljs$lang$applyTo;
set_attr_BANG_.cljs$core$IFn$_invoke$arity$2 = set_attr_BANG___2;
set_attr_BANG_.cljs$core$IFn$_invoke$arity$3 = set_attr_BANG___3;
set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_attr_BANG___4.cljs$core$IFn$_invoke$arity$variadic;
return set_attr_BANG_;
})()
;
/**
* Removes dom attributes on and returns `elem`.
* `class` and `classes` are special cases which clear
* out the class name on removal.
* @param {...*} var_args
*/
dommy.core.remove_attr_BANG_ = (function() {
var remove_attr_BANG_ = null;
var remove_attr_BANG___2 = (function (elem,k){
var k_13137__$1 = dommy.utils.as_str.call(null,k);
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["class",null,"classes",null], null), null).call(null,k_13137__$1))){
dommy.core.set_class_BANG_.call(null,elem,"");
} else {
elem.removeAttribute(k_13137__$1);
}

return elem;
});
var remove_attr_BANG___3 = (function() { 
var G__13138__delegate = function (elem,k,ks){
var seq__13133_13139 = cljs.core.seq.call(null,cljs.core.cons.call(null,k,ks));
var chunk__13134_13140 = null;
var count__13135_13141 = (0);
var i__13136_13142 = (0);
while(true){
if((i__13136_13142 < count__13135_13141)){
var k_13143__$1 = cljs.core._nth.call(null,chunk__13134_13140,i__13136_13142);
remove_attr_BANG_.call(null,elem,k_13143__$1);

var G__13144 = seq__13133_13139;
var G__13145 = chunk__13134_13140;
var G__13146 = count__13135_13141;
var G__13147 = (i__13136_13142 + (1));
seq__13133_13139 = G__13144;
chunk__13134_13140 = G__13145;
count__13135_13141 = G__13146;
i__13136_13142 = G__13147;
continue;
} else {
var temp__4126__auto___13148 = cljs.core.seq.call(null,seq__13133_13139);
if(temp__4126__auto___13148){
var seq__13133_13149__$1 = temp__4126__auto___13148;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13133_13149__$1)){
var c__4546__auto___13150 = cljs.core.chunk_first.call(null,seq__13133_13149__$1);
var G__13151 = cljs.core.chunk_rest.call(null,seq__13133_13149__$1);
var G__13152 = c__4546__auto___13150;
var G__13153 = cljs.core.count.call(null,c__4546__auto___13150);
var G__13154 = (0);
seq__13133_13139 = G__13151;
chunk__13134_13140 = G__13152;
count__13135_13141 = G__13153;
i__13136_13142 = G__13154;
continue;
} else {
var k_13155__$1 = cljs.core.first.call(null,seq__13133_13149__$1);
remove_attr_BANG_.call(null,elem,k_13155__$1);

var G__13156 = cljs.core.next.call(null,seq__13133_13149__$1);
var G__13157 = null;
var G__13158 = (0);
var G__13159 = (0);
seq__13133_13139 = G__13156;
chunk__13134_13140 = G__13157;
count__13135_13141 = G__13158;
i__13136_13142 = G__13159;
continue;
}
} else {
}
}
break;
}

return elem;
};
var G__13138 = function (elem,k,var_args){
var ks = null;
if (arguments.length > 2) {
var G__13160__i = 0, G__13160__a = new Array(arguments.length -  2);
while (G__13160__i < G__13160__a.length) {G__13160__a[G__13160__i] = arguments[G__13160__i + 2]; ++G__13160__i;}
  ks = new cljs.core.IndexedSeq(G__13160__a,0);
} 
return G__13138__delegate.call(this,elem,k,ks);};
G__13138.cljs$lang$maxFixedArity = 2;
G__13138.cljs$lang$applyTo = (function (arglist__13161){
var elem = cljs.core.first(arglist__13161);
arglist__13161 = cljs.core.next(arglist__13161);
var k = cljs.core.first(arglist__13161);
var ks = cljs.core.rest(arglist__13161);
return G__13138__delegate(elem,k,ks);
});
G__13138.cljs$core$IFn$_invoke$arity$variadic = G__13138__delegate;
return G__13138;
})()
;
remove_attr_BANG_ = function(elem,k,var_args){
var ks = var_args;
switch(arguments.length){
case 2:
return remove_attr_BANG___2.call(this,elem,k);
default:
var G__13162 = null;
if (arguments.length > 2) {
var G__13163__i = 0, G__13163__a = new Array(arguments.length -  2);
while (G__13163__i < G__13163__a.length) {G__13163__a[G__13163__i] = arguments[G__13163__i + 2]; ++G__13163__i;}
G__13162 = new cljs.core.IndexedSeq(G__13163__a,0);
}
return remove_attr_BANG___3.cljs$core$IFn$_invoke$arity$variadic(elem,k, G__13162);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
remove_attr_BANG_.cljs$lang$maxFixedArity = 2;
remove_attr_BANG_.cljs$lang$applyTo = remove_attr_BANG___3.cljs$lang$applyTo;
remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2 = remove_attr_BANG___2;
remove_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = remove_attr_BANG___3.cljs$core$IFn$_invoke$arity$variadic;
return remove_attr_BANG_;
})()
;
/**
* Toggles a dom attribute `k` on `elem`, optionally specifying
* the boolean value with `add?`
*/
dommy.core.toggle_attr_BANG_ = (function() {
var toggle_attr_BANG_ = null;
var toggle_attr_BANG___2 = (function (elem,k){
return toggle_attr_BANG_.call(null,elem,k,cljs.core.boolean$.call(null,dommy.core.attr.call(null,elem,k)));
});
var toggle_attr_BANG___3 = (function (elem,k,add_QMARK_){
if(add_QMARK_){
return dommy.core.set_attr_BANG_.call(null,elem,k);
} else {
return dommy.core.remove_attr_BANG_.call(null,elem,k);
}
});
toggle_attr_BANG_ = function(elem,k,add_QMARK_){
switch(arguments.length){
case 2:
return toggle_attr_BANG___2.call(this,elem,k);
case 3:
return toggle_attr_BANG___3.call(this,elem,k,add_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$2 = toggle_attr_BANG___2;
toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$3 = toggle_attr_BANG___3;
return toggle_attr_BANG_;
})()
;
/**
* Add `classes` to `elem`, trying to use Element::classList, and
* falling back to fast string parsing/manipulation
* @param {...*} var_args
*/
dommy.core.add_class_BANG_ = (function() {
var add_class_BANG_ = null;
var add_class_BANG___2 = (function (elem,classes){
var classes__$1 = clojure.string.trim.call(null,dommy.utils.as_str.call(null,classes)).split(/\s+/);
if(cljs.core.seq.call(null,classes__$1)){
var temp__4124__auto___13188 = elem.classList;
if(cljs.core.truth_(temp__4124__auto___13188)){
var class_list_13189 = temp__4124__auto___13188;
var seq__13176_13190 = cljs.core.seq.call(null,classes__$1);
var chunk__13177_13191 = null;
var count__13178_13192 = (0);
var i__13179_13193 = (0);
while(true){
if((i__13179_13193 < count__13178_13192)){
var c_13194 = cljs.core._nth.call(null,chunk__13177_13191,i__13179_13193);
class_list_13189.add(c_13194);

var G__13195 = seq__13176_13190;
var G__13196 = chunk__13177_13191;
var G__13197 = count__13178_13192;
var G__13198 = (i__13179_13193 + (1));
seq__13176_13190 = G__13195;
chunk__13177_13191 = G__13196;
count__13178_13192 = G__13197;
i__13179_13193 = G__13198;
continue;
} else {
var temp__4126__auto___13199 = cljs.core.seq.call(null,seq__13176_13190);
if(temp__4126__auto___13199){
var seq__13176_13200__$1 = temp__4126__auto___13199;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13176_13200__$1)){
var c__4546__auto___13201 = cljs.core.chunk_first.call(null,seq__13176_13200__$1);
var G__13202 = cljs.core.chunk_rest.call(null,seq__13176_13200__$1);
var G__13203 = c__4546__auto___13201;
var G__13204 = cljs.core.count.call(null,c__4546__auto___13201);
var G__13205 = (0);
seq__13176_13190 = G__13202;
chunk__13177_13191 = G__13203;
count__13178_13192 = G__13204;
i__13179_13193 = G__13205;
continue;
} else {
var c_13206 = cljs.core.first.call(null,seq__13176_13200__$1);
class_list_13189.add(c_13206);

var G__13207 = cljs.core.next.call(null,seq__13176_13200__$1);
var G__13208 = null;
var G__13209 = (0);
var G__13210 = (0);
seq__13176_13190 = G__13207;
chunk__13177_13191 = G__13208;
count__13178_13192 = G__13209;
i__13179_13193 = G__13210;
continue;
}
} else {
}
}
break;
}
} else {
var seq__13180_13211 = cljs.core.seq.call(null,classes__$1);
var chunk__13181_13212 = null;
var count__13182_13213 = (0);
var i__13183_13214 = (0);
while(true){
if((i__13183_13214 < count__13182_13213)){
var c_13215 = cljs.core._nth.call(null,chunk__13181_13212,i__13183_13214);
var class_name_13216 = dommy.core.class$.call(null,elem);
if(cljs.core.truth_(dommy.utils.class_index.call(null,class_name_13216,c_13215))){
} else {
dommy.core.set_class_BANG_.call(null,elem,(((class_name_13216 === ""))?c_13215:[cljs.core.str(class_name_13216),cljs.core.str(" "),cljs.core.str(c_13215)].join('')));
}

var G__13217 = seq__13180_13211;
var G__13218 = chunk__13181_13212;
var G__13219 = count__13182_13213;
var G__13220 = (i__13183_13214 + (1));
seq__13180_13211 = G__13217;
chunk__13181_13212 = G__13218;
count__13182_13213 = G__13219;
i__13183_13214 = G__13220;
continue;
} else {
var temp__4126__auto___13221 = cljs.core.seq.call(null,seq__13180_13211);
if(temp__4126__auto___13221){
var seq__13180_13222__$1 = temp__4126__auto___13221;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13180_13222__$1)){
var c__4546__auto___13223 = cljs.core.chunk_first.call(null,seq__13180_13222__$1);
var G__13224 = cljs.core.chunk_rest.call(null,seq__13180_13222__$1);
var G__13225 = c__4546__auto___13223;
var G__13226 = cljs.core.count.call(null,c__4546__auto___13223);
var G__13227 = (0);
seq__13180_13211 = G__13224;
chunk__13181_13212 = G__13225;
count__13182_13213 = G__13226;
i__13183_13214 = G__13227;
continue;
} else {
var c_13228 = cljs.core.first.call(null,seq__13180_13222__$1);
var class_name_13229 = dommy.core.class$.call(null,elem);
if(cljs.core.truth_(dommy.utils.class_index.call(null,class_name_13229,c_13228))){
} else {
dommy.core.set_class_BANG_.call(null,elem,(((class_name_13229 === ""))?c_13228:[cljs.core.str(class_name_13229),cljs.core.str(" "),cljs.core.str(c_13228)].join('')));
}

var G__13230 = cljs.core.next.call(null,seq__13180_13222__$1);
var G__13231 = null;
var G__13232 = (0);
var G__13233 = (0);
seq__13180_13211 = G__13230;
chunk__13181_13212 = G__13231;
count__13182_13213 = G__13232;
i__13183_13214 = G__13233;
continue;
}
} else {
}
}
break;
}
}
} else {
}

return elem;
});
var add_class_BANG___3 = (function() { 
var G__13234__delegate = function (elem,classes,more_classes){
var seq__13184_13235 = cljs.core.seq.call(null,cljs.core.conj.call(null,more_classes,classes));
var chunk__13185_13236 = null;
var count__13186_13237 = (0);
var i__13187_13238 = (0);
while(true){
if((i__13187_13238 < count__13186_13237)){
var c_13239 = cljs.core._nth.call(null,chunk__13185_13236,i__13187_13238);
add_class_BANG_.call(null,elem,c_13239);

var G__13240 = seq__13184_13235;
var G__13241 = chunk__13185_13236;
var G__13242 = count__13186_13237;
var G__13243 = (i__13187_13238 + (1));
seq__13184_13235 = G__13240;
chunk__13185_13236 = G__13241;
count__13186_13237 = G__13242;
i__13187_13238 = G__13243;
continue;
} else {
var temp__4126__auto___13244 = cljs.core.seq.call(null,seq__13184_13235);
if(temp__4126__auto___13244){
var seq__13184_13245__$1 = temp__4126__auto___13244;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13184_13245__$1)){
var c__4546__auto___13246 = cljs.core.chunk_first.call(null,seq__13184_13245__$1);
var G__13247 = cljs.core.chunk_rest.call(null,seq__13184_13245__$1);
var G__13248 = c__4546__auto___13246;
var G__13249 = cljs.core.count.call(null,c__4546__auto___13246);
var G__13250 = (0);
seq__13184_13235 = G__13247;
chunk__13185_13236 = G__13248;
count__13186_13237 = G__13249;
i__13187_13238 = G__13250;
continue;
} else {
var c_13251 = cljs.core.first.call(null,seq__13184_13245__$1);
add_class_BANG_.call(null,elem,c_13251);

var G__13252 = cljs.core.next.call(null,seq__13184_13245__$1);
var G__13253 = null;
var G__13254 = (0);
var G__13255 = (0);
seq__13184_13235 = G__13252;
chunk__13185_13236 = G__13253;
count__13186_13237 = G__13254;
i__13187_13238 = G__13255;
continue;
}
} else {
}
}
break;
}

return elem;
};
var G__13234 = function (elem,classes,var_args){
var more_classes = null;
if (arguments.length > 2) {
var G__13256__i = 0, G__13256__a = new Array(arguments.length -  2);
while (G__13256__i < G__13256__a.length) {G__13256__a[G__13256__i] = arguments[G__13256__i + 2]; ++G__13256__i;}
  more_classes = new cljs.core.IndexedSeq(G__13256__a,0);
} 
return G__13234__delegate.call(this,elem,classes,more_classes);};
G__13234.cljs$lang$maxFixedArity = 2;
G__13234.cljs$lang$applyTo = (function (arglist__13257){
var elem = cljs.core.first(arglist__13257);
arglist__13257 = cljs.core.next(arglist__13257);
var classes = cljs.core.first(arglist__13257);
var more_classes = cljs.core.rest(arglist__13257);
return G__13234__delegate(elem,classes,more_classes);
});
G__13234.cljs$core$IFn$_invoke$arity$variadic = G__13234__delegate;
return G__13234;
})()
;
add_class_BANG_ = function(elem,classes,var_args){
var more_classes = var_args;
switch(arguments.length){
case 2:
return add_class_BANG___2.call(this,elem,classes);
default:
var G__13258 = null;
if (arguments.length > 2) {
var G__13259__i = 0, G__13259__a = new Array(arguments.length -  2);
while (G__13259__i < G__13259__a.length) {G__13259__a[G__13259__i] = arguments[G__13259__i + 2]; ++G__13259__i;}
G__13258 = new cljs.core.IndexedSeq(G__13259__a,0);
}
return add_class_BANG___3.cljs$core$IFn$_invoke$arity$variadic(elem,classes, G__13258);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
add_class_BANG_.cljs$lang$maxFixedArity = 2;
add_class_BANG_.cljs$lang$applyTo = add_class_BANG___3.cljs$lang$applyTo;
add_class_BANG_.cljs$core$IFn$_invoke$arity$2 = add_class_BANG___2;
add_class_BANG_.cljs$core$IFn$_invoke$arity$variadic = add_class_BANG___3.cljs$core$IFn$_invoke$arity$variadic;
return add_class_BANG_;
})()
;
/**
* Remove `c` from `elem` class list
* @param {...*} var_args
*/
dommy.core.remove_class_BANG_ = (function() {
var remove_class_BANG_ = null;
var remove_class_BANG___2 = (function (elem,c){
var c__$1 = dommy.utils.as_str.call(null,c);
var temp__4124__auto___13268 = elem.classList;
if(cljs.core.truth_(temp__4124__auto___13268)){
var class_list_13269 = temp__4124__auto___13268;
class_list_13269.remove(c__$1);
} else {
var class_name_13270 = dommy.core.class$.call(null,elem);
var new_class_name_13271 = dommy.utils.remove_class_str.call(null,class_name_13270,c__$1);
if((class_name_13270 === new_class_name_13271)){
} else {
dommy.core.set_class_BANG_.call(null,elem,new_class_name_13271);
}
}

return elem;
});
var remove_class_BANG___3 = (function() { 
var G__13272__delegate = function (elem,class$,classes){
var seq__13264 = cljs.core.seq.call(null,cljs.core.conj.call(null,classes,class$));
var chunk__13265 = null;
var count__13266 = (0);
var i__13267 = (0);
while(true){
if((i__13267 < count__13266)){
var c = cljs.core._nth.call(null,chunk__13265,i__13267);
remove_class_BANG_.call(null,elem,c);

var G__13273 = seq__13264;
var G__13274 = chunk__13265;
var G__13275 = count__13266;
var G__13276 = (i__13267 + (1));
seq__13264 = G__13273;
chunk__13265 = G__13274;
count__13266 = G__13275;
i__13267 = G__13276;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__13264);
if(temp__4126__auto__){
var seq__13264__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13264__$1)){
var c__4546__auto__ = cljs.core.chunk_first.call(null,seq__13264__$1);
var G__13277 = cljs.core.chunk_rest.call(null,seq__13264__$1);
var G__13278 = c__4546__auto__;
var G__13279 = cljs.core.count.call(null,c__4546__auto__);
var G__13280 = (0);
seq__13264 = G__13277;
chunk__13265 = G__13278;
count__13266 = G__13279;
i__13267 = G__13280;
continue;
} else {
var c = cljs.core.first.call(null,seq__13264__$1);
remove_class_BANG_.call(null,elem,c);

var G__13281 = cljs.core.next.call(null,seq__13264__$1);
var G__13282 = null;
var G__13283 = (0);
var G__13284 = (0);
seq__13264 = G__13281;
chunk__13265 = G__13282;
count__13266 = G__13283;
i__13267 = G__13284;
continue;
}
} else {
return null;
}
}
break;
}
};
var G__13272 = function (elem,class$,var_args){
var classes = null;
if (arguments.length > 2) {
var G__13285__i = 0, G__13285__a = new Array(arguments.length -  2);
while (G__13285__i < G__13285__a.length) {G__13285__a[G__13285__i] = arguments[G__13285__i + 2]; ++G__13285__i;}
  classes = new cljs.core.IndexedSeq(G__13285__a,0);
} 
return G__13272__delegate.call(this,elem,class$,classes);};
G__13272.cljs$lang$maxFixedArity = 2;
G__13272.cljs$lang$applyTo = (function (arglist__13286){
var elem = cljs.core.first(arglist__13286);
arglist__13286 = cljs.core.next(arglist__13286);
var class$ = cljs.core.first(arglist__13286);
var classes = cljs.core.rest(arglist__13286);
return G__13272__delegate(elem,class$,classes);
});
G__13272.cljs$core$IFn$_invoke$arity$variadic = G__13272__delegate;
return G__13272;
})()
;
remove_class_BANG_ = function(elem,class$,var_args){
var classes = var_args;
switch(arguments.length){
case 2:
return remove_class_BANG___2.call(this,elem,class$);
default:
var G__13287 = null;
if (arguments.length > 2) {
var G__13288__i = 0, G__13288__a = new Array(arguments.length -  2);
while (G__13288__i < G__13288__a.length) {G__13288__a[G__13288__i] = arguments[G__13288__i + 2]; ++G__13288__i;}
G__13287 = new cljs.core.IndexedSeq(G__13288__a,0);
}
return remove_class_BANG___3.cljs$core$IFn$_invoke$arity$variadic(elem,class$, G__13287);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
remove_class_BANG_.cljs$lang$maxFixedArity = 2;
remove_class_BANG_.cljs$lang$applyTo = remove_class_BANG___3.cljs$lang$applyTo;
remove_class_BANG_.cljs$core$IFn$_invoke$arity$2 = remove_class_BANG___2;
remove_class_BANG_.cljs$core$IFn$_invoke$arity$variadic = remove_class_BANG___3.cljs$core$IFn$_invoke$arity$variadic;
return remove_class_BANG_;
})()
;
/**
* (toggle-class! elem class) will add-class! if elem does not have class
* and remove-class! otherwise.
* (toggle-class! elem class add?) will add-class! if add? is truthy,
* otherwise it will remove-class!
*/
dommy.core.toggle_class_BANG_ = (function() {
var toggle_class_BANG_ = null;
var toggle_class_BANG___2 = (function (elem,c){
var c__$1 = dommy.utils.as_str.call(null,c);
var temp__4124__auto___13289 = elem.classList;
if(cljs.core.truth_(temp__4124__auto___13289)){
var class_list_13290 = temp__4124__auto___13289;
class_list_13290.toggle(c__$1);
} else {
toggle_class_BANG_.call(null,elem,c__$1,!(dommy.core.has_class_QMARK_.call(null,elem,c__$1)));
}

return elem;
});
var toggle_class_BANG___3 = (function (elem,class$,add_QMARK_){
if(add_QMARK_){
dommy.core.add_class_BANG_.call(null,elem,class$);
} else {
dommy.core.remove_class_BANG_.call(null,elem,class$);
}

return elem;
});
toggle_class_BANG_ = function(elem,class$,add_QMARK_){
switch(arguments.length){
case 2:
return toggle_class_BANG___2.call(this,elem,class$);
case 3:
return toggle_class_BANG___3.call(this,elem,class$,add_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
toggle_class_BANG_.cljs$core$IFn$_invoke$arity$2 = toggle_class_BANG___2;
toggle_class_BANG_.cljs$core$IFn$_invoke$arity$3 = toggle_class_BANG___3;
return toggle_class_BANG_;
})()
;
/**
* Display or hide the given `elem` (using display: none).
* Takes an optional boolean `show?`
*/
dommy.core.toggle_BANG_ = (function() {
var toggle_BANG_ = null;
var toggle_BANG___1 = (function (elem){
return toggle_BANG_.call(null,elem,dommy.core.hidden_QMARK_.call(null,elem));
});
var toggle_BANG___2 = (function (elem,show_QMARK_){
return dommy.core.set_style_BANG_.call(null,elem,new cljs.core.Keyword(null,"display","display",242065432),((show_QMARK_)?"":"none"));
});
toggle_BANG_ = function(elem,show_QMARK_){
switch(arguments.length){
case 1:
return toggle_BANG___1.call(this,elem);
case 2:
return toggle_BANG___2.call(this,elem,show_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
toggle_BANG_.cljs$core$IFn$_invoke$arity$1 = toggle_BANG___1;
toggle_BANG_.cljs$core$IFn$_invoke$arity$2 = toggle_BANG___2;
return toggle_BANG_;
})()
;
dommy.core.hide_BANG_ = (function hide_BANG_(elem){
return dommy.core.toggle_BANG_.call(null,elem,false);
});
dommy.core.show_BANG_ = (function show_BANG_(elem){
return dommy.core.toggle_BANG_.call(null,elem,true);
});
dommy.core.scroll_into_view = (function scroll_into_view(elem,align_with_top_QMARK_){
var top = new cljs.core.Keyword(null,"top","top",-1856271961).cljs$core$IFn$_invoke$arity$1(dommy.core.bounding_client_rect.call(null,elem));
if((window.innerHeight < (top + elem.offsetHeight))){
return elem.scrollIntoView(align_with_top_QMARK_);
} else {
return null;
}
});
dommy.core.create_element = (function() {
var create_element = null;
var create_element__1 = (function (tag){
return document.createElement(dommy.utils.as_str.call(null,tag));
});
var create_element__2 = (function (tag_ns,tag){
return document.createElementNS(dommy.utils.as_str.call(null,tag_ns),dommy.utils.as_str.call(null,tag));
});
create_element = function(tag_ns,tag){
switch(arguments.length){
case 1:
return create_element__1.call(this,tag_ns);
case 2:
return create_element__2.call(this,tag_ns,tag);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
create_element.cljs$core$IFn$_invoke$arity$1 = create_element__1;
create_element.cljs$core$IFn$_invoke$arity$2 = create_element__2;
return create_element;
})()
;
dommy.core.create_text_node = (function create_text_node(text){
return document.createTextNode(text);
});
/**
* Clears all children from `elem`
*/
dommy.core.clear_BANG_ = (function clear_BANG_(elem){
return dommy.core.set_html_BANG_.call(null,elem,"");
});
/**
* Append `child` to `parent`
* @param {...*} var_args
*/
dommy.core.append_BANG_ = (function() {
var append_BANG_ = null;
var append_BANG___2 = (function (parent,child){
var G__13296 = parent;
G__13296.appendChild(child);

return G__13296;
});
var append_BANG___3 = (function() { 
var G__13301__delegate = function (parent,child,more_children){
var seq__13297_13302 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));
var chunk__13298_13303 = null;
var count__13299_13304 = (0);
var i__13300_13305 = (0);
while(true){
if((i__13300_13305 < count__13299_13304)){
var c_13306 = cljs.core._nth.call(null,chunk__13298_13303,i__13300_13305);
append_BANG_.call(null,parent,c_13306);

var G__13307 = seq__13297_13302;
var G__13308 = chunk__13298_13303;
var G__13309 = count__13299_13304;
var G__13310 = (i__13300_13305 + (1));
seq__13297_13302 = G__13307;
chunk__13298_13303 = G__13308;
count__13299_13304 = G__13309;
i__13300_13305 = G__13310;
continue;
} else {
var temp__4126__auto___13311 = cljs.core.seq.call(null,seq__13297_13302);
if(temp__4126__auto___13311){
var seq__13297_13312__$1 = temp__4126__auto___13311;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13297_13312__$1)){
var c__4546__auto___13313 = cljs.core.chunk_first.call(null,seq__13297_13312__$1);
var G__13314 = cljs.core.chunk_rest.call(null,seq__13297_13312__$1);
var G__13315 = c__4546__auto___13313;
var G__13316 = cljs.core.count.call(null,c__4546__auto___13313);
var G__13317 = (0);
seq__13297_13302 = G__13314;
chunk__13298_13303 = G__13315;
count__13299_13304 = G__13316;
i__13300_13305 = G__13317;
continue;
} else {
var c_13318 = cljs.core.first.call(null,seq__13297_13312__$1);
append_BANG_.call(null,parent,c_13318);

var G__13319 = cljs.core.next.call(null,seq__13297_13312__$1);
var G__13320 = null;
var G__13321 = (0);
var G__13322 = (0);
seq__13297_13302 = G__13319;
chunk__13298_13303 = G__13320;
count__13299_13304 = G__13321;
i__13300_13305 = G__13322;
continue;
}
} else {
}
}
break;
}

return parent;
};
var G__13301 = function (parent,child,var_args){
var more_children = null;
if (arguments.length > 2) {
var G__13323__i = 0, G__13323__a = new Array(arguments.length -  2);
while (G__13323__i < G__13323__a.length) {G__13323__a[G__13323__i] = arguments[G__13323__i + 2]; ++G__13323__i;}
  more_children = new cljs.core.IndexedSeq(G__13323__a,0);
} 
return G__13301__delegate.call(this,parent,child,more_children);};
G__13301.cljs$lang$maxFixedArity = 2;
G__13301.cljs$lang$applyTo = (function (arglist__13324){
var parent = cljs.core.first(arglist__13324);
arglist__13324 = cljs.core.next(arglist__13324);
var child = cljs.core.first(arglist__13324);
var more_children = cljs.core.rest(arglist__13324);
return G__13301__delegate(parent,child,more_children);
});
G__13301.cljs$core$IFn$_invoke$arity$variadic = G__13301__delegate;
return G__13301;
})()
;
append_BANG_ = function(parent,child,var_args){
var more_children = var_args;
switch(arguments.length){
case 2:
return append_BANG___2.call(this,parent,child);
default:
var G__13325 = null;
if (arguments.length > 2) {
var G__13326__i = 0, G__13326__a = new Array(arguments.length -  2);
while (G__13326__i < G__13326__a.length) {G__13326__a[G__13326__i] = arguments[G__13326__i + 2]; ++G__13326__i;}
G__13325 = new cljs.core.IndexedSeq(G__13326__a,0);
}
return append_BANG___3.cljs$core$IFn$_invoke$arity$variadic(parent,child, G__13325);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
append_BANG_.cljs$lang$maxFixedArity = 2;
append_BANG_.cljs$lang$applyTo = append_BANG___3.cljs$lang$applyTo;
append_BANG_.cljs$core$IFn$_invoke$arity$2 = append_BANG___2;
append_BANG_.cljs$core$IFn$_invoke$arity$variadic = append_BANG___3.cljs$core$IFn$_invoke$arity$variadic;
return append_BANG_;
})()
;
/**
* Prepend `child` to `parent`
* @param {...*} var_args
*/
dommy.core.prepend_BANG_ = (function() {
var prepend_BANG_ = null;
var prepend_BANG___2 = (function (parent,child){
var G__13332 = parent;
G__13332.insertBefore(child,parent.firstChild);

return G__13332;
});
var prepend_BANG___3 = (function() { 
var G__13337__delegate = function (parent,child,more_children){
var seq__13333_13338 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));
var chunk__13334_13339 = null;
var count__13335_13340 = (0);
var i__13336_13341 = (0);
while(true){
if((i__13336_13341 < count__13335_13340)){
var c_13342 = cljs.core._nth.call(null,chunk__13334_13339,i__13336_13341);
prepend_BANG_.call(null,parent,c_13342);

var G__13343 = seq__13333_13338;
var G__13344 = chunk__13334_13339;
var G__13345 = count__13335_13340;
var G__13346 = (i__13336_13341 + (1));
seq__13333_13338 = G__13343;
chunk__13334_13339 = G__13344;
count__13335_13340 = G__13345;
i__13336_13341 = G__13346;
continue;
} else {
var temp__4126__auto___13347 = cljs.core.seq.call(null,seq__13333_13338);
if(temp__4126__auto___13347){
var seq__13333_13348__$1 = temp__4126__auto___13347;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13333_13348__$1)){
var c__4546__auto___13349 = cljs.core.chunk_first.call(null,seq__13333_13348__$1);
var G__13350 = cljs.core.chunk_rest.call(null,seq__13333_13348__$1);
var G__13351 = c__4546__auto___13349;
var G__13352 = cljs.core.count.call(null,c__4546__auto___13349);
var G__13353 = (0);
seq__13333_13338 = G__13350;
chunk__13334_13339 = G__13351;
count__13335_13340 = G__13352;
i__13336_13341 = G__13353;
continue;
} else {
var c_13354 = cljs.core.first.call(null,seq__13333_13348__$1);
prepend_BANG_.call(null,parent,c_13354);

var G__13355 = cljs.core.next.call(null,seq__13333_13348__$1);
var G__13356 = null;
var G__13357 = (0);
var G__13358 = (0);
seq__13333_13338 = G__13355;
chunk__13334_13339 = G__13356;
count__13335_13340 = G__13357;
i__13336_13341 = G__13358;
continue;
}
} else {
}
}
break;
}

return parent;
};
var G__13337 = function (parent,child,var_args){
var more_children = null;
if (arguments.length > 2) {
var G__13359__i = 0, G__13359__a = new Array(arguments.length -  2);
while (G__13359__i < G__13359__a.length) {G__13359__a[G__13359__i] = arguments[G__13359__i + 2]; ++G__13359__i;}
  more_children = new cljs.core.IndexedSeq(G__13359__a,0);
} 
return G__13337__delegate.call(this,parent,child,more_children);};
G__13337.cljs$lang$maxFixedArity = 2;
G__13337.cljs$lang$applyTo = (function (arglist__13360){
var parent = cljs.core.first(arglist__13360);
arglist__13360 = cljs.core.next(arglist__13360);
var child = cljs.core.first(arglist__13360);
var more_children = cljs.core.rest(arglist__13360);
return G__13337__delegate(parent,child,more_children);
});
G__13337.cljs$core$IFn$_invoke$arity$variadic = G__13337__delegate;
return G__13337;
})()
;
prepend_BANG_ = function(parent,child,var_args){
var more_children = var_args;
switch(arguments.length){
case 2:
return prepend_BANG___2.call(this,parent,child);
default:
var G__13361 = null;
if (arguments.length > 2) {
var G__13362__i = 0, G__13362__a = new Array(arguments.length -  2);
while (G__13362__i < G__13362__a.length) {G__13362__a[G__13362__i] = arguments[G__13362__i + 2]; ++G__13362__i;}
G__13361 = new cljs.core.IndexedSeq(G__13362__a,0);
}
return prepend_BANG___3.cljs$core$IFn$_invoke$arity$variadic(parent,child, G__13361);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
prepend_BANG_.cljs$lang$maxFixedArity = 2;
prepend_BANG_.cljs$lang$applyTo = prepend_BANG___3.cljs$lang$applyTo;
prepend_BANG_.cljs$core$IFn$_invoke$arity$2 = prepend_BANG___2;
prepend_BANG_.cljs$core$IFn$_invoke$arity$variadic = prepend_BANG___3.cljs$core$IFn$_invoke$arity$variadic;
return prepend_BANG_;
})()
;
/**
* Insert `elem` before `other`, `other` must have a parent
*/
dommy.core.insert_before_BANG_ = (function insert_before_BANG_(elem,other){
var p = dommy.core.parent.call(null,other);
if(cljs.core.truth_(p)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Target element must have a parent"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"p","p",1791580836,null)))].join('')));
}

p.insertBefore(elem,other);

return elem;
});
/**
* Insert `elem` after `other`, `other` must have a parent
*/
dommy.core.insert_after_BANG_ = (function insert_after_BANG_(elem,other){
var temp__4124__auto___13363 = other.nextSibling;
if(cljs.core.truth_(temp__4124__auto___13363)){
var next_13364 = temp__4124__auto___13363;
dommy.core.insert_before_BANG_.call(null,elem,next_13364);
} else {
dommy.core.append_BANG_.call(null,dommy.core.parent.call(null,other),elem);
}

return elem;
});
/**
* Replace `elem` with `new`, return `new`
*/
dommy.core.replace_BANG_ = (function replace_BANG_(elem,new$){
var p = dommy.core.parent.call(null,elem);
if(cljs.core.truth_(p)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Target element must have a parent"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"p","p",1791580836,null)))].join('')));
}

p.replaceChild(new$,elem);

return new$;
});
/**
* Replace children of `elem` with `child`
*/
dommy.core.replace_contents_BANG_ = (function replace_contents_BANG_(p,child){
return dommy.core.append_BANG_.call(null,dommy.core.clear_BANG_.call(null,p),child);
});
/**
* Remove `elem` from `parent`, return `parent`
*/
dommy.core.remove_BANG_ = (function() {
var remove_BANG_ = null;
var remove_BANG___1 = (function (elem){
var p = dommy.core.parent.call(null,elem);
if(cljs.core.truth_(p)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Target element must have a parent"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"p","p",1791580836,null)))].join('')));
}

return remove_BANG_.call(null,p,elem);
});
var remove_BANG___2 = (function (p,elem){
var G__13366 = p;
G__13366.removeChild(elem);

return G__13366;
});
remove_BANG_ = function(p,elem){
switch(arguments.length){
case 1:
return remove_BANG___1.call(this,p);
case 2:
return remove_BANG___2.call(this,p,elem);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
remove_BANG_.cljs$core$IFn$_invoke$arity$1 = remove_BANG___1;
remove_BANG_.cljs$core$IFn$_invoke$arity$2 = remove_BANG___2;
return remove_BANG_;
})()
;
dommy.core.special_listener_makers = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__13367){
var vec__13368 = p__13367;
var special_mouse_event = cljs.core.nth.call(null,vec__13368,(0),null);
var real_mouse_event = cljs.core.nth.call(null,vec__13368,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [special_mouse_event,new cljs.core.PersistentArrayMap.fromArray([real_mouse_event,((function (vec__13368,special_mouse_event,real_mouse_event){
return (function (f){
return ((function (vec__13368,special_mouse_event,real_mouse_event){
return (function (event){
var related_target = event.relatedTarget;
var listener_target = (function (){var or__3759__auto__ = event.selectedTarget;
if(cljs.core.truth_(or__3759__auto__)){
return or__3759__auto__;
} else {
return event.currentTarget;
}
})();
if(cljs.core.truth_((function (){var and__3747__auto__ = related_target;
if(cljs.core.truth_(and__3747__auto__)){
return dommy.core.descendant_QMARK_.call(null,related_target,listener_target);
} else {
return and__3747__auto__;
}
})())){
return null;
} else {
return f.call(null,event);
}
});
;})(vec__13368,special_mouse_event,real_mouse_event))
});})(vec__13368,special_mouse_event,real_mouse_event))
], true, false)], null);
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"mouseenter","mouseenter",-1792413560),new cljs.core.Keyword(null,"mouseover","mouseover",-484272303),new cljs.core.Keyword(null,"mouseleave","mouseleave",531566580),new cljs.core.Keyword(null,"mouseout","mouseout",2049446890)], null)));
/**
* fires f if event.target is found with `selector`
*/
dommy.core.live_listener = (function live_listener(elem,selector,f){
return (function (event){
var selected_target = dommy.core.closest.call(null,elem,event.target,selector);
if(cljs.core.truth_((function (){var and__3747__auto__ = selected_target;
if(cljs.core.truth_(and__3747__auto__)){
return cljs.core.not.call(null,dommy.core.attr.call(null,selected_target,new cljs.core.Keyword(null,"disabled","disabled",-1529784218)));
} else {
return and__3747__auto__;
}
})())){
event.selectedTarget = selected_target;

return f.call(null,event);
} else {
return null;
}
});
});
/**
* Returns a nested map of event listeners on `elem`
*/
dommy.core.event_listeners = (function event_listeners(elem){
var or__3759__auto__ = elem.dommyEventListeners;
if(cljs.core.truth_(or__3759__auto__)){
return or__3759__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});
/**
* @param {...*} var_args
*/
dommy.core.update_event_listeners_BANG_ = (function() { 
var update_event_listeners_BANG___delegate = function (elem,f,args){
var elem__$1 = elem;
return elem__$1.dommyEventListeners = cljs.core.apply.call(null,f,dommy.core.event_listeners.call(null,elem__$1),args);
};
var update_event_listeners_BANG_ = function (elem,f,var_args){
var args = null;
if (arguments.length > 2) {
var G__13369__i = 0, G__13369__a = new Array(arguments.length -  2);
while (G__13369__i < G__13369__a.length) {G__13369__a[G__13369__i] = arguments[G__13369__i + 2]; ++G__13369__i;}
  args = new cljs.core.IndexedSeq(G__13369__a,0);
} 
return update_event_listeners_BANG___delegate.call(this,elem,f,args);};
update_event_listeners_BANG_.cljs$lang$maxFixedArity = 2;
update_event_listeners_BANG_.cljs$lang$applyTo = (function (arglist__13370){
var elem = cljs.core.first(arglist__13370);
arglist__13370 = cljs.core.next(arglist__13370);
var f = cljs.core.first(arglist__13370);
var args = cljs.core.rest(arglist__13370);
return update_event_listeners_BANG___delegate(elem,f,args);
});
update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic = update_event_listeners_BANG___delegate;
return update_event_listeners_BANG_;
})()
;
dommy.core.elem_and_selector = (function elem_and_selector(elem_sel){
if(cljs.core.sequential_QMARK_.call(null,elem_sel)){
return cljs.core.juxt.call(null,cljs.core.first,cljs.core.rest).call(null,elem_sel);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [elem_sel,null], null);
}
});
/**
* Adds `f` as a listener for events of type `event-type` on
* `elem-sel`, which must either be a DOM node, or a sequence
* whose first item is a DOM node.
* 
* In other words, the call to `listen!` can take two forms:
* 
* If `elem-sel` is a DOM node, i.e., you're doing something like:
* 
* (listen! elem :click click-handler)
* 
* then `click-handler` will be set as a listener for `click` events
* on the `elem`.
* 
* If `elem-sel` is a sequence:
* 
* (listen! [elem :.selector.for :.some.descendants] :click click-handler)
* 
* then `click-handler` will be set as a listener for `click` events
* on descendants of `elem` that match the selector
* 
* Also accepts any number of event-type and handler pairs for setting
* multiple listeners at once:
* 
* (listen! some-elem :click click-handler :hover hover-handler)
* @param {...*} var_args
*/
dommy.core.listen_BANG_ = (function() { 
var listen_BANG___delegate = function (elem_sel,type_fs){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,type_fs))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1827825394,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"type-fs","type-fs",1567896074,null)))))].join('')));
}

var vec__13394_13417 = dommy.core.elem_and_selector.call(null,elem_sel);
var elem_13418 = cljs.core.nth.call(null,vec__13394_13417,(0),null);
var selector_13419 = cljs.core.nth.call(null,vec__13394_13417,(1),null);
var seq__13395_13420 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),type_fs));
var chunk__13402_13421 = null;
var count__13403_13422 = (0);
var i__13404_13423 = (0);
while(true){
if((i__13404_13423 < count__13403_13422)){
var vec__13411_13424 = cljs.core._nth.call(null,chunk__13402_13421,i__13404_13423);
var orig_type_13425 = cljs.core.nth.call(null,vec__13411_13424,(0),null);
var f_13426 = cljs.core.nth.call(null,vec__13411_13424,(1),null);
var seq__13405_13427 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_13425,new cljs.core.PersistentArrayMap.fromArray([orig_type_13425,cljs.core.identity], true, false)));
var chunk__13407_13428 = null;
var count__13408_13429 = (0);
var i__13409_13430 = (0);
while(true){
if((i__13409_13430 < count__13408_13429)){
var vec__13412_13431 = cljs.core._nth.call(null,chunk__13407_13428,i__13409_13430);
var actual_type_13432 = cljs.core.nth.call(null,vec__13412_13431,(0),null);
var factory_13433 = cljs.core.nth.call(null,vec__13412_13431,(1),null);
var canonical_f_13434 = (cljs.core.truth_(selector_13419)?cljs.core.partial.call(null,dommy.core.live_listener,elem_13418,selector_13419):cljs.core.identity).call(null,factory_13433.call(null,f_13426));
dommy.core.update_event_listeners_BANG_.call(null,elem_13418,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_13419,actual_type_13432,f_13426], null),canonical_f_13434);

if(cljs.core.truth_(elem_13418.addEventListener)){
elem_13418.addEventListener(cljs.core.name.call(null,actual_type_13432),canonical_f_13434);
} else {
elem_13418.attachEvent(cljs.core.name.call(null,actual_type_13432),canonical_f_13434);
}

var G__13435 = seq__13405_13427;
var G__13436 = chunk__13407_13428;
var G__13437 = count__13408_13429;
var G__13438 = (i__13409_13430 + (1));
seq__13405_13427 = G__13435;
chunk__13407_13428 = G__13436;
count__13408_13429 = G__13437;
i__13409_13430 = G__13438;
continue;
} else {
var temp__4126__auto___13439 = cljs.core.seq.call(null,seq__13405_13427);
if(temp__4126__auto___13439){
var seq__13405_13440__$1 = temp__4126__auto___13439;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13405_13440__$1)){
var c__4546__auto___13441 = cljs.core.chunk_first.call(null,seq__13405_13440__$1);
var G__13442 = cljs.core.chunk_rest.call(null,seq__13405_13440__$1);
var G__13443 = c__4546__auto___13441;
var G__13444 = cljs.core.count.call(null,c__4546__auto___13441);
var G__13445 = (0);
seq__13405_13427 = G__13442;
chunk__13407_13428 = G__13443;
count__13408_13429 = G__13444;
i__13409_13430 = G__13445;
continue;
} else {
var vec__13413_13446 = cljs.core.first.call(null,seq__13405_13440__$1);
var actual_type_13447 = cljs.core.nth.call(null,vec__13413_13446,(0),null);
var factory_13448 = cljs.core.nth.call(null,vec__13413_13446,(1),null);
var canonical_f_13449 = (cljs.core.truth_(selector_13419)?cljs.core.partial.call(null,dommy.core.live_listener,elem_13418,selector_13419):cljs.core.identity).call(null,factory_13448.call(null,f_13426));
dommy.core.update_event_listeners_BANG_.call(null,elem_13418,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_13419,actual_type_13447,f_13426], null),canonical_f_13449);

if(cljs.core.truth_(elem_13418.addEventListener)){
elem_13418.addEventListener(cljs.core.name.call(null,actual_type_13447),canonical_f_13449);
} else {
elem_13418.attachEvent(cljs.core.name.call(null,actual_type_13447),canonical_f_13449);
}

var G__13450 = cljs.core.next.call(null,seq__13405_13440__$1);
var G__13451 = null;
var G__13452 = (0);
var G__13453 = (0);
seq__13405_13427 = G__13450;
chunk__13407_13428 = G__13451;
count__13408_13429 = G__13452;
i__13409_13430 = G__13453;
continue;
}
} else {
}
}
break;
}

var G__13454 = seq__13395_13420;
var G__13455 = chunk__13402_13421;
var G__13456 = count__13403_13422;
var G__13457 = (i__13404_13423 + (1));
seq__13395_13420 = G__13454;
chunk__13402_13421 = G__13455;
count__13403_13422 = G__13456;
i__13404_13423 = G__13457;
continue;
} else {
var temp__4126__auto___13458 = cljs.core.seq.call(null,seq__13395_13420);
if(temp__4126__auto___13458){
var seq__13395_13459__$1 = temp__4126__auto___13458;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13395_13459__$1)){
var c__4546__auto___13460 = cljs.core.chunk_first.call(null,seq__13395_13459__$1);
var G__13461 = cljs.core.chunk_rest.call(null,seq__13395_13459__$1);
var G__13462 = c__4546__auto___13460;
var G__13463 = cljs.core.count.call(null,c__4546__auto___13460);
var G__13464 = (0);
seq__13395_13420 = G__13461;
chunk__13402_13421 = G__13462;
count__13403_13422 = G__13463;
i__13404_13423 = G__13464;
continue;
} else {
var vec__13414_13465 = cljs.core.first.call(null,seq__13395_13459__$1);
var orig_type_13466 = cljs.core.nth.call(null,vec__13414_13465,(0),null);
var f_13467 = cljs.core.nth.call(null,vec__13414_13465,(1),null);
var seq__13396_13468 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_13466,new cljs.core.PersistentArrayMap.fromArray([orig_type_13466,cljs.core.identity], true, false)));
var chunk__13398_13469 = null;
var count__13399_13470 = (0);
var i__13400_13471 = (0);
while(true){
if((i__13400_13471 < count__13399_13470)){
var vec__13415_13472 = cljs.core._nth.call(null,chunk__13398_13469,i__13400_13471);
var actual_type_13473 = cljs.core.nth.call(null,vec__13415_13472,(0),null);
var factory_13474 = cljs.core.nth.call(null,vec__13415_13472,(1),null);
var canonical_f_13475 = (cljs.core.truth_(selector_13419)?cljs.core.partial.call(null,dommy.core.live_listener,elem_13418,selector_13419):cljs.core.identity).call(null,factory_13474.call(null,f_13467));
dommy.core.update_event_listeners_BANG_.call(null,elem_13418,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_13419,actual_type_13473,f_13467], null),canonical_f_13475);

if(cljs.core.truth_(elem_13418.addEventListener)){
elem_13418.addEventListener(cljs.core.name.call(null,actual_type_13473),canonical_f_13475);
} else {
elem_13418.attachEvent(cljs.core.name.call(null,actual_type_13473),canonical_f_13475);
}

var G__13476 = seq__13396_13468;
var G__13477 = chunk__13398_13469;
var G__13478 = count__13399_13470;
var G__13479 = (i__13400_13471 + (1));
seq__13396_13468 = G__13476;
chunk__13398_13469 = G__13477;
count__13399_13470 = G__13478;
i__13400_13471 = G__13479;
continue;
} else {
var temp__4126__auto___13480__$1 = cljs.core.seq.call(null,seq__13396_13468);
if(temp__4126__auto___13480__$1){
var seq__13396_13481__$1 = temp__4126__auto___13480__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13396_13481__$1)){
var c__4546__auto___13482 = cljs.core.chunk_first.call(null,seq__13396_13481__$1);
var G__13483 = cljs.core.chunk_rest.call(null,seq__13396_13481__$1);
var G__13484 = c__4546__auto___13482;
var G__13485 = cljs.core.count.call(null,c__4546__auto___13482);
var G__13486 = (0);
seq__13396_13468 = G__13483;
chunk__13398_13469 = G__13484;
count__13399_13470 = G__13485;
i__13400_13471 = G__13486;
continue;
} else {
var vec__13416_13487 = cljs.core.first.call(null,seq__13396_13481__$1);
var actual_type_13488 = cljs.core.nth.call(null,vec__13416_13487,(0),null);
var factory_13489 = cljs.core.nth.call(null,vec__13416_13487,(1),null);
var canonical_f_13490 = (cljs.core.truth_(selector_13419)?cljs.core.partial.call(null,dommy.core.live_listener,elem_13418,selector_13419):cljs.core.identity).call(null,factory_13489.call(null,f_13467));
dommy.core.update_event_listeners_BANG_.call(null,elem_13418,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_13419,actual_type_13488,f_13467], null),canonical_f_13490);

if(cljs.core.truth_(elem_13418.addEventListener)){
elem_13418.addEventListener(cljs.core.name.call(null,actual_type_13488),canonical_f_13490);
} else {
elem_13418.attachEvent(cljs.core.name.call(null,actual_type_13488),canonical_f_13490);
}

var G__13491 = cljs.core.next.call(null,seq__13396_13481__$1);
var G__13492 = null;
var G__13493 = (0);
var G__13494 = (0);
seq__13396_13468 = G__13491;
chunk__13398_13469 = G__13492;
count__13399_13470 = G__13493;
i__13400_13471 = G__13494;
continue;
}
} else {
}
}
break;
}

var G__13495 = cljs.core.next.call(null,seq__13395_13459__$1);
var G__13496 = null;
var G__13497 = (0);
var G__13498 = (0);
seq__13395_13420 = G__13495;
chunk__13402_13421 = G__13496;
count__13403_13422 = G__13497;
i__13404_13423 = G__13498;
continue;
}
} else {
}
}
break;
}

return elem_sel;
};
var listen_BANG_ = function (elem_sel,var_args){
var type_fs = null;
if (arguments.length > 1) {
var G__13499__i = 0, G__13499__a = new Array(arguments.length -  1);
while (G__13499__i < G__13499__a.length) {G__13499__a[G__13499__i] = arguments[G__13499__i + 1]; ++G__13499__i;}
  type_fs = new cljs.core.IndexedSeq(G__13499__a,0);
} 
return listen_BANG___delegate.call(this,elem_sel,type_fs);};
listen_BANG_.cljs$lang$maxFixedArity = 1;
listen_BANG_.cljs$lang$applyTo = (function (arglist__13500){
var elem_sel = cljs.core.first(arglist__13500);
var type_fs = cljs.core.rest(arglist__13500);
return listen_BANG___delegate(elem_sel,type_fs);
});
listen_BANG_.cljs$core$IFn$_invoke$arity$variadic = listen_BANG___delegate;
return listen_BANG_;
})()
;
/**
* Removes event listener for the element defined in `elem-sel`,
* which is the same format as listen!.
* 
* The following forms are allowed, and will remove all handlers
* that match the parameters passed in:
* 
* (unlisten! [elem :.selector] :click event-listener)
* 
* (unlisten! [elem :.selector]
* :click event-listener
* :mouseover other-event-listener)
* @param {...*} var_args
*/
dommy.core.unlisten_BANG_ = (function() { 
var unlisten_BANG___delegate = function (elem_sel,type_fs){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,type_fs))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1827825394,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"type-fs","type-fs",1567896074,null)))))].join('')));
}

var vec__13524_13547 = dommy.core.elem_and_selector.call(null,elem_sel);
var elem_13548 = cljs.core.nth.call(null,vec__13524_13547,(0),null);
var selector_13549 = cljs.core.nth.call(null,vec__13524_13547,(1),null);
var seq__13525_13550 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),type_fs));
var chunk__13532_13551 = null;
var count__13533_13552 = (0);
var i__13534_13553 = (0);
while(true){
if((i__13534_13553 < count__13533_13552)){
var vec__13541_13554 = cljs.core._nth.call(null,chunk__13532_13551,i__13534_13553);
var orig_type_13555 = cljs.core.nth.call(null,vec__13541_13554,(0),null);
var f_13556 = cljs.core.nth.call(null,vec__13541_13554,(1),null);
var seq__13535_13557 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_13555,new cljs.core.PersistentArrayMap.fromArray([orig_type_13555,cljs.core.identity], true, false)));
var chunk__13537_13558 = null;
var count__13538_13559 = (0);
var i__13539_13560 = (0);
while(true){
if((i__13539_13560 < count__13538_13559)){
var vec__13542_13561 = cljs.core._nth.call(null,chunk__13537_13558,i__13539_13560);
var actual_type_13562 = cljs.core.nth.call(null,vec__13542_13561,(0),null);
var __13563 = cljs.core.nth.call(null,vec__13542_13561,(1),null);
var keys_13564 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_13549,actual_type_13562,f_13556], null);
var canonical_f_13565 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_13548),keys_13564);
dommy.core.update_event_listeners_BANG_.call(null,elem_13548,dommy.utils.dissoc_in,keys_13564);

if(cljs.core.truth_(elem_13548.removeEventListener)){
elem_13548.removeEventListener(cljs.core.name.call(null,actual_type_13562),canonical_f_13565);
} else {
elem_13548.detachEvent(cljs.core.name.call(null,actual_type_13562),canonical_f_13565);
}

var G__13566 = seq__13535_13557;
var G__13567 = chunk__13537_13558;
var G__13568 = count__13538_13559;
var G__13569 = (i__13539_13560 + (1));
seq__13535_13557 = G__13566;
chunk__13537_13558 = G__13567;
count__13538_13559 = G__13568;
i__13539_13560 = G__13569;
continue;
} else {
var temp__4126__auto___13570 = cljs.core.seq.call(null,seq__13535_13557);
if(temp__4126__auto___13570){
var seq__13535_13571__$1 = temp__4126__auto___13570;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13535_13571__$1)){
var c__4546__auto___13572 = cljs.core.chunk_first.call(null,seq__13535_13571__$1);
var G__13573 = cljs.core.chunk_rest.call(null,seq__13535_13571__$1);
var G__13574 = c__4546__auto___13572;
var G__13575 = cljs.core.count.call(null,c__4546__auto___13572);
var G__13576 = (0);
seq__13535_13557 = G__13573;
chunk__13537_13558 = G__13574;
count__13538_13559 = G__13575;
i__13539_13560 = G__13576;
continue;
} else {
var vec__13543_13577 = cljs.core.first.call(null,seq__13535_13571__$1);
var actual_type_13578 = cljs.core.nth.call(null,vec__13543_13577,(0),null);
var __13579 = cljs.core.nth.call(null,vec__13543_13577,(1),null);
var keys_13580 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_13549,actual_type_13578,f_13556], null);
var canonical_f_13581 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_13548),keys_13580);
dommy.core.update_event_listeners_BANG_.call(null,elem_13548,dommy.utils.dissoc_in,keys_13580);

if(cljs.core.truth_(elem_13548.removeEventListener)){
elem_13548.removeEventListener(cljs.core.name.call(null,actual_type_13578),canonical_f_13581);
} else {
elem_13548.detachEvent(cljs.core.name.call(null,actual_type_13578),canonical_f_13581);
}

var G__13582 = cljs.core.next.call(null,seq__13535_13571__$1);
var G__13583 = null;
var G__13584 = (0);
var G__13585 = (0);
seq__13535_13557 = G__13582;
chunk__13537_13558 = G__13583;
count__13538_13559 = G__13584;
i__13539_13560 = G__13585;
continue;
}
} else {
}
}
break;
}

var G__13586 = seq__13525_13550;
var G__13587 = chunk__13532_13551;
var G__13588 = count__13533_13552;
var G__13589 = (i__13534_13553 + (1));
seq__13525_13550 = G__13586;
chunk__13532_13551 = G__13587;
count__13533_13552 = G__13588;
i__13534_13553 = G__13589;
continue;
} else {
var temp__4126__auto___13590 = cljs.core.seq.call(null,seq__13525_13550);
if(temp__4126__auto___13590){
var seq__13525_13591__$1 = temp__4126__auto___13590;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13525_13591__$1)){
var c__4546__auto___13592 = cljs.core.chunk_first.call(null,seq__13525_13591__$1);
var G__13593 = cljs.core.chunk_rest.call(null,seq__13525_13591__$1);
var G__13594 = c__4546__auto___13592;
var G__13595 = cljs.core.count.call(null,c__4546__auto___13592);
var G__13596 = (0);
seq__13525_13550 = G__13593;
chunk__13532_13551 = G__13594;
count__13533_13552 = G__13595;
i__13534_13553 = G__13596;
continue;
} else {
var vec__13544_13597 = cljs.core.first.call(null,seq__13525_13591__$1);
var orig_type_13598 = cljs.core.nth.call(null,vec__13544_13597,(0),null);
var f_13599 = cljs.core.nth.call(null,vec__13544_13597,(1),null);
var seq__13526_13600 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_13598,new cljs.core.PersistentArrayMap.fromArray([orig_type_13598,cljs.core.identity], true, false)));
var chunk__13528_13601 = null;
var count__13529_13602 = (0);
var i__13530_13603 = (0);
while(true){
if((i__13530_13603 < count__13529_13602)){
var vec__13545_13604 = cljs.core._nth.call(null,chunk__13528_13601,i__13530_13603);
var actual_type_13605 = cljs.core.nth.call(null,vec__13545_13604,(0),null);
var __13606 = cljs.core.nth.call(null,vec__13545_13604,(1),null);
var keys_13607 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_13549,actual_type_13605,f_13599], null);
var canonical_f_13608 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_13548),keys_13607);
dommy.core.update_event_listeners_BANG_.call(null,elem_13548,dommy.utils.dissoc_in,keys_13607);

if(cljs.core.truth_(elem_13548.removeEventListener)){
elem_13548.removeEventListener(cljs.core.name.call(null,actual_type_13605),canonical_f_13608);
} else {
elem_13548.detachEvent(cljs.core.name.call(null,actual_type_13605),canonical_f_13608);
}

var G__13609 = seq__13526_13600;
var G__13610 = chunk__13528_13601;
var G__13611 = count__13529_13602;
var G__13612 = (i__13530_13603 + (1));
seq__13526_13600 = G__13609;
chunk__13528_13601 = G__13610;
count__13529_13602 = G__13611;
i__13530_13603 = G__13612;
continue;
} else {
var temp__4126__auto___13613__$1 = cljs.core.seq.call(null,seq__13526_13600);
if(temp__4126__auto___13613__$1){
var seq__13526_13614__$1 = temp__4126__auto___13613__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13526_13614__$1)){
var c__4546__auto___13615 = cljs.core.chunk_first.call(null,seq__13526_13614__$1);
var G__13616 = cljs.core.chunk_rest.call(null,seq__13526_13614__$1);
var G__13617 = c__4546__auto___13615;
var G__13618 = cljs.core.count.call(null,c__4546__auto___13615);
var G__13619 = (0);
seq__13526_13600 = G__13616;
chunk__13528_13601 = G__13617;
count__13529_13602 = G__13618;
i__13530_13603 = G__13619;
continue;
} else {
var vec__13546_13620 = cljs.core.first.call(null,seq__13526_13614__$1);
var actual_type_13621 = cljs.core.nth.call(null,vec__13546_13620,(0),null);
var __13622 = cljs.core.nth.call(null,vec__13546_13620,(1),null);
var keys_13623 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_13549,actual_type_13621,f_13599], null);
var canonical_f_13624 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_13548),keys_13623);
dommy.core.update_event_listeners_BANG_.call(null,elem_13548,dommy.utils.dissoc_in,keys_13623);

if(cljs.core.truth_(elem_13548.removeEventListener)){
elem_13548.removeEventListener(cljs.core.name.call(null,actual_type_13621),canonical_f_13624);
} else {
elem_13548.detachEvent(cljs.core.name.call(null,actual_type_13621),canonical_f_13624);
}

var G__13625 = cljs.core.next.call(null,seq__13526_13614__$1);
var G__13626 = null;
var G__13627 = (0);
var G__13628 = (0);
seq__13526_13600 = G__13625;
chunk__13528_13601 = G__13626;
count__13529_13602 = G__13627;
i__13530_13603 = G__13628;
continue;
}
} else {
}
}
break;
}

var G__13629 = cljs.core.next.call(null,seq__13525_13591__$1);
var G__13630 = null;
var G__13631 = (0);
var G__13632 = (0);
seq__13525_13550 = G__13629;
chunk__13532_13551 = G__13630;
count__13533_13552 = G__13631;
i__13534_13553 = G__13632;
continue;
}
} else {
}
}
break;
}

return elem_sel;
};
var unlisten_BANG_ = function (elem_sel,var_args){
var type_fs = null;
if (arguments.length > 1) {
var G__13633__i = 0, G__13633__a = new Array(arguments.length -  1);
while (G__13633__i < G__13633__a.length) {G__13633__a[G__13633__i] = arguments[G__13633__i + 1]; ++G__13633__i;}
  type_fs = new cljs.core.IndexedSeq(G__13633__a,0);
} 
return unlisten_BANG___delegate.call(this,elem_sel,type_fs);};
unlisten_BANG_.cljs$lang$maxFixedArity = 1;
unlisten_BANG_.cljs$lang$applyTo = (function (arglist__13634){
var elem_sel = cljs.core.first(arglist__13634);
var type_fs = cljs.core.rest(arglist__13634);
return unlisten_BANG___delegate(elem_sel,type_fs);
});
unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic = unlisten_BANG___delegate;
return unlisten_BANG_;
})()
;
/**
* Behaves like `listen!`, but removes the listener after the first event occurs.
* @param {...*} var_args
*/
dommy.core.listen_once_BANG_ = (function() { 
var listen_once_BANG___delegate = function (elem_sel,type_fs){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,type_fs))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1827825394,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"type-fs","type-fs",1567896074,null)))))].join('')));
}

var vec__13642_13649 = dommy.core.elem_and_selector.call(null,elem_sel);
var elem_13650 = cljs.core.nth.call(null,vec__13642_13649,(0),null);
var selector_13651 = cljs.core.nth.call(null,vec__13642_13649,(1),null);
var seq__13643_13652 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),type_fs));
var chunk__13644_13653 = null;
var count__13645_13654 = (0);
var i__13646_13655 = (0);
while(true){
if((i__13646_13655 < count__13645_13654)){
var vec__13647_13656 = cljs.core._nth.call(null,chunk__13644_13653,i__13646_13655);
var type_13657 = cljs.core.nth.call(null,vec__13647_13656,(0),null);
var f_13658 = cljs.core.nth.call(null,vec__13647_13656,(1),null);
dommy.core.listen_BANG_.call(null,elem_sel,type_13657,((function (seq__13643_13652,chunk__13644_13653,count__13645_13654,i__13646_13655,vec__13647_13656,type_13657,f_13658,vec__13642_13649,elem_13650,selector_13651){
return (function this_fn(e){
dommy.core.unlisten_BANG_.call(null,elem_sel,type_13657,this_fn);

return f_13658.call(null,e);
});})(seq__13643_13652,chunk__13644_13653,count__13645_13654,i__13646_13655,vec__13647_13656,type_13657,f_13658,vec__13642_13649,elem_13650,selector_13651))
);

var G__13659 = seq__13643_13652;
var G__13660 = chunk__13644_13653;
var G__13661 = count__13645_13654;
var G__13662 = (i__13646_13655 + (1));
seq__13643_13652 = G__13659;
chunk__13644_13653 = G__13660;
count__13645_13654 = G__13661;
i__13646_13655 = G__13662;
continue;
} else {
var temp__4126__auto___13663 = cljs.core.seq.call(null,seq__13643_13652);
if(temp__4126__auto___13663){
var seq__13643_13664__$1 = temp__4126__auto___13663;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13643_13664__$1)){
var c__4546__auto___13665 = cljs.core.chunk_first.call(null,seq__13643_13664__$1);
var G__13666 = cljs.core.chunk_rest.call(null,seq__13643_13664__$1);
var G__13667 = c__4546__auto___13665;
var G__13668 = cljs.core.count.call(null,c__4546__auto___13665);
var G__13669 = (0);
seq__13643_13652 = G__13666;
chunk__13644_13653 = G__13667;
count__13645_13654 = G__13668;
i__13646_13655 = G__13669;
continue;
} else {
var vec__13648_13670 = cljs.core.first.call(null,seq__13643_13664__$1);
var type_13671 = cljs.core.nth.call(null,vec__13648_13670,(0),null);
var f_13672 = cljs.core.nth.call(null,vec__13648_13670,(1),null);
dommy.core.listen_BANG_.call(null,elem_sel,type_13671,((function (seq__13643_13652,chunk__13644_13653,count__13645_13654,i__13646_13655,vec__13648_13670,type_13671,f_13672,seq__13643_13664__$1,temp__4126__auto___13663,vec__13642_13649,elem_13650,selector_13651){
return (function this_fn(e){
dommy.core.unlisten_BANG_.call(null,elem_sel,type_13671,this_fn);

return f_13672.call(null,e);
});})(seq__13643_13652,chunk__13644_13653,count__13645_13654,i__13646_13655,vec__13648_13670,type_13671,f_13672,seq__13643_13664__$1,temp__4126__auto___13663,vec__13642_13649,elem_13650,selector_13651))
);

var G__13673 = cljs.core.next.call(null,seq__13643_13664__$1);
var G__13674 = null;
var G__13675 = (0);
var G__13676 = (0);
seq__13643_13652 = G__13673;
chunk__13644_13653 = G__13674;
count__13645_13654 = G__13675;
i__13646_13655 = G__13676;
continue;
}
} else {
}
}
break;
}

return elem_sel;
};
var listen_once_BANG_ = function (elem_sel,var_args){
var type_fs = null;
if (arguments.length > 1) {
var G__13677__i = 0, G__13677__a = new Array(arguments.length -  1);
while (G__13677__i < G__13677__a.length) {G__13677__a[G__13677__i] = arguments[G__13677__i + 1]; ++G__13677__i;}
  type_fs = new cljs.core.IndexedSeq(G__13677__a,0);
} 
return listen_once_BANG___delegate.call(this,elem_sel,type_fs);};
listen_once_BANG_.cljs$lang$maxFixedArity = 1;
listen_once_BANG_.cljs$lang$applyTo = (function (arglist__13678){
var elem_sel = cljs.core.first(arglist__13678);
var type_fs = cljs.core.rest(arglist__13678);
return listen_once_BANG___delegate(elem_sel,type_fs);
});
listen_once_BANG_.cljs$core$IFn$_invoke$arity$variadic = listen_once_BANG___delegate;
return listen_once_BANG_;
})()
;

//# sourceMappingURL=core.js.map