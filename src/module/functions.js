module.exports = {
  findNestedObjectValue: function (object) {
    let value = findObject(object);

    function findObject(object) {
      if (object === null || object === undefined) {
        return undefined;
      }

      const keys = Object.keys(object);

      for (let index in keys) {
        let value = object[keys[index]];
        if (typeof value === 'object') {
          return findObject(value);
        }
        if (value !== undefined) {
          return value;
        }

        return undefined;

      }
    }
    return value;
  },

  addObjects: function (o, properties) {

    let arr = {};
    const obj = o;

    properties.forEach(e => {
      let val = obj[e];
      let isArray = Array.isArray(val);

      if (isArray && e !== 'author_name') {
        let x = val[0];
        val = x;
      }

      if (typeof val !== 'object' && val !== null) {
        arr[e] = val;
      }

      //adds small, medium, url property if not null to img object
      if (typeof val === 'object' && val !== null) {

        if (val.hasOwnProperty('formats') && val.hasOwnProperty('url')) {

          let imgVal = this.checkForResizedImage(val);
          let originalImgSizeURL = val.url;
          imgVal.url = originalImgSizeURL;

          if (val.hasOwnProperty('alternativeText')) {

            let alt = val.alternativeText;
            imgVal.alt = alt;
          }
          arr[e] = imgVal;
        } else if (e === 'author_name') {

          let authorName = this.checkAuthorNames(val);
          arr[e] = authorName;

        } else {
          arr[e] = this.findNestedObjectValue(val);
        }
      }
    });

    return arr;
  },

  checkForResizedImage: function (imgObject) {
    let imgFormatObject = imgObject.formats;
    let imgProperties = Object.keys(imgFormatObject);

    return this.addObjects(imgFormatObject, imgProperties);
  },
  checkAuthorNames: function (authorObject) {
    let authorProperties = Object.keys(authorObject);
    let authors = {};
    authorProperties.forEach(el => {
      let author = authorObject[el];
      let name = author.name;
      if (name !== null) {
        authors[el] = name;
      }
    })
    return authors;
  },
};
