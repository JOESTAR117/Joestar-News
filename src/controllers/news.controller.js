import { createService, findAllService } from "../services/news.service.js";

const create = async (req, res) => {
  try {
    const { title, text, banner } = req.body;

    if (!title || !text || !banner) {
      res.status(400).send({ message: "Submit all fields for registration" });
    }

    await createService({
        title,
        text,
        banner,
        id: "objectidfake1"
    })

    res.status(201).send("ok");
  } catch (err) {
    res.status(500).send(err.message);
  }
};
const findAll = (req, res) => {
  const news = [];
  res.send(news);
};

export default { create, findAll };
