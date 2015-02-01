(ns daily.figwheel
  (:require
    [figwheel.client :as fw]))

(set! (.-onload js/window) #(fw/start {}))