// import './config/env';

import app from './app.js';

const PORT = Number(process.env.PORT || 4000);

app.listen(PORT, () => {
  console.log(`✅ Express API running on port ${PORT}`);
});
