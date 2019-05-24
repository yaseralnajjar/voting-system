import axios from 'axios'

let $backend = axios.create({
  baseURL: '/api',
  timeout: 5000,
  headers: { 'Content-Type': 'application/json' }
})

// Response Interceptor to handle and log errors
$backend.interceptors.response.use(function (response) {
  return response
}, function (error) {
  // eslint-disable-next-line
  console.log(error)
  return Promise.reject(error)
})

$backend.$fetchCandidates = () => {
  return $backend.get(`candidates/`)
    .then(response => response.data)
}

$backend.$vote = (voter, candidate) => {
  return $backend.post(`vote/`, voter, candidate)
    .then(response => response.data)
}

$backend.$confirmVoter = (voter) => {
  return $backend.get(`confirmVoter/`, voter)
    .then(response => response.data)
}

export default $backend
