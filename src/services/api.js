// Retorna um objeto já configurado para ser eviado no fetch baseado na URL da api

export const URL_API = 'https://dogsapi.origamid.dev/json';

export function POST_TOKEN(body) {
  return {
    url: URL_API + '/jwt-auth/v1/token',
    options: {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    },
  };
}

export function POST_TOKEN_VALIDADO(token) {
  return {
    url: URL_API + '/jwt-auth/v1/token/validate',
    options: {
      method: 'POST',
      headers: {
        Authorization: 'Bearer ' + token,
      },
    },
  };
}

export function GET_USER(token) {
  return {
    url: URL_API + '/api/user',
    options: {
      method: 'GET',
      headers: {
        Authorization: 'Bearer ' + token,
      },
    },
  };
}

export function POST_USER(body) {
  return {
    url: URL_API + '/api/user',
    options: {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    },
  };
}
