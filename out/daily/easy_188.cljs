(ns daily.easy-188
  "# [2014-11-10] Challenge #188 [Easy] yyyy-mm-dd

The challenge is to covert dates in various formats into ISO8601 format.

[Full Challenge Description](https://www.reddit.com/r/dailyprogrammer/comments/2lvgz6/20141110_challenge_188_easy_yyyymmdd/)
"
  (:require
    [dommy.core :as dommy :refer-macros [sel1]]
    [reagent.core :as reagent :refer [atom]]
    [ajax.core :refer [GET POST]]
    [clojure.string :as string]))

;; # Solution
;;
;; ## Auxiliary Functions
;;

(defn convert-year
  "Converts a two digit year string into a four digit year string. The valid two digit years are between 1950 and 2049.
  This means numbers between 00 and 49 get 20 preappended and numbers between 50 and 99 get 19."
  [two-digit-year]
  (if (< (js/parseInt two-digit-year) 50)
    (str "20" two-digit-year)
    (str "19" two-digit-year)))

(defn convert-month
  "Converts three character month abrieviations into their numeral representation. It uses a simple map lookup.

  There is some redundancy in the map. A different implementation might use a vector of the abrieviations and get the
  index of the query word."
  [month-word]
  (get {"Jan" "01"
        "Feb" "02"
        "Mar" "03"
        "Apr" "04"
        "May" "05"
        "Jun" "06"
        "Jul" "07"
        "Aug" "08"
        "Sep" "09"
        "Oct" "10"
        "Nov" "11"
        "Dec" "12"} month-word))

(defn to-iso8601
  "Combine the year, month, and day strings with the correct dilimeter for ISO 8601 format."
  [year month day]
  (str year \- month \- day))

(defn apply-groups
  "Transforms the given function into one that takes a vector as an argument, ignoring the first value in the vector.
  The original function is called with the last values in the vector as individual arguments."
  [f]
  #(apply f (rest %)))

(defn normalize-date
  "## Format Matching

  This is the core function. It goes through each of the given regular expressions in sequence. When it finds one that
  matches, it passes the result of [`re-matches`](https://clojuredocs.org/clojure.core/re-matches) to the given
  function. In the case of a date that is already in the correct format, the `identity` function returns it unchanged.
  The other functions rearrange the matched groups, running them through the auxiliary functions as necessary.

  The regular expressions were tested with the test input at [regexr](http://regexr.com/3a9ec)"
  [date]
  (condp re-matches date
    #"\d\d\d\d-\d\d-\d\d"          :>> identity
    #"(\d\d)/(\d\d)/(\d\d)"        :>> (apply-groups  #(to-iso8601 (convert-year %3)                %1  %2))
    #"(\d\d)#(\d\d)#(\d\d)"        :>> (apply-groups  #(to-iso8601 (convert-year %2)                %1  %3))
    #"(\d\d)\*(\d\d)\*(\d\d\d\d)"  :>> (apply-groups  #(to-iso8601               %3                 %2  %1))
    #"(\w\w\w) (\d\d), (\d\d\d\d)" :>> (apply-groups  #(to-iso8601               %3  (convert-month %1) %2))
    #"(\w\w\w) (\d\d), (\d\d)"     :>> (apply-groups  #(to-iso8601 (convert-year %3) (convert-month %1) %2))
    "no match"))

;; ## Result
;;
;; You can try it out with one date at a time using the following field.
;;
;; <div id="single-input"></foo>
(defn single-input []
 (let [value (atom "10*11*2010")]
   (fn []
    [:div
     [:p "Input: "
      [:input {:type "text" :value @value
               :on-change #(reset! value (-> % .-target .-value))}]
      [:p "Output: " (normalize-date @value)]]])))

(reagent/render-component [single-input] (sel1 :#single-input))

;; Press the button to load the test input from the gist.
;;
;; <button id="test-input-button">Load test input</button>
;; <div id="test-input"></foo>
(defn test-input [input-file]
  [:table
   (for [input (string/split-lines input-file)]
     [:tr [:td input] [:td (normalize-date input)]])])

(let [button (sel1 :#test-input-button)]
  (dommy/listen! button :click
                 #(GET "https://gist.githubusercontent.com/coderd00d/a88d4d2da014203898af/raw/73e9055107b5185468e2ec28b27e3b7b853312e9/gistfile1.txt"
                       {:handler (fn [response]
                                   (reagent/render-component [test-input response] (sel1 :#test-input)))})))

;; <script>goog.require("daily.easy_188");</script>
