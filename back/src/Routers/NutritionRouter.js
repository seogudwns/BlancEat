import { Router } from "express";
import { NutritionService } from "../Services/NutritionService.js";

const nutritionRouter = Router();

nutritionRouter.get('/nutrition', async (req, res, next) => {
    try {
        const { foodList } = req.body;
        console.log(foodList);
        const result = [];

        if (!foodList) {
            throw new Error("식사 정보를 입력해주세요.")
        } else {
            let getFoodList;
            
            for (let i = 0; i < foodList.length; i++) {
                getFoodList = await NutritionService.getNutritionalFact({ foodName: foodList[i] });
                result.push(getFoodList);
            }

            if (getFoodList.errorMessage) {
                throw new Error(getFoodList.errorMessage);
            }
        }
        


        res.status(200).send(result);

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