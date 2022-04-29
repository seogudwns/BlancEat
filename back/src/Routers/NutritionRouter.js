import { Router } from "express";
import { NutritionService } from "../Services/NutritionService.js";

const nutritionRouter = Router();

nutritionRouter.post('/nutrition', async (req, res, next) => {
    try {
        const { foodList } = req.body;

        if (!foodList) {
            throw new Error("식사 정보를 입력해주세요.")
        }

        const getFoodList = await NutritionService.getNutritionalFacts({foodName: foodList});

        if (getFoodList.errorMessage) {
            throw new Error(getFoodList.errorMessage);
        }

        res.status(200).send(getFoodList);

    } catch (error) {
        next(error);
    }
})


nutritionRouter.get('/nutrition_search/:keyword', async function (req, res, next) {
    try {
        const foodList = await NutritionService.findFoodName({ keyword: req.params.keyword });

        if (foodList.errorMessage) {
            throw new Error(foodList.errorMessage);
        }

        res.status(200).send(foodList);
    } catch (error) {
        next(error);
    }
})


export { nutritionRouter };