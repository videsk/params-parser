/*
** Class for add params to URL and parse
** Designed for Videsk™
 */

class paramsToURL {

  constructor() {
    this.parameters = '?';
    this.arrayParams = [];
  }

  _parse(key, value){
    return { key, value };
  }

  _clean(){
    // Clean all variables
    this.parameters = '?';
    this.arrayParams = [];
  }

  add(key, value) {
    // Add to temp array
    this.arrayParams.push(this._parse(key, value));
  }

  byObj(obj) {
    // Add various key and values through object
    Object.keys(obj).map(key => this.add(key, obj[key]));
  }

  byArray(key, array) {
    // Add various values with the same key
    array.map(e => this.add(key, e));
  }

  parse() {
    // Add parameters to URL
    this.arrayParams.map((e, i) => {
      this.parameters += `${e.key}=${e.value}`;
      if (i < (this.arrayParams.length - 1)) this.parameters += '&';
    });
    // Add to temp variable
    const temp = this.parameters;
    // Clean all
    this._clean();
    // Return parameters
    return temp;
  }
};

module.exports = paramsToURL;
