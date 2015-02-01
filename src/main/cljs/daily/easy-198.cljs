(ns daily.easy-198
  "# [2015-01-19] Challenge #198 [Easy] Words with Enemies

The challenge is to eliminate pairs of same characters from two words and report of the letters survived.

[Full Challenge Description](https://www.reddit.com/r/dailyprogrammer/comments/2syz7y/20150119_challenge_198_easy_words_with_enemies/)
"
  (:require
    [dommy.core :refer-macros [sel1]]
    [reagent.core :as reagent :refer [atom]]))

;; # Solution

(defn count-chars
  "Convert a string into a multiset of characters. Since Clojure has no native multiset, I'm using a map of characters
  to integers, where the integer value is the number of that character that is in the string."
  [word]
  (reduce #(merge-with + %1 {%2 1}) {} word))

(defn expand-chars
  "The reverse operation. Take a multiset of characters and expand it a string."
  [char-counts]
  (apply str
    (flatten
      (for [[char count] char-counts]
        (repeat count char)))))

(defn explode
  "Combine two multisets, destroying duplicate letters. This may result in negative letter counts, but they will be
  ignored on expansion."
  [left right]
  (merge-with - left right))

(defn eval-enemy-words
  "Put it all together.

  1. Convert each word to a multiset
  2. Do battle
  3. Expand the resulting multiset back to a string"
  [left right]
  (expand-chars
    (explode
      (count-chars left)
      (count-chars right))))

;; ## Result
;;
;; You can try it out with one pair of words at a time using the following fields.
(defn single-input []
  (let [left (atom "hat")
        right (atom "cat")]
    (fn []
      [:div
       [:p "Input: "
        [:input {:type "text" :value @left
                 :on-change #(reset! left (-> % .-target .-value))}]
        [:input {:type "text" :value @right
                 :on-change #(reset! right (-> % .-target .-value))}]
        [:p "Output: " (str (eval-enemy-words @left @right))]
        (let [l-count (count @left)
              r-count (count @right)]
          [:p (if (= l-count r-count)
                "tie"
                (if (> l-count r-count)
                  "left wins"
                  "right wins"))])]])))
;; <div id="single-input"></foo>
(reagent/render-component [single-input] (sel1 :#single-input))

;; <script>goog.require("daily.easy_198");</script>