import store from './store'
import authState from './lib/authState'
import {apiRequest} from './models/requests'
import {SESSION_CHANGED} from './models/session'

const callbacks = {
  onReset: () => {
    store.dispatch({ type: 'RESET_STORE' }) // reset the whole store to blow up any data left from another user
  },
  onChanged: (authState) => {
    store.dispatch({ type: SESSION_CHANGED, auth: authState })
  }
}

const authApi = {
  renewToken: (sessionToken) =>
    store.dispatch(apiRequest({
      method: 'POST',
      path: '/tokens/renew2',
      token: sessionToken
    })).then(response => response.token),
  issueToken: (refreshToken) =>
    store.dispatch(apiRequest({
      method: 'POST',
      path: '/tokens/issue',
      body: {
        device_token: refreshToken
      }
    })).then(response => response.token),
  fetchProfile: (sessionToken) =>
    store.dispatch(apiRequest({
      method: 'GET',
      path: '/profile',
      token: sessionToken
    })).then(response => response.profile),
  createRefreshToken: (info, sessionToken) =>
    store.dispatch(apiRequest({
      method: 'POST',
      path: '/device_tokens',
      body: info,
      token: sessionToken
    })).then(response => response.device_token),
  invitationToken: (token) =>
    store.dispatch(apiRequest({
      method: 'POST',
      path: '/accept/invite',
      body: {
        token: decodeURI(token).split(' ').join('+'),
        accepted: true
      }
    })),
  destroyRefreshToken: (refreshToken, sessionToken) =>
    store.dispatch(apiRequest({
      method: 'DELETE',
      path: `/device_tokens/${refreshToken}`,
      token: sessionToken
    }))
}

const auth = authState(window, authApi, callbacks)

setInterval(() => auth.authenticate().then(({ token, profile, milestones }) => {
  // console.log('Authenticated', profile.email, token, milestones)
}, (_) => {
  // console.log('Not authenticated', error.toString())
}), 10 * 1000) // try authenticating on interval

export default auth
