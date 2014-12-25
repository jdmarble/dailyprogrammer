(ns daily.easy-188
  "# [2014-11-10] Challenge #188 [Easy] yyyy-mm-dd

[reddit link](https://www.reddit.com/r/dailyprogrammer/comments/2lvgz6/20141110_challenge_188_easy_yyyymmdd/)

## Description

iso 8601 standard for dates tells us the proper way to do an extended day is
yyyy-mm-dd

* yyyy = year
* mm = month
* dd = day

A company's database has become polluted with mixed date formats. They could
be one of 6 different formats

* `yyyy-mm-dd`
* `mm/dd/yy`
* `mm#yy#dd`
* `dd*mm*yyyy`
* `(month word) dd, yy`
* `(month word) dd, yyyy`

`(month word)` can be: `Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec`

Note if is yyyy it is a full 4 digit year. If it is yy then it is only the
last 2 digits of the year. Years only go between 1950-2049.

## Input

You will be given 1000 dates to correct.

## Output

You must output the dates to the proper iso 8601 standard of yyyy-mm-dd

## Challenge Input

[https://gist.github.com/coderd00d/a88d4d2da014203898af](https://gist.github.com/coderd00d/a88d4d2da014203898af)

## Posting Solutions

Please do not post your 1000 dates converted. If you must use a gist or link to
another site. Or just show a sampling

## Challenge Idea

Thanks to all the people pointing out the iso standard for dates in last week's
intermediate challenge. Not only did it inspire today's easy challenge but help
give us a weekly topic. You all are awesome :)"
  (:require
    [dommy.core :as dommy :refer-macros [sel1]]
    [reagent.core :as reagent :refer [atom]]))

;; # Solution
;;
(defn convert-year [two-digit-year]
  two-digit-year)

(defn convert-month [month-word]
  month-word)

(defn to-iso8601 [year month day]
  (str year \- month \- day))

(defn normalize-date [date]
  (str (re-matches #"(\d\d\d\d)-(\d\d)-(\d\d)" date)))

;; Pressing this button will change its text:
;; <button id="button1">Button1</button>
(let [button (sel1 :#button1)]
  (dommy/listen! button :click
    #(dommy/set-text! button "Woot!")))

;; <div id="single-input"></foo>
(defn single-input []
 (let [value (atom "2014-11-10")]
   (fn []
    [:div
     [:p "Input: "
      [:input {:type "text" :value @value
               :on-change #(reset! value (-> % .-target .-value))}]
      [:p "Output: " (normalize-date @value)]]])))

(reagent/render-component [single-input] (sel1 :#single-input))

;; <script>goog.require("daily.easy_188");</script>
