(ns daily.easy-197
  "# [2015-01-12] Challenge #197 [Easy] ISBN Validator

The challenge is to validate 10-digit ISBN numbers using the check digit.

[Full Challenge Description](https://www.reddit.com/r/dailyprogrammer/comments/2s7ezp/20150112_challenge_197_easy_isbn_validator/)
"
  (:require
    [dommy.core :refer-macros [sel1]]
    [reagent.core :as reagent :refer [atom]]))

;; # Solution
;;
(defn char-to-num
  "Convert a numeral character into an integer. In this case, it also works with the Roman numeral \"X\"."
  [chr]
  (if (= chr \X)
    10
    (js/parseInt chr)))

(defn validate-isbn-10
  "The magic function here is `map-indexed`, which applies a binary function to pairs of elements and their indicies.
  The indicies are 0 to 9, so I subtract them from 10 to get 10 to 1.

  The threading macro `->>` would have worked instead of `as->` if it wasn't for that pesky `mod`. I like `as->` better
  anyway because I have a visual mark of where the value goes in the next function."
  [input]
  (as-> input $                           ;; bind `$` to the return value of the last function
        (filter #(not= \- %) $)
        (map char-to-num $)               ;; convert the sequence of characters into one of integers
        (map-indexed #(* (- 10 %1) %2) $) ;; multiply each integer by its "weight"
        (reduce + $)                      ;; sum the integers
        (mod $ 11)
        (= 0 $)))

;; ## Result
;;
;; You can try it out with one input string at a time using the following field.
(defn single-input []
 (let [value (atom "0-3453-0256-7")]
   (fn []
    [:div
     [:p "Input: "
      [:input {:type "text" :value @value
               :on-change #(reset! value (-> % .-target .-value))}]
      [:p "Output: " (str (validate-isbn-10 @value))]]])))
;; <div id="single-input"></foo>
(reagent/render-component [single-input] (sel1 :#single-input))

;; <script>goog.require("daily.easy_197");</script>
