import { Router } from "express";

import { CategoriesRepository } from "../repositories/CategoryRepository";
import { CreateCategoryService } from "../services/CreateCategoryService";

const categoriesRoutes = Router();
const categoriesRepository = new CategoriesRepository();
categoriesRoutes.post("/", (req, res) => {
    const { name, description } = req.body;
    const createCategoryService = new CreateCategoryService(
        categoriesRepository
    );
    createCategoryService.execute({ description, name });
    return res.status(201).json();
});

categoriesRoutes.get("/", (req, res) => {
    const listAll = categoriesRepository.list();
    res.status(201).json(listAll);
});

export { categoriesRoutes };
