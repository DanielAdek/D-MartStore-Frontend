import Axios from 'axios';
import toastr from 'toastr';
import SweetAlert from 'sweetalert';


export const Promise = (method, path, data, contentType) => {
  const token = localStorage.getItem('x-auth-t');
  // const url = `http://localhost:8082/api/v1${path}`; // localhost
  // const url = `http://ec2-34-242-208-37.eu-west-1.compute.amazonaws.com:9091/api/v1${path}`; // aws public ip
  const url = `https://dms.dacoding.com/api/v1${path}`; // custom domain
  const formDataRequestHeader = { "Access-Control-Allow-Origin": "*", "Authorization" : token, "Content-Type": "multipart/form-data", "Accept": "*/*" };
  const applicationJSONHeader = { "Access-Control-Allow-Origin": "*", "Authorization" : token, "Content-Type": "application/json"}
  const headers = token && contentType === "multipart" ? formDataRequestHeader : token ? applicationJSONHeader : { "Access-Control-Allow-Origin": "*", "Content-Type": "application/json" };
  const object = (method.toUpperCase() === 'GET' || method.toUpperCase() === 'DELETE') ? { method: method.toUpperCase(), url, headers } : { method: method.toUpperCase(), url, data, headers };
  return Axios(object);
}

export const formatDate = dateObject => {
	const [day, month, date, year] = new Date(dateObject).toDateString().split(' ');
	console.log(day);
	return `${date} ${month}, ${year}`;
};

export const removeDuplicateFromArray = array => {
	return Array.from(new Set(array));
};

export const ImageToBase64 = (file, callback) => {
  let reader = new FileReader();
  if (file && file.type.match('image.*')) {
    reader.readAsDataURL(file);
  }
  reader.onload = function () {
    callback(reader.result);
  };
  reader.onerror = function (error) {
      console.log('Error: ', error);
  };
}

export const truncate = (str, num) => {
  if (str.length <= num) {
    return str
  }
  return str.slice(0, num) + '...'
}

export const generateCode = (charLen) => {
  let result = '';
  const alphaNum = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  for (let i = 0; i <= charLen; i += 1) {
    result += alphaNum[Math.floor(Math.random() * alphaNum.length)];
  }
  return result.toUpperCase();
};

export const Alert = {
  error: message => {
    toastr.options.closeButton = true
    toastr.options.timeOut = 7200
    toastr.options.preventDuplicates = true;
    toastr.options.progressBar = true;
    toastr.options.rtl = true;
    toastr.error(message)
  },
  success: message => {
    toastr.options.closeButton = true
    toastr.options.timeOut = 2400
    toastr.options.preventDuplicates = true;
    toastr.success(message)
  },
  info: message => {
    toastr.options.closeButton = true
    toastr.options.timeOut = 7200
    toastr.options.preventDuplicates = true;
    toastr.info(message)
  }
}

export const handleErr = error => {
  if (error.response) {
    if (error.response.data.data) {
      return Alert.error(error.response.data.data.message);
    }
    return Alert.error(error.response.data.message);
  }
  return Alert.error(error.message);
}

export const handleError = error => {
  if (error.response) {
    if (error.response.data.data.error && error.response.data.data.error.message) {
      return SweetAlert(error.response.data.data.error.details.operationStatus, error.response.data.data.error.message, 'info')
    }
    if (error.response.data.data) {
      return SweetAlert(error.response.data.data.error.details.operationStatus, error.response.data.data.error.details.message, 'error');
    }
  }
  return SweetAlert('', error.message, 'error')
}