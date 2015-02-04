(ns daily.easy-200
  "# [2015-02-02] Challenge #200 [Easy] Flood-Fill

The challenge is to flood-fill an ASCII image.

[Full Challenge Description](https://www.reddit.com/r/dailyprogrammer/comments/2ug3hx/20150202_challenge_200_easy_floodfill/)
"
  (:require
    [dommy.core :refer-macros [sel1]]
    [reagent.core :as reagent :refer [atom]]
    [clojure.string :as str]))

;; ## Solution

(defn read-input
  "Read in the input string and divide it into dimensions, the array, and fill arguments."
  [input-text]
  (let [all-lines (str/split-lines input-text)
        data-lines (butlast (drop 1 all-lines))
        fill-args (str/split (last all-lines) #" ")]
    [(vec (map vec data-lines))
     (vec (reverse (map js/parseInt (take 2 fill-args))))
     (last fill-args)]))

(defn matching-neighbors
  "Find all of the neighbors of a cell that would be filled from that cell. Neighbors must be inside of the bounds of
  the array and have the same contents."
  [array point]
  (for [[dx dy] [[1 0] [0 1] [-1 0] [0 -1]]
        :let [char (get-in array point)
              [x y] point
              x' (+ x dx)
              y' (+ y dy)]
        :when (and
                (>= x' 0) (>= y' 0)
                (< y' (count array))
                (< x' (count (get array y')))
                (= char (get-in array [x' y']))
                )]
    [x' y']))

(defn flood-fill-step
  "Perform one step of the flood fill.

  1. Change the character at all of the cells that have been marked for filling.
  2. Find any new cells that will be changed on the next step."
  [[array fill-points fill-char]]
  [(reduce #(assoc-in %1 %2 fill-char) array fill-points)
   (set (mapcat #(matching-neighbors array %) fill-points))
   fill-char])

(defn flood-fill
  "Repeatedly call `flood-fill-step` on its own result (`iterate`) until there are no more new cells to fill.
  Ignore intermediate results; we only care about the final state."
  [array fill-point fill-char]
  (->> (iterate flood-fill-step [array [fill-point] fill-char])
    (drop-while #(not (empty? (get % 1))))
    first))

(defn write-output
  "Take just the data array and format it nicely."
  [array]
  (->> array
    first
    (map str/join)
    (str/join \newline)))

(defn process-input
  "Put it all together and print a helpful message when there is a problem.

  1. Parse raw input
  2. Perform flood-fille
  3. Format output"
  [input-text]
  (try
    (write-output (apply flood-fill (read-input input-text)))
    (catch :default e
      (str "Problem with processing input: " e))))

;; ## Result

(defonce input-text
  (atom "9 9
aaaaaaaaa
aaadefaaa
abcdafgha
abcdafgha
abcdafgha
abcdafgha
aacdafgaa
aaadafaaa
aaaaaaaaa
8 3 ,"))

;; ### Input
;; <div id="input"></foo>
(defn input-component []
  (fn []
    [:textarea {:cols 37 :rows 24
                :on-change #(reset! input-text
                             (-> % .-target .-value))
                :value @input-text}]))
(reagent/render-component [input-component] (sel1 :#input))

;; ### Output
;; <div id="output"></foo>
(defn output-component []
  (fn []
    [:textarea {:cols 37 :rows 24 :read-only true
                :value (process-input @input-text)}]))
(reagent/render-component [output-component] (sel1 :#output))

;; <script>goog.require("daily.easy_200");</script>