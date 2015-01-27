(ns daily.easy-197
  "# [2015-01-12] Challenge #197 [Easy] ISBN Validator

The challenge is to validate 10-digit ISBN numbers using the check digit.

[Full Challenge Description](https://www.reddit.com/r/dailyprogrammer/comments/2s7ezp/20150112_challenge_197_easy_isbn_validator/)
"
  (:require
    [dommy.core :as dommy :refer-macros [sel1]]
    [reagent.core :as reagent :refer [atom]]
    [ajax.core :refer [GET POST]]
    [clojure.string :as string]))

(defn validate-isbn-10
  "# Solution

  The magic function here is `map-indexed`, which applies a binary function to pairs of elements and their indicies. The
  indicies are 0 to 9, so I subtract them from 10 to get 10 to 1.
  "
  [input]
  (and (= 10 (count input))
    (as-> input $                           ;; bind `$` to the return value of the last function
          (map js/parseInt $)               ;; convert the sequence of characters into one of integers
          (map-indexed #(* (- 10 %1) %2) $) ;; multiply each integer by its "weight"
          (reduce + $)                      ;; sum the integers
          (mod $ 11)
          (= 0 $))))

;; ## Result
;;
;; You can try it out with one input string at a time using the following field.
(defn single-input []
 (let [value (atom "0345302567")]
   (fn []
    [:div
     [:p "Input: "
      [:input {:type "text" :value @value
               :on-change #(reset! value (-> % .-target .-value))}]
      [:p "Output: " (str (validate-isbn-10 @value))]]])))
;; <div id="single-input"></foo>
(reagent/render-component [single-input] (sel1 :#single-input))

;; <script>goog.require("daily.easy_197");</script>
