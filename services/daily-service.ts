class StockService {
  /**
   * Get all daily stocks
   * @returns
   */
  async getAllDailyStocks() {
    const request = await fetch(`https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=IBM&apikey=${process.env.NEXT_PUBLIC_API_KEY}`);
    const json = await request.json();

    return json;
  }
}

export default new StockService();
