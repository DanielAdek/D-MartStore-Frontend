import Axios from 'axios';
import toastr from 'toastr';
import SweetAlert from 'sweetalert';

const token = localStorage.getItem('x-auth-t');

export const Promise = (method, path, data) => {
  const url = `http://localhost:8081/api/v1${path}`;
  const headers = token ? { "Access-Control-Allow-Origin": "*", "Authorization" : token } : { "Access-Control-Allow-Origin": "*"};
  const object = (method.toUpperCase() === 'GET' || method.toUpperCase() === 'DELETE') ? { method: method.toUpperCase(), url, headers } : { method: method.toUpperCase(), url, headers, data };
  return Axios(object);
}

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
    toastr.options.timeOut = 6200
    toastr.options.preventDuplicates = true;
    toastr.options.rtl = true;
    toastr.success(message)
  },
  info: message => {
    toastr.options.closeButton = true
    toastr.options.timeOut = 7200
    toastr.options.preventDuplicates = true;
    toastr.options.progressBar = true;
    toastr.options.rtl = true;
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