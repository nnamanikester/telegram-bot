import { Markup } from "telegraf";

export const investmentKeyboard = Markup.inlineKeyboard([
  Markup.button.callback("đ Invest", "invest"),
]);

export const authKeyboard = Markup.inlineKeyboard([
  Markup.button.callback("đ Login", "login"),
  Markup.button.callback("đ Register", "register"),
]);

export const extrasKeyboard = Markup.keyboard(
  ["âšī¸ Support", "â FAQs", "đ Website"],
  { columns: 2 }
)
  .resize()
  .oneTime();

export const planCategoryKeyboard = Markup.inlineKeyboard([
  Markup.button.callback("đ Stock", "stock-plans"),
  Markup.button.callback("đ Crypto", "crypto-plans"),
]);

export const stockPlansKeyboard = Markup.inlineKeyboard(
  [
    Markup.button.callback("NFP", "buyStock-NFPs"),
    Markup.button.callback("Blockchain ETFs", "buyStock-BETFs"),
    Markup.button.callback("Mutual Funds", "buyStock-MFs"),
    Markup.button.callback("Comodity Trade", "buyStock-CT"),
    Markup.button.callback("âŠī¸ Go Back", "invest"),
  ],
  { columns: 2 }
);

export const cryptoPlansKeyboard = Markup.inlineKeyboard(
  [
    Markup.button.callback("BTC", "startInvestment-BTC"),
    Markup.button.callback("ETH", "startInvestment-ETH"),
    Markup.button.callback("SOL", "startInvestment-SOL"),
    Markup.button.callback("LTC", "startInvestment-LTC"),
    Markup.button.callback("BNB", "startInvestment-BNB"),
    Markup.button.callback("ADA", "startInvestment-ADA"),
    Markup.button.callback("âŠī¸ Go Back", "invest"),
  ],
  { columns: 2 }
);

export const startInvestmentKeyboard = Markup.inlineKeyboard(
  [
    Markup.button.callback("Verify Payment â", "upload-proof"),
    Markup.button.callback("âŠī¸ Back Plans", "invest"),
  ],
  { columns: 1 }
);

export const copyMessageKeyboard = Markup.inlineKeyboard([
  Markup.button.callback("đ Copy Address", "copy-message"),
]);
