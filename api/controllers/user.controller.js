export const signout = async (req, res, next) => {
  res.clearCookie('access_token', {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',

  }).status(200).json('User have been signed out');
}