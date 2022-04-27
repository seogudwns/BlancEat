import { Schema, model } from "mongoose";

const nutritionSchema = new Schema(
  {
    id: {
      type: ObjectId,
      required: true,
    },
    foodName: {
      type: String,
      required: true,
    },
    weight: {
        type: float,
        required: true,
    },
    unit: {
        type: string,
        required: true,
    },
    energy: {
        type: float,
        required: true,
    },
    protein: {
        type: float,
        required: true,
    },
    fat: {
        type: float,
        required: true,
    },
    carbon: {
        type: float,
        required: true,
    },
    sugar: {
        type: float,
        required: true,
    },
    fiber: {
        type: float,
        
    },
    Ca: {
        type: float,
        
    },
    vitA: {
        type: float,
        
    },
    fe: {
        type: float,
        
    },
    na: {
        type: float,
        
    },
    zn: {
        type: float,
        
    },
    niacin: {
        type: float,
        
    },
    vitE: {
        type: float,
        
    },
    vitC: {
        type: float,
        
    },
    folate: {
        type: float,
        
    },
    vitB6: {
        type: float,
        
    },

  },

);

const nutritionModel = model("Nutrition", nutritionSchema);

export { nutritionModel };
