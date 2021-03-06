const URL = 'http://localhost:3000/api/v1/users'

export default class UsersApi {

  static signUp(payload){
    const data = {user: {
      firstname: payload.firstname,
      lastname: payload.lastname,
      username: payload.username,
      password: payload.password,
      avatar: payload.avatar
      }
    };
    return fetch(URL, {
      headers: {
        'accept': 'application/json',
        'content-type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify(data)
    })
    .then(resp => resp.json())
  }

  static login(payload){
    var url = 'http://localhost:3000/api/v1/login'
    return fetch(url, {
      headers: {
        'accept': 'application/json',
        'content-type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify(payload)
    })
    .then(resp => resp.json())
  }

  static showPublicUser(userID){
    return fetch('http://localhost:3000/api/v1/publicShow' + `/${userID}`).then(resp => resp.json());
  };

  static showCurrentUser(){
    return fetch('http://localhost:3000/api/v1/user/show', {
      headers: {
      'Authorization': `Bearer ${localStorage.what_you_looking_at}`,
      'accept': 'application/json',
      'content-type': 'application/json'
    },
    method: 'GET',
  }).then(resp => resp.json());
  };

  static friends(){
    return fetch('http://localhost:3000/api/v1/friends', {
      headers: {
        'Authorization': `Bearer ${localStorage.what_you_looking_at}`,
        'accept': 'application/json',
        'content-type': 'application/json'
      },
      method: 'GET',
    })
    .then(resp => resp.json());
  };

  static sendFriendRequest(to_user_id){
    const payload = {
      request: {
        to_user_id: to_user_id
      }
    };
    return fetch('http://localhost:3000/api/v1/send-friend-request', {
      headers: {
        'Authorization': `Bearer ${localStorage.what_you_looking_at}`,
        'accept': 'application/json',
        'content-type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify(payload)
    })
    .then(resp => resp.json());
  };

  static updateFriendRequest(payload){
    const data = {
      request: payload
    };

    return fetch('http://localhost:3000/api/v1/update-request', {
      headers: {
        'Authorization': `Bearer ${localStorage.what_you_looking_at}`,
        'accept': 'application/json',
        'content-type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify(data)
    })
    .then(resp => resp.json())
  };

  static usersParties(){
    return fetch('http://localhost:3000/api/v1/users-parties', {
      headers: {
        'Authorization': `Bearer ${localStorage.what_you_looking_at}`,
        'accept': 'application/json',
        'content-type': 'application/json'
      },
      method: 'GET'
    })
    .then(resp => resp.json());
  }

  static createParty(payload){
    const data = {
      party : {
        title: payload.partyInfo
      }
    };

    return fetch('http://localhost:3000/api/v1/parties', {
      headers: {
        'Authorization': `Bearer ${localStorage.what_you_looking_at}`,
        'accept': 'application/json',
        'content-type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify(data)
    })
    .then(resp => resp.json());
  }

  static inviteToParty(payload){

    const data = {
      party: {
        party_id: payload.party_id,
        invited_user_id: payload.user_id
      }
    }

    return fetch('http://localhost:3000/api/v1/invitetoparty', {
      headers: {
        'Authorization': `Bearer ${localStorage.what_you_looking_at}`,
        'accept': 'application/json',
        'content-type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify(data)
    })
    .then(resp => resp.json());
  }

  static massInviteToParty(payload){

    const data = {
      party: {
        party_id: payload.party_id,
        users_arr: payload.users_arr
      }
    }

    return fetch('http://localhost:3000/api/v1/mass_invite', {
      headers: {
        'Authorization': `Bearer ${localStorage.what_you_looking_at}`,
        'accept': 'application/json',
        'content-type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify(data)
    })
    .then(resp => resp.json());
  }

} // end of class
