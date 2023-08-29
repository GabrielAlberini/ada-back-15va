const stockDB = require("./STOCK_DB")

const main = () => {
  const stock = stockDB.allStock()
  const category = stockDB.getCategory("comestibles")
  const product = stockDB.getProduct("bebidas", "cervezas", "artesanal")
  const totalCategoryAmount = stockDB.getTotalCategoryAmount("ferreteria")
  const totalStockAmount = stockDB.getTotalAmount()

  // console.log(stock)
  // console.log(category)
  // console.log(product)
  // console.log(totalCategoryAmount)
  console.log(`The total count is: ${totalStockAmount}`)
}

main()