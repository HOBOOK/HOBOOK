(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{833:function(e,t,n){var content=n(906);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(13).default)("46e26432",content,!0,{sourceMap:!1})},905:function(e,t,n){"use strict";n(833)},906:function(e,t,n){var o=n(12)((function(i){return i[1]}));o.push([e.i,".scene-container{height:100%;max-height:100%;overflow:hidden;position:relative;width:100%}.scene-container .space{aspect-ratio:9/16!important;height:100%;width:100%}.scene-container .space canvas{height:100%;width:100%}",""]),o.locals={},e.exports=o},926:function(e,t,n){"use strict";n.r(t);var o,r,c,l,d,h,m,f,v,w,y,M,x,C=n(613),T=n(215),k=n(272),E=n(264),S=n(612),j=(n(38),n(34),n(50),n(37),n(27),n(8),n(53),n(57),n(42),n(24)),D=(n(80),n(21),n(51),n(26),n(3),n(170),n(625)),P=n(815),O=n(901),L=n(825),R=n(826),A=n(836),B=n(827),$=n(917),_=n(902),z=n(903),H=n(832),I=n(904);function N(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"==typeof e)return W(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return W(e,t)}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var i=0,o=function(){};return{s:o,n:function(){return i>=e.length?{done:!0}:{done:!1,value:e[i++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,c=!0,l=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return c=e.done,e},e:function(e){l=!0,r=e},f:function(){try{c||null==n.return||n.return()}finally{if(l)throw r}}}}function W(e,t){(null==t||t>e.length)&&(t=e.length);for(var i=0,n=new Array(t);i<t;i++)n[i]=e[i];return n}Cache.enabled=!0;var F,U=[],V=[],J=0,G=new D.M,K=new A.a(G),X=new L.a(G),Z=new R.a(G);K.setTranscoderPath("/ktx2/"),Z.setDecoderPath("/draco/");var Y={name:"Scene",layout:"empty",props:{simple:Boolean,cameraDistance:{type:Number,default:25}},data:function(){return{}},mounted:function(){this.initConfiguration(),this.initScene(),window.addEventListener("resize",this.onWindowResize),window.addEventListener("keydown",this.keyEvent),window.addEventListener("keyup",this.keyupEvent)},beforeDestroy:function(){this.initializeResource(),window.removeEventListener("resize",this.onWindowResize),window.removeEventListener("keydown",this.keyEvent),window.addEventListener("keyup",this.keyupEvent)},computed:{},watch:{},methods:{initializeResource:function(){r&&(r=null),o&&(o=null),c&&(c.dispose(),c=null),M&&(M=null),v&&(v=null),this.cancelAllAnimationFrames()},initScene:function(){var e=this;return Object(j.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e.loading){t.next=2;break}return t.abrupt("return");case 2:console.log("[Scene] :: init scene"),e.loading=!0,e.initializeResource(),setTimeout(Object(j.a)(regeneratorRuntime.mark((function t(){var n,w,C,T,k,E,S,j,D;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(m=document.getElementsByClassName("space")[0]){for(;m.firstChild;)m.removeChild(m.firstChild);r=new Scene,new FogExp2(7829367,.005),(v=new Group).name="Environment",v.type="group",v.unselectable=!0,r.add(v),C=m.clientWidth,T=m.clientHeight,C/T,(c=window.renderer=new WebGLRenderer({alpha:!0,antialias:!0===(null===(n=e.$store.state.three)||void 0===n||null===(w=n.graphic)||void 0===w?void 0:w.antialias),powerPreference:"high-performance"})).setClearColor(16777215,0),c.setSize(C,T),c.setPixelRatio(window.devicePixelRatio),c.shadowMap.enabled=!0,c.shadowMap.soft=!0,c.shadowMap.type=PCFSoftShadowMap,c.toneMapping=ACESFilmicToneMapping,c.toneMappingExposure=1,c.domElement.addEventListener("mouseup",(function(t){e.$store.state.three.camera.target=l.target,e.$store.state.three.camera.matrix=l.object.matrixWorld.elements,e.$store.commit("setThree",e.$store.state.three)})),c.domElement.addEventListener("webglcontextlost",(function(t){e.$refs.warningDialog&&(e.$refs.warningDialog.dialog=!0)}),!1),m.appendChild(c.domElement),(f=new DirectionalLight(16777215,.3)).castShadow=!0,f.shadow.mapSize.x=512,f.shadow.mapSize.y=512,f.shadow.camera.top=100,f.shadow.camera.bottom=.01,f.shadow.camera.near=0,f.shadow.camera.far=1e3,f.shadow.mapSize.width=1024,f.shadow.mapSize.height=1024,f.shadow.bias=-1e-4,f.position.set(0,30,5),v.add(f),k=new AmbientLight(16777215,1),v.add(k),(E=new HemisphereLight(16777215,9276813,.5)).position.set(0,20,0),v.add(E),e.initCamera(),d=new Raycaster,h=new Vector2,M=new $.a(c),S=new z.a(r,o),M.addPass(S),x=new H.a(I.a),j=window.devicePixelRatio,C=Math.floor(m.clientWidth*j),T=Math.floor(m.clientHeight*j),x.material.uniforms.resolution.value.x=1/(C*j),x.material.uniforms.resolution.value.y=1/(T*j),M.addPass(x),(y=new _.a(new Vector2(m.clientWidth,m.clientHeight),r,o)).edgeStrength=20,y.visibleEdgeColor.set("#1E88E5"),M.addPass(y),weldingOutlinePass=new _.a(new Vector2(m.clientWidth,m.clientHeight),r,o),weldingOutlinePass.edgeStrength=20,weldingOutlinePass.visibleEdgeColor.set("#1E88E5"),M.addPass(weldingOutlinePass),K.detectSupport(c),X.setDRACOLoader(Z),X.setKTX2Loader(K),X.setMeshoptDecoder(B.a),J=0,D=function e(t){V.push(requestAnimationFrame(e)),(t*=.001)-J,J=t,l.update(),M.render()},e.renderSkybox(),D(),e.loading=!1}case 2:case"end":return t.stop()}}),t)}))),0);case 6:case"end":return t.stop()}}),t)})))()},scrollElementById:function(e){this.$nextTick((function(){var t=document.getElementById(e);t&&(t.scrollTop=t.scrollHeight)}))},focusCameraToObject:function(object){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:5;l.enabled=!1,object.updateMatrixWorld(!0);var t=(new Box3).setFromObject(object),n=new Vector3;t.getCenter(n),l.target.set(n.x,n.y,n.z);var r=(new Vector3).subVectors(new Vector3(this.cameraDistance,this.cameraDistance,this.cameraDistance),n);r.normalize().multiplyScalar(e);var c=(new Vector3).addVectors(n,r),d=0;!function animate(){d<1?(d+=.015,o.position.lerpVectors(o.position,c,d),requestAnimationFrame(animate)):l.enabled=!0}(),l.update()},initCamera:function(){var e,t,n,d,h,f,y=this,x=m.clientWidth/m.clientHeight;0===(null===(e=this.$store.state.three)||void 0===e||null===(t=e.camera)||void 0===t?void 0:t.projection)?(o=new PerspectiveCamera(144/Math.PI,x,.01,1e3)).position.set(this.cameraDistance,this.cameraDistance,this.cameraDistance):(o=new OrthographicCamera(-this.cameraDistance*x,this.cameraDistance*x,this.cameraDistance,-this.cameraDistance,.1,1e3)).position.set(10*this.cameraDistance,10*this.cameraDistance,10*this.cameraDistance),o.rotation.order="XYZ",o.rotation.y=-Math.PI/2,o.rotation.x=Math.atan(-1/Math.sqrt(2));var C=null===(n=this.$store.state.three)||void 0===n||null===(d=n.camera)||void 0===d?void 0:d.matrix;C&&16===C.length&&this.$threeUtils.setTransformFromMatrix(o,C),this.setCameraLayers(),(l=new P.a(o,c.domElement)).minZoom=.01,l.maxZoom=2,l.maxDistance=80,l.minDistance=1,l.minPolarAngle=Math.PI/5,l.maxPolarAngle=Math.PI/2,l.mouseButtons.LEFT=MOUSE.NONE,l.mouseButtons.MIDDLE=MOUSE.PAN,l.mouseButtons.RIGHT=MOUSE.ROTATE;var T=null===(h=this.$store.state.three)||void 0===h||null===(f=h.camera)||void 0===f?void 0:f.target;if(T&&l.target.copy(T),w&&r.remove(w),(w=new O.a(o,c.domElement)).name="TransformControls",w.type="TransformControls",w.unselectable=!0,w.addEventListener("change",(function(){y.$nextTick((function(){if(F&&F.limit&&F._jointType&&"fixed"!==F._jointType){var e="rotate"===y.transformMode?"rotation":"position",t=y.$threeUtils.getTransformAxis(F.axis),n=(F.origPosition[t],F.limit.min),o=F.limit.max;o<n?(F[e][t]=Math.max(F[e][t],o),F[e][t]=Math.min(F[e][t],n)):(F[e][t]=Math.max(F[e][t],n),F[e][t]=Math.min(F[e][t],o))}}))})),w.addEventListener("dragging-changed",(function(e){l.enabled=!e.value,e.value?y.transforming=!0:(F&&F.position&&y.saveTransform(F),y.$emit("update:transform",F),setTimeout((function(){y.transforming=!1}),500))})),v.add(w),M&&M.passes){M.passes[0].camera=o;var k,E=N(M.passes);try{for(E.s();!(k=E.n()).done;){var S=k.value;S.renderCamera&&(S.renderCamera=o)}}catch(e){E.e(e)}finally{E.f()}}},cancelAllAnimationFrames:function(){V.forEach((function(e){return cancelAnimationFrame(e)}))},keyupEvent:function(e){this.transforming&&(this.selectedModelDetailTransformKey++,this.transforming=!1)},keyEvent:function(e){if(this.preventSceneEvent)"Escape"===e.key&&this.disactiveAllPanel();else{if(e.keyCode>=48&&e.keyCode<58)if(e.altKey){if(F){var t=this.findObjectToParentByType(F,"URDFJoint");t&&(units[e.keyCode-48]=t)}}else units[e.keyCode-48]&&this.setModel(units[e.keyCode-48],!0);else 192===e.keyCode?this.toggleTransformMode():27===e.keyCode?this.unsetModel():70===e.keyCode&&F&&this.focusCameraToObject(F);"+"!==e.key&&"-"!==e.key||(this.transforming=!0,this.directTransforming(F,e.key),this.selectedModelDetail=this.$threeUtils.threeObjectToJson(F))}},onClick:function(e){var t=this;if(!(this.preventSceneEvent||this.transforming||this.selectedRobotDetail||0!==e.button)){e.preventDefault();var n=m.clientWidth,r=m.clientHeight;h.x=e.offsetX/n*2-1,h.y=-e.offsetY/r*2+1,d.setFromCamera(h,o),d.layers.enable(1);var c=d.intersectObjects(U),l=!1;0===this.clickCount?(this.clickCount=1,setTimeout((function(){t.clickCount=0}),200)):l=!0;for(var i=0;i<c.length;i++){var f=c[i].object;c[i].object.isMesh&&(f=c[i].object.parent);var v=void 0,w=f.modelType;l&&(v=this.findObjectToParentByType(c[i].object,w)),v||(v="robot"===w?this.findObjectToParentByType(c[i].object,"URDFJoint"):"asset"===w?this.findObjectToParentByType(c[i].object,w):f),this.setModel(v);break}}},onHover:function(e){this.sceneMouseHover=!0},onLeave:function(e){this.sceneMouseHover=!1},setModel:function(e){try{if(!e||e instanceof Scene||null!=e&&e.unselectable)return;if(this.selectedModelDetail&&e.id==this.selectedModelDetail.id)return void this.unsetModel();(F=e)&&(this.selectedModelDetail=this.$threeUtils.threeObjectToJson(F),this.setTransformControls(F),this.$emit("update:model",this.selectedModelDetail),this.setOutline())}catch(t){console.log("setModel :: 오류",t,e)}},unsetModel:function(){F&&(w.detach(F),F=null),this.removeSelectBox(),this.setOutline(),this.selectedModelDetail=null,this.selectedRobotDetail=null,this.$emit("update:model",null)},setOutline:function(){y.selectedObjects=[];var e=[];F&&e.push(F),y.selectedObjects=e},resizeScene:function(){if(!this.loading&&(m=document.getElementsByClassName("space")[0])){var e=m.clientWidth,t=m.clientHeight,n=e/t;o.aspect=n,o.updateProjectionMatrix(),c.setSize(e,t);var r=window.devicePixelRatio;e=Math.floor(m.clientWidth*r),t=Math.floor(m.clientHeight*r),x.material.uniforms.resolution.value.x=1/(e*r),x.material.uniforms.resolution.value.y=1/(t*r)}},onWindowResize:function(){this.resizeScene()},loadModel:function(e){var t=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"asset",o=arguments.length>2?arguments[2]:void 0,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1;return new Promise((function(c,l){var d=t.$axios.defaults.baseURL+"/resources";"/"!==e[0]&&(e="/"+e),X.load(d+e,(function(object){var e=object.scene||object.scenes[0];e.groupId=o,e.modelType=n,e.type=n,e.traverse((function(e){e.modelType=n,e.groupId,e.layers.set(r),e.isMesh&&(e.receiveShadow=!0)})),c(e)}),void 0,l)}))},renderSkybox:function(){var e=[],t=(new TextureLoader).load("https://cdn.vridgeai.com/resources/skybox/yonder_ft.jpg"),n=(new TextureLoader).load("https://cdn.vridgeai.com/resources/skybox/yonder_bk.jpg"),o=(new TextureLoader).load("https://cdn.vridgeai.com/resources/skybox/yonder_up.jpg"),r=(new TextureLoader).load("https://cdn.vridgeai.com/resources/skybox/yonder_dn.jpg"),c=(new TextureLoader).load("https://cdn.vridgeai.com/resources/skybox/yonder_rt.jpg"),l=(new TextureLoader).load("https://cdn.vridgeai.com/resources/skybox/yonder_lf.jpg");e.push(new MeshBasicMaterial({map:t})),e.push(new MeshBasicMaterial({map:n})),e.push(new MeshBasicMaterial({map:o})),e.push(new MeshBasicMaterial({map:r})),e.push(new MeshBasicMaterial({map:c})),e.push(new MeshBasicMaterial({map:l}));for(var i=0;i<6;i++)e[i].side=BackSide;var d=new BoxGeometry(500,500,500),h=new Mesh(d,e);h.type="skybox",h.layers.set(3),v.add(h);var m=(new TextureLoader).load(this.$axios.defaults.baseURL+"/resources/assets/texture/map.png");m.wrapS=m.wrapT=RepeatWrapping,m.repeat.set(1,1);var f=new PlaneGeometry(256,256),w=new MeshBasicMaterial({map:m,transparent:!0,opacity:1}),y=new Mesh(f,w);y.rotation.x=-Math.PI/2,y.receiveShadow=!0,y.position.y=-.1,y.type="ground",y.layers.set(3);var M=new CANNON.Body({mass:0,shape:new CANNON.Plane,material:new CANNON.Material({friction:.5,restitution:.7})});this.addPhysics(y,M),v.add(y)}}},Q=Y,ee=(n(905),n(31)),component=Object(ee.a)(Q,(function(){var e=this,t=e._self._c;return t("client-only",[t("div",{staticClass:"scene-container",on:{mouseover:e.onHover,mouseleave:e.onLeave}},[e.loading?t(k.a,{staticStyle:{"backdrop-filter":"blur(3px)"},attrs:{zIndex:"10000",opacity:.2,absolute:""}},[t(C.a,{attrs:{cols:"12"}},[t(S.a,{staticClass:"jumping",attrs:{"no-gutters":"",align:"center",justify:"center"}},[t(T.a,{staticClass:"rotating",attrs:{large:"",color:"#e0e2e7"}},[e._v("mdi-cube-outline")])],1),e._v(" "),t(E.a,{staticClass:"mb-2",attrs:{indeterminate:"",color:"#e0e2e7",reverse:""}}),e._v(" "),t("div",{},[e._v("\n                    "+e._s(e.$t("load_data_message"))+"\n                ")])],1)],1):e._e(),e._v(" "),t("div",{staticClass:"space",on:{mousedown:e.onClick}})],1)])}),[],!1,null,null,null);t.default=component.exports}}]);