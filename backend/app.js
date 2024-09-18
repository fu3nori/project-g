// app.js

const express = require('express');
const mysql = require('mysql'); // mysqlモジュールをインポート
const app = express();
const port = 5000;

// 環境変数からデータベース接続情報を取得
const dbConfig = {
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || '',
  database: process.env.DB_NAME || 'project_g',
};

// データベース接続プールを作成
const pool = mysql.createPool(dbConfig);

// ルートエンドポイント
app.get('/', (req, res) => {
  res.send('Hello from Express!');
});

// データベースからデータを取得するエンドポイントの例
app.get('/users', (req, res) => {
  pool.query('SELECT * FROM users', (error, results) => {
    if (error) {
      console.error('Database query error:', error);
      res.status(500).send('データベースエラーが発生しました');
    } else {
      res.json(results);
    }
  });
});

// サーバーの起動
app.listen(port, () => {
  console.log(`Backend server is running on http://localhost:${port}`);
});
