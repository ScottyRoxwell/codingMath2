export const vector = {
  _x: 1,
  _y: 0,

  create: function(x,y){
    let obj = Object.create(this);
    obj.setX(x);
    obj.setY(y);
    return obj;
  },
  setX: function(value){
    this._x = value;
  },
  getX: function(){
    return this._x;
  },
  setY: function(value){
    this._y = value;
  },
  getY: function(){
    return this._y;
  },
  setAngle: function(angle){
    let length = this.getLength();
    this._x = Math.cos(angle) * length;
    this._y = Math.sin(angle) * length;
  },
  getAngle: function(){
    return Math.atan2(this._y,this._x);
  },
  setLength: function(length){
    let angle = this.getAngle();
    this._x = Math.cos(angle) * length;
    this._y = Math.sin(angle) * length;
  },
  getLength: function(){
    return Math.sqrt(Math.pow(this._x,2) + Math.pow(this._y,2));
  },
  add: function(v2){
    return vector.create(this._x + v2.getX(), this._y + v2.getY());
  },
  subtract: function(v2){
    return vector.create(this._x - v2.getX(), this._y - v2.getY());
  },
  multiply: function(val){
    return vector.create(this._x * val, this._y * val);
  },
  divide: function(val){
    return vector.create(this._x / val, this._y / val);
  },
  addTo: function(v2){
    this._x += v2.getX();
    this._y += v2.getY();
  },
  subtractFrom: function(v2){
    this._x -= v2.getX();
    this._y -= v2.getY();
  },
  multiplyBy: function(v2){
    this._x *= v2.getX();
    this._y *= v2.getY();
  },
  divideBy: function(v2){
    this._x /= v2.getX();
    this._y /= v2.getY();
  }

}