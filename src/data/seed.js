import { data } from "./recipes";

export async function seedRecipes() {
  const response = await fetch("https://restapi.fr/api/ctApp");
  const recipes = await response.json();

  if (recipes.length < 20) {
    await fetch("https://restapi.fr/api/ctApp", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
  }
}
