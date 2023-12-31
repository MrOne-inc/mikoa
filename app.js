const express = require('express');
const app = express();

const jsonData = {
  data: [
    {
      id: 0,
      region_name: 'Arusha',
      districts: [
        { id: 0, name: 'Arumeru', region_id: 0 },
        { id: 1, name: 'Arusha Mjini', region_id: 0 }
      ]
    },
    {
      id: 1,
      region_name: 'BUKOBA',
      districts: [
        { id: 0, name: 'Muleba', region_id: 2 },
        { id: 2, name: 'Karagwe', region_id: 1 }
      ]
    }
  ]
};

app.get('/regions', (req, res) => {
  res.json(jsonData);
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
