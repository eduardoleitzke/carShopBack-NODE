import { Router } from "express";

import { CategoriesRepository } from "../repositories/CategoryRepository";

const categoriesRoutes = Router();
const categoriesRepository = new CategoriesRepository();
categoriesRoutes.post("/", (req, res) => {
    const { name, description } = req.body;
    const alreadyExists = categoriesRepository.veryfiByName(name);
    if (alreadyExists)
        return res.status(400).json({ error: "Already exists!" });
    categoriesRepository.create({ name, description });
    return res.status(201).json();
});

categoriesRoutes.get("/", (req, res) => {
    const listAll = categoriesRepository.list();
    res.status(201).json(listAll);
});

export { categoriesRoutes };
