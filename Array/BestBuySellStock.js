// The problem gives you stock prices for each day. You can buy once and sell once, and you must buy before you sell. The goal is maximum profit. 
// Example
// prices = [7, 1, 5, 3, 6, 4]
// Best choice:
// Buy  → 1
// Sell → 6

// Profit = 6 - 1 = 5
// So answer:
// 5



// let nums = [7, 1, 5, 3, 6, 4]
// let lowest = Infinity
// let profit = 0;

// function BuySell(prices){

//     for(let i=0; i<prices.length; i++){
//         lowest = Math.min(lowest, prices[i])
//         profit = Math.max(profit, prices[i]- lowest)
//     }
//    return profit

// }
// console.log(BuySell(nums))


// Day	Price	Minimum so far	Profit
// 1	7	7	7−7=07-7=0s
// 2	1	1	1−1=01-1=0
// 3	5	1	5−1=45-1=4
// 4	3	1	3−1=23-1=2
// 5	6	1	6−1=56-1=5 <------------Profit
// 6	4	1	4−1=34-1=3

			
// function maxProfit(prices) {
//   let minPrice = Infinity;
//   let maxProfit = 0;

//   for (let price of prices) {
//     // Find cheapest buying price
//     if (price < minPrice) {
//       minPrice = price;
//     }

//     // Calculate today's profit
//     let profit = price - minPrice;

//     // Keep the maximum profit
//     if (profit > maxProfit) {
//       maxProfit = profit;
//     }
//   }

//   return maxProfit;
// }

// console.log(maxProfit([7, 1, 5, 3, 6, 4]));




function maxProfit(prices) {

  // STEP 1:
  // Assume the minimum buying price is Infinity.
  // Any actual price in the array will be smaller than Infinity.
  // This helps us find the cheapest price while looping.
  let minPrice = Infinity;

  // STEP 2:
  // Initially, the maximum profit is 0.
  // If we cannot make a profit, we return 0.
  let maxProfit = 0;

  // STEP 3:
  // Visit each stock price one by one.
  // 'price' represents today's stock price.
  for (let price of prices) {

    // STEP 4:
    // Check whether today's price is cheaper than
    // the cheapest buying price we have seen so far.
    if (price < minPrice) {

      // If today's price is cheaper, update minPrice.
      // This becomes our best buying price so far.
      minPrice = price;
    }

    // STEP 5:
    // Calculate the profit if we sell at today's price.
    // Profit = Selling price - Buying price.
    let profit = price - minPrice;

    // STEP 6:
    // Compare today's profit with the maximum profit
    // we have found so far.
    if (profit > maxProfit) {

      // If today's profit is greater, save it.
      maxProfit = profit;
    }
  }

  // STEP 7:
  // After checking all prices, return the highest profit.
  return maxProfit;
}

// Test the function with the given stock prices.
console.log(maxProfit([7, 1, 5, 3, 6, 4]));

// Output: 5
