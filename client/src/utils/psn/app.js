const myNpsso =
  'x5e4djW6qXpstjI8ItY9BAuovvAaEWx2I3NlGxw1sJ826D96dNSfDmUnCUIHpdjt';

const acessCode = await exchangeNpssoForCode(npsso);

const authorization = await exchangeCodeForAccessToken(accessCode);

const now = new Date();
const expirationDate = new Date(
  now.getTime() + authorization.expiresIn * 1000
).toISOString();


const isAccessTokenExpired = new Date(expirationDate).getTime() < now.getTime();

if (isAccessTokenExpired) {
 
  const updatedAuthorization = await exchangeRefreshTokenForAuthTokens(
    authorization.refreshToken
  );

  n.
}