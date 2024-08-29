import express, { Request, Response } from "express";

const app = express();
const port = 8080;

app.get("/", async (req: Request, res: Response) => {
  // url blobl
  const url = req.query.url as string;
  if (!url) {
    res.send("Please provide url");
    return;
  }
  // make image for download in jpg from  url blob
  try {
    const image = await fetch(url);
    const arrayBuffer = await image.arrayBuffer();
    // convert buffer to blob
    const buffer = Buffer.from(arrayBuffer);
    // set headers
    res.setHeader("Content-Type", "image/jpeg");
    res.setHeader("Content-Disposition", "attachment; filename=download.jpg");

    res.send(buffer);
  } catch (err) {
    console.error(err);
    res.send("Error");
  }
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
