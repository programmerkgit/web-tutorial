import axios, { AxiosResponse } from 'axios';


function logger(response: AxiosResponse<any>) {
  console.log('--------------------------');
  console.log('# Headers');
  console.log('--------------------------');
  console.log(response.headers);
  console.log('--------------------------');
  console.log('# Data');
  console.log('--------------------------');
  console.log(response.data);
  console.log('--------------------------');
  console.log('# Data as json');
  console.log('--------------------------');
  console.log(JSON.stringify(response.data));
  console.log('--------------------------');
  console.log('# Data as table');
  console.log('--------------------------');
  console.table(response.data);
  console.log('--------------------------');
  console.log('# Status');
  console.log('--------------------------');
  console.log(response.status);
  console.log('--------------------------');
  console.log('#Status text');
  console.log('--------------------------');
  console.log(response.statusText);
}

function get() {
  axios.get('http://localhost:3000/blogs').then(response => {
    logger(response);
  });
}

function getById(id: string) {
  axios.get(`http://localhost:3000/blogs/${ id }`).then(response => {
    logger(response);
  });
}

function deleteById(id: string) {
  axios.delete(`http://localhost:3000/blogs/${ id }`).then(response => {
    logger(response);
  });
}


function post() {
  axios.post(`http://localhost:3000/blogs`, {
    name: 'kubo',
  }).then(response => {
    logger(response);
  });
}

function update(id: string) {
  axios.post(`http://localhost:3000/blogs/${ id }`, {
    name: 'kubo-2',
  }).then(response => {
    logger(response);
  });
}


get();
