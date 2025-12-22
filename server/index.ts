// import './config/env';


import app from './app.js'; // ini untuk dilocalhost
// import app from './app.ts'; // ini untuk diserver

const PORT = Number(process.env.PORT || 4000);

app.listen(PORT, () => {
  console.log(`✅ Express API running on port ${PORT}`);
});
