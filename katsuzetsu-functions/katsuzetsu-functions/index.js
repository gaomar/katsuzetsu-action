const createHandler = require("azure-function-express").createHandler;
const express = require("express");
const Util = require("./util.js");
const {dialogflow, HtmlResponse} = require('actions-on-google');

const app = dialogflow({debug: false});

// スタート処理
app.intent('StartIntent', async (conv) => {
    // スプレッドシートから問題取得
    const katsuzetsu = await Util.getMondai();

    // ランダムで取得
    const wordIndex = Math.floor(Math.random() * katsuzetsu.length);
    const selKatsuzetsu = katsuzetsu[wordIndex];
    conv.contexts.set('game', 5, selKatsuzetsu);
    conv.ask(`それでは滑舌チェックをしましょう。${selKatsuzetsu.yomi}と言ってください。`);

    conv.ask(new HtmlResponse({
      url: `${process.env.VUE_URL}/katsuzetsu`,
      data: {
        katsuzetsu: selKatsuzetsu
      }
    }));

  });

  // 滑舌チェック
  app.intent('MainIntent', (conv, {any}) => {
    const context = conv.contexts.get('game');

    var myURL = `${process.env.VUE_URL}/katsuzetsu`;

    if (context.parameters.seikai === any) {
      conv.contexts.delete('game');
      conv.ask(`おめでとう！！凄く滑舌よかったですよ。　${context.parameters.yomi}　と言っているのがはっきり聞き取れました。続けて滑舌チェックをしますか？`);

      myURL = `${process.env.VUE_URL}/congratulation`

    } else {
      conv.ask(`すいません。滑舌が悪くて聞き取れませんでした。もう一度試してみましょう。`);

    }

    conv.ask(new HtmlResponse({
      url: myURL,
      data: {
        katsuzetsu: context.parameters
      }
    }));

  });

  // 起動時
  app.intent('welcome', (conv) => {
    conv.ask('こんにちは。滑舌チェックをしましょう。スタートボタンを押してください。');
    
    conv.ask(new HtmlResponse({
      url: process.env.VUE_URL,
      suppress: true
    }));  
    
  });

// functionsの名前を一致させておく
const expressApp = express();
expressApp.post('/api/katsuzetsu-functions', app);
module.exports = createHandler(expressApp);