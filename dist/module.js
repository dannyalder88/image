'use strict';

const upath = require('upath');
const defu = require('defu');
const fs = require('fs');
const require$$0 = require('util');
const stream = require('stream');
const fsExtra = require('fs-extra');
const fetch = require('node-fetch');
const ufo = require('ufo');
const pLimit = require('p-limit');
const require$$1 = require('path');
const require$$3 = require('os');
const require$$4 = require('tty');
const crypto = require('crypto');
const require$$0$1 = require('worker_threads');
const rc9 = require('rc9');
const LRU = require('lru-cache');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

function _interopNamespace(e) {
	if (e && e.__esModule) return e;
	var n = Object.create(null);
	if (e) {
		Object.keys(e).forEach(function (k) {
			if (k !== 'default') {
				var d = Object.getOwnPropertyDescriptor(e, k);
				Object.defineProperty(n, k, d.get ? d : {
					enumerable: true,
					get: function () {
						return e[k];
					}
				});
			}
		});
	}
	n['default'] = e;
	return Object.freeze(n);
}

const defu__default = /*#__PURE__*/_interopDefaultLegacy(defu);
const fs__default = /*#__PURE__*/_interopDefaultLegacy(fs);
const require$$0__default = /*#__PURE__*/_interopDefaultLegacy(require$$0);
const stream__default = /*#__PURE__*/_interopDefaultLegacy(stream);
const fetch__default = /*#__PURE__*/_interopDefaultLegacy(fetch);
const pLimit__default = /*#__PURE__*/_interopDefaultLegacy(pLimit);
const require$$1__default = /*#__PURE__*/_interopDefaultLegacy(require$$1);
const require$$3__default = /*#__PURE__*/_interopDefaultLegacy(require$$3);
const require$$4__default = /*#__PURE__*/_interopDefaultLegacy(require$$4);
const crypto__default = /*#__PURE__*/_interopDefaultLegacy(crypto);
const require$$0__default$1 = /*#__PURE__*/_interopDefaultLegacy(require$$0$1);
const LRU__default = /*#__PURE__*/_interopDefaultLegacy(LRU);

var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

function createCommonjsModule(fn) {
  var module = { exports: {} };
	return fn(module, module.exports), module.exports;
}

function commonjsRequire (path) {
	throw new Error('Could not dynamically require "' + path + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.');
}

function u(u){return u&&"object"==typeof u&&"default"in u?u.default:u}var D=u(require$$0__default['default']),e=require$$1__default['default'],t$5=fs__default['default'],r=u(require$$3__default['default']),n=u(require$$4__default['default']);function s(u,D){return u(D={exports:{}},D.exports),D.exports}var o,i=(o=Object.freeze({__proto__:null,default:[{name:"AppVeyor",constant:"APPVEYOR",env:"APPVEYOR",pr:"APPVEYOR_PULL_REQUEST_NUMBER"},{name:"Bamboo",constant:"BAMBOO",env:"bamboo_planKey"},{name:"Bitbucket Pipelines",constant:"BITBUCKET",env:"BITBUCKET_COMMIT"},{name:"Bitrise",constant:"BITRISE",env:"BITRISE_IO",pr:"BITRISE_PULL_REQUEST"},{name:"Buddy",constant:"BUDDY",env:"BUDDY_WORKSPACE_ID",pr:"BUDDY_EXECUTION_PULL_REQUEST_ID"},{name:"Buildkite",constant:"BUILDKITE",env:"BUILDKITE",pr:{env:"BUILDKITE_PULL_REQUEST",ne:"false"}},{name:"CircleCI",constant:"CIRCLE",env:"CIRCLECI",pr:"CIRCLE_PULL_REQUEST"},{name:"Cirrus CI",constant:"CIRRUS",env:"CIRRUS_CI",pr:"CIRRUS_PR"},{name:"AWS CodeBuild",constant:"CODEBUILD",env:"CODEBUILD_BUILD_ARN"},{name:"Codeship",constant:"CODESHIP",env:{CI_NAME:"codeship"}},{name:"Drone",constant:"DRONE",env:"DRONE",pr:{DRONE_BUILD_EVENT:"pull_request"}},{name:"dsari",constant:"DSARI",env:"DSARI"},{name:"GitLab CI",constant:"GITLAB",env:"GITLAB_CI"},{name:"GoCD",constant:"GOCD",env:"GO_PIPELINE_LABEL"},{name:"Hudson",constant:"HUDSON",env:"HUDSON_URL"},{name:"Jenkins",constant:"JENKINS",env:["JENKINS_URL","BUILD_ID"],pr:{any:["ghprbPullId","CHANGE_ID"]}},{name:"Magnum CI",constant:"MAGNUM",env:"MAGNUM"},{name:"Sail CI",constant:"SAIL",env:"SAILCI",pr:"SAIL_PULL_REQUEST_NUMBER"},{name:"Semaphore",constant:"SEMAPHORE",env:"SEMAPHORE",pr:"PULL_REQUEST_NUMBER"},{name:"Shippable",constant:"SHIPPABLE",env:"SHIPPABLE",pr:{IS_PULL_REQUEST:"true"}},{name:"Solano CI",constant:"SOLANO",env:"TDDIUM",pr:"TDDIUM_PR_ID"},{name:"Strider CD",constant:"STRIDER",env:"STRIDER"},{name:"TaskCluster",constant:"TASKCLUSTER",env:["TASK_ID","RUN_ID"]},{name:"Solano CI",constant:"TDDIUM",env:"TDDIUM",pr:"TDDIUM_PR_ID",deprecated:!0},{name:"TeamCity",constant:"TEAMCITY",env:"TEAMCITY_VERSION"},{name:"Team Foundation Server",constant:"TFS",env:"TF_BUILD"},{name:"Travis CI",constant:"TRAVIS",env:"TRAVIS",pr:{env:"TRAVIS_PULL_REQUEST",ne:"false"}}]}))&&o.default||o,a=s((function(u,D){var e=process.env;function t(u){return "string"==typeof u?!!e[u]:Object.keys(u).every((function(D){return e[D]===u[D]}))}Object.defineProperty(D,"_vendors",{value:i.map((function(u){return u.constant}))}),D.name=null,D.isPR=null,i.forEach((function(u){var r=(Array.isArray(u.env)?u.env:[u.env]).every((function(u){return t(u)}));if(D[u.constant]=r,r)switch(D.name=u.name,typeof u.pr){case"string":D.isPR=!!e[u.pr];break;case"object":"env"in u.pr?D.isPR=u.pr.env in e&&e[u.pr.env]!==u.pr.ne:"any"in u.pr?D.isPR=u.pr.any.some((function(u){return !!e[u]})):D.isPR=t(u.pr);break;default:D.isPR=null;}})),D.isCI=!!(e.CI||e.CONTINUOUS_INTEGRATION||e.BUILD_NUMBER||e.RUN_ID||D.name);})),l=(a.name,a.isPR,a.isCI,!1),c=!1,h=!1,F="development",C="undefined"!=typeof window,f="",E=!1;function g(u){return !(!u||"false"===u)}"undefined"!=typeof process&&(process.platform&&(f=String(process.platform)),process.stdout&&(h=g(process.stdout.isTTY)),l=Boolean(a.isCI),process.env&&(process.env.NODE_ENV&&(F=process.env.NODE_ENV),c=g(process.env.DEBUG),E=g(process.env.MINIMAL)));var d={browser:C,test:"test"===F,dev:"development"===F||"dev"===F,production:"production"===F,debug:c,ci:l,tty:h,minimal:void 0,minimalCLI:void 0,windows:/^win/i.test(f),darwin:/^darwin/i.test(f),linux:/^linux/i.test(f)};d.minimal=E||d.ci||d.test||!d.tty,d.minimalCLI=d.minimal;var p=Object.freeze(d);const m={};m[m.Fatal=0]="Fatal",m[m.Error=0]="Error",m[m.Warn=1]="Warn",m[m.Log=2]="Log",m[m.Info=3]="Info",m[m.Success=3]="Success",m[m.Debug=4]="Debug",m[m.Trace=5]="Trace",m[m.Silent=-1/0]="Silent",m[m.Verbose=1/0]="Verbose";var b={silent:{level:-1},fatal:{level:m.Fatal},error:{level:m.Error},warn:{level:m.Warn},log:{level:m.Log},info:{level:m.Info},success:{level:m.Success},debug:{level:m.Debug},trace:{level:m.Trace},verbose:{level:m.Trace},ready:{level:m.Info},start:{level:m.Info}};function y(u){return D=u,"[object Object]"===Object.prototype.toString.call(D)&&(!(!u.message&&!u.args)&&!u.stack);var D;}let B=!1;const v=[];class _{constructor(u={}){this._reporters=u.reporters||[],this._types=u.types||b,this.level=void 0!==u.level?u.level:3,this._defaults=u.defaults||{},this._async=void 0!==u.async?u.async:void 0,this._stdout=u.stdout,this._stderr=u.stderr,this._mockFn=u.mockFn,this._throttle=u.throttle||1e3,this._throttleMin=u.throttleMin||5;for(const u in this._types){const D={type:u,...this._types[u],...this._defaults};this[u]=this._wrapLogFn(D),this[u].raw=this._wrapLogFn(D,!0);}this._mockFn&&this.mockTypes(),this._lastLogSerialized=void 0,this._lastLog=void 0,this._lastLogTime=void 0,this._lastLogCount=0,this._throttleTimeout=void 0;}get stdout(){return this._stdout||console._stdout}get stderr(){return this._stderr||console._stderr}create(u){return new _(Object.assign({reporters:this._reporters,level:this.level,types:this._types,defaults:this._defaults,stdout:this._stdout,stderr:this._stderr,mockFn:this._mockFn},u))}withDefaults(u){return this.create({defaults:Object.assign({},this._defaults,u)})}withTag(u){return this.withDefaults({tag:this._defaults.tag?this._defaults.tag+":"+u:u})}addReporter(u){return this._reporters.push(u),this}removeReporter(u){if(u){const D=this._reporters.indexOf(u);if(D>=0)return this._reporters.splice(D,1)}else this._reporters.splice(0);return this}setReporters(u){return this._reporters=Array.isArray(u)?u:[u],this}wrapAll(){this.wrapConsole(),this.wrapStd();}restoreAll(){this.restoreConsole(),this.restoreStd();}wrapConsole(){for(const u in this._types)console["__"+u]||(console["__"+u]=console[u]),console[u]=this[u].raw;}restoreConsole(){for(const u in this._types)console["__"+u]&&(console[u]=console["__"+u],delete console["__"+u]);}wrapStd(){this._wrapStream(this.stdout,"log"),this._wrapStream(this.stderr,"log");}_wrapStream(u,D){u&&(u.__write||(u.__write=u.write),u.write=u=>{this[D].raw(String(u).trim());});}restoreStd(){this._restoreStream(this.stdout),this._restoreStream(this.stderr);}_restoreStream(u){u&&u.__write&&(u.write=u.__write,delete u.__write);}pauseLogs(){B=!0;}resumeLogs(){B=!1;const u=v.splice(0);for(const D of u)D[0]._logFn(D[1],D[2]);}mockTypes(u){if(this._mockFn=u||this._mockFn,"function"==typeof this._mockFn)for(const u in this._types)this[u]=this._mockFn(u,this._types[u])||this[u],this[u].raw=this[u];}_wrapLogFn(u,D){return (...e)=>{if(!B)return this._logFn(u,e,D);v.push([this,u,e,D]);}}_logFn(u,D,e){if(u.level>this.level)return !!this._async&&Promise.resolve(!1);const t=Object.assign({date:new Date,args:[]},u);!e&&1===D.length&&y(D[0])?Object.assign(t,D[0]):t.args=Array.from(D),t.message&&(t.args.unshift(t.message),delete t.message),t.additional&&(Array.isArray(t.additional)||(t.additional=t.additional.split("\n")),t.args.push("\n"+t.additional.join("\n")),delete t.additional),t.type="string"==typeof t.type?t.type.toLowerCase():"",t.tag="string"==typeof t.tag?t.tag.toLowerCase():"";const r=(u=!1)=>{const D=this._lastLogCount-this._throttleMin;if(this._lastLog&&D>0){const u=[...this._lastLog.args];D>1&&u.push(`(repeated ${D} times)`),this._log({...this._lastLog,args:u}),this._lastLogCount=1;}if(u){if(this._lastLog=t,this._async)return this._logAsync(t);this._log(t);}};clearTimeout(this._throttleTimeout);const n=this._lastLogTime?t.date-this._lastLogTime:0;if(this._lastLogTime=t.date,n<this._throttle)try{const u=JSON.stringify([t.type,t.tag,t.args]),D=this._lastLogSerialized===u;if(this._lastLogSerialized=u,D&&(this._lastLogCount++,this._lastLogCount>this._throttleMin))return void(this._throttleTimeout=setTimeout(r,this._throttle))}catch(u){}r(!0);}_log(u){for(const D of this._reporters)D.log(u,{async:!1,stdout:this.stdout,stderr:this.stderr});}_logAsync(u){return Promise.all(this._reporters.map(D=>D.log(u,{async:!0,stdout:this.stdout,stderr:this.stderr})))}}function A(u){const D=process.cwd()+e.sep;return u.split("\n").splice(1).map(u=>u.trim().replace("file://","").replace(D,""))}_.prototype.add=_.prototype.addReporter,_.prototype.remove=_.prototype.removeReporter,_.prototype.clear=_.prototype.removeReporter,_.prototype.withScope=_.prototype.withTag,_.prototype.mock=_.prototype.mockTypes,_.prototype.pause=_.prototype.pauseLogs,_.prototype.resume=_.prototype.resumeLogs;var w=s((function(u,D){u.exports=function(){var u="millisecond",D="second",e="minute",t="hour",r="day",n="week",s="month",o="quarter",i="year",a=/^(\d{4})-?(\d{1,2})-?(\d{0,2})[^0-9]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?.?(\d{1,3})?$/,l=/\[([^\]]+)]|Y{2,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,c=function(u,D,e){var t=String(u);return !t||t.length>=D?u:""+Array(D+1-t.length).join(e)+u},h={s:c,z:function(u){var D=-u.utcOffset(),e=Math.abs(D),t=Math.floor(e/60),r=e%60;return (D<=0?"+":"-")+c(t,2,"0")+":"+c(r,2,"0")},m:function(u,D){var e=12*(D.year()-u.year())+(D.month()-u.month()),t=u.clone().add(e,s),r=D-t<0,n=u.clone().add(e+(r?-1:1),s);return Number(-(e+(D-t)/(r?t-n:n-t))||0)},a:function(u){return u<0?Math.ceil(u)||0:Math.floor(u)},p:function(a){return {M:s,y:i,w:n,d:r,D:"date",h:t,m:e,s:D,ms:u,Q:o}[a]||String(a||"").toLowerCase().replace(/s$/,"")},u:function(u){return void 0===u}},F={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},C="en",f={};f[C]=F;var E=function(u){return u instanceof m},g=function(u,D,e){var t;if(!u)return C;if("string"==typeof u)f[u]&&(t=u),D&&(f[u]=D,t=u);else {var r=u.name;f[r]=u,t=r;}return !e&&t&&(C=t),t||!e&&C},d=function(u,D){if(E(u))return u.clone();var e="object"==typeof D?D:{};return e.date=u,e.args=arguments,new m(e)},p=h;p.l=g,p.i=E,p.w=function(u,D){return d(u,{locale:D.$L,utc:D.$u,$offset:D.$offset})};var m=function(){function c(u){this.$L=this.$L||g(u.locale,null,!0),this.parse(u);}var h=c.prototype;return h.parse=function(u){this.$d=function(u){var D=u.date,e=u.utc;if(null===D)return new Date(NaN);if(p.u(D))return new Date;if(D instanceof Date)return new Date(D);if("string"==typeof D&&!/Z$/i.test(D)){var t=D.match(a);if(t)return e?new Date(Date.UTC(t[1],t[2]-1,t[3]||1,t[4]||0,t[5]||0,t[6]||0,t[7]||0)):new Date(t[1],t[2]-1,t[3]||1,t[4]||0,t[5]||0,t[6]||0,t[7]||0)}return new Date(D)}(u),this.init();},h.init=function(){var u=this.$d;this.$y=u.getFullYear(),this.$M=u.getMonth(),this.$D=u.getDate(),this.$W=u.getDay(),this.$H=u.getHours(),this.$m=u.getMinutes(),this.$s=u.getSeconds(),this.$ms=u.getMilliseconds();},h.$utils=function(){return p},h.isValid=function(){return !("Invalid Date"===this.$d.toString())},h.isSame=function(u,D){var e=d(u);return this.startOf(D)<=e&&e<=this.endOf(D)},h.isAfter=function(u,D){return d(u)<this.startOf(D)},h.isBefore=function(u,D){return this.endOf(D)<d(u)},h.$g=function(u,D,e){return p.u(u)?this[D]:this.set(e,u)},h.year=function(u){return this.$g(u,"$y",i)},h.month=function(u){return this.$g(u,"$M",s)},h.day=function(u){return this.$g(u,"$W",r)},h.date=function(u){return this.$g(u,"$D","date")},h.hour=function(u){return this.$g(u,"$H",t)},h.minute=function(u){return this.$g(u,"$m",e)},h.second=function(u){return this.$g(u,"$s",D)},h.millisecond=function(D){return this.$g(D,"$ms",u)},h.unix=function(){return Math.floor(this.valueOf()/1e3)},h.valueOf=function(){return this.$d.getTime()},h.startOf=function(u,o){var a=this,l=!!p.u(o)||o,c=p.p(u),h=function(u,D){var e=p.w(a.$u?Date.UTC(a.$y,D,u):new Date(a.$y,D,u),a);return l?e:e.endOf(r)},F=function(u,D){return p.w(a.toDate()[u].apply(a.toDate("s"),(l?[0,0,0,0]:[23,59,59,999]).slice(D)),a)},C=this.$W,f=this.$M,E=this.$D,g="set"+(this.$u?"UTC":"");switch(c){case i:return l?h(1,0):h(31,11);case s:return l?h(1,f):h(0,f+1);case n:var d=this.$locale().weekStart||0,m=(C<d?C+7:C)-d;return h(l?E-m:E+(6-m),f);case r:case"date":return F(g+"Hours",0);case t:return F(g+"Minutes",1);case e:return F(g+"Seconds",2);case D:return F(g+"Milliseconds",3);default:return this.clone()}},h.endOf=function(u){return this.startOf(u,!1)},h.$set=function(n,o){var a,l=p.p(n),c="set"+(this.$u?"UTC":""),h=(a={},a.day=c+"Date",a.date=c+"Date",a[s]=c+"Month",a[i]=c+"FullYear",a[t]=c+"Hours",a[e]=c+"Minutes",a[D]=c+"Seconds",a[u]=c+"Milliseconds",a)[l],F=l===r?this.$D+(o-this.$W):o;if(l===s||l===i){var C=this.clone().set("date",1);C.$d[h](F),C.init(),this.$d=C.set("date",Math.min(this.$D,C.daysInMonth())).toDate();}else h&&this.$d[h](F);return this.init(),this},h.set=function(u,D){return this.clone().$set(u,D)},h.get=function(u){return this[p.p(u)]()},h.add=function(u,o){var a,l=this;u=Number(u);var c=p.p(o),h=function(D){var e=d(l);return p.w(e.date(e.date()+Math.round(D*u)),l)};if(c===s)return this.set(s,this.$M+u);if(c===i)return this.set(i,this.$y+u);if(c===r)return h(1);if(c===n)return h(7);var F=(a={},a[e]=6e4,a[t]=36e5,a[D]=1e3,a)[c]||1,C=this.$d.getTime()+u*F;return p.w(C,this)},h.subtract=function(u,D){return this.add(-1*u,D)},h.format=function(u){var D=this;if(!this.isValid())return "Invalid Date";var e=u||"YYYY-MM-DDTHH:mm:ssZ",t=p.z(this),r=this.$locale(),n=this.$H,s=this.$m,o=this.$M,i=r.weekdays,a=r.months,c=function(u,t,r,n){return u&&(u[t]||u(D,e))||r[t].substr(0,n)},h=function(u){return p.s(n%12||12,u,"0")},F=r.meridiem||function(u,D,e){var t=u<12?"AM":"PM";return e?t.toLowerCase():t},C={YY:String(this.$y).slice(-2),YYYY:this.$y,M:o+1,MM:p.s(o+1,2,"0"),MMM:c(r.monthsShort,o,a,3),MMMM:c(a,o),D:this.$D,DD:p.s(this.$D,2,"0"),d:String(this.$W),dd:c(r.weekdaysMin,this.$W,i,2),ddd:c(r.weekdaysShort,this.$W,i,3),dddd:i[this.$W],H:String(n),HH:p.s(n,2,"0"),h:h(1),hh:h(2),a:F(n,s,!0),A:F(n,s,!1),m:String(s),mm:p.s(s,2,"0"),s:String(this.$s),ss:p.s(this.$s,2,"0"),SSS:p.s(this.$ms,3,"0"),Z:t};return e.replace(l,(function(u,D){return D||C[u]||t.replace(":","")}))},h.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},h.diff=function(u,r,a){var l,c=p.p(r),h=d(u),F=6e4*(h.utcOffset()-this.utcOffset()),C=this-h,f=p.m(this,h);return f=(l={},l[i]=f/12,l[s]=f,l[o]=f/3,l[n]=(C-F)/6048e5,l.day=(C-F)/864e5,l[t]=C/36e5,l[e]=C/6e4,l[D]=C/1e3,l)[c]||C,a?f:p.a(f)},h.daysInMonth=function(){return this.endOf(s).$D},h.$locale=function(){return f[this.$L]},h.locale=function(u,D){if(!u)return this.$L;var e=this.clone(),t=g(u,D,!0);return t&&(e.$L=t),e},h.clone=function(){return p.w(this.$d,this)},h.toDate=function(){return new Date(this.valueOf())},h.toJSON=function(){return this.isValid()?this.toISOString():null},h.toISOString=function(){return this.$d.toISOString()},h.toString=function(){return this.$d.toUTCString()},c}();return d.prototype=m.prototype,d.extend=function(u,D){return u(D,m,d),d},d.locale=g,d.isDayjs=E,d.unix=function(u){return d(1e3*u)},d.en=f[C],d.Ls=f,d}();}));const O={dateFormat:"HH:mm:ss",formatOptions:{date:!0,colors:!1,compact:!0}},M=u=>u?`[${u}]`:"";class S{constructor(u){this.options=Object.assign({},O,u);}formatStack(u){return "  "+A(u).join("\n  ")}formatArgs(u){const e=u.map(u=>u&&"string"==typeof u.stack?u.message+"\n"+this.formatStack(u.stack):u);return "function"==typeof D.formatWithOptions?D.formatWithOptions(this.options.formatOptions,...e):D.format(...e)}formatDate(u){return this.options.formatOptions.date?function(u,D){return w(D).format(u)}(this.options.dateFormat,u):""}filterAndJoin(u){return u.filter(u=>u).join(" ")}formatLogObj(u){const D=this.formatArgs(u.args);return this.filterAndJoin([M(u.type),M(u.tag),D])}log(u,{async:D,stdout:e,stderr:r}={}){return function(u,D,e="default"){const r=D.__write||D.write;switch(e){case"async":return new Promise(e=>{!0===r.call(D,u)?e():D.once("drain",()=>{e();});});case"sync":return t$5.writeSync(D.fd,u);default:return r.call(D,u)}}(this.formatLogObj(u,{width:e.columns||0})+"\n",u.level<2?r:e,D?"async":"default")}}var I=u=>"string"==typeof u?u.replace((({onlyFirst:u=!1}={})=>{const D=["[\\u001B\\u009B][[\\]()#;?]*(?:(?:(?:[a-zA-Z\\d]*(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]*)*)?\\u0007)","(?:(?:\\d{1,4}(?:;\\d{0,4})*)?[\\dA-PR-TZcf-ntqry=><~]))"].join("|");return new RegExp(D,u?void 0:"g")})(),""):u;const k=u=>!Number.isNaN(u)&&(u>=4352&&(u<=4447||9001===u||9002===u||11904<=u&&u<=12871&&12351!==u||12880<=u&&u<=19903||19968<=u&&u<=42182||43360<=u&&u<=43388||44032<=u&&u<=55203||63744<=u&&u<=64255||65040<=u&&u<=65049||65072<=u&&u<=65131||65281<=u&&u<=65376||65504<=u&&u<=65510||110592<=u&&u<=110593||127488<=u&&u<=127569||131072<=u&&u<=262141));var R=k,T=k;R.default=T;const L=u=>{if("string"!=typeof(u=u.replace(/\uD83C\uDFF4\uDB40\uDC67\uDB40\uDC62(?:\uDB40\uDC65\uDB40\uDC6E\uDB40\uDC67|\uDB40\uDC73\uDB40\uDC63\uDB40\uDC74|\uDB40\uDC77\uDB40\uDC6C\uDB40\uDC73)\uDB40\uDC7F|\uD83D\uDC68(?:\uD83C\uDFFC\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68\uD83C\uDFFB|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFF\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFE])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFE\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFD])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFD\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB\uDFFC])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83D\uDC68|(?:\uD83D[\uDC68\uDC69])\u200D(?:\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67]))|\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|(?:\uD83D[\uDC68\uDC69])\u200D(?:\uD83D[\uDC66\uDC67])|[\u2695\u2696\u2708]\uFE0F|\uD83D[\uDC66\uDC67]|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|(?:\uD83C\uDFFB\u200D[\u2695\u2696\u2708]|\uD83C\uDFFF\u200D[\u2695\u2696\u2708]|\uD83C\uDFFE\u200D[\u2695\u2696\u2708]|\uD83C\uDFFD\u200D[\u2695\u2696\u2708]|\uD83C\uDFFC\u200D[\u2695\u2696\u2708])\uFE0F|\uD83C\uDFFB\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C[\uDFFB-\uDFFF])|(?:\uD83E\uDDD1\uD83C\uDFFB\u200D\uD83E\uDD1D\u200D\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFC\u200D\uD83E\uDD1D\u200D\uD83D\uDC69)\uD83C\uDFFB|\uD83E\uDDD1(?:\uD83C\uDFFF\u200D\uD83E\uDD1D\u200D\uD83E\uDDD1(?:\uD83C[\uDFFB-\uDFFF])|\u200D\uD83E\uDD1D\u200D\uD83E\uDDD1)|(?:\uD83E\uDDD1\uD83C\uDFFE\u200D\uD83E\uDD1D\u200D\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFF\u200D\uD83E\uDD1D\u200D(?:\uD83D[\uDC68\uDC69]))(?:\uD83C[\uDFFB-\uDFFE])|(?:\uD83E\uDDD1\uD83C\uDFFC\u200D\uD83E\uDD1D\u200D\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFD\u200D\uD83E\uDD1D\u200D\uD83D\uDC69)(?:\uD83C[\uDFFB\uDFFC])|\uD83D\uDC69(?:\uD83C\uDFFE\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFD\uDFFF])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFC\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB\uDFFD-\uDFFF])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFB\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFC-\uDFFF])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFD\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D(?:\uD83D[\uDC68\uDC69])|\uD83D[\uDC68\uDC69])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFF\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD]))|\uD83D\uDC69\u200D\uD83D\uDC69\u200D(?:\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67]))|(?:\uD83E\uDDD1\uD83C\uDFFD\u200D\uD83E\uDD1D\u200D\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFE\u200D\uD83E\uDD1D\u200D\uD83D\uDC69)(?:\uD83C[\uDFFB-\uDFFD])|\uD83D\uDC69\u200D\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC69\u200D\uD83D\uDC69\u200D(?:\uD83D[\uDC66\uDC67])|(?:\uD83D\uDC41\uFE0F\u200D\uD83D\uDDE8|\uD83D\uDC69(?:\uD83C\uDFFF\u200D[\u2695\u2696\u2708]|\uD83C\uDFFE\u200D[\u2695\u2696\u2708]|\uD83C\uDFFC\u200D[\u2695\u2696\u2708]|\uD83C\uDFFB\u200D[\u2695\u2696\u2708]|\uD83C\uDFFD\u200D[\u2695\u2696\u2708]|\u200D[\u2695\u2696\u2708])|(?:(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)\uFE0F|\uD83D\uDC6F|\uD83E[\uDD3C\uDDDE\uDDDF])\u200D[\u2640\u2642]|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642]|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDCD-\uDDCF\uDDD6-\uDDDD])(?:(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642]|\u200D[\u2640\u2642])|\uD83C\uDFF4\u200D\u2620)\uFE0F|\uD83D\uDC69\u200D\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C\uDFF3\uFE0F\u200D\uD83C\uDF08|\uD83D\uDC15\u200D\uD83E\uDDBA|\uD83D\uDC69\u200D\uD83D\uDC66|\uD83D\uDC69\u200D\uD83D\uDC67|\uD83C\uDDFD\uD83C\uDDF0|\uD83C\uDDF4\uD83C\uDDF2|\uD83C\uDDF6\uD83C\uDDE6|[#\*0-9]\uFE0F\u20E3|\uD83C\uDDE7(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF])|\uD83C\uDDF9(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF])|\uD83C\uDDEA(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA])|\uD83E\uDDD1(?:\uD83C[\uDFFB-\uDFFF])|\uD83C\uDDF7(?:\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC])|\uD83D\uDC69(?:\uD83C[\uDFFB-\uDFFF])|\uD83C\uDDF2(?:\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF])|\uD83C\uDDE6(?:\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF])|\uD83C\uDDF0(?:\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF])|\uD83C\uDDED(?:\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA])|\uD83C\uDDE9(?:\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF])|\uD83C\uDDFE(?:\uD83C[\uDDEA\uDDF9])|\uD83C\uDDEC(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE])|\uD83C\uDDF8(?:\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF])|\uD83C\uDDEB(?:\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7])|\uD83C\uDDF5(?:\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE])|\uD83C\uDDFB(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA])|\uD83C\uDDF3(?:\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF])|\uD83C\uDDE8(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF5\uDDF7\uDDFA-\uDDFF])|\uD83C\uDDF1(?:\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE])|\uD83C\uDDFF(?:\uD83C[\uDDE6\uDDF2\uDDFC])|\uD83C\uDDFC(?:\uD83C[\uDDEB\uDDF8])|\uD83C\uDDFA(?:\uD83C[\uDDE6\uDDEC\uDDF2\uDDF3\uDDF8\uDDFE\uDDFF])|\uD83C\uDDEE(?:\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9])|\uD83C\uDDEF(?:\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5])|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDCD-\uDDCF\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u270A-\u270D]|\uD83C[\uDF85\uDFC2\uDFC7]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC6B-\uDC6D\uDC70\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDCAA\uDD74\uDD7A\uDD90\uDD95\uDD96\uDE4C\uDE4F\uDEC0\uDECC]|\uD83E[\uDD0F\uDD18-\uDD1C\uDD1E\uDD1F\uDD30-\uDD36\uDDB5\uDDB6\uDDBB\uDDD2-\uDDD5])(?:\uD83C[\uDFFB-\uDFFF])|(?:[\u231A\u231B\u23E9-\u23EC\u23F0\u23F3\u25FD\u25FE\u2614\u2615\u2648-\u2653\u267F\u2693\u26A1\u26AA\u26AB\u26BD\u26BE\u26C4\u26C5\u26CE\u26D4\u26EA\u26F2\u26F3\u26F5\u26FA\u26FD\u2705\u270A\u270B\u2728\u274C\u274E\u2753-\u2755\u2757\u2795-\u2797\u27B0\u27BF\u2B1B\u2B1C\u2B50\u2B55]|\uD83C[\uDC04\uDCCF\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF7C\uDF7E-\uDF93\uDFA0-\uDFCA\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF4\uDFF8-\uDFFF]|\uD83D[\uDC00-\uDC3E\uDC40\uDC42-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDD7A\uDD95\uDD96\uDDA4\uDDFB-\uDE4F\uDE80-\uDEC5\uDECC\uDED0-\uDED2\uDED5\uDEEB\uDEEC\uDEF4-\uDEFA\uDFE0-\uDFEB]|\uD83E[\uDD0D-\uDD3A\uDD3C-\uDD45\uDD47-\uDD71\uDD73-\uDD76\uDD7A-\uDDA2\uDDA5-\uDDAA\uDDAE-\uDDCA\uDDCD-\uDDFF\uDE70-\uDE73\uDE78-\uDE7A\uDE80-\uDE82\uDE90-\uDE95])|(?:[#\*0-9\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u261D\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u265F\u2660\u2663\u2665\u2666\u2668\u267B\u267E\u267F\u2692-\u2697\u2699\u269B\u269C\u26A0\u26A1\u26AA\u26AB\u26B0\u26B1\u26BD\u26BE\u26C4\u26C5\u26C8\u26CE\u26CF\u26D1\u26D3\u26D4\u26E9\u26EA\u26F0-\u26F5\u26F7-\u26FA\u26FD\u2702\u2705\u2708-\u270D\u270F\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763\u2764\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC04\uDCCF\uDD70\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE02\uDE1A\uDE2F\uDE32-\uDE3A\uDE50\uDE51\uDF00-\uDF21\uDF24-\uDF93\uDF96\uDF97\uDF99-\uDF9B\uDF9E-\uDFF0\uDFF3-\uDFF5\uDFF7-\uDFFF]|\uD83D[\uDC00-\uDCFD\uDCFF-\uDD3D\uDD49-\uDD4E\uDD50-\uDD67\uDD6F\uDD70\uDD73-\uDD7A\uDD87\uDD8A-\uDD8D\uDD90\uDD95\uDD96\uDDA4\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA-\uDE4F\uDE80-\uDEC5\uDECB-\uDED2\uDED5\uDEE0-\uDEE5\uDEE9\uDEEB\uDEEC\uDEF0\uDEF3-\uDEFA\uDFE0-\uDFEB]|\uD83E[\uDD0D-\uDD3A\uDD3C-\uDD45\uDD47-\uDD71\uDD73-\uDD76\uDD7A-\uDDA2\uDDA5-\uDDAA\uDDAE-\uDDCA\uDDCD-\uDDFF\uDE70-\uDE73\uDE78-\uDE7A\uDE80-\uDE82\uDE90-\uDE95])\uFE0F|(?:[\u261D\u26F9\u270A-\u270D]|\uD83C[\uDF85\uDFC2-\uDFC4\uDFC7\uDFCA-\uDFCC]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66-\uDC78\uDC7C\uDC81-\uDC83\uDC85-\uDC87\uDC8F\uDC91\uDCAA\uDD74\uDD75\uDD7A\uDD90\uDD95\uDD96\uDE45-\uDE47\uDE4B-\uDE4F\uDEA3\uDEB4-\uDEB6\uDEC0\uDECC]|\uD83E[\uDD0F\uDD18-\uDD1F\uDD26\uDD30-\uDD39\uDD3C-\uDD3E\uDDB5\uDDB6\uDDB8\uDDB9\uDDBB\uDDCD-\uDDCF\uDDD1-\uDDDD])/g,"  "))||0===u.length)return 0;u=I(u);let D=0;for(let e=0;e<u.length;e++){const t=u.codePointAt(e);t<=31||t>=127&&t<=159||(t>=768&&t<=879||(t>65535&&e++,D+=R(t)?2:1));}return D};var $=L,x=L;$.default=x;var U=/[|\\{}()[\]^$+*?.]/g,j=function(u){if("string"!=typeof u)throw new TypeError("Expected a string");return u.replace(U,"\\$&")};const{platform:P}=process,N={tick:"✔",cross:"✖",star:"★",square:"▇",squareSmall:"◻",squareSmallFilled:"◼",play:"▶",circle:"◯",circleFilled:"◉",circleDotted:"◌",circleDouble:"◎",circleCircle:"ⓞ",circleCross:"ⓧ",circlePipe:"Ⓘ",circleQuestionMark:"?⃝",bullet:"●",dot:"․",line:"─",ellipsis:"…",pointer:"❯",pointerSmall:"›",info:"ℹ",warning:"⚠",hamburger:"☰",smiley:"㋡",mustache:"෴",heart:"♥",nodejs:"⬢",arrowUp:"↑",arrowDown:"↓",arrowLeft:"←",arrowRight:"→",radioOn:"◉",radioOff:"◯",checkboxOn:"☒",checkboxOff:"☐",checkboxCircleOn:"ⓧ",checkboxCircleOff:"Ⓘ",questionMarkPrefix:"?⃝",oneHalf:"½",oneThird:"⅓",oneQuarter:"¼",oneFifth:"⅕",oneSixth:"⅙",oneSeventh:"⅐",oneEighth:"⅛",oneNinth:"⅑",oneTenth:"⅒",twoThirds:"⅔",twoFifths:"⅖",threeQuarters:"¾",threeFifths:"⅗",threeEighths:"⅜",fourFifths:"⅘",fiveSixths:"⅚",fiveEighths:"⅝",sevenEighths:"⅞"},q={tick:"√",cross:"×",star:"*",square:"█",squareSmall:"[ ]",squareSmallFilled:"[█]",play:"►",circle:"( )",circleFilled:"(*)",circleDotted:"( )",circleDouble:"( )",circleCircle:"(○)",circleCross:"(×)",circlePipe:"(│)",circleQuestionMark:"(?)",bullet:"*",dot:".",line:"─",ellipsis:"...",pointer:">",pointerSmall:"»",info:"i",warning:"‼",hamburger:"≡",smiley:"☺",mustache:"┌─┐",heart:N.heart,nodejs:"♦",arrowUp:N.arrowUp,arrowDown:N.arrowDown,arrowLeft:N.arrowLeft,arrowRight:N.arrowRight,radioOn:"(*)",radioOff:"( )",checkboxOn:"[×]",checkboxOff:"[ ]",checkboxCircleOn:"(×)",checkboxCircleOff:"( )",questionMarkPrefix:"？",oneHalf:"1/2",oneThird:"1/3",oneQuarter:"1/4",oneFifth:"1/5",oneSixth:"1/6",oneSeventh:"1/7",oneEighth:"1/8",oneNinth:"1/9",oneTenth:"1/10",twoThirds:"2/3",twoFifths:"2/5",threeQuarters:"3/4",threeFifths:"3/5",threeEighths:"3/8",fourFifths:"4/5",fiveSixths:"5/6",fiveEighths:"5/8",sevenEighths:"7/8"};"linux"===P&&(N.questionMarkPrefix="?");const Y="win32"===P?q:N;var H=Object.assign(u=>{if(Y===N)return u;for(const[D,e]of Object.entries(N))e!==Y[D]&&(u=u.replace(new RegExp(j(e),"g"),Y[D]));return u},Y),V=N,W=q;H.main=V,H.windows=W;var G={aliceblue:[240,248,255],antiquewhite:[250,235,215],aqua:[0,255,255],aquamarine:[127,255,212],azure:[240,255,255],beige:[245,245,220],bisque:[255,228,196],black:[0,0,0],blanchedalmond:[255,235,205],blue:[0,0,255],blueviolet:[138,43,226],brown:[165,42,42],burlywood:[222,184,135],cadetblue:[95,158,160],chartreuse:[127,255,0],chocolate:[210,105,30],coral:[255,127,80],cornflowerblue:[100,149,237],cornsilk:[255,248,220],crimson:[220,20,60],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgoldenrod:[184,134,11],darkgray:[169,169,169],darkgreen:[0,100,0],darkgrey:[169,169,169],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkseagreen:[143,188,143],darkslateblue:[72,61,139],darkslategray:[47,79,79],darkslategrey:[47,79,79],darkturquoise:[0,206,209],darkviolet:[148,0,211],deeppink:[255,20,147],deepskyblue:[0,191,255],dimgray:[105,105,105],dimgrey:[105,105,105],dodgerblue:[30,144,255],firebrick:[178,34,34],floralwhite:[255,250,240],forestgreen:[34,139,34],fuchsia:[255,0,255],gainsboro:[220,220,220],ghostwhite:[248,248,255],gold:[255,215,0],goldenrod:[218,165,32],gray:[128,128,128],green:[0,128,0],greenyellow:[173,255,47],grey:[128,128,128],honeydew:[240,255,240],hotpink:[255,105,180],indianred:[205,92,92],indigo:[75,0,130],ivory:[255,255,240],khaki:[240,230,140],lavender:[230,230,250],lavenderblush:[255,240,245],lawngreen:[124,252,0],lemonchiffon:[255,250,205],lightblue:[173,216,230],lightcoral:[240,128,128],lightcyan:[224,255,255],lightgoldenrodyellow:[250,250,210],lightgray:[211,211,211],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightsalmon:[255,160,122],lightseagreen:[32,178,170],lightskyblue:[135,206,250],lightslategray:[119,136,153],lightslategrey:[119,136,153],lightsteelblue:[176,196,222],lightyellow:[255,255,224],lime:[0,255,0],limegreen:[50,205,50],linen:[250,240,230],magenta:[255,0,255],maroon:[128,0,0],mediumaquamarine:[102,205,170],mediumblue:[0,0,205],mediumorchid:[186,85,211],mediumpurple:[147,112,219],mediumseagreen:[60,179,113],mediumslateblue:[123,104,238],mediumspringgreen:[0,250,154],mediumturquoise:[72,209,204],mediumvioletred:[199,21,133],midnightblue:[25,25,112],mintcream:[245,255,250],mistyrose:[255,228,225],moccasin:[255,228,181],navajowhite:[255,222,173],navy:[0,0,128],oldlace:[253,245,230],olive:[128,128,0],olivedrab:[107,142,35],orange:[255,165,0],orangered:[255,69,0],orchid:[218,112,214],palegoldenrod:[238,232,170],palegreen:[152,251,152],paleturquoise:[175,238,238],palevioletred:[219,112,147],papayawhip:[255,239,213],peachpuff:[255,218,185],peru:[205,133,63],pink:[255,192,203],plum:[221,160,221],powderblue:[176,224,230],purple:[128,0,128],rebeccapurple:[102,51,153],red:[255,0,0],rosybrown:[188,143,143],royalblue:[65,105,225],saddlebrown:[139,69,19],salmon:[250,128,114],sandybrown:[244,164,96],seagreen:[46,139,87],seashell:[255,245,238],sienna:[160,82,45],silver:[192,192,192],skyblue:[135,206,235],slateblue:[106,90,205],slategray:[112,128,144],slategrey:[112,128,144],snow:[255,250,250],springgreen:[0,255,127],steelblue:[70,130,180],tan:[210,180,140],teal:[0,128,128],thistle:[216,191,216],tomato:[255,99,71],turquoise:[64,224,208],violet:[238,130,238],wheat:[245,222,179],white:[255,255,255],whitesmoke:[245,245,245],yellow:[255,255,0],yellowgreen:[154,205,50]};const z={};for(const u of Object.keys(G))z[G[u]]=u;const Q={rgb:{channels:3,labels:"rgb"},hsl:{channels:3,labels:"hsl"},hsv:{channels:3,labels:"hsv"},hwb:{channels:3,labels:"hwb"},cmyk:{channels:4,labels:"cmyk"},xyz:{channels:3,labels:"xyz"},lab:{channels:3,labels:"lab"},lch:{channels:3,labels:"lch"},hex:{channels:1,labels:["hex"]},keyword:{channels:1,labels:["keyword"]},ansi16:{channels:1,labels:["ansi16"]},ansi256:{channels:1,labels:["ansi256"]},hcg:{channels:3,labels:["h","c","g"]},apple:{channels:3,labels:["r16","g16","b16"]},gray:{channels:1,labels:["gray"]}};var J=Q;for(const u of Object.keys(Q)){if(!("channels"in Q[u]))throw new Error("missing channels property: "+u);if(!("labels"in Q[u]))throw new Error("missing channel labels property: "+u);if(Q[u].labels.length!==Q[u].channels)throw new Error("channel and label counts mismatch: "+u);const{channels:D,labels:e}=Q[u];delete Q[u].channels,delete Q[u].labels,Object.defineProperty(Q[u],"channels",{value:D}),Object.defineProperty(Q[u],"labels",{value:e});}function K(u){const D=function(){const u={},D=Object.keys(J);for(let e=D.length,t=0;t<e;t++)u[D[t]]={distance:-1,parent:null};return u}(),e=[u];for(D[u].distance=0;e.length;){const u=e.pop(),t=Object.keys(J[u]);for(let r=t.length,n=0;n<r;n++){const r=t[n],s=D[r];-1===s.distance&&(s.distance=D[u].distance+1,s.parent=u,e.unshift(r));}}return D}function Z(u,D){return function(e){return D(u(e))}}function X(u,D){const e=[D[u].parent,u];let t=J[D[u].parent][u],r=D[u].parent;for(;D[r].parent;)e.unshift(D[r].parent),t=Z(J[D[r].parent][r],t),r=D[r].parent;return t.conversion=e,t}Q.rgb.hsl=function(u){const D=u[0]/255,e=u[1]/255,t=u[2]/255,r=Math.min(D,e,t),n=Math.max(D,e,t),s=n-r;let o,i;n===r?o=0:D===n?o=(e-t)/s:e===n?o=2+(t-D)/s:t===n&&(o=4+(D-e)/s),o=Math.min(60*o,360),o<0&&(o+=360);const a=(r+n)/2;return i=n===r?0:a<=.5?s/(n+r):s/(2-n-r),[o,100*i,100*a]},Q.rgb.hsv=function(u){let D,e,t,r,n;const s=u[0]/255,o=u[1]/255,i=u[2]/255,a=Math.max(s,o,i),l=a-Math.min(s,o,i),c=function(u){return (a-u)/6/l+.5};return 0===l?(r=0,n=0):(n=l/a,D=c(s),e=c(o),t=c(i),s===a?r=t-e:o===a?r=1/3+D-t:i===a&&(r=2/3+e-D),r<0?r+=1:r>1&&(r-=1)),[360*r,100*n,100*a]},Q.rgb.hwb=function(u){const D=u[0],e=u[1];let t=u[2];const r=Q.rgb.hsl(u)[0],n=1/255*Math.min(D,Math.min(e,t));return t=1-1/255*Math.max(D,Math.max(e,t)),[r,100*n,100*t]},Q.rgb.cmyk=function(u){const D=u[0]/255,e=u[1]/255,t=u[2]/255,r=Math.min(1-D,1-e,1-t);return [100*((1-D-r)/(1-r)||0),100*((1-e-r)/(1-r)||0),100*((1-t-r)/(1-r)||0),100*r]},Q.rgb.keyword=function(u){const D=z[u];if(D)return D;let e,t=1/0;for(const D of Object.keys(G)){const s=(n=G[D],((r=u)[0]-n[0])**2+(r[1]-n[1])**2+(r[2]-n[2])**2);s<t&&(t=s,e=D);}var r,n;return e},Q.keyword.rgb=function(u){return G[u]},Q.rgb.xyz=function(u){let D=u[0]/255,e=u[1]/255,t=u[2]/255;D=D>.04045?((D+.055)/1.055)**2.4:D/12.92,e=e>.04045?((e+.055)/1.055)**2.4:e/12.92,t=t>.04045?((t+.055)/1.055)**2.4:t/12.92;return [100*(.4124*D+.3576*e+.1805*t),100*(.2126*D+.7152*e+.0722*t),100*(.0193*D+.1192*e+.9505*t)]},Q.rgb.lab=function(u){const D=Q.rgb.xyz(u);let e=D[0],t=D[1],r=D[2];e/=95.047,t/=100,r/=108.883,e=e>.008856?e**(1/3):7.787*e+16/116,t=t>.008856?t**(1/3):7.787*t+16/116,r=r>.008856?r**(1/3):7.787*r+16/116;return [116*t-16,500*(e-t),200*(t-r)]},Q.hsl.rgb=function(u){const D=u[0]/360,e=u[1]/100,t=u[2]/100;let r,n,s;if(0===e)return s=255*t,[s,s,s];r=t<.5?t*(1+e):t+e-t*e;const o=2*t-r,i=[0,0,0];for(let u=0;u<3;u++)n=D+1/3*-(u-1),n<0&&n++,n>1&&n--,s=6*n<1?o+6*(r-o)*n:2*n<1?r:3*n<2?o+(r-o)*(2/3-n)*6:o,i[u]=255*s;return i},Q.hsl.hsv=function(u){const D=u[0];let e=u[1]/100,t=u[2]/100,r=e;const n=Math.max(t,.01);t*=2,e*=t<=1?t:2-t,r*=n<=1?n:2-n;return [D,100*(0===t?2*r/(n+r):2*e/(t+e)),100*((t+e)/2)]},Q.hsv.rgb=function(u){const D=u[0]/60,e=u[1]/100;let t=u[2]/100;const r=Math.floor(D)%6,n=D-Math.floor(D),s=255*t*(1-e),o=255*t*(1-e*n),i=255*t*(1-e*(1-n));switch(t*=255,r){case 0:return [t,i,s];case 1:return [o,t,s];case 2:return [s,t,i];case 3:return [s,o,t];case 4:return [i,s,t];case 5:return [t,s,o]}},Q.hsv.hsl=function(u){const D=u[0],e=u[1]/100,t=u[2]/100,r=Math.max(t,.01);let n,s;s=(2-e)*t;const o=(2-e)*r;return n=e*r,n/=o<=1?o:2-o,n=n||0,s/=2,[D,100*n,100*s]},Q.hwb.rgb=function(u){const D=u[0]/360;let e=u[1]/100,t=u[2]/100;const r=e+t;let n;r>1&&(e/=r,t/=r);const s=Math.floor(6*D),o=1-t;n=6*D-s,0!=(1&s)&&(n=1-n);const i=e+n*(o-e);let a,l,c;switch(s){default:case 6:case 0:a=o,l=i,c=e;break;case 1:a=i,l=o,c=e;break;case 2:a=e,l=o,c=i;break;case 3:a=e,l=i,c=o;break;case 4:a=i,l=e,c=o;break;case 5:a=o,l=e,c=i;}return [255*a,255*l,255*c]},Q.cmyk.rgb=function(u){const D=u[0]/100,e=u[1]/100,t=u[2]/100,r=u[3]/100;return [255*(1-Math.min(1,D*(1-r)+r)),255*(1-Math.min(1,e*(1-r)+r)),255*(1-Math.min(1,t*(1-r)+r))]},Q.xyz.rgb=function(u){const D=u[0]/100,e=u[1]/100,t=u[2]/100;let r,n,s;return r=3.2406*D+-1.5372*e+-.4986*t,n=-.9689*D+1.8758*e+.0415*t,s=.0557*D+-.204*e+1.057*t,r=r>.0031308?1.055*r**(1/2.4)-.055:12.92*r,n=n>.0031308?1.055*n**(1/2.4)-.055:12.92*n,s=s>.0031308?1.055*s**(1/2.4)-.055:12.92*s,r=Math.min(Math.max(0,r),1),n=Math.min(Math.max(0,n),1),s=Math.min(Math.max(0,s),1),[255*r,255*n,255*s]},Q.xyz.lab=function(u){let D=u[0],e=u[1],t=u[2];D/=95.047,e/=100,t/=108.883,D=D>.008856?D**(1/3):7.787*D+16/116,e=e>.008856?e**(1/3):7.787*e+16/116,t=t>.008856?t**(1/3):7.787*t+16/116;return [116*e-16,500*(D-e),200*(e-t)]},Q.lab.xyz=function(u){let D,e,t;e=(u[0]+16)/116,D=u[1]/500+e,t=e-u[2]/200;const r=e**3,n=D**3,s=t**3;return e=r>.008856?r:(e-16/116)/7.787,D=n>.008856?n:(D-16/116)/7.787,t=s>.008856?s:(t-16/116)/7.787,D*=95.047,e*=100,t*=108.883,[D,e,t]},Q.lab.lch=function(u){const D=u[0],e=u[1],t=u[2];let r;r=360*Math.atan2(t,e)/2/Math.PI,r<0&&(r+=360);return [D,Math.sqrt(e*e+t*t),r]},Q.lch.lab=function(u){const D=u[0],e=u[1],t=u[2]/360*2*Math.PI;return [D,e*Math.cos(t),e*Math.sin(t)]},Q.rgb.ansi16=function(u,D=null){const[e,t,r]=u;let n=null===D?Q.rgb.hsv(u)[2]:D;if(n=Math.round(n/50),0===n)return 30;let s=30+(Math.round(r/255)<<2|Math.round(t/255)<<1|Math.round(e/255));return 2===n&&(s+=60),s},Q.hsv.ansi16=function(u){return Q.rgb.ansi16(Q.hsv.rgb(u),u[2])},Q.rgb.ansi256=function(u){const D=u[0],e=u[1],t=u[2];if(D===e&&e===t)return D<8?16:D>248?231:Math.round((D-8)/247*24)+232;return 16+36*Math.round(D/255*5)+6*Math.round(e/255*5)+Math.round(t/255*5)},Q.ansi16.rgb=function(u){let D=u%10;if(0===D||7===D)return u>50&&(D+=3.5),D=D/10.5*255,[D,D,D];const e=.5*(1+~~(u>50));return [(1&D)*e*255,(D>>1&1)*e*255,(D>>2&1)*e*255]},Q.ansi256.rgb=function(u){if(u>=232){const D=10*(u-232)+8;return [D,D,D]}let D;u-=16;return [Math.floor(u/36)/5*255,Math.floor((D=u%36)/6)/5*255,D%6/5*255]},Q.rgb.hex=function(u){const D=(((255&Math.round(u[0]))<<16)+((255&Math.round(u[1]))<<8)+(255&Math.round(u[2]))).toString(16).toUpperCase();return "000000".substring(D.length)+D},Q.hex.rgb=function(u){const D=u.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);if(!D)return [0,0,0];let e=D[0];3===D[0].length&&(e=e.split("").map(u=>u+u).join(""));const t=parseInt(e,16);return [t>>16&255,t>>8&255,255&t]},Q.rgb.hcg=function(u){const D=u[0]/255,e=u[1]/255,t=u[2]/255,r=Math.max(Math.max(D,e),t),n=Math.min(Math.min(D,e),t),s=r-n;let o,i;return o=s<1?n/(1-s):0,i=s<=0?0:r===D?(e-t)/s%6:r===e?2+(t-D)/s:4+(D-e)/s,i/=6,i%=1,[360*i,100*s,100*o]},Q.hsl.hcg=function(u){const D=u[1]/100,e=u[2]/100,t=e<.5?2*D*e:2*D*(1-e);let r=0;return t<1&&(r=(e-.5*t)/(1-t)),[u[0],100*t,100*r]},Q.hsv.hcg=function(u){const D=u[1]/100,e=u[2]/100,t=D*e;let r=0;return t<1&&(r=(e-t)/(1-t)),[u[0],100*t,100*r]},Q.hcg.rgb=function(u){const D=u[0]/360,e=u[1]/100,t=u[2]/100;if(0===e)return [255*t,255*t,255*t];const r=[0,0,0],n=D%1*6,s=n%1,o=1-s;let i=0;switch(Math.floor(n)){case 0:r[0]=1,r[1]=s,r[2]=0;break;case 1:r[0]=o,r[1]=1,r[2]=0;break;case 2:r[0]=0,r[1]=1,r[2]=s;break;case 3:r[0]=0,r[1]=o,r[2]=1;break;case 4:r[0]=s,r[1]=0,r[2]=1;break;default:r[0]=1,r[1]=0,r[2]=o;}return i=(1-e)*t,[255*(e*r[0]+i),255*(e*r[1]+i),255*(e*r[2]+i)]},Q.hcg.hsv=function(u){const D=u[1]/100,e=D+u[2]/100*(1-D);let t=0;return e>0&&(t=D/e),[u[0],100*t,100*e]},Q.hcg.hsl=function(u){const D=u[1]/100,e=u[2]/100*(1-D)+.5*D;let t=0;return e>0&&e<.5?t=D/(2*e):e>=.5&&e<1&&(t=D/(2*(1-e))),[u[0],100*t,100*e]},Q.hcg.hwb=function(u){const D=u[1]/100,e=D+u[2]/100*(1-D);return [u[0],100*(e-D),100*(1-e)]},Q.hwb.hcg=function(u){const D=u[1]/100,e=1-u[2]/100,t=e-D;let r=0;return t<1&&(r=(e-t)/(1-t)),[u[0],100*t,100*r]},Q.apple.rgb=function(u){return [u[0]/65535*255,u[1]/65535*255,u[2]/65535*255]},Q.rgb.apple=function(u){return [u[0]/255*65535,u[1]/255*65535,u[2]/255*65535]},Q.gray.rgb=function(u){return [u[0]/100*255,u[0]/100*255,u[0]/100*255]},Q.gray.hsl=function(u){return [0,0,u[0]]},Q.gray.hsv=Q.gray.hsl,Q.gray.hwb=function(u){return [0,100,u[0]]},Q.gray.cmyk=function(u){return [0,0,0,u[0]]},Q.gray.lab=function(u){return [u[0],0,0]},Q.gray.hex=function(u){const D=255&Math.round(u[0]/100*255),e=((D<<16)+(D<<8)+D).toString(16).toUpperCase();return "000000".substring(e.length)+e},Q.rgb.gray=function(u){return [(u[0]+u[1]+u[2])/3/255*100]};const uu={};Object.keys(J).forEach(u=>{uu[u]={},Object.defineProperty(uu[u],"channels",{value:J[u].channels}),Object.defineProperty(uu[u],"labels",{value:J[u].labels});const D=function(u){const D=K(u),e={},t=Object.keys(D);for(let u=t.length,r=0;r<u;r++){const u=t[r];null!==D[u].parent&&(e[u]=X(u,D));}return e}(u);Object.keys(D).forEach(e=>{const t=D[e];uu[u][e]=function(u){const D=function(...D){const e=D[0];if(null==e)return e;e.length>1&&(D=e);const t=u(D);if("object"==typeof t)for(let u=t.length,D=0;D<u;D++)t[D]=Math.round(t[D]);return t};return "conversion"in u&&(D.conversion=u.conversion),D}(t),uu[u][e].raw=function(u){const D=function(...D){const e=D[0];return null==e?e:(e.length>1&&(D=e),u(D))};return "conversion"in u&&(D.conversion=u.conversion),D}(t);});});var Du=uu,eu=s((function(u){const D=(u,D)=>(...e)=>`[${u(...e)+D}m`,e=(u,D)=>(...e)=>{const t=u(...e);return `[${38+D};5;${t}m`},t=(u,D)=>(...e)=>{const t=u(...e);return `[${38+D};2;${t[0]};${t[1]};${t[2]}m`},r=u=>u,n=(u,D,e)=>[u,D,e],s=(u,D,e)=>{Object.defineProperty(u,D,{get:()=>{const t=e();return Object.defineProperty(u,D,{value:t,enumerable:!0,configurable:!0}),t},enumerable:!0,configurable:!0});};let o;const i=(u,D,e,t)=>{void 0===o&&(o=Du);const r=t?10:0,n={};for(const[t,s]of Object.entries(o)){const o="ansi16"===t?"ansi":t;t===D?n[o]=u(e,r):"object"==typeof s&&(n[o]=u(s[D],r));}return n};Object.defineProperty(u,"exports",{enumerable:!0,get:function(){const u=new Map,o={modifier:{reset:[0,0],bold:[1,22],dim:[2,22],italic:[3,23],underline:[4,24],inverse:[7,27],hidden:[8,28],strikethrough:[9,29]},color:{black:[30,39],red:[31,39],green:[32,39],yellow:[33,39],blue:[34,39],magenta:[35,39],cyan:[36,39],white:[37,39],blackBright:[90,39],redBright:[91,39],greenBright:[92,39],yellowBright:[93,39],blueBright:[94,39],magentaBright:[95,39],cyanBright:[96,39],whiteBright:[97,39]},bgColor:{bgBlack:[40,49],bgRed:[41,49],bgGreen:[42,49],bgYellow:[43,49],bgBlue:[44,49],bgMagenta:[45,49],bgCyan:[46,49],bgWhite:[47,49],bgBlackBright:[100,49],bgRedBright:[101,49],bgGreenBright:[102,49],bgYellowBright:[103,49],bgBlueBright:[104,49],bgMagentaBright:[105,49],bgCyanBright:[106,49],bgWhiteBright:[107,49]}};o.color.gray=o.color.blackBright,o.bgColor.bgGray=o.bgColor.bgBlackBright,o.color.grey=o.color.blackBright,o.bgColor.bgGrey=o.bgColor.bgBlackBright;for(const[D,e]of Object.entries(o)){for(const[D,t]of Object.entries(e))o[D]={open:`[${t[0]}m`,close:`[${t[1]}m`},e[D]=o[D],u.set(t[0],t[1]);Object.defineProperty(o,D,{value:e,enumerable:!1});}return Object.defineProperty(o,"codes",{value:u,enumerable:!1}),o.color.close="[39m",o.bgColor.close="[49m",s(o.color,"ansi",()=>i(D,"ansi16",r,!1)),s(o.color,"ansi256",()=>i(e,"ansi256",r,!1)),s(o.color,"ansi16m",()=>i(t,"rgb",n,!1)),s(o.bgColor,"ansi",()=>i(D,"ansi16",r,!0)),s(o.bgColor,"ansi256",()=>i(e,"ansi256",r,!0)),s(o.bgColor,"ansi16m",()=>i(t,"rgb",n,!0)),o}});})),tu=(u,D=process.argv)=>{const e=u.startsWith("-")?"":1===u.length?"-":"--",t=D.indexOf(e+u),r=D.indexOf("--");return -1!==t&&(-1===r||t<r)};const{env:ru}=process;let nu;function su(u){return 0!==u&&{level:u,hasBasic:!0,has256:u>=2,has16m:u>=3}}function ou(u,D){if(0===nu)return 0;if(tu("color=16m")||tu("color=full")||tu("color=truecolor"))return 3;if(tu("color=256"))return 2;if(u&&!D&&void 0===nu)return 0;const e=nu||0;if("dumb"===ru.TERM)return e;if("win32"===process.platform){const u=r.release().split(".");return Number(u[0])>=10&&Number(u[2])>=10586?Number(u[2])>=14931?3:2:1}if("CI"in ru)return ["TRAVIS","CIRCLECI","APPVEYOR","GITLAB_CI"].some(u=>u in ru)||"codeship"===ru.CI_NAME?1:e;if("TEAMCITY_VERSION"in ru)return /^(9\.(0*[1-9]\d*)\.|\d{2,}\.)/.test(ru.TEAMCITY_VERSION)?1:0;if("GITHUB_ACTIONS"in ru)return 1;if("truecolor"===ru.COLORTERM)return 3;if("TERM_PROGRAM"in ru){const u=parseInt((ru.TERM_PROGRAM_VERSION||"").split(".")[0],10);switch(ru.TERM_PROGRAM){case"iTerm.app":return u>=3?3:2;case"Apple_Terminal":return 2}}return /-256(color)?$/i.test(ru.TERM)?2:/^screen|^xterm|^vt100|^vt220|^rxvt|color|ansi|cygwin|linux/i.test(ru.TERM)||"COLORTERM"in ru?1:e}tu("no-color")||tu("no-colors")||tu("color=false")||tu("color=never")?nu=0:(tu("color")||tu("colors")||tu("color=true")||tu("color=always"))&&(nu=1),"FORCE_COLOR"in ru&&(nu="true"===ru.FORCE_COLOR?1:"false"===ru.FORCE_COLOR?0:0===ru.FORCE_COLOR.length?1:Math.min(parseInt(ru.FORCE_COLOR,10),3));var iu={supportsColor:function(u){return su(ou(u,u&&u.isTTY))},stdout:su(ou(!0,n.isatty(1))),stderr:su(ou(!0,n.isatty(2)))};var au={stringReplaceAll:(u,D,e)=>{let t=u.indexOf(D);if(-1===t)return u;const r=D.length;let n=0,s="";do{s+=u.substr(n,t-n)+D+e,n=t+r,t=u.indexOf(D,n);}while(-1!==t);return s+=u.substr(n),s},stringEncaseCRLFWithFirstIndex:(u,D,e,t)=>{let r=0,n="";do{const s="\r"===u[t-1];n+=u.substr(r,(s?t-1:t)-r)+D+(s?"\r\n":"\n")+e,r=t+1,t=u.indexOf("\n",r);}while(-1!==t);return n+=u.substr(r),n}};const lu=/(?:\\(u(?:[a-f\d]{4}|\{[a-f\d]{1,6}\})|x[a-f\d]{2}|.))|(?:\{(~)?(\w+(?:\([^)]*\))?(?:\.\w+(?:\([^)]*\))?)*)(?:[ \t]|(?=\r?\n)))|(\})|((?:.|[\r\n\f])+?)/gi,cu=/(?:^|\.)(\w+)(?:\(([^)]*)\))?/g,hu=/^(['"])((?:\\.|(?!\1)[^\\])*)\1$/,Fu=/\\(u(?:[a-f\d]{4}|{[a-f\d]{1,6}})|x[a-f\d]{2}|.)|([^\\])/gi,Cu=new Map([["n","\n"],["r","\r"],["t","\t"],["b","\b"],["f","\f"],["v","\v"],["0","\0"],["\\","\\"],["e",""],["a",""]]);function fu(u){const D="u"===u[0],e="{"===u[1];return D&&!e&&5===u.length||"x"===u[0]&&3===u.length?String.fromCharCode(parseInt(u.slice(1),16)):D&&e?String.fromCodePoint(parseInt(u.slice(2,-1),16)):Cu.get(u)||u}function Eu(u,D){const e=[],t=D.trim().split(/\s*,\s*/g);let r;for(const D of t){const t=Number(D);if(Number.isNaN(t)){if(!(r=D.match(hu)))throw new Error(`Invalid Chalk template style argument: ${D} (in style '${u}')`);e.push(r[2].replace(Fu,(u,D,e)=>D?fu(D):e));}else e.push(t);}return e}function gu(u){cu.lastIndex=0;const D=[];let e;for(;null!==(e=cu.exec(u));){const u=e[1];if(e[2]){const t=Eu(u,e[2]);D.push([u].concat(t));}else D.push([u]);}return D}function du(u,D){const e={};for(const u of D)for(const D of u.styles)e[D[0]]=u.inverse?null:D.slice(1);let t=u;for(const[u,D]of Object.entries(e))if(Array.isArray(D)){if(!(u in t))throw new Error("Unknown Chalk style: "+u);t=D.length>0?t[u](...D):t[u];}return t}var pu=(u,D)=>{const e=[],t=[];let r=[];if(D.replace(lu,(D,n,s,o,i,a)=>{if(n)r.push(fu(n));else if(o){const D=r.join("");r=[],t.push(0===e.length?D:du(u,e)(D)),e.push({inverse:s,styles:gu(o)});}else if(i){if(0===e.length)throw new Error("Found extraneous } in Chalk template literal");t.push(du(u,e)(r.join(""))),r=[],e.pop();}else r.push(a);}),t.push(r.join("")),e.length>0){const u=`Chalk template literal is missing ${e.length} closing bracket${1===e.length?"":"s"} (\`}\`)`;throw new Error(u)}return t.join("")};const{stdout:mu,stderr:bu}=iu,{stringReplaceAll:yu,stringEncaseCRLFWithFirstIndex:Bu}=au,vu=["ansi","ansi","ansi256","ansi16m"],_u=Object.create(null);class Au{constructor(u){return wu(u)}}const wu=u=>{const D={};return ((u,D={})=>{if(D.level&&!(Number.isInteger(D.level)&&D.level>=0&&D.level<=3))throw new Error("The `level` option should be an integer from 0 to 3");const e=mu?mu.level:0;u.level=void 0===D.level?e:D.level;})(D,u),D.template=(...u)=>Lu(D.template,...u),Object.setPrototypeOf(D,Ou.prototype),Object.setPrototypeOf(D.template,D),D.template.constructor=()=>{throw new Error("`chalk.constructor()` is deprecated. Use `new chalk.Instance()` instead.")},D.template.Instance=Au,D.template};function Ou(u){return wu(u)}for(const[u,D]of Object.entries(eu))_u[u]={get(){const e=ku(this,Iu(D.open,D.close,this._styler),this._isEmpty);return Object.defineProperty(this,u,{value:e}),e}};_u.visible={get(){const u=ku(this,this._styler,!0);return Object.defineProperty(this,"visible",{value:u}),u}};const Mu=["rgb","hex","keyword","hsl","hsv","hwb","ansi","ansi256"];for(const u of Mu)_u[u]={get(){const{level:D}=this;return function(...e){const t=Iu(eu.color[vu[D]][u](...e),eu.color.close,this._styler);return ku(this,t,this._isEmpty)}}};for(const u of Mu){_u["bg"+u[0].toUpperCase()+u.slice(1)]={get(){const{level:D}=this;return function(...e){const t=Iu(eu.bgColor[vu[D]][u](...e),eu.bgColor.close,this._styler);return ku(this,t,this._isEmpty)}}};}const Su=Object.defineProperties(()=>{},{..._u,level:{enumerable:!0,get(){return this._generator.level},set(u){this._generator.level=u;}}}),Iu=(u,D,e)=>{let t,r;return void 0===e?(t=u,r=D):(t=e.openAll+u,r=D+e.closeAll),{open:u,close:D,openAll:t,closeAll:r,parent:e}},ku=(u,D,e)=>{const t=(...u)=>Ru(t,1===u.length?""+u[0]:u.join(" "));return Object.setPrototypeOf(t,Su),t._generator=u,t._styler=D,t._isEmpty=e,t},Ru=(u,D)=>{if(u.level<=0||!D)return u._isEmpty?"":D;let e=u._styler;if(void 0===e)return D;const{openAll:t,closeAll:r}=e;if(-1!==D.indexOf(""))for(;void 0!==e;)D=yu(D,e.close,e.open),e=e.parent;const n=D.indexOf("\n");return -1!==n&&(D=Bu(D,r,t,n)),t+D+r};let Tu;const Lu=(u,...D)=>{const[e]=D;if(!Array.isArray(e))return D.join(" ");const t=D.slice(1),r=[e.raw[0]];for(let u=1;u<e.length;u++)r.push(String(t[u-1]).replace(/[{}\\]/g,"\\$&"),String(e.raw[u]));return void 0===Tu&&(Tu=pu),Tu(u,r.join(""))};Object.defineProperties(Ou.prototype,_u);const $u=Ou();$u.supportsColor=mu,$u.stderr=Ou({level:bu?bu.level:0}),$u.stderr.supportsColor=bu;var xu=$u;const Uu={};function ju(u){let D=Uu[u];return D||(D="#"===u[0]?xu.hex(u):xu[u]||xu.keyword(u),Uu[u]=D,D)}const Pu={};const Nu={info:"cyan"},qu={0:"red",1:"yellow",2:"white",3:"green"},Yu={secondaryColor:"grey",formatOptions:{date:!0,colors:!0,compact:!1}},Hu={info:H("ℹ"),success:H("✔"),debug:H("›"),trace:H("›"),log:""};class Vu extends S{constructor(u){super(Object.assign({},Yu,u));}formatStack(u){const D=ju("grey"),e=ju("cyan");return "\n"+A(u).map(u=>"  "+u.replace(/^at +/,u=>D(u)).replace(/\((.+)\)/,(u,D)=>`(${e(D)})`)).join("\n")}formatType(u,D){const e=Nu[u.type]||qu[u.level]||this.options.secondaryColor;if(D)return function(u){let D=Pu[u];return D||(D="#"===u[0]?xu.bgHex(u):xu["bg"+u[0].toUpperCase()+u.slice(1)]||xu.bgKeyword(u),Pu[u]=D,D)}(e).black(` ${u.type.toUpperCase()} `);const t="string"==typeof Hu[u.type]?Hu[u.type]:u.icon||u.type;return t?ju(e)(t):""}formatLogObj(u,{width:D}){const[e,...t]=this.formatArgs(u.args).split("\n"),r=void 0!==u.badge?Boolean(u.badge):u.level<2,n=ju(this.options.secondaryColor),s=this.formatDate(u.date),o=s&&n(s),i=this.formatType(u,r),a=u.tag?n(u.tag):"",l=e.replace(/`([^`]+)`/g,(u,D)=>xu.cyan(D));let c;const h=this.filterAndJoin([i,l]),F=this.filterAndJoin([a,o]),C=D-$(h)-$(F)-2;return c=C>0&&D>=80?h+" ".repeat(C)+F:h,c+=t.length?"\n"+t.join("\n"):"",r?"\n"+c+"\n":c}}class Wu{constructor({stream:u}={}){this.stream=u||process.stdout;}log(u){this.stream.write(JSON.stringify(u)+"\n");}}const Gu="undefined"!=typeof __non_webpack_require__?__non_webpack_require__:commonjsRequire;class zu{constructor(u){if(u&&u.log)this.logger=u;else {const D=Gu("winston");this.logger=D.createLogger(Object.assign({level:"info",format:D.format.simple(),transports:[new D.transports.Console]},u));}}log(u){const D=[].concat(u.args),e=D.shift();this.logger.log({level:Qu[u.level]||"info",label:u.tag,message:e,args:D,timestamp:u.date.getTime()/1e3});}}const Qu={0:"error",1:"warn",2:"info",3:"verbose",4:"debug",5:"silly"};commonjsGlobal.consola||(commonjsGlobal.consola=function(){let u=p.debug?4:3;process.env.CONSOLA_LEVEL&&(u=parseInt(process.env.CONSOLA_LEVEL)||u);const D=new _({level:u,reporters:[p.ci||p.test?new S:new Vu]});return D.Consola=_,D.BasicReporter=S,D.FancyReporter=Vu,D.JSONReporter=Wu,D.WinstonReporter=zu,D.LogLevel=m,D}());var Ju=commonjsGlobal.consola;var consola=Ju;

const isStream = stream =>
	stream !== null &&
	typeof stream === 'object' &&
	typeof stream.pipe === 'function';

isStream.writable = stream =>
	isStream(stream) &&
	stream.writable !== false &&
	typeof stream._write === 'function' &&
	typeof stream._writableState === 'object';

isStream.readable = stream =>
	isStream(stream) &&
	stream.readable !== false &&
	typeof stream._read === 'function' &&
	typeof stream._readableState === 'object';

isStream.duplex = stream =>
	isStream.writable(stream) &&
	isStream.readable(stream);

isStream.transform = stream =>
	isStream.duplex(stream) &&
	typeof stream._transform === 'function' &&
	typeof stream._transformState === 'object';

var isStream_1 = isStream;

const {Worker} = (() => {
	try {
		return require$$0__default$1['default'];
	} catch (_) {
		return {};
	}
})();

let worker; // Lazy
let taskIdCounter = 0;
const tasks = new Map();

const recreateWorkerError = sourceError => {
	const error = new Error(sourceError.message);

	for (const [key, value] of Object.entries(sourceError)) {
		if (key !== 'message') {
			error[key] = value;
		}
	}

	return error;
};

const createWorker = () => {
	worker = new Worker(require$$1__default['default'].join(__dirname, 'thread.js'));

	worker.on('message', message => {
		const task = tasks.get(message.id);
		tasks.delete(message.id);

		if (tasks.size === 0) {
			worker.unref();
		}

		if (message.error === undefined) {
			task.resolve(message.value);
		} else {
			task.reject(recreateWorkerError(message.error));
		}
	});

	worker.on('error', error => {
		// Any error here is effectively an equivalent of segfault, and have no scope, so we just throw it on callback level
		throw error;
	});
};

const taskWorker = (method, args, transferList) => new Promise((resolve, reject) => {
	const id = taskIdCounter++;
	tasks.set(id, {resolve, reject});

	if (worker === undefined) {
		createWorker();
	}

	worker.ref();
	worker.postMessage({id, method, args}, transferList);
});

const hasha = (input, options = {}) => {
	let outputEncoding = options.encoding || 'hex';

	if (outputEncoding === 'buffer') {
		outputEncoding = undefined;
	}

	const hash = crypto__default['default'].createHash(options.algorithm || 'sha512');

	const update = buffer => {
		const inputEncoding = typeof buffer === 'string' ? 'utf8' : undefined;
		hash.update(buffer, inputEncoding);
	};

	if (Array.isArray(input)) {
		input.forEach(update);
	} else {
		update(input);
	}

	return hash.digest(outputEncoding);
};

hasha.stream = (options = {}) => {
	let outputEncoding = options.encoding || 'hex';

	if (outputEncoding === 'buffer') {
		outputEncoding = undefined;
	}

	const stream = crypto__default['default'].createHash(options.algorithm || 'sha512');
	stream.setEncoding(outputEncoding);
	return stream;
};

hasha.fromStream = async (stream, options = {}) => {
	if (!isStream_1(stream)) {
		throw new TypeError('Expected a stream');
	}

	return new Promise((resolve, reject) => {
		// TODO: Use `stream.pipeline` and `stream.finished` when targeting Node.js 10
		stream
			.on('error', reject)
			.pipe(hasha.stream(options))
			.on('error', reject)
			.on('finish', function () {
				resolve(this.read());
			});
	});
};

if (Worker === undefined) {
	hasha.fromFile = async (filePath, options) => hasha.fromStream(fs__default['default'].createReadStream(filePath), options);
	hasha.async = async (input, options) => hasha(input, options);
} else {
	hasha.fromFile = async (filePath, {algorithm = 'sha512', encoding = 'hex'} = {}) => {
		const hash = await taskWorker('hashFile', [algorithm, filePath]);

		if (encoding === 'buffer') {
			return Buffer.from(hash);
		}

		return Buffer.from(hash).toString(encoding);
	};

	hasha.async = async (input, {algorithm = 'sha512', encoding = 'hex'} = {}) => {
		if (encoding === 'buffer') {
			encoding = undefined;
		}

		const hash = await taskWorker('hash', [algorithm, input]);

		if (encoding === undefined) {
			return Buffer.from(hash);
		}

		return Buffer.from(hash).toString(encoding);
	};
}

hasha.fromFileSync = (filePath, options) => hasha(fs__default['default'].readFileSync(filePath), options);

var hasha_1 = hasha;

var name = "@nuxt/image";
var version = "0.4.14";

const logger = consola.withScope("@nuxt/image");
const pkg = {name, version};
function hash(value, length = 6) {
  return hasha_1(value).substr(0, length);
}
function pick(obj, keys) {
  const newobj = {};
  for (const key of keys) {
    newobj[key] = obj[key];
  }
  return newobj;
}

const pipeline = require$$0.promisify(stream__default['default'].pipeline);
function setupStaticGeneration(nuxt, options) {
  const staticImages = {};
  nuxt.hook("vue-renderer:ssr:prepareContext", (renderContext) => {
    renderContext.image = renderContext.image || {};
    renderContext.image.mapToStatic = function({url, format}) {
      if (!staticImages[url]) {
        const {pathname} = ufo.parseURL(url);
        const params = {
          name: upath.trimExt(upath.basename(pathname)),
          ext: format && `.${format}` || upath.extname(pathname) || ".png",
          hash: hash(url),
          publicPath: ufo.withoutTrailingSlash(nuxt.options.build.publicPath)
        };
        staticImages[url] = options.staticFilename.replace(/\[(\w+)]/g, (match, key) => params[key] || match);
      }
      return staticImages[url];
    };
  });
  nuxt.hook("generate:done", async () => {
    const limit = pLimit__default['default'](8);
    const excludedImages = await nuxt.options.image.excludeImages();
    const downloads = Object.entries(staticImages).filter(([_, name]) => {
      if (excludedImages.includes(name)) {
        logger.success("Skipped excluded image " + name);
        return false;
      }
      return true;
    }).map(([url, name]) => {
      if (!ufo.hasProtocol(url)) {
        url = ufo.joinURL(options.internalUrl, url);
      }
      return limit(() => downloadImage({
        url,
        name,
        outDir: nuxt.options.generate.dir
      }));
    });
    await Promise.all(downloads);
  });
}
async function downloadImage({url, name, outDir}) {
  try {
    const response = await fetch__default['default'](url);
    if (!response.ok) {
      throw new Error(`Unexpected response ${response.statusText}`);
    }
    const dstFile = upath.join(outDir, name);
    await fsExtra.mkdirp(upath.dirname(dstFile));
    await pipeline(response.body, fs.createWriteStream(dstFile));
    logger.success("Generated static image " + upath.relative(process.cwd(), dstFile));
  } catch (error) {
    logger.error(error.message);
  }
}

// Note: this is the semver.org version of the spec that it implements
// Not necessarily the package version of this code.
const SEMVER_SPEC_VERSION = '2.0.0';

const MAX_LENGTH$2 = 256;
const MAX_SAFE_INTEGER$1 = Number.MAX_SAFE_INTEGER ||
  /* istanbul ignore next */ 9007199254740991;

// Max safe segment length for coercion.
const MAX_SAFE_COMPONENT_LENGTH = 16;

var constants = {
  SEMVER_SPEC_VERSION,
  MAX_LENGTH: MAX_LENGTH$2,
  MAX_SAFE_INTEGER: MAX_SAFE_INTEGER$1,
  MAX_SAFE_COMPONENT_LENGTH
};

const debug = (
  typeof process === 'object' &&
  process.env &&
  process.env.NODE_DEBUG &&
  /\bsemver\b/i.test(process.env.NODE_DEBUG)
) ? (...args) => console.error('SEMVER', ...args)
  : () => {};

var debug_1 = debug;

var re_1 = createCommonjsModule(function (module, exports) {
const { MAX_SAFE_COMPONENT_LENGTH } = constants;

exports = module.exports = {};

// The actual regexps go on exports.re
const re = exports.re = [];
const src = exports.src = [];
const t = exports.t = {};
let R = 0;

const createToken = (name, value, isGlobal) => {
  const index = R++;
  debug_1(index, value);
  t[name] = index;
  src[index] = value;
  re[index] = new RegExp(value, isGlobal ? 'g' : undefined);
};

// The following Regular Expressions can be used for tokenizing,
// validating, and parsing SemVer version strings.

// ## Numeric Identifier
// A single `0`, or a non-zero digit followed by zero or more digits.

createToken('NUMERICIDENTIFIER', '0|[1-9]\\d*');
createToken('NUMERICIDENTIFIERLOOSE', '[0-9]+');

// ## Non-numeric Identifier
// Zero or more digits, followed by a letter or hyphen, and then zero or
// more letters, digits, or hyphens.

createToken('NONNUMERICIDENTIFIER', '\\d*[a-zA-Z-][a-zA-Z0-9-]*');

// ## Main Version
// Three dot-separated numeric identifiers.

createToken('MAINVERSION', `(${src[t.NUMERICIDENTIFIER]})\\.` +
                   `(${src[t.NUMERICIDENTIFIER]})\\.` +
                   `(${src[t.NUMERICIDENTIFIER]})`);

createToken('MAINVERSIONLOOSE', `(${src[t.NUMERICIDENTIFIERLOOSE]})\\.` +
                        `(${src[t.NUMERICIDENTIFIERLOOSE]})\\.` +
                        `(${src[t.NUMERICIDENTIFIERLOOSE]})`);

// ## Pre-release Version Identifier
// A numeric identifier, or a non-numeric identifier.

createToken('PRERELEASEIDENTIFIER', `(?:${src[t.NUMERICIDENTIFIER]
}|${src[t.NONNUMERICIDENTIFIER]})`);

createToken('PRERELEASEIDENTIFIERLOOSE', `(?:${src[t.NUMERICIDENTIFIERLOOSE]
}|${src[t.NONNUMERICIDENTIFIER]})`);

// ## Pre-release Version
// Hyphen, followed by one or more dot-separated pre-release version
// identifiers.

createToken('PRERELEASE', `(?:-(${src[t.PRERELEASEIDENTIFIER]
}(?:\\.${src[t.PRERELEASEIDENTIFIER]})*))`);

createToken('PRERELEASELOOSE', `(?:-?(${src[t.PRERELEASEIDENTIFIERLOOSE]
}(?:\\.${src[t.PRERELEASEIDENTIFIERLOOSE]})*))`);

// ## Build Metadata Identifier
// Any combination of digits, letters, or hyphens.

createToken('BUILDIDENTIFIER', '[0-9A-Za-z-]+');

// ## Build Metadata
// Plus sign, followed by one or more period-separated build metadata
// identifiers.

createToken('BUILD', `(?:\\+(${src[t.BUILDIDENTIFIER]
}(?:\\.${src[t.BUILDIDENTIFIER]})*))`);

// ## Full Version String
// A main version, followed optionally by a pre-release version and
// build metadata.

// Note that the only major, minor, patch, and pre-release sections of
// the version string are capturing groups.  The build metadata is not a
// capturing group, because it should not ever be used in version
// comparison.

createToken('FULLPLAIN', `v?${src[t.MAINVERSION]
}${src[t.PRERELEASE]}?${
  src[t.BUILD]}?`);

createToken('FULL', `^${src[t.FULLPLAIN]}$`);

// like full, but allows v1.2.3 and =1.2.3, which people do sometimes.
// also, 1.0.0alpha1 (prerelease without the hyphen) which is pretty
// common in the npm registry.
createToken('LOOSEPLAIN', `[v=\\s]*${src[t.MAINVERSIONLOOSE]
}${src[t.PRERELEASELOOSE]}?${
  src[t.BUILD]}?`);

createToken('LOOSE', `^${src[t.LOOSEPLAIN]}$`);

createToken('GTLT', '((?:<|>)?=?)');

// Something like "2.*" or "1.2.x".
// Note that "x.x" is a valid xRange identifer, meaning "any version"
// Only the first item is strictly required.
createToken('XRANGEIDENTIFIERLOOSE', `${src[t.NUMERICIDENTIFIERLOOSE]}|x|X|\\*`);
createToken('XRANGEIDENTIFIER', `${src[t.NUMERICIDENTIFIER]}|x|X|\\*`);

createToken('XRANGEPLAIN', `[v=\\s]*(${src[t.XRANGEIDENTIFIER]})` +
                   `(?:\\.(${src[t.XRANGEIDENTIFIER]})` +
                   `(?:\\.(${src[t.XRANGEIDENTIFIER]})` +
                   `(?:${src[t.PRERELEASE]})?${
                     src[t.BUILD]}?` +
                   `)?)?`);

createToken('XRANGEPLAINLOOSE', `[v=\\s]*(${src[t.XRANGEIDENTIFIERLOOSE]})` +
                        `(?:\\.(${src[t.XRANGEIDENTIFIERLOOSE]})` +
                        `(?:\\.(${src[t.XRANGEIDENTIFIERLOOSE]})` +
                        `(?:${src[t.PRERELEASELOOSE]})?${
                          src[t.BUILD]}?` +
                        `)?)?`);

createToken('XRANGE', `^${src[t.GTLT]}\\s*${src[t.XRANGEPLAIN]}$`);
createToken('XRANGELOOSE', `^${src[t.GTLT]}\\s*${src[t.XRANGEPLAINLOOSE]}$`);

// Coercion.
// Extract anything that could conceivably be a part of a valid semver
createToken('COERCE', `${'(^|[^\\d])' +
              '(\\d{1,'}${MAX_SAFE_COMPONENT_LENGTH}})` +
              `(?:\\.(\\d{1,${MAX_SAFE_COMPONENT_LENGTH}}))?` +
              `(?:\\.(\\d{1,${MAX_SAFE_COMPONENT_LENGTH}}))?` +
              `(?:$|[^\\d])`);
createToken('COERCERTL', src[t.COERCE], true);

// Tilde ranges.
// Meaning is "reasonably at or greater than"
createToken('LONETILDE', '(?:~>?)');

createToken('TILDETRIM', `(\\s*)${src[t.LONETILDE]}\\s+`, true);
exports.tildeTrimReplace = '$1~';

createToken('TILDE', `^${src[t.LONETILDE]}${src[t.XRANGEPLAIN]}$`);
createToken('TILDELOOSE', `^${src[t.LONETILDE]}${src[t.XRANGEPLAINLOOSE]}$`);

// Caret ranges.
// Meaning is "at least and backwards compatible with"
createToken('LONECARET', '(?:\\^)');

createToken('CARETTRIM', `(\\s*)${src[t.LONECARET]}\\s+`, true);
exports.caretTrimReplace = '$1^';

createToken('CARET', `^${src[t.LONECARET]}${src[t.XRANGEPLAIN]}$`);
createToken('CARETLOOSE', `^${src[t.LONECARET]}${src[t.XRANGEPLAINLOOSE]}$`);

// A simple gt/lt/eq thing, or just "" to indicate "any version"
createToken('COMPARATORLOOSE', `^${src[t.GTLT]}\\s*(${src[t.LOOSEPLAIN]})$|^$`);
createToken('COMPARATOR', `^${src[t.GTLT]}\\s*(${src[t.FULLPLAIN]})$|^$`);

// An expression to strip any whitespace between the gtlt and the thing
// it modifies, so that `> 1.2.3` ==> `>1.2.3`
createToken('COMPARATORTRIM', `(\\s*)${src[t.GTLT]
}\\s*(${src[t.LOOSEPLAIN]}|${src[t.XRANGEPLAIN]})`, true);
exports.comparatorTrimReplace = '$1$2$3';

// Something like `1.2.3 - 1.2.4`
// Note that these all use the loose form, because they'll be
// checked against either the strict or loose comparator form
// later.
createToken('HYPHENRANGE', `^\\s*(${src[t.XRANGEPLAIN]})` +
                   `\\s+-\\s+` +
                   `(${src[t.XRANGEPLAIN]})` +
                   `\\s*$`);

createToken('HYPHENRANGELOOSE', `^\\s*(${src[t.XRANGEPLAINLOOSE]})` +
                        `\\s+-\\s+` +
                        `(${src[t.XRANGEPLAINLOOSE]})` +
                        `\\s*$`);

// Star ranges basically just allow anything at all.
createToken('STAR', '(<|>)?=?\\s*\\*');
// >=0.0.0 is like a star
createToken('GTE0', '^\\s*>=\\s*0\.0\.0\\s*$');
createToken('GTE0PRE', '^\\s*>=\\s*0\.0\.0-0\\s*$');
});

// parse out just the options we care about so we always get a consistent
// obj with keys in a consistent order.
const opts = ['includePrerelease', 'loose', 'rtl'];
const parseOptions = options =>
  !options ? {}
  : typeof options !== 'object' ? { loose: true }
  : opts.filter(k => options[k]).reduce((options, k) => {
    options[k] = true;
    return options
  }, {});
var parseOptions_1 = parseOptions;

const numeric = /^[0-9]+$/;
const compareIdentifiers$1 = (a, b) => {
  const anum = numeric.test(a);
  const bnum = numeric.test(b);

  if (anum && bnum) {
    a = +a;
    b = +b;
  }

  return a === b ? 0
    : (anum && !bnum) ? -1
    : (bnum && !anum) ? 1
    : a < b ? -1
    : 1
};

const rcompareIdentifiers = (a, b) => compareIdentifiers$1(b, a);

var identifiers = {
  compareIdentifiers: compareIdentifiers$1,
  rcompareIdentifiers
};

const { MAX_LENGTH: MAX_LENGTH$1, MAX_SAFE_INTEGER } = constants;
const { re: re$4, t: t$4 } = re_1;


const { compareIdentifiers } = identifiers;
class SemVer {
  constructor (version, options) {
    options = parseOptions_1(options);

    if (version instanceof SemVer) {
      if (version.loose === !!options.loose &&
          version.includePrerelease === !!options.includePrerelease) {
        return version
      } else {
        version = version.version;
      }
    } else if (typeof version !== 'string') {
      throw new TypeError(`Invalid Version: ${version}`)
    }

    if (version.length > MAX_LENGTH$1) {
      throw new TypeError(
        `version is longer than ${MAX_LENGTH$1} characters`
      )
    }

    debug_1('SemVer', version, options);
    this.options = options;
    this.loose = !!options.loose;
    // this isn't actually relevant for versions, but keep it so that we
    // don't run into trouble passing this.options around.
    this.includePrerelease = !!options.includePrerelease;

    const m = version.trim().match(options.loose ? re$4[t$4.LOOSE] : re$4[t$4.FULL]);

    if (!m) {
      throw new TypeError(`Invalid Version: ${version}`)
    }

    this.raw = version;

    // these are actually numbers
    this.major = +m[1];
    this.minor = +m[2];
    this.patch = +m[3];

    if (this.major > MAX_SAFE_INTEGER || this.major < 0) {
      throw new TypeError('Invalid major version')
    }

    if (this.minor > MAX_SAFE_INTEGER || this.minor < 0) {
      throw new TypeError('Invalid minor version')
    }

    if (this.patch > MAX_SAFE_INTEGER || this.patch < 0) {
      throw new TypeError('Invalid patch version')
    }

    // numberify any prerelease numeric ids
    if (!m[4]) {
      this.prerelease = [];
    } else {
      this.prerelease = m[4].split('.').map((id) => {
        if (/^[0-9]+$/.test(id)) {
          const num = +id;
          if (num >= 0 && num < MAX_SAFE_INTEGER) {
            return num
          }
        }
        return id
      });
    }

    this.build = m[5] ? m[5].split('.') : [];
    this.format();
  }

  format () {
    this.version = `${this.major}.${this.minor}.${this.patch}`;
    if (this.prerelease.length) {
      this.version += `-${this.prerelease.join('.')}`;
    }
    return this.version
  }

  toString () {
    return this.version
  }

  compare (other) {
    debug_1('SemVer.compare', this.version, this.options, other);
    if (!(other instanceof SemVer)) {
      if (typeof other === 'string' && other === this.version) {
        return 0
      }
      other = new SemVer(other, this.options);
    }

    if (other.version === this.version) {
      return 0
    }

    return this.compareMain(other) || this.comparePre(other)
  }

  compareMain (other) {
    if (!(other instanceof SemVer)) {
      other = new SemVer(other, this.options);
    }

    return (
      compareIdentifiers(this.major, other.major) ||
      compareIdentifiers(this.minor, other.minor) ||
      compareIdentifiers(this.patch, other.patch)
    )
  }

  comparePre (other) {
    if (!(other instanceof SemVer)) {
      other = new SemVer(other, this.options);
    }

    // NOT having a prerelease is > having one
    if (this.prerelease.length && !other.prerelease.length) {
      return -1
    } else if (!this.prerelease.length && other.prerelease.length) {
      return 1
    } else if (!this.prerelease.length && !other.prerelease.length) {
      return 0
    }

    let i = 0;
    do {
      const a = this.prerelease[i];
      const b = other.prerelease[i];
      debug_1('prerelease compare', i, a, b);
      if (a === undefined && b === undefined) {
        return 0
      } else if (b === undefined) {
        return 1
      } else if (a === undefined) {
        return -1
      } else if (a === b) {
        continue
      } else {
        return compareIdentifiers(a, b)
      }
    } while (++i)
  }

  compareBuild (other) {
    if (!(other instanceof SemVer)) {
      other = new SemVer(other, this.options);
    }

    let i = 0;
    do {
      const a = this.build[i];
      const b = other.build[i];
      debug_1('prerelease compare', i, a, b);
      if (a === undefined && b === undefined) {
        return 0
      } else if (b === undefined) {
        return 1
      } else if (a === undefined) {
        return -1
      } else if (a === b) {
        continue
      } else {
        return compareIdentifiers(a, b)
      }
    } while (++i)
  }

  // preminor will bump the version up to the next minor release, and immediately
  // down to pre-release. premajor and prepatch work the same way.
  inc (release, identifier) {
    switch (release) {
      case 'premajor':
        this.prerelease.length = 0;
        this.patch = 0;
        this.minor = 0;
        this.major++;
        this.inc('pre', identifier);
        break
      case 'preminor':
        this.prerelease.length = 0;
        this.patch = 0;
        this.minor++;
        this.inc('pre', identifier);
        break
      case 'prepatch':
        // If this is already a prerelease, it will bump to the next version
        // drop any prereleases that might already exist, since they are not
        // relevant at this point.
        this.prerelease.length = 0;
        this.inc('patch', identifier);
        this.inc('pre', identifier);
        break
      // If the input is a non-prerelease version, this acts the same as
      // prepatch.
      case 'prerelease':
        if (this.prerelease.length === 0) {
          this.inc('patch', identifier);
        }
        this.inc('pre', identifier);
        break

      case 'major':
        // If this is a pre-major version, bump up to the same major version.
        // Otherwise increment major.
        // 1.0.0-5 bumps to 1.0.0
        // 1.1.0 bumps to 2.0.0
        if (
          this.minor !== 0 ||
          this.patch !== 0 ||
          this.prerelease.length === 0
        ) {
          this.major++;
        }
        this.minor = 0;
        this.patch = 0;
        this.prerelease = [];
        break
      case 'minor':
        // If this is a pre-minor version, bump up to the same minor version.
        // Otherwise increment minor.
        // 1.2.0-5 bumps to 1.2.0
        // 1.2.1 bumps to 1.3.0
        if (this.patch !== 0 || this.prerelease.length === 0) {
          this.minor++;
        }
        this.patch = 0;
        this.prerelease = [];
        break
      case 'patch':
        // If this is not a pre-release version, it will increment the patch.
        // If it is a pre-release it will bump up to the same patch version.
        // 1.2.0-5 patches to 1.2.0
        // 1.2.0 patches to 1.2.1
        if (this.prerelease.length === 0) {
          this.patch++;
        }
        this.prerelease = [];
        break
      // This probably shouldn't be used publicly.
      // 1.0.0 'pre' would become 1.0.0-0 which is the wrong direction.
      case 'pre':
        if (this.prerelease.length === 0) {
          this.prerelease = [0];
        } else {
          let i = this.prerelease.length;
          while (--i >= 0) {
            if (typeof this.prerelease[i] === 'number') {
              this.prerelease[i]++;
              i = -2;
            }
          }
          if (i === -1) {
            // didn't increment anything
            this.prerelease.push(0);
          }
        }
        if (identifier) {
          // 1.2.0-beta.1 bumps to 1.2.0-beta.2,
          // 1.2.0-beta.fooblz or 1.2.0-beta bumps to 1.2.0-beta.0
          if (this.prerelease[0] === identifier) {
            if (isNaN(this.prerelease[1])) {
              this.prerelease = [identifier, 0];
            }
          } else {
            this.prerelease = [identifier, 0];
          }
        }
        break

      default:
        throw new Error(`invalid increment argument: ${release}`)
    }
    this.format();
    this.raw = this.version;
    return this
  }
}

var semver$1 = SemVer;

const {MAX_LENGTH} = constants;
const { re: re$3, t: t$3 } = re_1;



const parse = (version, options) => {
  options = parseOptions_1(options);

  if (version instanceof semver$1) {
    return version
  }

  if (typeof version !== 'string') {
    return null
  }

  if (version.length > MAX_LENGTH) {
    return null
  }

  const r = options.loose ? re$3[t$3.LOOSE] : re$3[t$3.FULL];
  if (!r.test(version)) {
    return null
  }

  try {
    return new semver$1(version, options)
  } catch (er) {
    return null
  }
};

var parse_1 = parse;

const valid$1 = (version, options) => {
  const v = parse_1(version, options);
  return v ? v.version : null
};
var valid_1 = valid$1;

const clean = (version, options) => {
  const s = parse_1(version.trim().replace(/^[=v]+/, ''), options);
  return s ? s.version : null
};
var clean_1 = clean;

const inc = (version, release, options, identifier) => {
  if (typeof (options) === 'string') {
    identifier = options;
    options = undefined;
  }

  try {
    return new semver$1(version, options).inc(release, identifier).version
  } catch (er) {
    return null
  }
};
var inc_1 = inc;

const compare = (a, b, loose) =>
  new semver$1(a, loose).compare(new semver$1(b, loose));

var compare_1 = compare;

const eq = (a, b, loose) => compare_1(a, b, loose) === 0;
var eq_1 = eq;

const diff = (version1, version2) => {
  if (eq_1(version1, version2)) {
    return null
  } else {
    const v1 = parse_1(version1);
    const v2 = parse_1(version2);
    const hasPre = v1.prerelease.length || v2.prerelease.length;
    const prefix = hasPre ? 'pre' : '';
    const defaultResult = hasPre ? 'prerelease' : '';
    for (const key in v1) {
      if (key === 'major' || key === 'minor' || key === 'patch') {
        if (v1[key] !== v2[key]) {
          return prefix + key
        }
      }
    }
    return defaultResult // may be undefined
  }
};
var diff_1 = diff;

const major = (a, loose) => new semver$1(a, loose).major;
var major_1 = major;

const minor = (a, loose) => new semver$1(a, loose).minor;
var minor_1 = minor;

const patch = (a, loose) => new semver$1(a, loose).patch;
var patch_1 = patch;

const prerelease = (version, options) => {
  const parsed = parse_1(version, options);
  return (parsed && parsed.prerelease.length) ? parsed.prerelease : null
};
var prerelease_1 = prerelease;

const rcompare = (a, b, loose) => compare_1(b, a, loose);
var rcompare_1 = rcompare;

const compareLoose = (a, b) => compare_1(a, b, true);
var compareLoose_1 = compareLoose;

const compareBuild = (a, b, loose) => {
  const versionA = new semver$1(a, loose);
  const versionB = new semver$1(b, loose);
  return versionA.compare(versionB) || versionA.compareBuild(versionB)
};
var compareBuild_1 = compareBuild;

const sort = (list, loose) => list.sort((a, b) => compareBuild_1(a, b, loose));
var sort_1 = sort;

const rsort = (list, loose) => list.sort((a, b) => compareBuild_1(b, a, loose));
var rsort_1 = rsort;

const gt = (a, b, loose) => compare_1(a, b, loose) > 0;
var gt_1 = gt;

const lt = (a, b, loose) => compare_1(a, b, loose) < 0;
var lt_1 = lt;

const neq = (a, b, loose) => compare_1(a, b, loose) !== 0;
var neq_1 = neq;

const gte = (a, b, loose) => compare_1(a, b, loose) >= 0;
var gte_1 = gte;

const lte = (a, b, loose) => compare_1(a, b, loose) <= 0;
var lte_1 = lte;

const cmp = (a, op, b, loose) => {
  switch (op) {
    case '===':
      if (typeof a === 'object')
        a = a.version;
      if (typeof b === 'object')
        b = b.version;
      return a === b

    case '!==':
      if (typeof a === 'object')
        a = a.version;
      if (typeof b === 'object')
        b = b.version;
      return a !== b

    case '':
    case '=':
    case '==':
      return eq_1(a, b, loose)

    case '!=':
      return neq_1(a, b, loose)

    case '>':
      return gt_1(a, b, loose)

    case '>=':
      return gte_1(a, b, loose)

    case '<':
      return lt_1(a, b, loose)

    case '<=':
      return lte_1(a, b, loose)

    default:
      throw new TypeError(`Invalid operator: ${op}`)
  }
};
var cmp_1 = cmp;

const {re: re$2, t: t$2} = re_1;

const coerce = (version, options) => {
  if (version instanceof semver$1) {
    return version
  }

  if (typeof version === 'number') {
    version = String(version);
  }

  if (typeof version !== 'string') {
    return null
  }

  options = options || {};

  let match = null;
  if (!options.rtl) {
    match = version.match(re$2[t$2.COERCE]);
  } else {
    // Find the right-most coercible string that does not share
    // a terminus with a more left-ward coercible string.
    // Eg, '1.2.3.4' wants to coerce '2.3.4', not '3.4' or '4'
    //
    // Walk through the string checking with a /g regexp
    // Manually set the index so as to pick up overlapping matches.
    // Stop when we get a match that ends at the string end, since no
    // coercible string can be more right-ward without the same terminus.
    let next;
    while ((next = re$2[t$2.COERCERTL].exec(version)) &&
        (!match || match.index + match[0].length !== version.length)
    ) {
      if (!match ||
            next.index + next[0].length !== match.index + match[0].length) {
        match = next;
      }
      re$2[t$2.COERCERTL].lastIndex = next.index + next[1].length + next[2].length;
    }
    // leave it in a clean state
    re$2[t$2.COERCERTL].lastIndex = -1;
  }

  if (match === null)
    return null

  return parse_1(`${match[2]}.${match[3] || '0'}.${match[4] || '0'}`, options)
};
var coerce_1 = coerce;

// hoisted class for cyclic dependency
class Range {
  constructor (range, options) {
    options = parseOptions_1(options);

    if (range instanceof Range) {
      if (
        range.loose === !!options.loose &&
        range.includePrerelease === !!options.includePrerelease
      ) {
        return range
      } else {
        return new Range(range.raw, options)
      }
    }

    if (range instanceof comparator) {
      // just put it in the set and return
      this.raw = range.value;
      this.set = [[range]];
      this.format();
      return this
    }

    this.options = options;
    this.loose = !!options.loose;
    this.includePrerelease = !!options.includePrerelease;

    // First, split based on boolean or ||
    this.raw = range;
    this.set = range
      .split(/\s*\|\|\s*/)
      // map the range to a 2d array of comparators
      .map(range => this.parseRange(range.trim()))
      // throw out any comparator lists that are empty
      // this generally means that it was not a valid range, which is allowed
      // in loose mode, but will still throw if the WHOLE range is invalid.
      .filter(c => c.length);

    if (!this.set.length) {
      throw new TypeError(`Invalid SemVer Range: ${range}`)
    }

    // if we have any that are not the null set, throw out null sets.
    if (this.set.length > 1) {
      // keep the first one, in case they're all null sets
      const first = this.set[0];
      this.set = this.set.filter(c => !isNullSet(c[0]));
      if (this.set.length === 0)
        this.set = [first];
      else if (this.set.length > 1) {
        // if we have any that are *, then the range is just *
        for (const c of this.set) {
          if (c.length === 1 && isAny(c[0])) {
            this.set = [c];
            break
          }
        }
      }
    }

    this.format();
  }

  format () {
    this.range = this.set
      .map((comps) => {
        return comps.join(' ').trim()
      })
      .join('||')
      .trim();
    return this.range
  }

  toString () {
    return this.range
  }

  parseRange (range) {
    range = range.trim();

    // memoize range parsing for performance.
    // this is a very hot path, and fully deterministic.
    const memoOpts = Object.keys(this.options).join(',');
    const memoKey = `parseRange:${memoOpts}:${range}`;
    const cached = cache.get(memoKey);
    if (cached)
      return cached

    const loose = this.options.loose;
    // `1.2.3 - 1.2.4` => `>=1.2.3 <=1.2.4`
    const hr = loose ? re$1[t$1.HYPHENRANGELOOSE] : re$1[t$1.HYPHENRANGE];
    range = range.replace(hr, hyphenReplace(this.options.includePrerelease));
    debug_1('hyphen replace', range);
    // `> 1.2.3 < 1.2.5` => `>1.2.3 <1.2.5`
    range = range.replace(re$1[t$1.COMPARATORTRIM], comparatorTrimReplace);
    debug_1('comparator trim', range, re$1[t$1.COMPARATORTRIM]);

    // `~ 1.2.3` => `~1.2.3`
    range = range.replace(re$1[t$1.TILDETRIM], tildeTrimReplace);

    // `^ 1.2.3` => `^1.2.3`
    range = range.replace(re$1[t$1.CARETTRIM], caretTrimReplace);

    // normalize spaces
    range = range.split(/\s+/).join(' ');

    // At this point, the range is completely trimmed and
    // ready to be split into comparators.

    const compRe = loose ? re$1[t$1.COMPARATORLOOSE] : re$1[t$1.COMPARATOR];
    const rangeList = range
      .split(' ')
      .map(comp => parseComparator(comp, this.options))
      .join(' ')
      .split(/\s+/)
      // >=0.0.0 is equivalent to *
      .map(comp => replaceGTE0(comp, this.options))
      // in loose mode, throw out any that are not valid comparators
      .filter(this.options.loose ? comp => !!comp.match(compRe) : () => true)
      .map(comp => new comparator(comp, this.options));

    // if any comparators are the null set, then replace with JUST null set
    // if more than one comparator, remove any * comparators
    // also, don't include the same comparator more than once
    rangeList.length;
    const rangeMap = new Map();
    for (const comp of rangeList) {
      if (isNullSet(comp))
        return [comp]
      rangeMap.set(comp.value, comp);
    }
    if (rangeMap.size > 1 && rangeMap.has(''))
      rangeMap.delete('');

    const result = [...rangeMap.values()];
    cache.set(memoKey, result);
    return result
  }

  intersects (range, options) {
    if (!(range instanceof Range)) {
      throw new TypeError('a Range is required')
    }

    return this.set.some((thisComparators) => {
      return (
        isSatisfiable(thisComparators, options) &&
        range.set.some((rangeComparators) => {
          return (
            isSatisfiable(rangeComparators, options) &&
            thisComparators.every((thisComparator) => {
              return rangeComparators.every((rangeComparator) => {
                return thisComparator.intersects(rangeComparator, options)
              })
            })
          )
        })
      )
    })
  }

  // if ANY of the sets match ALL of its comparators, then pass
  test (version) {
    if (!version) {
      return false
    }

    if (typeof version === 'string') {
      try {
        version = new semver$1(version, this.options);
      } catch (er) {
        return false
      }
    }

    for (let i = 0; i < this.set.length; i++) {
      if (testSet(this.set[i], version, this.options)) {
        return true
      }
    }
    return false
  }
}
var range = Range;


const cache = new LRU__default['default']({ max: 1000 });





const {
  re: re$1,
  t: t$1,
  comparatorTrimReplace,
  tildeTrimReplace,
  caretTrimReplace
} = re_1;

const isNullSet = c => c.value === '<0.0.0-0';
const isAny = c => c.value === '';

// take a set of comparators and determine whether there
// exists a version which can satisfy it
const isSatisfiable = (comparators, options) => {
  let result = true;
  const remainingComparators = comparators.slice();
  let testComparator = remainingComparators.pop();

  while (result && remainingComparators.length) {
    result = remainingComparators.every((otherComparator) => {
      return testComparator.intersects(otherComparator, options)
    });

    testComparator = remainingComparators.pop();
  }

  return result
};

// comprised of xranges, tildes, stars, and gtlt's at this point.
// already replaced the hyphen ranges
// turn into a set of JUST comparators.
const parseComparator = (comp, options) => {
  debug_1('comp', comp, options);
  comp = replaceCarets(comp, options);
  debug_1('caret', comp);
  comp = replaceTildes(comp, options);
  debug_1('tildes', comp);
  comp = replaceXRanges(comp, options);
  debug_1('xrange', comp);
  comp = replaceStars(comp, options);
  debug_1('stars', comp);
  return comp
};

const isX = id => !id || id.toLowerCase() === 'x' || id === '*';

// ~, ~> --> * (any, kinda silly)
// ~2, ~2.x, ~2.x.x, ~>2, ~>2.x ~>2.x.x --> >=2.0.0 <3.0.0-0
// ~2.0, ~2.0.x, ~>2.0, ~>2.0.x --> >=2.0.0 <2.1.0-0
// ~1.2, ~1.2.x, ~>1.2, ~>1.2.x --> >=1.2.0 <1.3.0-0
// ~1.2.3, ~>1.2.3 --> >=1.2.3 <1.3.0-0
// ~1.2.0, ~>1.2.0 --> >=1.2.0 <1.3.0-0
const replaceTildes = (comp, options) =>
  comp.trim().split(/\s+/).map((comp) => {
    return replaceTilde(comp, options)
  }).join(' ');

const replaceTilde = (comp, options) => {
  const r = options.loose ? re$1[t$1.TILDELOOSE] : re$1[t$1.TILDE];
  return comp.replace(r, (_, M, m, p, pr) => {
    debug_1('tilde', comp, _, M, m, p, pr);
    let ret;

    if (isX(M)) {
      ret = '';
    } else if (isX(m)) {
      ret = `>=${M}.0.0 <${+M + 1}.0.0-0`;
    } else if (isX(p)) {
      // ~1.2 == >=1.2.0 <1.3.0-0
      ret = `>=${M}.${m}.0 <${M}.${+m + 1}.0-0`;
    } else if (pr) {
      debug_1('replaceTilde pr', pr);
      ret = `>=${M}.${m}.${p}-${pr
      } <${M}.${+m + 1}.0-0`;
    } else {
      // ~1.2.3 == >=1.2.3 <1.3.0-0
      ret = `>=${M}.${m}.${p
      } <${M}.${+m + 1}.0-0`;
    }

    debug_1('tilde return', ret);
    return ret
  })
};

// ^ --> * (any, kinda silly)
// ^2, ^2.x, ^2.x.x --> >=2.0.0 <3.0.0-0
// ^2.0, ^2.0.x --> >=2.0.0 <3.0.0-0
// ^1.2, ^1.2.x --> >=1.2.0 <2.0.0-0
// ^1.2.3 --> >=1.2.3 <2.0.0-0
// ^1.2.0 --> >=1.2.0 <2.0.0-0
const replaceCarets = (comp, options) =>
  comp.trim().split(/\s+/).map((comp) => {
    return replaceCaret(comp, options)
  }).join(' ');

const replaceCaret = (comp, options) => {
  debug_1('caret', comp, options);
  const r = options.loose ? re$1[t$1.CARETLOOSE] : re$1[t$1.CARET];
  const z = options.includePrerelease ? '-0' : '';
  return comp.replace(r, (_, M, m, p, pr) => {
    debug_1('caret', comp, _, M, m, p, pr);
    let ret;

    if (isX(M)) {
      ret = '';
    } else if (isX(m)) {
      ret = `>=${M}.0.0${z} <${+M + 1}.0.0-0`;
    } else if (isX(p)) {
      if (M === '0') {
        ret = `>=${M}.${m}.0${z} <${M}.${+m + 1}.0-0`;
      } else {
        ret = `>=${M}.${m}.0${z} <${+M + 1}.0.0-0`;
      }
    } else if (pr) {
      debug_1('replaceCaret pr', pr);
      if (M === '0') {
        if (m === '0') {
          ret = `>=${M}.${m}.${p}-${pr
          } <${M}.${m}.${+p + 1}-0`;
        } else {
          ret = `>=${M}.${m}.${p}-${pr
          } <${M}.${+m + 1}.0-0`;
        }
      } else {
        ret = `>=${M}.${m}.${p}-${pr
        } <${+M + 1}.0.0-0`;
      }
    } else {
      debug_1('no pr');
      if (M === '0') {
        if (m === '0') {
          ret = `>=${M}.${m}.${p
          }${z} <${M}.${m}.${+p + 1}-0`;
        } else {
          ret = `>=${M}.${m}.${p
          }${z} <${M}.${+m + 1}.0-0`;
        }
      } else {
        ret = `>=${M}.${m}.${p
        } <${+M + 1}.0.0-0`;
      }
    }

    debug_1('caret return', ret);
    return ret
  })
};

const replaceXRanges = (comp, options) => {
  debug_1('replaceXRanges', comp, options);
  return comp.split(/\s+/).map((comp) => {
    return replaceXRange(comp, options)
  }).join(' ')
};

const replaceXRange = (comp, options) => {
  comp = comp.trim();
  const r = options.loose ? re$1[t$1.XRANGELOOSE] : re$1[t$1.XRANGE];
  return comp.replace(r, (ret, gtlt, M, m, p, pr) => {
    debug_1('xRange', comp, ret, gtlt, M, m, p, pr);
    const xM = isX(M);
    const xm = xM || isX(m);
    const xp = xm || isX(p);
    const anyX = xp;

    if (gtlt === '=' && anyX) {
      gtlt = '';
    }

    // if we're including prereleases in the match, then we need
    // to fix this to -0, the lowest possible prerelease value
    pr = options.includePrerelease ? '-0' : '';

    if (xM) {
      if (gtlt === '>' || gtlt === '<') {
        // nothing is allowed
        ret = '<0.0.0-0';
      } else {
        // nothing is forbidden
        ret = '*';
      }
    } else if (gtlt && anyX) {
      // we know patch is an x, because we have any x at all.
      // replace X with 0
      if (xm) {
        m = 0;
      }
      p = 0;

      if (gtlt === '>') {
        // >1 => >=2.0.0
        // >1.2 => >=1.3.0
        gtlt = '>=';
        if (xm) {
          M = +M + 1;
          m = 0;
          p = 0;
        } else {
          m = +m + 1;
          p = 0;
        }
      } else if (gtlt === '<=') {
        // <=0.7.x is actually <0.8.0, since any 0.7.x should
        // pass.  Similarly, <=7.x is actually <8.0.0, etc.
        gtlt = '<';
        if (xm) {
          M = +M + 1;
        } else {
          m = +m + 1;
        }
      }

      if (gtlt === '<')
        pr = '-0';

      ret = `${gtlt + M}.${m}.${p}${pr}`;
    } else if (xm) {
      ret = `>=${M}.0.0${pr} <${+M + 1}.0.0-0`;
    } else if (xp) {
      ret = `>=${M}.${m}.0${pr
      } <${M}.${+m + 1}.0-0`;
    }

    debug_1('xRange return', ret);

    return ret
  })
};

// Because * is AND-ed with everything else in the comparator,
// and '' means "any version", just remove the *s entirely.
const replaceStars = (comp, options) => {
  debug_1('replaceStars', comp, options);
  // Looseness is ignored here.  star is always as loose as it gets!
  return comp.trim().replace(re$1[t$1.STAR], '')
};

const replaceGTE0 = (comp, options) => {
  debug_1('replaceGTE0', comp, options);
  return comp.trim()
    .replace(re$1[options.includePrerelease ? t$1.GTE0PRE : t$1.GTE0], '')
};

// This function is passed to string.replace(re[t.HYPHENRANGE])
// M, m, patch, prerelease, build
// 1.2 - 3.4.5 => >=1.2.0 <=3.4.5
// 1.2.3 - 3.4 => >=1.2.0 <3.5.0-0 Any 3.4.x will do
// 1.2 - 3.4 => >=1.2.0 <3.5.0-0
const hyphenReplace = incPr => ($0,
  from, fM, fm, fp, fpr, fb,
  to, tM, tm, tp, tpr, tb) => {
  if (isX(fM)) {
    from = '';
  } else if (isX(fm)) {
    from = `>=${fM}.0.0${incPr ? '-0' : ''}`;
  } else if (isX(fp)) {
    from = `>=${fM}.${fm}.0${incPr ? '-0' : ''}`;
  } else if (fpr) {
    from = `>=${from}`;
  } else {
    from = `>=${from}${incPr ? '-0' : ''}`;
  }

  if (isX(tM)) {
    to = '';
  } else if (isX(tm)) {
    to = `<${+tM + 1}.0.0-0`;
  } else if (isX(tp)) {
    to = `<${tM}.${+tm + 1}.0-0`;
  } else if (tpr) {
    to = `<=${tM}.${tm}.${tp}-${tpr}`;
  } else if (incPr) {
    to = `<${tM}.${tm}.${+tp + 1}-0`;
  } else {
    to = `<=${to}`;
  }

  return (`${from} ${to}`).trim()
};

const testSet = (set, version, options) => {
  for (let i = 0; i < set.length; i++) {
    if (!set[i].test(version)) {
      return false
    }
  }

  if (version.prerelease.length && !options.includePrerelease) {
    // Find the set of versions that are allowed to have prereleases
    // For example, ^1.2.3-pr.1 desugars to >=1.2.3-pr.1 <2.0.0
    // That should allow `1.2.3-pr.2` to pass.
    // However, `1.2.4-alpha.notready` should NOT be allowed,
    // even though it's within the range set by the comparators.
    for (let i = 0; i < set.length; i++) {
      debug_1(set[i].semver);
      if (set[i].semver === comparator.ANY) {
        continue
      }

      if (set[i].semver.prerelease.length > 0) {
        const allowed = set[i].semver;
        if (allowed.major === version.major &&
            allowed.minor === version.minor &&
            allowed.patch === version.patch) {
          return true
        }
      }
    }

    // Version has a -pre, but it's not one of the ones we like.
    return false
  }

  return true
};

const ANY$2 = Symbol('SemVer ANY');
// hoisted class for cyclic dependency
class Comparator {
  static get ANY () {
    return ANY$2
  }
  constructor (comp, options) {
    options = parseOptions_1(options);

    if (comp instanceof Comparator) {
      if (comp.loose === !!options.loose) {
        return comp
      } else {
        comp = comp.value;
      }
    }

    debug_1('comparator', comp, options);
    this.options = options;
    this.loose = !!options.loose;
    this.parse(comp);

    if (this.semver === ANY$2) {
      this.value = '';
    } else {
      this.value = this.operator + this.semver.version;
    }

    debug_1('comp', this);
  }

  parse (comp) {
    const r = this.options.loose ? re[t.COMPARATORLOOSE] : re[t.COMPARATOR];
    const m = comp.match(r);

    if (!m) {
      throw new TypeError(`Invalid comparator: ${comp}`)
    }

    this.operator = m[1] !== undefined ? m[1] : '';
    if (this.operator === '=') {
      this.operator = '';
    }

    // if it literally is just '>' or '' then allow anything.
    if (!m[2]) {
      this.semver = ANY$2;
    } else {
      this.semver = new semver$1(m[2], this.options.loose);
    }
  }

  toString () {
    return this.value
  }

  test (version) {
    debug_1('Comparator.test', version, this.options.loose);

    if (this.semver === ANY$2 || version === ANY$2) {
      return true
    }

    if (typeof version === 'string') {
      try {
        version = new semver$1(version, this.options);
      } catch (er) {
        return false
      }
    }

    return cmp_1(version, this.operator, this.semver, this.options)
  }

  intersects (comp, options) {
    if (!(comp instanceof Comparator)) {
      throw new TypeError('a Comparator is required')
    }

    if (!options || typeof options !== 'object') {
      options = {
        loose: !!options,
        includePrerelease: false
      };
    }

    if (this.operator === '') {
      if (this.value === '') {
        return true
      }
      return new range(comp.value, options).test(this.value)
    } else if (comp.operator === '') {
      if (comp.value === '') {
        return true
      }
      return new range(this.value, options).test(comp.semver)
    }

    const sameDirectionIncreasing =
      (this.operator === '>=' || this.operator === '>') &&
      (comp.operator === '>=' || comp.operator === '>');
    const sameDirectionDecreasing =
      (this.operator === '<=' || this.operator === '<') &&
      (comp.operator === '<=' || comp.operator === '<');
    const sameSemVer = this.semver.version === comp.semver.version;
    const differentDirectionsInclusive =
      (this.operator === '>=' || this.operator === '<=') &&
      (comp.operator === '>=' || comp.operator === '<=');
    const oppositeDirectionsLessThan =
      cmp_1(this.semver, '<', comp.semver, options) &&
      (this.operator === '>=' || this.operator === '>') &&
        (comp.operator === '<=' || comp.operator === '<');
    const oppositeDirectionsGreaterThan =
      cmp_1(this.semver, '>', comp.semver, options) &&
      (this.operator === '<=' || this.operator === '<') &&
        (comp.operator === '>=' || comp.operator === '>');

    return (
      sameDirectionIncreasing ||
      sameDirectionDecreasing ||
      (sameSemVer && differentDirectionsInclusive) ||
      oppositeDirectionsLessThan ||
      oppositeDirectionsGreaterThan
    )
  }
}

var comparator = Comparator;


const {re, t} = re_1;

const satisfies = (version, range$1, options) => {
  try {
    range$1 = new range(range$1, options);
  } catch (er) {
    return false
  }
  return range$1.test(version)
};
var satisfies_1 = satisfies;

// Mostly just for testing and legacy API reasons
const toComparators = (range$1, options) =>
  new range(range$1, options).set
    .map(comp => comp.map(c => c.value).join(' ').trim().split(' '));

var toComparators_1 = toComparators;

const maxSatisfying = (versions, range$1, options) => {
  let max = null;
  let maxSV = null;
  let rangeObj = null;
  try {
    rangeObj = new range(range$1, options);
  } catch (er) {
    return null
  }
  versions.forEach((v) => {
    if (rangeObj.test(v)) {
      // satisfies(v, range, options)
      if (!max || maxSV.compare(v) === -1) {
        // compare(max, v, true)
        max = v;
        maxSV = new semver$1(max, options);
      }
    }
  });
  return max
};
var maxSatisfying_1 = maxSatisfying;

const minSatisfying = (versions, range$1, options) => {
  let min = null;
  let minSV = null;
  let rangeObj = null;
  try {
    rangeObj = new range(range$1, options);
  } catch (er) {
    return null
  }
  versions.forEach((v) => {
    if (rangeObj.test(v)) {
      // satisfies(v, range, options)
      if (!min || minSV.compare(v) === 1) {
        // compare(min, v, true)
        min = v;
        minSV = new semver$1(min, options);
      }
    }
  });
  return min
};
var minSatisfying_1 = minSatisfying;

const minVersion = (range$1, loose) => {
  range$1 = new range(range$1, loose);

  let minver = new semver$1('0.0.0');
  if (range$1.test(minver)) {
    return minver
  }

  minver = new semver$1('0.0.0-0');
  if (range$1.test(minver)) {
    return minver
  }

  minver = null;
  for (let i = 0; i < range$1.set.length; ++i) {
    const comparators = range$1.set[i];

    let setMin = null;
    comparators.forEach((comparator) => {
      // Clone to avoid manipulating the comparator's semver object.
      const compver = new semver$1(comparator.semver.version);
      switch (comparator.operator) {
        case '>':
          if (compver.prerelease.length === 0) {
            compver.patch++;
          } else {
            compver.prerelease.push(0);
          }
          compver.raw = compver.format();
          /* fallthrough */
        case '':
        case '>=':
          if (!setMin || gt_1(compver, setMin)) {
            setMin = compver;
          }
          break
        case '<':
        case '<=':
          /* Ignore maximum versions */
          break
        /* istanbul ignore next */
        default:
          throw new Error(`Unexpected operation: ${comparator.operator}`)
      }
    });
    if (setMin && (!minver || gt_1(minver, setMin)))
      minver = setMin;
  }

  if (minver && range$1.test(minver)) {
    return minver
  }

  return null
};
var minVersion_1 = minVersion;

const validRange = (range$1, options) => {
  try {
    // Return '*' instead of '' so that truthiness works.
    // This will throw if it's invalid anyway
    return new range(range$1, options).range || '*'
  } catch (er) {
    return null
  }
};
var valid = validRange;

const {ANY: ANY$1} = comparator;







const outside = (version, range$1, hilo, options) => {
  version = new semver$1(version, options);
  range$1 = new range(range$1, options);

  let gtfn, ltefn, ltfn, comp, ecomp;
  switch (hilo) {
    case '>':
      gtfn = gt_1;
      ltefn = lte_1;
      ltfn = lt_1;
      comp = '>';
      ecomp = '>=';
      break
    case '<':
      gtfn = lt_1;
      ltefn = gte_1;
      ltfn = gt_1;
      comp = '<';
      ecomp = '<=';
      break
    default:
      throw new TypeError('Must provide a hilo val of "<" or ">"')
  }

  // If it satisfies the range it is not outside
  if (satisfies_1(version, range$1, options)) {
    return false
  }

  // From now on, variable terms are as if we're in "gtr" mode.
  // but note that everything is flipped for the "ltr" function.

  for (let i = 0; i < range$1.set.length; ++i) {
    const comparators = range$1.set[i];

    let high = null;
    let low = null;

    comparators.forEach((comparator$1) => {
      if (comparator$1.semver === ANY$1) {
        comparator$1 = new comparator('>=0.0.0');
      }
      high = high || comparator$1;
      low = low || comparator$1;
      if (gtfn(comparator$1.semver, high.semver, options)) {
        high = comparator$1;
      } else if (ltfn(comparator$1.semver, low.semver, options)) {
        low = comparator$1;
      }
    });

    // If the edge version comparator has a operator then our version
    // isn't outside it
    if (high.operator === comp || high.operator === ecomp) {
      return false
    }

    // If the lowest version comparator has an operator and our version
    // is less than it then it isn't higher than the range
    if ((!low.operator || low.operator === comp) &&
        ltefn(version, low.semver)) {
      return false
    } else if (low.operator === ecomp && ltfn(version, low.semver)) {
      return false
    }
  }
  return true
};

var outside_1 = outside;

// Determine if version is greater than all the versions possible in the range.

const gtr = (version, range, options) => outside_1(version, range, '>', options);
var gtr_1 = gtr;

// Determine if version is less than all the versions possible in the range
const ltr = (version, range, options) => outside_1(version, range, '<', options);
var ltr_1 = ltr;

const intersects = (r1, r2, options) => {
  r1 = new range(r1, options);
  r2 = new range(r2, options);
  return r1.intersects(r2)
};
var intersects_1 = intersects;

// given a set of versions and a range, create a "simplified" range
// that includes the same versions that the original range does
// If the original range is shorter than the simplified one, return that.


var simplify = (versions, range, options) => {
  const set = [];
  let min = null;
  let prev = null;
  const v = versions.sort((a, b) => compare_1(a, b, options));
  for (const version of v) {
    const included = satisfies_1(version, range, options);
    if (included) {
      prev = version;
      if (!min)
        min = version;
    } else {
      if (prev) {
        set.push([min, prev]);
      }
      prev = null;
      min = null;
    }
  }
  if (min)
    set.push([min, null]);

  const ranges = [];
  for (const [min, max] of set) {
    if (min === max)
      ranges.push(min);
    else if (!max && min === v[0])
      ranges.push('*');
    else if (!max)
      ranges.push(`>=${min}`);
    else if (min === v[0])
      ranges.push(`<=${max}`);
    else
      ranges.push(`${min} - ${max}`);
  }
  const simplified = ranges.join(' || ');
  const original = typeof range.raw === 'string' ? range.raw : String(range);
  return simplified.length < original.length ? simplified : range
};

const { ANY } = comparator;



// Complex range `r1 || r2 || ...` is a subset of `R1 || R2 || ...` iff:
// - Every simple range `r1, r2, ...` is a null set, OR
// - Every simple range `r1, r2, ...` which is not a null set is a subset of
//   some `R1, R2, ...`
//
// Simple range `c1 c2 ...` is a subset of simple range `C1 C2 ...` iff:
// - If c is only the ANY comparator
//   - If C is only the ANY comparator, return true
//   - Else if in prerelease mode, return false
//   - else replace c with `[>=0.0.0]`
// - If C is only the ANY comparator
//   - if in prerelease mode, return true
//   - else replace C with `[>=0.0.0]`
// - Let EQ be the set of = comparators in c
// - If EQ is more than one, return true (null set)
// - Let GT be the highest > or >= comparator in c
// - Let LT be the lowest < or <= comparator in c
// - If GT and LT, and GT.semver > LT.semver, return true (null set)
// - If any C is a = range, and GT or LT are set, return false
// - If EQ
//   - If GT, and EQ does not satisfy GT, return true (null set)
//   - If LT, and EQ does not satisfy LT, return true (null set)
//   - If EQ satisfies every C, return true
//   - Else return false
// - If GT
//   - If GT.semver is lower than any > or >= comp in C, return false
//   - If GT is >=, and GT.semver does not satisfy every C, return false
//   - If GT.semver has a prerelease, and not in prerelease mode
//     - If no C has a prerelease and the GT.semver tuple, return false
// - If LT
//   - If LT.semver is greater than any < or <= comp in C, return false
//   - If LT is <=, and LT.semver does not satisfy every C, return false
//   - If GT.semver has a prerelease, and not in prerelease mode
//     - If no C has a prerelease and the LT.semver tuple, return false
// - Else return true

const subset = (sub, dom, options = {}) => {
  if (sub === dom)
    return true

  sub = new range(sub, options);
  dom = new range(dom, options);
  let sawNonNull = false;

  OUTER: for (const simpleSub of sub.set) {
    for (const simpleDom of dom.set) {
      const isSub = simpleSubset(simpleSub, simpleDom, options);
      sawNonNull = sawNonNull || isSub !== null;
      if (isSub)
        continue OUTER
    }
    // the null set is a subset of everything, but null simple ranges in
    // a complex range should be ignored.  so if we saw a non-null range,
    // then we know this isn't a subset, but if EVERY simple range was null,
    // then it is a subset.
    if (sawNonNull)
      return false
  }
  return true
};

const simpleSubset = (sub, dom, options) => {
  if (sub === dom)
    return true

  if (sub.length === 1 && sub[0].semver === ANY) {
    if (dom.length === 1 && dom[0].semver === ANY)
      return true
    else if (options.includePrerelease)
      sub = [ new comparator('>=0.0.0-0') ];
    else
      sub = [ new comparator('>=0.0.0') ];
  }

  if (dom.length === 1 && dom[0].semver === ANY) {
    if (options.includePrerelease)
      return true
    else
      dom = [ new comparator('>=0.0.0') ];
  }

  const eqSet = new Set();
  let gt, lt;
  for (const c of sub) {
    if (c.operator === '>' || c.operator === '>=')
      gt = higherGT(gt, c, options);
    else if (c.operator === '<' || c.operator === '<=')
      lt = lowerLT(lt, c, options);
    else
      eqSet.add(c.semver);
  }

  if (eqSet.size > 1)
    return null

  let gtltComp;
  if (gt && lt) {
    gtltComp = compare_1(gt.semver, lt.semver, options);
    if (gtltComp > 0)
      return null
    else if (gtltComp === 0 && (gt.operator !== '>=' || lt.operator !== '<='))
      return null
  }

  // will iterate one or zero times
  for (const eq of eqSet) {
    if (gt && !satisfies_1(eq, String(gt), options))
      return null

    if (lt && !satisfies_1(eq, String(lt), options))
      return null

    for (const c of dom) {
      if (!satisfies_1(eq, String(c), options))
        return false
    }

    return true
  }

  let higher, lower;
  let hasDomLT, hasDomGT;
  // if the subset has a prerelease, we need a comparator in the superset
  // with the same tuple and a prerelease, or it's not a subset
  let needDomLTPre = lt &&
    !options.includePrerelease &&
    lt.semver.prerelease.length ? lt.semver : false;
  let needDomGTPre = gt &&
    !options.includePrerelease &&
    gt.semver.prerelease.length ? gt.semver : false;
  // exception: <1.2.3-0 is the same as <1.2.3
  if (needDomLTPre && needDomLTPre.prerelease.length === 1 &&
      lt.operator === '<' && needDomLTPre.prerelease[0] === 0) {
    needDomLTPre = false;
  }

  for (const c of dom) {
    hasDomGT = hasDomGT || c.operator === '>' || c.operator === '>=';
    hasDomLT = hasDomLT || c.operator === '<' || c.operator === '<=';
    if (gt) {
      if (needDomGTPre) {
        if (c.semver.prerelease && c.semver.prerelease.length &&
            c.semver.major === needDomGTPre.major &&
            c.semver.minor === needDomGTPre.minor &&
            c.semver.patch === needDomGTPre.patch) {
          needDomGTPre = false;
        }
      }
      if (c.operator === '>' || c.operator === '>=') {
        higher = higherGT(gt, c, options);
        if (higher === c && higher !== gt)
          return false
      } else if (gt.operator === '>=' && !satisfies_1(gt.semver, String(c), options))
        return false
    }
    if (lt) {
      if (needDomLTPre) {
        if (c.semver.prerelease && c.semver.prerelease.length &&
            c.semver.major === needDomLTPre.major &&
            c.semver.minor === needDomLTPre.minor &&
            c.semver.patch === needDomLTPre.patch) {
          needDomLTPre = false;
        }
      }
      if (c.operator === '<' || c.operator === '<=') {
        lower = lowerLT(lt, c, options);
        if (lower === c && lower !== lt)
          return false
      } else if (lt.operator === '<=' && !satisfies_1(lt.semver, String(c), options))
        return false
    }
    if (!c.operator && (lt || gt) && gtltComp !== 0)
      return false
  }

  // if there was a < or >, and nothing in the dom, then must be false
  // UNLESS it was limited by another range in the other direction.
  // Eg, >1.0.0 <1.0.1 is still a subset of <2.0.0
  if (gt && hasDomLT && !lt && gtltComp !== 0)
    return false

  if (lt && hasDomGT && !gt && gtltComp !== 0)
    return false

  // we needed a prerelease range in a specific tuple, but didn't get one
  // then this isn't a subset.  eg >=1.2.3-pre is not a subset of >=1.0.0,
  // because it includes prereleases in the 1.2.3 tuple
  if (needDomGTPre || needDomLTPre)
    return false

  return true
};

// >=1.2.3 is lower than >1.2.3
const higherGT = (a, b, options) => {
  if (!a)
    return b
  const comp = compare_1(a.semver, b.semver, options);
  return comp > 0 ? a
    : comp < 0 ? b
    : b.operator === '>' && a.operator === '>=' ? b
    : a
};

// <=1.2.3 is higher than <1.2.3
const lowerLT = (a, b, options) => {
  if (!a)
    return b
  const comp = compare_1(a.semver, b.semver, options);
  return comp < 0 ? a
    : comp > 0 ? b
    : b.operator === '<' && a.operator === '<=' ? b
    : a
};

var subset_1 = subset;

// just pre-load all the stuff that index.js lazily exports

var semver = {
  re: re_1.re,
  src: re_1.src,
  tokens: re_1.t,
  SEMVER_SPEC_VERSION: constants.SEMVER_SPEC_VERSION,
  SemVer: semver$1,
  compareIdentifiers: identifiers.compareIdentifiers,
  rcompareIdentifiers: identifiers.rcompareIdentifiers,
  parse: parse_1,
  valid: valid_1,
  clean: clean_1,
  inc: inc_1,
  diff: diff_1,
  major: major_1,
  minor: minor_1,
  patch: patch_1,
  prerelease: prerelease_1,
  compare: compare_1,
  rcompare: rcompare_1,
  compareLoose: compareLoose_1,
  compareBuild: compareBuild_1,
  sort: sort_1,
  rsort: rsort_1,
  gt: gt_1,
  lt: lt_1,
  eq: eq_1,
  neq: neq_1,
  gte: gte_1,
  lte: lte_1,
  cmp: cmp_1,
  coerce: coerce_1,
  Comparator: comparator,
  Range: range,
  satisfies: satisfies_1,
  toComparators: toComparators_1,
  maxSatisfying: maxSatisfying_1,
  minSatisfying: minSatisfying_1,
  minVersion: minVersion_1,
  validRange: valid,
  outside: outside_1,
  gtr: gtr_1,
  ltr: ltr_1,
  intersects: intersects_1,
  simplifyRange: simplify,
  subset: subset_1,
};

const ipxSetup = async (_providerOptions, moduleOptions, nuxt) => {
  const isStatic = nuxt.options.target === "static";
  const runtimeDir = upath.resolve(__dirname, "runtime");
  const ipxOptions = {
    dir: upath.resolve(nuxt.options.rootDir, moduleOptions.dir),
    domains: moduleOptions.domains,
    sharp: moduleOptions.sharp
  };
  const hasUserProvidedIPX = !!nuxt.options.serverMiddleware.find((mw) => mw.path && mw.path.startsWith("/_ipx"));
  if (!hasUserProvidedIPX) {
    const {createIPX, createIPXMiddleware} = await Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require('ipx')); });
    const ipx = createIPX(ipxOptions);
    nuxt.options.serverMiddleware.push({
      path: "/_ipx",
      handle: createIPXMiddleware(ipx)
    });
  }
  const installedInModules = nuxt.options.modules.some((mod) => typeof mod === "string" && mod.includes("@nuxt/image"));
  if (!isStatic && !hasUserProvidedIPX && !installedInModules && semver.lt(nuxt.constructor.version, "2.16.0")) {
    console.warn("[@nuxt/image] If you would like to use the `ipx` provider at runtime.\nMake sure to follow the instructions at https://image.nuxtjs.org/providers/ipx .");
  }
  if (nuxt.options.dev || hasUserProvidedIPX) {
    return;
  }
  nuxt.hook("build:done", async () => {
    const handler = await fsExtra.readFile(upath.resolve(runtimeDir, "ipx.js"), "utf-8");
    const distDir = upath.resolve(nuxt.options.buildDir, "dist");
    const apiDir = upath.resolve(distDir, "api");
    const apiFile = upath.resolve(apiDir, "ipx.js");
    const relativeApiFile = "~~/" + upath.relative(nuxt.options.rootDir, apiFile);
    await fsExtra.mkdirp(apiDir);
    await fsExtra.writeFile(apiFile, handler.replace(/.__IPX_OPTIONS__./, JSON.stringify(ipxOptions)));
    rc9.update({serverMiddleware: [{path: "/_ipx", handler: relativeApiFile}]}, {dir: distDir, name: "nuxtrc"});
  });
};

const BuiltInProviders = [
  "cloudinary",
  "fastly",
  "imagekit",
  "imgix",
  "ipx",
  "netlify",
  "prismic",
  "sanity",
  "static",
  "twicpics",
  "storyblok",
  "vercel"
];
const providerSetup = {
  ipx: ipxSetup,
  static: ipxSetup,
  async vercel(_providerOptions, moduleOptions, nuxt) {
    const imagesConfig = upath.resolve(nuxt.options.rootDir, ".vercel_build_output/config/images.json");
    await fsExtra.mkdirp(upath.dirname(imagesConfig));
    await fsExtra.writeJson(imagesConfig, {
      domains: moduleOptions.domains.map((domain) => ufo.parseURL(domain, "https://").host),
      sizes: Array.from(new Set(Object.values(moduleOptions.screens || {})))
    });
  }
};
function resolveProviders(nuxt, options) {
  const providers = [];
  for (const key in options) {
    if (BuiltInProviders.includes(key)) {
      providers.push(resolveProvider(nuxt, key, {provider: key, options: options[key]}));
    }
  }
  for (const key in options.providers) {
    providers.push(resolveProvider(nuxt, key, options.providers[key]));
  }
  return providers;
}
function resolveProvider(nuxt, key, input) {
  if (typeof input === "string") {
    input = {name: input};
  }
  if (!input.name) {
    input.name = key;
  }
  if (!input.provider) {
    input.provider = input.name;
  }
  input.provider = BuiltInProviders.includes(input.provider) ? require.resolve("./runtime/providers/" + input.provider) : nuxt.resolver.resolvePath(input.provider);
  const setup = input.setup || providerSetup[input.name];
  return {
    ...input,
    setup,
    runtime: upath.normalize(input.provider),
    importName: `${key}Runtime$${hash(input.provider, 4)}`,
    runtimeOptions: input.options
  };
}
function detectProvider(userInput, isStatic = false) {
  if (process.env.NUXT_IMAGE_PROVIDER) {
    return process.env.NUXT_IMAGE_PROVIDER;
  }
  if (userInput && userInput !== "auto") {
    return userInput;
  }
  if (process.env.VERCEL || process.env.VERCEL_ENV || process.env.NOW_BUILDER) {
    return "vercel";
  }
  return isStatic ? "static" : "ipx";
}

const imageModule = async function imageModule2(moduleOptions) {
  const {nuxt, addPlugin} = this;
  const defaults = {
    staticFilename: "[publicPath]/image/[hash][ext]",
    provider: "auto",
    presets: {},
    dir: upath.resolve(nuxt.options.srcDir, nuxt.options.dir.static),
    domains: [],
    sharp: {},
    screens: {
      xs: 320,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      xxl: 1536,
      "2xl": 1536
    },
    internalUrl: "",
    providers: {},
    static: {},
    excludeImages: () => new Promise((resolve2) => resolve2([]))
  };
  const options = defu__default['default'](moduleOptions, nuxt.options.image, defaults);
  options.provider = detectProvider(options.provider, nuxt.options.target === "static");
  options[options.provider] = options[options.provider] || {};
  const imageOptions = pick(options, [
    "screens",
    "presets",
    "provider",
    "densities"
  ]);
  options.static = options.static || {};
  options.static.domains = options.domains;
  const providers = resolveProviders(nuxt, options);
  for (const p of providers) {
    if (typeof p.setup === "function") {
      await p.setup(p, options, nuxt);
    }
  }
  const runtimeDir = upath.resolve(__dirname, "runtime");
  nuxt.options.alias["~image"] = runtimeDir;
  nuxt.options.build.transpile.push(runtimeDir, "@nuxt/image", "allowlist", "defu", "ufo");
  addPlugin({
    fileName: "image.js",
    src: upath.resolve(runtimeDir, "plugin.js"),
    options: {
      imageOptions,
      providers
    }
  });
  nuxt.options.build.loaders = defu__default['default']({
    vue: {transformAssetUrls: {"nuxt-img": "src", "nuxt-picture": "src", NuxtPicture: "src", NuxtImg: "src"}}
  }, nuxt.options.build.loaders || {});
  nuxt.hook("generate:before", () => {
    setupStaticGeneration(nuxt, options);
  });
  const LruCache = await Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require('lru-cache')); }).then((r) => r.default || r);
  const cache = new LruCache();
  nuxt.hook("vue-renderer:context", (ssrContext) => {
    ssrContext.cache = cache;
  });
  nuxt.hook("listen", (_, listener) => {
    options.internalUrl = `http://localhost:${listener.port}`;
  });
};
imageModule.meta = pkg;

module.exports = imageModule;
