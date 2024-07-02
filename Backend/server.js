import express from "express";
const app = express();
const port = process.env.PORT || 3000;
// app.get("/", (req, res) => {
//   res.send("server is ready");
// });

// list of 5 jokes

app.get("/api/jokes", (req, res) => {
  const jokes = [
    {
      id: 1,
      title: "1st joke",
      content:
        "टीचर- ताजमहल किसने बनवाया? स्टूडेंट- जी, कारीगर ने! टीचर- मेरा मतलब बनवाया किसने था? स्टूडेंट- जी, ठेकेदार ने…!!! 😂🤣",
    },
    {
      id: 2,
      title: "2nd joke",
      content:
        "भाई: बहन पानी दे दो। बहन: खुद ले ले। भाई: दे दो न। बहन: दोबारा बोला तो थप्पड़ पड़ेगा। भाई: जब थप्पड़ मारने आओगी तो पानी ले आना। 😂🤣",
    },
    {
      id: 3,
      title: "3rd joke",
      content:
        "टीचर: बहुवचन किसे कहते है? स्टूडेंट: जब बहू अपने ससुराल वालो को खरी-खोटी सुनाती है तो उसे बहु वचन कहते है। अध्यापक जी बेहोश होते होते बचे। 😂🤣",
    },
    {
      id: 4,
      title: "4th joke",
      content:
        "बहन की विदाई पर छोटा भाई: पापा दीदी रो रही है लेकिन जीजू तो नहीं रो रहे। पापा: बेटी दीदी गेट तक रोएगी और जीजू तो जिंदगी भर रोएंगे…!!!😂🤣",
    },
    {
      id: 5,
      title: "5th joke",
      content:
        "अकबर: बीरबल हम अनारकली को क्यों नहीं ढूंढ पा रहे हैं? बीरबल: क्योंकि हम मुगल हैं गूगल नहीं…😂😂🤣",
    },
  ];
  res.send(jokes);
});

app.listen(port, () => {
  console.log(`server at http://localhost:${port} `);
});
