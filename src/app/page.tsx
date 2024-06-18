import React from 'react';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <header>
          <h1>サイトのタイトル</h1>
          <nav>
            <ul>
              <li><a href="#">ホーム</a></li>
              <li><a href="#">アバウト</a></li>
              <li><a href="#">サービス</a></li>
              <li><a href="#">コンタクト</a></li>
            </ul>
          </nav>
        </header>
        <div className="container">
          <aside className="sidebar">
            <h2>サイドバー</h2>
            <ul>
              <li><a href="#">リンク1</a></li>
              <li><a href="#">リンク2</a></li>
              <li><a href="#">リンク3</a></li>
            </ul>
          </aside>
          <main className="content">
            <h2>メインコンテンツ</h2>
            <p>ここにメインコンテンツが表示されます。</p>
          </main>
        </div>
        <footer>
          <p>&copy; 2024 あなたの会社名. 全著作権所有.</p>
        </footer>
    </main>
  );
}
