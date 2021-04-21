// First Method (~YAY)
var inputElement = doc.createElement('input');
inputElement.type = 'url'; // this is important
// inputElement.value = url;
if (!inputElement.checkValidity()) {
    throw new TypeError('Invalid URL');
}

// Second Method (NAY)
function validURL(str) {
	  var pattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
		      '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // domain name
		      '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
		      '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
		      '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
		      '(\\#[-a-z\\d_]*)?$','i'); // fragment locator
	  return !!pattern.test(str);
}

// Third Method (Vimium) [includes guessing protocol, chrome:// pages, ...]
  // usage:
  if (isUrl(q)) {
      window.location=createFullUrl(q);
  } else {
  // (...)
  }
