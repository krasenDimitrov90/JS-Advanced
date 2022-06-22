function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);

   function onClick() {
      let inputElements = document.querySelector('#inputs textarea');
      let resturantsData = JSON.parse(inputElements.value);
      let resturants = {};

      for (let line of resturantsData) {
         let tokens = line.match(/\w+/g);
         let resturant = tokens.shift();
         if (!resturants.hasOwnProperty(resturant)) {
            resturants[resturant] = { avarageSalary: 0 };
         }
         let tokensL = tokens.length;
         for (let i = 0; i < tokensL; i += 2) {
            let worker = tokens[i];
            let salary = Number(tokens[i + 1]);
            resturants[resturant][worker] = salary;
            resturants[resturant].avarageSalary += salary;
         }
      }

      let resturantsKeys = Object.keys(resturants);
      let bestResturant = '';
      let bestRestAvrgSalary = 0;
      for (let resturant of resturantsKeys) {
         let currentAvarageSalary = resturants[resturant].avarageSalary;
         if (currentAvarageSalary > bestRestAvrgSalary) {
            bestRestAvrgSalary = currentAvarageSalary;
            bestResturant = resturant;
         }
      }

      let sorted = Object.entries(resturants[bestResturant])
         .splice(1)
         .sort((a, b) => {
            return b[1] - a[1];
         })
      let bestSalary = sorted[0][1];
      bestRestAvrgSalary /= sorted.length
      let bestResturantPElement = document.querySelector('#bestRestaurant p')
      bestResturantPElement.textContent = `Name: ${bestResturant} Average Salary: ${bestRestAvrgSalary.toFixed(2)} Best Salary: ${bestSalary.toFixed(2)}`


      let result = '';
      for (let [worker, workerSalary] of sorted) {
         result += `Name: ${worker} With Salary: ${workerSalary} `
      }
      result.trim();
      let workersPElement = document.querySelector('#workers p')
      workersPElement.textContent = result;
   }
}