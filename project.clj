(defproject daily "0.1.0-SNAPSHOT"
  :description "Solutions to http://www.reddit.com/r/dailyprogrammer/ problems."
  :url "http://example.com/FIXME"

  :dependencies [[org.clojure/clojure "1.6.0"]
                 [org.clojure/clojurescript "0.0-2371"]
                 [prismatic/dommy "1.0.0"]
                 [reagent "0.4.3"]]

  :plugins [[lein-cljsbuild "1.0.4-SNAPSHOT"]
            [lein-marginalia "0.8.0"]]

  :source-paths ["src"]

  :marginalia {:javascript ["out/goog/base.js"
                            "http://fb.me/react-0.9.0.js"	
			    "daily.js"]}

  :cljsbuild {
    :builds [{:id "daily"
              :source-paths ["src"]
              :compiler {
                :output-to "target/site/daily.js"
                :output-dir "target/site/out"
                :optimizations :none
                :source-map true}}]})
