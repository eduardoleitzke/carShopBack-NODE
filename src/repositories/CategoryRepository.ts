import Category from "../models/category";

interface ICreateCategoryDTO {
    name: string;
    description: string;
}

export class CategoriesRepository {
    private categories: Category[];

    constructor() {
        this.categories = [];
    }

    create({ description, name }: ICreateCategoryDTO) {
        const category = new Category();
        Object.assign(category, {
            name,
            description,
            created_at: new Date(),
        });
        this.categories.push(category);
    }

    list(): Category[] {
        return this.categories;
    }

    veryfiByName(name: string) {
        const isAlreadyExists = this.categories.find(
            (category) => category.name === name
        );
        return isAlreadyExists;
    }
}
