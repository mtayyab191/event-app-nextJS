function handler(req, res) {
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
    console.log(newMessage);

    res
      .status(201)
      .josn({ message: "Successfully store", message: newMessage });
  }
}

export default handler;
