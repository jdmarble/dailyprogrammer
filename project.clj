(defproject daily "0.1.0-SNAPSHOT"
  :description "Solutions to http://www.reddit.com/r/dailyprogrammer/ problems."
  :url "http://example.com/FIXME"

  :dependencies [[org.clojure/clojure "1.6.0"]
                 [org.clojure/clojurescript "0.0-2740"]
                 [prismatic/dommy "1.0.0"]
                 [reagent "0.4.3"]
                 [cljs-ajax "0.3.9"]]

  :plugins [[lein-cljsbuild "1.0.4"]
            [lein-marginalia "0.8.0"]
            [lein-simpleton "1.3.0"]]

  :source-paths ["src"]

  :marginalia {:javascript ["out/goog/base.js"
                            "//fb.me/react-0.9.0.js"
                            "daily.js"]}

  :cljsbuild {:builds [{:id "main"
                        :source-paths ["src/main/cljs"]
                        :compiler {:output-to "target/site/daily.js"
                                   :output-dir "target/site/out"
                                   :optimizations :none
                                   :source-map true}}]}

  :aliases {"build" ["do" "cljsbuild" "once" "main," "marg" "--multi" "--dir" "target/site"]
            "dev" ["with-profile" "dev" "pdo" "figwheel" "dev," "auto" "marg" "--multi" "--dir" "target/dev"]}

  :profiles {:dev {:dependencies [[figwheel "0.2.2-SNAPSHOT"]]
                   :plugins [[lein-figwheel "0.2.2-SNAPSHOT"]
                             [lein-auto "0.1.1"]
                             [lein-pdo "0.1.1"]]
                   :resource-paths ["target/dev" "src/dev/resources"]
                   :figwheel {:http-server-root ""
                              :server-logfile "target/figwheel_server.log"}
                   :marginalia {:javascript ["figwheel.js"]}
                   :cljsbuild {:builds [{:id "dev"
                                         :source-paths ["src/main/cljs" "src/dev/cljs"]
                                         :compiler {:output-to "target/dev/daily.js"
                                                    :output-dir "target/dev/out"
                                                    :optimizations :none
                                                    :source-map true}}]}
                   :auto {:default {:file-pattern #"src.*\.cljs$"}}}})
