(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{226:function(t,a,s){"use strict";s.r(a);var e=s(28),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"useful-configurations"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#useful-configurations"}},[t._v("#")]),t._v(" Useful Configurations")]),t._v(" "),s("p",[t._v("At the root of your project, you can create "),s("code",[t._v("ship.config.js")]),t._v(" file to customize the process.")]),t._v(" "),s("p",[t._v("Everything is optional.")]),t._v(" "),s("h2",{attrs:{id:"mergestrategy"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#mergestrategy"}},[t._v("#")]),t._v(" "),s("code",[t._v("mergeStrategy")])]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("module"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  mergeStrategy"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    toSameBranch"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'master'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("The default value for "),s("code",[t._v("mergeStrategy")]),t._v(" is the above. It means "),s("code",[t._v("shipjs prepare")]),t._v(" will work only on "),s("code",[t._v("master")]),t._v(" branch.")]),t._v(" "),s("p",[s("code",[t._v("shipjs prepare")]),t._v(" will checkout to a staging branch(e.g. "),s("code",[t._v("releases/v1.0.1")]),t._v(") and create a PR from the staging branch to "),s("code",[t._v("master")]),t._v(".")]),t._v(" "),s("p",[t._v("So, by default, Ship.js works on your "),s("code",[t._v("master")]),t._v(" branch only.")]),t._v(" "),s("p",[t._v("Let's look at the configuration below:")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("module"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  mergeStrategy"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    toSameBranch"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'legacy'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    toReleaseBranch"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      develop"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'master'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("Let's assume you're working on the latest version 1.x on "),s("code",[t._v("develop")]),t._v(" and "),s("code",[t._v("master")]),t._v(" is the latest release branch.")]),t._v(" "),s("p",[t._v("You also maintain a "),s("code",[t._v("legacy")]),t._v(" version which is 0.x.")]),t._v(" "),s("h3",{attrs:{id:"tosamebranch-strategy"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#tosamebranch-strategy"}},[t._v("#")]),t._v(" "),s("code",[t._v("toSameBranch")]),t._v(" strategy")]),t._v(" "),s("p",[t._v("When you run "),s("code",[t._v("shipjs prepare")]),t._v(" on "),s("code",[t._v("legacy")]),t._v(" branch, it will")]),t._v(" "),s("ul",[s("li",[t._v("checkout to a staging branch(e.g. "),s("code",[t._v("releases/v0.8.3")]),t._v(").")]),t._v(" "),s("li",[t._v("create a PR from the staging branch to "),s("code",[t._v("legacy")]),t._v(" branch.")])]),t._v(" "),s("p",[t._v("Let's assume you configured your CI to monitor "),s("code",[t._v("legacy")]),t._v(" branch. When you review and merge the PR, your CI will run "),s("code",[t._v("shipjs trigger")]),t._v(" and it will")]),t._v(" "),s("ol",[s("li",[t._v("run tests.")]),t._v(" "),s("li",[t._v("release to NPM.")]),t._v(" "),s("li",[t._v("create a git tag(e.g. "),s("code",[t._v("v0.8.3")]),t._v(").")]),t._v(" "),s("li",[t._v("push to git remote.")])]),t._v(" "),s("blockquote",[s("p",[t._v('When merging a PR from this strategy, you need to "Squash and merge" and make sure the commit title is the same with the title of the PR.')]),t._v(" "),s("p",[t._v('You can go to "Settings" menu of your repository, and even force "Squash and merge" behavior under "Merge button" section.')])]),t._v(" "),s("h3",{attrs:{id:"toreleasebranch-strategy"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#toreleasebranch-strategy"}},[t._v("#")]),t._v(" "),s("code",[t._v("toReleaseBranch")]),t._v(" strategy")]),t._v(" "),s("p",[t._v("When you run "),s("code",[t._v("shipjs prepare")]),t._v(" on "),s("code",[t._v("develop")]),t._v(" branch, it will")]),t._v(" "),s("ul",[s("li",[t._v("checkout to a staging branch(e.g. "),s("code",[t._v("releases/v1.4.2")]),t._v(").")]),t._v(" "),s("li",[t._v("create a PR from the staging branch to "),s("code",[t._v("master")]),t._v(" branch.")])]),t._v(" "),s("p",[t._v("When you review and merge the PR, your CI will run "),s("code",[t._v("shipjs trigger")]),t._v(" and it will")]),t._v(" "),s("ol",[s("li",[t._v("run tests.")]),t._v(" "),s("li",[t._v("release to NPM.")]),t._v(" "),s("li",[t._v("create a git tag(e.g. "),s("code",[t._v("v1.4.2")]),t._v(").")]),t._v(" "),s("li",[t._v("merge "),s("code",[t._v("master")]),t._v(" back to "),s("code",[t._v("develop")]),t._v(".")]),t._v(" "),s("li",[t._v("push to git remote.")])]),t._v(" "),s("p",[t._v("So the flow is like this:")]),t._v(" "),s("blockquote",[s("p",[t._v("develop -> releases/v1.4.3 -> master -> (merged back to) develop")])]),t._v(" "),s("p",[t._v("You see the difference between two strategies, right?")]),t._v(" "),s("blockquote",[s("p",[t._v('When merging a PR from this strategy, you need to "Merge pull request(Create a merge commit)" and also, you must modify the commit title to the title of the PR.')]),t._v(" "),s("p",[t._v('You go to "Settings" menu of your repository, and even force "Merge pull request" behavior under "Merge button" section.')])]),t._v(" "),s("h2",{attrs:{id:"monorepo"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#monorepo"}},[t._v("#")]),t._v(" Monorepo")]),t._v(" "),s("p",[t._v("Ship.js currently supports monorepo project(Independent versioning is not supported at the moment).")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("module"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  monorepo"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    mainVersionFile"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'package.json'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// or `lerna.json`, or whatever a json file you can read the latest `version` from.")]),t._v("\n    packagesToBump"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'packages/*'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'examples/*'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    packagesToPublish"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'packages/*'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("With the config above, "),s("code",[t._v("prepare")]),t._v(" command will")]),t._v(" "),s("ol",[s("li",[t._v("Read the current version from "),s("code",[t._v("package.json")]),t._v(" file at the project root directory.")]),t._v(" "),s("li",[t._v("Calculate the next version based on commit messages.")]),t._v(" "),s("li",[t._v("Update the next version over "),s("code",[t._v("package.json")]),t._v(" files in "),s("code",[t._v("['packages/*', 'examples/*']")]),t._v(".")])]),t._v(" "),s("p",[t._v("And "),s("code",[t._v("trigger")]),t._v(" command will publish packages in "),s("code",[t._v("['packages/*']")]),t._v(".")]),t._v(" "),s("p",[t._v("When Ship.js handles "),s("code",[t._v("packagesToBump")]),t._v(" and "),s("code",[t._v("packagesToPublish")]),t._v(", it will only list directories with "),s("code",[t._v("package.json")]),t._v(" inside them.")]),t._v(" "),s("h2",{attrs:{id:"extra-work-on-updating-version"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#extra-work-on-updating-version"}},[t._v("#")]),t._v(" Extra work on updating version")]),t._v(" "),s("p",[t._v("After bumping the version, you may want to do extra work regarding the version. Ship.js provides "),s("code",[t._v("versionUpdated")]),t._v(" hook.")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" fs "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'fs'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" path "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'path'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nmodule"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("versionUpdated")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" version"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" releaseType"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" dir"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" exec "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// update `lerna.json`")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" lernaConfigPath "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" path"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("resolve")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("dir"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'lerna.json'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" lernaConfig "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("JSON")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("parse")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("fs"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("readFileSync")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("lernaConfigPath"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("toString")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    lernaConfig"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("version "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" version"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    fs"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("writeFileSync")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("lernaConfigPath"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("JSON")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("stringify")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("lernaConfig"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// update `src/lib/version.js`")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" versionPath "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" path"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("resolve")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("dir"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'src/lib/version.js'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    fs"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("writeFileSync")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("versionPath"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token template-string"}},[s("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('export default "')]),s("span",{pre:!0,attrs:{class:"token interpolation"}},[s("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("version"),s("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('";\\n')]),s("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// update dependencies (if you're using yarn workspace)")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("exec")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token template-string"}},[s("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("yarn workspace example-foo add my-lib@")]),s("span",{pre:!0,attrs:{class:"token interpolation"}},[s("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("version"),s("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),s("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("exec")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token template-string"}},[s("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("yarn workspace example-bar add my-lib@")]),s("span",{pre:!0,attrs:{class:"token interpolation"}},[s("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("version"),s("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),s("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h2",{attrs:{id:"schedule-your-release"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#schedule-your-release"}},[t._v("#")]),t._v(" Schedule your release")]),t._v(" "),s("p",[t._v("At Part 1, by running "),s("code",[t._v("yarn release:prepare")]),t._v(", you get a PR for next release. What if you even automate this?")]),t._v(" "),s("p",[t._v("You can configure your CI to run periodically "),s("code",[t._v("yarn release:prepare")]),t._v(".")]),t._v(" "),s("div",{staticClass:"language-yml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("version")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("jobs")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("prepare_release")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("docker")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("image")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'circleci/node:latest'")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("steps")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" checkout\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("run")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Install\n          "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("command")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" yarn install\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("run")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Prepare release\n          "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("command")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("|")]),s("span",{pre:!0,attrs:{class:"token scalar string"}},[t._v('\n            git config --global user.email "you@example.com"\n            git config --global user.name "Your Name"\n            yarn release:prepare --yes --no-browse')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("workflows")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("version")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("prepare_release_every_tuesday")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("triggers")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("schedule")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("cron")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'0 9 * * 2'")]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("filters")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("branches")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n              "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("only")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" master\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("jobs")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" prepare_release\n")])])]),s("p",[s("code",[t._v("GITHUB_TOKEN")]),t._v(" is required for CircleCI to create a PR. Make sure you have it configured as an environment variable.")]),t._v(" "),s("p",[t._v("Now, every Tuesday at 9am, new PR will be created. All you need to do is review the PR and merge it. Then the rest will be automatically done.")]),t._v(" "),s("p",[t._v("If you're using CircleCI v2.0, you can also manually trigger the job using API call. You can refer to "),s("a",{attrs:{href:"https://circleci.com/docs/2.0/api-job-trigger/",target:"_blank",rel:"noopener noreferrer"}},[t._v("this document"),s("OutboundLink")],1),t._v(", but it won't work in CircleCI v2.1.")]),t._v(" "),s("h2",{attrs:{id:"assign-reviewers"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#assign-reviewers"}},[t._v("#")]),t._v(" Assign Reviewers")]),t._v(" "),s("p",[t._v("You can assign reviewers on the PR.")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("module"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  pullRequestReviewers"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"user-login1"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"user-login2"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"user-login3"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// also")]),t._v("\n  pullRequestTeamReviewers"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"team-slug1"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"team-slug2"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("One thing you need to be aware of is, you cannot assign yourself as a reviewer. You can put github username of your team or colleagues. The value can be either a string or an array of strings.")]),t._v(" "),s("p",[t._v("The assignees will receive a notification from GitHub when the PR is created. Whenever they review and merge the PR, it will be automatically released by the prior configuration you've done "),s("RouterLink",{attrs:{to:"/guide/getting-started.html#automate-part-3-trigger"}},[t._v("here")]),t._v(".")],1),t._v(" "),s("h2",{attrs:{id:"slack-incoming-hook"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#slack-incoming-hook"}},[t._v("#")]),t._v(" "),s("code",[t._v("SLACK_INCOMING_HOOK")])]),t._v(" "),s("p",[t._v("If you configure an environment variable "),s("code",[t._v("SLACK_INCOMING_HOOK")]),t._v(", Ship.js will send messages")]),t._v(" "),s("ul",[s("li",[t._v("when "),s("code",[t._v("shipjs prepare")]),t._v(" is finished")]),t._v(" "),s("li",[t._v("when "),s("code",[t._v("shipjs trigger")]),t._v(" begins")]),t._v(" "),s("li",[t._v("when "),s("code",[t._v("shipjs trigger")]),t._v(" is finished")])]),t._v(" "),s("p",[t._v("You can "),s("RouterLink",{attrs:{to:"/reference/all-config.html#messaging-to-slack"}},[t._v("read more")]),t._v(" to customize this behavior.")],1),t._v(" "),s("h2",{attrs:{id:"release-somewhere-else"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#release-somewhere-else"}},[t._v("#")]),t._v(" Release somewhere else")]),t._v(" "),s("p",[t._v("You can use Ship.js to release projects somewhere other than NPM.")]),t._v(" "),s("p",[t._v("For example,")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("module"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("publishCommand")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'npx now'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("By default, "),s("code",[t._v("publishCommand")]),t._v(" returns "),s("code",[t._v("yarn publish")]),t._v(" or "),s("code",[t._v("npm publish")]),t._v(". You can override it like the above to release it to wherever you want.")]),t._v(" "),s("p",[t._v("If you have configured "),s("code",[t._v("monorepo")]),t._v(", this command will run in each package in "),s("code",[t._v("monorepo.packagesToPublish")]),t._v(".")])])}),[],!1,null,null,null);a.default=n.exports}}]);