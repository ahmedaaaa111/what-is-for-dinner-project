window.addEventListener("DOMContentLoaded", () => {

    // ====== ALL RECIPES ======
    var recipes = [
{
        name: "Creamy Spaghetti Carbonara",
        description: "A classic Italian pasta dish with eggs, cheese, and pancetta",
        image: "gourmet spaghetti carbonara pasta dish, professional food photography, appetizing",
        imgCover: "./img/photo-1612874742237-6526221588e3.avif",
        prepTime: "15 min",
        cookTime: "20 min",
        totalTime: 35,
        servings: "4 people",
        difficulty: "Easy",
        category: "Italian",
        ratingsAverage: 4.8,
        ratingsQuantity: 234,
        ingredients: ["400g spaghetti pasta", "200g pancetta or guanciale, diced", "4 large eggs", "100g Pecorino Romano cheese, grated", "50g Parmesan cheese, grated", "Freshly ground black pepper", "Salt for pasta water"],
        instructions: ["Bring a large pot of salted water to boil. Cook spaghetti according to package directions until al dente.", "While pasta cooks, heat a large skillet over medium heat. Add diced pancetta and cook until crispy, about 5-7 minutes.", "In a bowl, whisk together eggs, grated Pecorino Romano, and Parmesan cheese. Add plenty of freshly ground black pepper.", "Reserve 1 cup of pasta cooking water before draining. Drain pasta and immediately add to the skillet with pancetta.", "Remove skillet from heat. Quickly pour in egg mixture while tossing pasta vigorously. Add reserved pasta water as needed to create a creamy sauce.", "Serve immediately with extra cheese and black pepper on top. Enjoy your authentic carbonara!"],
        nutrition: {
            calories: "520 kcal",
            protein: "28g",
            carbs: "62g",
            fat: "18g",
            fiber: "3g",
            sodium: "680mg"
        },
        tips: ["Use room temperature eggs for a smoother sauce consistency", "Work quickly when mixing eggs with hot pasta to avoid scrambling", "Reserve extra pasta water - it's the secret to perfect creaminess", "Freshly grated cheese makes all the difference in flavor", "Never add cream - authentic carbonara is made with eggs only"]
    }, {
        name: "Honey Garlic Salmon",
        description: "Pan-seared salmon with a sweet and savory glaze",
        image: "honey garlic salmon with vegetables, gourmet presentation, food photography",
        imgCover: "./img/photo-1467003909585-2f8a72700288.avif",
        prepTime: "10 min",
        cookTime: "15 min",
        totalTime: 25,
        servings: "2 people",
        difficulty: "Easy",
        category: "Seafood",
        ratingsAverage: 4.9,
        ratingsQuantity: 187,
        ingredients: ["2 salmon fillets (6oz each)", "3 tablespoons honey", "2 tablespoons soy sauce", "4 cloves garlic, minced", "1 tablespoon olive oil", "1 teaspoon fresh ginger, grated", "Sesame seeds for garnish", "Green onions, sliced"],
        instructions: ["Pat salmon fillets dry with paper towels. Season with salt and pepper.", "In a small bowl, whisk together honey, soy sauce, minced garlic, and grated ginger.", "Heat olive oil in a large skillet over medium-high heat.", "Place salmon fillets skin-side up in the pan. Cook for 4-5 minutes until golden.", "Flip salmon and pour honey garlic sauce over the top. Cook for another 4-5 minutes.", "Garnish with sesame seeds and sliced green onions. Serve with steamed vegetables or rice."],
        nutrition: {
            calories: "380 kcal",
            protein: "35g",
            carbs: "28g",
            fat: "14g",
            fiber: "0g",
            sodium: "720mg"
        },
        tips: ["Don't overcook salmon - it should be slightly pink in the center", "Use wild-caught salmon for best flavor and nutrition", "Let the sauce caramelize slightly for deeper flavor", "Pair with steamed broccoli or asparagus for a complete meal"]
    }, {
        name: "Thai Green Curry",
        description: "Vibrant and aromatic curry with vegetables and coconut milk",
        image: "thai green curry with vegetables, vibrant and aromatic, asian cuisine, food photography",
        imgCover: "./img/photo-1455619452474-d2be8b1e70cd.avif",
        prepTime: "15 min",
        cookTime: "25 min",
        totalTime: 40,
        servings: "4 people",
        difficulty: "Intermediate",
        category: "Asian",
        ratingsAverage: 4.7,
        ratingsQuantity: 312,
        ingredients: ["2 tablespoons green curry paste", "400ml coconut milk", "300g chicken breast, sliced", "1 red bell pepper, sliced", "100g green beans", "1 eggplant, cubed", "2 tablespoons fish sauce", "1 tablespoon palm sugar", "Fresh Thai basil leaves"],
        instructions: ["Heat a large pot or wok over medium heat. Add curry paste and cook for 1 minute until fragrant.", "Add half the coconut milk and stir to combine with the curry paste.", "Add sliced chicken and cook until no longer pink, about 5 minutes.", "Add remaining coconut milk, vegetables, fish sauce, and palm sugar.", "Simmer for 15-20 minutes until vegetables are tender and sauce has thickened.", "Stir in fresh Thai basil leaves. Serve hot with jasmine rice."],
        nutrition: {
            calories: "420 kcal",
            protein: "26g",
            carbs: "22g",
            fat: "26g",
            fiber: "5g",
            sodium: "890mg"
        },
        tips: ["Adjust spice level by using more or less curry paste", "Add vegetables in stages based on cooking time needed", "Fresh Thai basil is essential for authentic flavor", "Use full-fat coconut milk for richest, creamiest sauce"]
    }, {
        name: "Classic Beef Burger",
        description: "Juicy homemade burger with all the fixings",
        image: "gourmet beef burger with lettuce tomato cheese, professional food photography",
        imgCover: "./img/photo-1568901346375-23c9450c58cd.avif",
        prepTime: "15 min",
        cookTime: "20 min",
        totalTime: 35,
        servings: "4 people",
        difficulty: "Easy",
        category: "American",
        ratingsAverage: 4.6,
        ratingsQuantity: 421,
        ingredients: ["500g ground beef (80/20)", "4 burger buns", "4 slices cheddar cheese", "Lettuce leaves", "Tomato slices", "Red onion, sliced", "Pickles", "Burger sauce or condiments"],
        instructions: ["Divide ground beef into 4 equal portions. Form into patties, making a small indent in the center.", "Season patties generously with salt and pepper on both sides.", "Heat a grill or skillet over high heat. Cook patties for 4-5 minutes per side for medium.", "Add cheese slices in the last minute of cooking and cover to melt.", "Toast burger buns lightly on the grill or in a pan.", "Assemble burgers with lettuce, tomato, onion, pickles, and your favorite sauce."],
        nutrition: {
            calories: "650 kcal",
            protein: "38g",
            carbs: "42g",
            fat: "35g",
            fiber: "2g",
            sodium: "920mg"
        },
        tips: ["Don't press down on burgers while cooking - keeps them juicy", "Make indent in center to prevent burger from puffing up", "Let patties rest for 2-3 minutes before serving", "Toast buns for better texture and flavor"]
    }, {
        name: "Mediterranean Quinoa Bowl",
        description: "Healthy bowl with quinoa, vegetables, and tahini dressing",
        image: "mediterranean quinoa bowl with vegetables and tahini, healthy food, colorful presentation",
        imgCover: "./img/photo-1546069901-ba9599a7e63c.avif",
        prepTime: "20 min",
        cookTime: "35 min",
        totalTime: 55,
        servings: "2 people",
        difficulty: "Easy",
        category: "Mediterranean",
        ratingsAverage: 4.5,
        ratingsQuantity: 156,
        ingredients: ["1 cup quinoa", "Cherry tomatoes, halved", "Cucumber, diced", "Red onion, sliced", "Kalamata olives", "Feta cheese, crumbled", "Fresh parsley", "Tahini dressing"],
        instructions: ["Rinse quinoa thoroughly. Cook according to package directions, usually 15 minutes.", "While quinoa cooks, prepare all vegetables and set aside.", "For tahini dressing: mix tahini, lemon juice, garlic, and water until smooth.", "Fluff cooked quinoa with a fork and let cool slightly.", "Arrange quinoa in bowls. Top with tomatoes, cucumber, onion, and olives.", "Sprinkle with feta cheese and fresh parsley. Drizzle with tahini dressing."],
        nutrition: {
            calories: "480 kcal",
            protein: "18g",
            carbs: "58g",
            fat: "20g",
            fiber: "10g",
            sodium: "540mg"
        },
        tips: ["Rinse quinoa well to remove bitter coating", "Let quinoa cool before adding fresh ingredients", "Make extra tahini dressing - it keeps well in the fridge", "Add grilled chicken or chickpeas for extra protein"]
    }, {
        name: "Chicken Tikka Masala",
        description: "Rich and creamy Indian curry with tender chicken pieces",
        image: "chicken tikka masala curry with rice, indian food, professional photography",
        imgCover: "./img/photo-1565557623262-b51c2513a641.avif",
        prepTime: "20 min",
        cookTime: "30 min",
        totalTime: 50,
        servings: "4 people",
        difficulty: "Intermediate",
        category: "Asian",
        ratingsAverage: 4.7,
        ratingsQuantity: 389,
        ingredients: ["600g chicken breast, cubed", "1 cup plain yogurt", "2 tablespoons tikka masala paste", "400ml coconut cream", "1 onion, diced", "4 cloves garlic, minced", "2 tablespoons ginger, grated", "400g canned tomatoes", "Fresh cilantro for garnish"],
        instructions: ["Marinate chicken in half the yogurt and 1 tablespoon tikka paste for at least 30 minutes.", "Heat oil in a large pan, cook marinated chicken until browned. Remove and set aside.", "In the same pan, sauté onion until soft. Add garlic and ginger, cook for 1 minute.", "Add remaining tikka paste and canned tomatoes. Simmer for 10 minutes.", "Stir in coconut cream and remaining yogurt. Add chicken back to the pan.", "Simmer for 15 minutes until sauce thickens. Garnish with cilantro and serve with rice."],
        nutrition: {
            calories: "450 kcal",
            protein: "38g",
            carbs: "24g",
            fat: "22g",
            fiber: "4g",
            sodium: "760mg"
        },
        tips: ["Marinate chicken overnight for deeper flavor", "Use full-fat coconut cream for richest sauce", "Adjust spice level by varying the tikka paste amount", "Serve with naan bread and basmati rice"]
    }, {
        name: "Margherita Pizza",
        description: "Classic Italian pizza with fresh mozzarella and basil",
        image: "margherita pizza with fresh basil, italian food, food photography",
        imgCover: "./img/photo-1574071318508-1cdbab80d002.avif",
        prepTime: "90 min",
        cookTime: "12 min",
        totalTime: 102,
        servings: "2 people",
        difficulty: "Intermediate",
        category: "Italian",
        ratingsAverage: 4.9,
        ratingsQuantity: 512,
        ingredients: ["300g pizza dough", "200g crushed tomatoes", "250g fresh mozzarella", "Fresh basil leaves", "2 tablespoons olive oil", "2 cloves garlic, minced", "Salt and pepper to taste", "Parmesan cheese for topping"],
        instructions: ["Let pizza dough come to room temperature and rest for 1 hour.", "Preheat oven to maximum temperature (usually 250°C/480°F).", "Mix crushed tomatoes with olive oil, garlic, salt, and pepper for the sauce.", "Roll out dough on a floured surface to desired thickness.", "Spread tomato sauce, add torn mozzarella pieces, and drizzle with olive oil.", "Bake for 10-12 minutes until crust is golden. Top with fresh basil and parmesan."],
        nutrition: {
            calories: "580 kcal",
            protein: "24g",
            carbs: "68g",
            fat: "22g",
            fiber: "4g",
            sodium: "920mg"
        },
        tips: ["Use a pizza stone for crispier crust", "Don't overload with toppings - less is more", "Add basil after baking to keep it fresh", "Let dough rest properly for best texture"]
    }, {
        name: "Beef Tacos",
        description: "Flavorful Mexican tacos with seasoned ground beef",
        image: "beef tacos with toppings, mexican street food, food photography",
        imgCover: "./img/photo-1565299585323-38d6b0865b47.avif",
        prepTime: "15 min",
        cookTime: "20 min",
        totalTime: 35,
        servings: "4 people",
        difficulty: "Easy",
        category: "American",
        ratingsAverage: 4.6,
        ratingsQuantity: 278,
        ingredients: ["500g ground beef", "8 taco shells", "1 onion, diced", "2 tablespoons taco seasoning", "Shredded lettuce", "Diced tomatoes", "Shredded cheddar cheese", "Sour cream", "Salsa"],
        instructions: ["Heat a large skillet over medium-high heat. Cook ground beef until browned.", "Add diced onion and cook until softened, about 5 minutes.", "Stir in taco seasoning and 1/2 cup water. Simmer for 10 minutes.", "Warm taco shells according to package directions.", "Fill each shell with seasoned beef.", "Top with lettuce, tomatoes, cheese, sour cream, and salsa. Serve immediately."],
        nutrition: {
            calories: "420 kcal",
            protein: "26g",
            carbs: "32g",
            fat: "20g",
            fiber: "4g",
            sodium: "780mg"
        },
        tips: ["Drain excess fat from beef for healthier tacos", "Warm shells in oven for better texture", "Prepare all toppings before cooking beef", "Use ground turkey for a lighter option"]
    }
    ];


    function loadRandomRecipe() {
        var random = Math.floor(Math.random() * recipes.length);
        var r = recipes[random];

        document.getElementById("recipe-image").src = r.imgCover;
        document.getElementById("recipe-name").innerText = r.name;
        document.getElementById("recipe-description").innerText = r.description;
        document.getElementById("prep-time-display").innerText = r.prepTime;
        document.getElementById("cook-time-display").innerText = r.cookTime;
        document.getElementById("servings-display").innerText = r.servings;
        document.getElementById("difficulty-badge").innerText = r.difficulty;
        document.getElementById("category-badge").innerText = r.category;
        document.getElementById("rating-average").innerText = r.ratingsAverage;
        document.getElementById("rating-quantity").innerText = `(${r.ratingsQuantity} reviews)`;



        var ingredientsBox = document.querySelector(".ingredients-list-custom");
        ingredientsBox.innerHTML = "";
        r.ingredients.forEach((item, i) => {
            ingredientsBox.innerHTML += `
                <div class="ingredient-item d-flex align-items-start mb-3">
                    <span class="ingredient-number-custom me-3">${i + 1}</span>
                    <span class="text-dark">${item}</span>
                </div>
            `;
        });

        var instructionsBox = document.querySelector(".instructions-list-custom");
        instructionsBox.innerHTML = "";
        r.instructions.forEach((step, i) => {
            instructionsBox.innerHTML += `
                <div class="list-group-item d-flex align-items-start">
                    <span class="instruction-number-custom me-3">${i + 1}</span>
                    <span>${step}</span>
                </div>
            `;
        });

        document.getElementById("nutrition-calories").innerText = r.nutrition.calories;
        document.getElementById("nutrition-protein").innerText = r.nutrition.protein;
        document.getElementById("nutrition-carbs").innerText = r.nutrition.carbs;
        document.getElementById("nutrition-fat").innerText = r.nutrition.fat;
        document.getElementById("nutrition-fiber").innerText = r.nutrition.fiber;
        document.getElementById("nutrition-sodium").innerText = r.nutrition.sodium;

        var tipsBox = document.querySelector(".tips-container");
        tipsBox.innerHTML = "";
        r.tips.forEach(tip => {
            tipsBox.innerHTML += `
                <div class="p-3 bg-light-orange-custom d-flex align-items-center">
                    <div class="tip-check-icon me-3"><i class="fa-solid fa-check"></i></div>
                    <span class="text-dark">${tip}</span>
                </div>
            `;
        });

    }


    loadRandomRecipe();

    document.getElementById("try-another-btn").addEventListener("click", loadRandomRecipe);

});
