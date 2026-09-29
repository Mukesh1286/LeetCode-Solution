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

			
function maxProfit(prices) {
  let minPrice = Infinity;
  let maxProfit = 0;

  for (let price of prices) {
    // Find cheapest buying price
    if (price < minPrice) {
      minPrice = price;
    }

    // Calculate today's profit
    let profit = price - minPrice;

    // Keep the maximum profit
    if (profit > maxProfit) {
      maxProfit = profit;
    }
  }

  return maxProfit;
}

console.log(maxProfit([7, 1, 5, 3, 6, 4]));

