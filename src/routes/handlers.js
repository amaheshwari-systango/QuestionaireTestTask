// imports for auth handlers and redirection
import auth from './../auth'

export const log = (message) => () => {
  console.log(message)
}

export const signinWithTokenAndRedirect = ({ path }) => (nextState, replace, callback) => {
  console.log('signinWithTokenAndRedirect()')
  const redirect = () => {
    replace(nextState.location.query.path || path)
    callback()
  }
  const redirectToNestMapping = (access_token) => {
    replace(nextState.location.query.path || '/properties/' + nextState.location.query.property_id + '/nestdevices?access_token=' + nextState.location.query.access_token)
    callback()
  }
  (nextState.location.query.access_token ? auth.signinWithToken(nextState.location.query.token).then(redirectToNestMapping(nextState), redirectToNestMapping)
  : (nextState.location.query.path === 'accept/invite') ? auth.acceptInvite(nextState.location.query.invite_token).then(auth.signinWithToken(nextState.location.query.token)).then(redirect, redirect) : auth.signinWithToken(nextState.location.query.token).then(redirect, redirect))
}

export const requireAuthenticatedOrRedirect = ({ path }) => (nextState, replace, callback) => {
  console.log('requireAuthenticatedOrRedirect()')
  auth.authenticate()
    .then(({ profile }) => {
      if (!/\/welcome/.test(nextState.location.pathname) && !profile.tos_accepted) {
        replace('/welcome/profile')
      }
      callback()
    }, (err) => {
      console.log(err)
      replace(path)
      callback()
    })
}

export const checkAuthentication = ({path}) => (prevState, nextState, replace, callback) => {
  console.log('checkAuthentication()')
  auth.authenticate()
    .then(({ profile }) => {
      if (!/\/welcome/.test(nextState.location.pathname) && !profile.tos_accepted) {
        replace('/welcome/profile')
      }
      callback()
    }, (err) => {
      console.log(err)
      replace(path)
      callback()
    })
}

export const requireGuestOrRedirect = ({ path }) => (nextState, replace, callback) => {
  console.log('requireGuestOrRedirect()')
  auth.authenticate()
    .then(() => {
      replace(path)
      callback()
    }, (err) => {
      console.log(err)
      callback()
    })
}

