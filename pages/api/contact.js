import { MongoClient } from "mongodb";

async function handler(req, res) {
  if (req === "Post") {
    const { name, email, message } = req.body;

    if (
      !email ||
      !email.includes("@") ||
      !name ||
      name.trim() === "" ||
      !message ||
      message.trim() === ""
    ) {
      res.status(422).josn({ message: "Invalide input." });
      return;
    }

    // store in database

    const newMessage = {
      name,
      email,
      message,
    };

    let client;

    try {
      client = await MongoClient.connect(
        "mongodb+srv://my-blog-nextjssite:XZO2NmgLLdJzECyL@cluster0.jcox9gv.mongodb.net/my-site?retryWrites=true&w=majority"
      );
    } catch (error) {
      res.status(500).josn({ message: "Could not connect to database." });
      return;
    }

    const db = client.db();

    try {
      const result = await db.collection("Messages").insertOne(newMessage);
      newMessage.id = result.insertedId;
    } catch (error) {
      client.close();
      res.status(500).josn({ message: "Storage message failed." });
      return;
    }

    client.close();

    res
      .status(201)
      .josn({ message: "Successfully stored Message!", message: newMessage });
  }
}

export default handler;
