import { CategoriesRepository } from "../repositories/CategoryRepository";

interface IRequest {
    name: string;
    description: string;
}

export class CreateCategoryService {
    constructor(private categoriesRepository: CategoriesRepository) {}
    execute({ description, name }: IRequest) {
        const alreadyExists = this.categoriesRepository.veryfiByName(name);
        if (alreadyExists) throw new Error("Category already exists!");
        this.categoriesRepository.create({ name, description });
    }
}
