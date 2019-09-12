import fetch from 'isomorphic-unfetch';
import React from "react" /*eslint-disable-line */

const SERVER_URL = process.env.SERVER_URL

export function call(url, method, data) {
	// const serverUrl = `${SERVER_URL}${url}`
	return fetch(url, {
		method: method,
		credentials: 'include',
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(data)
	})
		.then(parseJSON)
		.then(checkHttpStatus)
		.catch(error => {
			// No response from the server
			if (typeof error.response === 'undefined') {
				error.response = {
					status: 408,
					message: 'Cannot connect to the server'
				}
			}
			throw error
		})
}

export function callUpload(url, method, formData) {
	const serverUrl = `${SERVER_URL}${url}`
	return fetch(serverUrl, {
		method: method,
		credentials: 'include',
		headers: {
			Accept: 'application/json'
		},
		body: formData
	})
		.then(parseJSON)
		.then(checkHttpStatus)
		.catch(error => {
			// No response from the server
			if (typeof error.response === 'undefined') {
				error.response = {
					status: 408,
					message: 'Cannot connect to the server'
				}
			}
			throw error
		})
}

export function fetchImageBase64(url) {
	return fetch(url, {
		method: 'GET',
		credentials: 'include',
	})
		.then(response => {
			if (response.status >= 200 && response.status < 300) {
				return response.blob()
			}
			else{
				const error = new Error(response.statusText)
				error.status = response.status
				throw error
			}
		})
		.then(blob => {
			const promise = new Promise((resolve, reject) => {
				const reader = new FileReader()
				reader.readAsDataURL(blob)
				reader.onloadend = function() {
					const base64Data = reader.result
					const base64Image = base64Data.replace(/^data:application\/octet-stream/, 'data:image/jpg')
					resolve(base64Image)
		 		}
			})
			return promise
		})
		.catch(error => {
			throw error
		})
}

export function get(url) {
	return call(url, 'GET')
}

export function post(url, data) {
	return call(url, 'POST', data)
}

export function put(url, data) {
	return call(url, 'PUT', data)
}

export function del(url, data) {
	return call(url, 'DELETE', data)
}

export function patch(url, data) {
	return call(url, 'PATCH', data)
}

export function postUpload(url, formData) {
	return callUpload(url, 'POST', formData)
}

export function patchUpload(url, formData) {
	return callUpload(url, 'PATCH', formData)
}

export function checkHttpStatus(response) {
	if (response.status >= 200 && response.status < 300) {
		return response.body
	} else {
		var error = new Error(response.statusText)
		error.response = response.body
		error.status = response.status
		throw error
	}
}

export function parseJSON(response) {
	return response
		.json()
		.then(function (body) {
			return {
				status: response.status,
				statusText: response.statusText,
				body: body
			}
		})
		.catch(function (e) {
			return response
		})
}

export const storage = {
	get: function (k) {
		return localStorage.getItem(k)
	},
	set: function (k, v) {
		localStorage.setItem(k, v)
	},
	remove: function (k) {
		localStorage.removeItem(k)
	}
}
