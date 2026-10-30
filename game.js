(()=>{var $d=0,ac=1,Zd=2;var Su=0,Eu=1,Jd=2,Xi=3,xn=0,ti=1,ai=2,mn=0,ys=1,lc=2,hc=3,cc=4,Kd=5,Dn=100,jd=101,Qd=102,tf=103,ef=104,nf=200,sf=201,rf=202,of=203,tl=204,el=205,af=206,lf=207,hf=208,cf=209,uf=210,df=211,ff=212,pf=213,mf=214,il=0,nl=1,sl=2,bs=3,rl=4,ol=5,al=6,ll=7,Rh=0,gf=1,xf=2,gn=0,yf=1,vf=2,_f=3,Mf=4,bf=5,wf=6,Sf=7;var Tu=300,ws=301,Ss=302,hl=303,cl=304,Zo=306,ul=1e3,zn=1001,dl=1002,Ce=1003,Ef=1004;var Lr=1005;var pi=1006,xa=1007;var Un=1008;var Ji=1009,Au=1010,Ru=1011,lr=1012,Ch=1013,Nn=1014,Ui=1015,Vn=1016,Ph=1017,Ih=1018,Es=1020,Cu=35902,Pu=1021,Iu=1022,Ai=1023,Lu=1024,Du=1025,vs=1026,Ts=1027,Lh=1028,Dh=1029,ku=1030,kh=1031;var zh=1033,uo=33776,fo=33777,po=33778,mo=33779,fl=35840,pl=35841,ml=35842,gl=35843,xl=36196,yl=37492,vl=37496,_l=37808,Ml=37809,bl=37810,wl=37811,Sl=37812,El=37813,Tl=37814,Al=37815,Rl=37816,Cl=37817,Pl=37818,Il=37819,Ll=37820,Dl=37821,go=36492,kl=36494,zl=36495,zu=36283,Ul=36284,Nl=36285,Fl=36286;var xo=2300,Ol=2301,ya=2302,uc=2400,dc=2401,fc=2402;var Tf=3200,Af=3201;var Uu=0,Rf=1,fn="",Be="srgb",Ds="srgb-linear",Jo="linear",he="srgb";var Kn=7680;var pc=519,Cf=512,Pf=513,If=514,Nu=515,Lf=516,Df=517,kf=518,zf=519,Bl=35044,ks=35048;var mc="300 es",Yi=2e3,yo=2001,yn=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let i=this._listeners;return i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let n=this._listeners[t];if(n!==void 0){let r=n.indexOf(e);r!==-1&&n.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let i=this._listeners[t.type];if(i!==void 0){t.target=this;let n=i.slice(0);for(let r=0,o=n.length;r<o;r++)n[r].call(this,t);t.target=null}}},Ke=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var va=Math.PI/180,Hl=180/Math.PI;function $i(){let s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ke[s&255]+Ke[s>>8&255]+Ke[s>>16&255]+Ke[s>>24&255]+"-"+Ke[t&255]+Ke[t>>8&255]+"-"+Ke[t>>16&15|64]+Ke[t>>24&255]+"-"+Ke[e&63|128]+Ke[e>>8&255]+"-"+Ke[e>>16&255]+Ke[e>>24&255]+Ke[i&255]+Ke[i>>8&255]+Ke[i>>16&255]+Ke[i>>24&255]).toLowerCase()}function Qe(s,t,e){return Math.max(t,Math.min(e,s))}function Uf(s,t){return(s%t+t)%t}function _a(s,t,e){return(1-e)*s+e*t}function zi(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function ce(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}var ht=class s{constructor(t=0,e=0){s.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,i=this.y,n=t.elements;return this.x=n[0]*e+n[3]*i+n[6],this.y=n[1]*e+n[4]*i+n[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(Qe(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let i=Math.cos(e),n=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*i-o*n+t.x,this.y=r*n+o*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Ht=class s{constructor(t,e,i,n,r,o,a,l,h){s.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,n,r,o,a,l,h)}set(t,e,i,n,r,o,a,l,h){let c=this.elements;return c[0]=t,c[1]=n,c[2]=a,c[3]=e,c[4]=r,c[5]=l,c[6]=i,c[7]=o,c[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,n=e.elements,r=this.elements,o=i[0],a=i[3],l=i[6],h=i[1],c=i[4],u=i[7],d=i[2],f=i[5],g=i[8],x=n[0],m=n[3],p=n[6],w=n[1],_=n[4],y=n[7],R=n[2],A=n[5],C=n[8];return r[0]=o*x+a*w+l*R,r[3]=o*m+a*_+l*A,r[6]=o*p+a*y+l*C,r[1]=h*x+c*w+u*R,r[4]=h*m+c*_+u*A,r[7]=h*p+c*y+u*C,r[2]=d*x+f*w+g*R,r[5]=d*m+f*_+g*A,r[8]=d*p+f*y+g*C,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[1],n=t[2],r=t[3],o=t[4],a=t[5],l=t[6],h=t[7],c=t[8];return e*o*c-e*a*h-i*r*c+i*a*l+n*r*h-n*o*l}invert(){let t=this.elements,e=t[0],i=t[1],n=t[2],r=t[3],o=t[4],a=t[5],l=t[6],h=t[7],c=t[8],u=c*o-a*h,d=a*l-c*r,f=h*r-o*l,g=e*u+i*d+n*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/g;return t[0]=u*x,t[1]=(n*h-c*i)*x,t[2]=(a*i-n*o)*x,t[3]=d*x,t[4]=(c*e-n*l)*x,t[5]=(n*r-a*e)*x,t[6]=f*x,t[7]=(i*l-h*e)*x,t[8]=(o*e-i*r)*x,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,n,r,o,a){let l=Math.cos(r),h=Math.sin(r);return this.set(i*l,i*h,-i*(l*o+h*a)+o+t,-n*h,n*l,-n*(-h*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Ma.makeScale(t,e)),this}rotate(t){return this.premultiply(Ma.makeRotation(-t)),this}translate(t,e){return this.premultiply(Ma.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,i=t.elements;for(let n=0;n<9;n++)if(e[n]!==i[n])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Ma=new Ht;function Fu(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function vo(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Nf(){let s=vo("canvas");return s.style.display="block",s}var gc={};function ir(s){s in gc||(gc[s]=!0,console.warn(s))}function Ff(s,t,e){return new Promise(function(i,n){function r(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:n();break;case s.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:i()}}setTimeout(r,e)})}function Of(s){let t=s.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Bf(s){let t=s.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}var jt={enabled:!0,workingColorSpace:Ds,spaces:{},convert:function(s,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===he&&(s.r=Zi(s.r),s.g=Zi(s.g),s.b=Zi(s.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(s.applyMatrix3(this.spaces[t].toXYZ),s.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===he&&(s.r=_s(s.r),s.g=_s(s.g),s.b=_s(s.b))),s},fromWorkingColorSpace:function(s,t){return this.convert(s,this.workingColorSpace,t)},toWorkingColorSpace:function(s,t){return this.convert(s,t,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===fn?Jo:this.spaces[s].transfer},getLuminanceCoefficients:function(s,t=this.workingColorSpace){return s.fromArray(this.spaces[t].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,t,e){return s.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}};function Zi(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function _s(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}var xc=[.64,.33,.3,.6,.15,.06],yc=[.2126,.7152,.0722],vc=[.3127,.329],_c=new Ht().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Mc=new Ht().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);jt.define({[Ds]:{primaries:xc,whitePoint:vc,transfer:Jo,toXYZ:_c,fromXYZ:Mc,luminanceCoefficients:yc,workingColorSpaceConfig:{unpackColorSpace:Be},outputColorSpaceConfig:{drawingBufferColorSpace:Be}},[Be]:{primaries:xc,whitePoint:vc,transfer:he,toXYZ:_c,fromXYZ:Mc,luminanceCoefficients:yc,outputColorSpaceConfig:{drawingBufferColorSpace:Be}}});var jn,Vl=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{jn===void 0&&(jn=vo("canvas")),jn.width=t.width,jn.height=t.height;let i=jn.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),e=jn}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=vo("canvas");e.width=t.width,e.height=t.height;let i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);let n=i.getImageData(0,0,t.width,t.height),r=n.data;for(let o=0;o<r.length;o++)r[o]=Zi(r[o]/255)*255;return i.putImageData(n,0,0),e}else if(t.data){let e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(Zi(e[i]/255)*255):e[i]=Zi(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Hf=0,_o=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Hf++}),this.uuid=$i(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let i={uuid:this.uuid,url:""},n=this.data;if(n!==null){let r;if(Array.isArray(n)){r=[];for(let o=0,a=n.length;o<a;o++)n[o].isDataTexture?r.push(ba(n[o].image)):r.push(ba(n[o]))}else r=ba(n);i.url=r}return e||(t.images[this.uuid]=i),i}};function ba(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Vl.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Vf=0,li=class s extends yn{constructor(t=s.DEFAULT_IMAGE,e=s.DEFAULT_MAPPING,i=zn,n=zn,r=pi,o=Un,a=Ai,l=Ji,h=s.DEFAULT_ANISOTROPY,c=fn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Vf++}),this.uuid=$i(),this.name="",this.source=new _o(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=n,this.magFilter=r,this.minFilter=o,this.anisotropy=h,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ht(0,0),this.repeat=new ht(1,1),this.center=new ht(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ht,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=c,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Tu)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case ul:t.x=t.x-Math.floor(t.x);break;case zn:t.x=t.x<0?0:1;break;case dl:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case ul:t.y=t.y-Math.floor(t.y);break;case zn:t.y=t.y<0?0:1;break;case dl:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};li.DEFAULT_IMAGE=null;li.DEFAULT_MAPPING=Tu;li.DEFAULT_ANISOTROPY=1;var ue=class s{constructor(t=0,e=0,i=0,n=1){s.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=n}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,n){return this.x=t,this.y=e,this.z=i,this.w=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,i=this.y,n=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*i+o[8]*n+o[12]*r,this.y=o[1]*e+o[5]*i+o[9]*n+o[13]*r,this.z=o[2]*e+o[6]*i+o[10]*n+o[14]*r,this.w=o[3]*e+o[7]*i+o[11]*n+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,n,r,l=t.elements,h=l[0],c=l[4],u=l[8],d=l[1],f=l[5],g=l[9],x=l[2],m=l[6],p=l[10];if(Math.abs(c-d)<.01&&Math.abs(u-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(c+d)<.1&&Math.abs(u+x)<.1&&Math.abs(g+m)<.1&&Math.abs(h+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let _=(h+1)/2,y=(f+1)/2,R=(p+1)/2,A=(c+d)/4,C=(u+x)/4,L=(g+m)/4;return _>y&&_>R?_<.01?(i=0,n=.707106781,r=.707106781):(i=Math.sqrt(_),n=A/i,r=C/i):y>R?y<.01?(i=.707106781,n=0,r=.707106781):(n=Math.sqrt(y),i=A/n,r=L/n):R<.01?(i=.707106781,n=.707106781,r=0):(r=Math.sqrt(R),i=C/r,n=L/r),this.set(i,n,r,e),this}let w=Math.sqrt((m-g)*(m-g)+(u-x)*(u-x)+(d-c)*(d-c));return Math.abs(w)<.001&&(w=1),this.x=(m-g)/w,this.y=(u-x)/w,this.z=(d-c)/w,this.w=Math.acos((h+f+p-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Gl=class extends yn{constructor(t=1,e=1,i={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ue(0,0,t,e),this.scissorTest=!1,this.viewport=new ue(0,0,t,e);let n={width:t,height:e,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:pi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);let r=new li(n,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);r.flipY=!1,r.generateMipmaps=i.generateMipmaps,r.internalFormat=i.internalFormat,this.textures=[];let o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let n=0,r=this.textures.length;n<r;n++)this.textures[n].image.width=t,this.textures[n].image.height=e,this.textures[n].image.depth=i;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,n=t.textures.length;i<n;i++)this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new _o(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ri=class extends Gl{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}},Mo=class extends li{constructor(t=null,e=1,i=1,n=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:n},this.magFilter=Ce,this.minFilter=Ce,this.wrapR=zn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Wl=class extends li{constructor(t=null,e=1,i=1,n=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:n},this.magFilter=Ce,this.minFilter=Ce,this.wrapR=zn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var si=class{constructor(t=0,e=0,i=0,n=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=n}static slerpFlat(t,e,i,n,r,o,a){let l=i[n+0],h=i[n+1],c=i[n+2],u=i[n+3],d=r[o+0],f=r[o+1],g=r[o+2],x=r[o+3];if(a===0){t[e+0]=l,t[e+1]=h,t[e+2]=c,t[e+3]=u;return}if(a===1){t[e+0]=d,t[e+1]=f,t[e+2]=g,t[e+3]=x;return}if(u!==x||l!==d||h!==f||c!==g){let m=1-a,p=l*d+h*f+c*g+u*x,w=p>=0?1:-1,_=1-p*p;if(_>Number.EPSILON){let R=Math.sqrt(_),A=Math.atan2(R,p*w);m=Math.sin(m*A)/R,a=Math.sin(a*A)/R}let y=a*w;if(l=l*m+d*y,h=h*m+f*y,c=c*m+g*y,u=u*m+x*y,m===1-a){let R=1/Math.sqrt(l*l+h*h+c*c+u*u);l*=R,h*=R,c*=R,u*=R}}t[e]=l,t[e+1]=h,t[e+2]=c,t[e+3]=u}static multiplyQuaternionsFlat(t,e,i,n,r,o){let a=i[n],l=i[n+1],h=i[n+2],c=i[n+3],u=r[o],d=r[o+1],f=r[o+2],g=r[o+3];return t[e]=a*g+c*u+l*f-h*d,t[e+1]=l*g+c*d+h*u-a*f,t[e+2]=h*g+c*f+a*d-l*u,t[e+3]=c*g-a*u-l*d-h*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,n){return this._x=t,this._y=e,this._z=i,this._w=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let i=t._x,n=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,h=a(i/2),c=a(n/2),u=a(r/2),d=l(i/2),f=l(n/2),g=l(r/2);switch(o){case"XYZ":this._x=d*c*u+h*f*g,this._y=h*f*u-d*c*g,this._z=h*c*g+d*f*u,this._w=h*c*u-d*f*g;break;case"YXZ":this._x=d*c*u+h*f*g,this._y=h*f*u-d*c*g,this._z=h*c*g-d*f*u,this._w=h*c*u+d*f*g;break;case"ZXY":this._x=d*c*u-h*f*g,this._y=h*f*u+d*c*g,this._z=h*c*g+d*f*u,this._w=h*c*u-d*f*g;break;case"ZYX":this._x=d*c*u-h*f*g,this._y=h*f*u+d*c*g,this._z=h*c*g-d*f*u,this._w=h*c*u+d*f*g;break;case"YZX":this._x=d*c*u+h*f*g,this._y=h*f*u+d*c*g,this._z=h*c*g-d*f*u,this._w=h*c*u-d*f*g;break;case"XZY":this._x=d*c*u-h*f*g,this._y=h*f*u-d*c*g,this._z=h*c*g+d*f*u,this._w=h*c*u+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let i=e/2,n=Math.sin(i);return this._x=t.x*n,this._y=t.y*n,this._z=t.z*n,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,i=e[0],n=e[4],r=e[8],o=e[1],a=e[5],l=e[9],h=e[2],c=e[6],u=e[10],d=i+a+u;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(c-l)*f,this._y=(r-h)*f,this._z=(o-n)*f}else if(i>a&&i>u){let f=2*Math.sqrt(1+i-a-u);this._w=(c-l)/f,this._x=.25*f,this._y=(n+o)/f,this._z=(r+h)/f}else if(a>u){let f=2*Math.sqrt(1+a-i-u);this._w=(r-h)/f,this._x=(n+o)/f,this._y=.25*f,this._z=(l+c)/f}else{let f=2*Math.sqrt(1+u-i-a);this._w=(o-n)/f,this._x=(r+h)/f,this._y=(l+c)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Qe(this.dot(t),-1,1)))}rotateTowards(t,e){let i=this.angleTo(t);if(i===0)return this;let n=Math.min(1,e/i);return this.slerp(t,n),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let i=t._x,n=t._y,r=t._z,o=t._w,a=e._x,l=e._y,h=e._z,c=e._w;return this._x=i*c+o*a+n*h-r*l,this._y=n*c+o*l+r*a-i*h,this._z=r*c+o*h+i*l-n*a,this._w=o*c-i*a-n*l-r*h,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let i=this._x,n=this._y,r=this._z,o=this._w,a=o*t._w+i*t._x+n*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=i,this._y=n,this._z=r,this;let l=1-a*a;if(l<=Number.EPSILON){let f=1-e;return this._w=f*o+e*this._w,this._x=f*i+e*this._x,this._y=f*n+e*this._y,this._z=f*r+e*this._z,this.normalize(),this}let h=Math.sqrt(l),c=Math.atan2(h,a),u=Math.sin((1-e)*c)/h,d=Math.sin(e*c)/h;return this._w=o*u+this._w*d,this._x=i*u+this._x*d,this._y=n*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),n=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(n*Math.sin(t),n*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},v=class s{constructor(t=0,e=0,i=0){s.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(bc.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(bc.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,i=this.y,n=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*n,this.y=r[1]*e+r[4]*i+r[7]*n,this.z=r[2]*e+r[5]*i+r[8]*n,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,i=this.y,n=this.z,r=t.elements,o=1/(r[3]*e+r[7]*i+r[11]*n+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*n+r[12])*o,this.y=(r[1]*e+r[5]*i+r[9]*n+r[13])*o,this.z=(r[2]*e+r[6]*i+r[10]*n+r[14])*o,this}applyQuaternion(t){let e=this.x,i=this.y,n=this.z,r=t.x,o=t.y,a=t.z,l=t.w,h=2*(o*n-a*i),c=2*(a*e-r*n),u=2*(r*i-o*e);return this.x=e+l*h+o*u-a*c,this.y=i+l*c+a*h-r*u,this.z=n+l*u+r*c-o*h,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,i=this.y,n=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*n,this.y=r[1]*e+r[5]*i+r[9]*n,this.z=r[2]*e+r[6]*i+r[10]*n,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let i=t.x,n=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=n*l-r*a,this.y=r*o-i*l,this.z=i*a-n*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return wa.copy(this).projectOnVector(t),this.sub(wa)}reflect(t){return this.sub(wa.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(Qe(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y,n=this.z-t.z;return e*e+i*i+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){let n=Math.sin(e)*t;return this.x=n*Math.sin(i),this.y=Math.cos(e)*t,this.z=n*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),n=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=n,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},wa=new v,bc=new si,Ki=class{constructor(t=new v(1/0,1/0,1/0),e=new v(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(Si.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(Si.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let i=Si.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let i=t.geometry;if(i!==void 0){let r=i.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Si):Si.fromBufferAttribute(r,o),Si.applyMatrix4(t.matrixWorld),this.expandByPoint(Si);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Dr.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Dr.copy(i.boundingBox)),Dr.applyMatrix4(t.matrixWorld),this.union(Dr)}let n=t.children;for(let r=0,o=n.length;r<o;r++)this.expandByObject(n[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Si),Si.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Xs),kr.subVectors(this.max,Xs),Qn.subVectors(t.a,Xs),ts.subVectors(t.b,Xs),es.subVectors(t.c,Xs),an.subVectors(ts,Qn),ln.subVectors(es,ts),Tn.subVectors(Qn,es);let e=[0,-an.z,an.y,0,-ln.z,ln.y,0,-Tn.z,Tn.y,an.z,0,-an.x,ln.z,0,-ln.x,Tn.z,0,-Tn.x,-an.y,an.x,0,-ln.y,ln.x,0,-Tn.y,Tn.x,0];return!Sa(e,Qn,ts,es,kr)||(e=[1,0,0,0,1,0,0,0,1],!Sa(e,Qn,ts,es,kr))?!1:(zr.crossVectors(an,ln),e=[zr.x,zr.y,zr.z],Sa(e,Qn,ts,es,kr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Si).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Si).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Bi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Bi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Bi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Bi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Bi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Bi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Bi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Bi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Bi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},Bi=[new v,new v,new v,new v,new v,new v,new v,new v],Si=new v,Dr=new Ki,Qn=new v,ts=new v,es=new v,an=new v,ln=new v,Tn=new v,Xs=new v,kr=new v,zr=new v,An=new v;function Sa(s,t,e,i,n){for(let r=0,o=s.length-3;r<=o;r+=3){An.fromArray(s,r);let a=n.x*Math.abs(An.x)+n.y*Math.abs(An.y)+n.z*Math.abs(An.z),l=t.dot(An),h=e.dot(An),c=i.dot(An);if(Math.max(-Math.max(l,h,c),Math.min(l,h,c))>a)return!1}return!0}var Gf=new Ki,qs=new v,Ea=new v,ji=class{constructor(t=new v,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let i=this.center;e!==void 0?i.copy(e):Gf.setFromPoints(t).getCenter(i);let n=0;for(let r=0,o=t.length;r<o;r++)n=Math.max(n,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(n),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;qs.subVectors(t,this.center);let e=qs.lengthSq();if(e>this.radius*this.radius){let i=Math.sqrt(e),n=(i-this.radius)*.5;this.center.addScaledVector(qs,n/i),this.radius+=n}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Ea.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(qs.copy(t.center).add(Ea)),this.expandByPoint(qs.copy(t.center).sub(Ea))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},Hi=new v,Ta=new v,Ur=new v,hn=new v,Aa=new v,Nr=new v,Ra=new v,hr=class{constructor(t=new v,e=new v(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Hi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Hi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Hi.copy(this.origin).addScaledVector(this.direction,e),Hi.distanceToSquared(t))}distanceSqToSegment(t,e,i,n){Ta.copy(t).add(e).multiplyScalar(.5),Ur.copy(e).sub(t).normalize(),hn.copy(this.origin).sub(Ta);let r=t.distanceTo(e)*.5,o=-this.direction.dot(Ur),a=hn.dot(this.direction),l=-hn.dot(Ur),h=hn.lengthSq(),c=Math.abs(1-o*o),u,d,f,g;if(c>0)if(u=o*l-a,d=o*a-l,g=r*c,u>=0)if(d>=-g)if(d<=g){let x=1/c;u*=x,d*=x,f=u*(u+o*d+2*a)+d*(o*u+d+2*l)+h}else d=r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+h;else d=-r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+h;else d<=-g?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+h):d<=g?(u=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+h):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+h);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+h;return i&&i.copy(this.origin).addScaledVector(this.direction,u),n&&n.copy(Ta).addScaledVector(Ur,d),f}intersectSphere(t,e){Hi.subVectors(t.center,this.origin);let i=Hi.dot(this.direction),n=Hi.dot(Hi)-i*i,r=t.radius*t.radius;if(n>r)return null;let o=Math.sqrt(r-n),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){let i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,n,r,o,a,l,h=1/this.direction.x,c=1/this.direction.y,u=1/this.direction.z,d=this.origin;return h>=0?(i=(t.min.x-d.x)*h,n=(t.max.x-d.x)*h):(i=(t.max.x-d.x)*h,n=(t.min.x-d.x)*h),c>=0?(r=(t.min.y-d.y)*c,o=(t.max.y-d.y)*c):(r=(t.max.y-d.y)*c,o=(t.min.y-d.y)*c),i>o||r>n||((r>i||isNaN(i))&&(i=r),(o<n||isNaN(n))&&(n=o),u>=0?(a=(t.min.z-d.z)*u,l=(t.max.z-d.z)*u):(a=(t.max.z-d.z)*u,l=(t.min.z-d.z)*u),i>l||a>n)||((a>i||i!==i)&&(i=a),(l<n||n!==n)&&(n=l),n<0)?null:this.at(i>=0?i:n,e)}intersectsBox(t){return this.intersectBox(t,Hi)!==null}intersectTriangle(t,e,i,n,r){Aa.subVectors(e,t),Nr.subVectors(i,t),Ra.crossVectors(Aa,Nr);let o=this.direction.dot(Ra),a;if(o>0){if(n)return null;a=1}else if(o<0)a=-1,o=-o;else return null;hn.subVectors(this.origin,t);let l=a*this.direction.dot(Nr.crossVectors(hn,Nr));if(l<0)return null;let h=a*this.direction.dot(Aa.cross(hn));if(h<0||l+h>o)return null;let c=-a*hn.dot(Ra);return c<0?null:this.at(c/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Xt=class s{constructor(t,e,i,n,r,o,a,l,h,c,u,d,f,g,x,m){s.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,n,r,o,a,l,h,c,u,d,f,g,x,m)}set(t,e,i,n,r,o,a,l,h,c,u,d,f,g,x,m){let p=this.elements;return p[0]=t,p[4]=e,p[8]=i,p[12]=n,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=h,p[6]=c,p[10]=u,p[14]=d,p[3]=f,p[7]=g,p[11]=x,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new s().fromArray(this.elements)}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){let e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,i=t.elements,n=1/is.setFromMatrixColumn(t,0).length(),r=1/is.setFromMatrixColumn(t,1).length(),o=1/is.setFromMatrixColumn(t,2).length();return e[0]=i[0]*n,e[1]=i[1]*n,e[2]=i[2]*n,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*o,e[9]=i[9]*o,e[10]=i[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,i=t.x,n=t.y,r=t.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(n),h=Math.sin(n),c=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){let d=o*c,f=o*u,g=a*c,x=a*u;e[0]=l*c,e[4]=-l*u,e[8]=h,e[1]=f+g*h,e[5]=d-x*h,e[9]=-a*l,e[2]=x-d*h,e[6]=g+f*h,e[10]=o*l}else if(t.order==="YXZ"){let d=l*c,f=l*u,g=h*c,x=h*u;e[0]=d+x*a,e[4]=g*a-f,e[8]=o*h,e[1]=o*u,e[5]=o*c,e[9]=-a,e[2]=f*a-g,e[6]=x+d*a,e[10]=o*l}else if(t.order==="ZXY"){let d=l*c,f=l*u,g=h*c,x=h*u;e[0]=d-x*a,e[4]=-o*u,e[8]=g+f*a,e[1]=f+g*a,e[5]=o*c,e[9]=x-d*a,e[2]=-o*h,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){let d=o*c,f=o*u,g=a*c,x=a*u;e[0]=l*c,e[4]=g*h-f,e[8]=d*h+x,e[1]=l*u,e[5]=x*h+d,e[9]=f*h-g,e[2]=-h,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){let d=o*l,f=o*h,g=a*l,x=a*h;e[0]=l*c,e[4]=x-d*u,e[8]=g*u+f,e[1]=u,e[5]=o*c,e[9]=-a*c,e[2]=-h*c,e[6]=f*u+g,e[10]=d-x*u}else if(t.order==="XZY"){let d=o*l,f=o*h,g=a*l,x=a*h;e[0]=l*c,e[4]=-u,e[8]=h*c,e[1]=d*u+x,e[5]=o*c,e[9]=f*u-g,e[2]=g*u-f,e[6]=a*c,e[10]=x*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Wf,t,Xf)}lookAt(t,e,i){let n=this.elements;return di.subVectors(t,e),di.lengthSq()===0&&(di.z=1),di.normalize(),cn.crossVectors(i,di),cn.lengthSq()===0&&(Math.abs(i.z)===1?di.x+=1e-4:di.z+=1e-4,di.normalize(),cn.crossVectors(i,di)),cn.normalize(),Fr.crossVectors(di,cn),n[0]=cn.x,n[4]=Fr.x,n[8]=di.x,n[1]=cn.y,n[5]=Fr.y,n[9]=di.y,n[2]=cn.z,n[6]=Fr.z,n[10]=di.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,n=e.elements,r=this.elements,o=i[0],a=i[4],l=i[8],h=i[12],c=i[1],u=i[5],d=i[9],f=i[13],g=i[2],x=i[6],m=i[10],p=i[14],w=i[3],_=i[7],y=i[11],R=i[15],A=n[0],C=n[4],L=n[8],E=n[12],b=n[1],I=n[5],H=n[9],F=n[13],W=n[2],Y=n[6],O=n[10],Z=n[14],G=n[3],nt=n[7],rt=n[11],vt=n[15];return r[0]=o*A+a*b+l*W+h*G,r[4]=o*C+a*I+l*Y+h*nt,r[8]=o*L+a*H+l*O+h*rt,r[12]=o*E+a*F+l*Z+h*vt,r[1]=c*A+u*b+d*W+f*G,r[5]=c*C+u*I+d*Y+f*nt,r[9]=c*L+u*H+d*O+f*rt,r[13]=c*E+u*F+d*Z+f*vt,r[2]=g*A+x*b+m*W+p*G,r[6]=g*C+x*I+m*Y+p*nt,r[10]=g*L+x*H+m*O+p*rt,r[14]=g*E+x*F+m*Z+p*vt,r[3]=w*A+_*b+y*W+R*G,r[7]=w*C+_*I+y*Y+R*nt,r[11]=w*L+_*H+y*O+R*rt,r[15]=w*E+_*F+y*Z+R*vt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[4],n=t[8],r=t[12],o=t[1],a=t[5],l=t[9],h=t[13],c=t[2],u=t[6],d=t[10],f=t[14],g=t[3],x=t[7],m=t[11],p=t[15];return g*(+r*l*u-n*h*u-r*a*d+i*h*d+n*a*f-i*l*f)+x*(+e*l*f-e*h*d+r*o*d-n*o*f+n*h*c-r*l*c)+m*(+e*h*u-e*a*f-r*o*u+i*o*f+r*a*c-i*h*c)+p*(-n*a*c-e*l*u+e*a*d+n*o*u-i*o*d+i*l*c)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){let n=this.elements;return t.isVector3?(n[12]=t.x,n[13]=t.y,n[14]=t.z):(n[12]=t,n[13]=e,n[14]=i),this}invert(){let t=this.elements,e=t[0],i=t[1],n=t[2],r=t[3],o=t[4],a=t[5],l=t[6],h=t[7],c=t[8],u=t[9],d=t[10],f=t[11],g=t[12],x=t[13],m=t[14],p=t[15],w=u*m*h-x*d*h+x*l*f-a*m*f-u*l*p+a*d*p,_=g*d*h-c*m*h-g*l*f+o*m*f+c*l*p-o*d*p,y=c*x*h-g*u*h+g*a*f-o*x*f-c*a*p+o*u*p,R=g*u*l-c*x*l-g*a*d+o*x*d+c*a*m-o*u*m,A=e*w+i*_+n*y+r*R;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let C=1/A;return t[0]=w*C,t[1]=(x*d*r-u*m*r-x*n*f+i*m*f+u*n*p-i*d*p)*C,t[2]=(a*m*r-x*l*r+x*n*h-i*m*h-a*n*p+i*l*p)*C,t[3]=(u*l*r-a*d*r-u*n*h+i*d*h+a*n*f-i*l*f)*C,t[4]=_*C,t[5]=(c*m*r-g*d*r+g*n*f-e*m*f-c*n*p+e*d*p)*C,t[6]=(g*l*r-o*m*r-g*n*h+e*m*h+o*n*p-e*l*p)*C,t[7]=(o*d*r-c*l*r+c*n*h-e*d*h-o*n*f+e*l*f)*C,t[8]=y*C,t[9]=(g*u*r-c*x*r-g*i*f+e*x*f+c*i*p-e*u*p)*C,t[10]=(o*x*r-g*a*r+g*i*h-e*x*h-o*i*p+e*a*p)*C,t[11]=(c*a*r-o*u*r-c*i*h+e*u*h+o*i*f-e*a*f)*C,t[12]=R*C,t[13]=(c*x*n-g*u*n+g*i*d-e*x*d-c*i*m+e*u*m)*C,t[14]=(g*a*n-o*x*n-g*i*l+e*x*l+o*i*m-e*a*m)*C,t[15]=(o*u*n-c*a*n+c*i*l-e*u*l-o*i*d+e*a*d)*C,this}scale(t){let e=this.elements,i=t.x,n=t.y,r=t.z;return e[0]*=i,e[4]*=n,e[8]*=r,e[1]*=i,e[5]*=n,e[9]*=r,e[2]*=i,e[6]*=n,e[10]*=r,e[3]*=i,e[7]*=n,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],n=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,n))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let i=Math.cos(e),n=Math.sin(e),r=1-i,o=t.x,a=t.y,l=t.z,h=r*o,c=r*a;return this.set(h*o+i,h*a-n*l,h*l+n*a,0,h*a+n*l,c*a+i,c*l-n*o,0,h*l-n*a,c*l+n*o,r*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,n,r,o){return this.set(1,i,r,0,t,1,o,0,e,n,1,0,0,0,0,1),this}compose(t,e,i){let n=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,h=r+r,c=o+o,u=a+a,d=r*h,f=r*c,g=r*u,x=o*c,m=o*u,p=a*u,w=l*h,_=l*c,y=l*u,R=i.x,A=i.y,C=i.z;return n[0]=(1-(x+p))*R,n[1]=(f+y)*R,n[2]=(g-_)*R,n[3]=0,n[4]=(f-y)*A,n[5]=(1-(d+p))*A,n[6]=(m+w)*A,n[7]=0,n[8]=(g+_)*C,n[9]=(m-w)*C,n[10]=(1-(d+x))*C,n[11]=0,n[12]=t.x,n[13]=t.y,n[14]=t.z,n[15]=1,this}decompose(t,e,i){let n=this.elements,r=is.set(n[0],n[1],n[2]).length(),o=is.set(n[4],n[5],n[6]).length(),a=is.set(n[8],n[9],n[10]).length();this.determinant()<0&&(r=-r),t.x=n[12],t.y=n[13],t.z=n[14],Ei.copy(this);let h=1/r,c=1/o,u=1/a;return Ei.elements[0]*=h,Ei.elements[1]*=h,Ei.elements[2]*=h,Ei.elements[4]*=c,Ei.elements[5]*=c,Ei.elements[6]*=c,Ei.elements[8]*=u,Ei.elements[9]*=u,Ei.elements[10]*=u,e.setFromRotationMatrix(Ei),i.x=r,i.y=o,i.z=a,this}makePerspective(t,e,i,n,r,o,a=Yi){let l=this.elements,h=2*r/(e-t),c=2*r/(i-n),u=(e+t)/(e-t),d=(i+n)/(i-n),f,g;if(a===Yi)f=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===yo)f=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=h,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=c,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,i,n,r,o,a=Yi){let l=this.elements,h=1/(e-t),c=1/(i-n),u=1/(o-r),d=(e+t)*h,f=(i+n)*c,g,x;if(a===Yi)g=(o+r)*u,x=-2*u;else if(a===yo)g=r*u,x=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*h,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*c,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=x,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,i=t.elements;for(let n=0;n<16;n++)if(e[n]!==i[n])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}},is=new v,Ei=new Xt,Wf=new v(0,0,0),Xf=new v(1,1,1),cn=new v,Fr=new v,di=new v,wc=new Xt,Sc=new si,mi=class s{constructor(t=0,e=0,i=0,n=s.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=n}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,n=this._order){return this._x=t,this._y=e,this._z=i,this._order=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){let n=t.elements,r=n[0],o=n[4],a=n[8],l=n[1],h=n[5],c=n[9],u=n[2],d=n[6],f=n[10];switch(e){case"XYZ":this._y=Math.asin(Qe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-c,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,h),this._z=0);break;case"YXZ":this._x=Math.asin(-Qe(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,h)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Qe(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-o,h)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Qe(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,h));break;case"YZX":this._z=Math.asin(Qe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-c,h),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-Qe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,h),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-c,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return wc.makeRotationFromQuaternion(t),this.setFromRotationMatrix(wc,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Sc.setFromEuler(this),this.setFromQuaternion(Sc,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};mi.DEFAULT_ORDER="XYZ";var bo=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},qf=0,Ec=new v,ns=new si,Vi=new Xt,Or=new v,Ys=new v,Yf=new v,$f=new si,Tc=new v(1,0,0),Ac=new v(0,1,0),Rc=new v(0,0,1),Cc={type:"added"},Zf={type:"removed"},ss={type:"childadded",child:null},Ca={type:"childremoved",child:null},De=class s extends yn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:qf++}),this.uuid=$i(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=s.DEFAULT_UP.clone();let t=new v,e=new mi,i=new si,n=new v(1,1,1);function r(){i.setFromEuler(e,!1)}function o(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:n},modelViewMatrix:{value:new Xt},normalMatrix:{value:new Ht}}),this.matrix=new Xt,this.matrixWorld=new Xt,this.matrixAutoUpdate=s.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=s.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new bo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return ns.setFromAxisAngle(t,e),this.quaternion.multiply(ns),this}rotateOnWorldAxis(t,e){return ns.setFromAxisAngle(t,e),this.quaternion.premultiply(ns),this}rotateX(t){return this.rotateOnAxis(Tc,t)}rotateY(t){return this.rotateOnAxis(Ac,t)}rotateZ(t){return this.rotateOnAxis(Rc,t)}translateOnAxis(t,e){return Ec.copy(t).applyQuaternion(this.quaternion),this.position.add(Ec.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Tc,t)}translateY(t){return this.translateOnAxis(Ac,t)}translateZ(t){return this.translateOnAxis(Rc,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Vi.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?Or.copy(t):Or.set(t,e,i);let n=this.parent;this.updateWorldMatrix(!0,!1),Ys.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Vi.lookAt(Ys,Or,this.up):Vi.lookAt(Or,Ys,this.up),this.quaternion.setFromRotationMatrix(Vi),n&&(Vi.extractRotation(n.matrixWorld),ns.setFromRotationMatrix(Vi),this.quaternion.premultiply(ns.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Cc),ss.child=t,this.dispatchEvent(ss),ss.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Zf),Ca.child=t,this.dispatchEvent(Ca),Ca.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Vi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Vi.multiply(t.parent.matrixWorld)),t.applyMatrix4(Vi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Cc),ss.child=t,this.dispatchEvent(ss),ss.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,n=this.children.length;i<n;i++){let o=this.children[i].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);let n=this.children;for(let r=0,o=n.length;r<o;r++)n[r].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ys,t,Yf),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ys,$f,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let i=0,n=e.length;i<n;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let i=0,n=e.length;i<n;i++)e[i].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let i=0,n=e.length;i<n;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e){let i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let n=this.children;for(let r=0,o=n.length;r<o;r++)n[r].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let n={};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.castShadow===!0&&(n.castShadow=!0),this.receiveShadow===!0&&(n.receiveShadow=!0),this.visible===!1&&(n.visible=!1),this.frustumCulled===!1&&(n.frustumCulled=!1),this.renderOrder!==0&&(n.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(n.userData=this.userData),n.layers=this.layers.mask,n.matrix=this.matrix.toArray(),n.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(n.matrixAutoUpdate=!1),this.isInstancedMesh&&(n.type="InstancedMesh",n.count=this.count,n.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(n.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(n.type="BatchedMesh",n.perObjectFrustumCulled=this.perObjectFrustumCulled,n.sortObjects=this.sortObjects,n.drawRanges=this._drawRanges,n.reservedRanges=this._reservedRanges,n.visibility=this._visibility,n.active=this._active,n.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),n.maxInstanceCount=this._maxInstanceCount,n.maxVertexCount=this._maxVertexCount,n.maxIndexCount=this._maxIndexCount,n.geometryInitialized=this._geometryInitialized,n.geometryCount=this._geometryCount,n.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(n.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(n.boundingSphere={center:n.boundingSphere.center.toArray(),radius:n.boundingSphere.radius}),this.boundingBox!==null&&(n.boundingBox={min:n.boundingBox.min.toArray(),max:n.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?n.background=this.background.toJSON():this.background.isTexture&&(n.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(n.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){n.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let h=0,c=l.length;h<c;h++){let u=l[h];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(n.bindMode=this.bindMode,n.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),n.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,h=this.material.length;l<h;l++)a.push(r(t.materials,this.material[l]));n.material=a}else n.material=r(t.materials,this.material);if(this.children.length>0){n.children=[];for(let a=0;a<this.children.length;a++)n.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){n.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];n.animations.push(r(t.animations,l))}}if(e){let a=o(t.geometries),l=o(t.materials),h=o(t.textures),c=o(t.images),u=o(t.shapes),d=o(t.skeletons),f=o(t.animations),g=o(t.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),h.length>0&&(i.textures=h),c.length>0&&(i.images=c),u.length>0&&(i.shapes=u),d.length>0&&(i.skeletons=d),f.length>0&&(i.animations=f),g.length>0&&(i.nodes=g)}return i.object=n,i;function o(a){let l=[];for(let h in a){let c=a[h];delete c.metadata,l.push(c)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){let n=t.children[i];this.add(n.clone())}return this}};De.DEFAULT_UP=new v(0,1,0);De.DEFAULT_MATRIX_AUTO_UPDATE=!0;De.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Ti=new v,Gi=new v,Pa=new v,Wi=new v,rs=new v,os=new v,Pc=new v,Ia=new v,La=new v,Da=new v,ka=new ue,za=new ue,Ua=new ue,pn=class s{constructor(t=new v,e=new v,i=new v){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,n){n.subVectors(i,e),Ti.subVectors(t,e),n.cross(Ti);let r=n.lengthSq();return r>0?n.multiplyScalar(1/Math.sqrt(r)):n.set(0,0,0)}static getBarycoord(t,e,i,n,r){Ti.subVectors(n,e),Gi.subVectors(i,e),Pa.subVectors(t,e);let o=Ti.dot(Ti),a=Ti.dot(Gi),l=Ti.dot(Pa),h=Gi.dot(Gi),c=Gi.dot(Pa),u=o*h-a*a;if(u===0)return r.set(0,0,0),null;let d=1/u,f=(h*l-a*c)*d,g=(o*c-a*l)*d;return r.set(1-f-g,g,f)}static containsPoint(t,e,i,n){return this.getBarycoord(t,e,i,n,Wi)===null?!1:Wi.x>=0&&Wi.y>=0&&Wi.x+Wi.y<=1}static getInterpolation(t,e,i,n,r,o,a,l){return this.getBarycoord(t,e,i,n,Wi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Wi.x),l.addScaledVector(o,Wi.y),l.addScaledVector(a,Wi.z),l)}static getInterpolatedAttribute(t,e,i,n,r,o){return ka.setScalar(0),za.setScalar(0),Ua.setScalar(0),ka.fromBufferAttribute(t,e),za.fromBufferAttribute(t,i),Ua.fromBufferAttribute(t,n),o.setScalar(0),o.addScaledVector(ka,r.x),o.addScaledVector(za,r.y),o.addScaledVector(Ua,r.z),o}static isFrontFacing(t,e,i,n){return Ti.subVectors(i,e),Gi.subVectors(t,e),Ti.cross(Gi).dot(n)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,n){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[n]),this}setFromAttributeAndIndices(t,e,i,n){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,n),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ti.subVectors(this.c,this.b),Gi.subVectors(this.a,this.b),Ti.cross(Gi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return s.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return s.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,n,r){return s.getInterpolation(t,this.a,this.b,this.c,e,i,n,r)}containsPoint(t){return s.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return s.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let i=this.a,n=this.b,r=this.c,o,a;rs.subVectors(n,i),os.subVectors(r,i),Ia.subVectors(t,i);let l=rs.dot(Ia),h=os.dot(Ia);if(l<=0&&h<=0)return e.copy(i);La.subVectors(t,n);let c=rs.dot(La),u=os.dot(La);if(c>=0&&u<=c)return e.copy(n);let d=l*u-c*h;if(d<=0&&l>=0&&c<=0)return o=l/(l-c),e.copy(i).addScaledVector(rs,o);Da.subVectors(t,r);let f=rs.dot(Da),g=os.dot(Da);if(g>=0&&f<=g)return e.copy(r);let x=f*h-l*g;if(x<=0&&h>=0&&g<=0)return a=h/(h-g),e.copy(i).addScaledVector(os,a);let m=c*g-f*u;if(m<=0&&u-c>=0&&f-g>=0)return Pc.subVectors(r,n),a=(u-c)/(u-c+(f-g)),e.copy(n).addScaledVector(Pc,a);let p=1/(m+x+d);return o=x*p,a=d*p,e.copy(i).addScaledVector(rs,o).addScaledVector(os,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Ou={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},un={h:0,s:0,l:0},Br={h:0,s:0,l:0};function Na(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}var mt=class{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){let n=t;n&&n.isColor?this.copy(n):typeof n=="number"?this.setHex(n):typeof n=="string"&&this.setStyle(n)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Be){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,jt.toWorkingColorSpace(this,e),this}setRGB(t,e,i,n=jt.workingColorSpace){return this.r=t,this.g=e,this.b=i,jt.toWorkingColorSpace(this,n),this}setHSL(t,e,i,n=jt.workingColorSpace){if(t=Uf(t,1),e=Qe(e,0,1),i=Qe(i,0,1),e===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+e):i+e-i*e,o=2*i-r;this.r=Na(o,r,t+1/3),this.g=Na(o,r,t),this.b=Na(o,r,t-1/3)}return jt.toWorkingColorSpace(this,n),this}setStyle(t,e=Be){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let n;if(n=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=n[1],a=n[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(n=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=n[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Be){let i=Ou[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Zi(t.r),this.g=Zi(t.g),this.b=Zi(t.b),this}copyLinearToSRGB(t){return this.r=_s(t.r),this.g=_s(t.g),this.b=_s(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Be){return jt.fromWorkingColorSpace(je.copy(this),t),Math.round(Qe(je.r*255,0,255))*65536+Math.round(Qe(je.g*255,0,255))*256+Math.round(Qe(je.b*255,0,255))}getHexString(t=Be){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=jt.workingColorSpace){jt.fromWorkingColorSpace(je.copy(this),e);let i=je.r,n=je.g,r=je.b,o=Math.max(i,n,r),a=Math.min(i,n,r),l,h,c=(a+o)/2;if(a===o)l=0,h=0;else{let u=o-a;switch(h=c<=.5?u/(o+a):u/(2-o-a),o){case i:l=(n-r)/u+(n<r?6:0);break;case n:l=(r-i)/u+2;break;case r:l=(i-n)/u+4;break}l/=6}return t.h=l,t.s=h,t.l=c,t}getRGB(t,e=jt.workingColorSpace){return jt.fromWorkingColorSpace(je.copy(this),e),t.r=je.r,t.g=je.g,t.b=je.b,t}getStyle(t=Be){jt.fromWorkingColorSpace(je.copy(this),t);let e=je.r,i=je.g,n=je.b;return t!==Be?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${n.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(n*255)})`}offsetHSL(t,e,i){return this.getHSL(un),this.setHSL(un.h+t,un.s+e,un.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(un),t.getHSL(Br);let i=_a(un.h,Br.h,e),n=_a(un.s,Br.s,e),r=_a(un.l,Br.l,e);return this.setHSL(i,n,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,i=this.g,n=this.b,r=t.elements;return this.r=r[0]*e+r[3]*i+r[6]*n,this.g=r[1]*e+r[4]*i+r[7]*n,this.b=r[2]*e+r[5]*i+r[8]*n,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},je=new mt;mt.NAMES=Ou;var Jf=0,Ni=class extends yn{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Jf++}),this.uuid=$i(),this.name="",this.blending=ys,this.side=xn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=tl,this.blendDst=el,this.blendEquation=Dn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new mt(0,0,0),this.blendAlpha=0,this.depthFunc=bs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=pc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Kn,this.stencilZFail=Kn,this.stencilZPass=Kn,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let n=this[e];if(n===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}n&&n.isColor?n.set(i):n&&n.isVector3&&i&&i.isVector3?n.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==ys&&(i.blending=this.blending),this.side!==xn&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==tl&&(i.blendSrc=this.blendSrc),this.blendDst!==el&&(i.blendDst=this.blendDst),this.blendEquation!==Dn&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==bs&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==pc&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Kn&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Kn&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Kn&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function n(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(e){let r=n(t.textures),o=n(t.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,i=null;if(e!==null){let n=e.length;i=new Array(n);for(let r=0;r!==n;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},Qi=class extends Ni{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new mt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new mi,this.combine=Rh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var Ue=new v,Hr=new ht,Le=class{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=Bl,this.updateRanges=[],this.gpuType=Ui,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let n=0,r=this.itemSize;n<r;n++)this.array[t+n]=e.array[i+n];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)Hr.fromBufferAttribute(this,e),Hr.applyMatrix3(t),this.setXY(e,Hr.x,Hr.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)Ue.fromBufferAttribute(this,e),Ue.applyMatrix3(t),this.setXYZ(e,Ue.x,Ue.y,Ue.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)Ue.fromBufferAttribute(this,e),Ue.applyMatrix4(t),this.setXYZ(e,Ue.x,Ue.y,Ue.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Ue.fromBufferAttribute(this,e),Ue.applyNormalMatrix(t),this.setXYZ(e,Ue.x,Ue.y,Ue.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Ue.fromBufferAttribute(this,e),Ue.transformDirection(t),this.setXYZ(e,Ue.x,Ue.y,Ue.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=zi(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=ce(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=zi(e,this.array)),e}setX(t,e){return this.normalized&&(e=ce(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=zi(e,this.array)),e}setY(t,e){return this.normalized&&(e=ce(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=zi(e,this.array)),e}setZ(t,e){return this.normalized&&(e=ce(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=zi(e,this.array)),e}setW(t,e){return this.normalized&&(e=ce(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=ce(e,this.array),i=ce(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,n){return t*=this.itemSize,this.normalized&&(e=ce(e,this.array),i=ce(i,this.array),n=ce(n,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=n,this}setXYZW(t,e,i,n,r){return t*=this.itemSize,this.normalized&&(e=ce(e,this.array),i=ce(i,this.array),n=ce(n,this.array),r=ce(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=n,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Bl&&(t.usage=this.usage),t}};var wo=class extends Le{constructor(t,e,i){super(new Uint16Array(t),e,i)}};var So=class extends Le{constructor(t,e,i){super(new Uint32Array(t),e,i)}};var ae=class extends Le{constructor(t,e,i){super(new Float32Array(t),e,i)}},Kf=0,yi=new Xt,Fa=new De,as=new v,fi=new Ki,$s=new Ki,We=new v,Ee=class s extends yn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Kf++}),this.uuid=$i(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Fu(t)?So:wo)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new Ht().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}let n=this.attributes.tangent;return n!==void 0&&(n.transformDirection(t),n.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return yi.makeRotationFromQuaternion(t),this.applyMatrix4(yi),this}rotateX(t){return yi.makeRotationX(t),this.applyMatrix4(yi),this}rotateY(t){return yi.makeRotationY(t),this.applyMatrix4(yi),this}rotateZ(t){return yi.makeRotationZ(t),this.applyMatrix4(yi),this}translate(t,e,i){return yi.makeTranslation(t,e,i),this.applyMatrix4(yi),this}scale(t,e,i){return yi.makeScale(t,e,i),this.applyMatrix4(yi),this}lookAt(t){return Fa.lookAt(t),Fa.updateMatrix(),this.applyMatrix4(Fa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(as).negate(),this.translate(as.x,as.y,as.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let i=[];for(let n=0,r=t.length;n<r;n++){let o=t[n];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new ae(i,3))}else{for(let i=0,n=e.count;i<n;i++){let r=t[i];e.setXYZ(i,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ki);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new v(-1/0,-1/0,-1/0),new v(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,n=e.length;i<n;i++){let r=e[i];fi.setFromBufferAttribute(r),this.morphTargetsRelative?(We.addVectors(this.boundingBox.min,fi.min),this.boundingBox.expandByPoint(We),We.addVectors(this.boundingBox.max,fi.max),this.boundingBox.expandByPoint(We)):(this.boundingBox.expandByPoint(fi.min),this.boundingBox.expandByPoint(fi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ji);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new v,1/0);return}if(t){let i=this.boundingSphere.center;if(fi.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];$s.setFromBufferAttribute(a),this.morphTargetsRelative?(We.addVectors(fi.min,$s.min),fi.expandByPoint(We),We.addVectors(fi.max,$s.max),fi.expandByPoint(We)):(fi.expandByPoint($s.min),fi.expandByPoint($s.max))}fi.getCenter(i);let n=0;for(let r=0,o=t.count;r<o;r++)We.fromBufferAttribute(t,r),n=Math.max(n,i.distanceToSquared(We));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],l=this.morphTargetsRelative;for(let h=0,c=a.count;h<c;h++)We.fromBufferAttribute(a,h),l&&(as.fromBufferAttribute(t,h),We.add(as)),n=Math.max(n,i.distanceToSquared(We))}this.boundingSphere.radius=Math.sqrt(n),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=e.position,n=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Le(new Float32Array(4*i.count),4));let o=this.getAttribute("tangent"),a=[],l=[];for(let L=0;L<i.count;L++)a[L]=new v,l[L]=new v;let h=new v,c=new v,u=new v,d=new ht,f=new ht,g=new ht,x=new v,m=new v;function p(L,E,b){h.fromBufferAttribute(i,L),c.fromBufferAttribute(i,E),u.fromBufferAttribute(i,b),d.fromBufferAttribute(r,L),f.fromBufferAttribute(r,E),g.fromBufferAttribute(r,b),c.sub(h),u.sub(h),f.sub(d),g.sub(d);let I=1/(f.x*g.y-g.x*f.y);isFinite(I)&&(x.copy(c).multiplyScalar(g.y).addScaledVector(u,-f.y).multiplyScalar(I),m.copy(u).multiplyScalar(f.x).addScaledVector(c,-g.x).multiplyScalar(I),a[L].add(x),a[E].add(x),a[b].add(x),l[L].add(m),l[E].add(m),l[b].add(m))}let w=this.groups;w.length===0&&(w=[{start:0,count:t.count}]);for(let L=0,E=w.length;L<E;++L){let b=w[L],I=b.start,H=b.count;for(let F=I,W=I+H;F<W;F+=3)p(t.getX(F+0),t.getX(F+1),t.getX(F+2))}let _=new v,y=new v,R=new v,A=new v;function C(L){R.fromBufferAttribute(n,L),A.copy(R);let E=a[L];_.copy(E),_.sub(R.multiplyScalar(R.dot(E))).normalize(),y.crossVectors(A,E);let I=y.dot(l[L])<0?-1:1;o.setXYZW(L,_.x,_.y,_.z,I)}for(let L=0,E=w.length;L<E;++L){let b=w[L],I=b.start,H=b.count;for(let F=I,W=I+H;F<W;F+=3)C(t.getX(F+0)),C(t.getX(F+1)),C(t.getX(F+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Le(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let d=0,f=i.count;d<f;d++)i.setXYZ(d,0,0,0);let n=new v,r=new v,o=new v,a=new v,l=new v,h=new v,c=new v,u=new v;if(t)for(let d=0,f=t.count;d<f;d+=3){let g=t.getX(d+0),x=t.getX(d+1),m=t.getX(d+2);n.fromBufferAttribute(e,g),r.fromBufferAttribute(e,x),o.fromBufferAttribute(e,m),c.subVectors(o,r),u.subVectors(n,r),c.cross(u),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,x),h.fromBufferAttribute(i,m),a.add(c),l.add(c),h.add(c),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(m,h.x,h.y,h.z)}else for(let d=0,f=e.count;d<f;d+=3)n.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),c.subVectors(o,r),u.subVectors(n,r),c.cross(u),i.setXYZ(d+0,c.x,c.y,c.z),i.setXYZ(d+1,c.x,c.y,c.z),i.setXYZ(d+2,c.x,c.y,c.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)We.fromBufferAttribute(t,e),We.normalize(),t.setXYZ(e,We.x,We.y,We.z)}toNonIndexed(){function t(a,l){let h=a.array,c=a.itemSize,u=a.normalized,d=new h.constructor(l.length*c),f=0,g=0;for(let x=0,m=l.length;x<m;x++){a.isInterleavedBufferAttribute?f=l[x]*a.data.stride+a.offset:f=l[x]*c;for(let p=0;p<c;p++)d[g++]=h[f++]}return new Le(d,c,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new s,i=this.index.array,n=this.attributes;for(let a in n){let l=n[a],h=t(l,i);e.setAttribute(a,h)}let r=this.morphAttributes;for(let a in r){let l=[],h=r[a];for(let c=0,u=h.length;c<u;c++){let d=h[c],f=t(d,i);l.push(f)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let h=o[a];e.addGroup(h.start,h.count,h.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let h in l)l[h]!==void 0&&(t[h]=l[h]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let i=this.attributes;for(let l in i){let h=i[l];t.data.attributes[l]=h.toJSON(t.data)}let n={},r=!1;for(let l in this.morphAttributes){let h=this.morphAttributes[l],c=[];for(let u=0,d=h.length;u<d;u++){let f=h[u];c.push(f.toJSON(t.data))}c.length>0&&(n[l]=c,r=!0)}r&&(t.data.morphAttributes=n,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let i=t.index;i!==null&&this.setIndex(i.clone(e));let n=t.attributes;for(let h in n){let c=n[h];this.setAttribute(h,c.clone(e))}let r=t.morphAttributes;for(let h in r){let c=[],u=r[h];for(let d=0,f=u.length;d<f;d++)c.push(u[d].clone(e));this.morphAttributes[h]=c}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let h=0,c=o.length;h<c;h++){let u=o[h];this.addGroup(u.start,u.count,u.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ic=new Xt,Rn=new hr,Vr=new ji,Lc=new v,Gr=new v,Wr=new v,Xr=new v,Oa=new v,qr=new v,Dc=new v,Yr=new v,Nt=class extends De{constructor(t=new Ee,e=new Qi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let n=e[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=n.length;r<o;r++){let a=n[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let i=this.geometry,n=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;e.fromBufferAttribute(n,t);let a=this.morphTargetInfluences;if(r&&a){qr.set(0,0,0);for(let l=0,h=r.length;l<h;l++){let c=a[l],u=r[l];c!==0&&(Oa.fromBufferAttribute(u,t),o?qr.addScaledVector(Oa,c):qr.addScaledVector(Oa.sub(e),c))}e.add(qr)}return e}raycast(t,e){let i=this.geometry,n=this.material,r=this.matrixWorld;n!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Vr.copy(i.boundingSphere),Vr.applyMatrix4(r),Rn.copy(t.ray).recast(t.near),!(Vr.containsPoint(Rn.origin)===!1&&(Rn.intersectSphere(Vr,Lc)===null||Rn.origin.distanceToSquared(Lc)>(t.far-t.near)**2))&&(Ic.copy(r).invert(),Rn.copy(t.ray).applyMatrix4(Ic),!(i.boundingBox!==null&&Rn.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,Rn)))}_computeIntersections(t,e,i){let n,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,h=r.attributes.uv,c=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,x=d.length;g<x;g++){let m=d[g],p=o[m.materialIndex],w=Math.max(m.start,f.start),_=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let y=w,R=_;y<R;y+=3){let A=a.getX(y),C=a.getX(y+1),L=a.getX(y+2);n=$r(this,p,t,i,h,c,u,A,C,L),n&&(n.faceIndex=Math.floor(y/3),n.face.materialIndex=m.materialIndex,e.push(n))}}else{let g=Math.max(0,f.start),x=Math.min(a.count,f.start+f.count);for(let m=g,p=x;m<p;m+=3){let w=a.getX(m),_=a.getX(m+1),y=a.getX(m+2);n=$r(this,o,t,i,h,c,u,w,_,y),n&&(n.faceIndex=Math.floor(m/3),e.push(n))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,x=d.length;g<x;g++){let m=d[g],p=o[m.materialIndex],w=Math.max(m.start,f.start),_=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let y=w,R=_;y<R;y+=3){let A=y,C=y+1,L=y+2;n=$r(this,p,t,i,h,c,u,A,C,L),n&&(n.faceIndex=Math.floor(y/3),n.face.materialIndex=m.materialIndex,e.push(n))}}else{let g=Math.max(0,f.start),x=Math.min(l.count,f.start+f.count);for(let m=g,p=x;m<p;m+=3){let w=m,_=m+1,y=m+2;n=$r(this,o,t,i,h,c,u,w,_,y),n&&(n.faceIndex=Math.floor(m/3),e.push(n))}}}};function jf(s,t,e,i,n,r,o,a){let l;if(t.side===ti?l=i.intersectTriangle(o,r,n,!0,a):l=i.intersectTriangle(n,r,o,t.side===xn,a),l===null)return null;Yr.copy(a),Yr.applyMatrix4(s.matrixWorld);let h=e.ray.origin.distanceTo(Yr);return h<e.near||h>e.far?null:{distance:h,point:Yr.clone(),object:s}}function $r(s,t,e,i,n,r,o,a,l,h){s.getVertexPosition(a,Gr),s.getVertexPosition(l,Wr),s.getVertexPosition(h,Xr);let c=jf(s,t,e,i,Gr,Wr,Xr,Dc);if(c){let u=new v;pn.getBarycoord(Dc,Gr,Wr,Xr,u),n&&(c.uv=pn.getInterpolatedAttribute(n,a,l,h,u,new ht)),r&&(c.uv1=pn.getInterpolatedAttribute(r,a,l,h,u,new ht)),o&&(c.normal=pn.getInterpolatedAttribute(o,a,l,h,u,new v),c.normal.dot(i.direction)>0&&c.normal.multiplyScalar(-1));let d={a,b:l,c:h,normal:new v,materialIndex:0};pn.getNormal(Gr,Wr,Xr,d.normal),c.face=d,c.barycoord=u}return c}var Te=class s extends Ee{constructor(t=1,e=1,i=1,n=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:n,heightSegments:r,depthSegments:o};let a=this;n=Math.floor(n),r=Math.floor(r),o=Math.floor(o);let l=[],h=[],c=[],u=[],d=0,f=0;g("z","y","x",-1,-1,i,e,t,o,r,0),g("z","y","x",1,-1,i,e,-t,o,r,1),g("x","z","y",1,1,t,i,e,n,o,2),g("x","z","y",1,-1,t,i,-e,n,o,3),g("x","y","z",1,-1,t,e,i,n,r,4),g("x","y","z",-1,-1,t,e,-i,n,r,5),this.setIndex(l),this.setAttribute("position",new ae(h,3)),this.setAttribute("normal",new ae(c,3)),this.setAttribute("uv",new ae(u,2));function g(x,m,p,w,_,y,R,A,C,L,E){let b=y/C,I=R/L,H=y/2,F=R/2,W=A/2,Y=C+1,O=L+1,Z=0,G=0,nt=new v;for(let rt=0;rt<O;rt++){let vt=rt*I-F;for(let Ft=0;Ft<Y;Ft++){let te=Ft*b-H;nt[x]=te*w,nt[m]=vt*_,nt[p]=W,h.push(nt.x,nt.y,nt.z),nt[x]=0,nt[m]=0,nt[p]=A>0?1:-1,c.push(nt.x,nt.y,nt.z),u.push(Ft/C),u.push(1-rt/L),Z+=1}}for(let rt=0;rt<L;rt++)for(let vt=0;vt<C;vt++){let Ft=d+vt+Y*rt,te=d+vt+Y*(rt+1),q=d+(vt+1)+Y*(rt+1),st=d+(vt+1)+Y*rt;l.push(Ft,te,st),l.push(te,q,st),G+=6}a.addGroup(f,G,E),f+=G,d+=Z}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function As(s){let t={};for(let e in s){t[e]={};for(let i in s[e]){let n=s[e][i];n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)?n.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=n.clone():Array.isArray(n)?t[e][i]=n.slice():t[e][i]=n}}return t}function ni(s){let t={};for(let e=0;e<s.length;e++){let i=As(s[e]);for(let n in i)t[n]=i[n]}return t}function Qf(s){let t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function Bu(s){let t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:jt.workingColorSpace}var tp={clone:As,merge:ni},ep=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ip=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,He=class extends Ni{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ep,this.fragmentShader=ip,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=As(t.uniforms),this.uniformsGroups=Qf(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let n in this.uniforms){let o=this.uniforms[n].value;o&&o.isTexture?e.uniforms[n]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[n]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[n]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[n]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[n]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[n]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[n]={type:"m4",value:o.toArray()}:e.uniforms[n]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let i={};for(let n in this.extensions)this.extensions[n]===!0&&(i[n]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}},Eo=class extends De{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Xt,this.projectionMatrix=new Xt,this.projectionMatrixInverse=new Xt,this.coordinateSystem=Yi}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},dn=new v,kc=new ht,zc=new ht,Xe=class extends Eo{constructor(t=50,e=1,i=.1,n=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=n,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Hl*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(va*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Hl*2*Math.atan(Math.tan(va*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){dn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(dn.x,dn.y).multiplyScalar(-t/dn.z),dn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(dn.x,dn.y).multiplyScalar(-t/dn.z)}getViewSize(t,e){return this.getViewBounds(t,kc,zc),e.subVectors(zc,kc)}setViewOffset(t,e,i,n,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=n,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(va*.5*this.fov)/this.zoom,i=2*e,n=this.aspect*i,r=-.5*n,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,h=o.fullHeight;r+=o.offsetX*n/l,e-=o.offsetY*i/h,n*=o.width/l,i*=o.height/h}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+n,e,e-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},ls=-90,hs=1,Xl=class extends De{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let n=new Xe(ls,hs,t,e);n.layers=this.layers,this.add(n);let r=new Xe(ls,hs,t,e);r.layers=this.layers,this.add(r);let o=new Xe(ls,hs,t,e);o.layers=this.layers,this.add(o);let a=new Xe(ls,hs,t,e);a.layers=this.layers,this.add(a);let l=new Xe(ls,hs,t,e);l.layers=this.layers,this.add(l);let h=new Xe(ls,hs,t,e);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[i,n,r,o,a,l]=e;for(let h of e)this.remove(h);if(t===Yi)i.up.set(0,1,0),i.lookAt(1,0,0),n.up.set(0,1,0),n.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===yo)i.up.set(0,-1,0),i.lookAt(-1,0,0),n.up.set(0,-1,0),n.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let h of e)this.add(h),h.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:n}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,h,c]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,n),t.render(e,r),t.setRenderTarget(i,1,n),t.render(e,o),t.setRenderTarget(i,2,n),t.render(e,a),t.setRenderTarget(i,3,n),t.render(e,l),t.setRenderTarget(i,4,n),t.render(e,h),i.texture.generateMipmaps=x,t.setRenderTarget(i,5,n),t.render(e,c),t.setRenderTarget(u,d,f),t.xr.enabled=g,i.texture.needsPMREMUpdate=!0}},To=class extends li{constructor(t,e,i,n,r,o,a,l,h,c){t=t!==void 0?t:[],e=e!==void 0?e:ws,super(t,e,i,n,r,o,a,l,h,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},ql=class extends Ri{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let i={width:t,height:t,depth:1},n=[i,i,i,i,i,i];this.texture=new To(n,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:pi}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},n=new Te(5,5,5),r=new He({name:"CubemapFromEquirect",uniforms:As(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:ti,blending:mn});r.uniforms.tEquirect.value=e;let o=new Nt(n,r),a=e.minFilter;return e.minFilter===Un&&(e.minFilter=pi),new Xl(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,i,n){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,i,n);t.setRenderTarget(r)}},Ba=new v,np=new v,sp=new Ht,qi=class{constructor(t=new v(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,n){return this.normal.set(t,e,i),this.constant=n,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){let n=Ba.subVectors(i,e).cross(np.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(n,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let i=t.delta(Ba),n=this.normal.dot(i);if(n===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/n;return r<0||r>1?null:e.copy(t.start).addScaledVector(i,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let i=e||sp.getNormalMatrix(t),n=this.coplanarPoint(Ba).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-n.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},Cn=new ji,Zr=new v,cr=class{constructor(t=new qi,e=new qi,i=new qi,n=new qi,r=new qi,o=new qi){this.planes=[t,e,i,n,r,o]}set(t,e,i,n,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(i),a[3].copy(n),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=Yi){let i=this.planes,n=t.elements,r=n[0],o=n[1],a=n[2],l=n[3],h=n[4],c=n[5],u=n[6],d=n[7],f=n[8],g=n[9],x=n[10],m=n[11],p=n[12],w=n[13],_=n[14],y=n[15];if(i[0].setComponents(l-r,d-h,m-f,y-p).normalize(),i[1].setComponents(l+r,d+h,m+f,y+p).normalize(),i[2].setComponents(l+o,d+c,m+g,y+w).normalize(),i[3].setComponents(l-o,d-c,m-g,y-w).normalize(),i[4].setComponents(l-a,d-u,m-x,y-_).normalize(),e===Yi)i[5].setComponents(l+a,d+u,m+x,y+_).normalize();else if(e===yo)i[5].setComponents(a,u,x,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Cn.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Cn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Cn)}intersectsSprite(t){return Cn.center.set(0,0,0),Cn.radius=.7071067811865476,Cn.applyMatrix4(t.matrixWorld),this.intersectsSphere(Cn)}intersectsSphere(t){let e=this.planes,i=t.center,n=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<n)return!1;return!0}intersectsBox(t){let e=this.planes;for(let i=0;i<6;i++){let n=e[i];if(Zr.x=n.normal.x>0?t.max.x:t.min.x,Zr.y=n.normal.y>0?t.max.y:t.min.y,Zr.z=n.normal.z>0?t.max.z:t.min.z,n.distanceToPoint(Zr)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Hu(){let s=null,t=!1,e=null,i=null;function n(r,o){e(r,o),i=s.requestAnimationFrame(n)}return{start:function(){t!==!0&&e!==null&&(i=s.requestAnimationFrame(n),t=!0)},stop:function(){s.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){s=r}}}function rp(s){let t=new WeakMap;function e(a,l){let h=a.array,c=a.usage,u=h.byteLength,d=s.createBuffer();s.bindBuffer(l,d),s.bufferData(l,h,c),a.onUploadCallback();let f;if(h instanceof Float32Array)f=s.FLOAT;else if(h instanceof Uint16Array)a.isFloat16BufferAttribute?f=s.HALF_FLOAT:f=s.UNSIGNED_SHORT;else if(h instanceof Int16Array)f=s.SHORT;else if(h instanceof Uint32Array)f=s.UNSIGNED_INT;else if(h instanceof Int32Array)f=s.INT;else if(h instanceof Int8Array)f=s.BYTE;else if(h instanceof Uint8Array)f=s.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)f=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:d,type:f,bytesPerElement:h.BYTES_PER_ELEMENT,version:a.version,size:u}}function i(a,l,h){let c=l.array,u=l.updateRanges;if(s.bindBuffer(h,a),u.length===0)s.bufferSubData(h,0,c);else{u.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<u.length;f++){let g=u[d],x=u[f];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++d,u[d]=x)}u.length=d+1;for(let f=0,g=u.length;f<g;f++){let x=u[f];s.bufferSubData(h,x.start*c.BYTES_PER_ELEMENT,c,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function n(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=t.get(a);l&&(s.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let c=t.get(a);(!c||c.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let h=t.get(a);if(h===void 0)t.set(a,e(a,l));else if(h.version<a.version){if(h.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(h.buffer,a,l),h.version=a.version}}return{get:n,remove:r,update:o}}var Ci=class s extends Ee{constructor(t=1,e=1,i=1,n=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:n};let r=t/2,o=e/2,a=Math.floor(i),l=Math.floor(n),h=a+1,c=l+1,u=t/a,d=e/l,f=[],g=[],x=[],m=[];for(let p=0;p<c;p++){let w=p*d-o;for(let _=0;_<h;_++){let y=_*u-r;g.push(y,-w,0),x.push(0,0,1),m.push(_/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let w=0;w<a;w++){let _=w+h*p,y=w+h*(p+1),R=w+1+h*(p+1),A=w+1+h*p;f.push(_,y,A),f.push(y,R,A)}this.setIndex(f),this.setAttribute("position",new ae(g,3)),this.setAttribute("normal",new ae(x,3)),this.setAttribute("uv",new ae(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.width,t.height,t.widthSegments,t.heightSegments)}},op=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,ap=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,lp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,hp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,cp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,up=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,dp=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,fp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,pp=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,mp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,gp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,xp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,yp=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,vp=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,_p=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Mp=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,bp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,wp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Sp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Ep=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Tp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Ap=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Rp=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Cp=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Pp=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Ip=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Lp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Dp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,kp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,zp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Up="gl_FragColor = linearToOutputTexel( gl_FragColor );",Np=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Fp=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Op=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Bp=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Hp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Vp=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Gp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Wp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Xp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,qp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Yp=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,$p=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Zp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Jp=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Kp=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,jp=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Qp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,tm=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,em=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,im=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,nm=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,sm=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,rm=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,om=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,am=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,lm=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,hm=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,cm=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,um=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,dm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,fm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,pm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,mm=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,gm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,xm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ym=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,vm=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,_m=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Mm=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,bm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,wm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Sm=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Em=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Tm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Am=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Rm=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Cm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Pm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Im=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Lm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Dm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,km=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,zm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Um=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Nm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Fm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Om=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Bm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Hm=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Vm=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Gm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Wm=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Xm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,qm=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Ym=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,$m=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Zm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Jm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Km=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,jm=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Qm=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,t0=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,e0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,i0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,n0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,s0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,r0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,o0=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,a0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,l0=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,h0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,c0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,u0=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,d0=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,f0=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,p0=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,m0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,g0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,x0=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,y0=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,v0=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,_0=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,M0=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,b0=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,w0=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,S0=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,E0=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,T0=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,A0=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,R0=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,C0=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,P0=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,I0=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,L0=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,D0=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,k0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,z0=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,U0=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,N0=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,F0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Gt={alphahash_fragment:op,alphahash_pars_fragment:ap,alphamap_fragment:lp,alphamap_pars_fragment:hp,alphatest_fragment:cp,alphatest_pars_fragment:up,aomap_fragment:dp,aomap_pars_fragment:fp,batching_pars_vertex:pp,batching_vertex:mp,begin_vertex:gp,beginnormal_vertex:xp,bsdfs:yp,iridescence_fragment:vp,bumpmap_pars_fragment:_p,clipping_planes_fragment:Mp,clipping_planes_pars_fragment:bp,clipping_planes_pars_vertex:wp,clipping_planes_vertex:Sp,color_fragment:Ep,color_pars_fragment:Tp,color_pars_vertex:Ap,color_vertex:Rp,common:Cp,cube_uv_reflection_fragment:Pp,defaultnormal_vertex:Ip,displacementmap_pars_vertex:Lp,displacementmap_vertex:Dp,emissivemap_fragment:kp,emissivemap_pars_fragment:zp,colorspace_fragment:Up,colorspace_pars_fragment:Np,envmap_fragment:Fp,envmap_common_pars_fragment:Op,envmap_pars_fragment:Bp,envmap_pars_vertex:Hp,envmap_physical_pars_fragment:jp,envmap_vertex:Vp,fog_vertex:Gp,fog_pars_vertex:Wp,fog_fragment:Xp,fog_pars_fragment:qp,gradientmap_pars_fragment:Yp,lightmap_pars_fragment:$p,lights_lambert_fragment:Zp,lights_lambert_pars_fragment:Jp,lights_pars_begin:Kp,lights_toon_fragment:Qp,lights_toon_pars_fragment:tm,lights_phong_fragment:em,lights_phong_pars_fragment:im,lights_physical_fragment:nm,lights_physical_pars_fragment:sm,lights_fragment_begin:rm,lights_fragment_maps:om,lights_fragment_end:am,logdepthbuf_fragment:lm,logdepthbuf_pars_fragment:hm,logdepthbuf_pars_vertex:cm,logdepthbuf_vertex:um,map_fragment:dm,map_pars_fragment:fm,map_particle_fragment:pm,map_particle_pars_fragment:mm,metalnessmap_fragment:gm,metalnessmap_pars_fragment:xm,morphinstance_vertex:ym,morphcolor_vertex:vm,morphnormal_vertex:_m,morphtarget_pars_vertex:Mm,morphtarget_vertex:bm,normal_fragment_begin:wm,normal_fragment_maps:Sm,normal_pars_fragment:Em,normal_pars_vertex:Tm,normal_vertex:Am,normalmap_pars_fragment:Rm,clearcoat_normal_fragment_begin:Cm,clearcoat_normal_fragment_maps:Pm,clearcoat_pars_fragment:Im,iridescence_pars_fragment:Lm,opaque_fragment:Dm,packing:km,premultiplied_alpha_fragment:zm,project_vertex:Um,dithering_fragment:Nm,dithering_pars_fragment:Fm,roughnessmap_fragment:Om,roughnessmap_pars_fragment:Bm,shadowmap_pars_fragment:Hm,shadowmap_pars_vertex:Vm,shadowmap_vertex:Gm,shadowmask_pars_fragment:Wm,skinbase_vertex:Xm,skinning_pars_vertex:qm,skinning_vertex:Ym,skinnormal_vertex:$m,specularmap_fragment:Zm,specularmap_pars_fragment:Jm,tonemapping_fragment:Km,tonemapping_pars_fragment:jm,transmission_fragment:Qm,transmission_pars_fragment:t0,uv_pars_fragment:e0,uv_pars_vertex:i0,uv_vertex:n0,worldpos_vertex:s0,background_vert:r0,background_frag:o0,backgroundCube_vert:a0,backgroundCube_frag:l0,cube_vert:h0,cube_frag:c0,depth_vert:u0,depth_frag:d0,distanceRGBA_vert:f0,distanceRGBA_frag:p0,equirect_vert:m0,equirect_frag:g0,linedashed_vert:x0,linedashed_frag:y0,meshbasic_vert:v0,meshbasic_frag:_0,meshlambert_vert:M0,meshlambert_frag:b0,meshmatcap_vert:w0,meshmatcap_frag:S0,meshnormal_vert:E0,meshnormal_frag:T0,meshphong_vert:A0,meshphong_frag:R0,meshphysical_vert:C0,meshphysical_frag:P0,meshtoon_vert:I0,meshtoon_frag:L0,points_vert:D0,points_frag:k0,shadow_vert:z0,shadow_frag:U0,sprite_vert:N0,sprite_frag:F0},at={common:{diffuse:{value:new mt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ht},alphaMap:{value:null},alphaMapTransform:{value:new Ht},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ht}},envmap:{envMap:{value:null},envMapRotation:{value:new Ht},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ht}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ht}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ht},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ht},normalScale:{value:new ht(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ht},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ht}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ht}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ht}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new mt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new mt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ht},alphaTest:{value:0},uvTransform:{value:new Ht}},sprite:{diffuse:{value:new mt(16777215)},opacity:{value:1},center:{value:new ht(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ht},alphaMap:{value:null},alphaMapTransform:{value:new Ht},alphaTest:{value:0}}},ki={basic:{uniforms:ni([at.common,at.specularmap,at.envmap,at.aomap,at.lightmap,at.fog]),vertexShader:Gt.meshbasic_vert,fragmentShader:Gt.meshbasic_frag},lambert:{uniforms:ni([at.common,at.specularmap,at.envmap,at.aomap,at.lightmap,at.emissivemap,at.bumpmap,at.normalmap,at.displacementmap,at.fog,at.lights,{emissive:{value:new mt(0)}}]),vertexShader:Gt.meshlambert_vert,fragmentShader:Gt.meshlambert_frag},phong:{uniforms:ni([at.common,at.specularmap,at.envmap,at.aomap,at.lightmap,at.emissivemap,at.bumpmap,at.normalmap,at.displacementmap,at.fog,at.lights,{emissive:{value:new mt(0)},specular:{value:new mt(1118481)},shininess:{value:30}}]),vertexShader:Gt.meshphong_vert,fragmentShader:Gt.meshphong_frag},standard:{uniforms:ni([at.common,at.envmap,at.aomap,at.lightmap,at.emissivemap,at.bumpmap,at.normalmap,at.displacementmap,at.roughnessmap,at.metalnessmap,at.fog,at.lights,{emissive:{value:new mt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Gt.meshphysical_vert,fragmentShader:Gt.meshphysical_frag},toon:{uniforms:ni([at.common,at.aomap,at.lightmap,at.emissivemap,at.bumpmap,at.normalmap,at.displacementmap,at.gradientmap,at.fog,at.lights,{emissive:{value:new mt(0)}}]),vertexShader:Gt.meshtoon_vert,fragmentShader:Gt.meshtoon_frag},matcap:{uniforms:ni([at.common,at.bumpmap,at.normalmap,at.displacementmap,at.fog,{matcap:{value:null}}]),vertexShader:Gt.meshmatcap_vert,fragmentShader:Gt.meshmatcap_frag},points:{uniforms:ni([at.points,at.fog]),vertexShader:Gt.points_vert,fragmentShader:Gt.points_frag},dashed:{uniforms:ni([at.common,at.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Gt.linedashed_vert,fragmentShader:Gt.linedashed_frag},depth:{uniforms:ni([at.common,at.displacementmap]),vertexShader:Gt.depth_vert,fragmentShader:Gt.depth_frag},normal:{uniforms:ni([at.common,at.bumpmap,at.normalmap,at.displacementmap,{opacity:{value:1}}]),vertexShader:Gt.meshnormal_vert,fragmentShader:Gt.meshnormal_frag},sprite:{uniforms:ni([at.sprite,at.fog]),vertexShader:Gt.sprite_vert,fragmentShader:Gt.sprite_frag},background:{uniforms:{uvTransform:{value:new Ht},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Gt.background_vert,fragmentShader:Gt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ht}},vertexShader:Gt.backgroundCube_vert,fragmentShader:Gt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Gt.cube_vert,fragmentShader:Gt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Gt.equirect_vert,fragmentShader:Gt.equirect_frag},distanceRGBA:{uniforms:ni([at.common,at.displacementmap,{referencePosition:{value:new v},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Gt.distanceRGBA_vert,fragmentShader:Gt.distanceRGBA_frag},shadow:{uniforms:ni([at.lights,at.fog,{color:{value:new mt(0)},opacity:{value:1}}]),vertexShader:Gt.shadow_vert,fragmentShader:Gt.shadow_frag}};ki.physical={uniforms:ni([ki.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ht},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ht},clearcoatNormalScale:{value:new ht(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ht},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ht},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ht},sheen:{value:0},sheenColor:{value:new mt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ht},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ht},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ht},transmissionSamplerSize:{value:new ht},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ht},attenuationDistance:{value:0},attenuationColor:{value:new mt(0)},specularColor:{value:new mt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ht},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ht},anisotropyVector:{value:new ht},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ht}}]),vertexShader:Gt.meshphysical_vert,fragmentShader:Gt.meshphysical_frag};var Jr={r:0,b:0,g:0},Pn=new mi,O0=new Xt;function B0(s,t,e,i,n,r,o){let a=new mt(0),l=r===!0?0:1,h,c,u=null,d=0,f=null;function g(w){let _=w.isScene===!0?w.background:null;return _&&_.isTexture&&(_=(w.backgroundBlurriness>0?e:t).get(_)),_}function x(w){let _=!1,y=g(w);y===null?p(a,l):y&&y.isColor&&(p(y,1),_=!0);let R=s.xr.getEnvironmentBlendMode();R==="additive"?i.buffers.color.setClear(0,0,0,1,o):R==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(s.autoClear||_)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function m(w,_){let y=g(_);y&&(y.isCubeTexture||y.mapping===Zo)?(c===void 0&&(c=new Nt(new Te(1,1,1),new He({name:"BackgroundCubeMaterial",uniforms:As(ki.backgroundCube.uniforms),vertexShader:ki.backgroundCube.vertexShader,fragmentShader:ki.backgroundCube.fragmentShader,side:ti,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(R,A,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),Pn.copy(_.backgroundRotation),Pn.x*=-1,Pn.y*=-1,Pn.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Pn.y*=-1,Pn.z*=-1),c.material.uniforms.envMap.value=y,c.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(O0.makeRotationFromEuler(Pn)),c.material.toneMapped=jt.getTransfer(y.colorSpace)!==he,(u!==y||d!==y.version||f!==s.toneMapping)&&(c.material.needsUpdate=!0,u=y,d=y.version,f=s.toneMapping),c.layers.enableAll(),w.unshift(c,c.geometry,c.material,0,0,null)):y&&y.isTexture&&(h===void 0&&(h=new Nt(new Ci(2,2),new He({name:"BackgroundMaterial",uniforms:As(ki.background.uniforms),vertexShader:ki.background.vertexShader,fragmentShader:ki.background.fragmentShader,side:xn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(h)),h.material.uniforms.t2D.value=y,h.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,h.material.toneMapped=jt.getTransfer(y.colorSpace)!==he,y.matrixAutoUpdate===!0&&y.updateMatrix(),h.material.uniforms.uvTransform.value.copy(y.matrix),(u!==y||d!==y.version||f!==s.toneMapping)&&(h.material.needsUpdate=!0,u=y,d=y.version,f=s.toneMapping),h.layers.enableAll(),w.unshift(h,h.geometry,h.material,0,0,null))}function p(w,_){w.getRGB(Jr,Bu(s)),i.buffers.color.setClear(Jr.r,Jr.g,Jr.b,_,o)}return{getClearColor:function(){return a},setClearColor:function(w,_=1){a.set(w),l=_,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(w){l=w,p(a,l)},render:x,addToRenderList:m}}function H0(s,t){let e=s.getParameter(s.MAX_VERTEX_ATTRIBS),i={},n=d(null),r=n,o=!1;function a(b,I,H,F,W){let Y=!1,O=u(F,H,I);r!==O&&(r=O,h(r.object)),Y=f(b,F,H,W),Y&&g(b,F,H,W),W!==null&&t.update(W,s.ELEMENT_ARRAY_BUFFER),(Y||o)&&(o=!1,y(b,I,H,F),W!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(W).buffer))}function l(){return s.createVertexArray()}function h(b){return s.bindVertexArray(b)}function c(b){return s.deleteVertexArray(b)}function u(b,I,H){let F=H.wireframe===!0,W=i[b.id];W===void 0&&(W={},i[b.id]=W);let Y=W[I.id];Y===void 0&&(Y={},W[I.id]=Y);let O=Y[F];return O===void 0&&(O=d(l()),Y[F]=O),O}function d(b){let I=[],H=[],F=[];for(let W=0;W<e;W++)I[W]=0,H[W]=0,F[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:H,attributeDivisors:F,object:b,attributes:{},index:null}}function f(b,I,H,F){let W=r.attributes,Y=I.attributes,O=0,Z=H.getAttributes();for(let G in Z)if(Z[G].location>=0){let rt=W[G],vt=Y[G];if(vt===void 0&&(G==="instanceMatrix"&&b.instanceMatrix&&(vt=b.instanceMatrix),G==="instanceColor"&&b.instanceColor&&(vt=b.instanceColor)),rt===void 0||rt.attribute!==vt||vt&&rt.data!==vt.data)return!0;O++}return r.attributesNum!==O||r.index!==F}function g(b,I,H,F){let W={},Y=I.attributes,O=0,Z=H.getAttributes();for(let G in Z)if(Z[G].location>=0){let rt=Y[G];rt===void 0&&(G==="instanceMatrix"&&b.instanceMatrix&&(rt=b.instanceMatrix),G==="instanceColor"&&b.instanceColor&&(rt=b.instanceColor));let vt={};vt.attribute=rt,rt&&rt.data&&(vt.data=rt.data),W[G]=vt,O++}r.attributes=W,r.attributesNum=O,r.index=F}function x(){let b=r.newAttributes;for(let I=0,H=b.length;I<H;I++)b[I]=0}function m(b){p(b,0)}function p(b,I){let H=r.newAttributes,F=r.enabledAttributes,W=r.attributeDivisors;H[b]=1,F[b]===0&&(s.enableVertexAttribArray(b),F[b]=1),W[b]!==I&&(s.vertexAttribDivisor(b,I),W[b]=I)}function w(){let b=r.newAttributes,I=r.enabledAttributes;for(let H=0,F=I.length;H<F;H++)I[H]!==b[H]&&(s.disableVertexAttribArray(H),I[H]=0)}function _(b,I,H,F,W,Y,O){O===!0?s.vertexAttribIPointer(b,I,H,W,Y):s.vertexAttribPointer(b,I,H,F,W,Y)}function y(b,I,H,F){x();let W=F.attributes,Y=H.getAttributes(),O=I.defaultAttributeValues;for(let Z in Y){let G=Y[Z];if(G.location>=0){let nt=W[Z];if(nt===void 0&&(Z==="instanceMatrix"&&b.instanceMatrix&&(nt=b.instanceMatrix),Z==="instanceColor"&&b.instanceColor&&(nt=b.instanceColor)),nt!==void 0){let rt=nt.normalized,vt=nt.itemSize,Ft=t.get(nt);if(Ft===void 0)continue;let te=Ft.buffer,q=Ft.type,st=Ft.bytesPerElement,St=q===s.INT||q===s.UNSIGNED_INT||nt.gpuType===Ch;if(nt.isInterleavedBufferAttribute){let ct=nt.data,Lt=ct.stride,Ut=nt.offset;if(ct.isInstancedInterleavedBuffer){for(let Wt=0;Wt<G.locationSize;Wt++)p(G.location+Wt,ct.meshPerAttribute);b.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=ct.meshPerAttribute*ct.count)}else for(let Wt=0;Wt<G.locationSize;Wt++)m(G.location+Wt);s.bindBuffer(s.ARRAY_BUFFER,te);for(let Wt=0;Wt<G.locationSize;Wt++)_(G.location+Wt,vt/G.locationSize,q,rt,Lt*st,(Ut+vt/G.locationSize*Wt)*st,St)}else{if(nt.isInstancedBufferAttribute){for(let ct=0;ct<G.locationSize;ct++)p(G.location+ct,nt.meshPerAttribute);b.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=nt.meshPerAttribute*nt.count)}else for(let ct=0;ct<G.locationSize;ct++)m(G.location+ct);s.bindBuffer(s.ARRAY_BUFFER,te);for(let ct=0;ct<G.locationSize;ct++)_(G.location+ct,vt/G.locationSize,q,rt,vt*st,vt/G.locationSize*ct*st,St)}}else if(O!==void 0){let rt=O[Z];if(rt!==void 0)switch(rt.length){case 2:s.vertexAttrib2fv(G.location,rt);break;case 3:s.vertexAttrib3fv(G.location,rt);break;case 4:s.vertexAttrib4fv(G.location,rt);break;default:s.vertexAttrib1fv(G.location,rt)}}}}w()}function R(){L();for(let b in i){let I=i[b];for(let H in I){let F=I[H];for(let W in F)c(F[W].object),delete F[W];delete I[H]}delete i[b]}}function A(b){if(i[b.id]===void 0)return;let I=i[b.id];for(let H in I){let F=I[H];for(let W in F)c(F[W].object),delete F[W];delete I[H]}delete i[b.id]}function C(b){for(let I in i){let H=i[I];if(H[b.id]===void 0)continue;let F=H[b.id];for(let W in F)c(F[W].object),delete F[W];delete H[b.id]}}function L(){E(),o=!0,r!==n&&(r=n,h(r.object))}function E(){n.geometry=null,n.program=null,n.wireframe=!1}return{setup:a,reset:L,resetDefaultState:E,dispose:R,releaseStatesOfGeometry:A,releaseStatesOfProgram:C,initAttributes:x,enableAttribute:m,disableUnusedAttributes:w}}function V0(s,t,e){let i;function n(h){i=h}function r(h,c){s.drawArrays(i,h,c),e.update(c,i,1)}function o(h,c,u){u!==0&&(s.drawArraysInstanced(i,h,c,u),e.update(c,i,u))}function a(h,c,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,h,0,c,0,u);let f=0;for(let g=0;g<u;g++)f+=c[g];e.update(f,i,1)}function l(h,c,u,d){if(u===0)return;let f=t.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<h.length;g++)o(h[g],c[g],d[g]);else{f.multiDrawArraysInstancedWEBGL(i,h,0,c,0,d,0,u);let g=0;for(let x=0;x<u;x++)g+=c[x]*d[x];e.update(g,i,1)}}this.setMode=n,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function G0(s,t,e,i){let n;function r(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){let C=t.get("EXT_texture_filter_anisotropic");n=s.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function o(C){return!(C!==Ai&&i.convert(C)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(C){let L=C===Vn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(C!==Ji&&i.convert(C)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==Ui&&!L)}function l(C){if(C==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=e.precision!==void 0?e.precision:"highp",c=l(h);c!==h&&(console.warn("THREE.WebGLRenderer:",h,"not supported, using",c,"instead."),h=c);let u=e.logarithmicDepthBuffer===!0,d=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),f=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),g=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=s.getParameter(s.MAX_TEXTURE_SIZE),m=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),p=s.getParameter(s.MAX_VERTEX_ATTRIBS),w=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),_=s.getParameter(s.MAX_VARYING_VECTORS),y=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),R=g>0,A=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:h,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:w,maxVaryings:_,maxFragmentUniforms:y,vertexTextures:R,maxSamples:A}}function W0(s){let t=this,e=null,i=0,n=!1,r=!1,o=new qi,a=new Ht,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let f=u.length!==0||d||i!==0||n;return n=d,i=u.length,f},this.beginShadows=function(){r=!0,c(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){e=c(u,d,0)},this.setState=function(u,d,f){let g=u.clippingPlanes,x=u.clipIntersection,m=u.clipShadows,p=s.get(u);if(!n||g===null||g.length===0||r&&!m)r?c(null):h();else{let w=r?0:i,_=w*4,y=p.clippingState||null;l.value=y,y=c(g,d,_,f);for(let R=0;R!==_;++R)y[R]=e[R];p.clippingState=y,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=w}};function h(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function c(u,d,f,g){let x=u!==null?u.length:0,m=null;if(x!==0){if(m=l.value,g!==!0||m===null){let p=f+x*4,w=d.matrixWorldInverse;a.getNormalMatrix(w),(m===null||m.length<p)&&(m=new Float32Array(p));for(let _=0,y=f;_!==x;++_,y+=4)o.copy(u[_]).applyMatrix4(w,a),o.normal.toArray(m,y),m[y+3]=o.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,m}}function X0(s){let t=new WeakMap;function e(o,a){return a===hl?o.mapping=ws:a===cl&&(o.mapping=Ss),o}function i(o){if(o&&o.isTexture){let a=o.mapping;if(a===hl||a===cl)if(t.has(o)){let l=t.get(o).texture;return e(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let h=new ql(l.height);return h.fromEquirectangularTexture(s,o),t.set(o,h),o.addEventListener("dispose",n),e(h.texture,o.mapping)}else return null}}return o}function n(o){let a=o.target;a.removeEventListener("dispose",n);let l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:i,dispose:r}}var Rs=class extends Eo{constructor(t=-1,e=1,i=1,n=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=n,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,n,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=n,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,n=(this.top+this.bottom)/2,r=i-t,o=i+t,a=n+e,l=n-e;if(this.view!==null&&this.view.enabled){let h=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=h*this.view.offsetX,o=r+h*this.view.width,a-=c*this.view.offsetY,l=a-c*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},gs=4,Uc=[.125,.215,.35,.446,.526,.582],kn=20,Ha=new Rs,Nc=new mt,Va=null,Ga=0,Wa=0,Xa=!1,Ln=(1+Math.sqrt(5))/2,cs=1/Ln,Fc=[new v(-Ln,cs,0),new v(Ln,cs,0),new v(-cs,0,Ln),new v(cs,0,Ln),new v(0,Ln,-cs),new v(0,Ln,cs),new v(-1,1,-1),new v(1,1,-1),new v(-1,1,1),new v(1,1,1)],Ao=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,n=100){Va=this._renderer.getRenderTarget(),Ga=this._renderer.getActiveCubeFace(),Wa=this._renderer.getActiveMipmapLevel(),Xa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,i,n,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Hc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Bc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Va,Ga,Wa),this._renderer.xr.enabled=Xa,t.scissorTest=!1,Kr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===ws||t.mapping===Ss?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Va=this._renderer.getRenderTarget(),Ga=this._renderer.getActiveCubeFace(),Wa=this._renderer.getActiveMipmapLevel(),Xa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:pi,minFilter:pi,generateMipmaps:!1,type:Vn,format:Ai,colorSpace:Ds,depthBuffer:!1},n=Oc(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Oc(t,e,i);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=q0(r)),this._blurMaterial=Y0(r,t,e)}return n}_compileMaterial(t){let e=new Nt(this._lodPlanes[0],t);this._renderer.compile(e,Ha)}_sceneToCubeUV(t,e,i,n){let a=new Xe(90,1,e,i),l=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],c=this._renderer,u=c.autoClear,d=c.toneMapping;c.getClearColor(Nc),c.toneMapping=gn,c.autoClear=!1;let f=new Qi({name:"PMREM.Background",side:ti,depthWrite:!1,depthTest:!1}),g=new Nt(new Te,f),x=!1,m=t.background;m?m.isColor&&(f.color.copy(m),t.background=null,x=!0):(f.color.copy(Nc),x=!0);for(let p=0;p<6;p++){let w=p%3;w===0?(a.up.set(0,l[p],0),a.lookAt(h[p],0,0)):w===1?(a.up.set(0,0,l[p]),a.lookAt(0,h[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,h[p]));let _=this._cubeSize;Kr(n,w*_,p>2?_:0,_,_),c.setRenderTarget(n),x&&c.render(g,a),c.render(t,a)}g.geometry.dispose(),g.material.dispose(),c.toneMapping=d,c.autoClear=u,t.background=m}_textureToCubeUV(t,e){let i=this._renderer,n=t.mapping===ws||t.mapping===Ss;n?(this._cubemapMaterial===null&&(this._cubemapMaterial=Hc()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Bc());let r=n?this._cubemapMaterial:this._equirectMaterial,o=new Nt(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;let l=this._cubeSize;Kr(e,0,0,3*l,2*l),i.setRenderTarget(e),i.render(o,Ha)}_applyPMREM(t){let e=this._renderer,i=e.autoClear;e.autoClear=!1;let n=this._lodPlanes.length;for(let r=1;r<n;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Fc[(n-r-1)%Fc.length];this._blur(t,r-1,r,o,a)}e.autoClear=i}_blur(t,e,i,n,r){let o=this._pingPongRenderTarget;this._halfBlur(t,o,e,i,n,"latitudinal",r),this._halfBlur(o,t,i,i,n,"longitudinal",r)}_halfBlur(t,e,i,n,r,o,a){let l=this._renderer,h=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let c=3,u=new Nt(this._lodPlanes[n],h),d=h.uniforms,f=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*kn-1),x=r/g,m=isFinite(r)?1+Math.floor(c*x):kn;m>kn&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${kn}`);let p=[],w=0;for(let C=0;C<kn;++C){let L=C/x,E=Math.exp(-L*L/2);p.push(E),C===0?w+=E:C<m&&(w+=2*E)}for(let C=0;C<p.length;C++)p[C]=p[C]/w;d.envMap.value=t.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);let{_lodMax:_}=this;d.dTheta.value=g,d.mipInt.value=_-i;let y=this._sizeLods[n],R=3*y*(n>_-gs?n-_+gs:0),A=4*(this._cubeSize-y);Kr(e,R,A,3*y,2*y),l.setRenderTarget(e),l.render(u,Ha)}};function q0(s){let t=[],e=[],i=[],n=s,r=s-gs+1+Uc.length;for(let o=0;o<r;o++){let a=Math.pow(2,n);e.push(a);let l=1/a;o>s-gs?l=Uc[o-s+gs-1]:o===0&&(l=0),i.push(l);let h=1/(a-2),c=-h,u=1+h,d=[c,c,u,c,u,u,c,c,u,u,c,u],f=6,g=6,x=3,m=2,p=1,w=new Float32Array(x*g*f),_=new Float32Array(m*g*f),y=new Float32Array(p*g*f);for(let A=0;A<f;A++){let C=A%3*2/3-1,L=A>2?0:-1,E=[C,L,0,C+2/3,L,0,C+2/3,L+1,0,C,L,0,C+2/3,L+1,0,C,L+1,0];w.set(E,x*g*A),_.set(d,m*g*A);let b=[A,A,A,A,A,A];y.set(b,p*g*A)}let R=new Ee;R.setAttribute("position",new Le(w,x)),R.setAttribute("uv",new Le(_,m)),R.setAttribute("faceIndex",new Le(y,p)),t.push(R),n>gs&&n--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function Oc(s,t,e){let i=new Ri(s,t,e);return i.texture.mapping=Zo,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Kr(s,t,e,i,n){s.viewport.set(t,e,i,n),s.scissor.set(t,e,i,n)}function Y0(s,t,e){let i=new Float32Array(kn),n=new v(0,1,0);return new He({name:"SphericalGaussianBlur",defines:{n:kn,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:n}},vertexShader:Uh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:mn,depthTest:!1,depthWrite:!1})}function Bc(){return new He({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Uh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:mn,depthTest:!1,depthWrite:!1})}function Hc(){return new He({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Uh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:mn,depthTest:!1,depthWrite:!1})}function Uh(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function $0(s){let t=new WeakMap,e=null;function i(a){if(a&&a.isTexture){let l=a.mapping,h=l===hl||l===cl,c=l===ws||l===Ss;if(h||c){let u=t.get(a),d=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return e===null&&(e=new Ao(s)),u=h?e.fromEquirectangular(a,u):e.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),u.texture;if(u!==void 0)return u.texture;{let f=a.image;return h&&f&&f.height>0||c&&f&&n(f)?(e===null&&(e=new Ao(s)),u=h?e.fromEquirectangular(a):e.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function n(a){let l=0,h=6;for(let c=0;c<h;c++)a[c]!==void 0&&l++;return l===h}function r(a){let l=a.target;l.removeEventListener("dispose",r);let h=t.get(l);h!==void 0&&(t.delete(l),h.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:o}}function Z0(s){let t={};function e(i){if(t[i]!==void 0)return t[i];let n;switch(i){case"WEBGL_depth_texture":n=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":n=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":n=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":n=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:n=s.getExtension(i)}return t[i]=n,n}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){let n=e(i);return n===null&&ir("THREE.WebGLRenderer: "+i+" extension not supported."),n}}}function J0(s,t,e,i){let n={},r=new WeakMap;function o(u){let d=u.target;d.index!==null&&t.remove(d.index);for(let g in d.attributes)t.remove(d.attributes[g]);for(let g in d.morphAttributes){let x=d.morphAttributes[g];for(let m=0,p=x.length;m<p;m++)t.remove(x[m])}d.removeEventListener("dispose",o),delete n[d.id];let f=r.get(d);f&&(t.remove(f),r.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(u,d){return n[d.id]===!0||(d.addEventListener("dispose",o),n[d.id]=!0,e.memory.geometries++),d}function l(u){let d=u.attributes;for(let g in d)t.update(d[g],s.ARRAY_BUFFER);let f=u.morphAttributes;for(let g in f){let x=f[g];for(let m=0,p=x.length;m<p;m++)t.update(x[m],s.ARRAY_BUFFER)}}function h(u){let d=[],f=u.index,g=u.attributes.position,x=0;if(f!==null){let w=f.array;x=f.version;for(let _=0,y=w.length;_<y;_+=3){let R=w[_+0],A=w[_+1],C=w[_+2];d.push(R,A,A,C,C,R)}}else if(g!==void 0){let w=g.array;x=g.version;for(let _=0,y=w.length/3-1;_<y;_+=3){let R=_+0,A=_+1,C=_+2;d.push(R,A,A,C,C,R)}}else return;let m=new(Fu(d)?So:wo)(d,1);m.version=x;let p=r.get(u);p&&t.remove(p),r.set(u,m)}function c(u){let d=r.get(u);if(d){let f=u.index;f!==null&&d.version<f.version&&h(u)}else h(u);return r.get(u)}return{get:a,update:l,getWireframeAttribute:c}}function K0(s,t,e){let i;function n(d){i=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,f){s.drawElements(i,f,r,d*o),e.update(f,i,1)}function h(d,f,g){g!==0&&(s.drawElementsInstanced(i,f,r,d*o,g),e.update(f,i,g))}function c(d,f,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,f,0,r,d,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];e.update(m,i,1)}function u(d,f,g,x){if(g===0)return;let m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)h(d[p]/o,f[p],x[p]);else{m.multiDrawElementsInstancedWEBGL(i,f,0,r,d,0,x,0,g);let p=0;for(let w=0;w<g;w++)p+=f[w]*x[w];e.update(p,i,1)}}this.setMode=n,this.setIndex=a,this.render=l,this.renderInstances=h,this.renderMultiDraw=c,this.renderMultiDrawInstances=u}function j0(s){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(e.calls++,o){case s.TRIANGLES:e.triangles+=a*(r/3);break;case s.LINES:e.lines+=a*(r/2);break;case s.LINE_STRIP:e.lines+=a*(r-1);break;case s.LINE_LOOP:e.lines+=a*r;break;case s.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function n(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:n,update:i}}function Q0(s,t,e){let i=new WeakMap,n=new ue;function r(o,a,l){let h=o.morphTargetInfluences,c=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=c!==void 0?c.length:0,d=i.get(a);if(d===void 0||d.count!==u){let E=function(){C.dispose(),i.delete(a),a.removeEventListener("dispose",E)};d!==void 0&&d.texture.dispose();let f=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],w=a.morphAttributes.color||[],_=0;f===!0&&(_=1),g===!0&&(_=2),x===!0&&(_=3);let y=a.attributes.position.count*_,R=1;y>t.maxTextureSize&&(R=Math.ceil(y/t.maxTextureSize),y=t.maxTextureSize);let A=new Float32Array(y*R*4*u),C=new Mo(A,y,R,u);C.type=Ui,C.needsUpdate=!0;let L=_*4;for(let b=0;b<u;b++){let I=m[b],H=p[b],F=w[b],W=y*R*4*b;for(let Y=0;Y<I.count;Y++){let O=Y*L;f===!0&&(n.fromBufferAttribute(I,Y),A[W+O+0]=n.x,A[W+O+1]=n.y,A[W+O+2]=n.z,A[W+O+3]=0),g===!0&&(n.fromBufferAttribute(H,Y),A[W+O+4]=n.x,A[W+O+5]=n.y,A[W+O+6]=n.z,A[W+O+7]=0),x===!0&&(n.fromBufferAttribute(F,Y),A[W+O+8]=n.x,A[W+O+9]=n.y,A[W+O+10]=n.z,A[W+O+11]=F.itemSize===4?n.w:1)}}d={count:u,texture:C,size:new ht(y,R)},i.set(a,d),a.addEventListener("dispose",E)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",o.morphTexture,e);else{let f=0;for(let x=0;x<h.length;x++)f+=h[x];let g=a.morphTargetsRelative?1:1-f;l.getUniforms().setValue(s,"morphTargetBaseInfluence",g),l.getUniforms().setValue(s,"morphTargetInfluences",h)}l.getUniforms().setValue(s,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(s,"morphTargetsTextureSize",d.size)}return{update:r}}function tg(s,t,e,i){let n=new WeakMap;function r(l){let h=i.render.frame,c=l.geometry,u=t.get(l,c);if(n.get(u)!==h&&(t.update(u),n.set(u,h)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),n.get(l)!==h&&(e.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,s.ARRAY_BUFFER),n.set(l,h))),l.isSkinnedMesh){let d=l.skeleton;n.get(d)!==h&&(d.update(),n.set(d,h))}return u}function o(){n=new WeakMap}function a(l){let h=l.target;h.removeEventListener("dispose",a),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:r,dispose:o}}var Ro=class extends li{constructor(t,e,i,n,r,o,a,l,h,c=vs){if(c!==vs&&c!==Ts)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&c===vs&&(i=Nn),i===void 0&&c===Ts&&(i=Es),super(null,n,r,o,a,l,c,i,h),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:Ce,this.minFilter=l!==void 0?l:Ce,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},Vu=new li,Vc=new Ro(1,1),Gu=new Mo,Wu=new Wl,Xu=new To,Gc=[],Wc=[],Xc=new Float32Array(16),qc=new Float32Array(9),Yc=new Float32Array(4);function zs(s,t,e){let i=s[0];if(i<=0||i>0)return s;let n=t*e,r=Gc[n];if(r===void 0&&(r=new Float32Array(n),Gc[n]=r),t!==0){i.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,s[o].toArray(r,a)}return r}function Ve(s,t){if(s.length!==t.length)return!1;for(let e=0,i=s.length;e<i;e++)if(s[e]!==t[e])return!1;return!0}function Ge(s,t){for(let e=0,i=t.length;e<i;e++)s[e]=t[e]}function Ko(s,t){let e=Wc[t];e===void 0&&(e=new Int32Array(t),Wc[t]=e);for(let i=0;i!==t;++i)e[i]=s.allocateTextureUnit();return e}function eg(s,t){let e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function ig(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ve(e,t))return;s.uniform2fv(this.addr,t),Ge(e,t)}}function ng(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ve(e,t))return;s.uniform3fv(this.addr,t),Ge(e,t)}}function sg(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ve(e,t))return;s.uniform4fv(this.addr,t),Ge(e,t)}}function rg(s,t){let e=this.cache,i=t.elements;if(i===void 0){if(Ve(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),Ge(e,t)}else{if(Ve(e,i))return;Yc.set(i),s.uniformMatrix2fv(this.addr,!1,Yc),Ge(e,i)}}function og(s,t){let e=this.cache,i=t.elements;if(i===void 0){if(Ve(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),Ge(e,t)}else{if(Ve(e,i))return;qc.set(i),s.uniformMatrix3fv(this.addr,!1,qc),Ge(e,i)}}function ag(s,t){let e=this.cache,i=t.elements;if(i===void 0){if(Ve(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),Ge(e,t)}else{if(Ve(e,i))return;Xc.set(i),s.uniformMatrix4fv(this.addr,!1,Xc),Ge(e,i)}}function lg(s,t){let e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function hg(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ve(e,t))return;s.uniform2iv(this.addr,t),Ge(e,t)}}function cg(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ve(e,t))return;s.uniform3iv(this.addr,t),Ge(e,t)}}function ug(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ve(e,t))return;s.uniform4iv(this.addr,t),Ge(e,t)}}function dg(s,t){let e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function fg(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ve(e,t))return;s.uniform2uiv(this.addr,t),Ge(e,t)}}function pg(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ve(e,t))return;s.uniform3uiv(this.addr,t),Ge(e,t)}}function mg(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ve(e,t))return;s.uniform4uiv(this.addr,t),Ge(e,t)}}function gg(s,t,e){let i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n);let r;this.type===s.SAMPLER_2D_SHADOW?(Vc.compareFunction=Nu,r=Vc):r=Vu,e.setTexture2D(t||r,n)}function xg(s,t,e){let i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n),e.setTexture3D(t||Wu,n)}function yg(s,t,e){let i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n),e.setTextureCube(t||Xu,n)}function vg(s,t,e){let i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n),e.setTexture2DArray(t||Gu,n)}function _g(s){switch(s){case 5126:return eg;case 35664:return ig;case 35665:return ng;case 35666:return sg;case 35674:return rg;case 35675:return og;case 35676:return ag;case 5124:case 35670:return lg;case 35667:case 35671:return hg;case 35668:case 35672:return cg;case 35669:case 35673:return ug;case 5125:return dg;case 36294:return fg;case 36295:return pg;case 36296:return mg;case 35678:case 36198:case 36298:case 36306:case 35682:return gg;case 35679:case 36299:case 36307:return xg;case 35680:case 36300:case 36308:case 36293:return yg;case 36289:case 36303:case 36311:case 36292:return vg}}function Mg(s,t){s.uniform1fv(this.addr,t)}function bg(s,t){let e=zs(t,this.size,2);s.uniform2fv(this.addr,e)}function wg(s,t){let e=zs(t,this.size,3);s.uniform3fv(this.addr,e)}function Sg(s,t){let e=zs(t,this.size,4);s.uniform4fv(this.addr,e)}function Eg(s,t){let e=zs(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function Tg(s,t){let e=zs(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function Ag(s,t){let e=zs(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function Rg(s,t){s.uniform1iv(this.addr,t)}function Cg(s,t){s.uniform2iv(this.addr,t)}function Pg(s,t){s.uniform3iv(this.addr,t)}function Ig(s,t){s.uniform4iv(this.addr,t)}function Lg(s,t){s.uniform1uiv(this.addr,t)}function Dg(s,t){s.uniform2uiv(this.addr,t)}function kg(s,t){s.uniform3uiv(this.addr,t)}function zg(s,t){s.uniform4uiv(this.addr,t)}function Ug(s,t,e){let i=this.cache,n=t.length,r=Ko(e,n);Ve(i,r)||(s.uniform1iv(this.addr,r),Ge(i,r));for(let o=0;o!==n;++o)e.setTexture2D(t[o]||Vu,r[o])}function Ng(s,t,e){let i=this.cache,n=t.length,r=Ko(e,n);Ve(i,r)||(s.uniform1iv(this.addr,r),Ge(i,r));for(let o=0;o!==n;++o)e.setTexture3D(t[o]||Wu,r[o])}function Fg(s,t,e){let i=this.cache,n=t.length,r=Ko(e,n);Ve(i,r)||(s.uniform1iv(this.addr,r),Ge(i,r));for(let o=0;o!==n;++o)e.setTextureCube(t[o]||Xu,r[o])}function Og(s,t,e){let i=this.cache,n=t.length,r=Ko(e,n);Ve(i,r)||(s.uniform1iv(this.addr,r),Ge(i,r));for(let o=0;o!==n;++o)e.setTexture2DArray(t[o]||Gu,r[o])}function Bg(s){switch(s){case 5126:return Mg;case 35664:return bg;case 35665:return wg;case 35666:return Sg;case 35674:return Eg;case 35675:return Tg;case 35676:return Ag;case 5124:case 35670:return Rg;case 35667:case 35671:return Cg;case 35668:case 35672:return Pg;case 35669:case 35673:return Ig;case 5125:return Lg;case 36294:return Dg;case 36295:return kg;case 36296:return zg;case 35678:case 36198:case 36298:case 36306:case 35682:return Ug;case 35679:case 36299:case 36307:return Ng;case 35680:case 36300:case 36308:case 36293:return Fg;case 36289:case 36303:case 36311:case 36292:return Og}}var Yl=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=_g(e.type)}},$l=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Bg(e.type)}},Zl=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){let n=this.seq;for(let r=0,o=n.length;r!==o;++r){let a=n[r];a.setValue(t,e[a.id],i)}}},qa=/(\w+)(\])?(\[|\.)?/g;function $c(s,t){s.seq.push(t),s.map[t.id]=t}function Hg(s,t,e){let i=s.name,n=i.length;for(qa.lastIndex=0;;){let r=qa.exec(i),o=qa.lastIndex,a=r[1],l=r[2]==="]",h=r[3];if(l&&(a=a|0),h===void 0||h==="["&&o+2===n){$c(e,h===void 0?new Yl(a,s,t):new $l(a,s,t));break}else{let u=e.map[a];u===void 0&&(u=new Zl(a),$c(e,u)),e=u}}}var Ms=class{constructor(t,e){this.seq=[],this.map={};let i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let n=0;n<i;++n){let r=t.getActiveUniform(e,n),o=t.getUniformLocation(e,r.name);Hg(r,o,this)}}setValue(t,e,i,n){let r=this.map[e];r!==void 0&&r.setValue(t,i,n)}setOptional(t,e,i){let n=e[i];n!==void 0&&this.setValue(t,i,n)}static upload(t,e,i,n){for(let r=0,o=e.length;r!==o;++r){let a=e[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,n)}}static seqWithValue(t,e){let i=[];for(let n=0,r=t.length;n!==r;++n){let o=t[n];o.id in e&&i.push(o)}return i}};function Zc(s,t,e){let i=s.createShader(t);return s.shaderSource(i,e),s.compileShader(i),i}var Vg=37297,Gg=0;function Wg(s,t){let e=s.split(`
`),i=[],n=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=n;o<r;o++){let a=o+1;i.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return i.join(`
`)}var Jc=new Ht;function Xg(s){jt._getMatrix(Jc,jt.workingColorSpace,s);let t=`mat3( ${Jc.elements.map(e=>e.toFixed(4))} )`;switch(jt.getTransfer(s)){case Jo:return[t,"LinearTransferOETF"];case he:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function Kc(s,t,e){let i=s.getShaderParameter(t,s.COMPILE_STATUS),n=s.getShaderInfoLog(t).trim();if(i&&n==="")return"";let r=/ERROR: 0:(\d+)/.exec(n);if(r){let o=parseInt(r[1]);return e.toUpperCase()+`

`+n+`

`+Wg(s.getShaderSource(t),o)}else return n}function qg(s,t){let e=Xg(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function Yg(s,t){let e;switch(t){case yf:e="Linear";break;case vf:e="Reinhard";break;case _f:e="Cineon";break;case Mf:e="ACESFilmic";break;case wf:e="AgX";break;case Sf:e="Neutral";break;case bf:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var jr=new v;function $g(){jt.getLuminanceCoefficients(jr);let s=jr.x.toFixed(4),t=jr.y.toFixed(4),e=jr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Zg(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(nr).join(`
`)}function Jg(s){let t=[];for(let e in s){let i=s[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function Kg(s,t){let e={},i=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let n=0;n<i;n++){let r=s.getActiveAttrib(t,n),o=r.name,a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:s.getAttribLocation(t,o),locationSize:a}}return e}function nr(s){return s!==""}function jc(s,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Qc(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var jg=/^[ \t]*#include +<([\w\d./]+)>/gm;function Jl(s){return s.replace(jg,tx)}var Qg=new Map;function tx(s,t){let e=Gt[t];if(e===void 0){let i=Qg.get(t);if(i!==void 0)e=Gt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return Jl(e)}var ex=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function tu(s){return s.replace(ex,ix)}function ix(s,t,e,i){let n="";for(let r=parseInt(t);r<parseInt(e);r++)n+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return n}function eu(s){let t=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?t+=`
#define HIGH_PRECISION`:s.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function nx(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Eu?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===Jd?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===Xi&&(t="SHADOWMAP_TYPE_VSM"),t}function sx(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case ws:case Ss:t="ENVMAP_TYPE_CUBE";break;case Zo:t="ENVMAP_TYPE_CUBE_UV";break}return t}function rx(s){let t="ENVMAP_MODE_REFLECTION";return s.envMap&&s.envMapMode===Ss&&(t="ENVMAP_MODE_REFRACTION"),t}function ox(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Rh:t="ENVMAP_BLENDING_MULTIPLY";break;case gf:t="ENVMAP_BLENDING_MIX";break;case xf:t="ENVMAP_BLENDING_ADD";break}return t}function ax(s){let t=s.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:i,maxMip:e}}function lx(s,t,e,i){let n=s.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,l=nx(e),h=sx(e),c=rx(e),u=ox(e),d=ax(e),f=Zg(e),g=Jg(r),x=n.createProgram(),m,p,w=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(nr).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(nr).join(`
`),p.length>0&&(p+=`
`)):(m=[eu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(nr).join(`
`),p=[eu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==gn?"#define TONE_MAPPING":"",e.toneMapping!==gn?Gt.tonemapping_pars_fragment:"",e.toneMapping!==gn?Yg("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Gt.colorspace_pars_fragment,qg("linearToOutputTexel",e.outputColorSpace),$g(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(nr).join(`
`)),o=Jl(o),o=jc(o,e),o=Qc(o,e),a=Jl(a),a=jc(a,e),a=Qc(a,e),o=tu(o),a=tu(a),e.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===mc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===mc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let _=w+m+o,y=w+p+a,R=Zc(n,n.VERTEX_SHADER,_),A=Zc(n,n.FRAGMENT_SHADER,y);n.attachShader(x,R),n.attachShader(x,A),e.index0AttributeName!==void 0?n.bindAttribLocation(x,0,e.index0AttributeName):e.morphTargets===!0&&n.bindAttribLocation(x,0,"position"),n.linkProgram(x);function C(I){if(s.debug.checkShaderErrors){let H=n.getProgramInfoLog(x).trim(),F=n.getShaderInfoLog(R).trim(),W=n.getShaderInfoLog(A).trim(),Y=!0,O=!0;if(n.getProgramParameter(x,n.LINK_STATUS)===!1)if(Y=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(n,x,R,A);else{let Z=Kc(n,R,"vertex"),G=Kc(n,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+n.getError()+" - VALIDATE_STATUS "+n.getProgramParameter(x,n.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+H+`
`+Z+`
`+G)}else H!==""?console.warn("THREE.WebGLProgram: Program Info Log:",H):(F===""||W==="")&&(O=!1);O&&(I.diagnostics={runnable:Y,programLog:H,vertexShader:{log:F,prefix:m},fragmentShader:{log:W,prefix:p}})}n.deleteShader(R),n.deleteShader(A),L=new Ms(n,x),E=Kg(n,x)}let L;this.getUniforms=function(){return L===void 0&&C(this),L};let E;this.getAttributes=function(){return E===void 0&&C(this),E};let b=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return b===!1&&(b=n.getProgramParameter(x,Vg)),b},this.destroy=function(){i.releaseStatesOfProgram(this),n.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Gg++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=R,this.fragmentShader=A,this}var hx=0,Kl=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,i=t.fragmentShader,n=this._getShaderStage(e),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(t);return o.has(n)===!1&&(o.add(n),n.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){let e=this.shaderCache,i=e.get(t);return i===void 0&&(i=new jl(t),e.set(t,i)),i}},jl=class{constructor(t){this.id=hx++,this.code=t,this.usedTimes=0}};function cx(s,t,e,i,n,r,o){let a=new bo,l=new Kl,h=new Set,c=[],u=n.logarithmicDepthBuffer,d=n.vertexTextures,f=n.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(E){return h.add(E),E===0?"uv":`uv${E}`}function m(E,b,I,H,F){let W=H.fog,Y=F.geometry,O=E.isMeshStandardMaterial?H.environment:null,Z=(E.isMeshStandardMaterial?e:t).get(E.envMap||O),G=Z&&Z.mapping===Zo?Z.image.height:null,nt=g[E.type];E.precision!==null&&(f=n.getMaxPrecision(E.precision),f!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",f,"instead."));let rt=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,vt=rt!==void 0?rt.length:0,Ft=0;Y.morphAttributes.position!==void 0&&(Ft=1),Y.morphAttributes.normal!==void 0&&(Ft=2),Y.morphAttributes.color!==void 0&&(Ft=3);let te,q,st,St;if(nt){let oe=ki[nt];te=oe.vertexShader,q=oe.fragmentShader}else te=E.vertexShader,q=E.fragmentShader,l.update(E),st=l.getVertexShaderID(E),St=l.getFragmentShaderID(E);let ct=s.getRenderTarget(),Lt=s.state.buffers.depth.getReversed(),Ut=F.isInstancedMesh===!0,Wt=F.isBatchedMesh===!0,we=!!E.map,Jt=!!E.matcap,Ie=!!Z,U=!!E.aoMap,gi=!!E.lightMap,qt=!!E.bumpMap,Yt=!!E.normalMap,Ct=!!E.displacementMap,me=!!E.emissiveMap,Rt=!!E.metalnessMap,T=!!E.roughnessMap,M=E.anisotropy>0,N=E.clearcoat>0,J=E.dispersion>0,tt=E.iridescence>0,$=E.sheen>0,Et=E.transmission>0,ut=M&&!!E.anisotropyMap,gt=N&&!!E.clearcoatMap,Kt=N&&!!E.clearcoatNormalMap,et=N&&!!E.clearcoatRoughnessMap,xt=tt&&!!E.iridescenceMap,Pt=tt&&!!E.iridescenceThicknessMap,Dt=$&&!!E.sheenColorMap,yt=$&&!!E.sheenRoughnessMap,$t=!!E.specularMap,Vt=!!E.specularColorMap,fe=!!E.specularIntensityMap,D=Et&&!!E.transmissionMap,lt=Et&&!!E.thicknessMap,X=!!E.gradientMap,K=!!E.alphaMap,pt=E.alphaTest>0,dt=!!E.alphaHash,Ot=!!E.extensions,Re=gn;E.toneMapped&&(ct===null||ct.isXRRenderTarget===!0)&&(Re=s.toneMapping);let Je={shaderID:nt,shaderType:E.type,shaderName:E.name,vertexShader:te,fragmentShader:q,defines:E.defines,customVertexShaderID:st,customFragmentShaderID:St,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:f,batching:Wt,batchingColor:Wt&&F._colorsTexture!==null,instancing:Ut,instancingColor:Ut&&F.instanceColor!==null,instancingMorph:Ut&&F.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:ct===null?s.outputColorSpace:ct.isXRRenderTarget===!0?ct.texture.colorSpace:Ds,alphaToCoverage:!!E.alphaToCoverage,map:we,matcap:Jt,envMap:Ie,envMapMode:Ie&&Z.mapping,envMapCubeUVHeight:G,aoMap:U,lightMap:gi,bumpMap:qt,normalMap:Yt,displacementMap:d&&Ct,emissiveMap:me,normalMapObjectSpace:Yt&&E.normalMapType===Rf,normalMapTangentSpace:Yt&&E.normalMapType===Uu,metalnessMap:Rt,roughnessMap:T,anisotropy:M,anisotropyMap:ut,clearcoat:N,clearcoatMap:gt,clearcoatNormalMap:Kt,clearcoatRoughnessMap:et,dispersion:J,iridescence:tt,iridescenceMap:xt,iridescenceThicknessMap:Pt,sheen:$,sheenColorMap:Dt,sheenRoughnessMap:yt,specularMap:$t,specularColorMap:Vt,specularIntensityMap:fe,transmission:Et,transmissionMap:D,thicknessMap:lt,gradientMap:X,opaque:E.transparent===!1&&E.blending===ys&&E.alphaToCoverage===!1,alphaMap:K,alphaTest:pt,alphaHash:dt,combine:E.combine,mapUv:we&&x(E.map.channel),aoMapUv:U&&x(E.aoMap.channel),lightMapUv:gi&&x(E.lightMap.channel),bumpMapUv:qt&&x(E.bumpMap.channel),normalMapUv:Yt&&x(E.normalMap.channel),displacementMapUv:Ct&&x(E.displacementMap.channel),emissiveMapUv:me&&x(E.emissiveMap.channel),metalnessMapUv:Rt&&x(E.metalnessMap.channel),roughnessMapUv:T&&x(E.roughnessMap.channel),anisotropyMapUv:ut&&x(E.anisotropyMap.channel),clearcoatMapUv:gt&&x(E.clearcoatMap.channel),clearcoatNormalMapUv:Kt&&x(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:et&&x(E.clearcoatRoughnessMap.channel),iridescenceMapUv:xt&&x(E.iridescenceMap.channel),iridescenceThicknessMapUv:Pt&&x(E.iridescenceThicknessMap.channel),sheenColorMapUv:Dt&&x(E.sheenColorMap.channel),sheenRoughnessMapUv:yt&&x(E.sheenRoughnessMap.channel),specularMapUv:$t&&x(E.specularMap.channel),specularColorMapUv:Vt&&x(E.specularColorMap.channel),specularIntensityMapUv:fe&&x(E.specularIntensityMap.channel),transmissionMapUv:D&&x(E.transmissionMap.channel),thicknessMapUv:lt&&x(E.thicknessMap.channel),alphaMapUv:K&&x(E.alphaMap.channel),vertexTangents:!!Y.attributes.tangent&&(Yt||M),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!Y.attributes.uv&&(we||K),fog:!!W,useFog:E.fog===!0,fogExp2:!!W&&W.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:Lt,skinning:F.isSkinnedMesh===!0,morphTargets:Y.morphAttributes.position!==void 0,morphNormals:Y.morphAttributes.normal!==void 0,morphColors:Y.morphAttributes.color!==void 0,morphTargetsCount:vt,morphTextureStride:Ft,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:E.dithering,shadowMapEnabled:s.shadowMap.enabled&&I.length>0,shadowMapType:s.shadowMap.type,toneMapping:Re,decodeVideoTexture:we&&E.map.isVideoTexture===!0&&jt.getTransfer(E.map.colorSpace)===he,decodeVideoTextureEmissive:me&&E.emissiveMap.isVideoTexture===!0&&jt.getTransfer(E.emissiveMap.colorSpace)===he,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===ai,flipSided:E.side===ti,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:Ot&&E.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ot&&E.extensions.multiDraw===!0||Wt)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return Je.vertexUv1s=h.has(1),Je.vertexUv2s=h.has(2),Je.vertexUv3s=h.has(3),h.clear(),Je}function p(E){let b=[];if(E.shaderID?b.push(E.shaderID):(b.push(E.customVertexShaderID),b.push(E.customFragmentShaderID)),E.defines!==void 0)for(let I in E.defines)b.push(I),b.push(E.defines[I]);return E.isRawShaderMaterial===!1&&(w(b,E),_(b,E),b.push(s.outputColorSpace)),b.push(E.customProgramCacheKey),b.join()}function w(E,b){E.push(b.precision),E.push(b.outputColorSpace),E.push(b.envMapMode),E.push(b.envMapCubeUVHeight),E.push(b.mapUv),E.push(b.alphaMapUv),E.push(b.lightMapUv),E.push(b.aoMapUv),E.push(b.bumpMapUv),E.push(b.normalMapUv),E.push(b.displacementMapUv),E.push(b.emissiveMapUv),E.push(b.metalnessMapUv),E.push(b.roughnessMapUv),E.push(b.anisotropyMapUv),E.push(b.clearcoatMapUv),E.push(b.clearcoatNormalMapUv),E.push(b.clearcoatRoughnessMapUv),E.push(b.iridescenceMapUv),E.push(b.iridescenceThicknessMapUv),E.push(b.sheenColorMapUv),E.push(b.sheenRoughnessMapUv),E.push(b.specularMapUv),E.push(b.specularColorMapUv),E.push(b.specularIntensityMapUv),E.push(b.transmissionMapUv),E.push(b.thicknessMapUv),E.push(b.combine),E.push(b.fogExp2),E.push(b.sizeAttenuation),E.push(b.morphTargetsCount),E.push(b.morphAttributeCount),E.push(b.numDirLights),E.push(b.numPointLights),E.push(b.numSpotLights),E.push(b.numSpotLightMaps),E.push(b.numHemiLights),E.push(b.numRectAreaLights),E.push(b.numDirLightShadows),E.push(b.numPointLightShadows),E.push(b.numSpotLightShadows),E.push(b.numSpotLightShadowsWithMaps),E.push(b.numLightProbes),E.push(b.shadowMapType),E.push(b.toneMapping),E.push(b.numClippingPlanes),E.push(b.numClipIntersection),E.push(b.depthPacking)}function _(E,b){a.disableAll(),b.supportsVertexTextures&&a.enable(0),b.instancing&&a.enable(1),b.instancingColor&&a.enable(2),b.instancingMorph&&a.enable(3),b.matcap&&a.enable(4),b.envMap&&a.enable(5),b.normalMapObjectSpace&&a.enable(6),b.normalMapTangentSpace&&a.enable(7),b.clearcoat&&a.enable(8),b.iridescence&&a.enable(9),b.alphaTest&&a.enable(10),b.vertexColors&&a.enable(11),b.vertexAlphas&&a.enable(12),b.vertexUv1s&&a.enable(13),b.vertexUv2s&&a.enable(14),b.vertexUv3s&&a.enable(15),b.vertexTangents&&a.enable(16),b.anisotropy&&a.enable(17),b.alphaHash&&a.enable(18),b.batching&&a.enable(19),b.dispersion&&a.enable(20),b.batchingColor&&a.enable(21),E.push(a.mask),a.disableAll(),b.fog&&a.enable(0),b.useFog&&a.enable(1),b.flatShading&&a.enable(2),b.logarithmicDepthBuffer&&a.enable(3),b.reverseDepthBuffer&&a.enable(4),b.skinning&&a.enable(5),b.morphTargets&&a.enable(6),b.morphNormals&&a.enable(7),b.morphColors&&a.enable(8),b.premultipliedAlpha&&a.enable(9),b.shadowMapEnabled&&a.enable(10),b.doubleSided&&a.enable(11),b.flipSided&&a.enable(12),b.useDepthPacking&&a.enable(13),b.dithering&&a.enable(14),b.transmission&&a.enable(15),b.sheen&&a.enable(16),b.opaque&&a.enable(17),b.pointsUvs&&a.enable(18),b.decodeVideoTexture&&a.enable(19),b.decodeVideoTextureEmissive&&a.enable(20),b.alphaToCoverage&&a.enable(21),E.push(a.mask)}function y(E){let b=g[E.type],I;if(b){let H=ki[b];I=tp.clone(H.uniforms)}else I=E.uniforms;return I}function R(E,b){let I;for(let H=0,F=c.length;H<F;H++){let W=c[H];if(W.cacheKey===b){I=W,++I.usedTimes;break}}return I===void 0&&(I=new lx(s,b,E,r),c.push(I)),I}function A(E){if(--E.usedTimes===0){let b=c.indexOf(E);c[b]=c[c.length-1],c.pop(),E.destroy()}}function C(E){l.remove(E)}function L(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:y,acquireProgram:R,releaseProgram:A,releaseShaderCache:C,programs:c,dispose:L}}function ux(){let s=new WeakMap;function t(o){return s.has(o)}function e(o){let a=s.get(o);return a===void 0&&(a={},s.set(o,a)),a}function i(o){s.delete(o)}function n(o,a,l){s.get(o)[a]=l}function r(){s=new WeakMap}return{has:t,get:e,remove:i,update:n,dispose:r}}function dx(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function iu(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function nu(){let s=[],t=0,e=[],i=[],n=[];function r(){t=0,e.length=0,i.length=0,n.length=0}function o(u,d,f,g,x,m){let p=s[t];return p===void 0?(p={id:u.id,object:u,geometry:d,material:f,groupOrder:g,renderOrder:u.renderOrder,z:x,group:m},s[t]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=f,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=x,p.group=m),t++,p}function a(u,d,f,g,x,m){let p=o(u,d,f,g,x,m);f.transmission>0?i.push(p):f.transparent===!0?n.push(p):e.push(p)}function l(u,d,f,g,x,m){let p=o(u,d,f,g,x,m);f.transmission>0?i.unshift(p):f.transparent===!0?n.unshift(p):e.unshift(p)}function h(u,d){e.length>1&&e.sort(u||dx),i.length>1&&i.sort(d||iu),n.length>1&&n.sort(d||iu)}function c(){for(let u=t,d=s.length;u<d;u++){let f=s[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:i,transparent:n,init:r,push:a,unshift:l,finish:c,sort:h}}function fx(){let s=new WeakMap;function t(i,n){let r=s.get(i),o;return r===void 0?(o=new nu,s.set(i,[o])):n>=r.length?(o=new nu,r.push(o)):o=r[n],o}function e(){s=new WeakMap}return{get:t,dispose:e}}function px(){let s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new v,color:new mt};break;case"SpotLight":e={position:new v,direction:new v,color:new mt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new v,color:new mt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new v,skyColor:new mt,groundColor:new mt};break;case"RectAreaLight":e={color:new mt,position:new v,halfWidth:new v,halfHeight:new v};break}return s[t.id]=e,e}}}function mx(){let s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ht};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ht};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ht,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}var gx=0;function xx(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function yx(s){let t=new px,e=mx(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)i.probe.push(new v);let n=new v,r=new Xt,o=new Xt;function a(h){let c=0,u=0,d=0;for(let E=0;E<9;E++)i.probe[E].set(0,0,0);let f=0,g=0,x=0,m=0,p=0,w=0,_=0,y=0,R=0,A=0,C=0;h.sort(xx);for(let E=0,b=h.length;E<b;E++){let I=h[E],H=I.color,F=I.intensity,W=I.distance,Y=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)c+=H.r*F,u+=H.g*F,d+=H.b*F;else if(I.isLightProbe){for(let O=0;O<9;O++)i.probe[O].addScaledVector(I.sh.coefficients[O],F);C++}else if(I.isDirectionalLight){let O=t.get(I);if(O.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let Z=I.shadow,G=e.get(I);G.shadowIntensity=Z.intensity,G.shadowBias=Z.bias,G.shadowNormalBias=Z.normalBias,G.shadowRadius=Z.radius,G.shadowMapSize=Z.mapSize,i.directionalShadow[f]=G,i.directionalShadowMap[f]=Y,i.directionalShadowMatrix[f]=I.shadow.matrix,w++}i.directional[f]=O,f++}else if(I.isSpotLight){let O=t.get(I);O.position.setFromMatrixPosition(I.matrixWorld),O.color.copy(H).multiplyScalar(F),O.distance=W,O.coneCos=Math.cos(I.angle),O.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),O.decay=I.decay,i.spot[x]=O;let Z=I.shadow;if(I.map&&(i.spotLightMap[R]=I.map,R++,Z.updateMatrices(I),I.castShadow&&A++),i.spotLightMatrix[x]=Z.matrix,I.castShadow){let G=e.get(I);G.shadowIntensity=Z.intensity,G.shadowBias=Z.bias,G.shadowNormalBias=Z.normalBias,G.shadowRadius=Z.radius,G.shadowMapSize=Z.mapSize,i.spotShadow[x]=G,i.spotShadowMap[x]=Y,y++}x++}else if(I.isRectAreaLight){let O=t.get(I);O.color.copy(H).multiplyScalar(F),O.halfWidth.set(I.width*.5,0,0),O.halfHeight.set(0,I.height*.5,0),i.rectArea[m]=O,m++}else if(I.isPointLight){let O=t.get(I);if(O.color.copy(I.color).multiplyScalar(I.intensity),O.distance=I.distance,O.decay=I.decay,I.castShadow){let Z=I.shadow,G=e.get(I);G.shadowIntensity=Z.intensity,G.shadowBias=Z.bias,G.shadowNormalBias=Z.normalBias,G.shadowRadius=Z.radius,G.shadowMapSize=Z.mapSize,G.shadowCameraNear=Z.camera.near,G.shadowCameraFar=Z.camera.far,i.pointShadow[g]=G,i.pointShadowMap[g]=Y,i.pointShadowMatrix[g]=I.shadow.matrix,_++}i.point[g]=O,g++}else if(I.isHemisphereLight){let O=t.get(I);O.skyColor.copy(I.color).multiplyScalar(F),O.groundColor.copy(I.groundColor).multiplyScalar(F),i.hemi[p]=O,p++}}m>0&&(s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=at.LTC_FLOAT_1,i.rectAreaLTC2=at.LTC_FLOAT_2):(i.rectAreaLTC1=at.LTC_HALF_1,i.rectAreaLTC2=at.LTC_HALF_2)),i.ambient[0]=c,i.ambient[1]=u,i.ambient[2]=d;let L=i.hash;(L.directionalLength!==f||L.pointLength!==g||L.spotLength!==x||L.rectAreaLength!==m||L.hemiLength!==p||L.numDirectionalShadows!==w||L.numPointShadows!==_||L.numSpotShadows!==y||L.numSpotMaps!==R||L.numLightProbes!==C)&&(i.directional.length=f,i.spot.length=x,i.rectArea.length=m,i.point.length=g,i.hemi.length=p,i.directionalShadow.length=w,i.directionalShadowMap.length=w,i.pointShadow.length=_,i.pointShadowMap.length=_,i.spotShadow.length=y,i.spotShadowMap.length=y,i.directionalShadowMatrix.length=w,i.pointShadowMatrix.length=_,i.spotLightMatrix.length=y+R-A,i.spotLightMap.length=R,i.numSpotLightShadowsWithMaps=A,i.numLightProbes=C,L.directionalLength=f,L.pointLength=g,L.spotLength=x,L.rectAreaLength=m,L.hemiLength=p,L.numDirectionalShadows=w,L.numPointShadows=_,L.numSpotShadows=y,L.numSpotMaps=R,L.numLightProbes=C,i.version=gx++)}function l(h,c){let u=0,d=0,f=0,g=0,x=0,m=c.matrixWorldInverse;for(let p=0,w=h.length;p<w;p++){let _=h[p];if(_.isDirectionalLight){let y=i.directional[u];y.direction.setFromMatrixPosition(_.matrixWorld),n.setFromMatrixPosition(_.target.matrixWorld),y.direction.sub(n),y.direction.transformDirection(m),u++}else if(_.isSpotLight){let y=i.spot[f];y.position.setFromMatrixPosition(_.matrixWorld),y.position.applyMatrix4(m),y.direction.setFromMatrixPosition(_.matrixWorld),n.setFromMatrixPosition(_.target.matrixWorld),y.direction.sub(n),y.direction.transformDirection(m),f++}else if(_.isRectAreaLight){let y=i.rectArea[g];y.position.setFromMatrixPosition(_.matrixWorld),y.position.applyMatrix4(m),o.identity(),r.copy(_.matrixWorld),r.premultiply(m),o.extractRotation(r),y.halfWidth.set(_.width*.5,0,0),y.halfHeight.set(0,_.height*.5,0),y.halfWidth.applyMatrix4(o),y.halfHeight.applyMatrix4(o),g++}else if(_.isPointLight){let y=i.point[d];y.position.setFromMatrixPosition(_.matrixWorld),y.position.applyMatrix4(m),d++}else if(_.isHemisphereLight){let y=i.hemi[x];y.direction.setFromMatrixPosition(_.matrixWorld),y.direction.transformDirection(m),x++}}}return{setup:a,setupView:l,state:i}}function su(s){let t=new yx(s),e=[],i=[];function n(c){h.camera=c,e.length=0,i.length=0}function r(c){e.push(c)}function o(c){i.push(c)}function a(){t.setup(e)}function l(c){t.setupView(e,c)}let h={lightsArray:e,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:n,state:h,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function vx(s){let t=new WeakMap;function e(n,r=0){let o=t.get(n),a;return o===void 0?(a=new su(s),t.set(n,[a])):r>=o.length?(a=new su(s),o.push(a)):a=o[r],a}function i(){t=new WeakMap}return{get:e,dispose:i}}var Ql=class extends Ni{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Tf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},th=class extends Ni{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},_x=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Mx=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function bx(s,t,e){let i=new cr,n=new ht,r=new ht,o=new ue,a=new Ql({depthPacking:Af}),l=new th,h={},c=e.maxTextureSize,u={[xn]:ti,[ti]:xn,[ai]:ai},d=new He({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ht},radius:{value:4}},vertexShader:_x,fragmentShader:Mx}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let g=new Ee;g.setAttribute("position",new Le(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new Nt(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Eu;let p=this.type;this.render=function(A,C,L){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;let E=s.getRenderTarget(),b=s.getActiveCubeFace(),I=s.getActiveMipmapLevel(),H=s.state;H.setBlending(mn),H.buffers.color.setClear(1,1,1,1),H.buffers.depth.setTest(!0),H.setScissorTest(!1);let F=p!==Xi&&this.type===Xi,W=p===Xi&&this.type!==Xi;for(let Y=0,O=A.length;Y<O;Y++){let Z=A[Y],G=Z.shadow;if(G===void 0){console.warn("THREE.WebGLShadowMap:",Z,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;n.copy(G.mapSize);let nt=G.getFrameExtents();if(n.multiply(nt),r.copy(G.mapSize),(n.x>c||n.y>c)&&(n.x>c&&(r.x=Math.floor(c/nt.x),n.x=r.x*nt.x,G.mapSize.x=r.x),n.y>c&&(r.y=Math.floor(c/nt.y),n.y=r.y*nt.y,G.mapSize.y=r.y)),G.map===null||F===!0||W===!0){let vt=this.type!==Xi?{minFilter:Ce,magFilter:Ce}:{};G.map!==null&&G.map.dispose(),G.map=new Ri(n.x,n.y,vt),G.map.texture.name=Z.name+".shadowMap",G.camera.updateProjectionMatrix()}s.setRenderTarget(G.map),s.clear();let rt=G.getViewportCount();for(let vt=0;vt<rt;vt++){let Ft=G.getViewport(vt);o.set(r.x*Ft.x,r.y*Ft.y,r.x*Ft.z,r.y*Ft.w),H.viewport(o),G.updateMatrices(Z,vt),i=G.getFrustum(),y(C,L,G.camera,Z,this.type)}G.isPointLightShadow!==!0&&this.type===Xi&&w(G,L),G.needsUpdate=!1}p=this.type,m.needsUpdate=!1,s.setRenderTarget(E,b,I)};function w(A,C){let L=t.update(x);d.defines.VSM_SAMPLES!==A.blurSamples&&(d.defines.VSM_SAMPLES=A.blurSamples,f.defines.VSM_SAMPLES=A.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new Ri(n.x,n.y)),d.uniforms.shadow_pass.value=A.map.texture,d.uniforms.resolution.value=A.mapSize,d.uniforms.radius.value=A.radius,s.setRenderTarget(A.mapPass),s.clear(),s.renderBufferDirect(C,null,L,d,x,null),f.uniforms.shadow_pass.value=A.mapPass.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,s.setRenderTarget(A.map),s.clear(),s.renderBufferDirect(C,null,L,f,x,null)}function _(A,C,L,E){let b=null,I=L.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(I!==void 0)b=I;else if(b=L.isPointLight===!0?l:a,s.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0){let H=b.uuid,F=C.uuid,W=h[H];W===void 0&&(W={},h[H]=W);let Y=W[F];Y===void 0&&(Y=b.clone(),W[F]=Y,C.addEventListener("dispose",R)),b=Y}if(b.visible=C.visible,b.wireframe=C.wireframe,E===Xi?b.side=C.shadowSide!==null?C.shadowSide:C.side:b.side=C.shadowSide!==null?C.shadowSide:u[C.side],b.alphaMap=C.alphaMap,b.alphaTest=C.alphaTest,b.map=C.map,b.clipShadows=C.clipShadows,b.clippingPlanes=C.clippingPlanes,b.clipIntersection=C.clipIntersection,b.displacementMap=C.displacementMap,b.displacementScale=C.displacementScale,b.displacementBias=C.displacementBias,b.wireframeLinewidth=C.wireframeLinewidth,b.linewidth=C.linewidth,L.isPointLight===!0&&b.isMeshDistanceMaterial===!0){let H=s.properties.get(b);H.light=L}return b}function y(A,C,L,E,b){if(A.visible===!1)return;if(A.layers.test(C.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&b===Xi)&&(!A.frustumCulled||i.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,A.matrixWorld);let F=t.update(A),W=A.material;if(Array.isArray(W)){let Y=F.groups;for(let O=0,Z=Y.length;O<Z;O++){let G=Y[O],nt=W[G.materialIndex];if(nt&&nt.visible){let rt=_(A,nt,E,b);A.onBeforeShadow(s,A,C,L,F,rt,G),s.renderBufferDirect(L,null,F,rt,A,G),A.onAfterShadow(s,A,C,L,F,rt,G)}}}else if(W.visible){let Y=_(A,W,E,b);A.onBeforeShadow(s,A,C,L,F,Y,null),s.renderBufferDirect(L,null,F,Y,A,null),A.onAfterShadow(s,A,C,L,F,Y,null)}}let H=A.children;for(let F=0,W=H.length;F<W;F++)y(H[F],C,L,E,b)}function R(A){A.target.removeEventListener("dispose",R);for(let L in h){let E=h[L],b=A.target.uuid;b in E&&(E[b].dispose(),delete E[b])}}}var wx={[il]:nl,[sl]:al,[rl]:ll,[bs]:ol,[nl]:il,[al]:sl,[ll]:rl,[ol]:bs};function Sx(s,t){function e(){let D=!1,lt=new ue,X=null,K=new ue(0,0,0,0);return{setMask:function(pt){X!==pt&&!D&&(s.colorMask(pt,pt,pt,pt),X=pt)},setLocked:function(pt){D=pt},setClear:function(pt,dt,Ot,Re,Je){Je===!0&&(pt*=Re,dt*=Re,Ot*=Re),lt.set(pt,dt,Ot,Re),K.equals(lt)===!1&&(s.clearColor(pt,dt,Ot,Re),K.copy(lt))},reset:function(){D=!1,X=null,K.set(-1,0,0,0)}}}function i(){let D=!1,lt=!1,X=null,K=null,pt=null;return{setReversed:function(dt){if(lt!==dt){let Ot=t.get("EXT_clip_control");lt?Ot.clipControlEXT(Ot.LOWER_LEFT_EXT,Ot.ZERO_TO_ONE_EXT):Ot.clipControlEXT(Ot.LOWER_LEFT_EXT,Ot.NEGATIVE_ONE_TO_ONE_EXT);let Re=pt;pt=null,this.setClear(Re)}lt=dt},getReversed:function(){return lt},setTest:function(dt){dt?ct(s.DEPTH_TEST):Lt(s.DEPTH_TEST)},setMask:function(dt){X!==dt&&!D&&(s.depthMask(dt),X=dt)},setFunc:function(dt){if(lt&&(dt=wx[dt]),K!==dt){switch(dt){case il:s.depthFunc(s.NEVER);break;case nl:s.depthFunc(s.ALWAYS);break;case sl:s.depthFunc(s.LESS);break;case bs:s.depthFunc(s.LEQUAL);break;case rl:s.depthFunc(s.EQUAL);break;case ol:s.depthFunc(s.GEQUAL);break;case al:s.depthFunc(s.GREATER);break;case ll:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}K=dt}},setLocked:function(dt){D=dt},setClear:function(dt){pt!==dt&&(lt&&(dt=1-dt),s.clearDepth(dt),pt=dt)},reset:function(){D=!1,X=null,K=null,pt=null,lt=!1}}}function n(){let D=!1,lt=null,X=null,K=null,pt=null,dt=null,Ot=null,Re=null,Je=null;return{setTest:function(oe){D||(oe?ct(s.STENCIL_TEST):Lt(s.STENCIL_TEST))},setMask:function(oe){lt!==oe&&!D&&(s.stencilMask(oe),lt=oe)},setFunc:function(oe,bi,Fi){(X!==oe||K!==bi||pt!==Fi)&&(s.stencilFunc(oe,bi,Fi),X=oe,K=bi,pt=Fi)},setOp:function(oe,bi,Fi){(dt!==oe||Ot!==bi||Re!==Fi)&&(s.stencilOp(oe,bi,Fi),dt=oe,Ot=bi,Re=Fi)},setLocked:function(oe){D=oe},setClear:function(oe){Je!==oe&&(s.clearStencil(oe),Je=oe)},reset:function(){D=!1,lt=null,X=null,K=null,pt=null,dt=null,Ot=null,Re=null,Je=null}}}let r=new e,o=new i,a=new n,l=new WeakMap,h=new WeakMap,c={},u={},d=new WeakMap,f=[],g=null,x=!1,m=null,p=null,w=null,_=null,y=null,R=null,A=null,C=new mt(0,0,0),L=0,E=!1,b=null,I=null,H=null,F=null,W=null,Y=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS),O=!1,Z=0,G=s.getParameter(s.VERSION);G.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(G)[1]),O=Z>=1):G.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),O=Z>=2);let nt=null,rt={},vt=s.getParameter(s.SCISSOR_BOX),Ft=s.getParameter(s.VIEWPORT),te=new ue().fromArray(vt),q=new ue().fromArray(Ft);function st(D,lt,X,K){let pt=new Uint8Array(4),dt=s.createTexture();s.bindTexture(D,dt),s.texParameteri(D,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(D,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Ot=0;Ot<X;Ot++)D===s.TEXTURE_3D||D===s.TEXTURE_2D_ARRAY?s.texImage3D(lt,0,s.RGBA,1,1,K,0,s.RGBA,s.UNSIGNED_BYTE,pt):s.texImage2D(lt+Ot,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,pt);return dt}let St={};St[s.TEXTURE_2D]=st(s.TEXTURE_2D,s.TEXTURE_2D,1),St[s.TEXTURE_CUBE_MAP]=st(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),St[s.TEXTURE_2D_ARRAY]=st(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),St[s.TEXTURE_3D]=st(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ct(s.DEPTH_TEST),o.setFunc(bs),qt(!1),Yt(ac),ct(s.CULL_FACE),U(mn);function ct(D){c[D]!==!0&&(s.enable(D),c[D]=!0)}function Lt(D){c[D]!==!1&&(s.disable(D),c[D]=!1)}function Ut(D,lt){return u[D]!==lt?(s.bindFramebuffer(D,lt),u[D]=lt,D===s.DRAW_FRAMEBUFFER&&(u[s.FRAMEBUFFER]=lt),D===s.FRAMEBUFFER&&(u[s.DRAW_FRAMEBUFFER]=lt),!0):!1}function Wt(D,lt){let X=f,K=!1;if(D){X=d.get(lt),X===void 0&&(X=[],d.set(lt,X));let pt=D.textures;if(X.length!==pt.length||X[0]!==s.COLOR_ATTACHMENT0){for(let dt=0,Ot=pt.length;dt<Ot;dt++)X[dt]=s.COLOR_ATTACHMENT0+dt;X.length=pt.length,K=!0}}else X[0]!==s.BACK&&(X[0]=s.BACK,K=!0);K&&s.drawBuffers(X)}function we(D){return g!==D?(s.useProgram(D),g=D,!0):!1}let Jt={[Dn]:s.FUNC_ADD,[jd]:s.FUNC_SUBTRACT,[Qd]:s.FUNC_REVERSE_SUBTRACT};Jt[tf]=s.MIN,Jt[ef]=s.MAX;let Ie={[nf]:s.ZERO,[sf]:s.ONE,[rf]:s.SRC_COLOR,[tl]:s.SRC_ALPHA,[uf]:s.SRC_ALPHA_SATURATE,[hf]:s.DST_COLOR,[af]:s.DST_ALPHA,[of]:s.ONE_MINUS_SRC_COLOR,[el]:s.ONE_MINUS_SRC_ALPHA,[cf]:s.ONE_MINUS_DST_COLOR,[lf]:s.ONE_MINUS_DST_ALPHA,[df]:s.CONSTANT_COLOR,[ff]:s.ONE_MINUS_CONSTANT_COLOR,[pf]:s.CONSTANT_ALPHA,[mf]:s.ONE_MINUS_CONSTANT_ALPHA};function U(D,lt,X,K,pt,dt,Ot,Re,Je,oe){if(D===mn){x===!0&&(Lt(s.BLEND),x=!1);return}if(x===!1&&(ct(s.BLEND),x=!0),D!==Kd){if(D!==m||oe!==E){if((p!==Dn||y!==Dn)&&(s.blendEquation(s.FUNC_ADD),p=Dn,y=Dn),oe)switch(D){case ys:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case lc:s.blendFunc(s.ONE,s.ONE);break;case hc:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case cc:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case ys:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case lc:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case hc:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case cc:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}w=null,_=null,R=null,A=null,C.set(0,0,0),L=0,m=D,E=oe}return}pt=pt||lt,dt=dt||X,Ot=Ot||K,(lt!==p||pt!==y)&&(s.blendEquationSeparate(Jt[lt],Jt[pt]),p=lt,y=pt),(X!==w||K!==_||dt!==R||Ot!==A)&&(s.blendFuncSeparate(Ie[X],Ie[K],Ie[dt],Ie[Ot]),w=X,_=K,R=dt,A=Ot),(Re.equals(C)===!1||Je!==L)&&(s.blendColor(Re.r,Re.g,Re.b,Je),C.copy(Re),L=Je),m=D,E=!1}function gi(D,lt){D.side===ai?Lt(s.CULL_FACE):ct(s.CULL_FACE);let X=D.side===ti;lt&&(X=!X),qt(X),D.blending===ys&&D.transparent===!1?U(mn):U(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),o.setFunc(D.depthFunc),o.setTest(D.depthTest),o.setMask(D.depthWrite),r.setMask(D.colorWrite);let K=D.stencilWrite;a.setTest(K),K&&(a.setMask(D.stencilWriteMask),a.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),a.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),me(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?ct(s.SAMPLE_ALPHA_TO_COVERAGE):Lt(s.SAMPLE_ALPHA_TO_COVERAGE)}function qt(D){b!==D&&(D?s.frontFace(s.CW):s.frontFace(s.CCW),b=D)}function Yt(D){D!==$d?(ct(s.CULL_FACE),D!==I&&(D===ac?s.cullFace(s.BACK):D===Zd?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Lt(s.CULL_FACE),I=D}function Ct(D){D!==H&&(O&&s.lineWidth(D),H=D)}function me(D,lt,X){D?(ct(s.POLYGON_OFFSET_FILL),(F!==lt||W!==X)&&(s.polygonOffset(lt,X),F=lt,W=X)):Lt(s.POLYGON_OFFSET_FILL)}function Rt(D){D?ct(s.SCISSOR_TEST):Lt(s.SCISSOR_TEST)}function T(D){D===void 0&&(D=s.TEXTURE0+Y-1),nt!==D&&(s.activeTexture(D),nt=D)}function M(D,lt,X){X===void 0&&(nt===null?X=s.TEXTURE0+Y-1:X=nt);let K=rt[X];K===void 0&&(K={type:void 0,texture:void 0},rt[X]=K),(K.type!==D||K.texture!==lt)&&(nt!==X&&(s.activeTexture(X),nt=X),s.bindTexture(D,lt||St[D]),K.type=D,K.texture=lt)}function N(){let D=rt[nt];D!==void 0&&D.type!==void 0&&(s.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function J(){try{s.compressedTexImage2D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function tt(){try{s.compressedTexImage3D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function $(){try{s.texSubImage2D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Et(){try{s.texSubImage3D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ut(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function gt(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Kt(){try{s.texStorage2D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function et(){try{s.texStorage3D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function xt(){try{s.texImage2D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Pt(){try{s.texImage3D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Dt(D){te.equals(D)===!1&&(s.scissor(D.x,D.y,D.z,D.w),te.copy(D))}function yt(D){q.equals(D)===!1&&(s.viewport(D.x,D.y,D.z,D.w),q.copy(D))}function $t(D,lt){let X=h.get(lt);X===void 0&&(X=new WeakMap,h.set(lt,X));let K=X.get(D);K===void 0&&(K=s.getUniformBlockIndex(lt,D.name),X.set(D,K))}function Vt(D,lt){let K=h.get(lt).get(D);l.get(lt)!==K&&(s.uniformBlockBinding(lt,K,D.__bindingPointIndex),l.set(lt,K))}function fe(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),o.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),c={},nt=null,rt={},u={},d=new WeakMap,f=[],g=null,x=!1,m=null,p=null,w=null,_=null,y=null,R=null,A=null,C=new mt(0,0,0),L=0,E=!1,b=null,I=null,H=null,F=null,W=null,te.set(0,0,s.canvas.width,s.canvas.height),q.set(0,0,s.canvas.width,s.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:ct,disable:Lt,bindFramebuffer:Ut,drawBuffers:Wt,useProgram:we,setBlending:U,setMaterial:gi,setFlipSided:qt,setCullFace:Yt,setLineWidth:Ct,setPolygonOffset:me,setScissorTest:Rt,activeTexture:T,bindTexture:M,unbindTexture:N,compressedTexImage2D:J,compressedTexImage3D:tt,texImage2D:xt,texImage3D:Pt,updateUBOMapping:$t,uniformBlockBinding:Vt,texStorage2D:Kt,texStorage3D:et,texSubImage2D:$,texSubImage3D:Et,compressedTexSubImage2D:ut,compressedTexSubImage3D:gt,scissor:Dt,viewport:yt,reset:fe}}function ru(s,t,e,i){let n=Ex(i);switch(e){case Pu:return s*t;case Lu:return s*t;case Du:return s*t*2;case Lh:return s*t/n.components*n.byteLength;case Dh:return s*t/n.components*n.byteLength;case ku:return s*t*2/n.components*n.byteLength;case kh:return s*t*2/n.components*n.byteLength;case Iu:return s*t*3/n.components*n.byteLength;case Ai:return s*t*4/n.components*n.byteLength;case zh:return s*t*4/n.components*n.byteLength;case uo:case fo:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case po:case mo:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case pl:case gl:return Math.max(s,16)*Math.max(t,8)/4;case fl:case ml:return Math.max(s,8)*Math.max(t,8)/2;case xl:case yl:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case vl:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case _l:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Ml:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case bl:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case wl:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case Sl:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case El:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case Tl:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case Al:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case Rl:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case Cl:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case Pl:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case Il:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case Ll:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case Dl:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case go:case kl:case zl:return Math.ceil(s/4)*Math.ceil(t/4)*16;case zu:case Ul:return Math.ceil(s/4)*Math.ceil(t/4)*8;case Nl:case Fl:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Ex(s){switch(s){case Ji:case Au:return{byteLength:1,components:1};case lr:case Ru:case Vn:return{byteLength:2,components:1};case Ph:case Ih:return{byteLength:2,components:4};case Nn:case Ch:case Ui:return{byteLength:4,components:1};case Cu:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}function Tx(s,t,e,i,n,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new ht,c=new WeakMap,u,d=new WeakMap,f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(T,M){return f?new OffscreenCanvas(T,M):vo("canvas")}function x(T,M,N){let J=1,tt=Rt(T);if((tt.width>N||tt.height>N)&&(J=N/Math.max(tt.width,tt.height)),J<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){let $=Math.floor(J*tt.width),Et=Math.floor(J*tt.height);u===void 0&&(u=g($,Et));let ut=M?g($,Et):u;return ut.width=$,ut.height=Et,ut.getContext("2d").drawImage(T,0,0,$,Et),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+tt.width+"x"+tt.height+") to ("+$+"x"+Et+")."),ut}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+tt.width+"x"+tt.height+")."),T;return T}function m(T){return T.generateMipmaps}function p(T){s.generateMipmap(T)}function w(T){return T.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?s.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function _(T,M,N,J,tt=!1){if(T!==null){if(s[T]!==void 0)return s[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let $=M;if(M===s.RED&&(N===s.FLOAT&&($=s.R32F),N===s.HALF_FLOAT&&($=s.R16F),N===s.UNSIGNED_BYTE&&($=s.R8)),M===s.RED_INTEGER&&(N===s.UNSIGNED_BYTE&&($=s.R8UI),N===s.UNSIGNED_SHORT&&($=s.R16UI),N===s.UNSIGNED_INT&&($=s.R32UI),N===s.BYTE&&($=s.R8I),N===s.SHORT&&($=s.R16I),N===s.INT&&($=s.R32I)),M===s.RG&&(N===s.FLOAT&&($=s.RG32F),N===s.HALF_FLOAT&&($=s.RG16F),N===s.UNSIGNED_BYTE&&($=s.RG8)),M===s.RG_INTEGER&&(N===s.UNSIGNED_BYTE&&($=s.RG8UI),N===s.UNSIGNED_SHORT&&($=s.RG16UI),N===s.UNSIGNED_INT&&($=s.RG32UI),N===s.BYTE&&($=s.RG8I),N===s.SHORT&&($=s.RG16I),N===s.INT&&($=s.RG32I)),M===s.RGB_INTEGER&&(N===s.UNSIGNED_BYTE&&($=s.RGB8UI),N===s.UNSIGNED_SHORT&&($=s.RGB16UI),N===s.UNSIGNED_INT&&($=s.RGB32UI),N===s.BYTE&&($=s.RGB8I),N===s.SHORT&&($=s.RGB16I),N===s.INT&&($=s.RGB32I)),M===s.RGBA_INTEGER&&(N===s.UNSIGNED_BYTE&&($=s.RGBA8UI),N===s.UNSIGNED_SHORT&&($=s.RGBA16UI),N===s.UNSIGNED_INT&&($=s.RGBA32UI),N===s.BYTE&&($=s.RGBA8I),N===s.SHORT&&($=s.RGBA16I),N===s.INT&&($=s.RGBA32I)),M===s.RGB&&N===s.UNSIGNED_INT_5_9_9_9_REV&&($=s.RGB9_E5),M===s.RGBA){let Et=tt?Jo:jt.getTransfer(J);N===s.FLOAT&&($=s.RGBA32F),N===s.HALF_FLOAT&&($=s.RGBA16F),N===s.UNSIGNED_BYTE&&($=Et===he?s.SRGB8_ALPHA8:s.RGBA8),N===s.UNSIGNED_SHORT_4_4_4_4&&($=s.RGBA4),N===s.UNSIGNED_SHORT_5_5_5_1&&($=s.RGB5_A1)}return($===s.R16F||$===s.R32F||$===s.RG16F||$===s.RG32F||$===s.RGBA16F||$===s.RGBA32F)&&t.get("EXT_color_buffer_float"),$}function y(T,M){let N;return T?M===null||M===Nn||M===Es?N=s.DEPTH24_STENCIL8:M===Ui?N=s.DEPTH32F_STENCIL8:M===lr&&(N=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===Nn||M===Es?N=s.DEPTH_COMPONENT24:M===Ui?N=s.DEPTH_COMPONENT32F:M===lr&&(N=s.DEPTH_COMPONENT16),N}function R(T,M){return m(T)===!0||T.isFramebufferTexture&&T.minFilter!==Ce&&T.minFilter!==pi?Math.log2(Math.max(M.width,M.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?M.mipmaps.length:1}function A(T){let M=T.target;M.removeEventListener("dispose",A),L(M),M.isVideoTexture&&c.delete(M)}function C(T){let M=T.target;M.removeEventListener("dispose",C),b(M)}function L(T){let M=i.get(T);if(M.__webglInit===void 0)return;let N=T.source,J=d.get(N);if(J){let tt=J[M.__cacheKey];tt.usedTimes--,tt.usedTimes===0&&E(T),Object.keys(J).length===0&&d.delete(N)}i.remove(T)}function E(T){let M=i.get(T);s.deleteTexture(M.__webglTexture);let N=T.source,J=d.get(N);delete J[M.__cacheKey],o.memory.textures--}function b(T){let M=i.get(T);if(T.depthTexture&&(T.depthTexture.dispose(),i.remove(T.depthTexture)),T.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(M.__webglFramebuffer[J]))for(let tt=0;tt<M.__webglFramebuffer[J].length;tt++)s.deleteFramebuffer(M.__webglFramebuffer[J][tt]);else s.deleteFramebuffer(M.__webglFramebuffer[J]);M.__webglDepthbuffer&&s.deleteRenderbuffer(M.__webglDepthbuffer[J])}else{if(Array.isArray(M.__webglFramebuffer))for(let J=0;J<M.__webglFramebuffer.length;J++)s.deleteFramebuffer(M.__webglFramebuffer[J]);else s.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&s.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&s.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let J=0;J<M.__webglColorRenderbuffer.length;J++)M.__webglColorRenderbuffer[J]&&s.deleteRenderbuffer(M.__webglColorRenderbuffer[J]);M.__webglDepthRenderbuffer&&s.deleteRenderbuffer(M.__webglDepthRenderbuffer)}let N=T.textures;for(let J=0,tt=N.length;J<tt;J++){let $=i.get(N[J]);$.__webglTexture&&(s.deleteTexture($.__webglTexture),o.memory.textures--),i.remove(N[J])}i.remove(T)}let I=0;function H(){I=0}function F(){let T=I;return T>=n.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+n.maxTextures),I+=1,T}function W(T){let M=[];return M.push(T.wrapS),M.push(T.wrapT),M.push(T.wrapR||0),M.push(T.magFilter),M.push(T.minFilter),M.push(T.anisotropy),M.push(T.internalFormat),M.push(T.format),M.push(T.type),M.push(T.generateMipmaps),M.push(T.premultiplyAlpha),M.push(T.flipY),M.push(T.unpackAlignment),M.push(T.colorSpace),M.join()}function Y(T,M){let N=i.get(T);if(T.isVideoTexture&&Ct(T),T.isRenderTargetTexture===!1&&T.version>0&&N.__version!==T.version){let J=T.image;if(J===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(J.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{q(N,T,M);return}}e.bindTexture(s.TEXTURE_2D,N.__webglTexture,s.TEXTURE0+M)}function O(T,M){let N=i.get(T);if(T.version>0&&N.__version!==T.version){q(N,T,M);return}e.bindTexture(s.TEXTURE_2D_ARRAY,N.__webglTexture,s.TEXTURE0+M)}function Z(T,M){let N=i.get(T);if(T.version>0&&N.__version!==T.version){q(N,T,M);return}e.bindTexture(s.TEXTURE_3D,N.__webglTexture,s.TEXTURE0+M)}function G(T,M){let N=i.get(T);if(T.version>0&&N.__version!==T.version){st(N,T,M);return}e.bindTexture(s.TEXTURE_CUBE_MAP,N.__webglTexture,s.TEXTURE0+M)}let nt={[ul]:s.REPEAT,[zn]:s.CLAMP_TO_EDGE,[dl]:s.MIRRORED_REPEAT},rt={[Ce]:s.NEAREST,[Ef]:s.NEAREST_MIPMAP_NEAREST,[Lr]:s.NEAREST_MIPMAP_LINEAR,[pi]:s.LINEAR,[xa]:s.LINEAR_MIPMAP_NEAREST,[Un]:s.LINEAR_MIPMAP_LINEAR},vt={[Cf]:s.NEVER,[zf]:s.ALWAYS,[Pf]:s.LESS,[Nu]:s.LEQUAL,[If]:s.EQUAL,[kf]:s.GEQUAL,[Lf]:s.GREATER,[Df]:s.NOTEQUAL};function Ft(T,M){if(M.type===Ui&&t.has("OES_texture_float_linear")===!1&&(M.magFilter===pi||M.magFilter===xa||M.magFilter===Lr||M.magFilter===Un||M.minFilter===pi||M.minFilter===xa||M.minFilter===Lr||M.minFilter===Un)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(T,s.TEXTURE_WRAP_S,nt[M.wrapS]),s.texParameteri(T,s.TEXTURE_WRAP_T,nt[M.wrapT]),(T===s.TEXTURE_3D||T===s.TEXTURE_2D_ARRAY)&&s.texParameteri(T,s.TEXTURE_WRAP_R,nt[M.wrapR]),s.texParameteri(T,s.TEXTURE_MAG_FILTER,rt[M.magFilter]),s.texParameteri(T,s.TEXTURE_MIN_FILTER,rt[M.minFilter]),M.compareFunction&&(s.texParameteri(T,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(T,s.TEXTURE_COMPARE_FUNC,vt[M.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===Ce||M.minFilter!==Lr&&M.minFilter!==Un||M.type===Ui&&t.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||i.get(M).__currentAnisotropy){let N=t.get("EXT_texture_filter_anisotropic");s.texParameterf(T,N.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,n.getMaxAnisotropy())),i.get(M).__currentAnisotropy=M.anisotropy}}}function te(T,M){let N=!1;T.__webglInit===void 0&&(T.__webglInit=!0,M.addEventListener("dispose",A));let J=M.source,tt=d.get(J);tt===void 0&&(tt={},d.set(J,tt));let $=W(M);if($!==T.__cacheKey){tt[$]===void 0&&(tt[$]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,N=!0),tt[$].usedTimes++;let Et=tt[T.__cacheKey];Et!==void 0&&(tt[T.__cacheKey].usedTimes--,Et.usedTimes===0&&E(M)),T.__cacheKey=$,T.__webglTexture=tt[$].texture}return N}function q(T,M,N){let J=s.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(J=s.TEXTURE_2D_ARRAY),M.isData3DTexture&&(J=s.TEXTURE_3D);let tt=te(T,M),$=M.source;e.bindTexture(J,T.__webglTexture,s.TEXTURE0+N);let Et=i.get($);if($.version!==Et.__version||tt===!0){e.activeTexture(s.TEXTURE0+N);let ut=jt.getPrimaries(jt.workingColorSpace),gt=M.colorSpace===fn?null:jt.getPrimaries(M.colorSpace),Kt=M.colorSpace===fn||ut===gt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,M.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,M.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Kt);let et=x(M.image,!1,n.maxTextureSize);et=me(M,et);let xt=r.convert(M.format,M.colorSpace),Pt=r.convert(M.type),Dt=_(M.internalFormat,xt,Pt,M.colorSpace,M.isVideoTexture);Ft(J,M);let yt,$t=M.mipmaps,Vt=M.isVideoTexture!==!0,fe=Et.__version===void 0||tt===!0,D=$.dataReady,lt=R(M,et);if(M.isDepthTexture)Dt=y(M.format===Ts,M.type),fe&&(Vt?e.texStorage2D(s.TEXTURE_2D,1,Dt,et.width,et.height):e.texImage2D(s.TEXTURE_2D,0,Dt,et.width,et.height,0,xt,Pt,null));else if(M.isDataTexture)if($t.length>0){Vt&&fe&&e.texStorage2D(s.TEXTURE_2D,lt,Dt,$t[0].width,$t[0].height);for(let X=0,K=$t.length;X<K;X++)yt=$t[X],Vt?D&&e.texSubImage2D(s.TEXTURE_2D,X,0,0,yt.width,yt.height,xt,Pt,yt.data):e.texImage2D(s.TEXTURE_2D,X,Dt,yt.width,yt.height,0,xt,Pt,yt.data);M.generateMipmaps=!1}else Vt?(fe&&e.texStorage2D(s.TEXTURE_2D,lt,Dt,et.width,et.height),D&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,et.width,et.height,xt,Pt,et.data)):e.texImage2D(s.TEXTURE_2D,0,Dt,et.width,et.height,0,xt,Pt,et.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){Vt&&fe&&e.texStorage3D(s.TEXTURE_2D_ARRAY,lt,Dt,$t[0].width,$t[0].height,et.depth);for(let X=0,K=$t.length;X<K;X++)if(yt=$t[X],M.format!==Ai)if(xt!==null)if(Vt){if(D)if(M.layerUpdates.size>0){let pt=ru(yt.width,yt.height,M.format,M.type);for(let dt of M.layerUpdates){let Ot=yt.data.subarray(dt*pt/yt.data.BYTES_PER_ELEMENT,(dt+1)*pt/yt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,X,0,0,dt,yt.width,yt.height,1,xt,Ot)}M.clearLayerUpdates()}else e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,X,0,0,0,yt.width,yt.height,et.depth,xt,yt.data)}else e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,X,Dt,yt.width,yt.height,et.depth,0,yt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Vt?D&&e.texSubImage3D(s.TEXTURE_2D_ARRAY,X,0,0,0,yt.width,yt.height,et.depth,xt,Pt,yt.data):e.texImage3D(s.TEXTURE_2D_ARRAY,X,Dt,yt.width,yt.height,et.depth,0,xt,Pt,yt.data)}else{Vt&&fe&&e.texStorage2D(s.TEXTURE_2D,lt,Dt,$t[0].width,$t[0].height);for(let X=0,K=$t.length;X<K;X++)yt=$t[X],M.format!==Ai?xt!==null?Vt?D&&e.compressedTexSubImage2D(s.TEXTURE_2D,X,0,0,yt.width,yt.height,xt,yt.data):e.compressedTexImage2D(s.TEXTURE_2D,X,Dt,yt.width,yt.height,0,yt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Vt?D&&e.texSubImage2D(s.TEXTURE_2D,X,0,0,yt.width,yt.height,xt,Pt,yt.data):e.texImage2D(s.TEXTURE_2D,X,Dt,yt.width,yt.height,0,xt,Pt,yt.data)}else if(M.isDataArrayTexture)if(Vt){if(fe&&e.texStorage3D(s.TEXTURE_2D_ARRAY,lt,Dt,et.width,et.height,et.depth),D)if(M.layerUpdates.size>0){let X=ru(et.width,et.height,M.format,M.type);for(let K of M.layerUpdates){let pt=et.data.subarray(K*X/et.data.BYTES_PER_ELEMENT,(K+1)*X/et.data.BYTES_PER_ELEMENT);e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,K,et.width,et.height,1,xt,Pt,pt)}M.clearLayerUpdates()}else e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,et.width,et.height,et.depth,xt,Pt,et.data)}else e.texImage3D(s.TEXTURE_2D_ARRAY,0,Dt,et.width,et.height,et.depth,0,xt,Pt,et.data);else if(M.isData3DTexture)Vt?(fe&&e.texStorage3D(s.TEXTURE_3D,lt,Dt,et.width,et.height,et.depth),D&&e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,et.width,et.height,et.depth,xt,Pt,et.data)):e.texImage3D(s.TEXTURE_3D,0,Dt,et.width,et.height,et.depth,0,xt,Pt,et.data);else if(M.isFramebufferTexture){if(fe)if(Vt)e.texStorage2D(s.TEXTURE_2D,lt,Dt,et.width,et.height);else{let X=et.width,K=et.height;for(let pt=0;pt<lt;pt++)e.texImage2D(s.TEXTURE_2D,pt,Dt,X,K,0,xt,Pt,null),X>>=1,K>>=1}}else if($t.length>0){if(Vt&&fe){let X=Rt($t[0]);e.texStorage2D(s.TEXTURE_2D,lt,Dt,X.width,X.height)}for(let X=0,K=$t.length;X<K;X++)yt=$t[X],Vt?D&&e.texSubImage2D(s.TEXTURE_2D,X,0,0,xt,Pt,yt):e.texImage2D(s.TEXTURE_2D,X,Dt,xt,Pt,yt);M.generateMipmaps=!1}else if(Vt){if(fe){let X=Rt(et);e.texStorage2D(s.TEXTURE_2D,lt,Dt,X.width,X.height)}D&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,xt,Pt,et)}else e.texImage2D(s.TEXTURE_2D,0,Dt,xt,Pt,et);m(M)&&p(J),Et.__version=$.version,M.onUpdate&&M.onUpdate(M)}T.__version=M.version}function st(T,M,N){if(M.image.length!==6)return;let J=te(T,M),tt=M.source;e.bindTexture(s.TEXTURE_CUBE_MAP,T.__webglTexture,s.TEXTURE0+N);let $=i.get(tt);if(tt.version!==$.__version||J===!0){e.activeTexture(s.TEXTURE0+N);let Et=jt.getPrimaries(jt.workingColorSpace),ut=M.colorSpace===fn?null:jt.getPrimaries(M.colorSpace),gt=M.colorSpace===fn||Et===ut?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,M.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,M.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,gt);let Kt=M.isCompressedTexture||M.image[0].isCompressedTexture,et=M.image[0]&&M.image[0].isDataTexture,xt=[];for(let K=0;K<6;K++)!Kt&&!et?xt[K]=x(M.image[K],!0,n.maxCubemapSize):xt[K]=et?M.image[K].image:M.image[K],xt[K]=me(M,xt[K]);let Pt=xt[0],Dt=r.convert(M.format,M.colorSpace),yt=r.convert(M.type),$t=_(M.internalFormat,Dt,yt,M.colorSpace),Vt=M.isVideoTexture!==!0,fe=$.__version===void 0||J===!0,D=tt.dataReady,lt=R(M,Pt);Ft(s.TEXTURE_CUBE_MAP,M);let X;if(Kt){Vt&&fe&&e.texStorage2D(s.TEXTURE_CUBE_MAP,lt,$t,Pt.width,Pt.height);for(let K=0;K<6;K++){X=xt[K].mipmaps;for(let pt=0;pt<X.length;pt++){let dt=X[pt];M.format!==Ai?Dt!==null?Vt?D&&e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,pt,0,0,dt.width,dt.height,Dt,dt.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,pt,$t,dt.width,dt.height,0,dt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Vt?D&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,pt,0,0,dt.width,dt.height,Dt,yt,dt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,pt,$t,dt.width,dt.height,0,Dt,yt,dt.data)}}}else{if(X=M.mipmaps,Vt&&fe){X.length>0&&lt++;let K=Rt(xt[0]);e.texStorage2D(s.TEXTURE_CUBE_MAP,lt,$t,K.width,K.height)}for(let K=0;K<6;K++)if(et){Vt?D&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,xt[K].width,xt[K].height,Dt,yt,xt[K].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,$t,xt[K].width,xt[K].height,0,Dt,yt,xt[K].data);for(let pt=0;pt<X.length;pt++){let Ot=X[pt].image[K].image;Vt?D&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,pt+1,0,0,Ot.width,Ot.height,Dt,yt,Ot.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,pt+1,$t,Ot.width,Ot.height,0,Dt,yt,Ot.data)}}else{Vt?D&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,Dt,yt,xt[K]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,$t,Dt,yt,xt[K]);for(let pt=0;pt<X.length;pt++){let dt=X[pt];Vt?D&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,pt+1,0,0,Dt,yt,dt.image[K]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,pt+1,$t,Dt,yt,dt.image[K])}}}m(M)&&p(s.TEXTURE_CUBE_MAP),$.__version=tt.version,M.onUpdate&&M.onUpdate(M)}T.__version=M.version}function St(T,M,N,J,tt,$){let Et=r.convert(N.format,N.colorSpace),ut=r.convert(N.type),gt=_(N.internalFormat,Et,ut,N.colorSpace),Kt=i.get(M),et=i.get(N);if(et.__renderTarget=M,!Kt.__hasExternalTextures){let xt=Math.max(1,M.width>>$),Pt=Math.max(1,M.height>>$);tt===s.TEXTURE_3D||tt===s.TEXTURE_2D_ARRAY?e.texImage3D(tt,$,gt,xt,Pt,M.depth,0,Et,ut,null):e.texImage2D(tt,$,gt,xt,Pt,0,Et,ut,null)}e.bindFramebuffer(s.FRAMEBUFFER,T),Yt(M)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,J,tt,et.__webglTexture,0,qt(M)):(tt===s.TEXTURE_2D||tt>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&tt<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,J,tt,et.__webglTexture,$),e.bindFramebuffer(s.FRAMEBUFFER,null)}function ct(T,M,N){if(s.bindRenderbuffer(s.RENDERBUFFER,T),M.depthBuffer){let J=M.depthTexture,tt=J&&J.isDepthTexture?J.type:null,$=y(M.stencilBuffer,tt),Et=M.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ut=qt(M);Yt(M)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ut,$,M.width,M.height):N?s.renderbufferStorageMultisample(s.RENDERBUFFER,ut,$,M.width,M.height):s.renderbufferStorage(s.RENDERBUFFER,$,M.width,M.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Et,s.RENDERBUFFER,T)}else{let J=M.textures;for(let tt=0;tt<J.length;tt++){let $=J[tt],Et=r.convert($.format,$.colorSpace),ut=r.convert($.type),gt=_($.internalFormat,Et,ut,$.colorSpace),Kt=qt(M);N&&Yt(M)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Kt,gt,M.width,M.height):Yt(M)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Kt,gt,M.width,M.height):s.renderbufferStorage(s.RENDERBUFFER,gt,M.width,M.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Lt(T,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(s.FRAMEBUFFER,T),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let J=i.get(M.depthTexture);J.__renderTarget=M,(!J.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),Y(M.depthTexture,0);let tt=J.__webglTexture,$=qt(M);if(M.depthTexture.format===vs)Yt(M)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,tt,0,$):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,tt,0);else if(M.depthTexture.format===Ts)Yt(M)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,tt,0,$):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,tt,0);else throw new Error("Unknown depthTexture format")}function Ut(T){let M=i.get(T),N=T.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==T.depthTexture){let J=T.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),J){let tt=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,J.removeEventListener("dispose",tt)};J.addEventListener("dispose",tt),M.__depthDisposeCallback=tt}M.__boundDepthTexture=J}if(T.depthTexture&&!M.__autoAllocateDepthBuffer){if(N)throw new Error("target.depthTexture not supported in Cube render targets");Lt(M.__webglFramebuffer,T)}else if(N){M.__webglDepthbuffer=[];for(let J=0;J<6;J++)if(e.bindFramebuffer(s.FRAMEBUFFER,M.__webglFramebuffer[J]),M.__webglDepthbuffer[J]===void 0)M.__webglDepthbuffer[J]=s.createRenderbuffer(),ct(M.__webglDepthbuffer[J],T,!1);else{let tt=T.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,$=M.__webglDepthbuffer[J];s.bindRenderbuffer(s.RENDERBUFFER,$),s.framebufferRenderbuffer(s.FRAMEBUFFER,tt,s.RENDERBUFFER,$)}}else if(e.bindFramebuffer(s.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=s.createRenderbuffer(),ct(M.__webglDepthbuffer,T,!1);else{let J=T.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,tt=M.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,tt),s.framebufferRenderbuffer(s.FRAMEBUFFER,J,s.RENDERBUFFER,tt)}e.bindFramebuffer(s.FRAMEBUFFER,null)}function Wt(T,M,N){let J=i.get(T);M!==void 0&&St(J.__webglFramebuffer,T,T.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),N!==void 0&&Ut(T)}function we(T){let M=T.texture,N=i.get(T),J=i.get(M);T.addEventListener("dispose",C);let tt=T.textures,$=T.isWebGLCubeRenderTarget===!0,Et=tt.length>1;if(Et||(J.__webglTexture===void 0&&(J.__webglTexture=s.createTexture()),J.__version=M.version,o.memory.textures++),$){N.__webglFramebuffer=[];for(let ut=0;ut<6;ut++)if(M.mipmaps&&M.mipmaps.length>0){N.__webglFramebuffer[ut]=[];for(let gt=0;gt<M.mipmaps.length;gt++)N.__webglFramebuffer[ut][gt]=s.createFramebuffer()}else N.__webglFramebuffer[ut]=s.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){N.__webglFramebuffer=[];for(let ut=0;ut<M.mipmaps.length;ut++)N.__webglFramebuffer[ut]=s.createFramebuffer()}else N.__webglFramebuffer=s.createFramebuffer();if(Et)for(let ut=0,gt=tt.length;ut<gt;ut++){let Kt=i.get(tt[ut]);Kt.__webglTexture===void 0&&(Kt.__webglTexture=s.createTexture(),o.memory.textures++)}if(T.samples>0&&Yt(T)===!1){N.__webglMultisampledFramebuffer=s.createFramebuffer(),N.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,N.__webglMultisampledFramebuffer);for(let ut=0;ut<tt.length;ut++){let gt=tt[ut];N.__webglColorRenderbuffer[ut]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,N.__webglColorRenderbuffer[ut]);let Kt=r.convert(gt.format,gt.colorSpace),et=r.convert(gt.type),xt=_(gt.internalFormat,Kt,et,gt.colorSpace,T.isXRRenderTarget===!0),Pt=qt(T);s.renderbufferStorageMultisample(s.RENDERBUFFER,Pt,xt,T.width,T.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ut,s.RENDERBUFFER,N.__webglColorRenderbuffer[ut])}s.bindRenderbuffer(s.RENDERBUFFER,null),T.depthBuffer&&(N.__webglDepthRenderbuffer=s.createRenderbuffer(),ct(N.__webglDepthRenderbuffer,T,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if($){e.bindTexture(s.TEXTURE_CUBE_MAP,J.__webglTexture),Ft(s.TEXTURE_CUBE_MAP,M);for(let ut=0;ut<6;ut++)if(M.mipmaps&&M.mipmaps.length>0)for(let gt=0;gt<M.mipmaps.length;gt++)St(N.__webglFramebuffer[ut][gt],T,M,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ut,gt);else St(N.__webglFramebuffer[ut],T,M,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ut,0);m(M)&&p(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Et){for(let ut=0,gt=tt.length;ut<gt;ut++){let Kt=tt[ut],et=i.get(Kt);e.bindTexture(s.TEXTURE_2D,et.__webglTexture),Ft(s.TEXTURE_2D,Kt),St(N.__webglFramebuffer,T,Kt,s.COLOR_ATTACHMENT0+ut,s.TEXTURE_2D,0),m(Kt)&&p(s.TEXTURE_2D)}e.unbindTexture()}else{let ut=s.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(ut=T.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(ut,J.__webglTexture),Ft(ut,M),M.mipmaps&&M.mipmaps.length>0)for(let gt=0;gt<M.mipmaps.length;gt++)St(N.__webglFramebuffer[gt],T,M,s.COLOR_ATTACHMENT0,ut,gt);else St(N.__webglFramebuffer,T,M,s.COLOR_ATTACHMENT0,ut,0);m(M)&&p(ut),e.unbindTexture()}T.depthBuffer&&Ut(T)}function Jt(T){let M=T.textures;for(let N=0,J=M.length;N<J;N++){let tt=M[N];if(m(tt)){let $=w(T),Et=i.get(tt).__webglTexture;e.bindTexture($,Et),p($),e.unbindTexture()}}}let Ie=[],U=[];function gi(T){if(T.samples>0){if(Yt(T)===!1){let M=T.textures,N=T.width,J=T.height,tt=s.COLOR_BUFFER_BIT,$=T.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Et=i.get(T),ut=M.length>1;if(ut)for(let gt=0;gt<M.length;gt++)e.bindFramebuffer(s.FRAMEBUFFER,Et.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+gt,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,Et.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+gt,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,Et.__webglMultisampledFramebuffer),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,Et.__webglFramebuffer);for(let gt=0;gt<M.length;gt++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(tt|=s.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(tt|=s.STENCIL_BUFFER_BIT)),ut){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Et.__webglColorRenderbuffer[gt]);let Kt=i.get(M[gt]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Kt,0)}s.blitFramebuffer(0,0,N,J,0,0,N,J,tt,s.NEAREST),l===!0&&(Ie.length=0,U.length=0,Ie.push(s.COLOR_ATTACHMENT0+gt),T.depthBuffer&&T.resolveDepthBuffer===!1&&(Ie.push($),U.push($),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,U)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Ie))}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),ut)for(let gt=0;gt<M.length;gt++){e.bindFramebuffer(s.FRAMEBUFFER,Et.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+gt,s.RENDERBUFFER,Et.__webglColorRenderbuffer[gt]);let Kt=i.get(M[gt]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,Et.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+gt,s.TEXTURE_2D,Kt,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,Et.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.resolveDepthBuffer===!1&&l){let M=T.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[M])}}}function qt(T){return Math.min(n.maxSamples,T.samples)}function Yt(T){let M=i.get(T);return T.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function Ct(T){let M=o.render.frame;c.get(T)!==M&&(c.set(T,M),T.update())}function me(T,M){let N=T.colorSpace,J=T.format,tt=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||N!==Ds&&N!==fn&&(jt.getTransfer(N)===he?(J!==Ai||tt!==Ji)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",N)),M}function Rt(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(h.width=T.naturalWidth||T.width,h.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(h.width=T.displayWidth,h.height=T.displayHeight):(h.width=T.width,h.height=T.height),h}this.allocateTextureUnit=F,this.resetTextureUnits=H,this.setTexture2D=Y,this.setTexture2DArray=O,this.setTexture3D=Z,this.setTextureCube=G,this.rebindTextures=Wt,this.setupRenderTarget=we,this.updateRenderTargetMipmap=Jt,this.updateMultisampleRenderTarget=gi,this.setupDepthRenderbuffer=Ut,this.setupFrameBufferTexture=St,this.useMultisampledRTT=Yt}function Ax(s,t){function e(i,n=fn){let r,o=jt.getTransfer(n);if(i===Ji)return s.UNSIGNED_BYTE;if(i===Ph)return s.UNSIGNED_SHORT_4_4_4_4;if(i===Ih)return s.UNSIGNED_SHORT_5_5_5_1;if(i===Cu)return s.UNSIGNED_INT_5_9_9_9_REV;if(i===Au)return s.BYTE;if(i===Ru)return s.SHORT;if(i===lr)return s.UNSIGNED_SHORT;if(i===Ch)return s.INT;if(i===Nn)return s.UNSIGNED_INT;if(i===Ui)return s.FLOAT;if(i===Vn)return s.HALF_FLOAT;if(i===Pu)return s.ALPHA;if(i===Iu)return s.RGB;if(i===Ai)return s.RGBA;if(i===Lu)return s.LUMINANCE;if(i===Du)return s.LUMINANCE_ALPHA;if(i===vs)return s.DEPTH_COMPONENT;if(i===Ts)return s.DEPTH_STENCIL;if(i===Lh)return s.RED;if(i===Dh)return s.RED_INTEGER;if(i===ku)return s.RG;if(i===kh)return s.RG_INTEGER;if(i===zh)return s.RGBA_INTEGER;if(i===uo||i===fo||i===po||i===mo)if(o===he)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===uo)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===fo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===po)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===mo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===uo)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===fo)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===po)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===mo)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===fl||i===pl||i===ml||i===gl)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===fl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===pl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===ml)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===gl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===xl||i===yl||i===vl)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(i===xl||i===yl)return o===he?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===vl)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===_l||i===Ml||i===bl||i===wl||i===Sl||i===El||i===Tl||i===Al||i===Rl||i===Cl||i===Pl||i===Il||i===Ll||i===Dl)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(i===_l)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Ml)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===bl)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===wl)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Sl)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===El)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Tl)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Al)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Rl)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Cl)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Pl)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Il)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Ll)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Dl)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===go||i===kl||i===zl)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(i===go)return o===he?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===kl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===zl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===zu||i===Ul||i===Nl||i===Fl)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(i===go)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Ul)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Nl)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Fl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Es?s.UNSIGNED_INT_24_8:s[i]!==void 0?s[i]:null}return{convert:e}}var eh=class extends Xe{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},se=class extends De{constructor(){super(),this.isGroup=!0,this.type="Group"}},Rx={type:"move"},sr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new se,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new se,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new v,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new v),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new se,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new v,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new v),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let n=null,r=null,o=null,a=this._targetRay,l=this._grip,h=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(h&&t.hand){o=!0;for(let x of t.hand.values()){let m=e.getJointPose(x,i),p=this._getHandJoint(h,x);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let c=h.joints["index-finger-tip"],u=h.joints["thumb-tip"],d=c.position.distanceTo(u.position),f=.02,g=.005;h.inputState.pinching&&d>f+g?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!h.inputState.pinching&&d<=f-g&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(n=e.getPose(t.targetRaySpace,i),n===null&&r!==null&&(n=r),n!==null&&(a.matrix.fromArray(n.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,n.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(n.linearVelocity)):a.hasLinearVelocity=!1,n.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(n.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Rx)))}return a!==null&&(a.visible=n!==null),l!==null&&(l.visible=r!==null),h!==null&&(h.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let i=new se;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}},Cx=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Px=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,ih=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,i){if(this.texture===null){let n=new li,r=t.properties.get(n);r.__webglTexture=e.texture,(e.depthNear!=i.depthNear||e.depthFar!=i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,i=new He({vertexShader:Cx,fragmentShader:Px,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Nt(new Ci(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},nh=class extends yn{constructor(t,e){super();let i=this,n=null,r=1,o=null,a="local-floor",l=1,h=null,c=null,u=null,d=null,f=null,g=null,x=new ih,m=e.getContextAttributes(),p=null,w=null,_=[],y=[],R=new ht,A=null,C=new Xe;C.viewport=new ue;let L=new Xe;L.viewport=new ue;let E=[C,L],b=new eh,I=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let st=_[q];return st===void 0&&(st=new sr,_[q]=st),st.getTargetRaySpace()},this.getControllerGrip=function(q){let st=_[q];return st===void 0&&(st=new sr,_[q]=st),st.getGripSpace()},this.getHand=function(q){let st=_[q];return st===void 0&&(st=new sr,_[q]=st),st.getHandSpace()};function F(q){let st=y.indexOf(q.inputSource);if(st===-1)return;let St=_[st];St!==void 0&&(St.update(q.inputSource,q.frame,h||o),St.dispatchEvent({type:q.type,data:q.inputSource}))}function W(){n.removeEventListener("select",F),n.removeEventListener("selectstart",F),n.removeEventListener("selectend",F),n.removeEventListener("squeeze",F),n.removeEventListener("squeezestart",F),n.removeEventListener("squeezeend",F),n.removeEventListener("end",W),n.removeEventListener("inputsourceschange",Y);for(let q=0;q<_.length;q++){let st=y[q];st!==null&&(y[q]=null,_[q].disconnect(st))}I=null,H=null,x.reset(),t.setRenderTarget(p),f=null,d=null,u=null,n=null,w=null,te.stop(),i.isPresenting=!1,t.setPixelRatio(A),t.setSize(R.width,R.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){r=q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){a=q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||o},this.setReferenceSpace=function(q){h=q},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return n},this.setSession=async function(q){if(n=q,n!==null){if(p=t.getRenderTarget(),n.addEventListener("select",F),n.addEventListener("selectstart",F),n.addEventListener("selectend",F),n.addEventListener("squeeze",F),n.addEventListener("squeezestart",F),n.addEventListener("squeezeend",F),n.addEventListener("end",W),n.addEventListener("inputsourceschange",Y),m.xrCompatible!==!0&&await e.makeXRCompatible(),A=t.getPixelRatio(),t.getSize(R),n.renderState.layers===void 0){let st={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(n,e,st),n.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),w=new Ri(f.framebufferWidth,f.framebufferHeight,{format:Ai,type:Ji,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let st=null,St=null,ct=null;m.depth&&(ct=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,st=m.stencil?Ts:vs,St=m.stencil?Es:Nn);let Lt={colorFormat:e.RGBA8,depthFormat:ct,scaleFactor:r};u=new XRWebGLBinding(n,e),d=u.createProjectionLayer(Lt),n.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),w=new Ri(d.textureWidth,d.textureHeight,{format:Ai,type:Ji,depthTexture:new Ro(d.textureWidth,d.textureHeight,St,void 0,void 0,void 0,void 0,void 0,void 0,st),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}w.isXRRenderTarget=!0,this.setFoveation(l),h=null,o=await n.requestReferenceSpace(a),te.setContext(n),te.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(n!==null)return n.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function Y(q){for(let st=0;st<q.removed.length;st++){let St=q.removed[st],ct=y.indexOf(St);ct>=0&&(y[ct]=null,_[ct].disconnect(St))}for(let st=0;st<q.added.length;st++){let St=q.added[st],ct=y.indexOf(St);if(ct===-1){for(let Ut=0;Ut<_.length;Ut++)if(Ut>=y.length){y.push(St),ct=Ut;break}else if(y[Ut]===null){y[Ut]=St,ct=Ut;break}if(ct===-1)break}let Lt=_[ct];Lt&&Lt.connect(St)}}let O=new v,Z=new v;function G(q,st,St){O.setFromMatrixPosition(st.matrixWorld),Z.setFromMatrixPosition(St.matrixWorld);let ct=O.distanceTo(Z),Lt=st.projectionMatrix.elements,Ut=St.projectionMatrix.elements,Wt=Lt[14]/(Lt[10]-1),we=Lt[14]/(Lt[10]+1),Jt=(Lt[9]+1)/Lt[5],Ie=(Lt[9]-1)/Lt[5],U=(Lt[8]-1)/Lt[0],gi=(Ut[8]+1)/Ut[0],qt=Wt*U,Yt=Wt*gi,Ct=ct/(-U+gi),me=Ct*-U;if(st.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(me),q.translateZ(Ct),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),Lt[10]===-1)q.projectionMatrix.copy(st.projectionMatrix),q.projectionMatrixInverse.copy(st.projectionMatrixInverse);else{let Rt=Wt+Ct,T=we+Ct,M=qt-me,N=Yt+(ct-me),J=Jt*we/T*Rt,tt=Ie*we/T*Rt;q.projectionMatrix.makePerspective(M,N,J,tt,Rt,T),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function nt(q,st){st===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(st.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(n===null)return;let st=q.near,St=q.far;x.texture!==null&&(x.depthNear>0&&(st=x.depthNear),x.depthFar>0&&(St=x.depthFar)),b.near=L.near=C.near=st,b.far=L.far=C.far=St,(I!==b.near||H!==b.far)&&(n.updateRenderState({depthNear:b.near,depthFar:b.far}),I=b.near,H=b.far),C.layers.mask=q.layers.mask|2,L.layers.mask=q.layers.mask|4,b.layers.mask=C.layers.mask|L.layers.mask;let ct=q.parent,Lt=b.cameras;nt(b,ct);for(let Ut=0;Ut<Lt.length;Ut++)nt(Lt[Ut],ct);Lt.length===2?G(b,C,L):b.projectionMatrix.copy(C.projectionMatrix),rt(q,b,ct)};function rt(q,st,St){St===null?q.matrix.copy(st.matrixWorld):(q.matrix.copy(St.matrixWorld),q.matrix.invert(),q.matrix.multiply(st.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(st.projectionMatrix),q.projectionMatrixInverse.copy(st.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=Hl*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return b},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(q){l=q,d!==null&&(d.fixedFoveation=q),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=q)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(b)};let vt=null;function Ft(q,st){if(c=st.getViewerPose(h||o),g=st,c!==null){let St=c.views;f!==null&&(t.setRenderTargetFramebuffer(w,f.framebuffer),t.setRenderTarget(w));let ct=!1;St.length!==b.cameras.length&&(b.cameras.length=0,ct=!0);for(let Ut=0;Ut<St.length;Ut++){let Wt=St[Ut],we=null;if(f!==null)we=f.getViewport(Wt);else{let Ie=u.getViewSubImage(d,Wt);we=Ie.viewport,Ut===0&&(t.setRenderTargetTextures(w,Ie.colorTexture,d.ignoreDepthValues?void 0:Ie.depthStencilTexture),t.setRenderTarget(w))}let Jt=E[Ut];Jt===void 0&&(Jt=new Xe,Jt.layers.enable(Ut),Jt.viewport=new ue,E[Ut]=Jt),Jt.matrix.fromArray(Wt.transform.matrix),Jt.matrix.decompose(Jt.position,Jt.quaternion,Jt.scale),Jt.projectionMatrix.fromArray(Wt.projectionMatrix),Jt.projectionMatrixInverse.copy(Jt.projectionMatrix).invert(),Jt.viewport.set(we.x,we.y,we.width,we.height),Ut===0&&(b.matrix.copy(Jt.matrix),b.matrix.decompose(b.position,b.quaternion,b.scale)),ct===!0&&b.cameras.push(Jt)}let Lt=n.enabledFeatures;if(Lt&&Lt.includes("depth-sensing")){let Ut=u.getDepthInformation(St[0]);Ut&&Ut.isValid&&Ut.texture&&x.init(t,Ut,n.renderState)}}for(let St=0;St<_.length;St++){let ct=y[St],Lt=_[St];ct!==null&&Lt!==void 0&&Lt.update(ct,st,h||o)}vt&&vt(q,st),st.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:st}),g=null}let te=new Hu;te.setAnimationLoop(Ft),this.setAnimationLoop=function(q){vt=q},this.dispose=function(){}}},In=new mi,Ix=new Xt;function Lx(s,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,Bu(s)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function n(m,p,w,_,y){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),u(m,p)):p.isMeshPhongMaterial?(r(m,p),c(m,p)):p.isMeshStandardMaterial?(r(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,y)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),x(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,w,_):p.isSpriteMaterial?h(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===ti&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===ti&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let w=t.get(p),_=w.envMap,y=w.envMapRotation;_&&(m.envMap.value=_,In.copy(y),In.x*=-1,In.y*=-1,In.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(In.y*=-1,In.z*=-1),m.envMapRotation.value.setFromMatrix4(Ix.makeRotationFromEuler(In)),m.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,w,_){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*w,m.scale.value=_*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,w){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===ti&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=w.texture,m.transmissionSamplerSize.value.set(w.width,w.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function x(m,p){let w=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(w.matrixWorld),m.nearDistance.value=w.shadow.camera.near,m.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:n}}function Dx(s,t,e,i){let n={},r={},o=[],a=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function l(w,_){let y=_.program;i.uniformBlockBinding(w,y)}function h(w,_){let y=n[w.id];y===void 0&&(g(w),y=c(w),n[w.id]=y,w.addEventListener("dispose",m));let R=_.program;i.updateUBOMapping(w,R);let A=t.render.frame;r[w.id]!==A&&(d(w),r[w.id]=A)}function c(w){let _=u();w.__bindingPointIndex=_;let y=s.createBuffer(),R=w.__size,A=w.usage;return s.bindBuffer(s.UNIFORM_BUFFER,y),s.bufferData(s.UNIFORM_BUFFER,R,A),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,_,y),y}function u(){for(let w=0;w<a;w++)if(o.indexOf(w)===-1)return o.push(w),w;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(w){let _=n[w.id],y=w.uniforms,R=w.__cache;s.bindBuffer(s.UNIFORM_BUFFER,_);for(let A=0,C=y.length;A<C;A++){let L=Array.isArray(y[A])?y[A]:[y[A]];for(let E=0,b=L.length;E<b;E++){let I=L[E];if(f(I,A,E,R)===!0){let H=I.__offset,F=Array.isArray(I.value)?I.value:[I.value],W=0;for(let Y=0;Y<F.length;Y++){let O=F[Y],Z=x(O);typeof O=="number"||typeof O=="boolean"?(I.__data[0]=O,s.bufferSubData(s.UNIFORM_BUFFER,H+W,I.__data)):O.isMatrix3?(I.__data[0]=O.elements[0],I.__data[1]=O.elements[1],I.__data[2]=O.elements[2],I.__data[3]=0,I.__data[4]=O.elements[3],I.__data[5]=O.elements[4],I.__data[6]=O.elements[5],I.__data[7]=0,I.__data[8]=O.elements[6],I.__data[9]=O.elements[7],I.__data[10]=O.elements[8],I.__data[11]=0):(O.toArray(I.__data,W),W+=Z.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,H,I.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function f(w,_,y,R){let A=w.value,C=_+"_"+y;if(R[C]===void 0)return typeof A=="number"||typeof A=="boolean"?R[C]=A:R[C]=A.clone(),!0;{let L=R[C];if(typeof A=="number"||typeof A=="boolean"){if(L!==A)return R[C]=A,!0}else if(L.equals(A)===!1)return L.copy(A),!0}return!1}function g(w){let _=w.uniforms,y=0,R=16;for(let C=0,L=_.length;C<L;C++){let E=Array.isArray(_[C])?_[C]:[_[C]];for(let b=0,I=E.length;b<I;b++){let H=E[b],F=Array.isArray(H.value)?H.value:[H.value];for(let W=0,Y=F.length;W<Y;W++){let O=F[W],Z=x(O),G=y%R,nt=G%Z.boundary,rt=G+nt;y+=nt,rt!==0&&R-rt<Z.storage&&(y+=R-rt),H.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),H.__offset=y,y+=Z.storage}}}let A=y%R;return A>0&&(y+=R-A),w.__size=y,w.__cache={},this}function x(w){let _={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(_.boundary=4,_.storage=4):w.isVector2?(_.boundary=8,_.storage=8):w.isVector3||w.isColor?(_.boundary=16,_.storage=12):w.isVector4?(_.boundary=16,_.storage=16):w.isMatrix3?(_.boundary=48,_.storage=48):w.isMatrix4?(_.boundary=64,_.storage=64):w.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",w),_}function m(w){let _=w.target;_.removeEventListener("dispose",m);let y=o.indexOf(_.__bindingPointIndex);o.splice(y,1),s.deleteBuffer(n[_.id]),delete n[_.id],delete r[_.id]}function p(){for(let w in n)s.deleteBuffer(n[w]);o=[],n={},r={}}return{bind:l,update:h,dispose:p}}var Co=class{constructor(t={}){let{canvas:e=Nf(),context:i=null,depth:n=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:h=!1,powerPreference:c="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let f;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=i.getContextAttributes().alpha}else f=o;let g=new Uint32Array(4),x=new Int32Array(4),m=null,p=null,w=[],_=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Be,this.toneMapping=gn,this.toneMappingExposure=1;let y=this,R=!1,A=0,C=0,L=null,E=-1,b=null,I=new ue,H=new ue,F=null,W=new mt(0),Y=0,O=e.width,Z=e.height,G=1,nt=null,rt=null,vt=new ue(0,0,O,Z),Ft=new ue(0,0,O,Z),te=!1,q=new cr,st=!1,St=!1,ct=new Xt,Lt=new Xt,Ut=new v,Wt=new ue,we={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Jt=!1;function Ie(){return L===null?G:1}let U=i;function gi(S,k){return e.getContext(S,k)}try{let S={alpha:!0,depth:n,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:h,powerPreference:c,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine","three.js r170"),e.addEventListener("webglcontextlost",K,!1),e.addEventListener("webglcontextrestored",pt,!1),e.addEventListener("webglcontextcreationerror",dt,!1),U===null){let k="webgl2";if(U=gi(k,S),U===null)throw gi(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(S){throw console.error("THREE.WebGLRenderer: "+S.message),S}let qt,Yt,Ct,me,Rt,T,M,N,J,tt,$,Et,ut,gt,Kt,et,xt,Pt,Dt,yt,$t,Vt,fe,D;function lt(){qt=new Z0(U),qt.init(),Vt=new Ax(U,qt),Yt=new G0(U,qt,t,Vt),Ct=new Sx(U,qt),Yt.reverseDepthBuffer&&d&&Ct.buffers.depth.setReversed(!0),me=new j0(U),Rt=new ux,T=new Tx(U,qt,Ct,Rt,Yt,Vt,me),M=new X0(y),N=new $0(y),J=new rp(U),fe=new H0(U,J),tt=new J0(U,J,me,fe),$=new tg(U,tt,J,me),Dt=new Q0(U,Yt,T),et=new W0(Rt),Et=new cx(y,M,N,qt,Yt,fe,et),ut=new Lx(y,Rt),gt=new fx,Kt=new vx(qt),Pt=new B0(y,M,N,Ct,$,f,l),xt=new bx(y,$,Yt),D=new Dx(U,me,Yt,Ct),yt=new V0(U,qt,me),$t=new K0(U,qt,me),me.programs=Et.programs,y.capabilities=Yt,y.extensions=qt,y.properties=Rt,y.renderLists=gt,y.shadowMap=xt,y.state=Ct,y.info=me}lt();let X=new nh(y,U);this.xr=X,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){let S=qt.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){let S=qt.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return G},this.setPixelRatio=function(S){S!==void 0&&(G=S,this.setSize(O,Z,!1))},this.getSize=function(S){return S.set(O,Z)},this.setSize=function(S,k,B=!0){if(X.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}O=S,Z=k,e.width=Math.floor(S*G),e.height=Math.floor(k*G),B===!0&&(e.style.width=S+"px",e.style.height=k+"px"),this.setViewport(0,0,S,k)},this.getDrawingBufferSize=function(S){return S.set(O*G,Z*G).floor()},this.setDrawingBufferSize=function(S,k,B){O=S,Z=k,G=B,e.width=Math.floor(S*B),e.height=Math.floor(k*B),this.setViewport(0,0,S,k)},this.getCurrentViewport=function(S){return S.copy(I)},this.getViewport=function(S){return S.copy(vt)},this.setViewport=function(S,k,B,V){S.isVector4?vt.set(S.x,S.y,S.z,S.w):vt.set(S,k,B,V),Ct.viewport(I.copy(vt).multiplyScalar(G).round())},this.getScissor=function(S){return S.copy(Ft)},this.setScissor=function(S,k,B,V){S.isVector4?Ft.set(S.x,S.y,S.z,S.w):Ft.set(S,k,B,V),Ct.scissor(H.copy(Ft).multiplyScalar(G).round())},this.getScissorTest=function(){return te},this.setScissorTest=function(S){Ct.setScissorTest(te=S)},this.setOpaqueSort=function(S){nt=S},this.setTransparentSort=function(S){rt=S},this.getClearColor=function(S){return S.copy(Pt.getClearColor())},this.setClearColor=function(){Pt.setClearColor.apply(Pt,arguments)},this.getClearAlpha=function(){return Pt.getClearAlpha()},this.setClearAlpha=function(){Pt.setClearAlpha.apply(Pt,arguments)},this.clear=function(S=!0,k=!0,B=!0){let V=0;if(S){let z=!1;if(L!==null){let it=L.texture.format;z=it===zh||it===kh||it===Dh}if(z){let it=L.texture.type,ft=it===Ji||it===Nn||it===lr||it===Es||it===Ph||it===Ih,Mt=Pt.getClearColor(),bt=Pt.getClearAlpha(),kt=Mt.r,Bt=Mt.g,wt=Mt.b;ft?(g[0]=kt,g[1]=Bt,g[2]=wt,g[3]=bt,U.clearBufferuiv(U.COLOR,0,g)):(x[0]=kt,x[1]=Bt,x[2]=wt,x[3]=bt,U.clearBufferiv(U.COLOR,0,x))}else V|=U.COLOR_BUFFER_BIT}k&&(V|=U.DEPTH_BUFFER_BIT),B&&(V|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),U.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",K,!1),e.removeEventListener("webglcontextrestored",pt,!1),e.removeEventListener("webglcontextcreationerror",dt,!1),gt.dispose(),Kt.dispose(),Rt.dispose(),M.dispose(),N.dispose(),$.dispose(),fe.dispose(),D.dispose(),Et.dispose(),X.dispose(),X.removeEventListener("sessionstart",Qh),X.removeEventListener("sessionend",tc),En.stop()};function K(S){S.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),R=!0}function pt(){console.log("THREE.WebGLRenderer: Context Restored."),R=!1;let S=me.autoReset,k=xt.enabled,B=xt.autoUpdate,V=xt.needsUpdate,z=xt.type;lt(),me.autoReset=S,xt.enabled=k,xt.autoUpdate=B,xt.needsUpdate=V,xt.type=z}function dt(S){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function Ot(S){let k=S.target;k.removeEventListener("dispose",Ot),Re(k)}function Re(S){Je(S),Rt.remove(S)}function Je(S){let k=Rt.get(S).programs;k!==void 0&&(k.forEach(function(B){Et.releaseProgram(B)}),S.isShaderMaterial&&Et.releaseShaderCache(S))}this.renderBufferDirect=function(S,k,B,V,z,it){k===null&&(k=we);let ft=z.isMesh&&z.matrixWorld.determinant()<0,Mt=Xd(S,k,B,V,z);Ct.setMaterial(V,ft);let bt=B.index,kt=1;if(V.wireframe===!0){if(bt=tt.getWireframeAttribute(B),bt===void 0)return;kt=2}let Bt=B.drawRange,wt=B.attributes.position,Qt=Bt.start*kt,pe=(Bt.start+Bt.count)*kt;it!==null&&(Qt=Math.max(Qt,it.start*kt),pe=Math.min(pe,(it.start+it.count)*kt)),bt!==null?(Qt=Math.max(Qt,0),pe=Math.min(pe,bt.count)):wt!=null&&(Qt=Math.max(Qt,0),pe=Math.min(pe,wt.count));let ge=pe-Qt;if(ge<0||ge===1/0)return;fe.setup(z,V,Mt,B,bt);let oi,ie=yt;if(bt!==null&&(oi=J.get(bt),ie=$t,ie.setIndex(oi)),z.isMesh)V.wireframe===!0?(Ct.setLineWidth(V.wireframeLinewidth*Ie()),ie.setMode(U.LINES)):ie.setMode(U.TRIANGLES);else if(z.isLine){let Tt=V.linewidth;Tt===void 0&&(Tt=1),Ct.setLineWidth(Tt*Ie()),z.isLineSegments?ie.setMode(U.LINES):z.isLineLoop?ie.setMode(U.LINE_LOOP):ie.setMode(U.LINE_STRIP)}else z.isPoints?ie.setMode(U.POINTS):z.isSprite&&ie.setMode(U.TRIANGLES);if(z.isBatchedMesh)if(z._multiDrawInstances!==null)ie.renderMultiDrawInstances(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount,z._multiDrawInstances);else if(qt.get("WEBGL_multi_draw"))ie.renderMultiDraw(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount);else{let Tt=z._multiDrawStarts,Oi=z._multiDrawCounts,ne=z._multiDrawCount,wi=bt?J.get(bt).bytesPerElement:1,Jn=Rt.get(V).currentProgram.getUniforms();for(let ui=0;ui<ne;ui++)Jn.setValue(U,"_gl_DrawID",ui),ie.render(Tt[ui]/wi,Oi[ui])}else if(z.isInstancedMesh)ie.renderInstances(Qt,ge,z.count);else if(B.isInstancedBufferGeometry){let Tt=B._maxInstanceCount!==void 0?B._maxInstanceCount:1/0,Oi=Math.min(B.instanceCount,Tt);ie.renderInstances(Qt,ge,Oi)}else ie.render(Qt,ge)};function oe(S,k,B){S.transparent===!0&&S.side===ai&&S.forceSinglePass===!1?(S.side=ti,S.needsUpdate=!0,Ir(S,k,B),S.side=xn,S.needsUpdate=!0,Ir(S,k,B),S.side=ai):Ir(S,k,B)}this.compile=function(S,k,B=null){B===null&&(B=S),p=Kt.get(B),p.init(k),_.push(p),B.traverseVisible(function(z){z.isLight&&z.layers.test(k.layers)&&(p.pushLight(z),z.castShadow&&p.pushShadow(z))}),S!==B&&S.traverseVisible(function(z){z.isLight&&z.layers.test(k.layers)&&(p.pushLight(z),z.castShadow&&p.pushShadow(z))}),p.setupLights();let V=new Set;return S.traverse(function(z){if(!(z.isMesh||z.isPoints||z.isLine||z.isSprite))return;let it=z.material;if(it)if(Array.isArray(it))for(let ft=0;ft<it.length;ft++){let Mt=it[ft];oe(Mt,B,z),V.add(Mt)}else oe(it,B,z),V.add(it)}),_.pop(),p=null,V},this.compileAsync=function(S,k,B=null){let V=this.compile(S,k,B);return new Promise(z=>{function it(){if(V.forEach(function(ft){Rt.get(ft).currentProgram.isReady()&&V.delete(ft)}),V.size===0){z(S);return}setTimeout(it,10)}qt.get("KHR_parallel_shader_compile")!==null?it():setTimeout(it,10)})};let bi=null;function Fi(S){bi&&bi(S)}function Qh(){En.stop()}function tc(){En.start()}let En=new Hu;En.setAnimationLoop(Fi),typeof self<"u"&&En.setContext(self),this.setAnimationLoop=function(S){bi=S,X.setAnimationLoop(S),S===null?En.stop():En.start()},X.addEventListener("sessionstart",Qh),X.addEventListener("sessionend",tc),this.render=function(S,k){if(k!==void 0&&k.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),X.enabled===!0&&X.isPresenting===!0&&(X.cameraAutoUpdate===!0&&X.updateCamera(k),k=X.getCamera()),S.isScene===!0&&S.onBeforeRender(y,S,k,L),p=Kt.get(S,_.length),p.init(k),_.push(p),Lt.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),q.setFromProjectionMatrix(Lt),St=this.localClippingEnabled,st=et.init(this.clippingPlanes,St),m=gt.get(S,w.length),m.init(),w.push(m),X.enabled===!0&&X.isPresenting===!0){let it=y.xr.getDepthSensingMesh();it!==null&&ga(it,k,-1/0,y.sortObjects)}ga(S,k,0,y.sortObjects),m.finish(),y.sortObjects===!0&&m.sort(nt,rt),Jt=X.enabled===!1||X.isPresenting===!1||X.hasDepthSensing()===!1,Jt&&Pt.addToRenderList(m,S),this.info.render.frame++,st===!0&&et.beginShadows();let B=p.state.shadowsArray;xt.render(B,S,k),st===!0&&et.endShadows(),this.info.autoReset===!0&&this.info.reset();let V=m.opaque,z=m.transmissive;if(p.setupLights(),k.isArrayCamera){let it=k.cameras;if(z.length>0)for(let ft=0,Mt=it.length;ft<Mt;ft++){let bt=it[ft];ic(V,z,S,bt)}Jt&&Pt.render(S);for(let ft=0,Mt=it.length;ft<Mt;ft++){let bt=it[ft];ec(m,S,bt,bt.viewport)}}else z.length>0&&ic(V,z,S,k),Jt&&Pt.render(S),ec(m,S,k);L!==null&&(T.updateMultisampleRenderTarget(L),T.updateRenderTargetMipmap(L)),S.isScene===!0&&S.onAfterRender(y,S,k),fe.resetDefaultState(),E=-1,b=null,_.pop(),_.length>0?(p=_[_.length-1],st===!0&&et.setGlobalState(y.clippingPlanes,p.state.camera)):p=null,w.pop(),w.length>0?m=w[w.length-1]:m=null};function ga(S,k,B,V){if(S.visible===!1)return;if(S.layers.test(k.layers)){if(S.isGroup)B=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(k);else if(S.isLight)p.pushLight(S),S.castShadow&&p.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||q.intersectsSprite(S)){V&&Wt.setFromMatrixPosition(S.matrixWorld).applyMatrix4(Lt);let ft=$.update(S),Mt=S.material;Mt.visible&&m.push(S,ft,Mt,B,Wt.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||q.intersectsObject(S))){let ft=$.update(S),Mt=S.material;if(V&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),Wt.copy(S.boundingSphere.center)):(ft.boundingSphere===null&&ft.computeBoundingSphere(),Wt.copy(ft.boundingSphere.center)),Wt.applyMatrix4(S.matrixWorld).applyMatrix4(Lt)),Array.isArray(Mt)){let bt=ft.groups;for(let kt=0,Bt=bt.length;kt<Bt;kt++){let wt=bt[kt],Qt=Mt[wt.materialIndex];Qt&&Qt.visible&&m.push(S,ft,Qt,B,Wt.z,wt)}}else Mt.visible&&m.push(S,ft,Mt,B,Wt.z,null)}}let it=S.children;for(let ft=0,Mt=it.length;ft<Mt;ft++)ga(it[ft],k,B,V)}function ec(S,k,B,V){let z=S.opaque,it=S.transmissive,ft=S.transparent;p.setupLightsView(B),st===!0&&et.setGlobalState(y.clippingPlanes,B),V&&Ct.viewport(I.copy(V)),z.length>0&&Pr(z,k,B),it.length>0&&Pr(it,k,B),ft.length>0&&Pr(ft,k,B),Ct.buffers.depth.setTest(!0),Ct.buffers.depth.setMask(!0),Ct.buffers.color.setMask(!0),Ct.setPolygonOffset(!1)}function ic(S,k,B,V){if((B.isScene===!0?B.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[V.id]===void 0&&(p.state.transmissionRenderTarget[V.id]=new Ri(1,1,{generateMipmaps:!0,type:qt.has("EXT_color_buffer_half_float")||qt.has("EXT_color_buffer_float")?Vn:Ji,minFilter:Un,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:jt.workingColorSpace}));let it=p.state.transmissionRenderTarget[V.id],ft=V.viewport||I;it.setSize(ft.z,ft.w);let Mt=y.getRenderTarget();y.setRenderTarget(it),y.getClearColor(W),Y=y.getClearAlpha(),Y<1&&y.setClearColor(16777215,.5),y.clear(),Jt&&Pt.render(B);let bt=y.toneMapping;y.toneMapping=gn;let kt=V.viewport;if(V.viewport!==void 0&&(V.viewport=void 0),p.setupLightsView(V),st===!0&&et.setGlobalState(y.clippingPlanes,V),Pr(S,B,V),T.updateMultisampleRenderTarget(it),T.updateRenderTargetMipmap(it),qt.has("WEBGL_multisampled_render_to_texture")===!1){let Bt=!1;for(let wt=0,Qt=k.length;wt<Qt;wt++){let pe=k[wt],ge=pe.object,oi=pe.geometry,ie=pe.material,Tt=pe.group;if(ie.side===ai&&ge.layers.test(V.layers)){let Oi=ie.side;ie.side=ti,ie.needsUpdate=!0,nc(ge,B,V,oi,ie,Tt),ie.side=Oi,ie.needsUpdate=!0,Bt=!0}}Bt===!0&&(T.updateMultisampleRenderTarget(it),T.updateRenderTargetMipmap(it))}y.setRenderTarget(Mt),y.setClearColor(W,Y),kt!==void 0&&(V.viewport=kt),y.toneMapping=bt}function Pr(S,k,B){let V=k.isScene===!0?k.overrideMaterial:null;for(let z=0,it=S.length;z<it;z++){let ft=S[z],Mt=ft.object,bt=ft.geometry,kt=V===null?ft.material:V,Bt=ft.group;Mt.layers.test(B.layers)&&nc(Mt,k,B,bt,kt,Bt)}}function nc(S,k,B,V,z,it){S.onBeforeRender(y,k,B,V,z,it),S.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),z.onBeforeRender(y,k,B,V,S,it),z.transparent===!0&&z.side===ai&&z.forceSinglePass===!1?(z.side=ti,z.needsUpdate=!0,y.renderBufferDirect(B,k,V,z,S,it),z.side=xn,z.needsUpdate=!0,y.renderBufferDirect(B,k,V,z,S,it),z.side=ai):y.renderBufferDirect(B,k,V,z,S,it),S.onAfterRender(y,k,B,V,z,it)}function Ir(S,k,B){k.isScene!==!0&&(k=we);let V=Rt.get(S),z=p.state.lights,it=p.state.shadowsArray,ft=z.state.version,Mt=Et.getParameters(S,z.state,it,k,B),bt=Et.getProgramCacheKey(Mt),kt=V.programs;V.environment=S.isMeshStandardMaterial?k.environment:null,V.fog=k.fog,V.envMap=(S.isMeshStandardMaterial?N:M).get(S.envMap||V.environment),V.envMapRotation=V.environment!==null&&S.envMap===null?k.environmentRotation:S.envMapRotation,kt===void 0&&(S.addEventListener("dispose",Ot),kt=new Map,V.programs=kt);let Bt=kt.get(bt);if(Bt!==void 0){if(V.currentProgram===Bt&&V.lightsStateVersion===ft)return rc(S,Mt),Bt}else Mt.uniforms=Et.getUniforms(S),S.onBeforeCompile(Mt,y),Bt=Et.acquireProgram(Mt,bt),kt.set(bt,Bt),V.uniforms=Mt.uniforms;let wt=V.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(wt.clippingPlanes=et.uniform),rc(S,Mt),V.needsLights=Yd(S),V.lightsStateVersion=ft,V.needsLights&&(wt.ambientLightColor.value=z.state.ambient,wt.lightProbe.value=z.state.probe,wt.directionalLights.value=z.state.directional,wt.directionalLightShadows.value=z.state.directionalShadow,wt.spotLights.value=z.state.spot,wt.spotLightShadows.value=z.state.spotShadow,wt.rectAreaLights.value=z.state.rectArea,wt.ltc_1.value=z.state.rectAreaLTC1,wt.ltc_2.value=z.state.rectAreaLTC2,wt.pointLights.value=z.state.point,wt.pointLightShadows.value=z.state.pointShadow,wt.hemisphereLights.value=z.state.hemi,wt.directionalShadowMap.value=z.state.directionalShadowMap,wt.directionalShadowMatrix.value=z.state.directionalShadowMatrix,wt.spotShadowMap.value=z.state.spotShadowMap,wt.spotLightMatrix.value=z.state.spotLightMatrix,wt.spotLightMap.value=z.state.spotLightMap,wt.pointShadowMap.value=z.state.pointShadowMap,wt.pointShadowMatrix.value=z.state.pointShadowMatrix),V.currentProgram=Bt,V.uniformsList=null,Bt}function sc(S){if(S.uniformsList===null){let k=S.currentProgram.getUniforms();S.uniformsList=Ms.seqWithValue(k.seq,S.uniforms)}return S.uniformsList}function rc(S,k){let B=Rt.get(S);B.outputColorSpace=k.outputColorSpace,B.batching=k.batching,B.batchingColor=k.batchingColor,B.instancing=k.instancing,B.instancingColor=k.instancingColor,B.instancingMorph=k.instancingMorph,B.skinning=k.skinning,B.morphTargets=k.morphTargets,B.morphNormals=k.morphNormals,B.morphColors=k.morphColors,B.morphTargetsCount=k.morphTargetsCount,B.numClippingPlanes=k.numClippingPlanes,B.numIntersection=k.numClipIntersection,B.vertexAlphas=k.vertexAlphas,B.vertexTangents=k.vertexTangents,B.toneMapping=k.toneMapping}function Xd(S,k,B,V,z){k.isScene!==!0&&(k=we),T.resetTextureUnits();let it=k.fog,ft=V.isMeshStandardMaterial?k.environment:null,Mt=L===null?y.outputColorSpace:L.isXRRenderTarget===!0?L.texture.colorSpace:Ds,bt=(V.isMeshStandardMaterial?N:M).get(V.envMap||ft),kt=V.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,Bt=!!B.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),wt=!!B.morphAttributes.position,Qt=!!B.morphAttributes.normal,pe=!!B.morphAttributes.color,ge=gn;V.toneMapped&&(L===null||L.isXRRenderTarget===!0)&&(ge=y.toneMapping);let oi=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,ie=oi!==void 0?oi.length:0,Tt=Rt.get(V),Oi=p.state.lights;if(st===!0&&(St===!0||S!==b)){let xi=S===b&&V.id===E;et.setState(V,S,xi)}let ne=!1;V.version===Tt.__version?(Tt.needsLights&&Tt.lightsStateVersion!==Oi.state.version||Tt.outputColorSpace!==Mt||z.isBatchedMesh&&Tt.batching===!1||!z.isBatchedMesh&&Tt.batching===!0||z.isBatchedMesh&&Tt.batchingColor===!0&&z.colorTexture===null||z.isBatchedMesh&&Tt.batchingColor===!1&&z.colorTexture!==null||z.isInstancedMesh&&Tt.instancing===!1||!z.isInstancedMesh&&Tt.instancing===!0||z.isSkinnedMesh&&Tt.skinning===!1||!z.isSkinnedMesh&&Tt.skinning===!0||z.isInstancedMesh&&Tt.instancingColor===!0&&z.instanceColor===null||z.isInstancedMesh&&Tt.instancingColor===!1&&z.instanceColor!==null||z.isInstancedMesh&&Tt.instancingMorph===!0&&z.morphTexture===null||z.isInstancedMesh&&Tt.instancingMorph===!1&&z.morphTexture!==null||Tt.envMap!==bt||V.fog===!0&&Tt.fog!==it||Tt.numClippingPlanes!==void 0&&(Tt.numClippingPlanes!==et.numPlanes||Tt.numIntersection!==et.numIntersection)||Tt.vertexAlphas!==kt||Tt.vertexTangents!==Bt||Tt.morphTargets!==wt||Tt.morphNormals!==Qt||Tt.morphColors!==pe||Tt.toneMapping!==ge||Tt.morphTargetsCount!==ie)&&(ne=!0):(ne=!0,Tt.__version=V.version);let wi=Tt.currentProgram;ne===!0&&(wi=Ir(V,k,z));let Jn=!1,ui=!1,Gs=!1,xe=wi.getUniforms(),Di=Tt.uniforms;if(Ct.useProgram(wi.program)&&(Jn=!0,ui=!0,Gs=!0),V.id!==E&&(E=V.id,ui=!0),Jn||b!==S){Ct.buffers.depth.getReversed()?(ct.copy(S.projectionMatrix),Of(ct),Bf(ct),xe.setValue(U,"projectionMatrix",ct)):xe.setValue(U,"projectionMatrix",S.projectionMatrix),xe.setValue(U,"viewMatrix",S.matrixWorldInverse);let rn=xe.map.cameraPosition;rn!==void 0&&rn.setValue(U,Ut.setFromMatrixPosition(S.matrixWorld)),Yt.logarithmicDepthBuffer&&xe.setValue(U,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&xe.setValue(U,"isOrthographic",S.isOrthographicCamera===!0),b!==S&&(b=S,ui=!0,Gs=!0)}if(z.isSkinnedMesh){xe.setOptional(U,z,"bindMatrix"),xe.setOptional(U,z,"bindMatrixInverse");let xi=z.skeleton;xi&&(xi.boneTexture===null&&xi.computeBoneTexture(),xe.setValue(U,"boneTexture",xi.boneTexture,T))}z.isBatchedMesh&&(xe.setOptional(U,z,"batchingTexture"),xe.setValue(U,"batchingTexture",z._matricesTexture,T),xe.setOptional(U,z,"batchingIdTexture"),xe.setValue(U,"batchingIdTexture",z._indirectTexture,T),xe.setOptional(U,z,"batchingColorTexture"),z._colorsTexture!==null&&xe.setValue(U,"batchingColorTexture",z._colorsTexture,T));let Ws=B.morphAttributes;if((Ws.position!==void 0||Ws.normal!==void 0||Ws.color!==void 0)&&Dt.update(z,B,wi),(ui||Tt.receiveShadow!==z.receiveShadow)&&(Tt.receiveShadow=z.receiveShadow,xe.setValue(U,"receiveShadow",z.receiveShadow)),V.isMeshGouraudMaterial&&V.envMap!==null&&(Di.envMap.value=bt,Di.flipEnvMap.value=bt.isCubeTexture&&bt.isRenderTargetTexture===!1?-1:1),V.isMeshStandardMaterial&&V.envMap===null&&k.environment!==null&&(Di.envMapIntensity.value=k.environmentIntensity),ui&&(xe.setValue(U,"toneMappingExposure",y.toneMappingExposure),Tt.needsLights&&qd(Di,Gs),it&&V.fog===!0&&ut.refreshFogUniforms(Di,it),ut.refreshMaterialUniforms(Di,V,G,Z,p.state.transmissionRenderTarget[S.id]),Ms.upload(U,sc(Tt),Di,T)),V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(Ms.upload(U,sc(Tt),Di,T),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&xe.setValue(U,"center",z.center),xe.setValue(U,"modelViewMatrix",z.modelViewMatrix),xe.setValue(U,"normalMatrix",z.normalMatrix),xe.setValue(U,"modelMatrix",z.matrixWorld),V.isShaderMaterial||V.isRawShaderMaterial){let xi=V.uniformsGroups;for(let rn=0,on=xi.length;rn<on;rn++){let oc=xi[rn];D.update(oc,wi),D.bind(oc,wi)}}return wi}function qd(S,k){S.ambientLightColor.needsUpdate=k,S.lightProbe.needsUpdate=k,S.directionalLights.needsUpdate=k,S.directionalLightShadows.needsUpdate=k,S.pointLights.needsUpdate=k,S.pointLightShadows.needsUpdate=k,S.spotLights.needsUpdate=k,S.spotLightShadows.needsUpdate=k,S.rectAreaLights.needsUpdate=k,S.hemisphereLights.needsUpdate=k}function Yd(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return L},this.setRenderTargetTextures=function(S,k,B){Rt.get(S.texture).__webglTexture=k,Rt.get(S.depthTexture).__webglTexture=B;let V=Rt.get(S);V.__hasExternalTextures=!0,V.__autoAllocateDepthBuffer=B===void 0,V.__autoAllocateDepthBuffer||qt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),V.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(S,k){let B=Rt.get(S);B.__webglFramebuffer=k,B.__useDefaultFramebuffer=k===void 0},this.setRenderTarget=function(S,k=0,B=0){L=S,A=k,C=B;let V=!0,z=null,it=!1,ft=!1;if(S){let bt=Rt.get(S);if(bt.__useDefaultFramebuffer!==void 0)Ct.bindFramebuffer(U.FRAMEBUFFER,null),V=!1;else if(bt.__webglFramebuffer===void 0)T.setupRenderTarget(S);else if(bt.__hasExternalTextures)T.rebindTextures(S,Rt.get(S.texture).__webglTexture,Rt.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){let wt=S.depthTexture;if(bt.__boundDepthTexture!==wt){if(wt!==null&&Rt.has(wt)&&(S.width!==wt.image.width||S.height!==wt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");T.setupDepthRenderbuffer(S)}}let kt=S.texture;(kt.isData3DTexture||kt.isDataArrayTexture||kt.isCompressedArrayTexture)&&(ft=!0);let Bt=Rt.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(Bt[k])?z=Bt[k][B]:z=Bt[k],it=!0):S.samples>0&&T.useMultisampledRTT(S)===!1?z=Rt.get(S).__webglMultisampledFramebuffer:Array.isArray(Bt)?z=Bt[B]:z=Bt,I.copy(S.viewport),H.copy(S.scissor),F=S.scissorTest}else I.copy(vt).multiplyScalar(G).floor(),H.copy(Ft).multiplyScalar(G).floor(),F=te;if(Ct.bindFramebuffer(U.FRAMEBUFFER,z)&&V&&Ct.drawBuffers(S,z),Ct.viewport(I),Ct.scissor(H),Ct.setScissorTest(F),it){let bt=Rt.get(S.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+k,bt.__webglTexture,B)}else if(ft){let bt=Rt.get(S.texture),kt=k||0;U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,bt.__webglTexture,B||0,kt)}E=-1},this.readRenderTargetPixels=function(S,k,B,V,z,it,ft){if(!(S&&S.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Mt=Rt.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&ft!==void 0&&(Mt=Mt[ft]),Mt){Ct.bindFramebuffer(U.FRAMEBUFFER,Mt);try{let bt=S.texture,kt=bt.format,Bt=bt.type;if(!Yt.textureFormatReadable(kt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Yt.textureTypeReadable(Bt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=S.width-V&&B>=0&&B<=S.height-z&&U.readPixels(k,B,V,z,Vt.convert(kt),Vt.convert(Bt),it)}finally{let bt=L!==null?Rt.get(L).__webglFramebuffer:null;Ct.bindFramebuffer(U.FRAMEBUFFER,bt)}}},this.readRenderTargetPixelsAsync=async function(S,k,B,V,z,it,ft){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Mt=Rt.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&ft!==void 0&&(Mt=Mt[ft]),Mt){let bt=S.texture,kt=bt.format,Bt=bt.type;if(!Yt.textureFormatReadable(kt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Yt.textureTypeReadable(Bt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(k>=0&&k<=S.width-V&&B>=0&&B<=S.height-z){Ct.bindFramebuffer(U.FRAMEBUFFER,Mt);let wt=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,wt),U.bufferData(U.PIXEL_PACK_BUFFER,it.byteLength,U.STREAM_READ),U.readPixels(k,B,V,z,Vt.convert(kt),Vt.convert(Bt),0);let Qt=L!==null?Rt.get(L).__webglFramebuffer:null;Ct.bindFramebuffer(U.FRAMEBUFFER,Qt);let pe=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await Ff(U,pe,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,wt),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,it),U.deleteBuffer(wt),U.deleteSync(pe),it}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(S,k=null,B=0){S.isTexture!==!0&&(ir("WebGLRenderer: copyFramebufferToTexture function signature has changed."),k=arguments[0]||null,S=arguments[1]);let V=Math.pow(2,-B),z=Math.floor(S.image.width*V),it=Math.floor(S.image.height*V),ft=k!==null?k.x:0,Mt=k!==null?k.y:0;T.setTexture2D(S,0),U.copyTexSubImage2D(U.TEXTURE_2D,B,0,0,ft,Mt,z,it),Ct.unbindTexture()},this.copyTextureToTexture=function(S,k,B=null,V=null,z=0){S.isTexture!==!0&&(ir("WebGLRenderer: copyTextureToTexture function signature has changed."),V=arguments[0]||null,S=arguments[1],k=arguments[2],z=arguments[3]||0,B=null);let it,ft,Mt,bt,kt,Bt,wt,Qt,pe,ge=S.isCompressedTexture?S.mipmaps[z]:S.image;B!==null?(it=B.max.x-B.min.x,ft=B.max.y-B.min.y,Mt=B.isBox3?B.max.z-B.min.z:1,bt=B.min.x,kt=B.min.y,Bt=B.isBox3?B.min.z:0):(it=ge.width,ft=ge.height,Mt=ge.depth||1,bt=0,kt=0,Bt=0),V!==null?(wt=V.x,Qt=V.y,pe=V.z):(wt=0,Qt=0,pe=0);let oi=Vt.convert(k.format),ie=Vt.convert(k.type),Tt;k.isData3DTexture?(T.setTexture3D(k,0),Tt=U.TEXTURE_3D):k.isDataArrayTexture||k.isCompressedArrayTexture?(T.setTexture2DArray(k,0),Tt=U.TEXTURE_2D_ARRAY):(T.setTexture2D(k,0),Tt=U.TEXTURE_2D),U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,k.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,k.unpackAlignment);let Oi=U.getParameter(U.UNPACK_ROW_LENGTH),ne=U.getParameter(U.UNPACK_IMAGE_HEIGHT),wi=U.getParameter(U.UNPACK_SKIP_PIXELS),Jn=U.getParameter(U.UNPACK_SKIP_ROWS),ui=U.getParameter(U.UNPACK_SKIP_IMAGES);U.pixelStorei(U.UNPACK_ROW_LENGTH,ge.width),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,ge.height),U.pixelStorei(U.UNPACK_SKIP_PIXELS,bt),U.pixelStorei(U.UNPACK_SKIP_ROWS,kt),U.pixelStorei(U.UNPACK_SKIP_IMAGES,Bt);let Gs=S.isDataArrayTexture||S.isData3DTexture,xe=k.isDataArrayTexture||k.isData3DTexture;if(S.isRenderTargetTexture||S.isDepthTexture){let Di=Rt.get(S),Ws=Rt.get(k),xi=Rt.get(Di.__renderTarget),rn=Rt.get(Ws.__renderTarget);Ct.bindFramebuffer(U.READ_FRAMEBUFFER,xi.__webglFramebuffer),Ct.bindFramebuffer(U.DRAW_FRAMEBUFFER,rn.__webglFramebuffer);for(let on=0;on<Mt;on++)Gs&&U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Rt.get(S).__webglTexture,z,Bt+on),S.isDepthTexture?(xe&&U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Rt.get(k).__webglTexture,z,pe+on),U.blitFramebuffer(bt,kt,it,ft,wt,Qt,it,ft,U.DEPTH_BUFFER_BIT,U.NEAREST)):xe?U.copyTexSubImage3D(Tt,z,wt,Qt,pe+on,bt,kt,it,ft):U.copyTexSubImage2D(Tt,z,wt,Qt,pe+on,bt,kt,it,ft);Ct.bindFramebuffer(U.READ_FRAMEBUFFER,null),Ct.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else xe?S.isDataTexture||S.isData3DTexture?U.texSubImage3D(Tt,z,wt,Qt,pe,it,ft,Mt,oi,ie,ge.data):k.isCompressedArrayTexture?U.compressedTexSubImage3D(Tt,z,wt,Qt,pe,it,ft,Mt,oi,ge.data):U.texSubImage3D(Tt,z,wt,Qt,pe,it,ft,Mt,oi,ie,ge):S.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,z,wt,Qt,it,ft,oi,ie,ge.data):S.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,z,wt,Qt,ge.width,ge.height,oi,ge.data):U.texSubImage2D(U.TEXTURE_2D,z,wt,Qt,it,ft,oi,ie,ge);U.pixelStorei(U.UNPACK_ROW_LENGTH,Oi),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,ne),U.pixelStorei(U.UNPACK_SKIP_PIXELS,wi),U.pixelStorei(U.UNPACK_SKIP_ROWS,Jn),U.pixelStorei(U.UNPACK_SKIP_IMAGES,ui),z===0&&k.generateMipmaps&&U.generateMipmap(Tt),Ct.unbindTexture()},this.copyTextureToTexture3D=function(S,k,B=null,V=null,z=0){return S.isTexture!==!0&&(ir("WebGLRenderer: copyTextureToTexture3D function signature has changed."),B=arguments[0]||null,V=arguments[1]||null,S=arguments[2],k=arguments[3],z=arguments[4]||0),ir('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(S,k,B,V,z)},this.initRenderTarget=function(S){Rt.get(S).__webglFramebuffer===void 0&&T.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?T.setTextureCube(S,0):S.isData3DTexture?T.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?T.setTexture2DArray(S,0):T.setTexture2D(S,0),Ct.unbindTexture()},this.resetState=function(){A=0,C=0,L=null,Ct.reset(),fe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Yi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorspace=jt._getDrawingBufferColorSpace(t),e.unpackColorSpace=jt._getUnpackColorSpace()}};var Po=class s{constructor(t,e=1,i=1e3){this.isFog=!0,this.name="",this.color=new mt(t),this.near=e,this.far=i}clone(){return new s(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Cs=class extends De{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new mi,this.environmentIntensity=1,this.environmentRotation=new mi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}},sh=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Bl,this.updateRanges=[],this.version=0,this.uuid=$i()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,i){t*=this.stride,i*=e.stride;for(let n=0,r=this.stride;n<r;n++)this.array[t+n]=e.array[i+n];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=$i()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(e,this.stride);return i.setUsage(this.usage),i}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=$i()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},ii=new v,Io=class s{constructor(t,e,i,n=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=i,this.normalized=n}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,i=this.data.count;e<i;e++)ii.fromBufferAttribute(this,e),ii.applyMatrix4(t),this.setXYZ(e,ii.x,ii.y,ii.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)ii.fromBufferAttribute(this,e),ii.applyNormalMatrix(t),this.setXYZ(e,ii.x,ii.y,ii.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)ii.fromBufferAttribute(this,e),ii.transformDirection(t),this.setXYZ(e,ii.x,ii.y,ii.z);return this}getComponent(t,e){let i=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(i=zi(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=ce(i,this.array)),this.data.array[t*this.data.stride+this.offset+e]=i,this}setX(t,e){return this.normalized&&(e=ce(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=ce(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=ce(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=ce(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=zi(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=zi(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=zi(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=zi(e,this.array)),e}setXY(t,e,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=ce(e,this.array),i=ce(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this}setXYZ(t,e,i,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=ce(e,this.array),i=ce(i,this.array),n=ce(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=n,this}setXYZW(t,e,i,n,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=ce(e,this.array),i=ce(i,this.array),n=ce(n,this.array),r=ce(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=n,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let i=0;i<this.count;i++){let n=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[n+r])}return new Le(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new s(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let i=0;i<this.count;i++){let n=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[n+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},ur=class extends Ni{static get type(){return"SpriteMaterial"}constructor(t){super(),this.isSpriteMaterial=!0,this.color=new mt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},us,Zs=new v,ds=new v,fs=new v,ps=new ht,Js=new ht,qu=new Xt,Qr=new v,Ks=new v,to=new v,ou=new ht,Ya=new ht,au=new ht,Lo=class extends De{constructor(t=new ur){if(super(),this.isSprite=!0,this.type="Sprite",us===void 0){us=new Ee;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new sh(e,5);us.setIndex([0,1,2,0,2,3]),us.setAttribute("position",new Io(i,3,0,!1)),us.setAttribute("uv",new Io(i,2,3,!1))}this.geometry=us,this.material=t,this.center=new ht(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),ds.setFromMatrixScale(this.matrixWorld),qu.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),fs.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&ds.multiplyScalar(-fs.z);let i=this.material.rotation,n,r;i!==0&&(r=Math.cos(i),n=Math.sin(i));let o=this.center;eo(Qr.set(-.5,-.5,0),fs,o,ds,n,r),eo(Ks.set(.5,-.5,0),fs,o,ds,n,r),eo(to.set(.5,.5,0),fs,o,ds,n,r),ou.set(0,0),Ya.set(1,0),au.set(1,1);let a=t.ray.intersectTriangle(Qr,Ks,to,!1,Zs);if(a===null&&(eo(Ks.set(-.5,.5,0),fs,o,ds,n,r),Ya.set(0,1),a=t.ray.intersectTriangle(Qr,to,Ks,!1,Zs),a===null))return;let l=t.ray.origin.distanceTo(Zs);l<t.near||l>t.far||e.push({distance:l,point:Zs.clone(),uv:pn.getInterpolation(Zs,Qr,Ks,to,ou,Ya,au,new ht),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};function eo(s,t,e,i,n,r){ps.subVectors(s,e).addScalar(.5).multiply(i),n!==void 0?(Js.x=r*ps.x-n*ps.y,Js.y=n*ps.x+r*ps.y):Js.copy(ps),s.copy(t),s.x+=Js.x,s.y+=Js.y,s.applyMatrix4(qu)}var dr=class extends li{constructor(t=null,e=1,i=1,n,r,o,a,l,h=Ce,c=Ce,u,d){super(null,o,a,l,h,c,n,r,u,d),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Do=class extends Le{constructor(t,e,i,n=1){super(t,e,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=n}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},ms=new Xt,lu=new Xt,io=[],hu=new Ki,kx=new Xt,js=new Nt,Qs=new ji,Ps=class extends Nt{constructor(t,e,i){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Do(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let n=0;n<i;n++)this.setMatrixAt(n,kx)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Ki),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,ms),hu.copy(t.boundingBox).applyMatrix4(ms),this.boundingBox.union(hu)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new ji),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,ms),Qs.copy(t.boundingSphere).applyMatrix4(ms),this.boundingSphere.union(Qs)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let i=e.morphTargetInfluences,n=this.morphTexture.source.data.data,r=i.length+1,o=t*r+1;for(let a=0;a<i.length;a++)i[a]=n[o+a]}raycast(t,e){let i=this.matrixWorld,n=this.count;if(js.geometry=this.geometry,js.material=this.material,js.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Qs.copy(this.boundingSphere),Qs.applyMatrix4(i),t.ray.intersectsSphere(Qs)!==!1))for(let r=0;r<n;r++){this.getMatrixAt(r,ms),lu.multiplyMatrices(i,ms),js.matrixWorld=lu,js.raycast(t,io);for(let o=0,a=io.length;o<a;o++){let l=io[o];l.instanceId=r,l.object=this,e.push(l)}io.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Do(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){let i=e.morphTargetInfluences,n=i.length+1;this.morphTexture===null&&(this.morphTexture=new dr(new Float32Array(n*this.count),n,this.count,Lh,Ui));let r=this.morphTexture.source.data.data,o=0;for(let h=0;h<i.length;h++)o+=i[h];let a=this.geometry.morphTargetsRelative?1:1-o,l=n*t;r[l]=a,r.set(i,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}};var fr=class extends Ni{static get type(){return"LineBasicMaterial"}constructor(t){super(),this.isLineBasicMaterial=!0,this.color=new mt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},ko=new v,zo=new v,cu=new Xt,tr=new hr,no=new ji,$a=new v,uu=new v,rh=class extends De{constructor(t=new Ee,e=new fr){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,i=[0];for(let n=1,r=e.count;n<r;n++)ko.fromBufferAttribute(e,n-1),zo.fromBufferAttribute(e,n),i[n]=i[n-1],i[n]+=ko.distanceTo(zo);t.setAttribute("lineDistance",new ae(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){let i=this.geometry,n=this.matrixWorld,r=t.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),no.copy(i.boundingSphere),no.applyMatrix4(n),no.radius+=r,t.ray.intersectsSphere(no)===!1)return;cu.copy(n).invert(),tr.copy(t.ray).applyMatrix4(cu);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,h=this.isLineSegments?2:1,c=i.index,d=i.attributes.position;if(c!==null){let f=Math.max(0,o.start),g=Math.min(c.count,o.start+o.count);for(let x=f,m=g-1;x<m;x+=h){let p=c.getX(x),w=c.getX(x+1),_=so(this,t,tr,l,p,w);_&&e.push(_)}if(this.isLineLoop){let x=c.getX(g-1),m=c.getX(f),p=so(this,t,tr,l,x,m);p&&e.push(p)}}else{let f=Math.max(0,o.start),g=Math.min(d.count,o.start+o.count);for(let x=f,m=g-1;x<m;x+=h){let p=so(this,t,tr,l,x,x+1);p&&e.push(p)}if(this.isLineLoop){let x=so(this,t,tr,l,g-1,f);x&&e.push(x)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let n=e[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=n.length;r<o;r++){let a=n[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function so(s,t,e,i,n,r){let o=s.geometry.attributes.position;if(ko.fromBufferAttribute(o,n),zo.fromBufferAttribute(o,r),e.distanceSqToSegment(ko,zo,$a,uu)>i)return;$a.applyMatrix4(s.matrixWorld);let l=t.ray.origin.distanceTo($a);if(!(l<t.near||l>t.far))return{distance:l,point:uu.clone().applyMatrix4(s.matrixWorld),index:n,face:null,faceIndex:null,barycoord:null,object:s}}var du=new v,fu=new v,Is=class extends rh{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,i=[];for(let n=0,r=e.count;n<r;n+=2)du.fromBufferAttribute(e,n),fu.fromBufferAttribute(e,n+1),i[n]=n===0?0:i[n-1],i[n+1]=i[n]+du.distanceTo(fu);t.setAttribute("lineDistance",new ae(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var oh=class extends Ni{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new mt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},pu=new Xt,ah=new hr,ro=new ji,oo=new v,Uo=class extends De{constructor(t=new Ee,e=new oh){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){let i=this.geometry,n=this.matrixWorld,r=t.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),ro.copy(i.boundingSphere),ro.applyMatrix4(n),ro.radius+=r,t.ray.intersectsSphere(ro)===!1)return;pu.copy(n).invert(),ah.copy(t.ray).applyMatrix4(pu);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,h=i.index,u=i.attributes.position;if(h!==null){let d=Math.max(0,o.start),f=Math.min(h.count,o.start+o.count);for(let g=d,x=f;g<x;g++){let m=h.getX(g);oo.fromBufferAttribute(u,m),mu(oo,m,l,n,t,e,this)}}else{let d=Math.max(0,o.start),f=Math.min(u.count,o.start+o.count);for(let g=d,x=f;g<x;g++)oo.fromBufferAttribute(u,g),mu(oo,g,l,n,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let n=e[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=n.length;r<o;r++){let a=n[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function mu(s,t,e,i,n,r,o){let a=ah.distanceSqToPoint(s);if(a<e){let l=new v;ah.closestPointToPoint(s,l),l.applyMatrix4(i);let h=n.ray.origin.distanceTo(l);if(h<n.near||h>n.far)return;r.push({distance:h,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var Fn=class extends li{constructor(t,e,i,n,r,o,a,l,h){super(t,e,i,n,r,o,a,l,h),this.isCanvasTexture=!0,this.needsUpdate=!0}},vi=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){let i=this.getUtoTmapping(t);return this.getPoint(i,e)}getPoints(t=5){let e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return e}getSpacedPoints(t=5){let e=[];for(let i=0;i<=t;i++)e.push(this.getPointAt(i/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],i,n=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)i=this.getPoint(o/t),r+=i.distanceTo(n),e.push(r),n=i;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){let i=this.getLengths(),n=0,r=i.length,o;e?o=e:o=t*i[r-1];let a=0,l=r-1,h;for(;a<=l;)if(n=Math.floor(a+(l-a)/2),h=i[n]-o,h<0)a=n+1;else if(h>0)l=n-1;else{l=n;break}if(n=l,i[n]===o)return n/(r-1);let c=i[n],d=i[n+1]-c,f=(o-c)/d;return(n+f)/(r-1)}getTangent(t,e){let n=t-1e-4,r=t+1e-4;n<0&&(n=0),r>1&&(r=1);let o=this.getPoint(n),a=this.getPoint(r),l=e||(o.isVector2?new ht:new v);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){let i=this.getUtoTmapping(t);return this.getTangent(i,e)}computeFrenetFrames(t,e){let i=new v,n=[],r=[],o=[],a=new v,l=new Xt;for(let f=0;f<=t;f++){let g=f/t;n[f]=this.getTangentAt(g,new v)}r[0]=new v,o[0]=new v;let h=Number.MAX_VALUE,c=Math.abs(n[0].x),u=Math.abs(n[0].y),d=Math.abs(n[0].z);c<=h&&(h=c,i.set(1,0,0)),u<=h&&(h=u,i.set(0,1,0)),d<=h&&i.set(0,0,1),a.crossVectors(n[0],i).normalize(),r[0].crossVectors(n[0],a),o[0].crossVectors(n[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(n[f-1],n[f]),a.length()>Number.EPSILON){a.normalize();let g=Math.acos(Qe(n[f-1].dot(n[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(a,g))}o[f].crossVectors(n[f],r[f])}if(e===!0){let f=Math.acos(Qe(r[0].dot(r[t]),-1,1));f/=t,n[0].dot(a.crossVectors(r[0],r[t]))>0&&(f=-f);for(let g=1;g<=t;g++)r[g].applyMatrix4(l.makeRotationAxis(n[g],f*g)),o[g].crossVectors(n[g],r[g])}return{tangents:n,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},pr=class extends vi{constructor(t=0,e=0,i=1,n=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=i,this.yRadius=n,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new ht){let i=e,n=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=n;for(;r>n;)r-=n;r<Number.EPSILON&&(o?r=0:r=n),this.aClockwise===!0&&!o&&(r===n?r=-n:r=r-n);let a=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(a),h=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let c=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,f=h-this.aY;l=d*c-f*u+this.aX,h=d*u+f*c+this.aY}return i.set(l,h)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},lh=class extends pr{constructor(t,e,i,n,r,o){super(t,e,i,i,n,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function Nh(){let s=0,t=0,e=0,i=0;function n(r,o,a,l){s=r,t=a,e=-3*r+3*o-2*a-l,i=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,h){n(o,a,h*(a-r),h*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,h,c,u){let d=(o-r)/h-(a-r)/(h+c)+(a-o)/c,f=(a-o)/c-(l-o)/(c+u)+(l-a)/u;d*=c,f*=c,n(o,a,d,f)},calc:function(r){let o=r*r,a=o*r;return s+t*r+e*o+i*a}}}var ao=new v,Za=new Nh,Ja=new Nh,Ka=new Nh,hh=class extends vi{constructor(t=[],e=!1,i="centripetal",n=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=i,this.tension=n}getPoint(t,e=new v){let i=e,n=this.points,r=n.length,o=(r-(this.closed?0:1))*t,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let h,c;this.closed||a>0?h=n[(a-1)%r]:(ao.subVectors(n[0],n[1]).add(n[0]),h=ao);let u=n[a%r],d=n[(a+1)%r];if(this.closed||a+2<r?c=n[(a+2)%r]:(ao.subVectors(n[r-1],n[r-2]).add(n[r-1]),c=ao),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,g=Math.pow(h.distanceToSquared(u),f),x=Math.pow(u.distanceToSquared(d),f),m=Math.pow(d.distanceToSquared(c),f);x<1e-4&&(x=1),g<1e-4&&(g=x),m<1e-4&&(m=x),Za.initNonuniformCatmullRom(h.x,u.x,d.x,c.x,g,x,m),Ja.initNonuniformCatmullRom(h.y,u.y,d.y,c.y,g,x,m),Ka.initNonuniformCatmullRom(h.z,u.z,d.z,c.z,g,x,m)}else this.curveType==="catmullrom"&&(Za.initCatmullRom(h.x,u.x,d.x,c.x,this.tension),Ja.initCatmullRom(h.y,u.y,d.y,c.y,this.tension),Ka.initCatmullRom(h.z,u.z,d.z,c.z,this.tension));return i.set(Za.calc(l),Ja.calc(l),Ka.calc(l)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let n=t.points[e];this.points.push(n.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){let n=this.points[e];t.points.push(n.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let n=t.points[e];this.points.push(new v().fromArray(n))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function gu(s,t,e,i,n){let r=(i-t)*.5,o=(n-e)*.5,a=s*s,l=s*a;return(2*e-2*i+r+o)*l+(-3*e+3*i-2*r-o)*a+r*s+e}function zx(s,t){let e=1-s;return e*e*t}function Ux(s,t){return 2*(1-s)*s*t}function Nx(s,t){return s*s*t}function rr(s,t,e,i){return zx(s,t)+Ux(s,e)+Nx(s,i)}function Fx(s,t){let e=1-s;return e*e*e*t}function Ox(s,t){let e=1-s;return 3*e*e*s*t}function Bx(s,t){return 3*(1-s)*s*s*t}function Hx(s,t){return s*s*s*t}function or(s,t,e,i,n){return Fx(s,t)+Ox(s,e)+Bx(s,i)+Hx(s,n)}var No=class extends vi{constructor(t=new ht,e=new ht,i=new ht,n=new ht){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=i,this.v3=n}getPoint(t,e=new ht){let i=e,n=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(or(t,n.x,r.x,o.x,a.x),or(t,n.y,r.y,o.y,a.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},ch=class extends vi{constructor(t=new v,e=new v,i=new v,n=new v){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=i,this.v3=n}getPoint(t,e=new v){let i=e,n=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(or(t,n.x,r.x,o.x,a.x),or(t,n.y,r.y,o.y,a.y),or(t,n.z,r.z,o.z,a.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Fo=class extends vi{constructor(t=new ht,e=new ht){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new ht){let i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new ht){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},uh=class extends vi{constructor(t=new v,e=new v){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new v){let i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new v){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Oo=class extends vi{constructor(t=new ht,e=new ht,i=new ht){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new ht){let i=e,n=this.v0,r=this.v1,o=this.v2;return i.set(rr(t,n.x,r.x,o.x),rr(t,n.y,r.y,o.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},dh=class extends vi{constructor(t=new v,e=new v,i=new v){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new v){let i=e,n=this.v0,r=this.v1,o=this.v2;return i.set(rr(t,n.x,r.x,o.x),rr(t,n.y,r.y,o.y),rr(t,n.z,r.z,o.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Bo=class extends vi{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new ht){let i=e,n=this.points,r=(n.length-1)*t,o=Math.floor(r),a=r-o,l=n[o===0?o:o-1],h=n[o],c=n[o>n.length-2?n.length-1:o+1],u=n[o>n.length-3?n.length-1:o+2];return i.set(gu(a,l.x,h.x,c.x,u.x),gu(a,l.y,h.y,c.y,u.y)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let n=t.points[e];this.points.push(n.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){let n=this.points[e];t.points.push(n.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let n=t.points[e];this.points.push(new ht().fromArray(n))}return this}},xu=Object.freeze({__proto__:null,ArcCurve:lh,CatmullRomCurve3:hh,CubicBezierCurve:No,CubicBezierCurve3:ch,EllipseCurve:pr,LineCurve:Fo,LineCurve3:uh,QuadraticBezierCurve:Oo,QuadraticBezierCurve3:dh,SplineCurve:Bo}),fh=class extends vi{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let i=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new xu[i](e,t))}return this}getPoint(t,e){let i=t*this.getLength(),n=this.getCurveLengths(),r=0;for(;r<n.length;){if(n[r]>=i){let o=n[r]-i,a=this.curves[r],l=a.getLength(),h=l===0?0:1-o/l;return a.getPointAt(h,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let i=0,n=this.curves.length;i<n;i++)e+=this.curves[i].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],i;for(let n=0,r=this.curves;n<r.length;n++){let o=r[n],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let h=0;h<l.length;h++){let c=l[h];i&&i.equals(c)||(e.push(c),i=c)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){let n=t.curves[e];this.curves.push(n.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,i=this.curves.length;e<i;e++){let n=this.curves[e];t.curves.push(n.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){let n=t.curves[e];this.curves.push(new xu[n.type]().fromJSON(n))}return this}},Ho=class extends fh{constructor(t){super(),this.type="Path",this.currentPoint=new ht,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,i=t.length;e<i;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let i=new Fo(this.currentPoint.clone(),new ht(t,e));return this.curves.push(i),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,i,n){let r=new Oo(this.currentPoint.clone(),new ht(t,e),new ht(i,n));return this.curves.push(r),this.currentPoint.set(i,n),this}bezierCurveTo(t,e,i,n,r,o){let a=new No(this.currentPoint.clone(),new ht(t,e),new ht(i,n),new ht(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),i=new Bo(e);return this.curves.push(i),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,i,n,r,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,i,n,r,o),this}absarc(t,e,i,n,r,o){return this.absellipse(t,e,i,i,n,r,o),this}ellipse(t,e,i,n,r,o,a,l){let h=this.currentPoint.x,c=this.currentPoint.y;return this.absellipse(t+h,e+c,i,n,r,o,a,l),this}absellipse(t,e,i,n,r,o,a,l){let h=new pr(t,e,i,n,r,o,a,l);if(this.curves.length>0){let u=h.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(h);let c=h.getPoint(1);return this.currentPoint.copy(c),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}};var mr=class extends Ho{constructor(t){super(t),this.uuid=$i(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let i=0,n=this.holes.length;i<n;i++)e[i]=this.holes[i].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){let n=t.holes[e];this.holes.push(n.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,i=this.holes.length;e<i;e++){let n=this.holes[e];t.holes.push(n.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){let n=t.holes[e];this.holes.push(new Ho().fromJSON(n))}return this}},Vx={triangulate:function(s,t,e=2){let i=t&&t.length,n=i?t[0]*e:s.length,r=Yu(s,0,n,e,!0),o=[];if(!r||r.next===r.prev)return o;let a,l,h,c,u,d,f;if(i&&(r=Yx(s,t,r,e)),s.length>80*e){a=h=s[0],l=c=s[1];for(let g=e;g<n;g+=e)u=s[g],d=s[g+1],u<a&&(a=u),d<l&&(l=d),u>h&&(h=u),d>c&&(c=d);f=Math.max(h-a,c-l),f=f!==0?32767/f:0}return gr(r,o,e,a,l,f,0),o}};function Yu(s,t,e,i,n){let r,o;if(n===sy(s,t,e,i)>0)for(r=t;r<e;r+=i)o=yu(r,s[r],s[r+1],o);else for(r=e-i;r>=t;r-=i)o=yu(r,s[r],s[r+1],o);return o&&jo(o,o.next)&&(yr(o),o=o.next),o}function On(s,t){if(!s)return s;t||(t=s);let e=s,i;do if(i=!1,!e.steiner&&(jo(e,e.next)||Se(e.prev,e,e.next)===0)){if(yr(e),e=t=e.prev,e===e.next)break;i=!0}else e=e.next;while(i||e!==t);return t}function gr(s,t,e,i,n,r,o){if(!s)return;!o&&r&&jx(s,i,n,r);let a=s,l,h;for(;s.prev!==s.next;){if(l=s.prev,h=s.next,r?Wx(s,i,n,r):Gx(s)){t.push(l.i/e|0),t.push(s.i/e|0),t.push(h.i/e|0),yr(s),s=h.next,a=h.next;continue}if(s=h,s===a){o?o===1?(s=Xx(On(s),t,e),gr(s,t,e,i,n,r,2)):o===2&&qx(s,t,e,i,n,r):gr(On(s),t,e,i,n,r,1);break}}}function Gx(s){let t=s.prev,e=s,i=s.next;if(Se(t,e,i)>=0)return!1;let n=t.x,r=e.x,o=i.x,a=t.y,l=e.y,h=i.y,c=n<r?n<o?n:o:r<o?r:o,u=a<l?a<h?a:h:l<h?l:h,d=n>r?n>o?n:o:r>o?r:o,f=a>l?a>h?a:h:l>h?l:h,g=i.next;for(;g!==t;){if(g.x>=c&&g.x<=d&&g.y>=u&&g.y<=f&&xs(n,a,r,l,o,h,g.x,g.y)&&Se(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function Wx(s,t,e,i){let n=s.prev,r=s,o=s.next;if(Se(n,r,o)>=0)return!1;let a=n.x,l=r.x,h=o.x,c=n.y,u=r.y,d=o.y,f=a<l?a<h?a:h:l<h?l:h,g=c<u?c<d?c:d:u<d?u:d,x=a>l?a>h?a:h:l>h?l:h,m=c>u?c>d?c:d:u>d?u:d,p=ph(f,g,t,e,i),w=ph(x,m,t,e,i),_=s.prevZ,y=s.nextZ;for(;_&&_.z>=p&&y&&y.z<=w;){if(_.x>=f&&_.x<=x&&_.y>=g&&_.y<=m&&_!==n&&_!==o&&xs(a,c,l,u,h,d,_.x,_.y)&&Se(_.prev,_,_.next)>=0||(_=_.prevZ,y.x>=f&&y.x<=x&&y.y>=g&&y.y<=m&&y!==n&&y!==o&&xs(a,c,l,u,h,d,y.x,y.y)&&Se(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;_&&_.z>=p;){if(_.x>=f&&_.x<=x&&_.y>=g&&_.y<=m&&_!==n&&_!==o&&xs(a,c,l,u,h,d,_.x,_.y)&&Se(_.prev,_,_.next)>=0)return!1;_=_.prevZ}for(;y&&y.z<=w;){if(y.x>=f&&y.x<=x&&y.y>=g&&y.y<=m&&y!==n&&y!==o&&xs(a,c,l,u,h,d,y.x,y.y)&&Se(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function Xx(s,t,e){let i=s;do{let n=i.prev,r=i.next.next;!jo(n,r)&&$u(n,i,i.next,r)&&xr(n,r)&&xr(r,n)&&(t.push(n.i/e|0),t.push(i.i/e|0),t.push(r.i/e|0),yr(i),yr(i.next),i=s=r),i=i.next}while(i!==s);return On(i)}function qx(s,t,e,i,n,r){let o=s;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&ey(o,a)){let l=Zu(o,a);o=On(o,o.next),l=On(l,l.next),gr(o,t,e,i,n,r,0),gr(l,t,e,i,n,r,0);return}a=a.next}o=o.next}while(o!==s)}function Yx(s,t,e,i){let n=[],r,o,a,l,h;for(r=0,o=t.length;r<o;r++)a=t[r]*i,l=r<o-1?t[r+1]*i:s.length,h=Yu(s,a,l,i,!1),h===h.next&&(h.steiner=!0),n.push(ty(h));for(n.sort($x),r=0;r<n.length;r++)e=Zx(n[r],e);return e}function $x(s,t){return s.x-t.x}function Zx(s,t){let e=Jx(s,t);if(!e)return t;let i=Zu(e,s);return On(i,i.next),On(e,e.next)}function Jx(s,t){let e=t,i=-1/0,n,r=s.x,o=s.y;do{if(o<=e.y&&o>=e.next.y&&e.next.y!==e.y){let d=e.x+(o-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=r&&d>i&&(i=d,n=e.x<e.next.x?e:e.next,d===r))return n}e=e.next}while(e!==t);if(!n)return null;let a=n,l=n.x,h=n.y,c=1/0,u;e=n;do r>=e.x&&e.x>=l&&r!==e.x&&xs(o<h?r:i,o,l,h,o<h?i:r,o,e.x,e.y)&&(u=Math.abs(o-e.y)/(r-e.x),xr(e,s)&&(u<c||u===c&&(e.x>n.x||e.x===n.x&&Kx(n,e)))&&(n=e,c=u)),e=e.next;while(e!==a);return n}function Kx(s,t){return Se(s.prev,s,t.prev)<0&&Se(t.next,s,s.next)<0}function jx(s,t,e,i){let n=s;do n.z===0&&(n.z=ph(n.x,n.y,t,e,i)),n.prevZ=n.prev,n.nextZ=n.next,n=n.next;while(n!==s);n.prevZ.nextZ=null,n.prevZ=null,Qx(n)}function Qx(s){let t,e,i,n,r,o,a,l,h=1;do{for(e=s,s=null,r=null,o=0;e;){for(o++,i=e,a=0,t=0;t<h&&(a++,i=i.nextZ,!!i);t++);for(l=h;a>0||l>0&&i;)a!==0&&(l===0||!i||e.z<=i.z)?(n=e,e=e.nextZ,a--):(n=i,i=i.nextZ,l--),r?r.nextZ=n:s=n,n.prevZ=r,r=n;e=i}r.nextZ=null,h*=2}while(o>1);return s}function ph(s,t,e,i,n){return s=(s-e)*n|0,t=(t-i)*n|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,s|t<<1}function ty(s){let t=s,e=s;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==s);return e}function xs(s,t,e,i,n,r,o,a){return(n-o)*(t-a)>=(s-o)*(r-a)&&(s-o)*(i-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(n-o)*(i-a)}function ey(s,t){return s.next.i!==t.i&&s.prev.i!==t.i&&!iy(s,t)&&(xr(s,t)&&xr(t,s)&&ny(s,t)&&(Se(s.prev,s,t.prev)||Se(s,t.prev,t))||jo(s,t)&&Se(s.prev,s,s.next)>0&&Se(t.prev,t,t.next)>0)}function Se(s,t,e){return(t.y-s.y)*(e.x-t.x)-(t.x-s.x)*(e.y-t.y)}function jo(s,t){return s.x===t.x&&s.y===t.y}function $u(s,t,e,i){let n=ho(Se(s,t,e)),r=ho(Se(s,t,i)),o=ho(Se(e,i,s)),a=ho(Se(e,i,t));return!!(n!==r&&o!==a||n===0&&lo(s,e,t)||r===0&&lo(s,i,t)||o===0&&lo(e,s,i)||a===0&&lo(e,t,i))}function lo(s,t,e){return t.x<=Math.max(s.x,e.x)&&t.x>=Math.min(s.x,e.x)&&t.y<=Math.max(s.y,e.y)&&t.y>=Math.min(s.y,e.y)}function ho(s){return s>0?1:s<0?-1:0}function iy(s,t){let e=s;do{if(e.i!==s.i&&e.next.i!==s.i&&e.i!==t.i&&e.next.i!==t.i&&$u(e,e.next,s,t))return!0;e=e.next}while(e!==s);return!1}function xr(s,t){return Se(s.prev,s,s.next)<0?Se(s,t,s.next)>=0&&Se(s,s.prev,t)>=0:Se(s,t,s.prev)<0||Se(s,s.next,t)<0}function ny(s,t){let e=s,i=!1,n=(s.x+t.x)/2,r=(s.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&n<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(i=!i),e=e.next;while(e!==s);return i}function Zu(s,t){let e=new mh(s.i,s.x,s.y),i=new mh(t.i,t.x,t.y),n=s.next,r=t.prev;return s.next=t,t.prev=s,e.next=n,n.prev=e,i.next=e,e.prev=i,r.next=i,i.prev=r,i}function yu(s,t,e,i){let n=new mh(s,t,e);return i?(n.next=i.next,n.prev=i,i.next.prev=n,i.next=n):(n.prev=n,n.next=n),n}function yr(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function mh(s,t,e){this.i=s,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function sy(s,t,e,i){let n=0;for(let r=t,o=e-i;r<e;r+=i)n+=(s[o]-s[r])*(s[r+1]+s[o+1]),o=r;return n}var ar=class s{static area(t){let e=t.length,i=0;for(let n=e-1,r=0;r<e;n=r++)i+=t[n].x*t[r].y-t[r].x*t[n].y;return i*.5}static isClockWise(t){return s.area(t)<0}static triangulateShape(t,e){let i=[],n=[],r=[];vu(t),_u(i,t);let o=t.length;e.forEach(vu);for(let l=0;l<e.length;l++)n.push(o),o+=e[l].length,_u(i,e[l]);let a=Vx.triangulate(i,n);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}};function vu(s){let t=s.length;t>2&&s[t-1].equals(s[0])&&s.pop()}function _u(s,t){for(let e=0;e<t.length;e++)s.push(t[e].x),s.push(t[e].y)}var Vo=class s extends Ee{constructor(t=new mr([new ht(0,.5),new ht(-.5,-.5),new ht(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};let i=[],n=[],r=[],o=[],a=0,l=0;if(Array.isArray(t)===!1)h(t);else for(let c=0;c<t.length;c++)h(t[c]),this.addGroup(a,l,c),a+=l,l=0;this.setIndex(i),this.setAttribute("position",new ae(n,3)),this.setAttribute("normal",new ae(r,3)),this.setAttribute("uv",new ae(o,2));function h(c){let u=n.length/3,d=c.extractPoints(e),f=d.shape,g=d.holes;ar.isClockWise(f)===!1&&(f=f.reverse());for(let m=0,p=g.length;m<p;m++){let w=g[m];ar.isClockWise(w)===!0&&(g[m]=w.reverse())}let x=ar.triangulateShape(f,g);for(let m=0,p=g.length;m<p;m++){let w=g[m];f=f.concat(w)}for(let m=0,p=f.length;m<p;m++){let w=f[m];n.push(w.x,w.y,0),r.push(0,0,1),o.push(w.x,w.y)}for(let m=0,p=x.length;m<p;m++){let w=x[m],_=w[0]+u,y=w[1]+u,R=w[2]+u;i.push(_,y,R),l+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes;return ry(e,t)}static fromJSON(t,e){let i=[];for(let n=0,r=t.shapes.length;n<r;n++){let o=e[t.shapes[n]];i.push(o)}return new s(i,t.curveSegments)}};function ry(s,t){if(t.shapes=[],Array.isArray(s))for(let e=0,i=s.length;e<i;e++){let n=s[e];t.shapes.push(n.uuid)}else t.shapes.push(s.uuid);return t}var Go=class s extends Ee{constructor(t=1,e=32,i=16,n=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:n,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));let l=Math.min(o+a,Math.PI),h=0,c=[],u=new v,d=new v,f=[],g=[],x=[],m=[];for(let p=0;p<=i;p++){let w=[],_=p/i,y=0;p===0&&o===0?y=.5/e:p===i&&l===Math.PI&&(y=-.5/e);for(let R=0;R<=e;R++){let A=R/e;u.x=-t*Math.cos(n+A*r)*Math.sin(o+_*a),u.y=t*Math.cos(o+_*a),u.z=t*Math.sin(n+A*r)*Math.sin(o+_*a),g.push(u.x,u.y,u.z),d.copy(u).normalize(),x.push(d.x,d.y,d.z),m.push(A+y,1-_),w.push(h++)}c.push(w)}for(let p=0;p<i;p++)for(let w=0;w<e;w++){let _=c[p][w+1],y=c[p][w],R=c[p+1][w],A=c[p+1][w+1];(p!==0||o>0)&&f.push(_,y,A),(p!==i-1||l<Math.PI)&&f.push(y,R,A)}this.setIndex(f),this.setAttribute("position",new ae(g,3)),this.setAttribute("normal",new ae(x,3)),this.setAttribute("uv",new ae(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var Ae=class extends Ni{static get type(){return"MeshLambertMaterial"}constructor(t){super(),this.isMeshLambertMaterial=!0,this.color=new mt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new mt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Uu,this.normalScale=new ht(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new mi,this.combine=Rh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};function co(s,t,e){return!s||!e&&s.constructor===t?s:typeof t.BYTES_PER_ELEMENT=="number"?new t(s):Array.prototype.slice.call(s)}function oy(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}var Ls=class{constructor(t,e,i,n){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=n!==void 0?n:new e.constructor(i),this.sampleValues=e,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,i=this._cachedIndex,n=e[i],r=e[i-1];t:{e:{let o;i:{n:if(!(t<n)){for(let a=i+2;;){if(n===void 0){if(t<r)break n;return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(r=n,n=e[++i],t<n)break e}o=e.length;break i}if(!(t>=r)){let a=e[1];t<a&&(i=2,r=a);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(n=r,r=e[--i-1],t>=r)break e}o=i,i=0;break i}break t}for(;i<o;){let a=i+o>>>1;t<e[a]?o=a:i=a+1}if(n=e[i],r=e[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===void 0)return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,n)}return this.interpolate_(i,r,t,n)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,i=this.sampleValues,n=this.valueSize,r=t*n;for(let o=0;o!==n;++o)e[o]=i[r+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},gh=class extends Ls{constructor(t,e,i,n){super(t,e,i,n),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:uc,endingEnd:uc}}intervalChanged_(t,e,i){let n=this.parameterPositions,r=t-2,o=t+1,a=n[r],l=n[o];if(a===void 0)switch(this.getSettings_().endingStart){case dc:r=t,a=2*e-i;break;case fc:r=n.length-2,a=e+n[r]-n[r+1];break;default:r=t,a=i}if(l===void 0)switch(this.getSettings_().endingEnd){case dc:o=t,l=2*i-e;break;case fc:o=1,l=i+n[1]-n[0];break;default:o=t-1,l=e}let h=(i-e)*.5,c=this.valueSize;this._weightPrev=h/(e-a),this._weightNext=h/(l-i),this._offsetPrev=r*c,this._offsetNext=o*c}interpolate_(t,e,i,n){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,h=l-a,c=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,g=(i-e)/(n-e),x=g*g,m=x*g,p=-d*m+2*d*x-d*g,w=(1+d)*m+(-1.5-2*d)*x+(-.5+d)*g+1,_=(-1-f)*m+(1.5+f)*x+.5*g,y=f*m-f*x;for(let R=0;R!==a;++R)r[R]=p*o[c+R]+w*o[h+R]+_*o[l+R]+y*o[u+R];return r}},xh=class extends Ls{constructor(t,e,i,n){super(t,e,i,n)}interpolate_(t,e,i,n){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,h=l-a,c=(i-e)/(n-e),u=1-c;for(let d=0;d!==a;++d)r[d]=o[h+d]*u+o[l+d]*c;return r}},yh=class extends Ls{constructor(t,e,i,n){super(t,e,i,n)}interpolate_(t){return this.copySampleValue_(t-1)}},Pi=class{constructor(t,e,i,n){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=co(e,this.TimeBufferType),this.values=co(i,this.ValueBufferType),this.setInterpolation(n||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,i;if(e.toJSON!==this.toJSON)i=e.toJSON(t);else{i={name:t.name,times:co(t.times,Array),values:co(t.values,Array)};let n=t.getInterpolation();n!==t.DefaultInterpolation&&(i.interpolation=n)}return i.type=t.ValueTypeName,i}InterpolantFactoryMethodDiscrete(t){return new yh(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new xh(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new gh(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case xo:e=this.InterpolantFactoryMethodDiscrete;break;case Ol:e=this.InterpolantFactoryMethodLinear;break;case ya:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return xo;case this.InterpolantFactoryMethodLinear:return Ol;case this.InterpolantFactoryMethodSmooth:return ya}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let i=0,n=e.length;i!==n;++i)e[i]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let i=0,n=e.length;i!==n;++i)e[i]*=t}return this}trim(t,e){let i=this.times,n=i.length,r=0,o=n-1;for(;r!==n&&i[r]<t;)++r;for(;o!==-1&&i[o]>e;)--o;if(++o,r!==0||o!==n){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=i.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let i=this.times,n=this.values,r=i.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let l=i[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(n!==void 0&&oy(n))for(let a=0,l=n.length;a!==l;++a){let h=n[a];if(isNaN(h)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,h),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),i=this.getValueSize(),n=this.getInterpolation()===ya,r=t.length-1,o=1;for(let a=1;a<r;++a){let l=!1,h=t[a],c=t[a+1];if(h!==c&&(a!==1||h!==t[0]))if(n)l=!0;else{let u=a*i,d=u-i,f=u+i;for(let g=0;g!==i;++g){let x=e[u+g];if(x!==e[d+g]||x!==e[f+g]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let u=a*i,d=o*i;for(let f=0;f!==i;++f)e[d+f]=e[u+f]}++o}}if(r>0){t[o]=t[r];for(let a=r*i,l=o*i,h=0;h!==i;++h)e[l+h]=e[a+h];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*i)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),i=this.constructor,n=new i(this.name,t,e);return n.createInterpolant=this.createInterpolant,n}};Pi.prototype.TimeBufferType=Float32Array;Pi.prototype.ValueBufferType=Float32Array;Pi.prototype.DefaultInterpolation=Ol;var Bn=class extends Pi{constructor(t,e,i){super(t,e,i)}};Bn.prototype.ValueTypeName="bool";Bn.prototype.ValueBufferType=Array;Bn.prototype.DefaultInterpolation=xo;Bn.prototype.InterpolantFactoryMethodLinear=void 0;Bn.prototype.InterpolantFactoryMethodSmooth=void 0;var vh=class extends Pi{};vh.prototype.ValueTypeName="color";var _h=class extends Pi{};_h.prototype.ValueTypeName="number";var Mh=class extends Ls{constructor(t,e,i,n){super(t,e,i,n)}interpolate_(t,e,i,n){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(i-e)/(n-e),h=t*a;for(let c=h+a;h!==c;h+=4)si.slerpFlat(r,0,o,h-a,o,h,l);return r}},Wo=class extends Pi{InterpolantFactoryMethodLinear(t){return new Mh(this.times,this.values,this.getValueSize(),t)}};Wo.prototype.ValueTypeName="quaternion";Wo.prototype.InterpolantFactoryMethodSmooth=void 0;var Hn=class extends Pi{constructor(t,e,i){super(t,e,i)}};Hn.prototype.ValueTypeName="string";Hn.prototype.ValueBufferType=Array;Hn.prototype.DefaultInterpolation=xo;Hn.prototype.InterpolantFactoryMethodLinear=void 0;Hn.prototype.InterpolantFactoryMethodSmooth=void 0;var bh=class extends Pi{};bh.prototype.ValueTypeName="vector";var wh=class{constructor(t,e,i){let n=this,r=!1,o=0,a=0,l,h=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this.itemStart=function(c){a++,r===!1&&n.onStart!==void 0&&n.onStart(c,o,a),r=!0},this.itemEnd=function(c){o++,n.onProgress!==void 0&&n.onProgress(c,o,a),o===a&&(r=!1,n.onLoad!==void 0&&n.onLoad())},this.itemError=function(c){n.onError!==void 0&&n.onError(c)},this.resolveURL=function(c){return l?l(c):c},this.setURLModifier=function(c){return l=c,this},this.addHandler=function(c,u){return h.push(c,u),this},this.removeHandler=function(c){let u=h.indexOf(c);return u!==-1&&h.splice(u,2),this},this.getHandler=function(c){for(let u=0,d=h.length;u<d;u+=2){let f=h[u],g=h[u+1];if(f.global&&(f.lastIndex=0),f.test(c))return g}return null}}},ay=new wh,Sh=class{constructor(t){this.manager=t!==void 0?t:ay,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let i=this;return new Promise(function(n,r){i.load(t,n,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};Sh.DEFAULT_MATERIAL_NAME="__DEFAULT";var vr=class extends De{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new mt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}},Xo=class extends vr{constructor(t,e,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(De.DEFAULT_UP),this.updateMatrix(),this.groundColor=new mt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},ja=new Xt,Mu=new v,bu=new v,qo=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ht(512,512),this.map=null,this.mapPass=null,this.matrix=new Xt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new cr,this._frameExtents=new ht(1,1),this._viewportCount=1,this._viewports=[new ue(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,i=this.matrix;Mu.setFromMatrixPosition(t.matrixWorld),e.position.copy(Mu),bu.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(bu),e.updateMatrixWorld(),ja.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ja),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(ja)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}};var wu=new Xt,er=new v,Qa=new v,Eh=class extends qo{constructor(){super(new Xe(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ht(4,2),this._viewportCount=6,this._viewports=[new ue(2,1,1,1),new ue(0,1,1,1),new ue(3,1,1,1),new ue(1,1,1,1),new ue(3,0,1,1),new ue(1,0,1,1)],this._cubeDirections=[new v(1,0,0),new v(-1,0,0),new v(0,0,1),new v(0,0,-1),new v(0,1,0),new v(0,-1,0)],this._cubeUps=[new v(0,1,0),new v(0,1,0),new v(0,1,0),new v(0,1,0),new v(0,0,1),new v(0,0,-1)]}updateMatrices(t,e=0){let i=this.camera,n=this.matrix,r=t.distance||i.far;r!==i.far&&(i.far=r,i.updateProjectionMatrix()),er.setFromMatrixPosition(t.matrixWorld),i.position.copy(er),Qa.copy(i.position),Qa.add(this._cubeDirections[e]),i.up.copy(this._cubeUps[e]),i.lookAt(Qa),i.updateMatrixWorld(),n.makeTranslation(-er.x,-er.y,-er.z),wu.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(wu)}},Yo=class extends vr{constructor(t,e,i=0,n=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=n,this.shadow=new Eh}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}},Th=class extends qo{constructor(){super(new Rs(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},$o=class extends vr{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(De.DEFAULT_UP),this.updateMatrix(),this.target=new De,this.shadow=new Th}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}};var Fh="\\[\\]\\.:\\/",ly=new RegExp("["+Fh+"]","g"),Oh="[^"+Fh+"]",hy="[^"+Fh.replace("\\.","")+"]",cy=/((?:WC+[\/:])*)/.source.replace("WC",Oh),uy=/(WCOD+)?/.source.replace("WCOD",hy),dy=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Oh),fy=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Oh),py=new RegExp("^"+cy+uy+dy+fy+"$"),my=["material","materials","bones","map"],Ah=class{constructor(t,e,i){let n=i||ve.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,n)}getValue(t,e){this.bind();let i=this._targetGroup.nCachedObjects_,n=this._bindings[i];n!==void 0&&n.getValue(t,e)}setValue(t,e){let i=this._bindings;for(let n=this._targetGroup.nCachedObjects_,r=i.length;n!==r;++n)i[n].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].unbind()}},ve=class s{constructor(t,e,i){this.path=e,this.parsedPath=i||s.parseTrackName(e),this.node=s.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,i){return t&&t.isAnimationObjectGroup?new s.Composite(t,e,i):new s(t,e,i)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(ly,"")}static parseTrackName(t){let e=py.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let i={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},n=i.nodeName&&i.nodeName.lastIndexOf(".");if(n!==void 0&&n!==-1){let r=i.nodeName.substring(n+1);my.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,n),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return i}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let i=t.skeleton.getBoneByName(e);if(i!==void 0)return i}if(t.children){let i=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let l=i(a.children);if(l)return l}return null},n=i(t.children);if(n)return n}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let i=this.resolvedProperty;for(let n=0,r=i.length;n!==r;++n)t[e++]=i[n]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let i=this.resolvedProperty;for(let n=0,r=i.length;n!==r;++n)i[n]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let i=this.resolvedProperty;for(let n=0,r=i.length;n!==r;++n)i[n]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let i=this.resolvedProperty;for(let n=0,r=i.length;n!==r;++n)i[n]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,i=e.objectName,n=e.propertyName,r=e.propertyIndex;if(t||(t=s.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let h=e.objectIndex;switch(i){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let c=0;c<t.length;c++)if(t[c].name===h){h=c;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[i]}if(h!==void 0){if(t[h]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[h]}}let o=t[n];if(o===void 0){let h=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+h+"."+n+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(n==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=n;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};ve.Composite=Ah;ve.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ve.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ve.prototype.GetterByBindingType=[ve.prototype._getValue_direct,ve.prototype._getValue_array,ve.prototype._getValue_arrayElement,ve.prototype._getValue_toArray];ve.prototype.SetterByBindingTypeAndVersioning=[[ve.prototype._setValue_direct,ve.prototype._setValue_direct_setNeedsUpdate,ve.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ve.prototype._setValue_array,ve.prototype._setValue_array_setNeedsUpdate,ve.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ve.prototype._setValue_arrayElement,ve.prototype._setValue_arrayElement_setNeedsUpdate,ve.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ve.prototype._setValue_fromArray,ve.prototype._setValue_fromArray_setNeedsUpdate,ve.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Vy=new Float32Array(1);typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"170"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="170");var Zt=(s,t,e)=>s<t?t:s>e?e:s,le=(s,t,e)=>s+(t-s)*e;function tn(s){let t=s>>>0,e=()=>{t|=0,t=t+1831565813|0;let i=Math.imul(t^t>>>15,1|t);return i=i+Math.imul(i^i>>>7,61|i)^i,((i^i>>>14)>>>0)/4294967296};return e.int=(i,n)=>i+Math.floor(e()*(n-i+1)),e.pick=i=>i[Math.floor(e()*i.length)],e}function _e(s,t,e=0){let i=s*374761393+t*668265263+e*2147483647|0;return i=Math.imul(i^i>>>13,1274126177),((i^i>>>16)>>>0)/4294967296}function Ju(s){let t=(i,n)=>{let r=Math.floor(i),o=Math.floor(n),a=i-r,l=n-o,h=a*a*(3-2*a),c=l*l*(3-2*l),u=_e(r,o,s),d=_e(r+1,o,s),f=_e(r,o+1,s),g=_e(r+1,o+1,s);return u+(d-u)*h+(f-u)*c+(u-d-f+g)*h*c},e=(i,n,r=4)=>{let o=0,a=.5,l=1,h=0;for(let c=0;c<r;c++)o+=t(i*l,n*l)*a,h+=a,a*=.5,l*=2.03;return o/h};return e.fbm=e,e}var j=.25,ke=16,qe=[],Ku=1,P={};function zt(s,t,e={}){let i=new mt(t);P[s]=Ku,qe[Ku++]={name:s,r:i.r,g:i.g,b:i.b,jit:e.jit??.06,burn:e.burn||0,solid:e.solid??!0,hard:e.hard??1,glow:e.glow||0,stripe:e.stripe||0}}zt("plank","#8a5a34",{burn:1,stripe:1});zt("plankD","#6a4226",{burn:1,stripe:1});zt("deck","#b58c5a",{burn:1,stripe:2,jit:.05});zt("deckD","#9a7446",{burn:1,stripe:2});zt("tar","#2e2018",{burn:.5});zt("trim","#c9a03a",{burn:.2,jit:.04});zt("red","#8e2a22",{burn:1});zt("mast","#5e3c22",{burn:.6,hard:2});zt("rope","#a08860",{burn:1});zt("iron","#2a2a30",{hard:4,jit:.04});zt("brass","#b8902e",{hard:3,jit:.03});zt("glass","#ffd27a",{glow:1,jit:.02});zt("ghostglass","#66ffc0",{glow:1,jit:.02});zt("ladder","#7a5232",{burn:1,solid:!1});zt("sail","#efe2bf",{burn:1,jit:.03});zt("bark","#7c5c3a",{burn:.7});zt("barkD","#5e4430",{burn:.7});zt("leaf","#3e8c34",{burn:1,jit:.1});zt("leafD","#2c6a28",{burn:1,jit:.1});zt("rock","#8a868a",{hard:6,jit:.08});zt("rockD","#6a666c",{hard:6,jit:.08});zt("moss","#5a7a3e",{hard:4});zt("thatch","#c8a24e",{burn:1,jit:.1});zt("wall","#a88a5e",{burn:1});zt("gold","#f0c440",{hard:3,jit:.1,glow:.25});zt("powder","#4a3a2a",{burn:3});zt("bone","#e6dcc4",{hard:1});zt("ghostwood","#3e4c46",{burn:.3});zt("ghostwoodD","#2c3834",{burn:.3});zt("ghosttrim","#3ad890",{glow:.6});zt("char","#241a14",{burn:0});zt("cloth","#ece4d4",{burn:1});zt("blacksail","#2c2a2e",{burn:1,jit:.04});zt("skin","#d8a678",{});zt("dirt","#7a5a36",{hard:1});zt("blue","#2e5c9a",{burn:1});zt("green","#3a7a3e",{burn:1});zt("purple","#6e3a86",{burn:1});zt("coat","#5a1a1a",{burn:1});zt("flower","#e8483a",{burn:1});zt("flowerY","#f0c840",{burn:1});zt("shell","#f2e6da",{});zt("crystal","#7ae8ff",{glow:1,jit:.05});var gy=[{d:[1,0,0],c:[[1,0,0],[1,1,0],[1,1,1],[1,0,1]],s:.82},{d:[-1,0,0],c:[[0,0,1],[0,1,1],[0,1,0],[0,0,0]],s:.72},{d:[0,1,0],c:[[0,1,1],[1,1,1],[1,1,0],[0,1,0]],s:1},{d:[0,-1,0],c:[[0,0,0],[1,0,0],[1,0,1],[0,0,1]],s:.5},{d:[0,0,1],c:[[1,0,1],[1,1,1],[0,1,1],[0,0,1]],s:.9},{d:[0,0,-1],c:[[0,0,0],[0,1,0],[1,1,0],[1,0,0]],s:.66}],Bh=new Ae({vertexColors:!0}),xy=new Qi({vertexColors:!0}),Ye=class{constructor(t,e,i,n=[0,0,0]){this.sx=t,this.sy=e,this.sz=i,this.d=new Uint8Array(t*e*i),this.origin=n,this.group=new se,this.chunks=new Map,this.dirty=new Set,this.cx=Math.ceil(t/ke),this.cy=Math.ceil(e/ke),this.cz=Math.ceil(i/ke),this.seed=Math.random()*1e3|0,this.count=0}idx(t,e,i){return(e*this.sz+i)*this.sx+t}in(t,e,i){return t>=0&&e>=0&&i>=0&&t<this.sx&&e<this.sy&&i<this.sz}get(t,e,i){return this.in(t,e,i)?this.d[this.idx(t,e,i)]:0}solid(t,e,i){let n=this.get(t,e,i);return n&&qe[n].solid}set(t,e,i,n){if(t=Math.round(t),e=Math.round(e),i=Math.round(i),!this.in(t,e,i))return;let r=this.idx(t,e,i);this.d[r]!==n&&(this.d[r]&&!n?this.count--:!this.d[r]&&n&&this.count++,this.d[r]=n,this.log&&this.log.set(r,n),this.markDirty(t,e,i))}markDirty(t,e,i){let n=Math.floor(t/ke),r=Math.floor(e/ke),o=Math.floor(i/ke);this.dirty.add(n+","+r+","+o),t%ke===0&&n>0&&this.dirty.add(n-1+","+r+","+o),t%ke===ke-1&&n<this.cx-1&&this.dirty.add(n+1+","+r+","+o),e%ke===0&&r>0&&this.dirty.add(n+","+(r-1)+","+o),e%ke===ke-1&&r<this.cy-1&&this.dirty.add(n+","+(r+1)+","+o),i%ke===0&&o>0&&this.dirty.add(n+","+r+","+(o-1)),i%ke===ke-1&&o<this.cz-1&&this.dirty.add(n+","+r+","+(o+1))}setIdx(t,e){let i=t%this.sx,n=Math.floor(t/this.sx)%this.sz,r=Math.floor(t/(this.sx*this.sz));this.set(i,r,n,e)}box(t,e,i,n,r,o,a){for(let l=e;l<=r;l++)for(let h=i;h<=o;h++)for(let c=t;c<=n;c++)this.set(c,l,h,typeof a=="function"?a(c,l,h):a)}toVox(t){return[(t.x-this.origin[0])/j,(t.y-this.origin[1])/j,(t.z-this.origin[2])/j]}toLocal(t,e,i,n=new v){return n.set(this.origin[0]+(t+.5)*j,this.origin[1]+(e+.5)*j,this.origin[2]+(i+.5)*j)}solidAt(t,e,i){return this.solid(Math.floor((t-this.origin[0])/j),Math.floor((e-this.origin[1])/j),Math.floor((i-this.origin[2])/j))}matAt(t,e,i){return this.get(Math.floor((t-this.origin[0])/j),Math.floor((e-this.origin[1])/j),Math.floor((i-this.origin[2])/j))}buildAll(){for(let t=0;t<this.cx;t++)for(let e=0;e<this.cy;e++)for(let i=0;i<this.cz;i++)this.dirty.add(t+","+e+","+i);this.flush(9999)}flush(t=6){let e=0;for(let i of this.dirty){if(e++>=t)break;this.dirty.delete(i);let[n,r,o]=i.split(",").map(Number);this.buildChunk(n,r,o,i)}}buildChunk(t,e,i,n){let r=this.chunks.get(n);r&&(this.group.remove(r.mesh),r.mesh.geometry&&r.mesh.geometry.dispose(),r.glow&&(this.group.remove(r.glow),r.glow.geometry.dispose()),this.chunks.delete(n));let o=[],a=[],l=[],h=[],c=[],u=[],d=t*ke,f=e*ke,g=i*ke,x=this.origin;for(let p=f;p<Math.min(this.sy,f+ke);p++)for(let w=g;w<Math.min(this.sz,g+ke);w++)for(let _=d;_<Math.min(this.sx,d+ke);_++){let y=this.d[this.idx(_,p,w)];if(!y)continue;let R=qe[y],A=R.glow>=.9,C=1+(_e(_,p*7+w,this.seed)-.5)*2*R.jit;R.stripe===1&&_%6===0&&(C*=.86),R.stripe===2&&w%3===0&&(C*=.88),R.stripe===2&&_%12===w%2*6&&(C*=.9);for(let L of gy){let E=_+L.d[0],b=p+L.d[1],I=w+L.d[2],H=this.get(E,b,I);if(H&&(qe[H].solid||!R.solid))continue;let F=A?h:o,W=A?c:a,Y=A?u:l,O=[];for(let rt of L.c){let vt=rt[0]?1:-1,Ft=rt[1]?1:-1,te=rt[2]?1:-1,q=0;L.d[0]?q=(this.solid(E,p+(rt[1]?1:-1),w)?1:0)+(this.solid(E,p,w+(rt[2]?1:-1))?1:0)+(this.solid(E,p+Ft,w+te)?1:0):L.d[1]?q=(this.solid(_+vt,b,w)?1:0)+(this.solid(_,b,w+te)?1:0)+(this.solid(_+vt,b,w+te)?1:0):q=(this.solid(_+vt,p,I)?1:0)+(this.solid(_,p+Ft,I)?1:0)+(this.solid(_+vt,p+Ft,I)?1:0),O.push(1-q*.13)}let Z=(A?1:L.s)*C,G=L.c.map(rt=>[x[0]+(_+rt[0])*j,x[1]+(p+rt[1])*j,x[2]+(w+rt[2])*j]),nt=O[0]+O[2]>O[1]+O[3]?[0,1,2,0,2,3]:[1,2,3,1,3,0];for(let rt of nt){F.push(G[rt][0],G[rt][1],G[rt][2]),W.push(L.d[0],L.d[1],L.d[2]);let vt=Z*O[rt];Y.push(Zt(R.r*vt,0,1),Zt(R.g*vt,0,1),Zt(R.b*vt,0,1))}}}let m={};if(o.length){let p=new Ee;p.setAttribute("position",new ae(o,3)),p.setAttribute("normal",new ae(a,3)),p.setAttribute("color",new ae(l,3)),p.computeBoundingSphere(),m.mesh=new Nt(p,Bh),m.mesh.castShadow=!0,m.mesh.receiveShadow=!0,this.group.add(m.mesh)}else m.mesh=new De;if(h.length){let p=new Ee;p.setAttribute("position",new ae(h,3)),p.setAttribute("color",new ae(u,3)),p.computeBoundingSphere(),m.glow=new Nt(p,xy),this.group.add(m.glow)}this.chunks.set(n,m)}dispose(){for(let t of this.chunks.values())t.mesh.geometry&&t.mesh.geometry.dispose(),t.glow&&t.glow.geometry.dispose();this.chunks.clear()}blast(t,e,i,n,r=1){let o=[],a=Math.ceil(n);for(let l=-a;l<=a;l++)for(let h=-a;h<=a;h++)for(let c=-a;c<=a;c++){let u=Math.hypot(c,l,h);if(u>n+(_e(t+c,e+l,i+h)-.5)*.8)continue;let d=Math.round(t+c),f=Math.round(e+l),g=Math.round(i+h),x=this.get(d,f,g);x&&(qe[x].hard>r*2+(n-u)||(this.set(d,f,g,0),o.push({x:d,y:f,z:g,m:x})))}return o}raycast(t,e,i,n,r,o,a){let l=Math.floor(t),h=Math.floor(e),c=Math.floor(i),u=Math.sign(n),d=Math.sign(r),f=Math.sign(o),g=n?Math.abs(1/n):1/0,x=r?Math.abs(1/r):1/0,m=o?Math.abs(1/o):1/0,p=n?(u>0?l+1-t:t-l)*g:1/0,w=r?(d>0?h+1-e:e-h)*x:1/0,_=o?(f>0?c+1-i:i-c)*m:1/0,y=0,R=null;for(;y<=a;){let A=this.get(l,h,c);if(A&&qe[A].solid)return{x:l,y:h,z:c,t:y,m:A,face:R};p<w&&p<_?(l+=u,y=p,p+=g,R=[-u,0,0]):w<_?(h+=d,y=w,w+=x,R=[0,-d,0]):(c+=f,y=_,_+=m,R=[0,0,-f])}return null}},Qo=class{constructor(t,e=700){this.max=e;let i=new Te(j,j,j);this.mesh=new Ps(i,new Ae,e),this.mesh.instanceMatrix.setUsage(ks),this.mesh.frustumCulled=!1,this.mesh.count=0,t.add(this.mesh),this.p=[],this.tmp=new De,this.col=new mt}spawn(t,e,i){this.p.length>=this.max&&this.p.shift();let n=qe[e]||qe[1];this.p.push({x:t.x,y:t.y,z:t.z,vx:i.x,vy:i.y,vz:i.z,rx:Math.random()*6,ry:Math.random()*6,vr:(Math.random()-.5)*18,life:2.5+Math.random()*2.5,r:n.r,g:n.g,b:n.b,s:.6+Math.random()*.6})}update(t,e){let i=0;for(let n=this.p.length-1;n>=0;n--){let r=this.p[n];r.life-=t,r.vy-=14*t,r.x+=r.vx*t,r.y+=r.vy*t,r.z+=r.vz*t,r.rx+=r.vr*t,r.ry+=r.vr*.7*t;let o=e(r.x,r.z);if(r.y<o&&(r.y=o,r.vy*=-.15,r.vx*=.9,r.vz*=.9,r.vr*=.9,r.floating=!0),r.life<=0){this.p.splice(n,1);continue}}for(let n of this.p){if(i>=this.max)break;this.tmp.position.set(n.x,n.y,n.z),this.tmp.rotation.set(n.rx,n.ry,0);let r=n.s*Math.min(1,n.life);this.tmp.scale.set(r,r,r),this.tmp.updateMatrix(),this.mesh.setMatrixAt(i,this.tmp.matrix),this.col.setRGB(n.r,n.g,n.b),this.mesh.setColorAt(i,this.col),i++}this.mesh.count=i,this.mesh.instanceMatrix.needsUpdate=!0,this.mesh.instanceColor&&(this.mesh.instanceColor.needsUpdate=!0)}};var Ii=(s,t,e)=>new Ye(s,t,e,[-s/2*j,0,-e/2*j]);function ju(s){let t=tn(s),e=Ii(40,44,40),i=20,n=20,r=(t()-.5)*.7,o=(t()-.5)*.7,a=26+Math.floor(t()*8);for(let u=0;u<a;u++){i+=r*(u/a),n+=o*(u/a);let d=u%3===0?P.barkD:P.bark;e.box(Math.round(i),u,Math.round(n),Math.round(i)+1,u,Math.round(n)+1,d)}let l=Math.round(i),h=Math.round(n),c=a;for(let u=0;u<8;u++){let d=u/8*Math.PI*2+t()*.4,f=12+t()*5;for(let g=0;g<f;g++){let x=l+Math.cos(d)*g,m=h+Math.sin(d)*g,p=c+1.5+g*.5-g*g/(f*.9);e.set(x,p,m,g%2?P.leaf:P.leafD),e.set(x-Math.sin(d),p-.5,m+Math.cos(d),P.leafD),g>1&&g<f-2&&e.set(x+Math.sin(d),p,m-Math.cos(d),P.leaf)}}e.box(l-1,c-1,h-1,l+2,c,h+2,P.leafD);for(let[u,d]of[[-1,0],[2,1],[0,2]])e.set(l+u,c-2,h+d,P.barkD);return e}function Hh(s,t){let e=tn(s),i=t?9:5,n=Ii(i*2+3,i+4,i*2+3),r=i+1;for(let o=0;o<=i+2;o++)for(let a=0;a<i*2+3;a++)for(let l=0;l<i*2+3;l++){let h=(l-r)/i,c=(a-r)/(i*.85),u=o/(i*.85);h*h+c*c+u*u>1+(_e(l,o,a+s)-.5)*.35||n.set(l,o,a,o>i*.6&&_e(l,a,s)<.4?P.moss:_e(l,o,a)<.35?P.rockD:P.rock)}return n}function Qu(s){let t=Ii(28,30,24);t.box(1,0,1,26,1,22,P.deckD);for(let e=2;e<=13;e++)for(let i=2;i<=21;i++)for(let n=2;n<=25;n++){if(!(n===2||n===25||i===2||i===21))continue;let o=(n===2||n===25)&&(i===2||i===21);if(!(i===21&&n>=12&&n<=15&&e<=10)){if(i===21&&(n===6||n===7||n===20||n===21)&&e>=6&&e<=8){t.set(n,e,i,P.glass);continue}t.set(n,e,i,o?P.mast:e%4===0?P.plankD:P.wall)}}for(let e=14;e<26;e++){let i=e-14;for(let n=i;n<24-i;n++)for(let r=0;r<28;r++)t.set(r,e,n,_e(r,e,n+s)<.3?P.thatch:(r+e)%5===0?P.rope:P.thatch)}return t}function _r(s){let t=Ii(7,9,7);for(let e=0;e<9;e++)for(let i=0;i<7;i++)for(let n=0;n<7;n++){let r=e===0||e===8?2.4:3.1;Math.hypot(n-3,i-3)>r||t.set(n,e,i,e===1||e===7?P.iron:s?e===4?P.red:P.powder:(n+i)%3?P.plank:P.plankD)}return t}function Vh(s=0){let t=Ii(9,7,6),e=[P.plank,P.ghostwood,P.red][s];return t.box(0,0,0,8,6,5,(i,n,r)=>i===0||i===8||i===4?P.gold:n===4?P.iron:n>4?P.plankD:e),t.set(4,3,5,P.brass),t}function td(){let s=Ii(3,12,3);return s.box(1,0,1,1,8,1,P.mast),s.box(0,9,0,2,10,2,P.glass),s.box(0,11,0,2,11,2,P.iron),s}function ed(){let s=Ii(7,18,7);return s.box(3,0,3,3,12,3,P.ghostwoodD),s.box(1,13,1,5,17,5,P.bone),s.set(1,15,2,P.ghostglass),s.set(1,15,4,P.ghostglass),s.set(1,13,3,P.char),s.box(3,9,0,3,9,6,P.ghostwoodD),s}function id(s){let t=tn(s),e=Ii(26,30,26),i=13,n=13;for(let r=0;r<20;r++)i+=(t()-.5)*.5,e.box(Math.round(i),r,n,Math.round(i)+1,r,n+1,r%4?P.ghostwoodD:P.ghostwood);for(let r=0;r<6;r++){let o=t()*Math.PI*2,a=10+Math.floor(t()*9);for(let l=0;l<7+t()*5;l++)e.set(i+Math.cos(o)*l,a+l*.6,n+Math.sin(o)*l,P.ghostwoodD)}return e}function nd(s){let t=Ii(14,12,s);for(let e=0;e<s;e++)for(let i=1;i<13;i++)t.set(i,10,e,e%3===0?P.plankD:P.deck);for(let e=2;e<s;e+=8)for(let i of[1,12])t.box(i,0,e,i,11,e,P.mast);return t}function sd(){let s=Ii(6,6,6);return s.box(0,0,0,5,5,5,(t,e,i)=>(t===0||t===5)&&(e===0||e===5)||(i===0||i===5)&&(e===0||e===5)?P.plankD:P.deck),s}var yy=()=>[P.red,P.blue,P.green,P.purple];function rd(s,t=0){let e={},i={pirate:{skin:P.skin,shirt:yy()[t%4],pants:P.tar,hat:P.tar,band:P.trim},captain:{skin:P.bone,shirt:P.coat,pants:P.tar,hat:P.tar,band:P.ghosttrim},skeleton:{skin:P.bone,shirt:P.bone,pants:P.bone,hat:null},cursed:{skin:P.bone,shirt:P.ghostwood,pants:P.bone,hat:P.ghostwoodD,band:P.ghosttrim},merchant:{skin:P.skin,shirt:P.trim,pants:P.plankD,hat:P.plank,band:P.cloth}}[s],n=s==="skeleton"||s==="cursed"||s==="captain",r=(l,h,c)=>new Ye(l,h,c,[-l/2*j,0,-c/2*j]);for(let l of["L","R"]){let h=new Ye(2,6,2,[-j,-6*j,-j]);for(let u=0;u<6;u++){if(n&&u>0&&u<5){h.set(0,u,0,i.pants);continue}h.box(0,u,0,1,u,1,u<1?P.char:i.pants)}e["leg"+l]=h;let c=new Ye(2,6,2,[-j,-6*j,-j]);for(let u=0;u<6;u++){if(n&&u>0){c.set(0,u,0,i.shirt);continue}c.box(0,u,0,1,u,1,u<1?i.skin:i.shirt)}e["arm"+l]=c}let o=r(4,6,3);if(n&&s!=="captain"){for(let l=0;l<6;l++)o.set(2,l,1,P.bone);for(let l of[1,3,5])o.box(0,l,0,3,l,2,(h,c,u)=>u===1&&(h===1||h===2)?0:i.shirt)}else o.box(0,0,0,3,5,2,(l,h,c)=>h===0?P.tar:l===3&&h>=2?P.cloth:i.shirt);e.body=o;let a=r(4,6,4);return a.box(0,0,0,3,3,3,i.skin),a.set(3,2,0,n?P.char:P.tar),a.set(3,2,3,n?P.char:P.tar),(s==="cursed"||s==="captain")&&(a.set(3,2,0,P.ghostglass),a.set(3,2,3,P.ghostglass)),n?(a.set(3,0,1,P.char),a.set(3,0,2,P.char)):a.box(3,0,1,3,0,2,s==="merchant"?P.cloth:P.barkD),i.hat&&(a.box(-0,4,-0,3,4,3,i.hat),a.box(1,5,1,2,5,2,i.hat),a.set(3,4,1,i.band),a.set(3,4,2,i.band)),e.head=a,e}function od(){let s=new Ye(22,6,7,[-11*j,-2*j,-3.5*j]);for(let t=0;t<22;t++){let e=t/21,i=2.6*Math.sin(Math.min(1,e*1.15)*Math.PI)+.4;for(let n=0;n<6;n++)for(let r=0;r<7;r++)Math.hypot((n-2.2)/.85,r-3)>i||s.set(t,n,r,n<2?P.bone:P.rockD)}for(let t=5;t<10;t++)for(let e=10-(t-5);e<14-(t-5)*.6;e++)s.set(e,Math.min(t,5),3,P.rockD);for(let t=0;t<4;t++)s.set(t,2+t,3,P.rockD),s.set(t,2-Math.min(2,t),3,P.rockD);return s.set(19,3,1,P.char),s.set(19,3,5,P.char),s}function ad(s){let t=new Ye(4,4,16,[-2*j,-2*j,-14*j]);if(s==="sword"&&(t.box(1,1,12,2,2,15,P.plankD),t.box(0,1,11,3,2,11,P.brass),t.box(1,1,0,2,2,10,P.iron),t.set(1,2,0,0)),s==="pistol"&&(t.box(1,0,11,2,2,15,P.plank),t.box(1,2,4,2,3,12,P.iron),t.set(1,1,12,P.brass)),s==="shovel"&&(t.box(1,1,5,2,2,15,P.plank),t.box(0,0,0,3,3,4,P.iron)),s==="plank"&&t.box(0,1,0,3,2,15,P.plank),s==="bucket")for(let e=0;e<4;e++)for(let i=10;i<14;i++)for(let n=0;n<4;n++)(e===0||n===0||n===3||i===10||i===13)&&t.set(n,e,i,e===3?P.iron:P.plank);return s==="lantern"&&(t.box(1,0,10,2,2,12,P.glass),t.box(1,3,10,2,3,12,P.iron)),t}function ld(){let s=Ii(30,26,26),t=15,e=13;for(let i=0;i<26;i++)for(let n=0;n<26;n++)for(let r=0;r<30;r++){let o=(r-t)/13,a=(i-13)/13,l=(n-e)/11,h=o*o+a*a*.9+l*l<1;if(i<8&&Math.abs(l)>.75&&(h=!1),!h)continue;let c=n>e+6;c&&i>=12&&i<=17&&(Math.abs(r-9)<=2.5||Math.abs(r-21)<=2.5)||c&&i>=8&&i<=10&&Math.abs(r-15)<=1||c&&i>=3&&i<=5&&r%3===0&&Math.abs(r-15)<8||s.set(r,i,n,_e(r,i,n)<.25?P.rockD:i>20&&_e(r,n,3)<.3?P.moss:P.rock)}return s}function hd(s){let t=tn(s),e=90,i=30,n=22,r=new Ye(e,n,i,[-e/2*j,0,-i/2*j]),o=(i-1)/2;for(let a=0;a<e;a++){let l=a/(e-1),h=l<.7?13:13*Math.sqrt(Math.max(0,1-Math.pow((l-.7)/.3,2)));for(let c=0;c<n;c++){let u=h*(.45+.55*Math.min(1,c/12));for(let d=0;d<i;d++){let f=Math.abs(d-o);if(f>u)continue;let g=f>u-1.3||c===0||a===0,x=14+Math.sin(a*.31+s)*3+(_e(a,d,s)-.5)*3;c>x||g&&_e(a>>2,c>>2,s+d%2)<.12||(g?r.set(a,c,d,(c>>1)%2?P.plankD:P.tar):c===6&&_e(a,d,7)>.2&&r.set(a,c,d,P.deckD))}}}for(let a=6;a<30&&a<n;a++)r.set(40,a,Math.round(o),P.mast);for(let a=0;a<60;a++)r.set(Math.floor(t()*e),Math.floor(t()*6),Math.floor(t()*i),P.shell);return r}function cd(s){let t=new Ye(5,5,5,[-2.5*j*.4,0,-2.5*j*.4]);if(s==="grass")for(let[e,i,n]of[[1,1,3],[3,1,2],[2,3,4],[0,3,2],[4,3,3]])for(let r=0;r<n;r++)t.set(e,r,i,r===n-1?P.leaf:P.leafD);if(s==="flower"){for(let e=0;e<3;e++)t.set(2,e,2,P.leafD);t.set(2,3,2,P.flowerY);for(let[e,i]of[[1,2],[3,2],[2,1],[2,3]])t.set(e,3,i,P.flower)}if(s==="flowerY"){for(let e=0;e<2;e++)t.set(2,e,2,P.leafD);for(let[e,i]of[[1,2],[3,2],[2,1],[2,3],[2,2]])t.set(e,2,i,P.flowerY)}return s==="shell"&&(t.box(1,0,1,3,0,2,P.shell),t.set(2,1,1,P.shell),t.set(2,0,3,P.trim)),s==="pebble"&&(t.box(1,0,1,2,0,3,P.rockD),t.set(2,1,2,P.rock)),t.buildAll(),t}var ze=3200,ud=.5,_y={sunny:{sand:["#ecd59a","#e0c88c"],grass:["#62a844","#55983c"],rock:["#8e8a84","#7e7a76"],side:"#b8925c",side2:"#8a6a42"},jungle:{sand:["#e6cf92","#d8c084"],grass:["#3e8a36","#347a2e"],rock:["#7e7a72","#6e6a64"],side:"#a4824e",side2:"#6e5032"},rocky:{sand:["#d8c49a","#ccb88e"],grass:["#7a9a50","#6a8a44"],rock:["#8a8690","#7a7680"],side:"#8a8078",side2:"#5e5860"},cursed:{sand:["#8e887a","#827c6e"],grass:["#4a5a46","#3e4e3c"],rock:["#5a5660","#4e4a54"],side:"#5e5648",side2:"#3e362e"}},Gh=["S\xF3vir\xE1g","Holdkar\xE9j","Varj\xFAf\xE9szek","Fekete Fog","Rozsd\xE1s Horgony","Sir\xE1ly","Csontv\xE1ros","K\xF6dkapu","M\xE9zpart","Viharszem","Kagyl\xF3s","P\xE1lmakorona","\xD6rd\xF6gszirt","Kal\xF3ztanya","Tekn\u0151sh\xE1t","Gy\xF6ngyhalom","Sz\xE9lcsend","\xC1rny\xE9kmorzsa","B\xE1lnacsont","Rumhord\xF3","Lid\xE9rcl\xE1p","Narancsf\xE9ny","Hajnalpart","Smaragdszem","Agyarszirt","S\xF3hajt\xF3","K\u0151korona","V\xF6r\xF6sf\xFCrt"],dd=["Saltbloom","Moonsliver","Crow's Nest","Black Fang","Rusty Anchor","Gull Rock","Bonetown","Mistgate","Honey Shore","Stormeye","Shell Key","Palm Crown","Devil's Crag","Rogue's Haven","Turtleback","Pearl Mound","Stillwind","Shadecrumb","Whalebone","Rum Barrel","Wisp Marsh","Ember Glow","Dawn Shore","Emerald Eye","Tusk Crag","Sighing Isle","Stone Crown","Red Curl"],fd=["Fleur-de-Sel","Croissant-de-Lune","Nid-de-Corbeau","Croc Noir","Ancre Rouill\xE9e","Rocher aux Mouettes","Ville-aux-Os","Porte des Brumes","Rive de Miel","\u0152il-de-la-Temp\xEAte","Caye aux Coquillages","Couronne de Palmes","Rocher du Diable","Repaire des Forbans","Dos-de-Tortue","Butte aux Perles","Vent-Calme","Miette-d'Ombre","Os-de-Baleine","Tonneau de Rhum","Marais aux Feux Follets","Lueur de Braise","Rive de l'Aube","\u0152il d'\xC9meraude","Cr\xEAte-D\xE9fense","\xCEle Soupirante","Couronne de Pierre","Boucle Rouge"],ta=class{constructor(t,e=1717){this.scene=t,this.seed=e,this.noise=Ju(e),this.islands=[],this.cell=128,this.grid=new Map,this.cursedZones=[{x:ze*.78,y:ze*.22,r:620},{x:ze*.18,y:ze*.82,r:380}],this.props=[],this.terrainMat=new Ae({vertexColors:!0}),this.generate()}cursedness(t,e){let i=0;for(let n of this.cursedZones)i=Math.max(i,Zt(1.35-Math.hypot(t-n.x,e-n.y)/n.r*1.35,0,1));return i}generate(){let t=tn(this.seed),e=[];for(let[n,r]of[[.47,.6],[.7,.68],[.28,.34]])e.push({x:n*ze,y:r*ze,r:55,kind:"outpost"});let i=0;for(;e.length<28&&i++<5e3;){let n=180+t()*(ze-360),r=180+t()*(ze-360),o=t(),a=o<.18?95+t()*30:o<.6?55+t()*30:28+t()*20;if(e.some(c=>Math.hypot(c.x-n,c.y-r)<c.r+a+140)||Math.hypot(n-ze*.5,r-ze*.55)<200)continue;let h=this.cursedness(n,r)>.4?"cursed":a>90?t()<.5?"jungle":"rocky":a>55&&t()<.6?"jungle":"sunny";e.push({x:n,y:r,r:a,kind:h})}e.forEach((n,r)=>this.islands.push(this.buildIsland(n,r,t)));for(let n of this.islands)for(let r=Math.floor(n.z0/this.cell);r<=Math.floor((n.z0+n.h)/this.cell);r++)for(let o=Math.floor(n.x0/this.cell);o<=Math.floor((n.x0+n.w)/this.cell);o++){let a=o+","+r;this.grid.has(a)||this.grid.set(a,[]),this.grid.get(a).push(n)}this.depthTex=this.buildDepthTexture(),this.wrecks=[];for(let n=0;n<8;n++)for(let r=0;r<60;r++){let o=200+t()*(ze-400),a=200+t()*(ze-400);if(this.field(o,a)<-.6&&!this.islands.some(l=>Math.hypot(l.cx-o,l.cz-a)<l.r+80)&&!this.wrecks.some(l=>Math.hypot(l.x-o,l.z-a)<300)){let l={x:o,z:a,looted:!1};this.wrecks.push(l),this.props.push({kind:"wreck",x:o,z:a,y:-3.6,seed:n*31+7,isl:null,wreck:l});break}}}islandsNear(t,e){return this.grid.get(Math.floor(t/this.cell)+","+Math.floor(e/this.cell))||[]}field(t,e){let i=-9;for(let n of this.islandsNear(t,e)){let r=Math.floor(t-n.x0),o=Math.floor(e-n.z0);r<0||o<0||r>=n.w||o>=n.h||(i=Math.max(i,n.f[o*n.w+r]))}return i}height(t,e){let i=-8;for(let n of this.islandsNear(t,e)){let r=Math.floor(t-n.x0),o=Math.floor(e-n.z0);r<0||o<0||r>=n.w||o>=n.h||(i=Math.max(i,n.hm[o*n.w+r]))}return i}islandAt(t,e,i=0){for(let n of this.islandsNear(t,e))if(Math.hypot(t-n.cx,e-n.cz)<n.r*1.3+i)return n;return null}nearestIsland(t,e){let i=null,n=1e9;for(let r of this.islands){let o=Math.hypot(r.cx-t,r.cz-e)-r.r;o<n&&(n=o,i=r)}return i}buildIsland(t,e,i){let r=Math.ceil(t.r*2+80),o=r,a=Math.round(t.x-r/2),l=Math.round(t.y-o/2),h=new Float32Array(r*o),c=new Float32Array(r*o),u=this.noise,d=e*37.3,f=.7+i()*.5,g=i()*Math.PI,x={rocky:15,jungle:10,outpost:3,cursed:9,sunny:5}[t.kind],m=[];for(let w=0;w<3;w++)m.push({a:i()*Math.PI*2,d:t.r*(.25+i()*.35),r:t.r*(.35+i()*.3)});for(let w=0;w<o;w++)for(let _=0;_<r;_++){let y=_-r/2,R=w-o/2,A=y*Math.cos(g)+R*Math.sin(g),C=(-y*Math.sin(g)+R*Math.cos(g))/f,L=Math.hypot(A,C)/t.r;for(let H of m)L=Math.min(L,Math.hypot(y-Math.cos(H.a)*H.d,R-Math.sin(H.a)*H.d)/H.r*1.05);t.kind==="outpost"&&(L=Math.hypot(y,R)/t.r);let E=u.fbm((_+d*10)/40,(w-d*7)/40,4)-.5,b=1-L+E*(t.kind==="outpost"?.2:.5);h[w*r+_]=b;let I;if(b>0){let H=Zt(b/.55,0,1),F=u.fbm((_+d)/30,(w+d)/30,2);I=.5+(b>.05?.5:0)+Math.pow(H,1.5)*x*(.55+F*.9)}else I=Math.max(-8,b*22);c[w*r+_]=Math.floor(I/ud)*ud}for(let w=0;w<o;w++)for(let _=0;_<r;_++)c[w*r+_]=c[(w&-2)*r+(_&-2)];let p={x0:a,z0:l,w:r,h:o,cx:t.x,cz:t.y,r:t.r,kind:t.kind,f:h,hm:c,id:e,props:[],digs:[],visited:!1,discovered:!1};return p.name=e,this.decorate(p,i),p.mesh=this.terrainMesh(p),this.scene.add(p.mesh),p}hAt(t,e,i){let n=Math.floor(e-t.x0),r=Math.floor(i-t.z0);return n<0||r<0||n>=t.w||r>=t.h?-8:t.hm[r*t.w+n]}decorate(t,e){let i=[];for(let u=0;u<3e3;u++){let d=t.x0+e()*t.w,f=t.z0+e()*t.h,g=this.hAt(t,d,f);g>=1&&i.push({x:d,z:f,y:g})}let n=(u,d,f)=>t.props.every(g=>Math.hypot(g.x-u,g.z-d)>f),r=(u,d,f,g={})=>{let x={kind:u,x:d,z:f,y:g.y??this.hAt(t,d,f),seed:Math.floor(e()*1e4),isl:t,...g};return t.props.push(x),this.props.push(x),x},o=t.r*t.r;if(t.kind==="outpost"){let u=0;for(;this.hAt(t,t.cx,t.cz+u)>0&&u<t.h/2;)u++;t.dock={x:t.cx,z:t.cz+u-3},r("dock",t.cx,t.cz+u+6,{y:-2.5,len:64}),t.moor={x:t.cx+12,z:t.cz+u+18},r("hut",t.cx-16,t.cz-10,{light:!0}),r("hut",t.cx+14,t.cz-18,{light:!0}),r("hut",t.cx+18,t.cz+8,{light:!0}),t.merchant={x:t.cx-6,z:t.cz+6};for(let[d,f]of[[-4,u-4],[4,u-4],[-20,6],[8,-4]])r("lantern",t.cx+d,t.cz+f,{light:!0});r("barrel",t.cx+4,t.cz+10),r("barrel",t.cx+5.5,t.cz+10.5),r("crate",t.cx+6,t.cz+12),r("powder",t.cx-12,t.cz+12)}let a=t.kind==="cursed"?0:Math.round(o/(t.kind==="jungle"?160:380)),l=Math.round(o/(t.kind==="rocky"?260:900)),h=0,c=0;for(let u of i){if(h<a&&u.y<=7&&n(u.x,u.z,6)){r("palm",u.x,u.z),h++;continue}c<l&&n(u.x,u.z,5)&&(r(e()<.35?"rockB":"rockS",u.x,u.z),c++)}if(t.kind==="cursed"){let u=0,d=0;for(let f of i)u<3&&f.y>=1.5&&n(f.x,f.z,16)?(r("totem",f.x,f.z,{light:!0}),u++):d<8&&n(f.x,f.z,7)&&(r("deadtree",f.x,f.z),d++);for(let f of i)if(f.y>=1.5&&n(f.x,f.z,8)){t.vault={x:f.x,z:f.z,y:f.y};break}}if(t.kind!=="outpost"&&t.r>38){for(let u of i)if(u.y>=1.5&&u.y<=6&&n(u.x,u.z,12)){r("skullrock",u.x,u.z),t.landmark={x:u.x,z:u.z};break}}if(t.kind!=="outpost"){let u=t.r>80?3:t.r>45?2:1;for(let d of i){if(t.digs.length>=u)break;d.y>=1&&d.y<=6&&n(d.x,d.z,7)&&t.digs.every(f=>Math.hypot(f.x-d.x,f.z-d.z)>20)&&t.digs.push({x:d.x,z:d.z,dug:!1})}for(let d of i.slice(-20))e()<.25&&n(d.x,d.z,4)&&r(e()<.3?"powder":"barrel",d.x,d.z,{loot:!0});if(e()<.4){for(let d of i.slice(-80,-20))if(n(d.x,d.z,6)){t.looseChest={x:d.x,z:d.z,y:d.y};break}}}}terrainMesh(t){let e=_y[t.kind==="outpost"?"sunny":t.kind],i=R=>new mt(R),n=[i(e.sand[1]).multiplyScalar(.8),i(e.sand[0]),i(e.sand[1]),i(e.grass[0]),i(e.grass[1]),i(e.rock[0]),i(e.rock[1])],r=[];for(let R of n)r.push(R.clone()),r.push(R.clone().multiplyScalar(.93));let o=i(e.side),a=i(e.side2),l=[],h=[],c=[],{w:u,h:d,hm:f}=t,g=(R,A)=>R<0||A<0||R>=u||A>=d?-8:f[A*u+R],x=(R,A,C)=>{l.push(R[0],R[1],R[2]),h.push(A[0],A[1],A[2]),c.push(C.r,C.g,C.b)},m=(R,A,C,L,E,b)=>{for(let I of[R,A,C,R,C,L])x(I,E,b)},p=new Int32Array(u*d).fill(-1);for(let R=0;R<d;R++)for(let A=0;A<u;A++){let C=g(A,R);if(C<-1)continue;let L;C<.5?L=0:C<=1.5?L=_e(A>>2,R>>2,t.id)<.5?1:2:C>=10||t.kind==="rocky"&&C>=6?L=_e(A>>1,R>>1,t.id)<.5?5:6:L=this.noise.fbm((A+t.id*50)/9,R/9,2)>.52?3:4,C===2&&_e(A>>1,R>>1,3)<.4&&(L=2);let E=(L===1||L===2||L>=5)&&_e(A>>2,R>>2,t.id+7)<.4?1:0;p[R*u+A]=(Math.round(C*2)+40)*16+L*2+E}let w=new Uint8Array(u*d);for(let R=0;R<d;R++)for(let A=0;A<u;A++){let C=p[R*u+A];if(C<0||w[R*u+A])continue;let L=A;for(;L+1<u&&p[R*u+L+1]===C&&!w[R*u+L+1];)L++;let E=R;t:for(;E+1<d;){for(let O=A;O<=L;O++)if(p[(E+1)*u+O]!==C||w[(E+1)*u+O])break t;E++}for(let O=R;O<=E;O++)for(let Z=A;Z<=L;Z++)w[O*u+Z]=1;let b=Math.floor(C/16)/2-20,I=r[C%16],H=t.x0+A,F=t.z0+R,W=t.x0+L+1,Y=t.z0+E+1;m([H,b,F],[H,b,Y],[W,b,Y],[W,b,F],[0,1,0],I)}let _=(R,A,C,L)=>{for(let E=0;E<(R?u:d);E++){let b=null,I=()=>{if(!b)return;let{s:H,e:F,y:W,ny:Y}=b,O=(W-Y>2||W<=1.5?a:o).clone().multiplyScalar(L);if(R){let Z=t.x0+E+(R>0?1:0),G=t.z0+H,nt=t.z0+F+1;R>0?m([Z,Y,G],[Z,W,G],[Z,W,nt],[Z,Y,nt],C,O):m([Z,Y,nt],[Z,W,nt],[Z,W,G],[Z,Y,G],C,O)}else{let Z=t.z0+E+(A>0?1:0),G=t.x0+H,nt=t.x0+F+1;A>0?m([nt,Y,Z],[nt,W,Z],[G,W,Z],[G,Y,Z],C,O):m([G,Y,Z],[G,W,Z],[nt,W,Z],[nt,Y,Z],C,O)}b=null};for(let H=0;H<(R?d:u);H++){let F=R?E:H,W=R?H:E,Y=g(F,W),O=Math.max(g(F+R,W+A),-2.5);if(p[W*u+F]<0||O>=Y){I();continue}b&&b.y===Y&&b.ny===O&&b.e===H-1?b.e=H:(I(),b={s:H,e:H,y:Y,ny:O})}I()}};_(1,0,[1,0,0],.8),_(-1,0,[-1,0,0],.68),_(0,1,[0,0,1],.9),_(0,-1,[0,0,-1],.62);let y=new Ee;return y.setAttribute("position",new ae(l,3)),y.setAttribute("normal",new ae(h,3)),y.setAttribute("color",new ae(c,3)),y.computeBoundingSphere(),new Nt(y,this.terrainMat)}buildDepthTexture(){let e=new Uint8Array(1048576);for(let n=0;n<512;n++)for(let r=0;r<512;r++){let o=(r+.5)/512*ze,a=(n+.5)/512*ze,l=-9;for(let c of this.islandsNear(o,a))for(let[u,d]of[[0,0],[2,2],[-2,-2],[2,-2],[-2,2]]){let f=Math.floor(o+u-c.x0),g=Math.floor(a+d-c.z0);f<0||g<0||f>=c.w||g>=c.h||(l=Math.max(l,c.f[g*c.w+f]))}let h=Zt(1+l/.5,0,1);e[(n*512+r)*4]=h*255,e[(n*512+r)*4+3]=255}let i=new dr(e,512,512);return i.magFilter=pi,i.minFilter=pi,i.needsUpdate=!0,i}};function pd(s){switch(s.kind){case"palm":return ju(s.seed);case"rockB":return Hh(s.seed,!0);case"rockS":return Hh(s.seed,!1);case"hut":return Qu(s.seed);case"lantern":return td();case"totem":return ed();case"deadtree":return id(s.seed);case"dock":return nd(s.len);case"barrel":return _r(!1);case"powder":return _r(!0);case"crate":return sd();case"skullrock":return ld();case"wreck":return hd(s.seed)}return null}var br={amp:1};function Me(s,t,e){return br.amp*(.42*Math.sin(.085*s+.05*t+1.05*e)+.28*Math.sin(-.055*s+.1*t+1.45*e)+.12*Math.sin(.19*s+.16*t+2.2*e)+.06*Math.sin(.33*s-.27*t+3.1*e))}var My=`
uniform float uAmp;
float waveAt(vec2 p, float t){
  return uAmp*(0.42*sin(0.085*p.x+0.05*p.y+1.05*t)+0.28*sin(-0.055*p.x+0.1*p.y+1.45*t)+0.12*sin(0.19*p.x+0.16*p.y+2.2*t)+0.06*sin(0.33*p.x-0.27*p.y+3.1*t));
}`,Mr=8;function xd(s,t){let e=new Ci(1400,1400,175,175);e.rotateX(-Math.PI/2);let i=[];for(let o=0;o<Mr;o++)i.push(new Xt);let n=new He({side:ai,uniforms:{uTime:{value:0},uAmp:{value:1},uDepth:{value:s},uWorld:{value:t},uSunDir:{value:new v(.3,.8,.2)},uSunCol:{value:new mt(1,.95,.85)},uAmb:{value:new mt(.5,.6,.7)},uDeep:{value:new mt("#1c5f86")},uShallow:{value:new mt("#3fc6c0")},uFog:{value:new mt("#9cc8e0")},uFogNear:{value:120},uFogFar:{value:650},uCam:{value:new v},uShipInv:{value:i},uShipN:{value:0},uCursed:{value:0}},vertexShader:My+`
      uniform float uTime; varying vec3 vW;
      void main(){ vec4 w = modelMatrix*vec4(position,1.0); w.y = waveAt(w.xz,uTime); vW = w.xyz; gl_Position = projectionMatrix*viewMatrix*w; }`,fragmentShader:`
      uniform float uTime; uniform sampler2D uDepth; uniform float uWorld; uniform vec3 uSunDir; uniform vec3 uSunCol; uniform vec3 uAmb;
      uniform vec3 uDeep; uniform vec3 uShallow; uniform vec3 uFog; uniform float uFogNear; uniform float uFogFar; uniform vec3 uCam;
      uniform mat4 uShipInv[${Mr}]; uniform int uShipN; uniform float uCursed; uniform float uAmp;
      varying vec3 vW;
      float h2(vec2 p){ return fract(sin(dot(p, vec2(127.1,311.7)))*43758.5453); }
      float hullHW(float t){ return t < 0.08 ? 3.05 + t/0.08*0.35 : (t < 0.6 ? 3.4 : 3.45*sqrt(max(0.0,1.0-pow((t-0.6)/0.4,2.0)))); }
      void main(){
        for (int i=0;i<${Mr};i++){ if (i>=uShipN) break; vec4 l = uShipInv[i]*vec4(vW,1.0); float t=(l.x+14.8)/27.4; if (t>0.0 && t<1.0 && abs(l.z) < hullHW(t)-0.12 && l.y < 3.0) discard; }
        vec3 n = normalize(cross(dFdx(vW), dFdy(vW))); if (n.y < 0.0) n = -n;
        vec2 uv = vW.xz / uWorld;
        float sh = texture2D(uDepth, uv).r;           // 1 near shore, 0 deep
        float band = floor(sh*5.0)/5.0;               // stepped colour bands read as pixel art
        vec3 base = mix(uDeep, uShallow, band*band);
        float dif = clamp(dot(n, normalize(uSunDir)), 0.0, 1.0);
        vec3 col = base*(uAmb + uSunCol*dif*0.75);
        // foam on wave crests and along the shore
        float crest = vW.y/(uAmp*0.88+0.001);
        vec2 cell = floor(vW.xz*1.0);
        float fn = h2(cell + floor(uTime*2.0));
        if (crest > 0.78 && fn > 0.55) col = mix(col, vec3(0.92,0.97,1.0)*clamp(uAmb*1.1+uSunCol*0.5, 0.0, 1.0), 0.75);
        float shore = sin(sh*26.0 - uTime*1.6);
        vec3 foam = vec3(0.95,1.0,1.0)*clamp(uAmb*1.1 + uSunCol*0.5, 0.0, 1.0);
        if (sh > 0.82 && shore > 0.6 && h2(cell) > 0.35) col = mix(col, foam, 0.7);
        if (sh > 0.96) col = mix(col, foam, 0.5);
        // sun glints
        vec3 v = normalize(uCam - vW); vec3 hv = normalize(v + normalize(uSunDir));
        float sp = pow(max(dot(n,hv),0.0), 90.0);
        if (sp > 0.5 && h2(cell*1.7 + floor(uTime*3.0)) > 0.4) col += uSunCol*0.55;
        col = mix(col, col*vec3(0.55,0.85,0.7), uCursed*0.6);
        float d = length(uCam - vW);
        float fogF = smoothstep(uFogNear, uFogFar, d);
        gl_FragColor = linearToOutputTexel(vec4(mix(col, uFog, fogF), 1.0));
      }`});n.extensions={derivatives:!0};let r=new Nt(e,n);return r.frustumCulled=!1,{mesh:r,mat:n,shipInv:i}}function yd(){let s=new Go(950,32,16),t=new He({side:ti,depthWrite:!1,fog:!1,uniforms:{uTop:{value:new mt("#4a90d0")},uHor:{value:new mt("#bfe0f0")},uSun:{value:new v(0,1,0)},uSunCol:{value:new mt("#fff")},uNight:{value:0},uMoon:{value:new v(0,-1,0)},uTime:{value:0}},vertexShader:"varying vec3 vD; void main(){ vD = normalize(position); vec4 p = projectionMatrix*modelViewMatrix*vec4(position,1.0); gl_Position = p.xyww; }",fragmentShader:`uniform vec3 uTop; uniform vec3 uHor; uniform vec3 uSun; uniform vec3 uSunCol; uniform float uNight; uniform vec3 uMoon; uniform float uTime; varying vec3 vD;
      float h3(vec3 p){ return fract(sin(dot(p, vec3(12.9898,78.233,45.164)))*43758.5453); }
      void main(){
        vec3 d = normalize(vD);
        float h = clamp(d.y, -0.1, 1.0);
        float b = floor(pow(max(h,0.0),0.6)*10.0)/10.0;   // banded gradient
        vec3 col = mix(uHor, uTop, b);
        if (d.y < 0.0) col = uHor*0.9;
        float s = dot(d, normalize(uSun));
        if (s > 0.9985) col = mix(col, vec3(1.0,0.97,0.86), 1.0);
        else if (s > 0.995) col = mix(col, uSunCol, 0.6);
        else if (s > 0.97) col = mix(col, uSunCol, 0.15);
        float m = dot(d, normalize(uMoon));
        if (m > 0.9988) col = mix(col, vec3(0.88,0.92,1.0), uNight);
        if (uNight > 0.0 && d.y > 0.02) { vec3 q = floor(d*260.0); float st = h3(q); if (st > 0.996) col += vec3(0.9,0.9,1.0)*uNight*(0.5+0.5*sin(uTime*2.0+st*90.0)); }
        gl_FragColor = linearToOutputTexel(vec4(col,1.0));
      }`}),e=new Nt(s,t);return e.frustumCulled=!1,e.renderOrder=-10,{mesh:e,mat:t}}function vd(s){let t=[];for(let i=0;i<4;i++){let n=document.createElement("canvas");n.width=64,n.height=24;let r=n.getContext("2d"),o=5+i;for(let l=0;l<o;l++){let h=8+Math.random()*44,c=10+Math.random()*6,u=5+Math.random()*7;for(let d=-u;d<=u;d++)for(let f=-u*1.4;f<=u*1.4;f++)(f/1.4)**2+d*d>u*u||c+d>20||(r.fillStyle=d>u*.3?"#d8e2ec":"#ffffff",r.fillRect(Math.round(h+f),Math.round(c+d),1,1))}let a=new Fn(n);a.magFilter=Ce,a.minFilter=Ce,a.colorSpace=Be,t.push(a)}let e=[];for(let i=0;i<26;i++){let n=new ur({map:t[i%4],transparent:!0,fog:!1,depthWrite:!1}),r=new Lo(n),o=90+Math.random()*120;r.scale.set(o,o*24/64,1),r.userData={a:Math.random()*Math.PI*2,r:400+Math.random()*400,h:160+Math.random()*120},r.renderOrder=-5,s.add(r),e.push(r)}return e}var Gn=[{h:0,top:"#060a1c",hor:"#16223e",sun:"#3a4a7a",amb:"#26304e",fog:"#141e36",sea:"#0b2234"},{h:5,top:"#1a2050",hor:"#a05a5a",sun:"#ff9a60",amb:"#4a4060",fog:"#6a4a5a",sea:"#1a3a52"},{h:7,top:"#4a88cc",hor:"#f0c8a0",sun:"#ffd8a0",amb:"#8a8ca0",fog:"#d8c8b8",sea:"#1e5a80"},{h:12,top:"#3f86d8",hor:"#bfe2f4",sun:"#fff4e0",amb:"#a8b8c8",fog:"#a8d0e8",sea:"#1c5f86"},{h:17,top:"#4a7ac0",hor:"#f4c890",sun:"#ffc070",amb:"#9a9098",fog:"#e0b890",sea:"#1e5478"},{h:19,top:"#2a2a60",hor:"#e07850",sun:"#ff7a40",amb:"#5a4860",fog:"#8a5a5a",sea:"#18304c"},{h:21,top:"#0a1028",hor:"#202a4a",sun:"#40507a",amb:"#2a3250",fog:"#1a2440",sea:"#0c2236"},{h:24,top:"#060a1c",hor:"#16223e",sun:"#3a4a7a",amb:"#26304e",fog:"#141e36",sea:"#0b2234"}],md=new mt,gd=new mt;function _d(s,t){let e=Gn[0],i=Gn[1];for(let a=0;a<Gn.length-1;a++)if(s>=Gn[a].h&&s<Gn[a+1].h){e=Gn[a],i=Gn[a+1];break}let n=(s-e.h)/(i.h-e.h),r={};for(let a of["top","hor","sun","amb","fog","sea"]){md.set(e[a]),gd.set(i[a]);let l=md.clone().lerp(gd,n);if(t>0){let h=new mt(a==="sun"?"#6aff9a":a==="sea"?"#14302a":"#22382e");l.lerp(h,t*(a==="sun"?.4:.65))}r[a]=l}let o=(s-5.5)/14.5*Math.PI;return r.sunDir=new v(Math.cos(o),Math.sin(o),.35).normalize(),r.moonDir=new v(-Math.cos(o),-Math.sin(o),-.3).normalize(),r.night=Zt((-r.sunDir.y+.08)*4,0,1),r.light=Zt(r.sunDir.y*3+.15,0,1),r}var en=124,by=100,_i=36,vn=-2.5,ot={hold:4,deck:18,qd:25,fc:21,rail:22},At={qdEnd:30,fcStart:96,hatch0:50,hatch1:57,main:64,fore:88,helm:14,capstan:92},Md=[46,72,86],It=(_i-1)/2,bd=s=>(s-2)/110;function $e(s,t){let e=bd(s);if(e<0||e>1)return-1;let i;e<.08?i=13+e/.08*3:e<.6?i=16+Math.sin((e-.08)/.52*Math.PI/2)*1.5:i=17.5*Math.sqrt(Math.max(0,1-Math.pow((e-.6)/.4,2)));let n=Math.min(1,t/16);return i*=.42+.58*(n*n*(3-2*n)),t>20&&(i*=.97),i}function wy(s){let t=bd(s);return t>.75?(t-.75)/.25*12:t<.05?3:0}function wd(s){return s<=At.qdEnd?ot.qd:s>=At.fcStart?ot.fc:ot.deck}function Sy(s){return wd(s)+4}var Ey={player:{hullA:P.plank,hullB:P.plankD,stripe:P.trim,wale:P.tar,deck:P.deck,deckB:P.deckD,rail:P.plankD,glass:P.glass,sail:"sail"},enemy:{hullA:P.plankD,hullB:P.tar,stripe:P.red,wale:P.tar,deck:P.deckD,deckB:P.plankD,rail:P.tar,glass:P.glass,sail:"black"},ghost:{hullA:P.ghostwood,hullB:P.ghostwoodD,stripe:P.ghosttrim,wale:P.ghostwoodD,deck:P.ghostwood,deckB:P.ghostwoodD,rail:P.ghostwoodD,glass:P.ghostglass,sail:"ghost"}};function Sd(s="player"){let t=Ey[s],e=new Ye(en,by,_i,[-en/2*j,vn,-_i/2*j]),i=s==="ghost";for(let o=0;o<en;o++){let a=wy(o),l=wd(o),h=Sy(o);for(let c=Math.floor(a);c<=h;c++){let u=$e(o,c);if(!(u<0))for(let d=0;d<_i;d++){let f=Math.abs(d-It);if(f>u)continue;let g=f>u-1.3||o===2||$e(o+1,c)<f||$e(o-1,c)<f||c===Math.floor(a);if(!(i&&g&&c>8&&_e(o,c,d)<.04)){if(g){let x;c<=9?x=t.wale:c===14||c===l+4?x=t.stripe:c===15?x=t.wale:x=(c>>1)%2?t.hullA:t.hullB,c===h&&(x=t.rail),e.set(o,c,d,x);continue}c===ot.hold&&o>8&&o<104&&e.set(o,c,d,t.deckB),(c===l||c===ot.deck&&(o<=At.qdEnd||o>=At.fcStart))&&e.set(o,c,d,Math.round(d)%3===0?t.deckB:t.deck)}}}}for(let o=0;o<_i;o++){for(let a=ot.deck+1;a<ot.qd;a++){let l=$e(At.qdEnd,a);Math.abs(o-It)>l||Math.abs(o-It)<=2&&a<=ot.deck+6||e.set(At.qdEnd,a,o,t.hullB)}for(let a=ot.deck+1;a<ot.fc;a++)Math.abs(o-It)<=$e(At.fcStart,a)&&e.set(At.fcStart,a,o,t.hullB)}for(let o of[-1,1]){for(let a=1;a<=4;a++){let l=At.qdEnd+1+(4-a)*2,h=Math.min(ot.qd,ot.deck+a*2);for(let c=7;c<=11;c++)for(let u=l;u<=l+1;u++)for(let d=ot.deck+1;d<=h;d++)e.set(u,d,Math.round(It+o*c),t.deckB)}for(let a=1;a<=2;a++){let l=At.fcStart-1-(2-a)*2;for(let h=7;h<=10;h++)for(let c=l-1;c<=l;c++)for(let u=ot.deck+1;u<=Math.min(ot.fc,ot.deck+a*2-1);u++)e.set(c,u,Math.round(It+o*h),t.deckB)}}for(let o=At.hatch0;o<=At.hatch1;o++)for(let a=Math.round(It)-3;a<=Math.round(It)+3;a++)e.set(o,ot.deck,a,0);for(let o=At.hatch0-1;o<=At.hatch1+1;o++)for(let a of[Math.round(It)-4,Math.round(It)+4])e.set(o,ot.deck+1,a,t.rail);for(let o of[Math.round(It)-4,Math.round(It)+4])for(let a=At.hatch0-1;a<=At.hatch1+1;a+=At.hatch1-At.hatch0+2)e.set(a,ot.deck+1,o,t.rail);for(let o=ot.hold+1;o<=ot.deck+1;o++)for(let a=Math.round(It)-1;a<=Math.round(It)+1;a++)e.set(At.hatch0,o,a,P.ladder);for(let o of Md)for(let a of[-1,1])for(let l=o-1;l<=o+2;l++)for(let h=ot.deck+1;h<=ot.deck+2;h++){let c=$e(l,h);for(let u=Math.floor(c-1.3);u<=Math.ceil(c);u++)e.set(l,h,Math.round(It+a*u),0)}let n={[At.main]:96,[At.fore]:84};for(let o of[At.main,At.fore]){for(let a=ot.hold+1;a<=n[o];a++)for(let l=0;l<=1;l++)for(let h=0;h<=1;h++)e.set(o+l,a,Math.round(It)+h-1,P.mast);if(o===At.main)for(let a=o-3;a<=o+4;a++)for(let l=Math.round(It)-4;l<=Math.round(It)+3;l++){let h=a===o-3||a===o+4||l===Math.round(It)-4||l===Math.round(It)+3;e.set(a,78,l,t.deckB),h&&(e.set(a,79,l,t.rail),e.set(a,80,l,t.rail))}}for(let o=104;o<en;o++){let a=ot.fc+2+Math.floor((o-104)/2.5);e.set(o,a,Math.round(It),P.mast),e.set(o,a,Math.round(It)-1,P.mast)}for(let o of[It-6,It-2,It+2,It+6])for(let a=ot.deck+1;a<=ot.deck+4;a++)for(let l=2;l<=3;l++)e.get(l,a,Math.round(o))&&e.set(2,a,Math.round(o),t.glass);for(let o of[3,_i-4])e.set(4,ot.qd+5,o,t.rail),e.set(4,ot.qd+6,o,t.glass),e.set(4,ot.qd+7,o,P.iron);e.set(At.main+2,ot.deck+9,Math.round(It),t.glass),e.box(At.helm,ot.qd+1,Math.round(It)-1,At.helm+1,ot.qd+3,Math.round(It),P.mast),e.box(At.capstan,ot.deck+1,Math.round(It)-2,At.capstan+3,ot.deck+3,Math.round(It)+1,(o,a)=>a===ot.deck+2?P.brass:P.plankD);let r=(o,a,l,h)=>e.box(o,a,l,o+3,a+3,l+3,(c,u,d)=>(c===o||c===o+3)&&(u===a||u===a+3)?P.plankD:h);r(At.main-8,ot.deck+1,Math.round(It)+5,P.deck),r(70,ot.hold+1,6,P.deck),r(40,ot.hold+1,_i-10,P.deck);for(let[o,a]of[[80,8],[84,8],[80,26]])e.box(o,ot.hold+1,a,o+2,ot.hold+3,a+2,(l,h)=>h===ot.hold+2?P.iron:P.powder);for(let o of[-1,1])for(let a=4;a<=ot.deck+3;a++){let l=At.main-15,h=Math.round(It+o*($e(l,Math.min(a,22))+.6));e.set(l-1,a,h,P.ladder),e.set(l+2,a,h,P.ladder),a%2===0&&(e.set(l,a,h,P.ladder),e.set(l+1,a,h,P.ladder))}return e.orig=e.d.slice(),e}var de=s=>(s-en/2+.5)*j,ee=s=>vn+s*j,ei=s=>(s-_i/2+.5)*j,Ed=()=>{let s=[{type:"helm",x:de(At.helm+.5),y:ee(ot.qd+3.5),z:ei(It),stand:[de(At.helm-7),ee(ot.qd+1),ei(It)]},{type:"sails",mast:0,x:de(At.main-2),y:ee(ot.deck+5),z:ei(It+3),stand:[de(At.main-5),ee(ot.deck+1),ei(It+3)]},{type:"sails",mast:1,x:de(At.fore-2),y:ee(ot.deck+5),z:ei(It-3),stand:[de(At.fore-5),ee(ot.deck+1),ei(It-3)]},{type:"anchor",x:de(At.capstan+1.5),y:ee(ot.deck+3),z:ei(It-.5),stand:[de(At.capstan-3),ee(ot.deck+1),ei(It)]},{type:"ammo",x:de(At.main-6),y:ee(ot.deck+4),z:ei(It+7)},{type:"planks",x:de(72),y:ee(ot.hold+4),z:ei(8)},{type:"food",x:de(42),y:ee(ot.hold+4),z:ei(_i-8)}];for(let t of Md)for(let e of[-1,1]){let i=$e(t,ot.deck+1);s.push({type:"cannon",side:e,x:de(t+.5),y:ee(ot.deck+2.5),z:ei(It+e*(i-4)),stand:[de(t+.5),ee(ot.deck+1),ei(It+e*(i-9))]})}return s},Td=()=>[-1,1].map(s=>({side:s,x:de(At.main-14.5),z:ei(It+s*($e(At.main-15,10)+1))}));var Wh=Math.PI*2,Ze=s=>{for(;s>Math.PI;)s-=Wh;for(;s<-Math.PI;)s+=Wh;return s};function Ty(s){let t=document.createElement("canvas");t.width=32,t.height=32;let e=t.getContext("2d"),i=s==="enemy"?"#2c2a2e":s==="ghost"?"#9fc8b4":"#efe2bf",n=s==="enemy"?"#1e1c20":s==="ghost"?"#7aa894":"#d8c8a0";e.fillStyle=i,e.fillRect(0,0,32,32),e.fillStyle=n;for(let o=0;o<32;o+=8)e.fillRect(o,0,1,32);if(e.fillRect(0,0,32,1),e.fillRect(0,31,32,1),s==="player"&&(e.fillStyle="#d8c494",e.fillRect(19,9,5,6),e.fillStyle="#b8a070",e.fillRect(19,9,5,1)),s==="enemy"&&(e.fillStyle="#e8e4dc",["..XXXX..",".XXXXXX.","XX..X..X","XX..X..X",".XXXXXX.","..X.X.X.","X......X",".X....X.","..XXXX..",".X....X."].forEach((a,l)=>[...a].forEach((h,c)=>{h==="X"&&e.fillRect(12+c,10+l,1,1)}))),s==="ghost"){for(let o=0;o<70;o++)e.clearRect(Math.random()*32|0,Math.random()*32|0,1+(Math.random()*3|0),1+(Math.random()*2|0));e.clearRect(26,20,6,12),e.clearRect(0,26,8,6)}let r=new Fn(t);return r.magFilter=r.minFilter=Ce,r.colorSpace=Be,r}var wr=null;function Ad(s){if(wr||(wr=[]),wr[s])return wr[s];let t=[];for(let i=4;i<=108;i+=2)t.push(new ht(de(i),($e(i,s)-1.2)*j));for(let i=108;i>=4;i-=2)t.push(new ht(de(i),-($e(i,s)-1.2)*j));let e=new Vo(new mr(t));return e.rotateX(Math.PI/2),wr[s]=e,e}var Mi=class{constructor(t,e,i,n,r,o={}){this.game=t,this.style=e,this.grid=Sd(e),this.grid.buildAll(),this.root=new se,this.root.rotation.order="YZX",this.root.add(this.grid.group),this.x=i,this.z=n,this.y=0,this.yaw=r,this.pitch=0,this.roll=0,this.speed=0,this.turn=0,this.drift=0,this.rudder=0,this.anchor=!1,this.anchorT=0,this.sail={h:0,angle:0},this.sailShown=0,this.water=0,this.leaks=0,this.leakT=0,this.sinking=0,this.dead=!1,this.fires=new Map,this.fireT=0,this.stations=Ed().map((l,h)=>({...l,ship:this,user:null,index:h})),this.netId=o.netId??t.newId(),this.remote=!!o.remote,this.hullMul=1,this.leakMul=1,this.ladders=Td(),this.ammo=30,this.planks=12,this.food=8,this.cargo=[],this.maxSpeed=e==="ghost"?11:9.5,this.lights=[],this.buildRig(),this.buildCannons(),this.buildWheel(),this.waterMesh=new Nt(Ad(ot.hold+1),new Ae({color:"#2a6a8a",transparent:!0,opacity:.85})),this.root.add(this.waterMesh),this.waterMesh.visible=!1,this.shell=[];let a=this.grid;for(let l=0;l<=ot.deck-1;l++)for(let h=0;h<_i;h++)for(let c=0;c<en;c++){if(!a.orig[a.idx(c,l,h)])continue;let d=Math.abs(h-It),f=$e(c,l);(d>f-1.3||l<=1||c<=3)&&this.shell.push(a.idx(c,l,h))}this.lightPts=[];for(let[l,h,c]of[[4,ot.qd+6,3],[4,ot.qd+6,_i-4],[At.main+2,ot.deck+9,It]])this.lightPts.push({p:new v(de(l),ee(h),ei(c)),col:e==="ghost"?"#40ffa0":"#ffc060",r:9});this.updateTransform(0)}buildRig(){let t=Ty(this.style),e=new Ae({map:t,side:ai,alphaTest:.5,transparent:!1,flatShading:!0,emissive:this.style==="ghost"?"#1a4a3a":"#2a2620"});this.sails=[];let i=new Ae({color:this.style==="ghost"?"#2c3834":"#4a2e1a"}),n=[[At.main,60,7.6,6.4],[At.main,88,6,5.6],[At.fore,54,7,5.8],[At.fore,78,5.4,4.6]];for(let[f,g,x,m]of n){let p=new se;p.position.set(de(f)+j,ee(g),0);let w=new Nt(new Te(.3,.3,x+.8),i);p.add(w);let _=new Ci(x,m,6,6);_.rotateY(Math.PI/2),_.translate(.3,-m/2,0);let y=_.attributes.position.array.slice(),R=new Nt(_,e);p.add(R),this.root.add(p),this.sails.push({pivot:p,mesh:R,base:y,w:x,h:m})}let r=[],o=(f,g)=>r.push(f[0],f[1],f[2],g[0],g[1],g[2]),a={main:de(At.main+.5),fore:de(At.fore+.5)};for(let[f,g,x]of[[a.main,At.main,94],[a.fore,At.fore,82]])for(let m of[-1,1]){for(let p of[-6,-3,0]){let w=g+p-2,_=$e(w,ot.deck+4)-.6,y=[de(w),ee(ot.deck+4),m*_*j];o([f,ee(x-18),m*.15],y),o([f,ee(x),m*.12],[de(w),ee(ot.deck+4),m*_*j])}for(let p=1;p<9;p++){let w=p/10,_=[f+(de(g-8)-f)*w,ee(ot.deck+4)+(ee(x-18)-ee(ot.deck+4))*(1-w),m*(.15+($e(g-8,ot.deck+4)-.6)*j*w)],y=[f+(de(g-2)-f)*w,_[1],m*(.15+($e(g-2,ot.deck+4)-.6)*j*w)];o(_,y)}}o([a.fore,ee(84),0],[de(en-1),ee(ot.fc+9),0]),o([a.main,ee(96),0],[a.fore,ee(84),0]),o([a.main,ee(96),0],[de(4),ee(ot.qd+6),0]);let l=new Ee;l.setAttribute("position",new ae(r,3)),this.rigLines=new Is(l,new fr({color:this.style==="ghost"?"#3a5a4a":"#2a1e14"})),this.root.add(this.rigLines);let h=document.createElement("canvas");h.width=16,h.height=10;let c=h.getContext("2d");c.fillStyle=this.style==="player"?"#a01e1e":this.style==="ghost"?"#2a8a5a":"#141414",c.fillRect(0,0,16,10),c.fillStyle=this.style==="player"?"#f0c440":"#e8e4dc";for(let[f,g]of[[7,2],[8,2],[6,3],[7,3],[8,3],[9,3],[6,4],[9,4],[7,5],[8,5],[4,7],[11,7],[5,6],[10,6],[4,1],[11,1]])c.fillRect(f,g,1,1);this.style==="ghost"&&(c.clearRect(12,0,4,3),c.clearRect(13,6,3,4),c.clearRect(10,8,2,2));let u=new Fn(h);u.magFilter=u.minFilter=Ce,u.colorSpace=Be;let d=new Ci(2.4,1.5,8,2);d.translate(-1.2,0,0),this.flag=new Nt(d,new Ae({map:u,side:ai,alphaTest:.5})),this.flag.position.set(a.main,ee(97.5),0),this.flagBase=d.attributes.position.array.slice(),this.root.add(this.flag)}buildCannons(){this.cannons=[];let t=new Ae({color:this.style==="ghost"?"#1e3a30":"#26262c"}),e=new Ae({color:"#5a3820"});for(let i of this.stations.filter(n=>n.type==="cannon")){let n=new se;n.position.set(i.x,ee(ot.deck+1),i.z);let r=new Nt(new Te(.9,.4,1.1),e);r.position.y=.2,n.add(r);let o=new se;o.position.y=.55,n.add(o);let a=new se;o.add(a);let l=new Nt(new Te(.42,.42,1.9),t);l.position.z=.35,a.add(l);let h=new Nt(new Te(.52,.52,.18),t);h.position.z=1.25,a.add(h),n.rotation.y=i.side>0?0:Math.PI,this.root.add(n),i.cannon={base:n,yawG:o,pitchG:a,yaw:0,pitch:.05,loaded:!0,recoil:0,cool:0},this.cannons.push(i)}}buildWheel(){let t=this.stations.find(r=>r.type==="helm"),e=new se;e.position.set(t.x-.25,t.y+.25,t.z);let i=new Ae({color:"#7a4a28"}),n=new Ae({color:"#c09a3a"});for(let r=0;r<8;r++){let o=r/8*Wh,a=new Nt(new Te(.08,1.3,.08),i);a.rotation.x=o,e.add(a);let l=new Nt(new Te(.1,.12,.38),i);l.position.set(0,Math.cos(o)*.5,Math.sin(o)*.5),l.rotation.x=o,e.add(l)}e.add(new Nt(new Te(.18,.18,.18),n)),e.scale.setScalar(.8),this.wheel=e,this.root.add(e)}get fwd(){return new v(Math.cos(this.yaw),0,-Math.sin(this.yaw))}velocity(){let t=this.fwd;return new v(t.x*this.speed,0,t.z*this.speed)}sinkDepth(){return Math.pow(this.water,1.4)*2.6+this.sinking}waterLocalY(){return vn+(ot.hold+1)*j+this.water*(ot.deck-ot.hold-1)*j}update(t,e){let i=this.game;if(this.remote){this.updatePuppet(t,e);return}let n=i.wind;this.sailShown=le(this.sailShown,this.sail.h,Math.min(1,t*1.5));let r=this.yaw+this.sail.angle*.9,o=Math.cos(Ze(n.dir-r)),a=Math.cos(Ze(n.dir-this.yaw)),l=Zt(.28+.72*(o*.6+.4)*(a>-.6?1:.5),.05,1);this.eff=this.ai?Math.max(l,.7):l;let h=this.sailShown*this.eff*this.maxSpeed*n.str;this.anchor&&(h=0);let c=h>this.speed?.55:.9;this.speed=le(this.speed,h,Math.min(1,t*c*(this.anchor?3:.35))),this.anchor&&(this.anchorT+=t);let u=this.rudder*(.12+.88*Zt(this.speed/5,0,1))*.22*(this.anchor?.3:1);this.turn=le(this.turn,u,Math.min(1,t*1.2)),this.yaw=Ze(this.yaw+this.turn*t);let d=this.fwd;this.x+=d.x*this.speed*t,this.z+=d.z*this.speed*t,this.groundCheck(t);let f=-d.z,g=d.x,x=Me(this.x+d.x*11,this.z+d.z*11,e),m=Me(this.x-d.x*12,this.z-d.z*12,e),p=Me(this.x+f*3.5,this.z+g*3.5,e),w=Me(this.x-f*3.5,this.z-g*3.5,e),_=(x+m+p+w)/4;this.y=le(this.y,_*.8-this.sinkDepth(),Math.min(1,t*2.5)),this.pitch=le(this.pitch,Math.atan2(x-m,23)*.9+(this.sinking?-this.sinking*.08:0),Math.min(1,t*2)),this.roll=le(this.roll,Math.atan2(p-w,7)*.6+this.turn*.35+this.water*.06+(this.sinking?this.sinking*.05:0),Math.min(1,t*2)),this.leakT-=t,this.leakT<=0&&(this.leakT=.35,this.countLeaks()),this.sinking?(this.sinking+=t*.35,this.sinking>9&&(this.dead=!0)):(this.water=Zt(this.water+this.leaks*4e-4*this.leakMul*t*(1+this.water*.6),0,1),this.water>=1&&(this.sinking=.001,this.game.onShipSinking(this))),this.fireT-=t,this.fireT<=0&&this.fires.size&&(this.fireT=.25,this.updateFire());for(let y of this.cannons){let R=y.cannon;R.cool=Math.max(0,R.cool-t),R.recoil=Math.max(0,R.recoil-t*2.5)}this.updateTransform(e),this.grid.flush(4)}updatePuppet(t,e){let i=this.net;if(i){let n=Math.min(1,t*10);this.x=le(this.x,i.x,n),this.z=le(this.z,i.z,n),this.y=le(this.y,i.y,n),this.yaw=Ze(this.yaw+Ze(i.yaw-this.yaw)*n),this.pitch=le(this.pitch,i.pitch,n),this.roll=le(this.roll,i.roll,n)}this.sailShown=le(this.sailShown,this.sail.h,Math.min(1,t*1.5));for(let n of this.cannons){let r=n.cannon;r.recoil=Math.max(0,r.recoil-t*2.5),r.cool=Math.max(0,r.cool-t)}this.updateTransform(e),this.grid.flush(8)}netState(){let t=[],e=0;for(let i of this.fires.keys()){if(e++>40)break;t.push(i)}return{id:this.netId,st:this.style,x:+this.x.toFixed(2),z:+this.z.toFixed(2),y:+this.y.toFixed(2),yaw:+this.yaw.toFixed(3),pitch:+this.pitch.toFixed(3),roll:+this.roll.toFixed(3),sp:+this.speed.toFixed(2),r:+this.rudder.toFixed(2),sh:+this.sail.h.toFixed(2),sa:+this.sail.angle.toFixed(2),an:this.anchor?1:0,w:+this.water.toFixed(3),sk:+this.sinking.toFixed(2),lk:+this.leaks.toFixed(1),am:this.ammo,pl:this.planks,fd:this.food,ef:+(this.eff||0).toFixed(2),hm:this.hullMul,c:this.cannons.map(i=>[+i.cannon.yaw.toFixed(2),+i.cannon.pitch.toFixed(2),i.cannon.loaded?1:0,i.cannon.loading?1:0]),f:t,ai:this.ai?1:0}}applyNet(t){this.net=t,this.speed=t.sp,this.rudder=t.r,this.sail.h=t.sh,this.sail.angle=t.sa,this.anchor=!!t.an,this.water=t.w,t.sk&&!this.sinking&&(this.sinking=t.sk),this.sinking=t.sk,this.leaks=t.lk,this.ammo=t.am,this.planks=t.pl,this.food=t.fd,this.eff=t.ef,t.c.forEach((e,i)=>{let n=this.cannons[i]&&this.cannons[i].cannon;n&&(this.cannons[i].user&&this.cannons[i].user.local||(n.yaw=e[0],n.pitch=e[1]),n.loaded=!!e[2],n.loading=!!e[3])}),this.fires=new Map(t.f.map(e=>[e,1]))}updateTransform(t){this.root.position.set(this.x,this.y,this.z),this.root.rotation.set(this.roll,this.yaw,this.pitch),this.root.updateMatrixWorld(!0);for(let e=0;e<this.sails.length;e++){let i=this.sails[e];i.pivot.rotation.y=-this.sail.angle*.9;let n=Zt(this.sailShown*1.15-(e%2?.15:0),.04,1),r=i.mesh.geometry.attributes.position,o=(this.eff||.5)*(this.style==="ghost"?.6:1)*n;for(let a=0;a<r.count;a++){let l=i.base[a*3],h=i.base[a*3+1],c=i.base[a*3+2],u=c/(i.w/2),d=-h/i.h,f=-d*i.h*n,g=(1-u*u)*Math.sin(Math.min(1,d)*Math.PI*.85)*1.3*o+Math.sin(t*3+u*4+d*5)*.04;r.setXYZ(a,l+g,f,c*(.82+.18*n))}r.needsUpdate=!0,i.mesh.geometry.computeVertexNormals()}if(this.wheel&&(this.wheel.rotation.x=this.rudder*Math.PI*1.5),this.flag){this.flag.rotation.y=Ze(this.game.wind.dir-this.yaw+Math.PI);let e=this.flag.geometry.attributes.position;for(let i=0;i<e.count;i++){let n=this.flagBase[i*3];e.setZ(i,Math.sin(t*7+n*3)*.12*(-n/2.4))}e.needsUpdate=!0}for(let e of this.cannons){let i=e.cannon;i.yawG.rotation.y=i.yaw*(e.side>0,1),i.pitchG.rotation.x=-i.pitch,i.pitchG.position.z=-i.recoil*.4}if(this.water>.01&&!this.dead){let e=this.waterLocalY(),i=Zt(Math.round((e-vn)/j),ot.hold+1,ot.deck);this.waterMesh.geometry=Ad(i),this.waterMesh.position.y=e+Math.sin(t*1.3)*.03,this.waterMesh.visible=!0}else this.waterMesh.visible=!1}countLeaks(){let t=this.grid,e=(this.sinkDepth()+.15-vn)/j,i=0,n=[];for(let r of this.shell){if(t.d[r])continue;let o=Math.floor(r/(t.sx*t.sz));o<e?(i++,n.length<200&&n.push(r)):o<ot.deck-2&&(i+=.3,n.length<200&&Math.random()<.3&&n.push(r))}this.leaks=i,this.holes=n}toWorld(t,e=new v){return e.copy(t).applyMatrix4(this.root.matrixWorld)}toLocal(t,e=new v){return this._inv=this._inv||new Xt,this._inv.copy(this.root.matrixWorld).invert(),e.copy(t).applyMatrix4(this._inv)}insideHull(t,e=0){let i=t.x/j+en/2,n=(t.y-vn)/j;if(n<-1||n>34)return!1;let r=$e(i,Zt(n,0,30));return r>0&&Math.abs(t.z)<r*j+e}damageAt(t,e,i,n){e*=this.hullMul;let[r,o,a]=this.grid.toVox(t),l=this.grid.blast(r,o,a,e,i),h=new v,c=0,u=null;for(let d of l)if(d.m===P.powder&&!u&&(u=d),qe[d.m].burn>.5&&Math.random()<.04*i&&this.ignite(d.x,d.y,d.z,!0),c++<26){this.grid.toLocal(d.x,d.y,d.z,h);let f=this.toWorld(h),g=f.clone().sub(this.toWorld(t)).normalize();n.debris.spawn(f,d.m,{x:g.x*6+(Math.random()-.5)*5,y:3+Math.random()*6,z:g.z*6+(Math.random()-.5)*5})}if(u){this.grid.toLocal(u.x,u.y,u.z,h);let d=h.clone();n.later(()=>n.explosion(this.toWorld(d),2.6,this),.12)}return l.length}ignite(t,e,i,n){let r=this.grid,o=r.get(t,e,i);if(!o||qe[o].burn<=0)return;let a=r.idx(t,e,i);this.fires.has(a)||this.fires.set(a,6+Math.random()*6),n||(this.fireT=0)}updateFire(){let t=this.grid,e=[];for(let[i,n]of this.fires){let r=i%t.sx,o=Math.floor(i/t.sx)%t.sz,a=Math.floor(i/(t.sx*t.sz)),l=t.d[i];if(!l){this.fires.delete(i);continue}let h=vn+a*j;if(this.water>.05&&h<this.waterLocalY()){this.fires.delete(i);continue}let c=n-.25*qe[l].burn;if(c<=0){this.fires.delete(i),t.set(r,a,o,Math.random()<.3?P.char:0),l===P.powder&&e.push(["boom",r,a,o]);continue}if(this.fires.set(i,c),this.fires.size+e.length<260)for(let[u,d,f]of[[1,0,0],[-1,0,0],[0,1,0],[0,-1,0],[0,0,1],[0,0,-1]]){let g=t.get(r+u,a+d,o+f);g&&qe[g].burn>0&&Math.random()<.018*qe[g].burn*(d>0?2.2:1)&&e.push([r+u,a+d,o+f])}}for(let i of e)if(i[0]==="boom"){let n=this.grid.toLocal(i[1],i[2],i[3]);this.game.explosion(this.toWorld(n),2.4,this)}else this.ignite(i[0],i[1],i[2],!0)}extinguish(t,e){let[i,n,r]=this.grid.toVox(t),o=e/j,a=0;for(let l of[...this.fires.keys()]){let h=this.grid,c=l%h.sx,u=Math.floor(l/h.sx)%h.sz,d=Math.floor(l/(h.sx*h.sz));Math.hypot(c-i,d-n,u-r)<o&&(this.fires.delete(l),a++)}return a}repairAt(t,e){let i=this.grid,[n,r,o]=i.toVox(t),a=Math.ceil(e/j),l=0;for(let h=-a;h<=a;h++)for(let c=-a;c<=a;c++)for(let u=-a;u<=a;u++){let d=Math.round(n+u),f=Math.round(r+h),g=Math.round(o+c);if(!i.in(d,f,g)||Math.hypot(u,h,c)>a)continue;let x=i.idx(d,f,g);!i.d[x]&&i.orig[x]?(i.set(d,f,g,i.orig[x]===P.powder?0:i.orig[x]),l++):i.d[x]===P.char&&(i.set(d,f,g,i.orig[x]||P.plank),l++)}return l}findHole(t,e){let i=this.grid,[n,r,o]=i.toVox(t),a=Math.ceil(e/j),l=null,h=1e9;for(let c=-a;c<=a;c+=1)for(let u=-a;u<=a;u+=1)for(let d=-a;d<=a;d+=1){let f=Math.round(n+d),g=Math.round(r+c),x=Math.round(o+u);if(!i.in(f,g,x))continue;let m=i.idx(f,g,x);if(!i.d[m]&&i.orig[m]&&i.orig[m]!==P.powder||i.d[m]===P.char){let p=d*d+c*c+u*u;p<h&&(h=p,l=i.toLocal(f,g,x))}}return l}groundCheck(t){let e=this.game.world,i=this.fwd,n=-i.z,r=i.x,o=[[12,0],[9,2.4],[9,-2.4],[0,3.4],[0,-3.4],[-12,2.6],[-12,-2.6],[-14,0]];for(let[a,l]of o){let h=this.x+i.x*a+n*l,c=this.z+i.z*a+r*l;if(e.height(h,c)>-1.6-this.sinkDepth()*.3){let d=Math.abs(this.speed),f=this.x-h,g=this.z-c,x=Math.hypot(f,g)||1;if(this.x+=f/x*(.25+d*t*2),this.z+=g/x*(.25+d*t*2),a>0&&this.speed>0?this.speed*=-.25:a<0&&this.speed<0?this.speed*=-.25:this.speed*=.6,d>2.2&&(!this.lastHit||this.game.time-this.lastHit>.8)){this.lastHit=this.game.time;let m=new v(a*.95,.3+Math.random()*.5,l*.9);this.damageAt(m,1.6+d*.25,1.4,this.game),this.game.onShipCrash(this,d)}break}}}dispose(t){t.remove(this.root),this.grid.dispose()}};var be=null,Wn=null,ia=null,ea=null,Sr=null,Us=!1,hi={};function Cd(){if(Sr)return Sr;Sr=be.createBuffer(1,be.sampleRate*2,be.sampleRate);let s=Sr.getChannelData(0);for(let t=0;t<s.length;t++)s[t]=Math.random()*2-1;return Sr}function Pd(s,t,e,i,n){s.gain.setValueAtTime(1e-4,t),s.gain.exponentialRampToValueAtTime(i,t+e),s.gain.exponentialRampToValueAtTime(1e-4,t+e+n)}function re(s,t,e,i,n,r,o=.005,a=ia){let l=be.createBufferSource();l.buffer=Cd(),l.loop=!0;let h=be.createBiquadFilter();h.type=e,h.frequency.value=i,h.Q.value=n;let c=be.createGain();return Pd(c,s,o,r,t),l.connect(h).connect(c).connect(a),l.start(s,Math.random()),l.stop(s+o+t+.05),{f:h,g:c}}function Ne(s,t,e,i,n,r,o=.005,a=ia){let l=be.createOscillator();l.type=e,l.frequency.setValueAtTime(i,s),n&&l.frequency.exponentialRampToValueAtTime(n,s+t);let h=be.createGain();Pd(h,s,o,r,t),l.connect(h).connect(a),l.start(s),l.stop(s+o+t+.05)}var _t={init(){if(be){be.state==="suspended"&&be.resume();return}try{be=new(window.AudioContext||window.webkitAudioContext)}catch{return}Wn=be.createGain(),Wn.gain.value=.8,Wn.connect(be.destination),ia=be.createGain(),ia.connect(Wn),ea=be.createGain(),ea.gain.value=.9,ea.connect(Wn);let s=(t,e,i,n)=>{let r=be.createBufferSource();r.buffer=Cd(),r.loop=!0;let o=be.createBiquadFilter();o.type=t,o.frequency.value=e,o.Q.value=i;let a=be.createGain();return a.gain.value=n,r.connect(o).connect(a).connect(ea),r.start(),{f:o,g:a}};hi.sea=s("lowpass",420,.6,.18),hi.wash=s("bandpass",900,.7,.05),hi.wind=s("bandpass",700,2.5,.02),hi.under=s("lowpass",160,.8,0),hi.fire=s("highpass",2500,.5,0),hi.rain=s("highpass",1800,.4,0),ci.init()},get ctx(){return be},toggleMute(){return Us=!Us,Wn&&(Wn.gain.value=Us?0:.8),ci.setMuted(Us),Us},ambience(s){if(!be)return;let t=be.currentTime,e=.5+.5*Math.sin(t*.45)*Math.sin(t*.17+1);hi.sea.g.gain.setTargetAtTime(s.under?.02:.1+e*.12,t,.3),hi.sea.f.frequency.setTargetAtTime(s.under?200:300+e*300,t,.3),hi.wash.g.gain.setTargetAtTime(s.under?0:.015+s.speed*.008+e*.02,t,.3),hi.wind.g.gain.setTargetAtTime(s.under?0:.008+s.wind*.03+(s.high?.03:0),t,.5),hi.wind.f.frequency.setTargetAtTime(500+s.wind*500+Math.sin(t*.7)*150,t,.5),hi.under.g.gain.setTargetAtTime(s.under?.25:0,t,.2),hi.fire.g.gain.setTargetAtTime(Math.min(.06,s.fire*.002),t,.3),hi.rain.g.gain.setTargetAtTime(s.under?0:(s.rain||0)*.07,t,.8)},play(s,t=1,e=0){if(!be||Us)return;let i=t/(1+e*e*.0012);if(i<.01)return;let n=be.currentTime,r=Ay[s];r&&r(n,i)}},Ay={cannon(s,t){Ne(s,.6,"sine",90,30,.9*t,.003),re(s,.9,"lowpass",900,.7,.8*t,.002),re(s+.02,.25,"bandpass",2400,.8,.25*t)},boom(s,t){Ne(s,1,"sine",70,25,1*t,.003),re(s,1.4,"lowpass",600,.6,1*t,.002),re(s,.5,"bandpass",1500,.6,.4*t)},hit(s,t){re(s,.35,"bandpass",700,1.2,.7*t);for(let e=0;e<4;e++)re(s+.03+e*.04*Math.random(),.08,"bandpass",1800+Math.random()*1500,4,.3*t);Ne(s,.2,"triangle",160,70,.4*t)},splash(s,t){re(s,.7,"bandpass",1300,.6,.45*t,.01),re(s+.05,.5,"lowpass",500,.6,.3*t,.02)},smallSplash(s,t){re(s,.25,"bandpass",1800,.8,.2*t,.005)},creak(s,t){let e=140+Math.random()*120;Ne(s,.5+Math.random()*.5,"sawtooth",e,e*(.8+Math.random()*.4),.025*t,.15)},bell(s,t){for(let[e,i]of[[880,.2],[1320,.08],[2200,.05]])Ne(s,1.8,"sine",e,0,i*t,.002)},step(s,t){re(s,.06,"bandpass",500+Math.random()*200,2,.12*t,.003)},stepSand(s,t){re(s,.09,"highpass",2500,.5,.06*t,.005)},swim(s,t){re(s,.3,"bandpass",900,.8,.08*t,.05)},swing(s,t){re(s,.18,"bandpass",2400,1.5,.18*t,.03)},slash(s,t){re(s,.1,"bandpass",1500,2,.3*t),Ne(s,.12,"square",300,100,.05*t)},clang(s,t){for(let e of[1200,1830,2700])Ne(s,.4,"triangle",e,e*.98,.07*t,.001)},bones(s,t){for(let e=0;e<6;e++){let i=s+e*.035+Math.random()*.02;re(i,.03,"bandpass",2500+Math.random()*2e3,6,.18*t,.001)}},pistol(s,t){re(s,.25,"lowpass",2500,.7,.7*t,.001),Ne(s,.15,"sine",200,60,.4*t)},click(s,t){Ne(s,.04,"square",1200,800,.06*t,.001)},dig(s,t){re(s,.15,"lowpass",700,1,.35*t,.005),re(s+.03,.1,"highpass",3e3,.5,.06*t)},hammer(s,t){Ne(s,.08,"triangle",500,300,.2*t,.001),re(s,.06,"bandpass",1800,2,.15*t)},scoop(s,t){re(s,.35,"bandpass",700,1,.2*t,.04)},pour(s,t){re(s,.7,"bandpass",1500,.7,.18*t,.05)},coins(s,t){for(let e=0;e<8;e++)Ne(s+e*.05+Math.random()*.03,.25,"triangle",2400+Math.random()*1600,0,.05*t,.001)},chest(s,t){Ne(s,.3,"square",180,90,.06*t),re(s,.2,"lowpass",600,1,.2*t)},hurt(s,t){Ne(s,.25,"sawtooth",220,110,.12*t,.005),re(s,.15,"lowpass",900,1,.2*t)},chain(s,t){for(let e=0;e<14;e++)for(let i of[1800,2600])Ne(s+e*.07,.06,"triangle",i+Math.random()*300,0,.03*t,.001);re(s+1,.6,"bandpass",900,.6,.3*t)},ratchet(s,t){Ne(s,.05,"square",600,400,.05*t,.001),re(s,.04,"bandpass",3e3,3,.06*t)},rope(s,t){re(s,.4,"bandpass",1100,3,.08*t,.02)},eat(s,t){for(let e=0;e<3;e++)re(s+e*.12,.07,"bandpass",1200,2,.1*t)},ghost(s,t){for(let e of[110,116,165])Ne(s,3,"sine",e,e*.94,.08*t,.8);re(s,3,"bandpass",600,8,.08*t,.8)},horn(s,t){for(let e of[98,147])Ne(s,2.2,"sawtooth",e,e*.98,.05*t,.3)},thunder(s,t){let e=.3+Math.random()*1.2;Ne(s+e,2.5,"sine",55,28,.9*t,.05),re(s+e,3.2,"lowpass",260,.7,1*t,.04),re(s+e,.6,"bandpass",1200,.5,.35*t,.005)},ui(s,t){Ne(s,.06,"triangle",900,1200,.06*t,.002)},sting(s,t){[523,659,784,1046].forEach((e,i)=>Ne(s+i*.09,.5,"triangle",e,0,.08*t,.005))}},Ry=["title","day","calm","night","cursed","battle","island","outpost","ghost","shanty"],Rd=["treasure","death"],ci={els:{},cur:null,want:null,vol:.55,muted:!1,init(){for(let s of[...Ry,...Rd])this.probe(s,["mp3","ogg"])},probe(s,t){if(!t.length)return;let e=new window.Audio;e.preload="auto",e.loop=!Rd.includes(s),e.volume=0,e.addEventListener("canplaythrough",()=>{this.els[s]||(this.els[s]=e),this.pick()},{once:!0}),e.addEventListener("error",()=>this.probe(s,t.slice(1)),{once:!0}),e.src="music/"+s+"."+t[0]},setMuted(s){this.muted=s},set(s){this.want!==s&&(this.want=s,this.pick())},pick(){let s=this.want;if(!s)return;let t={title:["title"],day:["day"],calm:["calm","day"],night:["night"],cursed:["cursed","night"],battle:["battle"],island:["island","day"],ghost:["ghost","battle","cursed"],outpost:this.preferShanty?["shanty","outpost","day"]:["outpost","shanty","day"]};s==="outpost"&&this.cur!=="outpost"&&this.cur!=="shanty"&&(this.preferShanty=Math.random()<.5);let e=(t[s]||[s]).find(i=>this.els[i])||null;this.switchTo(e)},switchTo(s){if(this.cur===s)return;let t=this.els[this.cur];this.cur=s,t&&this.fade(t,0,!0);let e=this.els[s];if(e){try{e.currentTime=0}catch{}let i=e.play();i&&i.catch&&i.catch(()=>{}),this.fade(e,this.vol,!1)}},fade(s,t,e){clearInterval(s._f),s._f=setInterval(()=>{let i=this.muted?0:t;s.volume=Math.max(0,Math.min(1,s.volume+Math.sign(i-s.volume)*.03)),Math.abs(s.volume-i)<.035&&(s.volume=i,clearInterval(s._f),e&&s.pause())},60)},sting(s){let t=this.els[s];if(!t||this.muted)return;try{t.currentTime=0}catch{}t.volume=this.vol;let e=t.play();e&&e.catch&&e.catch(()=>{})},tick(){this.cur&&this.els[this.cur]&&(this.els[this.cur].volume=this.muted?0:this.els[this.cur].volume)}};var Xh=new v,_n=class{constructor(t,e=0,i=.42){let n=rd(t,e);for(let a in n)n[a].buildAll();this.root=new se;let r=new se;r.scale.setScalar(i),this.root.add(r),this.body=new se,r.add(this.body);let o=6*j;if(n.body.group.position.set(0,o,0),this.body.add(n.body.group),this.head=n.head.group,this.head.position.set(0,o+6*j,0),this.body.add(this.head),this.legL=new se,this.legL.position.set(0,o,-j),this.legL.add(n.legL.group),this.body.add(this.legL),this.legR=new se,this.legR.position.set(0,o,j),this.legR.add(n.legR.group),this.body.add(this.legR),this.armL=new se,this.armL.position.set(0,o+6*j,-2.5*j),this.armL.add(n.armL.group),this.body.add(this.armL),this.armR=new se,this.armR.position.set(0,o+6*j,2.5*j),this.armR.add(n.armR.group),this.body.add(this.armR),t!=="merchant"){let a=new Nt(new Te(.08/i*.42,.08/i*.42,.9/i*.42),new Ae({color:t==="cursed"||t==="captain"?"#5ac8a0":"#9a9088"}));a.position.set(.1,-.7,.35),this.armR.add(a)}this.root.traverse(a=>{a.isMesh&&(a.castShadow=!0)}),this.phase=Math.random()*6}animate(t,e,i){this.phase+=t*e*3.2;let n=Math.sin(this.phase)*Math.min(1,e/2.5)*.7;this.legL.rotation.z=n,this.legR.rotation.z=-n,this.armL.rotation.z=-n*.8,this.armR.rotation.z=i>0?-2.2*Math.sin(i*Math.PI)-.4:n*.8,this.head.rotation.y=Math.sin(this.phase*.3)*.1}},Ns=class{constructor(t,e,i,n="skeleton",r={}){this.game=t,this.kind=n,this.cursed=n!=="skeleton",this.id=r.id??t.newId(),this.remote=!!r.remote;let o=n==="captain";this.fig=new _n(n,0,o?.66:.42),this.ship=r.ship||null,this.pos=new v(e,r.y??(this.ship?0:t.world.height(e,i)),i),this.home=this.pos.clone(),this.yaw=Math.random()*6,this.vy=0,this.max=o?700*(1+.35*(t.players.length-1)):this.cursed?110:65,this.hp=this.max,this.atk=0,this.cool=0,this.state="idle",this.wander=0,this.hitT=0,this.speed=o?3:this.cursed?3.4:2.8,this.rise=r.rise??1.2,this.reach=o?3.2:2.1,this.special=6,t.scene.add(this.fig.root)}get alive(){return this.hp>0}worldPos(t=new v){return t.copy(this.pos),this.ship&&this.ship.toWorld(t,t),t}groundAt(t,e,i){if(!this.ship)return this.game.world.height(t,i);let n=this.ship.grid;for(let r=e+.6;r>e-3;r-=j)if(n.solidAt(t,r,i))return Math.floor((r+2.5)/j)*j-2.5+j;return-99}update(t){let e=this.game,i=this.pos;if(this.hitT=Math.max(0,this.hitT-t),this.remote){this.updatePuppet(t);return}if(this.ship&&(this.ship.dead||this.ship.sinking>1)){this.hp=0,this.die(!0);return}this.cool-=t,this.special-=t,this.rise>0&&(this.rise-=t,Math.random()<t*20&&e.fx.burst(this.worldPos(Xh),1,"dust"));let n=this.worldPos(new v),r=e.closestPlayer(n,this.kind==="captain"?60:40),o=0,a=0,l=0;if(r){let g=r.worldPos(new v),x=this.ship?this.ship.toLocal(g.clone()):g,m=x.x-i.x,p=x.z-i.z,w=Math.hypot(m,p),_=this.ship?r.ship===this.ship:e.world.height(g.x,g.z)>-.5&&!r.swim&&!r.ship;w<30&&(_||w<6)?(this.state="chase",this.yaw=Math.atan2(m,p),w>this.reach*.7&&(o=m/w,a=p/w,l=this.speed),w<this.reach&&this.cool<=0&&Math.abs(x.y-i.y)<2&&(this.cool=this.kind==="captain"?1.1:1.25,this.atk=.01,this.struck=!1,_t.play("swing",.8,e.distToCam(n))),this.kind==="captain"&&this.captainSpecial(r,g,w)):this.state="idle"}else this.state="idle";if(this.atk>0&&(this.atk+=t*2.6,this.atk>.5&&!this.struck&&(this.struck=!0,r&&r.worldPos(new v).distanceTo(n)<this.reach+.6&&r.hurt(this.kind==="captain"?26:this.cursed?18:12,"skeleton")),this.atk>=1&&(this.atk=0)),this.state==="idle"&&(this.wander-=t,this.wander<0&&(this.wander=2+Math.random()*4,this.wdir=Math.random()<.5?null:Math.random()*Math.PI*2),this.wdir!=null&&(o=Math.sin(this.wdir),a=Math.cos(this.wdir),l=1.1,this.yaw=this.wdir),!this.ship&&i.distanceTo(this.home)>22)){let g=this.home.x-i.x,x=this.home.z-i.z,m=Math.hypot(g,x);o=g/m,a=x/m,l=1.4,this.yaw=Math.atan2(g,x)}this.rise>0&&(l=0);let h=i.x+o*l*t,c=i.z+a*l*t,u=this.groundAt(h,i.y,c),d=this.ship?this.ship.grid.solidAt(h,i.y+.9,c):e.propBlocks(h,i.y,c);!this.ship&&u>-.6&&u-i.y<.8&&!d&&(i.x=h,i.z=c),this.ship&&u>-50&&u-i.y<.6&&!d&&(i.x=h,i.z=c);let f=this.groundAt(i.x,i.y,i.z);if(this.vy-=20*t,i.y+=this.vy*t,i.y<f&&(i.y=f,this.vy=0),this.ship&&(i.y<-3||Math.abs(i.z)>5.5)){this.die(!0),this.hp=0;return}if(!this.ship&&i.y<Me(i.x,i.z,e.time)-1.5){this.die(!0),this.hp=0;return}this.place(t,l),this.cursed&&Math.random()<t*3&&e.fx.burst(this.worldPos(Xh).add(new v(0,this.kind==="captain"?2.4:1.6,0)),1,"ghost"),Math.random()<t*.15&&_t.play("bones",.5,e.distToCam(n))}captainSpecial(t,e,i){let n=this.game;if(this.special>0)return;this.special=5+Math.random()*3;let r=this.worldPos(new v).add(new v(0,2.2,0));if(Math.random()<.55&&i>4){let a=e.clone().add(new v(0,1,0)).sub(r),l=a.length();a.normalize(),n.spawnBall(r,a.multiplyScalar(22).add(new v(0,l*.22,0)),null,{ghost:!0,small:!0}),_t.play("ghost",.5,n.distToCam(r))}else if(n.skeletons.length<14){for(let a=0;a<3;a++){let l=Math.random()*6.28;n.addSkeleton(this.pos.x+Math.cos(l)*4,this.pos.z+Math.sin(l)*4,"cursed",{ship:this.ship})}n.sayAll("captainSummons",[],"ghost"),_t.play("ghost",1,n.distToCam(r))}}place(t,e){let i=this.worldPos(Xh);this.fig.root.position.set(i.x,i.y-Math.max(0,this.rise)*1.4,i.z),this.fig.root.rotation.set(0,this.yaw-Math.PI/2+(this.ship?this.ship.yaw:0),0),this.fig.animate(t,e,this.atk),this.hitT>0&&(this.fig.root.position.x+=(Math.random()-.5)*.1),this.moving=e}updatePuppet(t){this.net&&(this.pos.lerp(this.net.p,Math.min(1,t*10)),this.yaw=this.net.y,this.atk=this.net.a,this.rise=this.net.r),this.place(t,this.net?this.net.sp:0)}damage(t,e){let i=this.game;if(this.remote){i.act(i.localPlayers[0],{a:"dmg",k:"skel",id:this.id,n:t}),this.hitT=.2,i.fx.burst(this.worldPos(new v).add(new v(0,1,0)),8,"bones");return}this.hp-=t,this.hitT=.2;let n=this.worldPos(new v);if(i.fxEvent("bones",n.x,n.y+1,n.z,8),_t.play("bones",1,i.distToCam(n)),e&&!this.ship&&this.kind!=="captain"){let r=new v().subVectors(this.pos,e).setY(0).normalize();this.pos.x+=r.x*.5,this.pos.z+=r.z*.5}this.hp<=0&&this.die()}die(t){let e=this.game,i=this.worldPos(new v);t?e.fxEvent("splash",i.x,i.y,i.z,10):(e.fxEvent("bones",i.x,i.y+.8,i.z,this.kind==="captain"?80:30),this.kind==="captain"?e.onCaptainDefeated(this,i):Math.random()<(this.cursed?.8:.5)&&e.spawnCoins(i,this.cursed?60:25)),e.scene.remove(this.fig.root)}remove(){this.game.scene.remove(this.fig.root)}netState(){return[this.id,this.kind==="captain"?2:this.cursed?1:0,this.ship?this.ship.netId:-1,+this.pos.x.toFixed(2),+this.pos.y.toFixed(2),+this.pos.z.toFixed(2),+this.yaw.toFixed(2),+this.atk.toFixed(2),+Math.max(0,this.rise).toFixed(2),+(this.moving||0).toFixed(1),Math.round(this.hp),Math.round(this.max)]}},Fs=class{constructor(t,e,i={}){this.game=t,this.target=e,this.id=i.id??t.newId(),this.remote=!!i.remote;let n=od();if(n.buildAll(),this.mesh=n.group,t.scene.add(this.mesh),e){let r=e.worldPos(),o=Math.random()*Math.PI*2;this.pos=new v(r.x+Math.cos(o)*28,-1.2,r.z+Math.sin(o)*28),this.yaw=o+Math.PI}else this.pos=new v,this.yaw=0;this.hp=70,this.cool=2,this.circle=6+Math.random()*4,this.t=0,this.life=40}get alive(){return this.hp>0&&this.life>0}update(t){let e=this.game;if(this.t+=t,this.remote)this.net&&(this.pos.lerp(this.net.p,Math.min(1,t*8)),this.yaw=this.net.y);else{this.cool-=t,this.life-=t;let n=this.target;(!n||n.dead>0||!n.swim)&&(this.life=Math.min(this.life,6));let r=n?n.worldPos():this.pos,o=r.x-this.pos.x,a=r.z-this.pos.z,l=Math.hypot(o,a),h;this.cool>0||this.life<6?h=Math.atan2(a,o)+(this.life<6?Math.PI:Math.PI/2*(l<this.circle?1.3:.8)):(h=Math.atan2(a,o),l<1.6&&(this.cool=3+Math.random()*2,n.hurt(22,"shark"),e.fxEvent("blood",r.x,r.y,r.z,10),_t.play("splash",1,e.distToCam(r)))),this.yaw+=Zt(Ze(h-this.yaw),-2.2*t,2.2*t);let c=this.cool>0?4.5:7.5;this.pos.x+=Math.cos(this.yaw)*c*t,this.pos.z+=Math.sin(this.yaw)*c*t,e.world.height(this.pos.x,this.pos.z)>-1.5&&(this.yaw+=Math.PI*t),this.pos.y=le(this.pos.y,Me(this.pos.x,this.pos.z,e.time)-.55,t*3)}let i=Me(this.pos.x,this.pos.z,e.time);this.mesh.position.copy(this.pos),this.mesh.rotation.set(0,-this.yaw,Math.sin(this.t*6)*.05),Math.random()<t*4&&e.fx.burst(new v(this.pos.x,i,this.pos.z),1,"wake")}damage(t){let e=this.game;if(this.remote){e.act(e.localPlayers[0],{a:"dmg",k:"shark",id:this.id,n:t}),e.fx.burst(this.pos,8,"blood");return}this.hp-=t,this.cool=4,e.fxEvent("blood",this.pos.x,this.pos.y,this.pos.z,8),this.hp<=0&&this.remove()}remove(){this.game.scene.remove(this.mesh),this.hp=0}netState(){return[this.id,+this.pos.x.toFixed(2),+this.pos.y.toFixed(2),+this.pos.z.toFixed(2),+this.yaw.toFixed(2)]}},Os=class{constructor(t,e,i={}){this.game=t,this.ship=e,this.id=i.id??t.newId(),this.remote=!!i.remote,this.n=16,this.max=1300*(1+.35*(t.players.length-1)),this.hp=this.max,this.group=new se,t.scene.add(this.group);let n=(o,a)=>{let l=Math.ceil(o*2/j),h=new Ye(l+(a?4:0),l,l,[-(l+(a?4:0))/2*j,-l/2*j,-l/2*j]),c=(l-1)/2;for(let u=0;u<l;u++)for(let d=0;d<l;d++)for(let f=0;f<l+(a?4:0);f++){let g=a?Math.min(f,l-1):f;if(Math.hypot(g-c,u-c,d-c)/(l/2)>1)continue;let m=u<c-1?P.bone:(f+u+d)%3===0?P.ghostwoodD:P.green;!a&&u>l-3&&d===Math.round(c)&&f%2===0&&(m=P.ghosttrim),h.set(f,u,d,m)}if(a){for(let u=l;u<l+4;u++)for(let d=1;d<l-2;d++)for(let f=2;f<l-2;f++)h.set(u,d,f,d<l/2-1?P.bone:P.green);h.set(l+1,l-3,2,P.ghostglass),h.set(l+1,l-3,l-3,P.ghostglass);for(let u of[1,l-2])for(let d=0;d<4;d++)h.set(l-3-d,l-1+Math.floor(d/2),u,P.bone);for(let u=l;u<l+4;u+=2)h.set(u,Math.floor(l/2)-1,2,P.shell),h.set(u,Math.floor(l/2)-1,l-3,P.shell)}return h.buildAll(),h.group};this.segs=[];for(let o=0;o<this.n;o++){let a=o===0?1.5:1.35-o*.055,l=n(Math.max(.5,a),o===0);this.group.add(l),this.segs.push({mesh:l,p:new v})}this.state="circle",this.t=0,this.attacks=0,this.ang=Math.random()*6.28,this.depth=-8;let r=e?new v(e.x,0,e.z):new v;this.head=new v(r.x+Math.cos(this.ang)*40,-8,r.z+Math.sin(this.ang)*40),this.trail=[];for(let o=0;o<200;o++)this.trail.push(this.head.clone());this.dir=0}get alive(){return this.hp>0&&!this.gone}update(t){let e=this.game,i=this.ship;if(this.t+=t,this.remote)this.net&&this.head.lerp(this.net.h,Math.min(1,t*8));else{(!i||i.dead)&&(this.state="leave");let r=i?new v(i.x,0,i.z):this.head.clone(),o;if(this.state==="circle")this.ang+=t*.35,o=new v(r.x+Math.cos(this.ang)*26,Math.sin(this.t*1.3)*2.5-.5,r.z+Math.sin(this.ang)*26),this.t>9&&(this.state="charge",this.t=0,e.sayAll("serpentAttack",[],"bad"));else if(this.state==="charge"){let h=Math.sin(this.ang)>0?1:-1,c=i.fwd,u=new v(i.x-c.z*h*4,0,i.z+c.x*h*4);if(o=this.t<1.8?new v(u.x-c.z*h*14,-6,u.z+c.x*h*14):new v(u.x,3.5-(this.t-1.8)*6,u.z),this.t>1.8&&!this.slammed&&this.head.distanceTo(u)<4){this.slammed=!0;let d=i.toLocal(this.head.clone());d.y=-.6,d.z=Math.sign(d.z)*3.1,i.damageAt(d,2.4,1.4,e);for(let f of e.players)f.ship===i&&f.dead<=0&&f.hurt(15,"serpent");e.shake=Math.max(e.shake,1.5),_t.play("boom",1,e.distToCam(this.head)),e.fxEvent("splash",this.head.x,0,this.head.z,40)}this.t>3.2&&(this.state="circle",this.t=0,this.slammed=!1,this.attacks++,this.attacks>=3+Math.floor(Math.random()*2)&&(this.state="leave"))}else o=this.head.clone().add(new v(Math.cos(this.ang)*30,-12,Math.sin(this.ang)*30)),this.head.y<-10&&(this.gone=!0,e.sayAll("serpentGone",[],""));this.hp<this.max*.3&&this.state!=="leave"&&Math.random()<t*.1&&(this.state="leave");let a=o.sub(this.head),l=this.state==="charge"?24:13;a.length()>.1&&this.head.addScaledVector(a.normalize(),Math.min(a.length(),l*t)*(a.length()>0?1:0))}this.trail[0].distanceTo(this.head)>.4&&(this.trail.unshift(this.head.clone()),this.trail.length=200);for(let r=0;r<this.n;r++){let o=this.trail[Math.min(this.trail.length-1,r*5)],a=this.trail[Math.min(this.trail.length-1,r*5+2)],l=this.segs[r];l.p.copy(o),l.mesh.position.copy(o),l.mesh.rotation.set(0,Math.atan2(-(o.z-a.z),o.x-a.x),Math.atan2(o.y-a.y,Math.hypot(o.x-a.x,o.z-a.z)));let h=Me(o.x,o.z,e.time);Math.abs(o.y-h)<1.4&&Math.random()<t*6&&e.fx.burst(new v(o.x,h,o.z),2,"splash")}}hitTest(t,e){for(let i of this.segs)if(i.p.distanceTo(t)<1.6+e)return!0;return!1}damage(t){let e=this.game;if(this.remote){e.act(e.localPlayers[0],{a:"dmg",k:"serp",id:this.id,n:t});return}this.hp-=t,e.fxEvent("blood",this.head.x,this.head.y,this.head.z,10),this.hp<=0&&(this.hp=0,this.gone=!0,e.onSerpentSlain(this))}remove(){this.game.scene.remove(this.group)}netState(){return[this.id,this.ship?this.ship.netId:-1,+this.head.x.toFixed(2),+this.head.y.toFixed(2),+this.head.z.toFixed(2),Math.round(this.hp),Math.round(this.max)]}},na=class{constructor(t,e,i){this.game=t,this.ship=e,this.ghost=i,this.t=0,this.side=Math.random()<.5?1:-1,this.cool=3,this.board=15,e.sail.h=1,e.ai=this,this.shots=0,this.crew=[];for(let n=0;n<4;n++){let r=new _n(i?"cursed":n%2?"pirate":"skeleton",3);r.root.position.set(-6+n*4.5,-2.5+19*j,n%2?1.5:-1.5),n===0&&r.root.position.set(-11.5,-2.5+26*j,0),e.root.add(r.root),this.crew.push(r)}}update(t){let e=this.game,i=this.ship;this.t+=t,this.cool-=t,this.board-=t;for(let u of this.crew)u.animate(t,.4,0);if(i.sinking){i.sail.h=0,i.rudder=.4;return}let n=e.playerShip&&!e.playerShip.dead?e.playerShip:null;if(!n){i.rudder=.2;return}let r=n.x-i.x,o=n.z-i.z,a=Math.hypot(r,o),l=Math.atan2(-o,r),h;a>110?h=l:(h=l+this.side*Math.PI/2*(a<40?1.2:.85),Math.random()<t*.02&&(this.side*=-1));let c=i.fwd;for(let u of[30,55])if(e.world.height(i.x+c.x*u,i.z+c.z*u)>-3){h=i.yaw+1.3;break}if(i.rudder=Zt(Ze(h-i.yaw)*1.6,-1,1),i.sail.h=a<60?.6:1,i.sail.angle=Zt(Math.sin(Ze(e.wind.dir-i.yaw))*.8,-1,1),a<26&&this.board<=0&&e.skeletons.filter(u=>u.ship===n).length<4){this.board=18+Math.random()*10;let u=2+Math.floor(Math.random()*2);for(let d=0;d<u;d++)e.addSkeleton((Math.random()-.5)*16,(Math.random()-.5)*3,this.ghost?"cursed":"skeleton",{ship:n,y:-2.5+19*j+.1,rise:0,leap:!0});e.sayAll("boarders",[],"bad")}if(a<170&&this.cool<=0){let u=Ze(l-i.yaw),d=u<0?1:-1;Math.abs(Math.abs(u)-Math.PI/2)<.6&&(this.cool=(this.ghost?3.2:4.2)+Math.random()*2,i.cannons.filter(g=>g.side===d).forEach((g,x)=>e.later(()=>{if(i.sinking||i.dead)return;let m=62,p=9.8,w=g.cannon;w.base.updateMatrixWorld(!0);let _=new v().setFromMatrixPosition(w.base.matrixWorld),y=n.x,R=n.z;for(let Y=0;Y<2;Y++){let O=Math.hypot(y-_.x,R-_.z)/m;y=n.x+n.fwd.x*n.speed*O,R=n.z+n.fwd.z*n.speed*O}let A=y-_.x,C=R-_.z,L=Math.hypot(A,C),E=n.y+.6+(Math.random()-.5)*1.2-_.y,b=m**4-p*(p*L*L+2*E*m*m);if(b<0)return;let I=Math.atan((m*m-Math.sqrt(b))/(p*L)),H=new v(A/L*Math.cos(I),Math.sin(I),C/L*Math.cos(I)),F=new si;w.base.getWorldQuaternion(F),H.applyQuaternion(F.invert());let W=(this.ghost?.03:.05)*e.diff.aimErr;w.yaw=Zt(Math.atan2(H.x,H.z)+(Math.random()-.5)*W,-.65,.65),w.pitch=Zt(Math.asin(Zt(H.y,-1,1))+(Math.random()-.5)*W*.6,-.14,.4),i.updateTransform(e.time),e.fireCannon(i,g),this.shots++},(x*280+Math.random()*200)/1e3)))}}};var Cy=1.55,sa=.24,Id=1.7,bn=["sword","pistol","shovel","plank","bucket"],nn=new v,Mn=new v,qh=new si,Ld=new mi(0,0,0,"YXZ"),Dd=new v(0,1,0),Xn=class{constructor(t,e,i={}){if(this.game=t,this.id=e,this.local=!!i.input,this.input=i.input||null,this.slot=i.slot??0,this.ship=null,this.pos=new v,this.vel=new v,this.yaw=0,this.pitch=0,this.onGround=!1,this.swim=!1,this.under=!1,this.station=null,this.climb=null,this.hp=100,this.dead=0,this.hurtT=0,this.item=0,this.carry=null,this.planks=0,this.bucket=!1,this.pistol=5,this.pistolRes=15,this.reloadT=0,this.cool=0,this.swingT=0,this.useHold=0,this.stepD=0,this.color=i.color??e,this.avatar=new _n("pirate",this.color),this.avatar.root.traverse(n=>{n.layers.set(1+this.slot)}),t.scene.add(this.avatar.root),this.carryMesh=null,this.local){this.camera=new Xe(72,16/9,.08,1200),this.camera.layers.enableAll(),this.camera.layers.disable(1+this.slot);for(let n=0;n<4;n++)n!==this.slot&&this.camera.layers.disable(10+n);t.scene.add(this.camera),this.vm=new se,this.camera.add(this.vm),this.tools=bn.map(n=>{let r=ad(n);return r.buildAll(),r.group.scale.setScalar(.06),r.group.rotation.y=.18,r.group.visible=!1,this.vm.add(r.group),r.group}),this.vm.traverse(n=>n.layers.set(10+this.slot)),this.vm.position.set(.26,-.24,-.42)}this.net={t:0}}worldPos(t=new v){return t.copy(this.pos),this.ship&&this.ship.toWorld(t,t),t}eyeWorld(t=new v){return nn.copy(this.pos),nn.y+=this.swim?1.45:Cy,t.copy(nn),this.ship&&this.ship.toWorld(t,t),t}worldYaw(){return this.yaw+(this.ship?this.ship.yaw:0)}attach(t){let e=this.worldPos();t.toLocal(e,this.pos);let i=this.vel.clone(),n=t.velocity();i.sub(n),i.applyAxisAngle(Dd,-t.yaw),this.vel.copy(i),this.yaw=Ze(this.yaw-t.yaw),this.ship=t}detach(){let t=this.ship;if(!t)return;let e=this.worldPos();this.pos.copy(e);let i=this.vel.clone().applyAxisAngle(Dd,t.yaw).add(t.velocity());this.vel.copy(i),this.vel.y=Math.min(this.vel.y,2),this.yaw=Ze(this.yaw+t.yaw),this.ship=null}teleport(t,e,i=0){this.leaveStation(),this.ship=t,this.pos.copy(e),this.vel.set(0,0,0),this.yaw=i,this.climb=null}solidAt(t,e,i){let n=this.game;if(this.ship)return!!this.ship.grid.solidAt(t,e,i);if(e<n.world.height(t,i))return!0;for(let r of n.nearProps){let o=r.grid;if(!o)continue;let a=t-r.x,l=e-r.y,h=i-r.z;if(!(Math.abs(a)>r.rad||Math.abs(h)>r.rad||l<-.5||l>r.top)&&o.solidAt(a,l,h))return!0}for(let r of n.ships)if(!(r.dead||Math.abs(r.x-t)>18||Math.abs(r.z-i)>18)&&(Mn.set(t,e,i),r.toLocal(Mn,Mn),r.grid.solidAt(Mn.x,Mn.y,Mn.z)))return!0;return!1}collides(t){for(let e=.05;e<=Id;e+=.24)for(let i of[-sa,0,sa])for(let n of[-sa,0,sa])if(!(i&&n&&e>.3&&e<Id-.2)&&this.solidAt(t.x+i,t.y+e,t.z+n))return!0;return!1}move(t){let e=this.pos,i=this.vel;for(let r of["x","z"]){let o=i[r]*t;if(!o)continue;let a=e[r];if(e[r]+=o,this.collides(e)){let l=!1;if(this.onGround||this.swim)for(let h of[.26,.52]){if(e.y+=h,!this.collides(e)){l=!0;break}e.y-=h}l||(e[r]=a,i[r]=0)}}let n=e.y;if(e.y+=i.y*t,this.onGround=!1,this.collides(e)){if(i.y<=0){e.y=n;for(let r=0;r<6;r++)if(e.y-=.04,this.collides(e)){e.y+=.04;break}this.onGround=!0,i.y<-11&&this.hurt((-i.y-11)*7,"fall")}else e.y=n;i.y=0}}waterLevel(){let t=this.game;if(this.ship){let e=this.ship;if(e.insideHull(this.pos,-.15)&&this.pos.y>-2.3)return e.water>.02?e.waterLocalY():-99;let i=this.worldPos(Mn),n=Me(i.x,i.z,t.time);return this.pos.y+(n-i.y)}return Me(this.pos.x,this.pos.z,t.time)}update(t){let e=this.game,i=this.input;if(this.hurtT=Math.max(0,this.hurtT-t),this.dead>0){this.dead-=t,this.dead<=0&&e.respawn(this);return}if(this.hp<100&&e.time-(this.lastHurt||0)>8&&(this.hp=Math.min(100,this.hp+t*2)),this.cool=Math.max(0,this.cool-t),this.swingT=Math.max(0,this.swingT-t),this.ui){this.vel.set(0,0,0);return}let n=i.look();if(this.station&&this.station.type==="cannon"){let y=this.station.cannon;y.yaw=Zt(y.yaw-n.dx,-.65,.65),y.pitch=Zt(y.pitch-n.dy,-.14,.4),e.frame%4===0&&e.act(this,{a:"aim",s:this.station.ship.netId,i:this.station.index,yaw:y.yaw,pitch:y.pitch})}else this.yaw=Ze(this.yaw-n.dx),this.pitch=Zt(this.pitch-n.dy,-1.5,1.5);if(this.ship){let y=this.ship,R=this.pos;(y.dead||Math.abs(R.x)>16.5||Math.abs(R.z)>5.2||R.y<-3.5||R.y>30)&&(this.leaveStation(),this.detach())}if(!this.ship&&!this.climb){for(let y of e.ships)if(!(y.dead||y.sinking>2)&&!(Math.abs(y.x-this.pos.x)>20||Math.abs(y.z-this.pos.z)>20)&&(y.toLocal(this.pos,nn),Math.abs(nn.x)<15.5&&Math.abs(nn.z)<4.6&&nn.y>-.5&&nn.y<28&&y.insideHull(nn,.2))){this.attach(y);break}}if(this.climb)return this.updateClimb(t);if(this.station)return this.updateStation(t);let r=this.waterLevel(),o=r-this.pos.y;this.swim=o>1.05&&!this.onGround||o>1.35,this.under=o>1.5,this.waterDepth=o;let a=i.move(),l=i.sprint()&&!this.carry,h=this.swim?3.4:l?6.2:3.9;this.carry&&(h*=.62),!this.swim&&o>.4&&(h*=.6);let c=Math.sin(this.yaw),u=Math.cos(this.yaw),d=-c,f=-u,g=u,x=-c,m=(d*a.z+g*a.x)*h,p=(f*a.z+x*a.x)*h,w=this.onGround||this.swim?12:2.5;if(this.vel.x=le(this.vel.x,m,Math.min(1,t*w)),this.vel.z=le(this.vel.z,p,Math.min(1,t*w)),this.swim){let y=r-1.25,R=i.crouch()?-2.6:(y-this.pos.y)*3+(i.jumpHeld()?2.5:0);this.vel.y=le(this.vel.y,R,Math.min(1,t*4)),Math.random()<t*2&&(a.x||a.z)&&_t.play("swim",.7)}else this.vel.y-=22*t,this.onGround&&i.jump()&&(this.vel.y=7.2,this.onGround=!1);this.ship&&(qe[this.ship.grid.matAt(this.pos.x,this.pos.y+.5,this.pos.z)]?.name==="ladder"||qe[this.ship.grid.matAt(this.pos.x+.3,this.pos.y+.5,this.pos.z)]?.name==="ladder")&&(a.z>0?this.vel.y=3.5:a.z<0?this.vel.y=-3:this.vel.y=Math.max(this.vel.y,0)),this.move(t);let _=Math.hypot(this.vel.x,this.vel.z);this.onGround&&_>.5&&(this.stepD+=_*t,this.stepD>(l?2.2:1.7)&&(this.stepD=0,_t.play(this.ship?"step":"stepSand",.8))),this.tools.forEach((y,R)=>{y.visible=!this.carry&&R===this.item&&!this.under}),this.useTools(t),!this.ship&&this.pos.y<-30&&this.hurt(999,"drown")}startClimb(t,e){this.ship!==t&&this.attach(t);let i=-2.5+19*j+.05;this.climb={from:this.pos.clone(),to:new v(e.x,i,e.side*3.2),t:0},_t.play("rope",1)}updateClimb(t){let e=this.climb;e.t+=t/1.3;let i=Math.min(1,e.t),n=Math.sign(e.to.z);this.pos.set(le(e.from.x,e.to.x,i),le(e.from.y,e.to.y+1.2,Math.min(1,i*1.25)),i<.8?n*4.8:le(n*4.8,e.to.z,(i-.8)/.2)),i>=1&&(this.pos.copy(e.to),this.vel.set(0,0,0),this.climb=null)}interact(t){let e=this.game;if(this.carry)return e.dropLoot(this),!0;if(!t)return!1;if(t.kind==="station"){let i=t.st,n=i.ship;if(["helm","sails","cannon"].includes(i.type))return i.user&&i.user!==this||(this.station=i,i.user=this,this.enteredFrame=e.frame,this.vel.set(0,0,0),_t.play("click",1),e.act(this,{a:"station",s:n.netId,i:i.index})),!0;if(i.type==="anchor")return n.anchor||e.act(this,{a:"anchor",s:n.netId,v:!0}),!0;if(i.type==="ammo")return this.pistolRes<15&&(this.pistolRes=15,e.say("pistolAmmo",[],"",this),_t.play("click",1)),!0;if(i.type==="planks"){if(n.planks<=0)return e.say("noPlanks",[],"bad",this),!0;let r=Math.min(5-this.planks,n.planks);return r<=0||(this.planks+=r,this.item=3,e.act(this,{a:"stock",s:n.netId,k:"planks",d:-r}),e.say("tookPlanks",[this.planks],"",this),_t.play("hammer",.6)),!0}if(i.type==="food")return n.food<=0?(e.say("noFood",[],"bad",this),!0):(e.act(this,{a:"stock",s:n.netId,k:"food",d:-1}),this.hp=Math.min(100,this.hp+45),e.say("ateBanana",[],"",this),_t.play("eat",1),!0)}return t.kind==="ladder"?(this.startClimb(t.s,t.L),!0):e.interactOther(this,t)}leaveStation(){this.station&&(this.station.user=null,this.local&&this.game.act(this,{a:"leave"}),this.station=null)}updateStation(t){let e=this.station,i=e.ship,n=this.input,r=n.move(),o=this.game;if(this.tools.forEach(a=>{a.visible=!1}),i.dead||i.sinking>1){this.leaveStation();return}if(this.pos.set(e.stand[0],e.stand[1],e.stand[2]),this.vel.set(0,0,0),n.use()&&this.enteredFrame!==o.frame){this.leaveStation();return}if(e.type==="helm"){let a=i.rudder;a=Zt(a+(r.x?-r.x:0)*t*.9,-1,1),r.z<0&&!r.x&&(a=le(a,0,Math.min(1,t*2))),a!==i.rudder&&(i.rudder=a,o.act(this,{a:"helm",s:i.netId,r:a})),r.x&&Math.random()<t*6&&_t.play("ratchet",.5)}else if(e.type==="sails"){let a=!1;r.z&&(i.sail.h=Zt(i.sail.h+r.z*t*.45,0,1),a=!0,Math.random()<t*4&&_t.play("rope",.4)),r.x&&(i.sail.angle=Zt(i.sail.angle+r.x*t*.7,-1,1),a=!0),a&&o.act(this,{a:"sail",s:i.netId,h:i.sail.h,ang:i.sail.angle})}else if(e.type==="cannon"){let a=e.cannon;n.reload()&&!a.loaded&&!a.loading&&(i.ammo>0?(a.loading=!0,_t.play("click",1),o.act(this,{a:"load",s:i.netId,i:e.index})):o.say("noAmmo",[],"bad",this)),n.fire()&&a.loaded&&a.cool<=0&&(a.loaded=!1,a.cool=.6,o.act(this,{a:"fire",s:i.netId,i:e.index,yaw:a.yaw,pitch:a.pitch}))}}cannonView(){let t=this.station,e=t.cannon;e.pitchG.updateMatrixWorld(!0);let i=e.pitchG.matrixWorld,n=new v(0,0,1.4).applyMatrix4(i),r=new v(0,0,-.6).applyMatrix4(i),o=n.clone().sub(r).normalize(),a=r.clone().addScaledVector(o,-.9);return a.y+=1,{pos:a,look:n.clone().addScaledVector(o,40).add(new v(0,3,0)),muzzle:n}}useTools(t){let e=this.game,i=this.input,n=i.slot();if(n!==-1&&!this.carry&&(n==="next"?this.item=(this.item+1)%bn.length:n==="prev"?this.item=(this.item+bn.length-1)%bn.length:n<bn.length&&(this.item=n),_t.play("click",.5)),this.carry)return;let r=bn[this.item];if(r==="pistol"&&i.reload()&&this.pistol<5&&this.pistolRes>0&&this.reloadT<=0&&(this.reloadT=1.6,_t.play("click",1)),this.reloadT>0&&(this.reloadT-=t,this.reloadT<=0)){let o=Math.min(5-this.pistol,this.pistolRes);this.pistol+=o,this.pistolRes-=o,_t.play("hammer",.5)}if(r==="plank"){if(i.fireHeld()&&this.ship&&this.planks>0){let o=this.lookHole();if(o){this.useHold+=t,this.repairing=o,Math.random()<t*7&&(_t.play("hammer",.7),this.swingT=.15),this.useHold>1.1&&(this.useHold=0,this.planks--,e.act(this,{a:"repair",s:this.ship.netId,x:o.x,y:o.y,z:o.z}),_t.play("hammer",1));return}}this.useHold=0,this.repairing=null,i.fire()&&this.planks<=0&&e.say("noPlanks",[],"bad",this);return}if(!(!i.fire()||this.cool>0)){if(r==="sword")this.cool=.5,this.swingT=.3,_t.play("swing",1),e.melee(this,2.4,34);else if(r==="pistol"){if(this.reloadT>0)return;if(this.pistol<=0){_t.play("click",1),this.cool=.3;return}this.pistol--,this.cool=.55,this.swingT=.2,_t.play("pistol",1),e.shoot(this,90,55)}else if(r==="shovel")this.cool=.6,this.swingT=.35,e.dig(this);else if(r==="bucket")if(this.cool=.6,this.swingT=.3,!this.bucket)this.ship&&this.ship.water>.02&&this.waterDepth>-.4&&this.ship.insideHull(this.pos,0)?(this.bucket=!0,e.act(this,{a:"scoop",s:this.ship.netId}),_t.play("scoop",1)):(this.swim||this.lookingAtSea())&&(this.bucket=!0,_t.play("scoop",1));else{this.bucket=!1,_t.play("pour",1);let o=this.eyeWorld(new v).addScaledVector(this.lookDir(),1.8);e.act(this,{a:"pour",x:o.x,y:o.y,z:o.z})}}}lookingAtSea(){return this.lookDir().y<-.25&&!this.ship}lookDir(t=new v){if(this.camera)return this.camera.getWorldDirection(t);let e=this.worldYaw();return t.set(-Math.sin(e)*Math.cos(this.pitch),Math.sin(this.pitch),-Math.cos(e)*Math.cos(this.pitch))}lookHole(){if(!this.ship)return null;let t=this.lookDir(),e=this.eyeWorld();for(let i=.4;i<=2.4;i+=.4){let n=this.ship.toLocal(e.clone().addScaledVector(t,i)),r=this.ship.findHole(n,.5);if(r)return r}return null}hurt(t,e){if(!(this.dead>0||t<=0)){if(!this.local){this.game.hurtRemote(this,t,e);return}this.hp-=t,this.hurtT=.4,this.lastHurt=this.game.time,_t.play("hurt",1),this.hp<=0&&(this.hp=0,this.dead=7,this.leaveStation(),this.carry&&this.game.dropLoot(this),this.game.onPlayerDied(this,e))}}updateCamera(t){let e=this.camera;if(this.station&&this.station.type==="cannon"){let o=this.cannonView();e.position.copy(o.pos),e.lookAt(o.look);return}this.eyeWorld(e.position);let i=Math.hypot(this.vel.x,this.vel.z);if(this.bob=(this.bob||0)+t*i*2.2,this.onGround&&(e.position.y+=Math.sin(this.bob)*.035*Math.min(1,i/4)),Ld.set(this.pitch,this.yaw,0,"YXZ"),qh.setFromEuler(Ld),this.ship){let o=new si().setFromEuler(new mi(this.ship.roll*.8,this.ship.yaw,this.ship.pitch*.8,"YZX"));e.quaternion.copy(o).multiply(qh)}else e.quaternion.copy(qh);this.dead>0&&(e.position.y-=Math.min(1.2,(7-this.dead)*.6),e.rotateZ(.4)),this.hurtT>0&&e.rotateZ((Math.random()-.5)*this.hurtT*.08);let n=this.game.shakeAt?this.game.shakeAt(this):0;n>0&&(e.position.x+=(Math.random()-.5)*n*.3,e.position.y+=(Math.random()-.5)*n*.3);let r=this.swingT>0?Math.sin(this.swingT/.3*Math.PI):0;this.vm.position.set(.26+Math.sin(this.bob*.5)*.008,-.24+Math.abs(Math.cos(this.bob*.5))*.01-r*.04,-.42-r*.06),this.vm.rotation.set(-r*1.1,r*.6,0)}updateAvatar(t){let e=this.avatar.root;e.visible=this.dead<=0||this.dead>6.5;let i=this.worldPos(Mn);e.position.copy(i),this.swim&&(e.position.y-=.9);let r=(this._prevW||i.clone()).distanceTo(i)/Math.max(t,.001);this._prevW=i.clone(),e.rotation.set(0,this.worldYaw()+Math.PI/2,0),this.ship&&(e.rotation.z=this.ship.pitch*.8,e.rotation.x=this.ship.roll*.8);let o=this.ship?Math.max(0,r-this.ship.speed):r;this.avatar.animate(t,Math.min(6,o),this.swingT>0?1-this.swingT/.3:0),this.carry&&!this.carryMesh&&(this.carryMesh=this.game.makeCarryMesh(),this.carryMesh.traverse(a=>a.layers.set(1+this.slot)),e.add(this.carryMesh)),!this.carry&&this.carryMesh&&(e.remove(this.carryMesh),this.carryMesh=null)}netState(){return{id:this.id,s:this.ship?this.ship.netId:-1,p:[+this.pos.x.toFixed(2),+this.pos.y.toFixed(2),+this.pos.z.toFixed(2)],y:+this.yaw.toFixed(3),pi:+this.pitch.toFixed(2),sw:this.swim?1:0,it:this.item,c:this.carry?1:0,d:this.dead>0?1:0,hp:Math.round(this.hp),st:this.station?[this.station.ship.netId,this.station.index]:null,sg:this.swingT>0?1:0,col:this.color}}applyNet(t){let e=this.game,i=t.s>=0?e.shipById(t.s):null;this.ship=i||null,this.net.target||this.pos.set(t.p[0],t.p[1],t.p[2]),this.net.target=new v(t.p[0],t.p[1],t.p[2]),this.yaw=t.y,this.pitch=t.pi,this.swim=!!t.sw,this.item=t.it,this.hp=t.hp,this.dead=t.d?Math.max(this.dead,1):0,t.sg&&(this.swingT=.3),this.carry=t.c?this.carry||!0:null;let n=t.st?e.shipById(t.st[0])?.stations[t.st[1]]:null;this.station&&this.station!==n&&(this.station.user=null),this.station=n||null,n&&(n.user=this)}updateRemote(t){this.net.target&&this.pos.lerp(this.net.target,Math.min(1,t*12)),this.swingT=Math.max(0,this.swingT-t)}};var ra=class{constructor(t,e=2500){this.max=e,this.pos=new Float32Array(e*3),this.col=new Float32Array(e*3),this.size=new Float32Array(e),this.p=[];let i=new Ee;i.setAttribute("position",new Le(this.pos,3).setUsage(ks)),i.setAttribute("color",new Le(this.col,3).setUsage(ks)),i.setAttribute("size",new Le(this.size,1).setUsage(ks));let n=new He({uniforms:{uScale:{value:300},uFog:{value:new mt},uFogFar:{value:600}},vertexShader:`attribute float size; attribute vec3 color; varying vec3 vC; varying float vD; uniform float uScale;
        void main(){ vC = color; vec4 mv = modelViewMatrix*vec4(position,1.0); vD = -mv.z; gl_PointSize = clamp(floor(size*uScale/max(0.1,-mv.z)), 1.0, uScale * 0.03); gl_Position = projectionMatrix*mv; }`,fragmentShader:`varying vec3 vC; varying float vD; uniform vec3 uFog; uniform float uFogFar;
        void main(){ gl_FragColor = linearToOutputTexel(vec4(mix(vC, uFog, smoothstep(uFogFar*0.2, uFogFar, vD)), 1.0)); }`,depthWrite:!0});this.mat=n,this.points=new Uo(i,n),this.points.frustumCulled=!1,t.add(this.points)}add(t,e,i,n,r,o,a,l,h,c,u,d={}){this.p.length>=this.max&&this.p.shift(),this.p.push({x:t,y:e,z:i,vx:n,vy:r,vz:o,life:a,max:a,size:l,r:h,g:c,b:u,grav:d.grav??0,drag:d.drag??0,grow:d.grow??0,fade:d.fade,r2:d.r2,g2:d.g2,b2:d.b2,float:d.float,local:d.local})}burst(t,e,i,n={}){let r=Math.random;for(let o=0;o<e;o++){if(i==="smoke")for(let a=0;a<2;a++)this.add(t.x+(r()-.5)*1.5,t.y+r()*1,t.z+(r()-.5)*1.5,(r()-.5)*2.5+(n.vx||0),.8+r()*2,(r()-.5)*2.5+(n.vz||0),1.5+r()*2,.18+r()*.22,.78,.77,.75,{drag:1,grow:.12,r2:.42,g2:.42,b2:.44});i==="flash"&&this.add(t.x,t.y,t.z,(r()-.5)*8+(n.vx||0),(r()-.2)*6,(r()-.5)*8+(n.vz||0),.18+r()*.15,.45,1,.9,.5,{drag:4,r2:1,g2:.4,b2:.1}),i==="splash"&&this.add(t.x+(r()-.5)*2,t.y,t.z+(r()-.5)*2,(r()-.5)*4,4+r()*7*(n.big?1.6:1),(r()-.5)*4,.9+r()*.7,.3+r()*.25,.92,.97,1,{grav:14,r2:.6,g2:.8,b2:.9}),i==="spray"&&this.add(t.x+(r()-.5)*.3,t.y,t.z+(r()-.5)*.3,(r()-.5)*1.5+(n.vx||0),1+r()*2.5,(r()-.5)*1.5+(n.vz||0),.5+r()*.4,.12,.8,.92,1,{grav:9,local:n.local}),i==="fire"&&this.add(t.x+(r()-.5)*.3,t.y,t.z+(r()-.5)*.3,(r()-.5)*.6,1.5+r()*2,(r()-.5)*.6,.4+r()*.5,.18+r()*.12,1,.85,.3,{r2:.9,g2:.2,b2:.05,drag:.5}),i==="ember"&&this.add(t.x,t.y,t.z,(r()-.5)*3,2+r()*4,(r()-.5)*3,1+r(),.08,1,.7,.2,{grav:2,r2:.6,g2:.1,b2:0}),i==="dust"&&this.add(t.x+(r()-.5),t.y+r()*.4,t.z+(r()-.5),(r()-.5)*3,1+r()*2.5,(r()-.5)*3,.6+r()*.6,.2+r()*.15,n.r??.75,n.g??.62,n.b??.4,{grav:5,drag:1.5}),i==="ghost"&&this.add(t.x+(r()-.5)*2,t.y+r(),t.z+(r()-.5)*2,(r()-.5)*.6,.6+r(),(r()-.5)*.6,1.5+r(),.18,.3,1,.6,{r2:.05,g2:.3,b2:.2,drag:.4}),i==="gold"&&this.add(t.x,t.y,t.z,(r()-.5)*3,3+r()*3,(r()-.5)*3,.9+r()*.4,.1,1,.85,.3,{grav:10}),i==="bones"&&this.add(t.x+(r()-.5)*.5,t.y+r()*1.6,t.z+(r()-.5)*.5,(r()-.5)*4,2+r()*3,(r()-.5)*4,1.2+r()*.6,.14,.9,.87,.78,{grav:12}),i==="blood"&&this.add(t.x,t.y,t.z,(r()-.5)*2.5,1+r()*2,(r()-.5)*2.5,.5+r()*.3,.1,.6,.08,.08,{grav:12}),i==="wake"&&this.add(t.x+(r()-.5)*.8,t.y,t.z+(r()-.5)*.8,(n.vx||0)+(r()-.5),.2+r()*.4,(n.vz||0)+(r()-.5),1.2+r()*1.4,.22,.95,1,1,{float:!0,drag:.8,r2:.6,g2:.8,b2:.85})}}update(t,e,i){let n=0;for(let o=this.p.length-1;o>=0;o--){let a=this.p[o];if(a.life-=t,a.life<=0){this.p.splice(o,1);continue}a.vy-=a.grav*t;let l=Math.max(0,1-a.drag*t);a.vx*=l,a.vy*=l,a.vz*=l,a.x+=a.vx*t,a.y+=a.vy*t,a.z+=a.vz*t,a.float?a.y=e(a.x,a.z)+.05:a.grav>0&&a.y<e(a.x,a.z)-.3&&(a.life=0),a.size+=a.grow*t}for(let o of this.p){if(n>=this.max)break;let a=1-o.life/o.max;this.pos[n*3]=o.x,this.pos[n*3+1]=o.y,this.pos[n*3+2]=o.z;let l=o.r2!==void 0?o.r+(o.r2-o.r)*a:o.r,h=o.g2!==void 0?o.g+(o.g2-o.g)*a:o.g,c=o.b2!==void 0?o.b+(o.b2-o.b)*a:o.b;this.col[n*3]=l,this.col[n*3+1]=h,this.col[n*3+2]=c,this.size[n]=o.size*Math.min(1,o.life/Math.min(o.max,.3)),n++}let r=this.points.geometry;r.setDrawRange(0,n),r.attributes.position.needsUpdate=!0,r.attributes.color.needsUpdate=!0,r.attributes.size.needsUpdate=!0}},oa=class{constructor(t,e=6){this.lights=[];for(let i=0;i<e;i++){let n=new Yo("#ffc060",0,12,1.6);t.add(n),this.lights.push(n)}this.src=[]}begin(){this.src.length=0}add(t,e,i,n){this.src.push({pos:t,color:e,intensity:i,range:n})}end(t,e){let i=t.getWorldPosition(new v);this.src.sort((n,r)=>n.pos.distanceToSquared(i)-r.pos.distanceToSquared(i)),this.lights.forEach((n,r)=>{let o=this.src[r];if(!o){n.intensity=0;return}n.position.copy(o.pos),n.color.set(o.color),n.distance=o.range,n.intensity=o.intensity*(o.always?1:.25+e*1.2)})}};var Fe=new Set,Oe=new Set,Pe={dx:0,dy:0,l:!1,r:!1,lp:!1,rp:!1,wheel:0},qn=!1,Er=null,Tr=null,Py=0,kd={a:0,b:1,x:2,y:3,lb:4,rb:5,lt:6,rt:7,back:8,start:9,ls:10,rs:11,up:12,down:13,left:14,right:15},Yn=[];function Iy(){let s=navigator.getGamepads?navigator.getGamepads():[];for(let t=0;t<4;t++){let e=s[t];Yn[t]||(Yn[t]={pad:null,held:{},edge:new Set});let i=Yn[t];if(i.edge.clear(),i.pad=e&&e.connected?e:null,!!i.pad)for(let n in kd){let r=i.pad.buttons[kd[n]],o=!!(r&&(r.pressed||r.value>.4));o&&!i.held[n]&&i.edge.add(n),i.held[n]=o}}}var wn=(s,t)=>{if(!s||!s.pad)return 0;let e=s.pad.axes[t]||0;return Math.abs(e)<.16?0:e},Bs=class{constructor(t=-1){this.kind="km",this.padIndex=t,this.sens=1,this.invert=!1}get P(){return this.padIndex>=0?Yn[this.padIndex]:null}move(){let t=0,e=0;(Fe.has("KeyA")||Fe.has("ArrowLeft"))&&(t-=1),(Fe.has("KeyD")||Fe.has("ArrowRight"))&&(t+=1),(Fe.has("KeyW")||Fe.has("ArrowUp"))&&(e+=1),(Fe.has("KeyS")||Fe.has("ArrowDown"))&&(e-=1),t+=wn(this.P,0),e-=wn(this.P,1);let i=Math.hypot(t,e);return i>1&&(t/=i,e/=i),{x:t,z:e}}look(){let t=.0022*this.sens,e=this.invert?-1:1;return{dx:Pe.dx*t+wn(this.P,2)*.05*this.sens,dy:(Pe.dy*t+wn(this.P,3)*.04*this.sens)*e}}e(t){let e=this.P;return!!(e&&e.edge.has(t))}h(t){let e=this.P;return!!(e&&e.held[t])}jump(){return Oe.has("Space")||this.e("a")}jumpHeld(){return Fe.has("Space")||this.h("a")}sprint(){return Fe.has("ShiftLeft")||Fe.has("ShiftRight")||this.h("ls")}crouch(){return Fe.has("ControlLeft")||Fe.has("KeyC")||this.h("b")}use(){return Oe.has("KeyE")||Oe.has("KeyF")||this.e("x")}useHeld(){return Fe.has("KeyE")||Fe.has("KeyF")||this.h("x")}fire(){return Pe.lp||this.e("rt")}fireHeld(){return Pe.l||this.h("rt")}reload(){return Oe.has("KeyR")||this.e("y")}slot(){for(let t=1;t<=6;t++)if(Oe.has("Digit"+t))return t-1;if(Pe.wheel){let t=Pe.wheel;return Pe.wheel=0,t>0?"next":"prev"}return this.e("rb")?"next":this.e("lb")?"prev":-1}map(){return Oe.has("KeyM")||this.e("back")}treasureMap(){return Fe.has("Tab")||this.h("up")}pause(){return Oe.has("Escape")||Oe.has("KeyP")||this.e("start")}menuNav(){return{up:Oe.has("ArrowUp")||Oe.has("KeyW")||this.e("up"),down:Oe.has("ArrowDown")||Oe.has("KeyS")||this.e("down"),ok:Oe.has("Enter")||Oe.has("Space")||this.e("a"),back:Oe.has("Escape")||this.e("b")}}},aa=class extends Bs{constructor(t){super(t),this.kind="pad"}move(){let t=wn(this.P,0),e=-wn(this.P,1);this.h("left")&&(t-=1),this.h("right")&&(t+=1);let i=Math.hypot(t,e);return i>1&&(t/=i,e/=i),{x:t,z:e}}look(){let t=this.invert?-1:1;return{dx:wn(this.P,2)*.05*this.sens,dy:wn(this.P,3)*.04*this.sens*t}}jump(){return this.e("a")}jumpHeld(){return this.h("a")}sprint(){return this.h("ls")}crouch(){return this.h("b")}use(){return this.e("x")}useHeld(){return this.h("x")}fire(){return this.e("rt")}fireHeld(){return this.h("rt")}reload(){return this.e("y")}slot(){return this.e("rb")?"next":this.e("lb")?"prev":-1}map(){return this.e("back")}treasureMap(){return this.h("up")}pause(){return this.e("start")}menuNav(){return{up:this.e("up"),down:this.e("down"),ok:this.e("a"),back:this.e("b")}}},ye={init(s,t){Er=s,Tr=t,addEventListener("keydown",e=>{e.target&&(e.target.tagName==="INPUT"||e.target.tagName==="TEXTAREA")||(["Space","Tab","ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].includes(e.code)&&e.preventDefault(),e.repeat||Oe.add(e.code),Fe.add(e.code),Py=performance.now(),Tr&&Tr())}),addEventListener("keyup",e=>Fe.delete(e.code)),addEventListener("blur",()=>{Fe.clear(),Pe.l=Pe.r=!1}),addEventListener("mousemove",e=>{qn&&(Pe.dx+=e.movementX,Pe.dy+=e.movementY)}),addEventListener("mousedown",e=>{Tr&&Tr(),qn&&(e.button===0&&(Pe.l=!0,Pe.lp=!0),e.button===2&&(Pe.r=!0,Pe.rp=!0))}),addEventListener("mouseup",e=>{e.button===0&&(Pe.l=!1),e.button===2&&(Pe.r=!1)}),addEventListener("wheel",e=>{qn&&(Pe.wheel+=Math.sign(e.deltaY))},{passive:!0}),addEventListener("contextmenu",e=>e.preventDefault()),document.addEventListener("pointerlockchange",()=>{qn=document.pointerLockElement===Er})},lock(){if(!qn&&Er&&Er.requestPointerLock)try{let s=Er.requestPointerLock();s&&s.catch&&s.catch(()=>{})}catch{}},unlock(){qn&&document.exitPointerLock()},get locked(){return qn},poll:Iy,padCount(){return Yn.filter(s=>s&&s.pad).length},anyPadEdge(s){return Yn.some(t=>t&&t.edge.has(s))},hit(s){return Oe.has(s)},down(s){return Fe.has(s)},pause(){return Oe.has("Escape")||Oe.has("KeyP")||this.anyPadEdge("start")},endFrame(){Oe.clear(),Pe.dx=Pe.dy=0,Pe.lp=Pe.rp=!1;for(let s of Yn)s&&s.edge.clear()}};var zd={hu:{subtitle:"Kal\xF3zok, kincsek, \xE1tkok",beta:"B\xC9TA",continue:"Folytat\xE1s",newGame:"\xDAj j\xE1t\xE9k",confirmNew:"Biztosan? A r\xE9gi ment\xE9s elv\xE9sz. Kattints \xFAjra!",splitScreen:"K\xE9t j\xE1t\xE9kos, osztott k\xE9perny\u0151",needPad:"Csatlakoztass egy kontrollert, azt\xE1n kattints \xFAjra!",online:"Online k\xF6z\xF6s j\xE1t\xE9k",onlineNote:"Legfeljebb n\xE9gyen j\xE1tszhattok egy haj\xF3n. Aki l\xE9trehozza a szob\xE1t, annak a g\xE9p\xE9n fut a vil\xE1g, \xE9s az \u0151 ment\xE9se folytat\xF3dik.",hostGame:"Szoba l\xE9trehoz\xE1sa",joinGame:"Csatlakoz\xE1s",codePlaceholder:"Szobak\xF3d",connecting:"Kapcsol\xF3d\xE1s\u2026",netError:"H\xE1l\xF3zati hiba:",roomReady:"A szoba k\xE9sz! Szobak\xF3d: {0}",roomCode:"Szobak\xF3d",crew:"Leg\xE9nys\xE9g",menu:"Men\xFC",back:"Vissza",playerJoined:"\xDAj matr\xF3z sz\xE1llt fel! Leg\xE9nys\xE9g: {0} f\u0151",playerLeft:"Egy matr\xF3z elhagyta a haj\xF3t",disconnected:"Megszakadt a kapcsolat a kapit\xE1nnyal",joined:"Felsz\xE1llt\xE1l a haj\xF3ra! \xDCdv a leg\xE9nys\xE9gben!",resume:"Folytat\xE1s",toTitle:"Vissza a c\xEDmk\xE9perny\u0151re",lang:"Nyelv",quality:"Felbont\xE1s",sens:"Eg\xE9r\xE9rz\xE9kenys\xE9g",invert:"Ford\xEDtott eg\xE9r",pixelFilter:"Pixelsz\u0171r\u0151",shadows:"\xC1rny\xE9kok",difficulty:"Neh\xE9zs\xE9g",easy:"k\xF6nny\u0171",normal:"norm\xE1l",hard:"neh\xE9z",on:"be",off:"ki",low:"alacsony",med:"k\xF6zepes",high:"magas",paused:"Sz\xFCnet",helpTitle:"Billenty\u0171zet \xE9s eg\xE9r",help:[["W A S D","mozg\xE1s"],["Eg\xE9r","n\xE9zel\u0151d\xE9s"],["Shift","fut\xE1s"],["Sz\xF3k\xF6z","ugr\xE1s, \xFAsz\xE1s felfel\xE9"],["C / Ctrl","lemer\xFCl\xE9s"],["E","haszn\xE1lat, \xE1tv\xE9tel, elenged\xE9s"],["Bal eg\xE9rgomb","kard, l\xF6v\xE9s, \xE1s\xE1s, jav\xEDt\xE1s, v\xF6d\xF6r"],["R","t\xF6lt\xE9s (\xE1gy\xFA, pisztoly)"],["1\u20135, g\xF6rg\u0151","eszk\xF6zv\xE1lt\xE1s"],["Tab (tartva)","kincses t\xE9rk\xE9p"],["M","tengeri t\xE9rk\xE9p"],["Esc","men\xFC"]],controlsBtn:"Ir\xE1ny\xEDt\xE1s",controlsHide:"Ir\xE1ny\xEDt\xE1s elrejt\xE9se",padTitle:"Kontroller",padHelp:[["Bal kar","mozg\xE1s"],["Jobb kar","n\xE9zel\u0151d\xE9s"],["A","ugr\xE1s"],["B","lemer\xFCl\xE9s"],["X","haszn\xE1lat"],["Y","t\xF6lt\xE9s"],["RT","kard, l\xF6v\xE9s, \xE1s\xE1s"],["LB / RB","eszk\xF6zv\xE1lt\xE1s"],["Fel","kincses t\xE9rk\xE9p"],["Back","tengeri t\xE9rk\xE9p"],["Start","men\xFC"]],st_helm:"Korm\xE1ny",st_sails:"Vitorl\xE1k",st_anchor:"Horgony",st_cannon:"\xC1gy\xFA",st_ammo:"L\u0151szeres l\xE1da",st_planks:"Deszk\xE1s l\xE1da",st_food:"Ban\xE1nos l\xE1da",stationLabel:"{0} \xB7 [E] \xC1tveszem",busy:"{0} \xB7 foglalt",crateLabel:"{0} ({1}) \xB7 [E]",ladder:"[E] Felm\xE1sz\xE1s",grabItem:"[E] {0} felv\xE9tele",sell:"[E] Elad\xE1s",talk:"[E] Besz\xE9lget\xE9s",restockHint:"[E] K\xE9szletek felt\xF6lt\xE9se",lightTotem:"[E] A totem meggy\xFAjt\xE1sa",loot_chest:"Kincsesl\xE1da",loot_skull:"Kapit\xE1nykoponya",loot_supplies:"Hord\xF3",loot_bottle:"Palack",loot_coins:"Arany",helmHelp:"A / D: korm\xE1nyz\xE1s \xB7 S: egyenesbe \xB7 E: elenged\xE9s",sailHelp:"W / S: vitorl\xE1k kibont\xE1sa / bevon\xE1sa \xB7 A / D: vitorl\xE1k forgat\xE1sa \xB7 E: elenged\xE9s",cannonHelp:"Eg\xE9r: c\xE9lz\xE1s \xB7 Bal gomb: t\u0171z \xB7 R: t\xF6lt\xE9s \xB7 E: elenged\xE9s",helmHelpPad:"Bal kar: korm\xE1nyz\xE1s \xB7 X: elenged\xE9s",sailHelpPad:"Bal kar: kibont\xE1s, bevon\xE1s, forgat\xE1s \xB7 X: elenged\xE9s",cannonHelpPad:"Jobb kar: c\xE9lz\xE1s \xB7 RT: t\u0171z \xB7 Y: t\xF6lt\xE9s \xB7 X: elenged\xE9s",anchorDrop:"[E] Horgonyt le!",anchorRaise:"[E] (tartva) Horgonyt fel!",loaded:"T\xF6ltve",empty:"\xDCres",reloading:"T\xF6lt\xE9s\u2026",gold:"Arany",goldShort:"arany",balls:"Goly\xF3",planks:"Deszka",food:"Ban\xE1n",water:"V\xEDz a haj\xF3ban",items:["Kard","Pisztoly","\xC1s\xF3","Deszka","V\xF6d\xF6r"],noAmmo:"Nincs t\xF6bb \xE1gy\xFAgoly\xF3!",noPlanks:"Nincs n\xE1lad deszka",noFood:"Elfogyott a ban\xE1n",tookPlanks:"Deszk\xE1k a kezedben: {0}",ateBanana:"Megett\xE9l egy ban\xE1nt",pistolAmmo:"Pisztolygoly\xF3 felt\xF6ltve",leak:"L\xE9k a haj\xF3n! Foltozd be deszk\xE1val!",flooding:"\xD6mlik a v\xEDz a haj\xF3ba! Merd ki v\xF6d\xF6rrel!",sinking:"A haj\xF3 s\xFCllyed!",sunk:"Els\xFCllyedt a haj\xF3\u2026",newShip:"\xDAj haj\xF3 v\xE1r r\xE1tok: {0}",crash:"Z\xE1tonyra futottunk!",fire:"T\u0171z van a fed\xE9lzeten! Oltsd el v\xEDzzel!",enemy:"Ellens\xE9ges haj\xF3 a l\xE1that\xE1ron!",ghost:"Szellemhaj\xF3 bukkant el\u0151 a k\xF6db\u0151l!",enemySunk:"Az ellens\xE9ges haj\xF3 els\xFCllyedt!",boarders:"Csontv\xE1zak ugr\xE1lnak \xE1t a haj\xF3nkra!",youDied:"Meghalt\xE1l",respawn:"Visszat\xE9r\xE9s {0} m\xE1sodperc m\xFAlva\u2026",respawnShip:"A haj\xF3don \xE9bredsz",dig:"\xC1s\xE1s\u2026",found:"Kincs! Vidd el a keresked\u0151nek!",carrying:"Kincs a kezedben \xB7 E: let\xE9tel",sold:"Eladva: +{0} arany",merchant:"Keresked\u0151",merchantHi:"Ahoj, kapit\xE1ny! Mit adhatok?",gotMap:"\xDAj kincses t\xE9rk\xE9p: {0}",noMoreMaps:"Nincs t\xF6bb t\xE9rk\xE9pem, kapit\xE1ny",notEnough:"Nincs el\xE9g aranyad",restock:"Felt\xF6lt\xF6tted a k\xE9szleteket",lootedSupplies:"Zs\xE1km\xE1ny: {0} goly\xF3, {1} deszka, {2} ban\xE1n",bottle:"Palackposta! \xDAj t\xE9rk\xE9p: {0}",repaired:"A haj\xF3t kijav\xEDtott\xE1k",upgraded:"Fejleszt\xE9s: {0} ({1}. szint)",shopMap:"Kincses t\xE9rk\xE9p",shopMapD:"Egy X jel\xF6li, hol a kincs.",shopRiddle:"Rejtv\xE9nyes t\xE9rk\xE9p",shopRiddleD:"Nincs rajta X, csak egy rejtv\xE9ny. M\xE1sf\xE9lszeres kincs.",shopRepair:"Haj\xF3jav\xEDt\xE1s",shopRepairD:"Minden lyukat befoltoznak, a vizet kimerik.",up0:"Meger\u0151s\xEDtett haj\xF3test",up0D:"Kisebb lyukak, lassabban sziv\xE1rog a v\xEDz.",up1:"Jobb vitorl\xE1k",up1D:"Gyorsabb haj\xF3.",up2:"Neh\xE9z \xE1gy\xFAk",up2D:"Nagyobb robban\xE1s, gyorsabb t\xF6lt\xE9s.",up3:"Nagyobb rakt\xE9r",up3D:"T\xF6bb goly\xF3, deszka \xE9s ban\xE1n f\xE9r el.",close:"Bez\xE1r\xE1s",maxed:"k\xE9sz",shopTip:"Eg\xE9r vagy fel/le, azt\xE1n Enter. Bez\xE1r\xE1s: E vagy Esc.",mapTitle:"Tengeri t\xE9rk\xE9p",noMaps:"Nincs kincses t\xE9rk\xE9ped. Vegy\xE9l egyet a keresked\u0151t\u0151l!",riddleText:"{0}: a koponyaszikl\xE1t\xF3l menj {1} l\xE9p\xE9st {2}, \xE9s ott \xE1ss!",dir_N:"\xE9szakra",dir_NE:"\xE9szakkeletre",dir_E:"keletre",dir_SE:"d\xE9lkeletre",dir_S:"d\xE9lre",dir_SW:"d\xE9lnyugatra",dir_W:"nyugatra",dir_NW:"\xE9szaknyugatra",island:"{0}-sziget",outpost:"{0}-kik\xF6t\u0151",cursedWaters:"\xC1tkozott vizek",night:"Lesz\xE1llt az \xE9j. A holtak fel\xE9brednek\u2026",day:"Felkelt a nap",weather_rain:"Esni kezdett",weather_storm:"Vihar k\xF6zeleg! Kapaszkodj!",weather_fog:"S\u0171r\u0171 k\xF6d ereszkedett a tengerre",lightning:"Vill\xE1m csapott az \xE1rbocba!",wind:"Sz\xE9l",speed:"csom\xF3",sailFurled:"Bevonva",sailHalf:"F\xE9lig",sailFull:"Teljesen",bucketFull:"Teli v\xF6d\xF6r \xB7 Bal gomb: ki\xF6nt\xE9s",bucketEmpty:"Bal gomb: mer\xEDt\xE9s",repairHint:"Bal gomb (tartva): jav\xEDt\xE1s",digHint:"Bal gomb: \xE1s\xE1s",totemLit:"Fellobbant a totem ({0}/{1})",shrineAwake:"Mind a h\xE1rom totem \xE9g\u2026 a f\xF6ld megremeg!",captainRises:"Felkelt az \xC1tkozott Kapit\xE1ny!",captainSummons:"A kapit\xE1ny felt\xE1masztja a holtakat!",captainDefeated:"Az \xC1tkozott Kapit\xE1ny elporladt!",captainName:"Az \xC1tkozott Kapit\xE1ny",serpent:"Valami hatalmas mozog a v\xEDz alatt\u2026",serpentName:"A M\xE9lys\xE9g K\xEDgy\xF3ja",serpentAttack:"A k\xEDgy\xF3 t\xE1mad! Kapaszkodj!",serpentGone:"A k\xEDgy\xF3 visszah\xFAz\xF3dott a m\xE9lybe",serpentSlain:"Legy\u0151zt\xE9tek a M\xE9lys\xE9g K\xEDgy\xF3j\xE1t!",welcome:"Kapit\xE1ny! Bontsd ki a vitorl\xE1kat, h\xFAzd fel a horgonyt, \xE9s \xE1llj a korm\xE1nyhoz! A kincses t\xE9rk\xE9pedet a Tab gombbal n\xE9zheted meg."},en:{subtitle:"Pirates. Treasure. Curses.",beta:"BETA",continue:"Continue",newGame:"New game",confirmNew:"Sure? The old save will be lost. Click again!",splitScreen:"Two players, split screen",needPad:"Connect a controller, then click again!",online:"Online co-op",onlineNote:"Up to four of you can crew one ship. The world runs on the computer of whoever creates the room, and continues their save.",hostGame:"Create a room",joinGame:"Join",codePlaceholder:"Room code",connecting:"Connecting\u2026",netError:"Network error:",roomReady:"The room is ready! Room code: {0}",roomCode:"Room code",crew:"Crew",menu:"Menu",back:"Back",playerJoined:"A new sailor came aboard! Crew: {0}",playerLeft:"A sailor left the ship",disconnected:"Lost the connection to the captain",joined:"You are aboard! Welcome to the crew!",resume:"Resume",toTitle:"Back to title",lang:"Language",quality:"Resolution",sens:"Mouse sensitivity",invert:"Invert mouse",pixelFilter:"Pixel filter",shadows:"Shadows",difficulty:"Difficulty",easy:"easy",normal:"normal",hard:"hard",on:"on",off:"off",low:"low",med:"medium",high:"high",paused:"Paused",helpTitle:"Keyboard and mouse",help:[["W A S D","move"],["Mouse","look"],["Shift","sprint"],["Space","jump, swim up"],["C / Ctrl","dive"],["E","use, take over, let go"],["Left mouse","cutlass, shoot, dig, repair, bucket"],["R","load (cannon, pistol)"],["1\u20135, wheel","switch tool"],["Tab (hold)","treasure map"],["M","sea chart"],["Esc","menu"]],controlsBtn:"Controls",controlsHide:"Hide controls",padTitle:"Controller",padHelp:[["Left stick","move"],["Right stick","look"],["A","jump"],["B","dive"],["X","use"],["Y","load"],["RT","cutlass, shoot, dig"],["LB / RB","switch tool"],["Up","treasure map"],["Back","sea chart"],["Start","menu"]],st_helm:"Helm",st_sails:"Sails",st_anchor:"Anchor",st_cannon:"Cannon",st_ammo:"Ammunition crate",st_planks:"Plank crate",st_food:"Banana crate",stationLabel:"{0} \xB7 [E] Take over",busy:"{0} \xB7 taken",crateLabel:"{0} ({1}) \xB7 [E]",ladder:"[E] Climb",grabItem:"[E] Pick up: {0}",sell:"[E] Sell",talk:"[E] Talk",restockHint:"[E] Restock supplies",lightTotem:"[E] Light the totem",loot_chest:"treasure chest",loot_skull:"captain's skull",loot_supplies:"barrel",loot_bottle:"bottle",loot_coins:"gold",helmHelp:"A / D: steer \xB7 S: straighten \xB7 E: let go",sailHelp:"W / S: unfurl / furl \xB7 A / D: angle the sails \xB7 E: let go",cannonHelp:"Mouse: aim \xB7 Left button: fire \xB7 R: load \xB7 E: let go",helmHelpPad:"Left stick: steer \xB7 X: let go",sailHelpPad:"Left stick: unfurl, furl, angle \xB7 X: let go",cannonHelpPad:"Right stick: aim \xB7 RT: fire \xB7 Y: load \xB7 X: let go",anchorDrop:"[E] Drop anchor!",anchorRaise:"[E] (hold) Raise anchor!",loaded:"Loaded",empty:"Empty",reloading:"Loading\u2026",gold:"Gold",goldShort:"gold",balls:"Balls",planks:"Planks",food:"Bananas",water:"Water aboard",items:["Cutlass","Pistol","Shovel","Plank","Bucket"],noAmmo:"Out of cannonballs!",noPlanks:"You are not carrying any planks",noFood:"No bananas left",tookPlanks:"Planks in hand: {0}",ateBanana:"You ate a banana",pistolAmmo:"Pistol ammunition refilled",leak:"We have a leak! Patch it with planks!",flooding:"Water is pouring in! Bail it out with a bucket!",sinking:"The ship is sinking!",sunk:"The ship went down\u2026",newShip:"A new ship awaits you: {0}",crash:"We ran aground!",fire:"Fire on deck! Put it out with water!",enemy:"Enemy ship on the horizon!",ghost:"A ghost ship emerges from the fog!",enemySunk:"The enemy ship has sunk!",boarders:"Skeletons are leaping aboard!",youDied:"You died",respawn:"Returning in {0} seconds\u2026",respawnShip:"You wake up on your ship",dig:"Digging\u2026",found:"Treasure! Take it to the merchant!",carrying:"Treasure in hand \xB7 E: put down",sold:"Sold: +{0} gold",merchant:"Merchant",merchantHi:"Ahoy, captain! What can I do for you?",gotMap:"New treasure map: {0}",noMoreMaps:"I have no more maps, captain",notEnough:"Not enough gold",restock:"Supplies restocked",lootedSupplies:"Loot: {0} balls, {1} planks, {2} bananas",bottle:"Message in a bottle! New map: {0}",repaired:"The ship has been repaired",upgraded:"Upgrade: {0} (level {1})",shopMap:"Treasure map",shopMapD:"An X marks where the treasure lies.",shopRiddle:"Riddle map",shopRiddleD:"No X, only a riddle. One and a half times the treasure.",shopRepair:"Ship repair",shopRepairD:"Every hole patched, every drop bailed out.",up0:"Reinforced hull",up0D:"Smaller holes, slower leaks.",up1:"Better sails",up1D:"A faster ship.",up2:"Heavy cannons",up2D:"Bigger blasts, faster loading.",up3:"Bigger hold",up3D:"Room for more balls, planks and bananas.",close:"Close",maxed:"done",shopTip:"Mouse or up/down, then Enter. Close: E or Esc.",mapTitle:"Sea chart",noMaps:"You have no treasure maps. Buy one from the merchant!",riddleText:"{0}: from the skull rock, walk {1} paces {2} and dig there!",dir_N:"north",dir_NE:"north-east",dir_E:"east",dir_SE:"south-east",dir_S:"south",dir_SW:"south-west",dir_W:"west",dir_NW:"north-west",island:"{0}",outpost:"{0} Outpost",cursedWaters:"Cursed waters",night:"Night has fallen. The dead are stirring\u2026",day:"The sun is rising",weather_rain:"It has started to rain",weather_storm:"A storm is coming! Hold on!",weather_fog:"A thick fog has rolled over the sea",lightning:"Lightning struck the mast!",wind:"Wind",speed:"knots",sailFurled:"Furled",sailHalf:"Half",sailFull:"Full",bucketFull:"Full bucket \xB7 Left button: pour",bucketEmpty:"Left button: scoop",repairHint:"Left button (hold): repair",digHint:"Left button: dig",totemLit:"The totem flares up ({0}/{1})",shrineAwake:"All three totems burn\u2026 the ground trembles!",captainRises:"The Cursed Captain has risen!",captainSummons:"The captain raises the dead!",captainDefeated:"The Cursed Captain has crumbled to dust!",captainName:"The Cursed Captain",serpent:"Something huge is moving beneath the waves\u2026",serpentName:"The Serpent of the Deep",serpentAttack:"The serpent attacks! Hold on!",serpentGone:"The serpent has retreated into the deep",serpentSlain:"You have slain the Serpent of the Deep!",welcome:"Captain! Unfurl the sails, raise the anchor and take the helm! Hold Tab to look at your treasure map."},fr:{subtitle:"Pirates, tr\xE9sors et mal\xE9dictions",beta:"B\xCATA",continue:"Continuer",newGame:"Nouvelle partie",confirmNew:"Vraiment ? L'ancienne sauvegarde sera perdue. Cliquez encore !",splitScreen:"Deux joueurs, \xE9cran partag\xE9",needPad:"Branchez une manette, puis cliquez encore !",online:"Coop\xE9ration en ligne",onlineNote:"Jusqu'\xE0 quatre joueurs sur un m\xEAme navire. Le monde tourne sur l'ordinateur de celui qui cr\xE9e le salon, et sa sauvegarde continue.",hostGame:"Cr\xE9er un salon",joinGame:"Rejoindre",codePlaceholder:"Code du salon",connecting:"Connexion\u2026",netError:"Erreur r\xE9seau :",roomReady:"Le salon est pr\xEAt ! Code : {0}",roomCode:"Code du salon",crew:"\xC9quipage",menu:"Menu",back:"Retour",playerJoined:"Un nouveau matelot est mont\xE9 \xE0 bord ! \xC9quipage : {0}",playerLeft:"Un matelot a quitt\xE9 le navire",disconnected:"Connexion perdue avec le capitaine",joined:"Vous \xEAtes \xE0 bord ! Bienvenue dans l'\xE9quipage !",resume:"Reprendre",toTitle:"Retour \xE0 l'\xE9cran titre",lang:"Langue",quality:"R\xE9solution",sens:"Sensibilit\xE9 de la souris",invert:"Souris invers\xE9e",pixelFilter:"Filtre pixel",shadows:"Ombres",difficulty:"Difficult\xE9",easy:"facile",normal:"normale",hard:"difficile",on:"oui",off:"non",low:"basse",med:"moyenne",high:"haute",paused:"Pause",helpTitle:"Clavier et souris",help:[["W A S D","se d\xE9placer"],["Souris","regarder"],["Maj","courir"],["Espace","sauter, nager vers le haut"],["C / Ctrl","plonger"],["E","utiliser, prendre le poste, l\xE2cher"],["Clic gauche","sabre, tir, creuser, r\xE9parer, seau"],["R","charger (canon, pistolet)"],["1\u20135, molette","changer d'outil"],["Tab (maintenir)","carte au tr\xE9sor"],["M","carte marine"],["\xC9chap","menu"]],controlsBtn:"Commandes",controlsHide:"Masquer les commandes",padTitle:"Manette",padHelp:[["Stick gauche","se d\xE9placer"],["Stick droit","regarder"],["A","sauter"],["B","plonger"],["X","utiliser"],["Y","charger"],["RT","sabre, tir, creuser"],["LB / RB","changer d'outil"],["Haut","carte au tr\xE9sor"],["Back","carte marine"],["Start","menu"]],st_helm:"Gouvernail",st_sails:"Voiles",st_anchor:"Ancre",st_cannon:"Canon",st_ammo:"Caisse de munitions",st_planks:"Caisse de planches",st_food:"Caisse de bananes",stationLabel:"{0} \xB7 [E] Prendre le poste",busy:"{0} \xB7 occup\xE9",crateLabel:"{0} ({1}) \xB7 [E]",ladder:"[E] Grimper",grabItem:"[E] Ramasser : {0}",sell:"[E] Vendre",talk:"[E] Parler",restockHint:"[E] Refaire les provisions",lightTotem:"[E] Allumer le totem",loot_chest:"coffre au tr\xE9sor",loot_skull:"cr\xE2ne du capitaine",loot_supplies:"tonneau",loot_bottle:"bouteille",loot_coins:"or",helmHelp:"A / D : barrer \xB7 S : redresser \xB7 E : l\xE2cher",sailHelp:"W / S : d\xE9ferler / ferler \xB7 A / D : orienter les voiles \xB7 E : l\xE2cher",cannonHelp:"Souris : viser \xB7 Clic gauche : feu \xB7 R : charger \xB7 E : l\xE2cher",helmHelpPad:"Stick gauche : barrer \xB7 X : l\xE2cher",sailHelpPad:"Stick gauche : d\xE9ferler, ferler, orienter \xB7 X : l\xE2cher",cannonHelpPad:"Stick droit : viser \xB7 RT : feu \xB7 Y : charger \xB7 X : l\xE2cher",anchorDrop:"[E] Jetez l'ancre !",anchorRaise:"[E] (maintenir) Levez l'ancre !",loaded:"Charg\xE9",empty:"Vide",reloading:"Chargement\u2026",gold:"Or",goldShort:"po",balls:"Boulets",planks:"Planches",food:"Bananes",water:"Eau \xE0 bord",items:["Sabre","Pistolet","Pelle","Planche","Seau"],noAmmo:"Plus de boulets !",noPlanks:"Vous n'avez pas de planches",noFood:"Plus de bananes",tookPlanks:"Planches en main : {0}",ateBanana:"Vous avez mang\xE9 une banane",pistolAmmo:"Munitions du pistolet recharg\xE9es",leak:"Voie d'eau ! Colmatez-la avec des planches !",flooding:"L'eau entre \xE0 flots ! \xC9copez avec le seau !",sinking:"Le navire coule !",sunk:"Le navire a sombr\xE9\u2026",newShip:"Un nouveau navire vous attend : {0}",crash:"Nous avons \xE9chou\xE9 !",fire:"Le feu est sur le pont ! \xC9teignez-le avec de l'eau !",enemy:"Navire ennemi \xE0 l'horizon !",ghost:"Un vaisseau fant\xF4me surgit de la brume !",enemySunk:"Le navire ennemi a sombr\xE9 !",boarders:"Des squelettes sautent \xE0 l'abordage !",youDied:"Vous \xEAtes mort",respawn:"Retour dans {0} secondes\u2026",respawnShip:"Vous vous r\xE9veillez sur votre navire",dig:"Vous creusez\u2026",found:"Un tr\xE9sor ! Apportez-le au marchand !",carrying:"Tr\xE9sor en main \xB7 E : poser",sold:"Vendu : +{0} pi\xE8ces d'or",merchant:"Marchand",merchantHi:"Oh\xE9, capitaine ! Que puis-je pour vous ?",gotMap:"Nouvelle carte au tr\xE9sor : {0}",noMoreMaps:"Je n'ai plus de cartes, capitaine",notEnough:"Vous n'avez pas assez d'or",restock:"Provisions refaites",lootedSupplies:"Butin : {0} boulets, {1} planches, {2} bananes",bottle:"Une bouteille \xE0 la mer ! Nouvelle carte : {0}",repaired:"Le navire a \xE9t\xE9 r\xE9par\xE9",upgraded:"Am\xE9lioration : {0} (niveau {1})",shopMap:"Carte au tr\xE9sor",shopMapD:"Un X marque l'emplacement du tr\xE9sor.",shopRiddle:"Carte \xE0 \xE9nigme",shopRiddleD:"Pas de X, seulement une \xE9nigme. Un tr\xE9sor une fois et demie plus riche.",shopRepair:"R\xE9paration du navire",shopRepairD:"Chaque trou colmat\xE9, chaque goutte \xE9cop\xE9e.",up0:"Coque renforc\xE9e",up0D:"Trous plus petits, voies d'eau plus lentes.",up1:"Meilleures voiles",up1D:"Un navire plus rapide.",up2:"Canons lourds",up2D:"Explosions plus fortes, chargement plus rapide.",up3:"Cale agrandie",up3D:"Plus de place pour les boulets, les planches et les bananes.",close:"Fermer",maxed:"termin\xE9",shopTip:"Souris ou haut/bas, puis Entr\xE9e. Fermer : E ou \xC9chap.",mapTitle:"Carte marine",noMaps:"Vous n'avez aucune carte au tr\xE9sor. Achetez-en une au marchand !",riddleText:"{0} : depuis le rocher-cr\xE2ne, faites {1} pas vers {2}, et creusez !",dir_N:"le nord",dir_NE:"le nord-est",dir_E:"l'est",dir_SE:"le sud-est",dir_S:"le sud",dir_SW:"le sud-ouest",dir_W:"l'ouest",dir_NW:"le nord-ouest",island:"{0}",outpost:"Comptoir de {0}",cursedWaters:"Eaux maudites",night:"La nuit est tomb\xE9e. Les morts s'\xE9veillent\u2026",day:"Le soleil se l\xE8ve",weather_rain:"Il commence \xE0 pleuvoir",weather_storm:"Une temp\xEAte approche ! Accrochez-vous !",weather_fog:"Un \xE9pais brouillard est tomb\xE9 sur la mer",lightning:"La foudre a frapp\xE9 le m\xE2t !",wind:"Vent",speed:"n\u0153uds",sailFurled:"Ferl\xE9es",sailHalf:"\xC0 moiti\xE9",sailFull:"Pleines",bucketFull:"Seau plein \xB7 Clic gauche : vider",bucketEmpty:"Clic gauche : \xE9coper",repairHint:"Clic gauche (maintenir) : r\xE9parer",digHint:"Clic gauche : creuser",totemLit:"Le totem s'embrase ({0}/{1})",shrineAwake:"Les trois totems br\xFBlent\u2026 la terre tremble !",captainRises:"Le Capitaine Maudit est de retour !",captainSummons:"Le capitaine rel\xE8ve les morts !",captainDefeated:"Le Capitaine Maudit est tomb\xE9 en poussi\xE8re !",captainName:"Le Capitaine Maudit",serpent:"Quelque chose d'immense bouge sous les vagues\u2026",serpentName:"Le Serpent des Abysses",serpentAttack:"Le serpent attaque ! Accrochez-vous !",serpentGone:"Le serpent est retourn\xE9 dans les abysses",serpentSlain:"Vous avez vaincu le Serpent des Abysses !",welcome:"Capitaine ! D\xE9ferlez les voiles, levez l'ancre et prenez la barre ! Maintenez Tab pour consulter votre carte au tr\xE9sor."}},Hs=["hu","en","fr"],Ud={hu:"Magyar",en:"English",fr:"Fran\xE7ais"},$n="hu";try{let s=localStorage.getItem("deadwake.lang");if(Hs.includes(s))$n=s;else{let t=(navigator.language||"").slice(0,2);Hs.includes(t)&&($n=t)}}catch{}function sn(){return $n}function Nd(s){$n=s;try{localStorage.setItem("deadwake.lang",s)}catch{}}function Q(s,...t){let e=zd[$n][s]??zd.en[s]??s;return typeof e=="string"&&t.forEach((i,n)=>{e=e.split("{"+n+"}").join(i)}),e}function Zn(s){if(!s)return"";let t=($n==="hu"?Gh:$n==="fr"?fd:dd)[s.id%Gh.length];return s.kind==="outpost"?Q("outpost",t):Q("island",t)}var Yh=s=>String(s).replace(/[&<>]/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;"})[t]);function Fd(s,t,e=[]){let i=e.map(n=>n&&typeof n=="object"?n.k?Q(n.k):n.isl!==void 0?Zn(s.world.islands[n.isl]):"":n);return Q(t,...i)}var Ly=`
  <div class="under"></div><div class="vignette"></div><div class="hurt"></div>
  <div class="cross"></div>
  <div class="compass"></div>
  <div class="gold"></div>
  <div class="boss"><div class="bname"></div><div class="bbar"><div class="bfill"></div></div></div>
  <div class="place"></div>
  <div class="toasts"></div>
  <div class="prompt"></div>
  <div class="shelp"></div>
  <div class="hp"><div class="hpfill"></div></div>
  <div class="tools"></div>
  <div class="ship"></div>
  <div class="dead"></div>
  <div class="ov chart"><canvas></canvas></div>
  <div class="ov tmap"><canvas></canvas><div class="riddle"></div></div>
  <div class="shop"></div>`,la=class{constructor(t,e){this.game=t,this.p=e,this.root=document.createElement("div"),this.root.className="phud",this.root.innerHTML=Ly,document.getElementById("hud").appendChild(this.root),this.q=i=>this.root.querySelector(i),this.el={};for(let i of["under","vignette","hurt","cross","compass","gold","boss","place","toasts","prompt","shelp","hp","tools","ship","dead"])this.el[i]=this.q("."+i);this.el.help=this.el.shelp,this.el.hpfill=this.q(".hpfill"),this.el.bname=this.q(".bname"),this.el.bfill=this.q(".bfill"),this.chart=this.q(".chart"),this.tmap=this.q(".tmap"),this.shop=this.q(".shop"),this.riddleEl=this.q(".riddle"),this.lastPlace=null,this.shopSel=0}destroy(){this.root.remove()}place(t){let e=this.root.style;e.left=t[0]*100+"%",e.width=t[2]*100+"%",e.top=(1-t[1]-t[3])*100+"%",e.height=t[3]*100+"%",this.root.classList.toggle("small",t[3]<.9)}toast(t,e=[],i=""){let n=document.createElement("div");for(n.className="toast "+i,n.textContent=Fd(this.game,t,e),this.el.toasts.appendChild(n),setTimeout(()=>n.classList.add("out"),3800),setTimeout(()=>n.remove(),4600);this.el.toasts.children.length>4;)this.el.toasts.firstChild.remove()}big(t){let e=this.el.place;e.textContent=t,e.classList.remove("show"),e.offsetWidth,e.classList.add("show")}update(){let t=this.game,e=this.p,i=(-e.worldYaw()*180/Math.PI%360+360)%360,n=[],r=sn()==="hu"?["\xC9","\xC9K","K","DK","D","DNy","Ny","\xC9Ny"]:sn()==="fr"?["N","NE","E","SE","S","SO","O","NO"]:["N","NE","E","SE","S","SW","W","NW"];for(let m=0;m<8;m++){let p=m*45-i;for(;p>180;)p-=360;for(;p<-180;)p+=360;Math.abs(p)<75&&n.push(`<span class="${m%2?"mn":"mj"}" style="left:${50+p/1.5}%">${r[m]}</span>`)}let a=(90-t.wind.dir*180/Math.PI+360)%360-i;for(;a>180;)a-=360;for(;a<-180;)a+=360;n.push(`<span class="wind" style="left:${50+Math.max(-74,Math.min(74,a))/1.5}%;transform:translateX(-50%) rotate(${a-90}deg)">\u27A4</span>`),n.push('<span class="tick" style="left:50%"></span>'),this.el.compass.innerHTML=n.join(""),this.el.hpfill.style.width=Math.max(0,e.hp)+"%",this.el.hpfill.className="hpfill"+(e.hp<30?" low":""),this.el.gold.innerHTML=`<b>${t.gold}</b> ${Q("gold")}`;let l=Q("items");this.el.tools.innerHTML=bn.map((m,p)=>{let w="";return m==="pistol"&&(w=` ${e.pistol}/${e.pistolRes}`),m==="plank"&&(w=` \xD7${e.planks}`),m==="bucket"&&e.bucket&&(w=" \u25CF"),`<div class="slot${p===e.item&&!e.carry?" on":""}"><i>${p+1}</i>${Yh(l[p])}${w}</div>`}).join("");let h=t.playerShip;if(h&&!h.dead&&(e.ship===h||t.distToShip(h,e)<80)){let m=Math.round(h.water*100),p=h.sail.h<.15?Q("sailFurled"):h.sail.h<.75?Q("sailHalf"):Q("sailFull");this.el.ship.style.display="block",this.el.ship.innerHTML=`
        <div class="row"><span>${Q("water")}</span><div class="bar"><div class="fill water" style="width:${m}%"></div></div></div>
        ${h.leaks>0?`<div class="warn">\u26A0 ${Q("leak")}</div>`:""}
        ${h.fires.size>0?`<div class="warn fire">\u{1F525} ${Q("fire")}</div>`:""}
        <div class="row small"><span>${Q("balls")}: <b>${h.ammo}</b></span><span>${Q("planks")}: <b>${h.planks}</b></span><span>${Q("food")}: <b>${h.food}</b></span></div>
        <div class="row small"><span>${Q("st_sails")}: <b>${p}</b></span><span>${(h.speed*1.94).toFixed(1)} ${Q("speed")}</span>${h.anchor?"<span>\u2693</span>":""}</div>`}else this.el.ship.style.display="none";let c=t.skeletons.find(m=>m.kind==="captain"&&m.alive&&m.worldPos().distanceTo(e.worldPos())<70)||t.serpents.find(m=>m.alive);c?(this.el.boss.style.display="block",this.el.bname.textContent=Q(c.segs?"serpentName":"captainName"),this.el.bfill.style.width=Math.max(0,c.hp/c.max*100)+"%"):this.el.boss.style.display="none";let u="",d="";if(!(e.dead>0||e.ui))if(e.station){let m=e.station;d=m.type==="helm"?Q("helmHelp"):m.type==="sails"?Q("sailHelp"):Q("cannonHelp"),m.type==="cannon"&&(u=m.cannon.loaded?Q("loaded"):m.cannon.loading?Q("reloading"):Q("empty")+" \xB7 R"),e.input.kind==="pad"&&(d=m.type==="helm"?Q("helmHelpPad"):m.type==="sails"?Q("sailHelpPad"):Q("cannonHelpPad"))}else e.carry?u=Q("carrying"):e.interactTarget?(u=Fd(t,e.interactTarget.label[0],e.interactTarget.label.slice(1)),e.input.kind==="pad"&&(u=u.replace("[E]","[X]"))):e.item===3&&e.ship&&e.planks>0?(t.frame%10===0&&(this._hole=e.lookHole()),this._hole&&(u=Q("repairHint"))):e.item===4?u=e.bucket?Q("bucketFull"):e.ship&&e.ship.water>.02?Q("bucketEmpty"):"":e.item===2&&!e.ship&&t.maps.some(m=>Math.hypot(m.dig.x-e.pos.x,m.dig.z-e.pos.z)<30)&&(u=Q("digHint"));e.repairing&&(u=Q("repairHint")),this.el.prompt.textContent=u,this.el.prompt.style.opacity=u?1:0,this.el.help.textContent=d,this.el.help.style.opacity=d?1:0,this.el.cross.style.display=e.station&&e.station.type!=="cannon"?"none":"block",this.el.under.style.opacity=e.under?1:0,this.el.hurt.style.opacity=e.hurtT>0?Math.min(1,e.hurtT*2.5):e.hp<30?.35:0,this.el.vignette.style.opacity=(t.cursed||0)*.9,e.dead>0?(this.el.dead.style.display="flex",this.el.dead.innerHTML=`<h1>${Q("youDied")}</h1><p>${Q("respawn",Math.ceil(e.dead))}</p>`):this.el.dead.style.display="none";let f=e.worldPos(),g=t.world.islandAt(f.x,f.z,30),x=g||(t.cursed>.5?"cursed":null);x!==this.lastPlace&&(this.lastPlace=x,x==="cursed"?this.big(Q("cursedWaters")):x&&(this.big(Zn(x)),x.discovered=!0)),e.ui==="shop"&&this.updateShop()}drawChart(){let t=this.game,e=this.chart.querySelector("canvas"),i=e.getContext("2d"),n=e.width=e.height=512;i.imageSmoothingEnabled=!1,i.fillStyle="#d9c39a",i.fillRect(0,0,n,n);let r=(l=>()=>(l=l*16807%2147483647)/2147483647)(7);for(let l=0;l<1800;l++)i.fillStyle=`rgba(120,90,50,${r()*.08})`,i.fillRect(r()*n|0,r()*n|0,2,2);i.strokeStyle="rgba(90,60,30,0.15)";for(let l=0;l<=8;l++)i.beginPath(),i.moveTo(l*n/8,0),i.lineTo(l*n/8,n),i.moveTo(0,l*n/8),i.lineTo(n,l*n/8),i.stroke();let o=n/ze;for(let l of t.world.cursedZones)i.fillStyle="rgba(40,90,60,0.22)",i.beginPath(),i.arc(l.x*o,l.y*o,l.r*o,0,7),i.fill();for(let l of t.world.wrecks)l.seen&&(i.fillStyle="#5a3a1a",i.font="12px monospace",i.textAlign="center",i.fillText("\u2693",l.x*o,l.z*o+4));for(let l of t.world.islands)l.chart||(l.chart=$h(l,1/6.25)),i.globalAlpha=l.discovered?1:.55,i.drawImage(l.chart,Math.round(l.x0*o),Math.round(l.z0*o)),i.globalAlpha=1,l.discovered&&(i.font='bold 11px "Pixelify Sans", monospace',i.fillStyle="#3a2410",i.textAlign="center",i.fillText(Zn(l),l.cx*o,(l.cz+l.r)*o+12)),t.maps.some(h=>h.isl===l)&&(i.fillStyle="#a01818",i.font="bold 16px monospace",i.textAlign="center",i.fillText("\u2715",l.cx*o,l.cz*o+5));let a=(l,h)=>{i.save(),i.translate(l.x*o,l.z*o),i.rotate(-l.yaw),i.fillStyle=h,i.beginPath(),i.moveTo(7,0),i.lineTo(-5,4),i.lineTo(-5,-4),i.closePath(),i.fill(),i.restore()};for(let l of t.ships)!l.dead&&l!==t.playerShip&&l.style!=="player"&&t.distToShip(l,this.p)<500&&a(l,l.style==="ghost"?"#1a8a5a":"#202020");t.playerShip&&!t.playerShip.dead&&a(t.playerShip,"#b8301e");for(let l of t.players){let h=l.worldPos();i.fillStyle=l===this.p?"#1a4ab8":"#4a8ad8",i.fillRect(h.x*o-2,h.z*o-2,4,4)}i.fillStyle="#5a3a1a",i.font="bold 14px monospace",i.textAlign="center",i.fillText(sn()==="hu"?"\xC9":"N",n-30,26),i.fillRect(n-31,30,2,20)}showChart(t){this.chart.style.display=t?"flex":"none",t&&this.drawChart()}showTreasure(t){let e=this.game;if(this.tmap.style.display=t?"flex":"none",!t)return;let i=this.tmap.querySelector("canvas"),n=i.getContext("2d"),r=360;i.width=r,i.height=r,n.fillStyle="#e2cc9c",n.fillRect(0,0,r,r);for(let h=0;h<900;h++)n.fillStyle=`rgba(120,90,50,${Math.random()*.1})`,n.fillRect(Math.random()*r|0,Math.random()*r|0,2,2);let o=this.p.worldPos(),a=[...e.maps].sort((h,c)=>Math.hypot(h.isl.cx-o.x,h.isl.cz-o.z)-Math.hypot(c.isl.cx-o.x,c.isl.cz-o.z))[0];if(n.textAlign="center",n.fillStyle="#3a2410",this.riddleEl.textContent="",!a){n.font='15px "Pixelify Sans", monospace',Dy(n,Q("noMaps"),r/2,r/2-20,r-40,20);return}let l=a.isl;if(a.riddle)l.tmapR||(l.tmapR=$h(l,Math.min(2,220/l.w),!0)),n.globalAlpha=.85,n.drawImage(l.tmapR,(r-l.tmapR.width)/2,(r-l.tmapR.height)/2+20),n.globalAlpha=1,n.font='bold 18px "Pixelify Sans", monospace',n.fillText(Zn(l),r/2,28),this.riddleEl.textContent=Q("riddleText",Zn(l),a.riddle.steps,Q("dir_"+a.riddle.dir));else{l.tmap||(l.tmap=$h(l,Math.min(2,260/l.w)));let h=Math.min(2,260/l.w),c=(r-l.tmap.width)/2,u=(r-l.tmap.height)/2+10;n.drawImage(l.tmap,c,u);let d=c+(a.dig.x-l.x0)*h,f=u+(a.dig.z-l.z0)*h;n.strokeStyle="#a01818",n.lineWidth=4,n.beginPath(),n.moveTo(d-9,f-9),n.lineTo(d+9,f+9),n.moveTo(d+9,f-9),n.lineTo(d-9,f+9),n.stroke(),n.font='bold 18px "Pixelify Sans", monospace',n.fillText(Zn(l),r/2,28)}e.maps.length>1&&(n.font="12px monospace",n.fillText(`+${e.maps.length-1}`,r-24,r-14)),n.fillStyle="#5a3a1a",n.font="bold 13px monospace",n.fillText(sn()==="hu"?"\xC9":"N",r-22,24),n.fillRect(r-23,28,2,14)}shopItems(){let t=this.game,e=[{id:"map",name:Q("shopMap"),desc:Q("shopMapD")},{id:"riddle",name:Q("shopRiddle"),desc:Q("shopRiddleD")},{id:"repair",name:Q("shopRepair"),desc:Q("shopRepairD")}];for(let i=0;i<4;i++)e.push({id:"up"+i,name:`${Q("up"+i)} ${"\u2605".repeat(t.upgrades[i])}${"\u2606".repeat(2-t.upgrades[i])}`,desc:Q("up"+i+"D")});return e.push({id:"close",name:Q("close"),desc:""}),e}openShop(){let t=this.p;t.ui="shop",this.shopSel=0,this.shop.style.display="flex",t.input.kind==="km"&&ye.unlock(),this.renderShop(),_t.play("ui",1)}closeShop(){this.p.ui=null,this.shop.style.display="none",this.p.input.kind==="km"&&this.game.state==="play"&&ye.lock()}renderShop(){let t=this.game,e=this.shopItems();this.shop.innerHTML=`<div class="panel"><h2>${Q("merchant")}</h2><p class="hi">${Q("merchantHi")}</p><div class="gold2">${Q("gold")}: <b>${t.gold}</b></div>
      ${e.map((i,n)=>{let r=i.id==="close"?null:t.priceOf(i.id),o=i.id!=="close"&&(r===null||r>t.gold);return`<button data-i="${n}" class="${n===this.shopSel?"sel":""} ${o?"dis":""}"><span class="n">${Yh(i.name)}</span><span class="pr">${r===null?i.id==="close"?"":Q("maxed"):r+" "+Q("goldShort")}</span><span class="d">${Yh(i.desc)}</span></button>`}).join("")}
      <div class="tip">${Q("shopTip")}</div></div>`,this.shop.querySelectorAll("button").forEach(i=>{i.onclick=()=>{this.shopSel=+i.dataset.i,this.shopBuy()},i.onmouseenter=()=>{this.shopSel=+i.dataset.i,this.shop.querySelectorAll("button").forEach(n=>n.classList.toggle("sel",n===i))}})}shopBuy(){let t=this.shopItems()[this.shopSel];if(t.id==="close"){this.closeShop();return}this.game.act(this.p,{a:"buy",what:t.id}),setTimeout(()=>{this.p.ui==="shop"&&this.renderShop()},80)}updateShop(){let t=this.p.input.menuNav(),e=this.shopItems();if(t.back||this.p.input.use()){this.closeShop();return}t.up&&(this.shopSel=(this.shopSel+e.length-1)%e.length,this.renderShop(),_t.play("ui",.5)),t.down&&(this.shopSel=(this.shopSel+1)%e.length,this.renderShop(),_t.play("ui",.5)),t.ok&&this.shopBuy(),this.game.frame%30===0&&this.renderShop()}};function $h(s,t,e){let i=Math.max(1,Math.round(s.w*t)),n=Math.max(1,Math.round(s.h*t)),r=document.createElement("canvas");r.width=i,r.height=n;let o=r.getContext("2d"),a=o.createImageData(i,n);for(let l=0;l<n;l++)for(let h=0;h<i;h++){let c=Math.min(s.h-1,Math.floor(l/t))*s.w+Math.min(s.w-1,Math.floor(h/t)),u=s.hm[c],d=s.f[c],f=null;if(u>=.5?f=e?[170,140,100]:u<=1.5?[214,190,130]:u>=9?[120,112,100]:s.kind==="cursed"?[90,100,80]:[110,150,80]:d>-.15&&!e&&(f=[150,180,170]),!f)continue;let g=(l*i+h)*4;a.data[g]=f[0],a.data[g+1]=f[1],a.data[g+2]=f[2],a.data[g+3]=255}if(o.putImageData(a,0,0),s.landmark&&e){let l=(s.landmark.x-s.x0)*t,h=(s.landmark.z-s.z0)*t;o.fillStyle="#3a2410",o.font="bold 16px monospace",o.textAlign="center",o.fillText("\u2620",l,h+6)}return r}function Dy(s,t,e,i,n,r){let o=t.split(" "),a="";for(let l of o){let h=a?a+" "+l:l;s.measureText(h).width>n&&a?(s.fillText(a,e,i),i+=r,a=l):a=h}s.fillText(a,e,i)}var ha="deadwake.save.v1",Li={exists(){try{return!!localStorage.getItem(ha)}catch{return!1}},load(){try{let s=localStorage.getItem(ha);return s?JSON.parse(s):null}catch{return null}},clear(){try{localStorage.removeItem(ha)}catch{}},store(s){if(!s.mode||s.mode==="client"||!s.world)return;let t=s.world,e=s.playerShip,i={v:1,t:Date.now(),gold:s.gold,up:s.upgrades,hour:+s.hour.toFixed(2),stats:s.stats,maps:s.mapsNet(),dug:t.islands.map(n=>n.digs.map(r=>r.dug?1:0)),disc:t.islands.filter(n=>n.discovered).map(n=>n.id),cap:t.islands.filter(n=>n.captainDone).map(n=>n.id),loose:t.islands.filter(n=>n.looseTaken).map(n=>n.id),wrecks:t.wrecks.map(n=>n.spawned?1:0),ship:e?{ammo:e.ammo,planks:e.planks,food:e.food}:null};try{localStorage.setItem(ha,JSON.stringify(i))}catch{}},apply(s,t){let e=s.world;s.gold=t.gold||0,s.upgrades=t.up||[0,0,0,0],s.hour=t.hour??9,s.stats=t.stats||s.stats,(t.dug||[]).forEach((i,n)=>{let r=e.islands[n];r&&i.forEach((o,a)=>{r.digs[a]&&(r.digs[a].dug=!!o)})});for(let i of t.disc||[])e.islands[i]&&(e.islands[i].discovered=!0);for(let i of t.cap||[])e.islands[i]&&(e.islands[i].captainDone=!0);for(let i of t.loose||[])e.islands[i]&&(e.islands[i].looseTaken=!0);(t.wrecks||[]).forEach((i,n)=>{e.wrecks[n]&&i&&(e.wrecks[n].spawned=!0)}),s.maps=[];for(let[i,n,r,o]of t.maps||[]){let a=e.islands[i];!a||!a.digs[n]||a.digs[n].dug||s.maps.push({isl:a,dig:a.digs[n],hits:0,riddle:r>=0?{steps:r,dir:o}:null})}s.maps.length||s.giveMap(!0),t.ship&&s.playerShip&&Object.assign(s.playerShip,t.ship)}};var ky="https://unpkg.com/peerjs@1.5.4/dist/peerjs.min.js",Od="deadwake-r-",Ar=null;function Bd(){return window.Peer?Promise.resolve():Ar||(Ar=new Promise((s,t)=>{let e=document.createElement("script");e.src=ky,e.onload=s,e.onerror=()=>{Ar=null,t(new Error("PeerJS"))},document.head.appendChild(e)}),Ar)}var zy=()=>{let s="ABCDEFGHJKLMNPQRSTUVWXYZ23456789",t="";for(let e=0;e<5;e++)t+=s[Math.floor(Math.random()*s.length)];return t},Vs=s=>Math.round(s*100)/100,ca=class{constructor(t){this.diff=t,this.pend=new Map}set(t,e){this.diff.set(t,e),this.pend.set(t,e)}},Kh={host(s,t,e){Bd().then(()=>{let i=zy(),n=new window.Peer(Od+i);n.on("open",()=>{s.startSession("host");let r=new Zh(s,n,i);s.net=r,t&&t(i),s.sayAll("roomReady",[i],"good")}),n.on("error",r=>{r.type==="unavailable-id"?(n.destroy(),this.host(s,t,e)):e&&e(r.type||r.message)})}).catch(i=>e&&e(i.message))},join(s,t,e){Bd().then(()=>{let i=new window.Peer;i.on("open",()=>{let n=i.connect(Od+t,{reliable:!0}),r=!1;n.on("open",()=>{r=!0,new Jh(s,i,n,t).send({t:"hello",lang:navigator.language||""})}),n.on("error",o=>e&&e(o.message||"conn")),setTimeout(()=>{r||e&&e("timeout")},12e3)}),i.on("error",n=>e&&e(n.type||n.message))}).catch(i=>e&&e(i.message))}},Zh=class{constructor(t,e,i){this.G=t,this.peer=e,this.code=i,this.conns=new Map,this.fxq=[],this.t=0,this.vt=0,this.nextPid=10;for(let n of t.ships)n.grid.log=new Map;e.on("connection",n=>{n.on("open",()=>{if(t.players.length>=4){n.send({t:"full"}),setTimeout(()=>n.close(),500);return}let r=this.nextPid++,o=new Xn(t,r,{color:t.players.length%4});t.players.push(o),t.playerShip&&(o.ship=t.playerShip,o.pos.set(-3,-2.5+19*.25+.02,1.5)),this.conns.set(r,n),n.on("data",a=>this.onData(o,a)),n.on("close",()=>this.drop(r)),n.send({t:"welcome",id:r,full:this.fullState()}),t.sayAll("playerJoined",[t.players.length],"good")})})}close(){try{this.peer.destroy()}catch{}}drop(t){let e=this.G,i=e.playerById(t);if(this.conns.delete(t),!!i){i.station&&(i.station.user=null),i.carry&&i.carry!==!0&&(i.carry.carried=null);for(let n of e.loot)n.carried===i&&(n.carried=null);e.scene.remove(i.avatar.root),e.players.splice(e.players.indexOf(i),1),e.sayAll("playerLeft",[],"")}}send(t){this.broadcast(t)}sendTo(t,e){let i=this.conns.get(t);i&&i.open&&i.send(e)}broadcast(t){for(let e of this.conns.values())e.open&&e.send(t)}queueFx(t){this.fxq.push(t)}onData(t,e){let i=this.G;if(e.t==="p"){t.applyNet(e);return}if(e.t==="act"){i.applyAct(t,e);return}if(e.t==="died"){t.station&&(t.station.user=null);for(let n of i.loot)n.carried===t&&(n.carried=null)}}fullState(){let t=this.G,e=t.world;return{gold:t.gold,hour:t.hour,up:t.upgrades,maps:t.mapsNet(),dug:e.islands.map(i=>i.digs.map(n=>n.dug?1:0)),disc:e.islands.filter(i=>i.discovered).map(i=>i.id),props:e.props.map((i,n)=>i.diff&&i.diff.size||i.looted||i.lit?[n,i.looted?1:0,i.lit?1:0,i.diff?[...i.diff].flat():[]]:null).filter(Boolean),ships:t.ships.map(i=>{let n=[];for(let r=0;r<i.grid.d.length;r++)i.grid.d[r]!==i.grid.orig[r]&&n.push(r,i.grid.d[r]);return[i.netId,n]}),snap:this.snapshot()}}snapshot(){let t=this.G;return{t:"snap",h:Vs(t.hour),w:[Vs(t.wind.dir),Vs(t.wind.str)],we:t.weather.netState(),g:t.gold,ps:t.playerShip?t.playerShip.netId:-1,ships:t.ships.map(e=>e.netState()),pl:t.players.map(e=>e.netState()),sk:t.skeletons.filter(e=>e.alive).map(e=>e.netState()),sh:t.sharks.filter(e=>e.alive).map(e=>e.netState()),se:t.serpents.filter(e=>e.alive).map(e=>e.netState()),lo:t.loot.map(e=>[e.id,e.kind,e.style,e.ship?e.ship.netId:-1,Vs(e.pos.x),Vs(e.pos.y),Vs(e.pos.z),e.carried?e.carried.id??0:0,e.floating?1:0,e.value]),up:t.upgrades}}update(t){let e=this.G;if(!this.conns.size){this.fxq.length=0;for(let i of e.ships)i.grid.log||(i.grid.log=new Map);return}this.t-=t,this.vt-=t;for(let i of e.ships)i.grid.log||(i.grid.log=new Map);for(let i of e.world.props)i.grid&&!(i.grid.log instanceof ca)&&(i.diff=i.diff||new Map,i.grid.log=new ca(i.diff));if(this.vt<=0){this.vt=.1;for(let i of e.ships)i.grid.log&&i.grid.log.size&&(this.broadcast({t:"vox",g:"s"+i.netId,d:[...i.grid.log].flat()}),i.grid.log.clear());e.world.props.forEach((i,n)=>{i.grid&&i.grid.log&&i.grid.log.pend&&i.grid.log.pend.size&&(this.broadcast({t:"vox",g:"p"+n,d:[...i.grid.log.pend].flat()}),i.grid.log.pend.clear())})}if(this.t<=0){this.t=1/12;let i=this.snapshot();this.fxq.length&&(i.fx=this.fxq,this.fxq=[]),this.broadcast(i)}}},Jh=class{constructor(t,e,i,n){this.G=t,this.peer=e,this.conn=i,this.code=n,this.t=0,this.ready=!1,i.on("data",r=>this.onData(r)),i.on("close",()=>{t.sayAll("disconnected",[],"bad"),setTimeout(()=>t.backToTitle(),2500)})}close(){try{this.peer.destroy()}catch{}}send(t){this.conn.open&&this.conn.send(t)}sendTo(){}broadcast(){}queueFx(){}onData(t){let e=this.G;switch(t.t){case"full":e.menu.status(e.menu&&"Full");break;case"welcome":{e.startSession("client",{myId:t.id}),e.net=this,this.applyFull(t.full),this.ready=!0;break}case"snap":this.ready&&this.applySnap(t);break;case"vox":this.applyVox(t);break;case"say":for(let i of e.huds)i.toast(t.k,t.a,t.c);break;case"hurt":for(let i of e.localPlayers)i.hurt(t.n,t.src);break;case"ammo":for(let i of e.localPlayers)i.pistolRes=15;break;case"maps":this.applyMaps(t.m);break;case"looted":e.world.props[t.pi]&&(e.world.props[t.pi].looted=!0);break;case"lit":e.world.props[t.pi]&&(e.world.props[t.pi].lit=!0);break}}applyMaps(t){let e=this.G.world;this.G.maps=t.map(([i,n,r,o])=>({isl:e.islands[i],dig:e.islands[i].digs[n],hits:0,riddle:r>=0?{steps:r,dir:o}:null})).filter(i=>i.isl&&i.dig)}applyFull(t){let e=this.G,i=e.world;e.gold=t.gold,e.hour=t.hour,e.upgrades=t.up,this.applyMaps(t.maps),t.dug.forEach((n,r)=>n.forEach((o,a)=>{i.islands[r].digs[a]&&(i.islands[r].digs[a].dug=!!o)}));for(let n of t.disc)i.islands[n].discovered=!0;for(let[n,r,o,a]of t.props){let l=i.props[n];if(l){l.looted=!!r,l.lit=!!o,l.diff=new Map;for(let h=0;h<a.length;h+=2)l.diff.set(a[h],a[h+1]);if(l.grid)for(let[h,c]of l.diff)l.grid.setIdx(h,c)}}this.pendingShipDiffs=new Map(t.ships.map(([n,r])=>[n,r])),this.applySnap(t.snap)}applyVox(t){let e=this.G;if(t.g[0]==="s"){let i=e.shipById(+t.g.slice(1));if(!i)return;for(let n=0;n<t.d.length;n+=2)i.grid.setIdx(t.d[n],t.d[n+1])}else{let i=e.world.props[+t.g.slice(1)];if(!i)return;i.diff=i.diff||new Map;for(let n=0;n<t.d.length;n+=2)i.diff.set(t.d[n],t.d[n+1]),i.grid&&i.grid.setIdx(t.d[n],t.d[n+1]);i.grid&&t.d.length&&e.fx.burst(new v(i.x,i.y+1,i.z),4,"dust")}}applySnap(t){let e=this.G;e.hour=t.h,e.wind.dir=t.w[0],e.wind.str=t.w[1],e.gold=t.g,e.upgrades=t.up,e.weather.kind!==t.we[0]&&e.weather.set(t.we[0]);let i=new Set;for(let o of t.ships){i.add(o.id);let a=e.shipById(o.id);if(!a){a=new Mi(e,o.st,o.x,o.z,o.yaw,{netId:o.id,remote:!0}),e.scene.add(a.root),e.ships.push(a);let l=this.pendingShipDiffs&&this.pendingShipDiffs.get(o.id);if(l){for(let h=0;h<l.length;h+=2)a.grid.setIdx(l[h],l[h+1]);this.pendingShipDiffs.delete(o.id)}}a.applyNet(o)}for(let o of[...e.ships])i.has(o.netId)||e.removeShip(o);e.playerShip=e.shipById(t.ps);let n=new Set;for(let o of t.pl){if(n.add(o.id),e.localPlayers.some(l=>l.id===o.id))continue;let a=e.playerById(o.id);a||(a=new Xn(e,o.id,{color:o.col}),e.players.push(a)),a.applyNet(o)}for(let o of[...e.players])!o.local&&!n.has(o.id)&&(e.scene.remove(o.avatar.root),e.players.splice(e.players.indexOf(o),1));this.syncList(e.skeletons,t.sk,o=>new Ns(e,o[3],o[5],["skeleton","cursed","captain"][o[1]],{id:o[0],remote:!0,ship:o[2]>=0?e.shipById(o[2]):null,y:o[4]}),(o,a)=>{o.ship=a[2]>=0?e.shipById(a[2]):null,o.net={p:new v(a[3],a[4],a[5]),y:a[6],a:a[7],r:a[8],sp:a[9]},o.hp=a[10],o.max=a[11]}),this.syncList(e.sharks,t.sh,o=>new Fs(e,null,{id:o[0],remote:!0}),(o,a)=>{o.net={p:new v(a[1],a[2],a[3]),y:a[4]},o.inited||(o.pos.copy(o.net.p),o.inited=!0)}),this.syncList(e.serpents,t.se,o=>new Os(e,o[1]>=0?e.shipById(o[1]):null,{id:o[0],remote:!0}),(o,a)=>{o.net={h:new v(a[2],a[3],a[4])},o.hp=a[5],o.max=a[6]});let r=new Set;for(let o of t.lo){r.add(o[0]);let a=e.loot.find(c=>c.id===o[0]),l=o[3]>=0?e.shipById(o[3]):null;a||(a=e.spawnLoot(o[1],new v(o[4],o[5],o[6]),l,{id:o[0],style:o[2],value:o[9],remote:!0})),a.ship!==l&&e.setLootFrame(a,l),a.net=new v(o[4],o[5],o[6]),a.floating=!!o[8],a.value=o[9];let h=o[7]?e.playerById(o[7]):null;a.carried=h;for(let c of e.localPlayers)h===c?c.carry=a:c.carry===a&&o[7]&&h!==c&&(c.carry=null)}for(let o of[...e.loot])r.has(o.id)||e.removeLoot(o);for(let o of t.fx||[])this.applyFx(o)}syncList(t,e,i,n){let r=new Set;for(let o of e){r.add(o[0]);let a=t.find(l=>l.id===o[0]);a||(a=i(o),t.push(a)),n(a,o)}for(let o=t.length-1;o>=0;o--)if(!r.has(t[o].id)){let a=t[o];a.die&&a.fig,a.remove(),t.splice(o,1)}}applyFx(t){let e=this.G,i=t[0];if(i==="#ball"){e.spawnBall(new v(t[2],t[3],t[4]),new v(t[5],t[6],t[7]),null,{id:t[1],ghost:!!t[8],small:!!t[9],visual:!0});return}if(i==="#end"){let n=e.balls.find(r=>r.id===t[1]);n&&(n.done=!0,e.scene.remove(n.mesh));return}if(i==="#bolt"){e.weather.lightning();return}if(i[0]==="@"){let n=t[5]?new v(t[1],t[2],t[3]):null;_t.play(i.slice(1),t[4],n?e.distToCam(n):0);return}e.fx.burst(new v(t[1],t[2],t[3]),t[4],i,t[5]||{})}update(t){if(this.t-=t,this.t<=0&&this.ready){this.t=1/15;for(let e of this.G.localPlayers)this.send({t:"p",...e.netState()})}}};var Rr=s=>String(s).replace(/[&<>"]/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[t]),ua=class{constructor(t){this.game=t,this.el=document.getElementById("menu"),this.mode=null,this.sel=0}hide(){this.el.style.display="none",this.mode=null}show(t){this.el.style.display="flex",this.el.innerHTML=`<div class="panel">${t}</div>`,this.buttons=[...this.el.querySelectorAll("button")],this.sel=Math.min(this.sel,this.buttons.length-1),this.buttons.forEach((e,i)=>{e.onmouseenter=()=>{this.sel=i,this.focus()},e.onclick=n=>{n.stopPropagation(),_t.init(),_t.play("ui",1),this.handle(e.dataset.a,e)}}),this.focus()}focus(){this.buttons.forEach((t,e)=>t.classList.toggle("sel",e===this.sel))}settingsHtml(){let t=this.game,e=t.settings,i=["low","med","high"],n=["easy","normal","hard"];return`<div class="opts">
      <button data-a="lang">${Q("lang")}: ${Ud[sn()]}</button>
      <button data-a="quality">${Q("quality")}: ${Q(i[e.quality])}</button>
      <button data-a="sens">${Q("sens")}: ${e.sens.toFixed(1)}</button>
      <button data-a="invert">${Q("invert")}: ${e.invert?Q("on"):Q("off")}</button>
      <button data-a="dither">${Q("pixelFilter")}: ${e.dither?Q("on"):Q("off")}</button>
      <button data-a="shadows">${Q("shadows")}: ${e.shadows?Q("on"):Q("off")}</button>
      <button data-a="difficulty">${Q("difficulty")}: ${Q(n[e.difficulty])}</button>
    </div>`}helpHtml(){return this.showHelp?`<button data-a="help">${Q("controlsHide")}</button><div class="help"><h3>${Q("helpTitle")}</h3>${Q("help").map(([t,e])=>`<div><kbd>${Rr(t)}</kbd><span>${Rr(e)}</span></div>`).join("")}
      <h3>${Q("padTitle")}</h3>${Q("padHelp").map(([t,e])=>`<div><kbd>${Rr(t)}</kbd><span>${Rr(e)}</span></div>`).join("")}</div>`:`<button data-a="help">${Q("controlsBtn")}</button>`}title(){this.mode="title",this.sel=0;let t=Li.exists();this.show(`<h1 class="logo">DEADWAKE</h1><div class="sub">${Q("subtitle")}</div><div class="beta">${Q("beta")}</div>
      ${t?`<button data-a="continue" class="main">${Q("continue")}</button>`:""}
      <button data-a="new" class="${t?"":"main"}">${Q("newGame")}</button>
      <button data-a="split">${Q("splitScreen")}</button>
      <button data-a="online">${Q("online")}</button>
      ${this.settingsHtml()}
      ${this.helpHtml()}`)}pause(){this.mode="pause",this.sel=0;let t=this.game,e=t.net&&t.isHost?`<div class="room">${Q("roomCode")}: <b>${Rr(t.net.code)}</b> \xB7 ${Q("crew")}: ${t.players.length}</div>`:"";this.show(`<h2>${t.mode==="host"||t.mode==="client"?Q("menu"):Q("paused")}</h2>${e}
      <button data-a="resume" class="main">${Q("resume")}</button>
      ${this.settingsHtml()}
      <button data-a="title">${Q("toTitle")}</button>
      ${this.helpHtml()}`)}online(){this.mode="online",this.sel=0,this.show(`<h2>${Q("online")}</h2><p class="note">${Q("onlineNote")}</p>
      <button data-a="host" class="main">${Q("hostGame")}</button>
      <div class="join"><input id="joincode" maxlength="6" placeholder="${Q("codePlaceholder")}" autocomplete="off"><button data-a="join">${Q("joinGame")}</button></div>
      <div class="status" id="netstatus"></div>
      <button data-a="back">${Q("back")}</button>`)}status(t){let e=document.getElementById("netstatus");e&&(e.textContent=t)}handle(t){let e=this.game,i=e.settings;switch(t){case"continue":e.startSession("solo");break;case"new":if(Li.exists()&&!this.confirmNew){this.confirmNew=!0;let n=this.buttons.find(r=>r.dataset.a==="new");n&&(n.textContent=Q("confirmNew"));return}this.confirmNew=!1,Li.clear(),e.startSession("solo",{fresh:!0});break;case"split":if(ye.padCount()===0){let n=this.buttons.find(r=>r.dataset.a==="split");if(n&&!this.padWarned){this.padWarned=!0,n.textContent=Q("needPad");return}}e.startSession("split");break;case"online":this.online();break;case"help":this.showHelp=!this.showHelp,this.refresh();break;case"back":this.title();break;case"host":this.status(Q("connecting")),Kh.host(e,n=>{this.status(Q("roomReady",n))},n=>this.status(Q("netError")+" "+n));break;case"join":{let n=(document.getElementById("joincode").value||"").trim().toUpperCase();if(n.length<4){this.status(Q("codePlaceholder"));return}this.status(Q("connecting")),Kh.join(e,n,r=>this.status(Q("netError")+" "+r));break}case"resume":e.resume();break;case"title":e.backToTitle();break;case"lang":Nd(Hs[(Hs.indexOf(sn())+1)%Hs.length]),document.documentElement.lang=sn(),this.refresh();break;case"quality":i.quality=(i.quality+1)%3,e.applySettings(),this.refresh();break;case"sens":i.sens=i.sens>=2.5?.4:+(i.sens+.3).toFixed(1),e.applySettings(),this.refresh();break;case"invert":i.invert=!i.invert,e.applySettings(),this.refresh();break;case"dither":i.dither=!i.dither,e.applySettings(),this.refresh();break;case"shadows":i.shadows=!i.shadows,e.applySettings(),this.refresh();break;case"difficulty":i.difficulty=(i.difficulty+1)%3,e.applySettings(),e.applyUpgrades(),this.refresh();break}}refresh(){let t=this.sel;this.mode==="title"?this.title():this.mode==="pause"&&this.pause(),this.sel=t,this.focus()}update(){if(!this.mode||!this.buttons||!this.buttons.length)return;let t=ye.anyPadEdge("up")||ye.hit("ArrowUp"),e=ye.anyPadEdge("down")||ye.hit("ArrowDown");if(t&&(this.sel=(this.sel+this.buttons.length-1)%this.buttons.length,this.focus(),_t.play("ui",.4)),e&&(this.sel=(this.sel+1)%this.buttons.length,this.focus(),_t.play("ui",.4)),ye.anyPadEdge("a")||ye.hit("Enter")&&document.activeElement?.tagName!=="INPUT"){let i=this.buttons[this.sel];i&&i.click()}ye.anyPadEdge("b")&&this.mode==="online"&&this.title()}};var Uy="varying vec2 vUv; void main(){ vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }",Ny=`
uniform sampler2D tDiffuse; uniform vec2 uRes; uniform float uDither; uniform float uLevels; uniform float uFlash;
varying vec2 vUv;
float bayer(vec2 p){
  int x = int(mod(p.x, 4.0)), y = int(mod(p.y, 4.0)); int i = x + y * 4;
  float m[16]; m[0]=0.;m[1]=8.;m[2]=2.;m[3]=10.;m[4]=12.;m[5]=4.;m[6]=14.;m[7]=6.;m[8]=3.;m[9]=11.;m[10]=1.;m[11]=9.;m[12]=15.;m[13]=7.;m[14]=13.;m[15]=5.;
  for (int k=0;k<16;k++) if (k==i) return m[k]/16.0 - 0.5;
  return 0.0;
}
void main(){
  vec3 c = linearToOutputTexel(vec4(texture2D(tDiffuse, vUv).rgb, 1.0)).rgb;   // linear -> sRGB
  c += vec3(uFlash);
  if (uDither > 0.0) {
    float d = bayer(floor(vUv * uRes)) * uDither / uLevels;
    c = floor((c + d) * uLevels + 0.5) / uLevels;
  }
  gl_FragColor = vec4(clamp(c, 0.0, 1.0), 1.0);
}`,da=class{constructor(t){this.r=new Co({canvas:t,antialias:!1,powerPreference:"high-performance"}),this.r.setPixelRatio(1),this.r.outputColorSpace=Be,this.r.shadowMap.enabled=!0,this.r.shadowMap.type=Su,this.r.autoClear=!1,this.rt=new Ri(4,4,{depthBuffer:!0,magFilter:Ce,minFilter:Ce,type:Vn}),this.postMat=new He({uniforms:{tDiffuse:{value:this.rt.texture},uRes:{value:new ht},uDither:{value:1},uLevels:{value:28},uFlash:{value:0}},vertexShader:Uy,fragmentShader:Ny,depthTest:!1,depthWrite:!1}),this.postScene=new Cs,this.postCam=new Rs(-1,1,1,-1,0,1),this.postScene.add(new Nt(new Ci(2,2),this.postMat)),this.w=4,this.h=4}setSize(t,e){this.w=t,this.h=e,this.r.setSize(t,e,!1),this.rt.setSize(t,e),this.postMat.uniforms.uRes.value.set(t,e)}setShadows(t,e){this.r.shadowMap.enabled=t,this.shadowSize=e}begin(){this.r.setRenderTarget(this.rt),this.r.setClearColor(0,1),this.r.clear()}view(t,e,i){let n=Math.round(i[0]*this.w),r=Math.round(i[1]*this.h),o=Math.round(i[2]*this.w),a=Math.round(i[3]*this.h);this.rt.viewport.set(n,r,o,a),this.rt.scissor.set(n,r,o,a),this.rt.scissorTest=!0,this.r.setRenderTarget(this.rt),this.r.render(t,e)}end(t,e=0){this.rt.scissorTest=!1,this.postMat.uniforms.uDither.value=t?1:0,this.postMat.uniforms.uFlash.value=e,this.r.setRenderTarget(null),this.r.setViewport(0,0,this.w,this.h),this.r.render(this.postScene,this.postCam)}};var jh={clear:{amp:1,cover:0,wind:1,fog:1,rain:0},rain:{amp:1.3,cover:.55,wind:1.15,fog:.75,rain:.6},storm:{amp:1.95,cover:.92,wind:1.45,fog:.5,rain:1},fog:{amp:.8,cover:.35,wind:.6,fog:.28,rain:0}},fa=class{constructor(t){this.game=t,this.reset();let e=1600,i=new Float32Array(e*6),n=new Float32Array(e*2);for(let o=0;o<e;o++){let a=(Math.random()-.5)*50,l=Math.random()*30,h=(Math.random()-.5)*50;i.set([a,l,h,a,l,h],o*6),n[o*2]=0,n[o*2+1]=1}let r=new Ee;r.setAttribute("position",new Le(i,3)),r.setAttribute("e",new Le(n,1)),this.rainMat=new He({transparent:!0,depthWrite:!1,uniforms:{uTime:{value:0},uCam:{value:new v},uAmt:{value:0},uWind:{value:new ht},uCol:{value:new mt("#9ab0c8")}},vertexShader:`attribute float e; uniform float uTime; uniform vec3 uCam; uniform vec2 uWind; varying float vA;
        void main(){ vec3 p = position; float y = mod(p.y - uTime * 22.0, 30.0) - 12.0; vec2 off = uWind * (y * 0.06);
          vec3 w = vec3(mod(p.x - uCam.x + 25.0, 50.0) - 25.0 + uCam.x + off.x, uCam.y + y + e * 0.7, mod(p.z - uCam.z + 25.0, 50.0) - 25.0 + uCam.z + off.y);
          vA = 1.0; gl_Position = projectionMatrix * viewMatrix * vec4(w, 1.0); }`,fragmentShader:"uniform float uAmt; uniform vec3 uCol; varying float vA; void main(){ gl_FragColor = linearToOutputTexel(vec4(uCol, 0.55 * uAmt)); }"}),this.rainMesh=new Is(r,this.rainMat),this.rainMesh.frustumCulled=!1,t.scene.add(this.rainMesh)}reset(){this.kind="clear",this.t=400+Math.random()*300,this.cur={...jh.clear},this.flash=0,this.bolt=8,this.rain=0,this.cover=0}windMul(){return this.cur.wind}fogMul(){return this.cur.fog}set(t){this.kind=t}update(t){let e=this.game;if(this.t-=t,this.t<=0){let i=e.cursed||0;if(this.kind!=="clear")this.kind="clear",this.t=360+Math.random()*360;else{let n=Math.random();this.kind=n<.25+i*.3?"storm":n<.6?"rain":"fog",this.t=120+Math.random()*120,e.sayAll("weather_"+this.kind,[],this.kind==="storm"?"bad":"")}}if(this.updateVisual(t),this.kind==="storm"&&this.cur.cover>.7&&(this.bolt-=t,this.bolt<=0)){this.bolt=4+Math.random()*8,this.lightning();let i=e.playerShip;i&&!i.dead&&Math.random()<.22&&e.later(()=>{if(i.dead)return;let[n,r,o]=[65,92,17];for(let a=0;a<6;a++)i.ignite(n+Math.round((Math.random()-.5)*2),r-a*3,o);i.damageAt(i.grid.toLocal(65,90,17),1.6,1,e),e.sayAll("lightning",[],"bad"),e.flash(i.root.position.clone().add(new v(0,20,0)),"#c8e0ff",12,80,.3)},.15),e.isHost&&e.net&&e.net.queueFx(["#bolt"])}}lightning(){this.flash=.55,_t.play("thunder",1)}updateVisual(t){let e=jh[this.kind]||jh.clear;for(let n in this.cur)this.cur[n]=le(this.cur[n],e[n],Math.min(1,t*.08));br.amp=this.cur.amp,this.rain=this.cur.rain,this.cover=this.cur.cover,this.flash=Math.max(0,this.flash-t*2.2),this.rainMat.uniforms.uTime.value=this.game.time,this.rainMat.uniforms.uAmt.value=Zt(this.rain,0,1);let i=this.game.wind;this.rainMat.uniforms.uWind.value.set(Math.cos(i.dir)*i.str*6,-Math.sin(i.dir)*i.str*6),this.rainMesh.visible=this.rain>.02}prepare(t){this.rainMat.uniforms.uCam.value.copy(t.position)}tint(t){let e=this.cover;if(e<=.01)return;let i=new mt("#5a6470"),n=new mt("#2a3038");t.top.lerp(n,e*.8),t.hor.lerp(i,e*.75),t.fog.lerp(i,e*.7),t.sea.lerp(new mt("#1a3440"),e*.6),t.amb.multiplyScalar(1-e*.35),t.light*=1-e*.5}netState(){return[this.kind,+this.t.toFixed(0)]}};var pa=class{constructor(t){this.game=t;let e=t.world,i=["grass","flower","flowerY","shell","pebble"],n={};for(let a of i){let l=cd(a);n[a]=l.group.children.find(h=>h.isMesh).geometry}this.sets=[];for(let a of e.islands){let l=tn(1e3+a.id),h={grass:[],flower:[],flowerY:[],shell:[],pebble:[]},c=Math.round(a.r*a.r/6);for(let p=0;p<c;p++){let w=a.x0+l()*a.w,_=a.z0+l()*a.h,y=Math.floor(w-a.x0),R=Math.floor(_-a.z0),A=a.hm[R*a.w+y];if(A<.5)continue;let C=A<=1.5,L=A>=10||a.kind==="rocky"&&A>=6,E;C?E=l()<.6?"shell":"pebble":L?E=l()<.7?"pebble":"grass":E=a.kind==="cursed"?l()<.85?"pebble":"grass":l()<.75?"grass":l()<.5?"flower":"flowerY",!(C&&l()<.7)&&h[E].push([w,A,_,l()*6.28,.32+l()*.2])}let u=[],d=new Xt,f=new si,g=new v,x=new v,m=new v(0,1,0);for(let p of i){let w=h[p];if(!w.length)continue;let _=new Ps(n[p],Bh,w.length);w.forEach((y,R)=>{f.setFromAxisAngle(m,y[3]),g.setScalar(y[4]),x.set(y[0],y[1],y[2]),d.compose(x,f,g),_.setMatrixAt(R,d)}),_.receiveShadow=!0,_.computeBoundingSphere(),t.scene.add(_),u.push(_)}this.sets.push({isl:a,meshes:u})}this.birds=[];let r=new Ae({color:"#f0f0ec"}),o=new Ae({color:"#8a9098"});for(let a=0;a<12;a++){let l=new se,h=new Nt(new Te(.5,.16,.16),r);l.add(h);let c=new se,u=new se,d=new Nt(new Te(.22,.04,.6),o);d.position.z=-.3,c.add(d);let f=new Nt(new Te(.22,.04,.6),o);f.position.z=.3,u.add(f),l.add(c),l.add(u),t.scene.add(l),this.birds.push({g:l,wl:c,wr:u,a:Math.random()*6.28,r:12+Math.random()*30,h:14+Math.random()*16,sp:.15+Math.random()*.2,c:new v,ph:Math.random()*6})}}prepare(t){for(let e of this.sets){let i=Math.hypot(e.isl.cx-t.x,e.isl.cz-t.z)-e.isl.r<220;for(let n of e.meshes)n.visible=i}}update(t){let e=this.game,i=e.playerShip||e.titleShip,n=e.night||0;this.birds.forEach((r,o)=>{if(!r.c.lengthSq()||Math.random()<t*.02)if(o%2===0&&i)r.c.set(i.x,0,i.z);else{let u=i?new v(i.x,0,i.z):new v,d=e.world.nearestIsland(u.x,u.z);d&&r.c.set(d.cx,0,d.cz)}o%2===0&&i&&r.c.lerp(new v(i.x,0,i.z),Math.min(1,t*.5)),r.a+=t*r.sp,r.ph+=t*(6+Math.sin(r.a*3)*3);let a=r.c.x+Math.cos(r.a)*r.r,l=r.c.z+Math.sin(r.a)*r.r,h=r.h+Math.sin(r.a*2)*2;r.g.position.set(a,h,l),r.g.rotation.set(Math.sin(r.a)*.2,-r.a-Math.PI/2,0);let c=Math.sin(r.ph)*.5;r.wl.rotation.x=c,r.wr.rotation.x=-c,r.g.visible=n<.6&&e.weather.kind!=="storm"})}};var ma=new v,Hd={melee(s,t,e){let i=s.eyeWorld(new v),n=s.lookDir(new v),r=!1;for(let o of this.skeletons){if(!o.alive)continue;let a=o.worldPos(new v);a.y+=o.kind==="captain"?1.6:1;let l=a.clone().sub(i);l.length()<t+(o.kind==="captain"?1:.4)&&l.normalize().dot(n)>.55&&(o.damage(e,i),r=!0)}for(let o of this.sharks)o.alive&&o.pos.distanceTo(i)<t+1&&(o.damage(e),r=!0);for(let o of this.serpents)o.alive&&o.hitTest(i.clone().addScaledVector(n,1.5),t)&&(o.damage(e),r=!0);r&&_t.play("slash",1)},shoot(s,t,e){let i=s.eyeWorld(new v),n=s.lookDir(new v);this.fx.burst(i.clone().addScaledVector(n,.8),3,"flash"),this.flash(i.clone().addScaledVector(n,1),"#ffd080",3,10,.08);let r=null,o=t,a=(h,c,u)=>{let d=h.clone().sub(i),f=d.dot(n);if(f<0||f>o)return;d.lengthSq()-f*f<c*c&&(o=f,r=u)};for(let h of this.skeletons)if(h.alive){let c=h.worldPos(new v);c.y+=h.kind==="captain"?1.6:1,a(c,h.kind==="captain"?.9:.55,h)}for(let h of this.sharks)h.alive&&a(h.pos,1,h);for(let h of this.serpents)if(h.alive)for(let c of h.segs)a(c.p,1.4,h);let l=this.rayVoxels(i,n,o);if(l&&l.t<o){this.fx.burst(l.point,5,"dust",{r:.6,g:.5,b:.4});return}if(r)r.damage(r.segs?20:e,i),_t.play("hit",.4);else{let h=i.clone().addScaledVector(n,Math.min(o,60));h.y<Me(h.x,h.z,this.time)+.5&&this.fx.burst(h,4,"splash")}},rayVoxels(s,t,e){let i=null,n=(r,o,a)=>{let l=o(s.clone()),c=o(s.clone().addScaledVector(t,e)).clone().sub(l).normalize(),u=r.toVox(l),d=r.raycast(u[0],u[1],u[2],c.x,c.y,c.z,e/j);if(d){let f=d.t*j;(!i||f<i.t)&&(i={t:f,grid:r,hit:d,point:a(r.toLocal(d.x,d.y,d.z))})}};for(let r of this.ships)!r.dead&&r.root.position.distanceTo(s)<e+20&&n(r.grid,o=>r.toLocal(o,o),o=>r.toWorld(o,o));for(let r of this.nearProps)Math.hypot(r.x-s.x,r.z-s.z)<e+10&&n(r.grid,o=>o.set(o.x-r.x,o.y-r.y,o.z-r.z),o=>o.set(o.x+r.x,o.y+r.y,o.z+r.z));return i},dig(s){if(s.ship||s.swim)return;let t=s.worldPos(new v),e=s.lookDir(new v),i=t.clone().addScaledVector(e.setY(0).normalize(),1.2),n=this.world.height(i.x,i.z);n<.4||(_t.play("dig",1),this.fx.burst(new v(i.x,n,i.z),6,"dust"),this.act(s,{a:"dig",x:i.x,z:i.z}))},pourAt(s){this.fxEvent("splash",s.x,s.y,s.z,12);for(let t of this.ships)!t.dead&&Math.hypot(t.x-s.x,t.z-s.z)<30&&t.extinguish(t.toLocal(s.clone()),1.6)},fireCannon(s,t){let e=t.cannon;e.recoil=1,e.pitchG.updateMatrixWorld(!0);let i=e.pitchG.matrixWorld,n=new v(0,0,1.5).applyMatrix4(i),r=new v(0,0,0).applyMatrix4(i),a=n.clone().sub(r).normalize().multiplyScalar(62).add(s.velocity());this.spawnBall(n,a,s,{ghost:s.style==="ghost",radius:s.ballRadius}),this.fxEvent("flash",n.x,n.y,n.z,10),this.fxEvent("smoke",n.x,n.y,n.z,10),this.flash(n,"#ffb060",6,30,.12),this.sfx("cannon",n,1),this.distToCam(n)<25&&(this.shake=Math.max(this.shake,.5))},spawnBall(s,t,e,i={}){let n=new Nt(this.ballGeo,i.ghost?this.ghostBallMat:this.ballMat);i.small&&n.scale.setScalar(1.6),n.position.copy(s),this.scene.add(n);let r={id:i.id??this.newId(),pos:s.clone(),vel:t.clone(),owner:e,age:0,mesh:n,ghost:!!i.ghost,small:!!i.small,radius:i.radius||2.3,visual:!!i.visual};return this.balls.push(r),this.isHost&&this.net&&!i.visual&&this.net.queueFx(["#ball",r.id,+s.x.toFixed(2),+s.y.toFixed(2),+s.z.toFixed(2),+t.x.toFixed(2),+t.y.toFixed(2),+t.z.toFixed(2),r.ghost?1:0,r.small?1:0]),r},updateBalls(s){let e=s/3;for(let i of this.balls){for(let n=0;n<3&&!i.done;n++){let r=i.pos.clone();if(i.vel.y-=9.8*e,i.pos.addScaledVector(i.vel,e),i.age+=e,i.visual){(i.pos.y<Me(i.pos.x,i.pos.z,this.time)-1||i.age>8)&&(i.done=!0);continue}if(this.ballHits(i,r))break}i.age>12&&(i.done=!0),i.mesh.position.copy(i.pos),i.ghost&&Math.random()<.5&&this.fx.burst(i.pos,1,"ghost"),i.done&&this.scene.remove(i.mesh)}this.balls=this.balls.filter(i=>!i.done)},ballHits(s,t){for(let n of this.ships){if(n.dead||n===s.owner&&s.age<.3||Math.abs(n.x-s.pos.x)>22||Math.abs(n.z-s.pos.z)>22)continue;let r=n.toLocal(t.clone()),o=n.toLocal(s.pos.clone());if(Math.abs(o.x)>18||Math.abs(o.z)>6)continue;let a=n.grid,l=a.toVox(r),h=o.clone().sub(r),c=h.length();h.normalize();let u=a.raycast(l[0],l[1],l[2],h.x,h.y,h.z,c/j+1);if(u){let d=a.toLocal(u.x,u.y,u.z),f=n.toWorld(d.clone());return this.impact(s,f),n.damageAt(d,s.small?1.4:s.ghost?2.6:s.radius,1.1,this),s.ghost&&Math.random()<.5&&n.ignite(u.x,u.y,u.z),this.hitCreatures(f,2.4,s.small?25:60),!0}}for(let n of this.world.props){if(!n.grid||Math.abs(n.x-s.pos.x)>n.rad+2||Math.abs(n.z-s.pos.z)>n.rad+2)continue;let r=new v(t.x-n.x,t.y-n.y,t.z-n.z),o=new v().subVectors(s.pos,t),a=o.length();o.normalize();let l=n.grid.toVox(r),h=n.grid.raycast(l[0],l[1],l[2],o.x,o.y,o.z,a/j+1);if(h){let c=n.grid.toLocal(h.x,h.y,h.z).add(new v(n.x,n.y,n.z));return this.impact(s,c),this.blastProp(n,c,s.small?1.4:2.4,1),this.hitCreatures(c,2.2,s.small?25:50),!0}}for(let n of this.skeletons)if(n.alive&&n.worldPos(ma).distanceTo(s.pos)<(n.kind==="captain"?2:1.4))return n.damage(s.small?0:80),this.impact(s,s.pos.clone()),!0;for(let n of this.serpents)if(n.alive&&n.hitTest(s.pos,.3))return n.damage(120),this.impact(s,s.pos.clone()),!0;for(let n of this.players)if(!(n.dead>0||s.owner&&s.owner===n.ship)&&n.eyeWorld(ma).distanceTo(s.pos)<1.1)return n.hurt((s.small?25:60)*this.diff.dmg,"cannon"),this.impact(s,s.pos.clone()),!0;let e=this.world.height(s.pos.x,s.pos.z);if(s.pos.y<e)return this.fxEvent("dust",s.pos.x,s.pos.y,s.pos.z,14),this.sfx("hit",s.pos,.6),this.hitCreatures(s.pos,2.5,s.small?25:50),this.endBall(s),!0;let i=Me(s.pos.x,s.pos.z,this.time);return s.pos.y<i?(this.fxEvent("splash",s.pos.x,i,s.pos.z,22,{big:!0}),this.sfx("splash",s.pos),this.endBall(s),!0):!1},endBall(s){s.done=!0,this.isHost&&this.net&&this.net.queueFx(["#end",s.id])},impact(s,t){this.endBall(s),this.fxEvent("dust",t.x,t.y,t.z,14,{r:.55,g:.4,b:.25}),this.fxEvent("smoke",t.x,t.y,t.z,6),this.flash(t,"#ffa040",4,16,.1),this.sfx("hit",t);let e=this.distToCam(t);e<20&&(this.shake=Math.max(this.shake,.6-e*.02))},hitCreatures(s,t,e){for(let i of this.skeletons)i.alive&&i.worldPos(ma).distanceTo(s)<t&&i.damage(e);for(let i of this.players)i.dead<=0&&i.worldPos(ma).distanceTo(s)<t&&i.hurt(e*.5*this.diff.dmg,"blast")},blastProp(s,t,e,i){let n=new v(t.x-s.x,t.y-s.y,t.z-s.z),r=s.grid.toVox(n),o=s.grid.blast(r[0],r[1],r[2],e,i),a=0,l=!1;for(let h of o){if(h.m===P.powder&&(l=!0),a++>20)continue;let c=s.grid.toLocal(h.x,h.y,h.z).add(new v(s.x,s.y,s.z));this.debris.spawn(c,h.m,{x:(Math.random()-.5)*8,y:3+Math.random()*5,z:(Math.random()-.5)*8})}s.grid.flush(20),l&&!s.exploded&&(s.exploded=!0,this.later(()=>this.explosion(new v(s.x,s.y+1,s.z),2.6),.1))},explosion(s,t){this.fxEvent("flash",s.x,s.y,s.z,40),this.fxEvent("smoke",s.x,s.y,s.z,30),this.fxEvent("ember",s.x,s.y,s.z,25),this.flash(s,"#ffa040",10,40,.35),this.sfx("boom",s,1);let e=this.distToCam(s);e<40&&(this.shake=Math.max(this.shake,1.2-e*.025));for(let i of this.ships){if(i.dead)continue;let n=i.toLocal(s.clone());if(Math.abs(n.x)>18+t||Math.abs(n.z)>6+t)continue;i.damageAt(n,t/j*.42,2,this);let[r,o,a]=i.grid.toVox(n);for(let l=0;l<14;l++)i.ignite(Math.round(r+(Math.random()-.5)*10),Math.round(o+(Math.random()-.5)*6),Math.round(a+(Math.random()-.5)*10),!0)}for(let i of this.world.props)i.grid&&Math.hypot(i.x-s.x,i.z-s.z)<t+i.rad&&this.blastProp(i,s,t/j*.42,2);this.hitCreatures(s,t*2.2,90)},shipCollisions(){let s=this.ships.filter(t=>!t.dead&&t!==this.titleShip);for(let t=0;t<s.length;t++)for(let e=t+1;e<s.length;e++){let i=s[t],n=s[e];if(Math.hypot(n.x-i.x,n.z-i.z)>32)continue;let r=i.fwd,o=n.fwd,a=1e9,l=null,h=null;for(let c=-1;c<=1;c+=.25)for(let u=-1;u<=1;u+=.25){let d=i.x+r.x*c*12,f=i.z+r.z*c*12,g=n.x+o.x*u*12,x=n.z+o.z*u*12,m=Math.hypot(g-d,x-f);m<a&&(a=m,l=[d,f,c],h=[g,x,u])}if(a<6.6){let c=(h[0]-l[0])/(a||1),u=(h[1]-l[1])/(a||1),d=(6.6-a)*.5;i.x-=c*d,i.z-=u*d,n.x+=c*d,n.z+=u*d,i.velocity().sub(n.velocity()).length()>2.5&&(!i.lastRam||this.time-i.lastRam>1)&&(i.lastRam=n.lastRam=this.time,i.damageAt(new v(l[2]*12,.5,0),1.8,1.2,this),n.damageAt(new v(h[2]*12,.5,0),1.8,1.2,this),this.sfx("hit",i.root.position),this.shake=Math.max(this.shake,.8)),i.speed*=.9,n.speed*=.9}}},removeShip(s){s.dispose(this.scene);let t=this.ships.indexOf(s);t>=0&&this.ships.splice(t,1);let e=this.ais.find(i=>i.ship===s);e&&this.ais.splice(this.ais.indexOf(e),1),s===this.titleShip&&(this.titleShip=null)},onShipSinking(s){if(s===this.playerShip)this.sayAll("sinking",[],"bad"),this.sfx("horn",s.root.position),ci.sting("death");else if(s.style!=="player"){this.sayAll("enemySunk",[],"good"),this.sfx("sting",null);let t=new v(s.x,0,s.z);this.spawnLoot("chest",t.clone().add(new v(3,0,2)),null,{value:s.style==="ghost"?1500:650,style:s.style==="ghost"?1:2});for(let e=0;e<3;e++)this.spawnLoot("supplies",t.clone().add(new v((Math.random()-.5)*16,0,(Math.random()-.5)*16)));this.gold+=s.style==="ghost"?300:150,this.stats.ships++}},onShipCrash(s,t){s===this.playerShip&&(this.sayAll("crash",[],"bad"),this.shake=Math.max(this.shake,Math.min(1.5,t*.2)),this.sfx("hit",s.root.position))},onPlayerShipLost(){this.sayAll("sunk",[],"bad");for(let s of this.localPlayers)s.ship===this.playerShip&&(s.leaveStation(),s.detach());this.playerShip=null,this.later(()=>{let s=this.players[0].worldPos(new v),e=this.world.islands.filter(n=>n.kind==="outpost").sort((n,r)=>Math.hypot(n.cx-s.x,n.cz-s.z)-Math.hypot(r.cx-s.x,r.cz-s.z))[0],i=new Mi(this,"player",e.moor.x,e.moor.z,-Math.PI/2+1e-4);i.anchor=!0,this.scene.add(i.root),this.ships.push(i),this.playerShip=i,this.applyUpgrades(),this.sayAll("newShip",[{isl:e.id}]);for(let n of this.localPlayers)n.dead<=0&&n.swim&&(n.teleport(i,new v(-5,-2.5+19*j+.02,0),Math.PI/2),this.say("respawnShip",[],"",n));this.net&&this.net.broadcast({t:"newship",id:i.netId})},4)},onPlayerDied(s){this.say("youDied",[],"bad",s),ci.sting("death"),this.isClient&&this.net&&this.net.send({t:"died"})},respawn(s){s.hp=100,s.dead=0,s.vel.set(0,0,0);let t=this.playerShip;if(t&&!t.dead&&!t.sinking)s.teleport(t,new v(-5,-2.5+19*j+.02,0),Math.PI/2),this.say("respawnShip",[],"",s);else{let e=this.home;s.ship=null,s.pos.set(e.merchant.x+2,this.world.height(e.merchant.x+2,e.merchant.z)+.1,e.merchant.z+2)}},hurtRemote(s,t,e){this.net&&this.net.sendTo(s.id,{t:"hurt",n:Math.round(t),src:e})},onCaptainDefeated(s,t){this.sayAll("captainDefeated",[],"good"),this.spawnLoot("skull",t.clone().add(new v(0,1,0)),null,{value:1500,pop:!0});let e=this.world.islandAt(t.x,t.z,40);e&&e.vault&&this.spawnLoot("chest",new v(e.vault.x,e.vault.y+.6,e.vault.z),null,{value:2500,style:1,pop:!0}),e&&(e.captainDone=!0),this.sfx("sting",null),ci.sting("treasure")},onSerpentSlain(s){this.sayAll("serpentSlain",[],"good"),this.gold+=1200,this.spawnLoot("chest",s.head.clone().setY(0),null,{value:1800,style:1}),this.sfx("sting",null)}};var Fy=["N","NE","E","SE","S","SW","W","NW"],Vd={spawner(s){let t=this.players.some(i=>i.ship===this.playerShip&&this.playerShip);this.enemyTimer-=s;let e=this.ais.filter(i=>!i.ship.sinking).length;if(this.enemyTimer<=0&&e===0&&t){let i=this.isNight&&(this.cursed>.2||Math.random()<.45);this.spawnEnemyShip(i),this.enemyTimer=(160+Math.random()*140)/(1+.25*(this.players.length-1))}if(this.enemyTimer<=0&&(this.enemyTimer=20),this.serpentTimer-=s*(1+(this.cursed||0)+(this.weather.kind==="storm"?1:0)),this.serpentTimer<=0&&t&&!this.serpents.length){let i=this.playerShip;this.world.height(i.x,i.z)<-7&&!this.world.islandAt(i.x,i.z,120)?(this.serpents.push(new Os(this,i)),this.sayAll("serpent",[],"bad"),this.sfx("horn",null),this.serpentTimer=900+Math.random()*600):this.serpentTimer=30}for(let i of this.players){let n=i.worldPos(new v),r=this.world.islandAt(n.x,n.z,40);r&&r.kind!=="outpost"&&this.populateIsland(r,n);for(let o of this.world.wrecks)if(!o.spawned&&Math.hypot(o.x-n.x,o.z-n.z)<150){o.spawned=!0,this.spawnLoot("chest",new v(o.x+2,-1,o.z),null,{value:700+Math.floor(Math.random()*300),style:2,sunk:!0});for(let a=0;a<3;a++)this.spawnLoot("supplies",new v(o.x+(Math.random()-.5)*30,0,o.z+(Math.random()-.5)*30));Math.random()<.5&&this.spawnLoot("bottle",new v(o.x+12,0,o.z-8))}i.swim&&!i.ship&&this.world.height(n.x,n.z)<-5?i.swimT=(i.swimT||0)+s:i.swimT=0,i.swimT>5&&this.sharks.filter(o=>o.target===i).length===0&&(this.sharks.push(new Fs(this,i)),i.swimT=-10)}if(this.lootTimer-=s,this.lootTimer<=0&&this.playerShip){this.lootTimer=45+Math.random()*45;let i=this.playerShip,n=i.fwd,r=(Math.random()-.5)*1.2,o=i.x+(n.x*Math.cos(r)-n.z*Math.sin(r))*120,a=i.z+(n.z*Math.cos(r)+n.x*Math.sin(r))*120;this.world.height(o,a)<-3&&this.spawnLoot(Math.random()<.3?"bottle":"supplies",new v(o,0,a))}},populateIsland(s,t){let e=this.islandSpawn.get(s.id)||-1e9;if(this.time-e<180)return;this.islandSpawn.set(s.id,this.time);let i=s.r>80?4:s.r>45?3:1;this.isNight&&(i=Math.ceil(i*1.6)),s.kind==="cursed"&&(i+=2),i=Math.round(i*(1+.3*(this.players.length-1)));for(let n=0,r=0;n<i&&r<60;r++){let o=Math.random()*6.28,a=Math.random()*s.r*.8,l=s.cx+Math.cos(o)*a,h=s.cz+Math.sin(o)*a;this.world.height(l,h)<1||Math.hypot(l-t.x,h-t.z)<18||(this.addSkeleton(l,h,s.kind==="cursed"||this.isNight&&Math.random()<.4?"cursed":"skeleton"),n++)}this.isNight&&s.r>70&&!s.captainDone&&Math.random()<.25&&this.spawnCaptain(s),s.looseChest&&!s.looseTaken&&(s.looseTaken=!0,this.spawnLoot("chest",new v(s.looseChest.x,s.looseChest.y+.5,s.looseChest.z),null,{value:250+Math.floor(Math.random()*150)}))},addSkeleton(s,t,e,i={}){let n=new Ns(this,s,t,e,i);if(i.leap){let r=n.worldPos(new v);this.fxEvent("dust",r.x,r.y,r.z,6),this.sfx("bones",r)}return this.skeletons.push(n),n},spawnCaptain(s){for(let t=0;t<40;t++){let e=Math.random()*6.28,i=Math.random()*s.r*.4,n=s.cx+Math.cos(e)*i,r=s.cz+Math.sin(e)*i;if(!(this.world.height(n,r)<1.5)){this.addSkeleton(n,r,"captain",{rise:2.5}),this.sayAll("captainRises",[],"ghost"),this.sfx("ghost",null);return}}},spawnEnemyShip(s){let t=this.playerShip;for(let e=0;e<20;e++){let i=Math.random()*Math.PI*2,n=380+Math.random()*120,r=t.x+Math.cos(i)*n,o=t.z+Math.sin(i)*n;if(r<100||o<100||r>ze-100||o>ze-100||this.world.height(r,o)>-6||this.world.islandAt(r,o,60))continue;let a=new Mi(this,s?"ghost":"enemy",r,o,Math.atan2(-(t.z-o),t.x-r));return a.ammo=999,a.ballRadius=2.3,this.scene.add(a.root),this.ships.push(a),this.ais.push(new na(this,a,s)),this.sayAll(s?"ghost":"enemy",[],s?"ghost":"bad"),this.sfx(s?"ghost":"bell",null),a}return null},giveMap(s,t){let e=new Set(this.maps.map(a=>a.dig)),i=this.playerShip?new v(this.playerShip.x,0,this.playerShip.z):new v(this.home.cx,0,this.home.cz),n=[];for(let a of this.world.islands)for(let l of a.digs)!l.dug&&!e.has(l)&&(!t||a.landmark)&&n.push({isl:a,dig:l,dist:Math.hypot(a.cx-i.x,a.cz-i.z)});if(!n.length)return null;n.sort((a,l)=>a.dist-l.dist);let r=s?n.find(a=>a.isl.kind!=="cursed"):n[Math.floor(Math.random()*Math.min(n.length,8))];if(!r)return null;let o={isl:r.isl,dig:r.dig,hits:0};if(t){let a=r.isl.landmark,l=r.dig.x-a.x,h=r.dig.z-a.z,c=(Math.atan2(l,-h)*180/Math.PI+360)%360;o.riddle={steps:Math.round(Math.hypot(l,h)),dir:Fy[Math.round(c/45)%8]}}return this.maps.push(o),this.syncMaps(),o},syncMaps(){this.isHost&&this.net&&this.net.broadcast({t:"maps",m:this.mapsNet()})},mapsNet(){return this.maps.map(s=>[s.isl.id,s.isl.digs.indexOf(s.dig),s.riddle?s.riddle.steps:-1,s.riddle?s.riddle.dir:""])},digAt(s,t,e){let i=this.world.height(t,e);this.fxEvent("dust",t,i,e,6);for(let n of this.maps)if(Math.hypot(n.dig.x-t,n.dig.z-e)<(n.riddle?3.2:2.8)){if(n.hits++,n.hits>=4){n.dig.dug=!0,this.maps.splice(this.maps.indexOf(n),1),this.syncMaps();let r=n.isl.kind==="cursed";if(this.spawnLoot("chest",new v(n.dig.x,i+.6,n.dig.z),null,{value:(r?1300:450+Math.floor(Math.random()*200))*(n.riddle?1.5:1)|0,style:r?1:0,pop:!0}),this.say("found",[],"good",s),this.sfx("sting",null),s.local&&ci.sting("treasure"),r||Math.random()<.6)for(let o=0;o<(r?4:2);o++){let a=Math.random()*6.28;this.addSkeleton(n.dig.x+Math.cos(a)*6,n.dig.z+Math.sin(a)*6,r||this.isNight?"cursed":"skeleton")}}else this.say("dig",[],"",s);return}},lightTotem(s,t){let e=this.world.props[t];if(!e||e.lit)return;e.lit=!0;let i=e.isl,n=i.props.filter(o=>o.kind==="totem"&&o.lit).length,r=i.props.filter(o=>o.kind==="totem").length;if(this.fxEvent("ghost",e.x,e.y+4,e.z,30),this.sfx("ghost",new v(e.x,e.y,e.z),.7),n<r){this.sayAll("totemLit",[n,r],"ghost");return}this.sayAll("shrineAwake",[],"ghost"),this.shake=Math.max(this.shake,1.2),i.captainDone||this.later(()=>this.spawnCaptain(i),2.5),this.net&&this.net.broadcast({t:"lit",pi:t})},restock(s){let t=this.playerShip;t&&Math.hypot(t.x-s.worldPos().x,t.z-s.worldPos().z)<150&&(t.ammo=Math.max(t.ammo,t.cap.ammo),t.planks=Math.max(t.planks,t.cap.planks),t.food=Math.max(t.food,t.cap.food)),this.say("restock",[],"good",s),this.sfx("chest",null),s.local?s.pistolRes=15:this.net&&this.net.sendTo(s.id,{t:"ammo"})},lootBarrel(s,t){let e=this.world.props[t];if(!e||e.looted)return;e.looted=!0;let i=this.playerShip,n=4+Math.floor(Math.random()*6),r=2+Math.floor(Math.random()*3);i&&(i.ammo+=n,i.planks+=r),this.say("lootedSupplies",[n,r,0],"good",s),this.sfx("chest",null),this.net&&this.net.broadcast({t:"looted",pi:t})},buy(s,t){let e=this.priceOf(t);if(e!==null){if(this.gold<e){this.say("notEnough",[],"bad",s);return}if(t==="map"||t==="riddle"){let i=this.giveMap(!1,t==="riddle");if(!i){this.say("noMoreMaps",[],"bad",s);return}this.gold-=e,this.say("gotMap",[{isl:i.isl.id}],"good",s)}else if(t==="repair"){let i=this.playerShip;if(!i)return;this.gold-=e;for(let n=0;n<i.grid.d.length;n++)i.grid.d[n]!==i.grid.orig[n]&&i.grid.setIdx(n,i.grid.orig[n]);i.water=0,i.fires.clear(),i.countLeaks(),this.say("repaired",[],"good",s)}else if(t.startsWith("up")){let i=+t[2];this.gold-=e,this.upgrades[i]++,this.applyUpgrades(),this.say("upgraded",[{k:"up"+i},this.upgrades[i]],"good",s)}this.sfx("coins",null,.7),this.isClient||this.saveSoon()}},priceOf(s){if(s==="map")return 100;if(s==="riddle")return 160;if(s==="repair")return 60;if(s.startsWith("up")){let t=+s[2],e=this.upgrades[t];return e>=2?null:Gd[t][e]}return null},saveSoon(){this.later(()=>Li.store(this),.5)}};function Oy(){let s=new Ye(7,7,7,[-3.5*j,0,-3.5*j]);for(let t=0;t<7;t++)for(let e=0;e<7;e++)for(let i=0;i<7;i++)Math.hypot(i-3,(t-3.6)*1.1,e-3)>3.3||t<2&&Math.abs(e-3)>2||s.set(i,t,e,P.bone);s.set(6,4,2,P.ghostglass),s.set(6,4,4,P.ghostglass),s.set(6,2,3,P.char);for(let t=1;t<6;t++)s.set(6,1,t,t%2?P.shell:P.char);return s.box(1,6,1,5,6,5,P.gold),s}var By={chest:.45,supplies:.55,bottle:.16,coins:.12,skull:.5},Wd={chestGrid(s){let t=Vh(s);return t.buildAll(),t},makeCarryMesh(){let s=this.chestGrid(0);return s.group.scale.setScalar(.4),s.group.position.set(0,2.05,0),s.group},spawnLoot(s,t,e=null,i={}){let n;s==="chest"||s==="coins"?n=Vh(i.style||0):s==="skull"?n=Oy():n=_r(!1),n.buildAll(),n.group.scale.setScalar(By[s]),n.group.traverse(o=>{o.isMesh&&(o.castShadow=!0)});let r={id:i.id??this.newId(),kind:s,style:i.style||0,grid:n,mesh:n.group,ship:e,pos:t.clone(),vel:new v(0,i.pop?5:0,0),value:i.value||0,yaw:Math.random()*6,spin:s==="coins"||s==="skull",sunk:!!i.sunk,remote:!!i.remote};return r.world=o=>(o.copy(r.pos),r.ship&&r.ship.toWorld(o,o),o),e?e.root.add(n.group):this.scene.add(n.group),this.loot.push(r),r},spawnCoins(s,t){this.spawnLoot("coins",s.clone().setY(s.y+.5),null,{value:t,pop:!0}).vel.set((Math.random()-.5)*2,4,(Math.random()-.5)*2)},removeLoot(s){if(s.gone)return;s.gone=!0,s.ship?s.ship.root.remove(s.mesh):this.scene.remove(s.mesh),s.grid.dispose();let t=this.loot.indexOf(s);t>=0&&this.loot.splice(t,1);for(let e of this.players)e.carry===s&&(e.carry=null)},setLootFrame(s,t){if(s.ship===t)return;let e=s.world(new v);s.ship?s.ship.root.remove(s.mesh):this.scene.remove(s.mesh),s.ship=t,t?(t.toLocal(e,s.pos),t.root.add(s.mesh)):(s.pos.copy(e),this.scene.add(s.mesh))},interactOther(s,t){if(t.kind==="loot"){let e=t.L;return e.kind==="chest"||e.kind==="skull"?(e.carried||(s.carry=e,e.carried=s,e.mesh.visible=!1,_t.play("chest",1),s.leaveStation(),this.act(s,{a:"pickup",id:e.id})),!0):(this.act(s,{a:"collect",id:e.id}),!0)}if(t.kind==="merchant"){if(s.carry){let e=s.carry;return s.carry=null,this.act(s,{a:"sell",id:e.id}),!0}return s.hud.openShop(),!0}return t.kind==="supply"?(this.act(s,{a:"supply"}),s.pistolRes=15,!0):t.kind==="lootbarrel"?(this.act(s,{a:"lootbarrel",pi:this.world.props.indexOf(t.pr)}),!0):t.kind==="totem"?(this.act(s,{a:"totem",pi:this.world.props.indexOf(t.pr)}),!0):!1},pickupLoot(s,t){let e=this.loot.find(i=>i.id===t);!e||e.carried&&e.carried!==s||(e.carried=s,e.mesh.visible=!1,s.local&&(s.carry=e))},dropLoot(s){let t=s.carry;if(!t)return;s.carry=null;let e=s.lookDir(new v).setY(0).normalize(),i=s.worldPos(new v).addScaledVector(e,1).add(new v(0,.8,0)),n=s.ship?s.ship.toLocal(i.clone()):i;_t.play("chest",.8),this.isClient&&(t.carried=null,t.mesh.visible=!0),this.act(s,{a:"drop",id:t.id,sh:s.ship?s.ship.netId:-1,x:n.x,y:n.y,z:n.z})},dropLootAt(s,t,e,i){let n=this.loot.find(o=>o.id===t);if(!n)return;n.carried=null,n.mesh.visible=!0,s.carry===n&&(s.carry=null);let r=e>=0?this.shipById(e):null;n.ship?n.ship.root.remove(n.mesh):this.scene.remove(n.mesh),n.ship=r,n.pos.copy(i),n.vel.set(0,0,0),n.floating=!1,r?r.root.add(n.mesh):this.scene.add(n.mesh)},sellLoot(s,t){let e=this.loot.find(n=>n.id===t);if(!e)return;let i=e.value;this.gold+=i,this.stats.chests++,this.removeLoot(e),this.say("sold",[i],"good",s),this.sfx("coins",null),this.saveSoon()},collectFloating(s,t){if(!s.gone){if(s.kind==="supplies"){let e=this.playerShip,i=5+Math.floor(Math.random()*8),n=2+Math.floor(Math.random()*4),r=Math.floor(Math.random()*3);e&&(e.ammo+=i,e.planks+=n,e.food+=r),this.removeLoot(s),this.sayAll("lootedSupplies",[i,n,r],"good"),this.sfx("chest",null)}else if(s.kind==="bottle"){this.removeLoot(s);let e=this.giveMap(!1,Math.random()<.6);e&&this.sayAll("bottle",[{isl:e.isl.id}],"good")}}},updateLoot(s){let t=!this.isClient;for(let e of[...this.loot]){if(e.carried){e.mesh.visible=!1,e.carried.dead>0&&t&&e.carried.local;continue}if(e.mesh.visible=!0,!t)e.net&&e.pos.lerp(e.net,Math.min(1,s*10));else if(e.ship){if(e.ship.dead){this.setLootFrame(e,null);continue}e.vel.y-=15*s,e.pos.y+=e.vel.y*s,e.ship.grid.solidAt(e.pos.x,e.pos.y,e.pos.z)&&(e.pos.y=Math.ceil((e.pos.y+2.5)/j)*j-2.5,e.vel.y=0),(e.pos.y<-3||Math.abs(e.pos.z)>6)&&this.setLootFrame(e,null)}else{let n=this.world.height(e.pos.x,e.pos.z),r=Me(e.pos.x,e.pos.z,this.time);if(e.sunk?e.pos.y=Math.max(n,-6)+.3:(e.vel.y-=15*s,e.pos.addScaledVector(e.vel,s),e.vel.x*=.96,e.vel.z*=.96,e.pos.y<n&&(e.pos.y=n,e.vel.set(0,0,0)),e.pos.y<r-.25&&n<r-.3&&(e.pos.y=r-.25,e.vel.y=0,e.floating=!0)),!e.floating&&!e.sunk)for(let o of this.ships){if(o.dead||Math.abs(o.x-e.pos.x)>18||Math.abs(o.z-e.pos.z)>18)continue;let a=o.toLocal(e.pos.clone());if(o.insideHull(a,0)&&a.y>-1){this.setLootFrame(e,o);break}}}if(e.mesh.position.copy(e.pos),e.mesh.rotation.y=e.yaw+(e.spin?this.time*2:0),e.floating&&(e.mesh.rotation.z=Math.sin(this.time*2+e.yaw)*.15),!t)continue;let i=e.world(new v);for(let n of this.players){if(n.dead>0)continue;let r=n.worldPos(new v).distanceTo(i);if(e.kind==="coins"&&r<1.8){this.gold+=e.value,this.removeLoot(e),this.sfx("coins",i),this.fxEvent("gold",i.x,i.y,i.z,8);break}if((e.kind==="supplies"||e.kind==="bottle")&&e.floating&&r<1.8&&n.swim){this.collectFloating(e,n);break}}if(!e.gone){if((e.kind==="supplies"||e.kind==="bottle")&&e.floating){let n=this.playerShip;if(n&&!n.dead){let r=n.toLocal(i.clone());if(Math.abs(r.x)<15&&Math.abs(r.z)<6.5){this.collectFloating(e,null);continue}}}e.kind!=="chest"&&e.kind!=="skull"&&this.nearestPlayerDist(i.x,i.z)>600&&this.removeLoot(e)}}}};var Hy=[180,240,360],Gd=[[600,1400],[600,1400],[700,1600],[400,1e3]],Sn=new v,Cr=class{constructor(){this.canvas=document.getElementById("game"),this.R=new da(this.canvas),this.scene=new Cs,this.scene.fog=new Po("#a8d0e8",120,650),this.settings={quality:1,sens:1,invert:!1,dither:!0,shadows:!0,difficulty:1};try{Object.assign(this.settings,JSON.parse(localStorage.getItem("deadwake.settings")||"{}"))}catch{}this.time=0,this.frame=0,this.hour=9,this.shake=0,this.ids=1,this.gold=0,this.maps=[],this.upgrades=[0,0,0,0],this.stats={chests:0,ships:0,skeletons:0},this.wind={dir:Math.PI*.25,str:.9,target:Math.PI*.25},this.hemi=new Xo("#cfe8ff","#4a6a7a",1.3),this.scene.add(this.hemi),this.sun=new $o("#fff2d8",2),this.scene.add(this.sun),this.scene.add(this.sun.target),this.sun.castShadow=!0,this.sun.shadow.mapSize.set(1024,1024);let t=this.sun.shadow.camera;t.left=-36,t.right=36,t.top=36,t.bottom=-36,t.near=1,t.far=260,this.sun.shadow.bias=-.0015,this.sun.shadow.normalBias=.05,this.lightPool=new oa(this.scene,6),this.world=new ta(this.scene,1717);for(let e of this.world.islands)e.mesh.receiveShadow=!0,e.mesh.castShadow=!0;this.ocean=xd(this.world.depthTex,ze),this.scene.add(this.ocean.mesh),this.sky=yd(),this.scene.add(this.sky.mesh),this.clouds=vd(this.scene),this.fx=new ra(this.scene),this.debris=new Qo(this.scene),this.weather=new fa(this),this.decor=new pa(this),this.ships=[],this.ais=[],this.skeletons=[],this.sharks=[],this.serpents=[],this.loot=[],this.balls=[],this.players=[],this.localPlayers=[],this.huds=[],this.nearProps=[],this.islandSpawn=new Map,this.enemyTimer=140,this.lootTimer=50,this.serpentTimer=600,this.ballGeo=new Te(.32,.32,.32),this.ballMat=new Ae({color:"#1e1e24"}),this.ghostBallMat=new Qi({color:"#60ffb0"}),this.merchants=this.world.islands.filter(e=>e.kind==="outpost").map(e=>{let i=new _n("merchant"),n=this.world.height(e.merchant.x,e.merchant.z);return i.root.position.set(e.merchant.x,n,e.merchant.z),this.scene.add(i.root),{isl:e,fig:i,pos:new v(e.merchant.x,n,e.merchant.z)}}),this.titleCam=new Xe(60,16/9,.1,1200),this.scene.add(this.titleCam),this.state="title",this.mode=null,ye.init(this.canvas,()=>_t.init()),this.canvas.addEventListener("click",()=>{this.state==="play"&&!this.anyUI()&&ye.lock()}),document.addEventListener("pointerlockchange",()=>{!ye.locked&&this.state==="play"&&!this.testMode&&!this.anyUI()&&this.localPlayers[0]&&this.localPlayers[0].input.kind==="km"&&this.pause()}),addEventListener("resize",()=>this.resize()),this.menu=new ua(this),this.applySettings(),this.titleShip=new Mi(this,"player",this.world.islands.find(e=>e.kind==="outpost").moor.x,this.world.islands.find(e=>e.kind==="outpost").moor.z,-Math.PI/2+1e-4),this.titleShip.anchor=!0,this.scene.add(this.titleShip.root),this.ships.push(this.titleShip),this.menu.title(),document.getElementById("hud").style.display="none",ci.set("title"),this.last=performance.now(),this.loop=this.loop.bind(this),requestAnimationFrame(this.loop)}newId(){return this.ids++}get isClient(){return this.mode==="client"}get isHost(){return this.mode==="host"}get diff(){return[{aimErr:1.8,dmg:.7,leak:.75},{aimErr:1,dmg:1,leak:1},{aimErr:.6,dmg:1.3,leak:1.25}][this.settings.difficulty]||{aimErr:1,dmg:1,leak:1}}anyUI(){return this.localPlayers.some(t=>t.ui)}applySettings(){for(let t of this.localPlayers)t.input.sens=this.settings.sens,t.input.invert=this.settings.invert;try{localStorage.setItem("deadwake.settings",JSON.stringify(this.settings))}catch{}this.R.setShadows(this.settings.shadows),this.sun.castShadow=this.settings.shadows,this.resize()}resize(){let t=Hy[this.settings.quality],e=Math.round(t*innerWidth/innerHeight);this.R.setSize(e,t),this.layoutViews()}layoutViews(){let t=this.localPlayers.length;this.localPlayers.forEach((e,i)=>{e.rect=t===1?[0,0,1,1]:i===0?[0,.5,1,.5]:[0,0,1,.5],e.camera.aspect=e.rect[2]*this.R.w/(e.rect[3]*this.R.h),e.camera.updateProjectionMatrix(),e.hud&&e.hud.place(e.rect)}),this.titleCam.aspect=this.R.w/this.R.h,this.titleCam.updateProjectionMatrix()}startSession(t,e={}){this.mode=t,this.resetWorld();let i=[];t==="split"?(i.push(new Bs(ye.padCount()>1?1:-1)),i.push(new aa(0))):i.push(new Bs(0));let n=e.myId??1;if(i.forEach((r,o)=>{let a=new Xn(this,n+o,{input:r,slot:o,color:(n+o-1)%4});this.players.push(a),this.localPlayers.push(a),a.hud=new la(this,a),this.huds.push(a.hud)}),this.applySettings(),t!=="client"){let r=e.fresh?null:Li.load(),o=this.world.islands.find(l=>l.kind==="outpost");this.home=o;let a=new Mi(this,"player",o.moor.x,o.moor.z,-Math.PI/2+1e-4);a.anchor=!0,this.scene.add(a.root),this.ships.push(a),this.playerShip=a,r?Li.apply(this,r):(this.gold=0,this.maps=[],this.upgrades=[0,0,0,0],this.giveMap(!0)),this.applyUpgrades(),this.localPlayers.forEach((l,h)=>l.teleport(a,new v(-5+h*1.5,-2.5+19*j+.02,h?1:0),Math.PI/2))}else this.home=this.world.islands.find(o=>o.kind==="outpost"),this.localPlayers[0].pos.set(this.home.merchant.x+2,this.world.height(this.home.merchant.x+2,this.home.merchant.z)+.2,this.home.merchant.z+2);this.layoutViews(),this.state="play",this.menu.hide(),document.getElementById("hud").style.display="block",_t.init(),ye.lock(),this.later(()=>this.sayAll(t==="client"?"joined":"welcome",[]),.6)}resetWorld(){this.net&&this.net.close(),this.net=null;for(let t of[...this.ships])this.removeShip(t);for(let t of this.skeletons)t.remove();this.skeletons=[];for(let t of this.sharks)t.remove();this.sharks=[];for(let t of this.serpents)t.remove();this.serpents=[];for(let t of[...this.loot])this.removeLoot(t);for(let t of this.balls)this.scene.remove(t.mesh);this.balls=[];for(let t of this.players)this.scene.remove(t.avatar.root),t.camera&&this.scene.remove(t.camera),t.hud&&t.hud.destroy();this.players=[],this.localPlayers=[],this.huds=[],this.ais=[],this.playerShip=null,this.timers=[];for(let t of this.world.islands){for(let e of t.digs)e.dug=!1;t.discovered=!1,t.looseTaken=!1,t.shrine=0,t.captainDone=!1}for(let t of this.world.props)t.diff=null,t.looted=!1,t.lit=!1,t.gone=!1,t.exploded=!1,t.grid&&(this.scene.remove(t.grid.group),t.grid.dispose(),t.grid=null);this.islandSpawn.clear(),this.enemyTimer=140,this.lootTimer=50,this.serpentTimer=600+Math.random()*300,this.hour=9,this.time=0,this.weather.reset(),this.stats={chests:0,ships:0,skeletons:0}}backToTitle(){this.mode&&this.mode!=="client"&&Li.store(this),this.resetWorld(),this.mode=null,this.state="title",this.titleShip=new Mi(this,"player",this.world.islands.find(t=>t.kind==="outpost").moor.x,this.world.islands.find(t=>t.kind==="outpost").moor.z,-Math.PI/2+1e-4),this.titleShip.anchor=!0,this.scene.add(this.titleShip.root),this.ships.push(this.titleShip),document.getElementById("hud").style.display="none",ye.unlock(),this.menu.title(),ci.set("title")}pause(){if(this.state!=="play")return;let t=this.mode==="host"||this.mode==="client";if(this.state=t?"play":"pause",this.paused=!0,t)for(let e of this.localPlayers)e.ui||(e.ui="menu");ye.unlock(),this.menu.pause()}resume(){this.paused=!1,this.state==="pause"&&(this.state="play");for(let t of this.localPlayers)t.ui==="menu"&&(t.ui=null);this.menu.hide(),ye.lock()}applyUpgrades(){let t=this.playerShip;if(!t)return;let[e,i,n,r]=this.upgrades;t.hullMul=[1,.85,.72][e],t.leakMul=[1,.85,.7][e]*this.diff.leak,t.maxSpeed=[9.5,10.5,11.6][i],t.ballRadius=[2.3,2.7,3.1][n],t.reload=[1.4,1.1,.85][n],t.cap={ammo:[30,45,60][r],planks:[12,18,24][r],food:[8,12,16][r]}}say(t,e=[],i="",n=null){if(n){n.local?n.hud&&n.hud.toast(t,e,i):this.net&&this.net.sendTo(n.id,{t:"say",k:t,a:e,c:i});return}this.sayAll(t,e,i)}sayAll(t,e=[],i=""){for(let n of this.huds)n.toast(t,e,i);this.isHost&&this.net&&this.net.broadcast({t:"say",k:t,a:e,c:i})}fxEvent(t,e,i,n,r,o){this.fx.burst(new v(e,i,n),r,t,o),this.isHost&&this.net&&this.net.queueFx([t,+e.toFixed(2),+i.toFixed(2),+n.toFixed(2),r,o||0])}sfx(t,e,i=1){_t.play(t,i,e?this.distToCam(e):0),this.isHost&&this.net&&this.net.queueFx(["@"+t,e?+e.x.toFixed(1):0,e?+e.y.toFixed(1):0,e?+e.z.toFixed(1):0,i,e?1:0])}later(t,e){(this.timers=this.timers||[]).push({fn:t,t:this.time+e})}runTimers(){if(!this.timers||!this.timers.length)return;let t=this.timers.filter(e=>e.t<=this.time);this.timers=this.timers.filter(e=>e.t>this.time);for(let e of t)e.fn()}shipById(t){return this.ships.find(e=>e.netId===t)||null}playerById(t){return this.players.find(e=>e.id===t)||null}act(t,e){if(this.isClient){this.net.send({t:"act",...e}),this.applyActLocal(t,e);return}this.applyAct(t,e)}applyActLocal(t,e){let i=e.s!==void 0?this.shipById(e.s):null;e.a==="repair"&&i&&i.repairAt(new v(e.x,e.y,e.z),.85),e.a==="pour"&&this.fx.burst(new v(e.x,e.y,e.z),12,"splash")}applyAct(t,e){let i=e.s!==void 0?this.shipById(e.s):null;switch(e.a){case"station":{let n=i&&i.stations[e.i];n&&(!n.user||n.user===t)&&(t.station&&t.station!==n&&(t.station.user=null),n.user=t,t.station=n);break}case"leave":t.station&&(t.station.user=null,t.station=null);break;case"helm":i&&(i.rudder=Math.max(-1,Math.min(1,e.r)));break;case"sail":i&&(i.sail.h=Math.max(0,Math.min(1,e.h)),i.sail.angle=Math.max(-1,Math.min(1,e.ang)));break;case"anchor":i&&(e.v&&!i.anchor?(i.anchor=!0,i.anchorT=0,this.sfx("chain",i.root.position)):!e.v&&i.anchor&&(i.anchor=!1,this.sfx("chain",i.root.position,.6)));break;case"aim":{let n=i&&i.stations[e.i];n&&n.cannon&&(n.cannon.yaw=e.yaw,n.cannon.pitch=e.pitch);break}case"load":{let n=i&&i.stations[e.i];if(!n||!n.cannon)break;let r=n.cannon;if(r.loaded||r.loadT)break;if(i.ammo<=0){this.say("noAmmo",[],"bad",t),r.loading=!1;break}i.ammo--,r.loading=!0,r.loadT=!0,this.later(()=>{r.loaded=!0,r.loading=!1,r.loadT=!1,this.sfx("hammer",i.root.position,.6)},i.reload||1.4);break}case"fire":{let n=i&&i.stations[e.i];if(!n||!n.cannon)break;let r=n.cannon;r.yaw=e.yaw,r.pitch=e.pitch,r.loaded=!1,r.cool=.6,i.updateTransform(this.time),this.fireCannon(i,n);break}case"stock":i&&(i[e.k]=Math.max(0,i[e.k]+e.d));break;case"dmg":{let r=(e.k==="skel"?this.skeletons:e.k==="shark"?this.sharks:this.serpents).find(o=>o.id===e.id);r&&r.alive&&r.damage(Math.min(e.n,200));break}case"dig":this.digAt(t,e.x,e.z);break;case"repair":i&&(i.repairAt(new v(e.x,e.y,e.z),.85),i.countLeaks(),this.sfx("hammer",i.toWorld(new v(e.x,e.y,e.z))));break;case"scoop":i&&(i.water=Math.max(0,i.water-.022));break;case"pour":this.pourAt(new v(e.x,e.y,e.z));break;case"pickup":this.pickupLoot(t,e.id);break;case"drop":this.dropLootAt(t,e.id,e.sh,new v(e.x,e.y,e.z));break;case"sell":this.sellLoot(t,e.id);break;case"buy":this.buy(t,e.what);break;case"supply":this.restock(t);break;case"lootbarrel":this.lootBarrel(t,e.pi);break;case"totem":this.lightTotem(t,e.pi);break;case"collect":{let n=this.loot.find(r=>r.id===e.id);n&&this.collectFloating(n,t);break}}}loop(t){requestAnimationFrame(this.loop);let e=Math.min(.05,(t-this.last)/1e3);this.last=t;try{this.step(e)}catch(i){console.error(i),this._errShown||(this._errShown=!0)}}step(t){ye.poll(),this.frame++;let e=this.state==="play";if(e&&!this.paused){for(let i of this.localPlayers)if(!i.ui&&i.input.pause()){this.pause();break}}else this.paused&&ye.pause()&&this.resume();if(e&&!(this.paused&&!this.mode.match(/host|client/))?(this.time+=t,this.isClient||(this.hour=(this.hour+t/60)%24),this.updateWorld(t)):this.time+=t*.3,this.net&&this.net.update(t),this.render(t),e)for(let i of this.huds)i.update(t);this.menu.update(),ye.endFrame()}simulate(t,e=.05){for(let i=0;i<t/e;i++)this.time+=e,this.frame++,this.updateWorld(e),ye.endFrame()}updateWorld(t){this.shake=Math.max(0,this.shake-t*2),this.runTimers();let e=!this.isClient;e?(Math.random()<t*.01&&(this.wind.target=this.wind.dir+(Math.random()-.5)*1.6),this.wind.dir+=Ze(this.wind.target-this.wind.dir)*t*.05,this.wind.str=(.8+.2*Math.sin(this.time*.03))*this.weather.windMul(),this.weather.update(t)):this.weather.updateVisual(t);let i=this.localPlayers[0],n=i.worldPos(new v);this.cursed=le(this.cursed||0,this.world.cursedness(n.x,n.z),t*.5);let r=this.hour<5.5||this.hour>20;r!==this.wasNight&&(this.wasNight!==void 0&&e&&this.sayAll(r?"night":"day",[],r?"ghost":"good"),this.wasNight=r),this.isNight=r;for(let c of this.localPlayers){c.interactTarget=this.findInteract(c),c.input.use()&&!c.station&&c.dead<=0&&!c.ui&&c.interact(c.interactTarget),this.anchorHold(c,t),c.update(t),c.input.map()&&!c.ui&&(c.chartOpen=!c.chartOpen,c.hud.showChart(c.chartOpen)),c.chartOpen&&this.frame%30===0&&c.hud.drawChart();let u=c.input.treasureMap()&&!c.ui;u!==c.tmapOpen&&(c.tmapOpen=u,c.hud.showTreasure(u))}for(let c of this.players)c.local||c.updateRemote(t);let o=this.time;for(let c of this.ships)c.update(t,o);if(e){for(let c of this.ais)c.update(t);this.shipCollisions(t);for(let c=this.ships.length-1;c>=0;c--){let u=this.ships[c];if(u.dead){u===this.playerShip&&this.onPlayerShipLost(),this.removeShip(u);continue}u!==this.playerShip&&u.style!=="player"&&this.nearestPlayerDist(u.x,u.z)>1100&&this.removeShip(u)}}this.updateBalls(t);for(let c of this.skeletons)c.alive&&c.update(t);e&&(this.skeletons=this.skeletons.filter(c=>c.alive?this.nearestPlayerDist(c.worldPos(Sn).x,Sn.z)>170?(c.remove(),!1):!0:!1));for(let c of this.sharks)c.alive&&c.update(t);e&&(this.sharks=this.sharks.filter(c=>c.alive?!0:(c.remove(),!1)));for(let c of this.serpents)c.update(t);e&&(this.serpents=this.serpents.filter(c=>c.alive?!0:(c.remove(),!1))),this.updateLoot(t),e&&this.spawner(t),this.streamProps();for(let c of this.nearProps)c.kind==="totem"&&c.lit&&Math.random()<t*8&&this.fx.burst(new v(c.x,c.y+4.3,c.z),1,"ghost");for(let c of this.world.wrecks)!c.seen&&Math.hypot(c.x-n.x,c.z-n.z)<200&&(c.seen=!0);for(let c of this.merchants)c.fig.animate(t,0,0),n.distanceTo(c.pos)<12&&(c.fig.root.rotation.y=Math.atan2(n.x-c.pos.x,n.z-c.pos.z)-Math.PI/2);let a=this.playerShip;if(a&&!a.dead){let c=this.localPlayers.some(u=>u.ship===a);if(Math.random()<t*.6&&_t.play("creak",c?1:.3),a.speed>1.5&&this.frame%2===0){let u=a.fwd,d=-u.z,f=u.x;for(let g of[-1,1])this.fx.burst(Sn.set(a.x+u.x*10+d*g*3.4,Me(a.x,a.z,o),a.z+u.z*10+f*g*3.4),1,"wake",{vx:d*g*1.5,vz:f*g*1.5});if(this.fx.burst(Sn.set(a.x-u.x*14,Me(a.x,a.z,o),a.z-u.z*14),1,"wake"),a.speed>4.5)for(let g of[-1,1])this.fx.burst(Sn.set(a.x+u.x*12.5+d*g*1.6,Me(a.x+u.x*12,a.z+u.z*12,o)+.4,a.z+u.z*12.5+f*g*1.6),2,"spray",{vx:d*g*2.5+u.x*a.speed*.6,vz:f*g*2.5+u.z*a.speed*.6})}if(a.holes&&a.holes.length&&this.frame%3===0){let u=a.holes[Math.floor(Math.random()*a.holes.length)],d=a.grid,f=u%d.sx,g=Math.floor(u/d.sx)%d.sz,x=Math.floor(u/(d.sx*d.sz)),m=d.toLocal(f,x,g);m.z*=.9;let p=a.toWorld(m);this.fx.burst(p,2,"spray",{vx:0,vz:-Math.sign(m.z)*2*Math.cos(a.yaw)})}e&&(a.leaks>0&&!this.leakWarned&&(this.leakWarned=!0,this.sayAll("leak",[],"bad")),a.leaks===0&&(this.leakWarned=!1),a.water>.35&&!this.floodWarned&&(this.floodWarned=!0,this.sayAll("flooding",[],"bad")),a.water<.2&&(this.floodWarned=!1),a.fires.size>0&&!this.fireWarned&&(this.fireWarned=!0,this.sayAll("fire",[],"bad")),a.fires.size===0&&(this.fireWarned=!1))}let l=0;for(let c of this.ships){let u=0;for(let d of c.fires.keys()){if(u++>40)break;if(Math.random()>.35)continue;let f=c.grid,g=d%f.sx,x=Math.floor(d/f.sx)%f.sz,m=Math.floor(d/(f.sx*f.sz)),p=f.toLocal(g,m,x),w=c.toWorld(p.clone());this.fx.burst(w,1,"fire"),Math.random()<.15&&this.fx.burst(w,1,"smoke"),this.distToCam(w)<40&&l++;for(let _ of this.localPlayers)_.ship===c&&_.pos.distanceTo(p)<.9&&Math.random()<t*4&&_.hurt(4,"fire")}}this.chooseMusic();let h=i;_t.ambience({speed:a&&h.ship===a?a.speed/9:0,wind:this.wind.str*(h.ship?1:.5),under:h.under,high:h.pos.y>8&&h.ship,fire:l,rain:this.weather.rain}),!this.isClient&&this.frame%600===0&&Li.store(this)}anchorHold(t,e){let i=t.interactTarget;if(i&&i.kind==="station"&&i.st.type==="anchor"&&i.st.ship.anchor&&t.input.useHeld()){t.raiseT=(t.raiseT||0)+e,Math.random()<e*8&&_t.play("ratchet",.8),t.raiseT>2.4&&(this.act(t,{a:"anchor",s:i.st.ship.netId,v:!1}),i.st.ship.anchor=!1,t.raiseT=0);return}t.raiseT=0}chooseMusic(){let t=this.localPlayers[0],e=t.worldPos(new v),i=this.isNight?"night":"day",n=this.playerShip,r=this.world.islandAt(e.x,e.z,10);r&&!t.ship?i=r.kind==="outpost"?"outpost":r.kind==="cursed"?"cursed":this.isNight?"night":"island":r&&r.kind==="outpost"?i="outpost":this.cursed>.5?i="cursed":!this.isNight&&n&&n.speed<2&&(i="calm"),this.skeletons.some(o=>o.state==="chase"||o.kind==="captain")&&(i="battle");for(let o of this.ships)o.style!=="player"&&!o.sinking&&Math.hypot(o.x-e.x,o.z-e.z)<260&&(i=o.style==="ghost"?"ghost":"battle");this.serpents.length&&(i="battle"),ci.set(i)}render(t){let e=_d(this.hour,this.cursed||0);this.weather.tint(e),this.palette=e,this.night=e.night;let i=this.sky.mat.uniforms;i.uTop.value.copy(e.top),i.uHor.value.copy(e.hor),i.uSun.value.copy(e.sunDir),i.uSunCol.value.copy(e.sun),i.uNight.value=e.night*(1-this.weather.cover*.8),i.uMoon.value.copy(e.moonDir),i.uTime.value=this.time;let n=e.sunDir.y>-.05;this.sun.color.copy(n?e.sun:new mt("#7088c0")),this.sun.intensity=(n?.4+e.light*1.8:.35)*(1-this.weather.cover*.6),this.hemi.color.copy(e.amb),this.hemi.groundColor.copy(e.amb).multiplyScalar(.45),this.hemi.intensity=.8+e.light*.8;let r=this.ocean.mat.uniforms;r.uTime.value=this.time,r.uAmp.value=br.amp,r.uSunDir.value.copy(n?e.sunDir:e.moonDir),r.uSunCol.value.copy(n?e.sun:new mt("#5a6a9a")).multiplyScalar(1-this.weather.cover*.7),r.uAmb.value.copy(e.amb).multiplyScalar(.9),r.uDeep.value.copy(e.sea),r.uShallow.value.copy(e.sea).lerp(new mt("#40c8c0"),Math.max(0,.75-e.night*.45-(this.cursed||0)*.3-this.weather.cover*.3)),r.uCursed.value=this.cursed||0;let o=0;for(let l of this.ships)o>=Mr||l.dead||(this.ocean.shipInv[o].copy(l.root.matrixWorld).invert(),o++);r.uShipN.value=o;let a=(l,h)=>Me(l,h,this.time);if(this.fx.update(t,a),this.debris.update(t,a),this.decor.update(t),this.flashes=(this.flashes||[]).filter(l=>(l.t-=t)>0),this.R.begin(),this.state==="title"||!this.localPlayers.length){let l=this.time*.05,h=this.titleShip||this.playerShip;this.titleShip&&this.titleShip.update(t,this.time),this.titleCam.position.set(h.x+Math.cos(l)*38,9+Math.sin(this.time*.3),h.z+Math.sin(l)*38),this.titleCam.lookAt(h.x,6,h.z),this.streamProps(this.titleCam.position),this.prepareView(this.titleCam,null,[0,0,1,1]),this.R.view(this.scene,this.titleCam,[0,0,1,1])}else{for(let l of this.players)!l.local||this.localPlayers.length>1?l.updateAvatar(t):l.avatar.root.visible=!1;for(let l of this.localPlayers){if(l.updateCamera(t),this.camOverride){let h=this.camOverride();l.camera.position.set(h.pos.x,h.pos.y,h.pos.z),l.camera.lookAt(h.look.x,h.look.y,h.look.z)}this.prepareView(l.camera,l,l.rect),this.R.view(this.scene,l.camera,l.rect)}}this.R.end(this.settings.dither,this.weather.flash)}prepareView(t,e,i){let n=this.palette,r=e&&e.under;this.sky.mesh.position.copy(t.position);let o=le(650,260,(this.cursed||0)*.8)*this.weather.fogMul()*(r?.05:1);this.scene.fog.color.copy(r?new mt("#0a3a54"):n.fog),this.scene.fog.near=r?1:o*.2,this.scene.fog.far=o;let a=this.ocean.mat.uniforms;a.uCam.value.copy(t.position),a.uFog.value.copy(this.scene.fog.color),a.uFogNear.value=this.scene.fog.near,a.uFogFar.value=this.scene.fog.far,this.ocean.mesh.position.set(Math.round(t.position.x/8)*8,0,Math.round(t.position.z/8)*8),this.fx.mat.uniforms.uFog.value.copy(this.scene.fog.color),this.fx.mat.uniforms.uFogFar.value=this.scene.fog.far,this.fx.mat.uniforms.uScale.value=i[3]*this.R.h*.9;let l=n.sunDir.y>-.05?n.sunDir:n.moonDir,h=72/1024,c=t.position;this.sun.target.position.set(Math.round(c.x/h)*h,0,Math.round(c.z/h)*h),this.sun.position.copy(this.sun.target.position).addScaledVector(l,120),this.sun.target.updateMatrixWorld();for(let u of this.clouds){let d=u.userData;d.a+=6e-5,u.position.set(c.x+Math.cos(d.a)*d.r,d.h,c.z+Math.sin(d.a)*d.r),u.material.color.copy(n.hor).lerp(new mt("#ffffff"),.6-n.night*.5-this.weather.cover*.4),u.material.opacity=1-n.night*.6}this.lightPool.begin();for(let u of this.ships)if(!u.dead)for(let d of u.lightPts)this.lightPool.add(u.toWorld(d.p,new v),d.col,1.6,d.r);for(let u of this.nearLights||[])this.lightPool.add(u.pos,u.col,1.8,14);for(let u of this.flashes)this.lightPool.src.push(u);this.lightPool.end(t,n.night);for(let u of this.world.islands)u.mesh.visible=Math.hypot(u.cx-c.x,u.cz-c.z)-u.r<this.scene.fog.far+50;this.decor.prepare(c),this.weather.prepare(t)}flash(t,e,i,n,r=.15){(this.flashes=this.flashes||[]).push({pos:t.clone(),color:e,intensity:i,range:n,t:r,always:!0})}shakeAt(){return this.shake}streamProps(t){if(this.frame%15!==0)return;let e=t?[t]:this.localPlayers.map(n=>n.camera.position),i=this.localPlayers.map(n=>n.worldPos(new v));this.nearLights=[];for(let n of this.world.props){let r=1e9;for(let o of e)r=Math.min(r,Math.hypot(n.x-o.x,n.z-o.z));if(r<260&&!n.grid&&!n.gone){let o=pd(n);if(!o)continue;if(o.buildAll(),n.diff){for(let[a,l]of n.diff)o.setIdx(a,l);o.flush(9999)}o.group.position.set(n.x,n.y,n.z),n.grid=o,n.rad=Math.max(o.sx,o.sz)*j/2+.3,n.top=o.sy*j,o.log=n.diff=n.diff||new Map,this.scene.add(o.group)}else r>320&&n.grid&&(this.scene.remove(n.grid.group),n.grid.dispose(),n.grid=null);if((n.light||n.lit)&&r<120&&!n.gone){let o=n.kind==="hut"?2:n.kind==="totem"?4:2.6;this.nearLights.push({pos:new v(n.x,n.y+o,n.z+(n.kind==="hut"?3.5:0)),col:n.kind==="totem"?n.lit?"#80ffb0":"#40ff90":"#ffc060"})}}this.nearProps=this.world.props.filter(n=>n.grid&&i.some(r=>Math.hypot(n.x-r.x,n.z-r.z)<40));for(let n of this.world.props)n.grid&&n.grid.flush(4)}propBlocks(t,e,i){for(let n of this.nearProps)if(!(Math.abs(n.x-t)>n.rad||Math.abs(n.z-i)>n.rad)&&n.grid.solidAt(t-n.x,e+.5-n.y,i-n.z))return!0;return!1}closestPlayer(t,e){let i=null,n=e;for(let r of this.players){if(r.dead>0)continue;let o=r.worldPos(Sn).distanceTo(t);o<n&&(n=o,i=r)}return i}nearestPlayerDist(t,e){let i=1e9;for(let n of this.players){let r=n.worldPos(Sn);i=Math.min(i,Math.hypot(r.x-t,r.z-e))}return i}distToCam(t){let e=1e9;for(let i of this.localPlayers)e=Math.min(e,i.camera.position.distanceTo(t));return this.localPlayers.length?e:this.titleCam.position.distanceTo(t)}distToShip(t,e=this.localPlayers[0]){let i=e.worldPos(Sn);return Math.hypot(i.x-t.x,i.z-t.z)}findInteract(t){if(t.dead>0||t.station||t.climb)return null;let e=t.eyeWorld(new v),i=t.lookDir(new v),n=null,r=1e9,o=new v,a=(l,h,c)=>{let u=e.distanceTo(l);if(u>h)return;o.subVectors(l,e).normalize();let d=o.dot(i);if(d<.72&&u>1.2)return;let f=u*(2-d);f<r&&(r=f,n=c)};for(let l of this.ships)if(!(l.dead||l.style!=="player"||this.distToShip(l,t)>30))for(let h of l.stations){let c=l.toWorld(new v(h.x,h.y,h.z)),u;h.type==="anchor"?u=l.anchor?["anchorRaise"]:["anchorDrop"]:h.type==="ammo"?u=["crateLabel",{k:"st_ammo"},l.ammo]:h.type==="planks"?u=["crateLabel",{k:"st_planks"},l.planks]:h.type==="food"?u=["crateLabel",{k:"st_food"},l.food]:u=["stationLabel",{k:"st_"+h.type}],h.user&&h.user!==t&&(u=["busy",{k:"st_"+h.type}]),a(c,h.type==="cannon"?2.2:2.6,{kind:"station",st:h,label:u})}if(t.swim)for(let l of this.ships){if(l.dead||l.sinking||this.distToShip(l,t)>25)continue;let h=t.ship===l?t.pos.clone():l.toLocal(t.worldPos(new v));for(let c of l.ladders)if(Math.abs(h.x-c.x)<2.5&&Math.abs(h.z-c.z)<2.5)return{kind:"ladder",s:l,L:c,label:["ladder"]}}for(let l of this.loot)l.gone||l.kind==="coins"||l.carried||a(l.world(new v),2.8,{kind:"loot",L:l,label:["grabItem",{k:"loot_"+l.kind}]});for(let l of this.merchants){let h=l.pos.clone();h.y+=1.2,a(h,3.4,{kind:"merchant",m:l,label:t.carry?["sell"]:["talk"]})}for(let l of this.nearProps)(l.kind==="barrel"||l.kind==="crate")&&l.isl.kind==="outpost"?a(new v(l.x,l.y+1,l.z),2.5,{kind:"supply",pr:l,label:["restockHint"]}):l.loot&&!l.looted&&l.kind==="barrel"&&!l.gone?a(new v(l.x,l.y+1,l.z),2.5,{kind:"lootbarrel",pr:l,label:["grabItem",{k:"loot_supplies"}]}):l.kind==="totem"&&!l.lit&&!l.gone&&a(new v(l.x,l.y+3.5,l.z),3.2,{kind:"totem",pr:l,label:["lightTotem"]});return n}};Object.assign(Cr.prototype,Hd,Vd,Wd);window.addEventListener("load",()=>{window.game=new Cr});})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2024 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
